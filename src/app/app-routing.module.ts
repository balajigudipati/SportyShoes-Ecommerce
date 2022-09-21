import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AboutCompanyComponent } from './component/about-company/about-company.component';
import { AllProductsComponent } from './component/all-products/all-products.component';
import { CartComponent } from './component/cart/cart.component';
import { ContactComponent } from './component/contact/contact.component';
import { HeaderComponent } from './component/header/header.component';
import { PaymentComponent } from './component/payment/payment.component';

import { ProductsComponent } from './component/products/products.component';
import { ThanksComponent } from './component/thanks/thanks.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { LoginComponent } from './login/login.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UploadProductComponent } from './upload-product/upload-product.component';

const routes: Routes = [
 {path:'', pathMatch:'full', component:ProductsComponent},
{path:'uploadImage', component:ImageUploadComponent},
{path:'uploadProduct', component:UploadProductComponent},
{path:'header', component:HeaderComponent},
{path:'cart', component:CartComponent },
{path:'products', component: ProductsComponent },
{path:'login', component:LoginComponent },
{path:'admin', component:AdminComponent},
{path:'allProducts', component:AllProductsComponent},
{path:'updateProduct/:id', component:UpdateProductComponent },
{path:'aboutCompany', component:AboutCompanyComponent},
{path:'payment', component:PaymentComponent},
{path:'thanks', component:ThanksComponent},
{path:'contact', component:ContactComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
