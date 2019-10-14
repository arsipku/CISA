import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preregister',
  templateUrl: './preregister.page.html',
  styleUrls: ['./preregister.page.scss'],
})
export class PreregisterPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onPreRegister(){
    this.router.navigateByUrl("/preregister/register");
  }

}
