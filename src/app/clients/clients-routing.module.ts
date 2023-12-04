import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'clients', pathMatch: 'full'},
  {path:'clients',component:IndexComponent},
  {path:'clients/create',component:CreateComponent},
  {path:'clients/edit',component:EditComponent},
  {path:'dashboard',component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
