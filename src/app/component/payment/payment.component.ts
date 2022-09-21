import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { UserAuthService } from 'src/app/_services/user-auth.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  form: FormGroup;


  public products : any = [];
  public grandTotal !: number;
  constructor(private router:Router,private userAuthService: UserAuthService,private cartService : CartService,private httpClient:HttpClient, private fb: FormBuilder) { 
    this.form = this.fb.group({
      cardHolderName:[''],
      cardNumber:[''],
      cardExpir:[''],
      cvv:[''],


    });

  }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }


  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }



// saving card detail

onSubmit(){

  const formData = new FormData();
  formData.append('cardHolderName', this.form.get('cardHolderName')?.value);
  formData.append('cardNumber', this.form.get('cardNumber')?.value);
  formData.append('cardExpir', this.form.get('cardExpir')?.value);
  formData.append('cvv', this.form.get('cvv')?.value);
  console.log(this.form);

  this.httpClient.post('http://localhost:8094/api/cardDetails/save', formData, { observe: 'response' })
  .subscribe((response) => {
   
    if (response.status === 200) {

      alert("Successfully uploaded!")
      this.router.navigate(['/thanks']);
     // this.message = 'Image uploaded successfully';
    } else {

      alert("Failed to process! Netowrk Error")
      //this.message = 'Image not uploaded successfully';
    }
  });


}



}
