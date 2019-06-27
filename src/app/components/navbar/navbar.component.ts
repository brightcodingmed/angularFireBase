import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  user = null;

  constructor(private authService: AuthService, private router: Router) {
    authService.isAuthenticated().subscribe(user => {
      this.user = user;
    })
   }

  ngOnInit() {
  }

  lougout() {
    this.authService.lougout()
                    .then(() => this.router.navigate(['/login']))
  }

}
