import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {



public productList:any;
public filterCategory : any
  searchKey:string ="";



  constructor(private api:ApiService, private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
      /* if(a.category ==="ayurveda"){
          a.category ="ayurveda"
        }*/
        Object.assign(a,{quantity:1,total:a.productPrice});
      });
      console.log(this.productList)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.productCategory == category || category==''){
        return a;
      }
    })
  }

}


    



