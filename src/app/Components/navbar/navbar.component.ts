import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  loginTitle = 'Login';
  userName = '';
  @ViewChild('loginEl')
  loginVal!: ElementRef;

  constructor(private loginService: LoginService, private router: Router, private rendrer: Renderer2) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.loginService.username = this.userName;
    this.loginService.loginElement = this.loginVal;
    console.log(this.loginVal);
  }
  login() {
    const value = this.loginVal.nativeElement.innerText;
    this.loginTitle = '';
    if (value === 'Login') {
      this.router.navigate(['/contacts/login'])
    } else if (value === 'Logout') {
      sessionStorage.clear();
      this.loginTitle = 'Login';
      this.rendrer.setProperty(this.loginVal.nativeElement, 'innerText', 'Login');
      this.router.navigate(['/contacts/login'])
    }
  }

}
