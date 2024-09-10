import { ConfirmMessageComponent } from './Register/confirm-message/confirm-message.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './Home/home-screen/home-screen.component';
import { MobilePhoneAdvertisingComponent } from './Home/mobile-phone-advertising/mobile-phone-advertising.component';
import { SignInComponent } from './Register/sign-in/sign-in.component';
import { SignUpComponent } from './Register/sign-up/sign-up.component';
import { ResetPasswordOneComponent } from './ResetPassword/reset-password-one/reset-password-one.component';
import { ResetPasswordTwoComponent } from './ResetPassword/reset-password-two/reset-password-two.component';
import { ResetPasswordThreeComponent } from './ResetPassword/reset-password-three/reset-password-three.component';
import { RealEstateDetailsComponent } from './Home/real-estate-details/real-estate-details.component';
import { FilterSystem1Component } from './Filtering/filter-system1/filter-system1.component';

const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'Home', component: HomeScreenComponent },
  {
    path: 'Mobile_Advertising_Page',
    component: MobilePhoneAdvertisingComponent,
  },
  {
    path: 'Real_Estate_Details',
    component: RealEstateDetailsComponent,
  },
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'confirm_message', component: ConfirmMessageComponent },
  { path: 'reset_password', component: ResetPasswordOneComponent },
  { path: 'confirm_code', component: ResetPasswordTwoComponent },
  { path: 'change_password', component: ResetPasswordThreeComponent },
  { path: 'filter', component: FilterSystem1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
