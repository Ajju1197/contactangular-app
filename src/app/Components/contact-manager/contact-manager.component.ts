import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IContact } from 'src/app/Modals/IContact';
import { ContactService } from 'src/app/Services/contact.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit, AfterViewInit {

  public loading: boolean = false;
  public contacts: IContact[] = []
  public errorMessage: string;
  public filterContacts: IContact[];
  private _searchTerm: string;
  get searchTerm() {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filterContacts = this.filterContactsFun(value);
  }


  // Data filter function
  filterContactsFun(searchString: any) {
    return this.contacts.filter(contact => contact.name.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1)
  }

  @ViewChild('loginEl')
  loginVal: ElementRef;

  constructor(private contactService: ContactService, private loginService: LoginService, private rendrer: Renderer2, private _router: Router) { }

  ngOnInit(): void {
    this.getAllContacts();
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.loginVal = this.loginService.loginElement;
    this.rendrer.setProperty(this.loginVal.nativeElement, 'innerText', 'Logout')
    this.rendrer.setStyle(this.loginVal.nativeElement, 'background', 'black')
  }

  public getAllContacts() {
    this.loading = true;
    this.contactService.getAllContacts().subscribe((data) => {
      console.log(data)
      this.contacts = data;
      console.log(this.contacts)
      this.filterContacts = this.contacts;
      this.loading = false;
    }, (error) => {
      this.errorMessage = error;
      this.loading = false
    });
  }
  public deleteContact(contactId: string | undefined) {
    this.contactService.deleteContact(contactId).subscribe((data) => {
      this.getAllContacts();
    }, (error) => {
      this.errorMessage = error;
    })
  }

}
