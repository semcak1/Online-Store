import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './shared/about/about.component';
import { MaterialModule } from './material.module';
import { SettingComponent } from './settings/setting/setting.component';
import { HttpClientModule } from '@angular/common/http';
import { SetproductComponent } from './admin/setproduct/setproduct.component';
import { SearchComponent } from './admin/search/search.component';
import { AddTemplateComponent } from './admin/add-template/add-template.component';
import { EditTemplateComponent } from './admin/edit-template/edit-template.component';
import { ResultTemplateComponent } from './admin/result-template/result-template.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AdmincartsComponent } from './admin/admincarts/admincarts.component';
import { AdminordersComponent } from './admin/adminorders/adminorders.component';
import { AdmintabComponent } from './admin/admintab/admintab.component';
import { AdminusersComponent } from './admin/adminusers/adminusers.component';
import { ProductComponent } from './user/product/product.component';
import { LoginComponent } from './user/login/login.component';

//firebase settings
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SettingComponent,
    SetproductComponent,
    SearchComponent,
    AddTemplateComponent,
    EditTemplateComponent,
    ResultTemplateComponent,
    AdmincartsComponent,
    AdminordersComponent,
    AdmintabComponent,
    AdminusersComponent,
    ProductComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
