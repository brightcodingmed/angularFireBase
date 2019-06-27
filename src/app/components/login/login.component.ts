import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(private router: Router, private authService: AuthService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.login(this.user)
                    .then(res => {
                      this.flashMessage.show('Welcome to your Account !', {
                        cssClass: 'alert-info',
                        timeout: 3000
                      })
                     this.router.navigate(['/products'])
                    }) 
                    .catch(err => {
                      this.flashMessage.show(err.message, {
                        cssClass: 'alert-warning',
                        timeout: 5000
                      })
                    })          
  }

  signInWithGoogle() {
    this.authService.loginWithGoogle().then(() => {
      this.flashMessage.show('Welcome to your Account !', {
        cssClass: 'alert-info',
        timeout: 3000
      })
     this.router.navigate(['/products'])
    })
  }

}
