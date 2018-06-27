import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'; 
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service.service';
import * as firebase from 'firebase/app';
import 'rxjs';

interface Post{
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;
  items: Observable<Post[]>;
  itemsCollection: AngularFirestoreCollection<Post>
  message: string = '';

  email: string;
  password: string;

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore, private auth: AuthService) {
    
  }

  ngOnInit(){
    this.itemsCollection = this.afs.collection('messages');
    this.items = this.itemsCollection.valueChanges();
  }

  signup() {
    this.auth.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.auth.login(this.email, this.password);
    this.email = this.password = '';    
  }

  logout() {
    this.auth.logout();
  }

  Send(desc: string) {
    this.afs.collection('messages').add({
      'message': this.message
    })
  }
}
