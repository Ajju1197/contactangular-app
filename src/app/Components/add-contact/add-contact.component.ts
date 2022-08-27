import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContact } from 'src/app/Modals/IContact';
import { IGroup } from 'src/app/Modals/IGroup';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  public loading: boolean = false;
  public contact: IContact = {} as IContact;
  public errorMessage: string | null = null;
  public groups: IGroup[] = [] as IGroup[];

  constructor(private contactService: ContactService, private _router: Router) { }

  ngOnInit(): void {
    this.contactService.getAllGroups().subscribe((data) => {
      this.groups = data;
    }, (error) => {
      this.errorMessage = error;
    })
  }

  public createContact() {
    this.contactService.createContact(this.contact).subscribe((data) => {
      this._router.navigate(['/']).then();
    }, (error) => {
      this.errorMessage = error
      this._router.navigate(['/contacts/add']).then();
    })
  }

}
