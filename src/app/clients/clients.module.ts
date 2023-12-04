import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    MatTableModule, 
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule


  ]
})
export class ClientsModule { }
