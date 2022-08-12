import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { SaveOnComponent } from './layouts/save-on/save-on.component';
import { BannerComponent } from './layouts/banner/banner.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ShopComponent } from './pages/shop/shop.component';
import { OrderComponent } from './layouts/order/order.component';
import { CorporateComponent } from './layouts/corporate/corporate.component';
import { CategoryComponent } from './layouts/category/category.component';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { SearchPipe } from './pipes/search.pipe';
import { SearchMaxPricePipe } from './pipes/search-max-price.pipe';
import { SearchMinPricePipe } from './pipes/search-min-price.pipe';
import { ClockComponent } from './pages/clock/clock.component';
import { AccountComponent } from './pages/account/account.component';
import { AccountSettingComponent } from './pages/account-setting/account-setting.component';
import { About2Component } from './pages/about2/about2.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    SaveOnComponent,
    BannerComponent,
    FooterComponent,
    DetailComponent,
    ShopComponent,
    OrderComponent,
    CorporateComponent,
    CategoryComponent,
    AboutComponent,
    CartComponent,
    SearchPipe,
    SearchMaxPricePipe,
    SearchMinPricePipe,
    ClockComponent,
    AccountComponent,
    AccountSettingComponent,
    About2Component,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
