import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  register(user) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  login(user) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
  }

  isAuthenticated() {
    return this.afAuth.user;
  }

  lougout() {
    return this.afAuth.auth.signOut();
  }
}
