import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { RootPageComponent } from './pages/root-page/root-page.component';
import { HeaderComponent } from './fixed/header/header.component';
import { RootNavBarComponent } from './navigation/root-nav-bar/root-nav-bar.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RegistrationFormComponent } from './containers/registration-form/registration-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginFormComponent } from './containers/login-form/login-form.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavBarComponent } from './navigation/nav-bar/nav-bar.component';
import { ProductBoxComponent } from './containers/product-box/product-box.component';
import { SearchedPageComponent } from './pages/searched-page/searched-page.component';
import { SearchedProductBoxComponent } from './containers/searched-product-box/searched-product-box.component';
import { FilterPageComponent } from './pages/filter-page/filter-page.component';
import { FilterFormComponent } from './containers/filter-form/filter-form.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RootPageComponent,
    HeaderComponent,
    RootNavBarComponent,
    RegisterPageComponent,
    RegistrationFormComponent,
    LoginPageComponent,
    LoginFormComponent,
    HomePageComponent,
    NavBarComponent,
    ProductBoxComponent,
    SearchedPageComponent,
    SearchedProductBoxComponent,
    FilterPageComponent,
    FilterFormComponent,
    ProductPageComponent,
    ProfilePageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
