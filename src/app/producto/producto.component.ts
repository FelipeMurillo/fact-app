import { Component, OnInit } from '@angular/core';
import { ProductoService } from './producto.service';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  providers: [ProductoService]
})
export class ProductoComponent implements OnInit {

  products: any[];
  constructor(private _service: ProductoService) { }


  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
  	this._service.get().subscribe(data => {
  		this.products = data;
  	});
  }

}
