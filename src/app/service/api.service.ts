import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  retrievedImage: any;

  base64Data: any;

  picByte: any;
  retrieveResonse: any;
  
  constructor(private httpClient: HttpClient) { }



private baseURL ="http://localhost:8094/api/productDetails";

  getProduct(){


    
    return this.httpClient.get<any>( "http://localhost:8094/api/productDetails/AllProducts")
    .pipe(map((res:any)=>{

         this.retrieveResonse = res;

          this.base64Data = this.retrieveResonse.picByte;

          this.picByte = 'data:image/jpeg;base64,' + this.base64Data;

      return res;
    }

    ))
  }



  // Delete Product

  deleteProduct(id:number): Observable<Object>{

    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


   
  


  //get product by id
  getProductById(id:number):Observable<Object>{

  return this.httpClient.get(`${this.baseURL}/${id}`)
}


}