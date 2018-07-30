import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../../_interfaces/product.interface';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productList: ProductInterface[];

  constructor() { }

  ngOnInit() {
  }

}
