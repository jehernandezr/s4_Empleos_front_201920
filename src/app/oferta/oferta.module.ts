import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertaListComponent } from './oferta-list/oferta-list.component';
import { OfertaDetailComponent } from './oferta-detail/oferta-detail.component';
import { OfertaService } from './oferta.service';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OfertaCreateComponent } from './oferta-create/oferta-create.component';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, AppRoutingModule, FormsModule,ReactiveFormsModule
  ],
  declarations: [OfertaListComponent, OfertaDetailComponent, OfertaCreateComponent ],
  exports: [OfertaListComponent, OfertaDetailComponent],
  providers: [OfertaService]

})
export class OfertaModule { }