import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  loginTitle = 'Login';
  LoginTime = "Login Time"
  Date: number = Date.now();;
  userName = '';
  @ViewChild('loginEl')
  loginVal!: ElementRef;
  @Input() bName: string;
  @Output() notifyMessage: EventEmitter<string> = new EventEmitter<string>();
  childMethod() {
    this.notifyMessage.emit('Data Passing to Child to parent')
  }
  isDarkTheme: boolean = false;
  showFiller = false;

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
      this.loginVal.nativeElement.style.background = '';
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

}
