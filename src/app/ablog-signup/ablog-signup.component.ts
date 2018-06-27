import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-ablog-signup',
  templateUrl: './ablog-signup.component.html',
  styleUrls: ['./ablog-signup.component.css']
})
export class AblogSignupComponent implements OnInit {
  email: string;
  password: string;
  
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
