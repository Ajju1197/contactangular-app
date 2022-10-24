import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddContactComponent } from '../Components/add-contact/add-contact.component';

export interface canLeaveComponent {
  canLeave: () => boolean;
}
@Injectable({
  providedIn: 'root'
})

export class UnsavedChangeGuard implements CanDeactivate<canLeaveComponent> {
  canDeactivate(
    component: canLeaveComponent) {
    if (component.canLeave) {
      return component.canLeave();
    }
    return true
  }

}
