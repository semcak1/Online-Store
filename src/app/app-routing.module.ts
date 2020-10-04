import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmintabComponent } from './admin/admintab/admintab.component';
import { SetproductComponent } from './admin/setproduct/setproduct.component';
import { SettingComponent } from './settings/setting/setting.component';
import { AboutComponent } from './shared/about/about.component';
import { LoginComponent } from './user/login/login.component';
import { ProductComponent } from './user/product/product.component';
import { AuthGuardAdminService } from './services/auth-guard-admin.service';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'about',component:AboutComponent},
  {path:'admin',component:AdmintabComponent,canActivate:[AuthGuardAdminService]},
  {path:'setting',component:SettingComponent,canActivate:[AuthGuardService]},
  {path:'shopping',component:ProductComponent,canActivate:[AuthGuardService]},
  {path:'login',component:LoginComponent},
  {path:'**',redirectTo:'/login',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
