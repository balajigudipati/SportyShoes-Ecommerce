import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-product',
  templateUrl: './upload-product.component.html',
  styleUrls: ['./upload-product.component.css']
})
export class UploadProductComponent implements OnInit {
//form group
 form: FormGroup;
  constructor(private httpClient:HttpClient, private fb: FormBuilder) {
    
    this.form = this.fb.group({
      productName: [''],
       productId:'',
       productDescription:[''],
       productPrice:[''],
       productCategory:[''],
       file:[''],
       fileSource:[''],
     });
    
   }

   
 


  // on file select event
  onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({
       fileSource: file
      });
    }
  }

  onSubmit() {

    
    const formData = new FormData();
    formData.append('file', this.form.get('fileSource')?.value);
    formData.append('productName', this.form.get('productName')?.value);
    formData.append('productId', this.form.get('productId')?.value);
    formData.append('productDescription', this.form.get('productDescription')?.value);
    formData.append('productPrice', this.form.get('productPrice')?.value);
    formData.append('productCategory', this.form.get('productCategory')?.value )
    console.log(this.form);

    this.httpClient.post('http://localhost:8094/api/productDetails/productDetailsImage', formData, { observe: 'response' })
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
  

  ngOnInit(): void {
   

}
}





  



