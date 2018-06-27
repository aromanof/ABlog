import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { AuthService } from './auth-service.service';
//import { AuthGuard } from './auth.service';
// import { routes } from './app.routes';
// import { AblogLoginComponent } from './ablog-login/ablog-login.component';
// import { AblogEmailComponent } from './ablog-email/ablog-email.component';
// import { AblogSignupComponent } from './ablog-signup/ablog-signup.component';
// import { AblogMainComponent } from './ablog-main/ablog-main.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBrpSHGDN8KP2mPxWY6xLNFhRzp5GqO_Zg",
    authDomain: "ablog-834cd.firebaseapp.com",
    databaseURL: "https://ablog-834cd.firebaseio.com",
    projectId: "ablog-834cd",
    storageBucket: "ablog-834cd.appspot.com",
    messagingSenderId: "200932404905"
};

@NgModule({
  declarations: [
    AppComponent,
    // AblogLoginComponent,
    // AblogEmailComponent,
    // AblogSignupComponent,
    // AblogMainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    //routes,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule, 
    AngularFireStorageModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
