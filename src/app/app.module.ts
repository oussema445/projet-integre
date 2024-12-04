import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ComponentsModule } from './components/components.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RegisterComponent } from './register/register.component';
import { MedecinUserComponent } from './medecin-user/medecin-user.component';
import { LoginComponent } from './login/login.component';
import { FicheComponent } from './fiche/fiche.component';
import { PaymentComponent } from './payment/payment.component';
import { TableListComponent } from './table-list/table-list.component';
import { HeaderComponent } from './header/header.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    RegisterComponent,
    MedecinUserComponent,
    LoginComponent,
    FicheComponent,
    PaymentComponent,
    HeaderComponent,
    ProfilUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule, // Import du module contenant Sidebar et Navbar
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
