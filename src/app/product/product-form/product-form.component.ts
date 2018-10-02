import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../_services/product.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Rx';
import { AlertService } from '../../_services';



@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

    @Input() allowMultiple: boolean;
    @Input() fileType: string;
    @Input() required: boolean;
    @Input() maxSizeInKb: number;
    @Output() onSelection = new EventEmitter<FileList>();

    DisplayedText: string = "";

    cat = {};
    subCat: any[] = [];
    product = {};

    fileList: any;

    productAddForm: FormGroup;

    getProduct = {
        id: '',
        serial_number: '',
        name: '',
        category_id: '',
        sub_category_id: '',
        purchase_price: '',
        selling_price: '',
        note: '',
        status: '',
        image: ''
    };

    constructor(
        public router: Router,
        private routeParams: ActivatedRoute,
        private http: Http,
        private dataService: ProductService,
        private alertService: AlertService
    ) { }

    ngOnInit() {

        /**
         * Check id
         * Verifica qual o valor do id na URL
         */
        this.routeParams.params.forEach((params: Params) => {
            let id: number = +params['id'];
            if (id) {
                this.edit(id);
            }
        });

        /**
         * FormGroup = productAddForm
         * https://angular.io/guide/reactive-forms
         * 8 - inputs
         * 1 - upload de arquivo
         */
        this.productAddForm = new FormGroup({
            //Validators
            //https://angular.io/guide/form-validation
            serial_number: new FormControl(""),
            name: new FormControl("", Validators.compose([Validators.required])),
            category: new FormControl("", Validators.compose([Validators.required])),
            subCategory: new FormControl(""),
            purchase_price: new FormControl("", Validators.compose([Validators.required])),
            selling_price: new FormControl("", Validators.compose([Validators.required])),
            note: new FormControl(""),
            status: new FormControl(""),
        });

        /**
         * Retorn o Json de categorias 
         * do Serviço Product
         * 
         * Vai popular o select
         * <select formControlName="category">
         */
        this.dataService.getCategory()
            .subscribe(data => {
                this.cat = data.cat;
            });

    }

    /**
     * @param id 
     * Captura o id da categoria e passa como parametro
     * atraves do evento => onchange Event.
     * https://www.w3schools.com/jsref/event_onchange.asp
     * 
     * buscar a subCategoria
     * para popular o select
     * <select formControlName="subCategory">
     */
    selectCat(id) {
        this.dataService.getSubCategory(id)
            .subscribe(data => {
                this.subCat = data.subCat;
            });
    }

    /**
     * @param val 
     * val => productAddForm
     * Salva os Inputs do formulario
     */
    save(val) {
        //função para tratar a inserção dos arquivos
        this.insertAction(val);
    }

    /**
     * @param val 
     * val => productAddForm
     * Trata a inserção dos arquivos.
    */
    insertAction(val) {

        let formData: FormData = new FormData();

        if (this.fileList != undefined) {
            let file: File = this.fileList[0];
            formData.append('file', file, file.name);
        }

        formData.append('serial_number', this.productAddForm.value.serial_number);
        formData.append('name', this.productAddForm.value.name);
        formData.append('category', this.productAddForm.value.category);
        formData.append('subCategory', this.productAddForm.value.subCategory);
        formData.append('purchase_price', this.productAddForm.value.purchase_price);
        formData.append('selling_price', this.productAddForm.value.selling_price);
        formData.append('note', this.productAddForm.value.note);
        formData.append('status', this.productAddForm.value.status);

        if (val.id == undefined) {
            this.dataService.save(formData)
                .subscribe(data => {
                    this.product = {};
                    this.alertService.success('Product Create successful', true);
                }, error => {
                    alert(error);
                });
        } else {
            formData.append('id', val.id);
            this.dataService.productUpdate(formData)
                .subscribe(data => {
                    this.alertService.success('Product Update successful', true);
                    //this.router.navigate(['/product']);
                }, error => {
                    alert(error);
                });
        }
    }

    /**
     * @param id 
     * Edição de Produto
     */
    edit(id) {
        this.DisplayedText = '';
        this.dataService.getProduct(id)
            .subscribe(data => {
                
                this.getProduct = data.product;
                let sub_category_id;
                
                if (this.getProduct.sub_category_id == null) {
                    sub_category_id = '';
                } else {
                    sub_category_id = this.getProduct.sub_category_id
                }

                this.product = {
                    id: this.getProduct.id,
                    serial_number: this.getProduct.serial_number,
                    name: this.getProduct.name,
                    category: this.getProduct.category_id,
                    subCategory: sub_category_id,
                    purchase_price: this.getProduct.purchase_price,
                    selling_price: this.getProduct.selling_price,
                    note: this.getProduct.note,
                    status: this.getProduct.status,
                    image: this.getProduct.image
                };

            });
    }

    /**
     * @event
     * The event occurs when the content of a form element, 
     * the selection, or the checked state have changed.
    */
    fileChange(event: any) {

        this.fileList = event.target.files;
        let hasFile = this.fileList && this.fileList.length > 0;

        if (hasFile) {

            var extension = this.fileList[0].name.substring(this.fileList[0].name.lastIndexOf('.'));

            // Only process image files.
            var validFileType = ".jpg , .png , .bmp";

            if (validFileType.toLowerCase().indexOf(extension) < 0) {
                alert("please select valid file type. The supported file types are .jpg , .png , .bmp");
                this.fileList = null;
                this.DisplayedText = "";
                return false;
            }

            if (this.fileList[0].size > 165535) {
                alert(`File size is more than 165 Kb`);
                this.fileList = null;
                this.DisplayedText = "";
                return false;
            }

            let multipleFile = this.fileList.length > 1;
            if (multipleFile) {
                this.DisplayedText = this.fileList.length + ' file(s) has been selected';
            }
            else {
                let file: File = this.fileList[0];
                this.DisplayedText = file.name;
            }

            this.onSelection.emit(this.fileList);

        }
    }

}
