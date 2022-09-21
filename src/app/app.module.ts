import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { UploadProductComponent } from './upload-product/upload-product.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { FilterPipe } from './shared/filter.pipe';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './_services/user.service';
import { AllProductsComponent } from './component/all-products/all-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AboutCompanyComponent } from './component/about-company/about-company.component';
import { PaymentComponent } from './component/payment/payment.component';
import { ThanksComponent } from './component/thanks/thanks.component';
import { ContactComponent } from './component/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent,
    UploadProductComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    FilterPipe,
    LoginComponent,
    AdminComponent,
    ForbiddenComponent,
    AllProductsComponent,
    UpdateProductComponent,
    AboutCompanyComponent,
    PaymentComponent,
    ThanksComponent,
    ContactComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
