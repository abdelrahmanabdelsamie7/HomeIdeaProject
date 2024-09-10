import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HomeScreenComponent } from './Home/home-screen/home-screen.component';
import { RealEstateDetailsComponent } from './Home/real-estate-details/real-estate-details.component';
import { MobilePhoneAdvertisingComponent } from './Home/mobile-phone-advertising/mobile-phone-advertising.component';
import { NavbarComponent } from './Home/Shared/navbar/navbar.component';
import { FooterComponent } from './Home/Shared/footer/footer.component';
import { SignInComponent } from './Register/sign-in/sign-in.component';
import { SignUpComponent } from './Register/sign-up/sign-up.component';
import { ResetPasswordOneComponent } from './ResetPassword/reset-password-one/reset-password-one.component';
import { ResetPasswordTwoComponent } from './ResetPassword/reset-password-two/reset-password-two.component';
import { ResetPasswordThreeComponent } from './ResetPassword/reset-password-three/reset-password-three.component';
import { ConfirmMessageComponent } from './Register/confirm-message/confirm-message.component';
import { FilterSystem1Component } from './Filtering/filter-system1/filter-system1.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    RealEstateDetailsComponent,
    MobilePhoneAdvertisingComponent,
    NavbarComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    ResetPasswordOneComponent,
    ResetPasswordTwoComponent,
    ResetPasswordThreeComponent,
    ConfirmMessageComponent,
    FilterSystem1Component,
  ],
  imports: [BrowserModule, AppRoutingModule, GoogleMapsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
