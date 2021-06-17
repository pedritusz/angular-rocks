import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DocumentacionComponent } from './documentacion/documentacion.component';
import { HomeComponent } from './pages/home/home.component';
import {DeailsComponent} from './pages/deails/deails.component';
import {FormComponent} from './pages/form/form.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
const routes: Routes = [
  { path: '', component: DocumentacionComponent,  pathMatch: 'full'},
  { path: 'home', component: HomeComponent ,  pathMatch: 'full'},
  { path: 'details/:id', component: DeailsComponent,  pathMatch: 'full'},
  { path: 'form', component: FormComponent,  pathMatch: 'full'}
];

@NgModule({

  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule,FormsModule,ReactiveFormsModule],

})
export class AppRoutingModule { }
