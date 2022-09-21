import { TypeModifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  public productList:any;

  

  constructor(private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {

    this.getProduct();
    
   
  }


getProduct(){
  this.apiService.getProduct().subscribe(response=>{

    this.productList=response;

  });
}





// Deleting Product

removeItem(id:any){

  this.apiService.deleteProduct(id).subscribe(response=>{
    console.log(response);
   this.getProduct();

  })

}



updateItem(id:number){
  this.router.navigate(['updateProduct', id]);
}




}