import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ElementRef, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Login } from './Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  username = '';
  loginElement!: ElementRef;
  welComeElement!: ElementRef;

  public serverUrl = '../../../assets/users/user.json'
  constructor(private http: HttpClient) { }

  // Makes a get request to the backend to fetch users data
  getAllUsers(): Observable<Login[]> {
    return this.http.get<Login[]>(this.serverUrl).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err);
    return throwError(() => err.error() || 'Server error');
  }

}
