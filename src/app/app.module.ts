import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routing, RoutingProviders } from './app.routes';
import { AutoCompleteModule, DataTableModule, SharedModule, MegaMenuModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductoComponent, CreateProductoComponent } from './producto';
import { ClienteComponent } from './cliente/cliente.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { FacturaComponent } from './factura/factura.component';
import { RegistrarComponent } from './registrar/registrar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    ProductoComponent,
    CreateProductoComponent,
    ClienteComponent,
    EmpresaComponent,
    FacturaComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    ReactiveFormsModule,
    FormsModule,
    AutoCompleteModule,
    DataTableModule,
    SharedModule,
    HttpModule,
    MegaMenuModule 
  ],
  providers: [RoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
