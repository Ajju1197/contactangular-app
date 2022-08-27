import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from 'src/app/Modals/IContact';
import { IGroup } from 'src/app/Modals/IGroup';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  public loading: boolean = false;
  public contact: IContact = {} as IContact;
  public contactId: string | null = null;
  public errorMessage: string | null = null;
  public groups: IGroup[] = [] as IGroup[];
  constructor(private contactService: ContactService, private activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.contactId = param.get('contactId')
    })
    if (this.contactId) {
      this.loading = true;
      this.contactService.getContact(this.contactId).subscribe((data) => {
        this.contact = data;
        this.loading = false;
        this.contactService.getAllGroups().subscribe((data) => {
          this.groups = data
        })
      }, (error) => {
        this.errorMessage = error;
        this.loading = false;
      })
    }
  }
  public submitUpdate() {
    if (this.contactId) {
      this.contactService.updateContact(this.contact, this.contactId).subscribe((data) => {
        this._router.navigate(['/']).then();
      }, (error) => {
        this.errorMessage = error;
        this._router.navigate([`/contacts/edit/${this.contactId}`]).then();

      })
    }
  }

}
