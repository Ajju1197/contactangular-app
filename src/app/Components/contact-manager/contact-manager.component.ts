import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/Modals/IContact';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

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


  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getAllContacts();
  }

  public getAllContacts() {
    this.loading = true;
    this.contactService.getAllContacts().subscribe((data) => {
      this.contacts = data;
      this.filterContacts = this.contacts;
      this.loading = false;
    }, (error) => {
      this.errorMessage = error;
      this.loading = false
    })
  }

  public deleteContact(contactId: string | undefined) {
    this.contactService.deleteContact(contactId).subscribe((data) => {
      this.getAllContacts();
    }, (error) => {
      this.errorMessage = error;
    })
  }



}
