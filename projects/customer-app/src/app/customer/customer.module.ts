import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CustomerRoutingModule,FormsModule,CommonModule],
  declarations: [CustomerRoutingModule.components]
})
export class CustomerModule { }