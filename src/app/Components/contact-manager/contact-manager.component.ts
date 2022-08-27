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
  public filterData: Array<any> = []


  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getAllContacts();
  }

  public getAllContacts() {
    this.loading = true;
    this.contactService.getAllContacts().subscribe((data) => {
      this.contacts = data;
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
