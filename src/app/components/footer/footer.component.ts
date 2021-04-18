import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  value:any;

  constructor(private router:Router) { }
 
  ngOnInit(): void {

    var notificationbar = document.getElementById('notification1');

    document
      .getElementById('popper1')
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

  onAboutUs(){
    this.router.navigate(['/about'])
  }

  onContact(){
    this.router.navigate(['/contact'])
  }

  onPrivacy(){
    this.router.navigate(['/privacy']) 
  }

  onHome(){
    this.router.navigate([''])
  }

}
