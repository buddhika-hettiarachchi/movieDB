import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  firstName;
  lastName;
  email;

  constructor(private router : Router) { }

  ngOnInit(): void {
    var notificationbar = document.getElementById('notification');

    document
      .getElementById('popper')
      .addEventListener('click', notificationPop);

    function notificationHide() {
      notificationbar.classList.remove('pop');
    }

    function notificationDisplay() {
      notificationbar.classList.add('pop');
    }

    function notificationPop() {
      notificationDisplay();
      setTimeout(notificationHide, 1000);
    }
  }

  onCancel(){
    this.router.navigate(['']) 
  }

  onSend(){
    console.log("on send")
    setTimeout(()=>{ this.router.navigate(['']) },1000)
   
  }

}
