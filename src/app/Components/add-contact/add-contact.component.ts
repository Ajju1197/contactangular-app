import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { canLeaveComponent } from 'src/app/Guards/unsaved-change.guard';
import { IContact } from 'src/app/Modals/IContact';
import { IGroup } from 'src/app/Modals/IGroup';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit, canLeaveComponent {

  public loading: boolean = false;
  public contact: IContact = {} as IContact;
  public errorMessage: string | null = null;
  public groups: IGroup[] = [] as IGroup[];

  public name: FormControl = new FormControl();

  constructor(private contactService: ContactService, private _router: Router) { }


  ngOnInit(): void {
    this.contactService.getAllGroups().subscribe((data) => {
      this.groups = data;
    }, (error) => {
      this.errorMessage = error;
    })
  }

  canLeave(): boolean {
    if (this.name.untouched) {
      return window.confirm('You have some unsaved changes, Are you sure want to navigate')
    }
    return true;
  };

  public createContact() {
    this.contactService.createContact(this.contact).subscribe((data) => {
      this._router.navigate(['/contacts/admin']).then();
    }, (error) => {
      this.errorMessage = error
      this._router.navigate(['/contacts/add']).then();
    })
  }

}
