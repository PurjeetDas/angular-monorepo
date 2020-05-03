import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';



const app_routes: Routes = [
  { path: 'customer-app', redirectTo:'customer-app/customer' },
  { path: 'customer-app/customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) }
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule { }
