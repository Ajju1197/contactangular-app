import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './Components/add-contact/add-contact.component';
import { ContactManagerComponent } from './Components/contact-manager/contact-manager.component';
import { EditContactComponent } from './Components/edit-contact/edit-contact.component';
import { LoginComponent } from './Components/login/login.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ViewContactComponent } from './Components/view-contact/view-contact.component';
import { WelcomePageComponent } from './Components/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacts/login', pathMatch: 'full' },
  { path: 'contacts/welcome', component: WelcomePageComponent },
  { path: 'contacts/login', component: LoginComponent },
  { path: 'contacts/admin', component: ContactManagerComponent },
  { path: 'contacts/add', component: AddContactComponent },
  { path: 'contacts/edit/:contactId', component: EditContactComponent },
  { path: 'contacts/view/:contactId', component: ViewContactComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
