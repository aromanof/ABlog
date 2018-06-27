import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-ablog-login',
  templateUrl: './ablog-login.component.html',
  styleUrls: ['./ablog-login.component.css']
})
export class AblogLoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
}
