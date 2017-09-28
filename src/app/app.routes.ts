import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductoComponent, CreateProductoComponent } from './producto';
import { DashboardComponent } from './dashboard';
import { ClienteComponent } from './cliente';
import { EmpresaComponent } from './empresa';
import { FacturaComponent } from './factura';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
 import { RegistrarComponent } from './registrar/registrar.component';
 const routes: Routes = [
  { path: '', component: CreateProductoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent, data: { title: 'Registrate'} },
  { path: 'inicio', component: DashboardComponent,
    children: [
      { path: 'productos', component: ProductoComponent,
      children: [ 
          { path: 'nuevo', component: CreateProductoComponent }
          ]},
      { path: 'empresas', component: EmpresaComponent  },
      { path: 'facturas', component: FacturaComponent  },
      { path: 'clientes', component: ClienteComponent }
      ]
    },
    { path: 'sinpermisos', component: DashboardComponent },
    { path: 'error', component: DashboardComponent },
    { path: '**', component: DashboardComponent }
    ];
export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
