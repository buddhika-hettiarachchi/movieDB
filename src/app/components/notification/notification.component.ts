import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  constructor() {}

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
      setTimeout(notificationHide, 2500);
    }

    // notificationPop();
  }
}
