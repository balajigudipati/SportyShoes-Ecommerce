import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  form: FormGroup;
private baseURL="http://localhost:8094/api/productDetails";

  id:any;
  public ProductList:any;
  constructor( private route: ActivatedRoute, private apiService:ApiService,private fb: FormBuilder,private httpClient:HttpClient) { 

    this.form = this.fb.group({
      id:this.id,
      productName: [''],
       productId:'',
       productDescription:[''],
       productPrice:[''],
       productCategory:[''],
       file:[''],
       fileSource:[''],
     });


  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

     this.apiService.getProductById(this.id).subscribe(response=>{
      this.ProductList=response;

      console.log(this.ProductList);
     });
     
     
  }


  // on file select event

 
  onChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({
       fileSource: file
      });
    }
  }



  onsubmit(){

    const formData = new FormData();
    formData.append('id', this.id);
    formData.append('file', this.form.get('fileSource')?.value);
    formData.append('productName', this.form.get('productName')?.value);
    formData.append('productId', this.form.get('productId')?.value);
    formData.append('productDescription', this.form.get('productDescription')?.value);
    formData.append('productPrice', this.form.get('productPrice')?.value);
    formData.append('productCategory', this.form.get('productCategory')?.value )
    console.log(this.form);

    this.httpClient.put(`${this.baseURL}/${this.id}`, formData, { observe: 'response' })
      .subscribe((response) => {
       
        if (response.status === 200) {

          alert("Successfully uploaded!")
         // this.message = 'Image uploaded successfully';
        } else {

          alert("Failed to process! Netowrk Error")
          //this.message = 'Image not uploaded successfully';
        }
      });

    }

  }
  



  

  



