import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css','./app-login.component.util.css']
})
export class AppLoginComponent implements OnInit {

  signInForm: FormGroup;
  user: boolean;

  constructor() { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      'username': new FormControl(null),
      'password': new FormControl(null)
    })
  }

  onClickSubmit(){
    const uname = this.signInForm.get('username').value;
    const psswd = this.signInForm.get('password').value;

    if (uname === 'admin' && psswd === 'admin'){
      this.user = true;
      alert("true");
    }else {
      this.user = false;
      alert("false");
    }
  }
}
