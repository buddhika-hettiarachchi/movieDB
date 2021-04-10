import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  @Input() moviesforBanner;
  movieBannerList:string[] = []

  ngOnInit(): void {


    for(let movie of this.moviesforBanner){
      let url = `linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 0.7) 18%, rgba(0, 212, 255, 0.5) 100%),url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
      this.movieBannerList.push(url)
    }

    const slider = document.querySelector('.gallery');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', e => {
      isDown = true;
      slider.classList.add('active');
      startX = e['pageX'] - slider['offsetLeft'];
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', _ => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', _ => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x= e['pageX'] - slider['offsetLeft'];
      const SCROLL_SPEED = 3;
      const walk = (x - startX) * SCROLL_SPEED;
      slider.scrollLeft = scrollLeft - walk;
    });



  }




}
