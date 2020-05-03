
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CustomerSharedModule } from '../../projects/customer-app/src/app/app.module';

const routes: Routes = [
  {
    path: 'customer-app',
    loadChildren: '../../projects/customer-app/src/app/app.module#CustomerSharedModule'
  },
  {
    path: 'order-app',
    loadChildren: () => import('../../projects/order-app/src/app/app.module').then( module => module.AppModule )
  }
];

@NgModule( {
  imports: [
    RouterModule.forRoot(
      routes,
      {
        // preloadingStrategy: PreloadAllModules,
      }
    ),
    CustomerSharedModule.forRoot()
  ],
  exports: [RouterModule]
} )
export class AppRoutingModule {
}