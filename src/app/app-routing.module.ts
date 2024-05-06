import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { UserProfileComponent } from './Visitor/User/user-profile/user-profile.component';
import { AdminProfileComponent } from './Visitor/Admin/admin-profile/admin-profile.component';
import { LogoutComponent } from './Pages/logout/logout.component';
import { catalogGuard, companyGuard, contactGuard, loginGuard, logoutGuard, novostiGuard, proyektGuard, proyektdetailsGuard, registerGuard, shoppingGuard, studentGuard, userGuard, uslogiGuard, zashitaproektiGuard } from './auth.guard';
import { CompanyComponent } from './Pages/company/company.component';
import { NovostiComponent } from './Pages/novosti/novosti.component';
import { KontaktComponent } from './Pages/kontakt/kontakt.component';
import { UslugiComponent } from './Pages/uslugi/uslugi.component';
import { ZashitaProektiComponent } from './Pages/zashita-proekti/zashita-proekti.component';
import { ProyektComponent } from './Pages/proyekt/proyekt.component';
import { ResetPasswordComponent } from './Pages/reset-password/reset-password.component';
import { EmailRequestComponent } from './Pages/email-request/email-request.component';
import { GdeKupitComponent } from './Pages/gde-kupit/gde-kupit.component';
import { ProyektAdminComponent } from './Pages/proyekt-admin/proyekt-admin.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent, canActivate: [loginGuard]},
  {path: 'logout', component: LogoutComponent, canActivate: [logoutGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [registerGuard]},
  {path: 'reset', component: ResetPasswordComponent},
  {path: 'emailRequest', component: EmailRequestComponent}, // guard needed
  {path: 'user-profile', component: UserProfileComponent, canActivate: [userGuard]}, // guard needed
  {path: 'admin-profile', component: AdminProfileComponent, canActivate: [loginGuard]},
  {path: 'catalog', component: ProyektAdminComponent, canActivate: [catalogGuard]}, // to be fixed
  {path: 'company', component: CompanyComponent, canActivate: [companyGuard]},
  {path: 'shopping', component: GdeKupitComponent, canActivate: [shoppingGuard]}, // to be fixed
  {path: 'novosti', component: NovostiComponent, canActivate: [novostiGuard]},
  {path: 'contact', component: KontaktComponent, canActivate: [contactGuard]},
  {path: 'uslogi', component: UslugiComponent, canActivate: [uslogiGuard]},
  {path: 'zashita-proekti', component: ZashitaProektiComponent, canActivate: [zashitaproektiGuard]},
  {path: 'proyekt', component: ProyektComponent, canActivate: [proyektGuard]},
  {path: 'proyekt-admin', component: ProyektAdminComponent, canActivate: [proyektGuard]},
  {path: 'proyekt-detail', component: ProyektComponent, canActivate: [proyektdetailsGuard]},
  {path: '**', component: HomeComponent, canActivate: []}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
