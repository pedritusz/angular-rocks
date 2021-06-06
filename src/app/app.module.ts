import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DeailsComponent } from './pages/deails/deails.component';
import { DocumentacionComponent } from './documentacion/documentacion.component';
import { FormComponent } from './pages/form/form.component';
import { SearchComponent } from './components/search/search.component';
import {FormsModule} from '@angular/forms';
import { ItemGroupListComponent } from './components/item-group-list/item-group-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeailsComponent,
    DocumentacionComponent,
    FormComponent,
    SearchComponent,
    ItemGroupListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
