import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AddContactComponent } from './Components/add-contact/add-contact.component';
import { EditContactComponent } from './Components/edit-contact/edit-contact.component';
import { ViewContactComponent } from './Components/view-contact/view-contact.component';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { ContactManagerComponent } from './Components/contact-manager/contact-manager.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RocketLoaderComponent } from './Components/rocket-loader/rocket-loader.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddContactComponent,
    EditContactComponent,
    ViewContactComponent,
    SpinnerComponent,
    ContactManagerComponent,
    PageNotFoundComponent,
    RocketLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
