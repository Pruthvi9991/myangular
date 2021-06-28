import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MymeetingComponent } from './mymeeting/mymeeting.component';
import { HomeComponent } from './home/home.component';
import { JoinameetingComponent,} from './joinameeting/joinameeting.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';




const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'My Meeting',component:MymeetingComponent},
  {path:'Join A Meeting',component:JoinameetingComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
