import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ProductoService } from '../producto.service';
@Component({
  selector: 'app-producto',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProductoService]
})
export class CreateProductoComponent implements OnInit {
  productoForm: FormGroup;
	unidades: any[];
	codigos: any[];
  results: any[] = [];
  resultsFiltered: any[] = [];
  constructor(private fb: FormBuilder, private _service: ProductoService) { 
    
    this.productoForm = this.fb.group({
      CatalogoId: '',
      Codigo: '',
      Descripcion: '',
      Precio: 0,
      UnidadId:''

    });
  }

  ngOnInit() {
  	this.getcatalogos();
  }

  search(event) {
    this.resultsFiltered = this.filterCountry(event.query);      
  }

  filterCountry(query):any[] {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered : any[] = [];
        for(let i = 0; i < this.codigos.length; i++) {
            let country = this.codigos[i];
            if(this.codigos[i].Descripcion.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        console.log(filtered);
        return filtered;
  }

  getcatalogos() {
  	this._service.getGenerico('/producto/catalogos').subscribe(data => {
  		this.codigos = data.catCodigos;
      this.resultsFiltered =this.codigos;
  		this.unidades = data.catUnidades;
  	})
  }

  save(){
    console.log(this.productoForm.value);
    this.productoForm.value.CatalogoId =this.productoForm.value.CatalogoId.Id;
    this._service.guardar(this.productoForm.value, '').subscribe(data=> {

    });
  }

}
