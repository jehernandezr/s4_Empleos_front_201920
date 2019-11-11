import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuentaDeCobroListComponent } from './cuenta-de-cobro-list/cuenta-de-cobro-list.component';
import{CuentaDeCobroDetailComponent}from './cuenta-de-cobro-detail/cuenta-de-cobro-detail.component'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CuentaDeCobroService } from './cuenta-de-cobro.service';

@NgModule({
  imports: [
    CommonModule,HttpClientModule, AppRoutingModule, FormsModule,ReactiveFormsModule
  ],
  declarations: [CuentaDeCobroListComponent,CuentaDeCobroDetailComponent],
  exports:[CuentaDeCobroListComponent,CuentaDeCobroDetailComponent],
  providers:[CuentaDeCobroService]
})
export class CuentaDeCobroModule { }