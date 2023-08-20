import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-video-slider',
  templateUrl: './video-slider.component.html',
  styleUrls: ['./video-slider.component.sass'],
  animations: [
    trigger('slideAnimation', [
      state('slide1', style({ transform: 'translateX(0)' })),
      state('slide2', style({ transform: 'translateX(-100%)' })),
      state('slide3', style({ transform: 'translateX(-200%)' })),
      transition('* => *', animate('1000ms ease-out')),
    ]),
  ],
})
export class VideoSliderComponent {
  currentSlide: string = 'slide1';
  slides: string[] = ['slide1', 'slide2', 'slide3'];

  constructor() {
    // Start automatic slide change
    setInterval(() => {
      const currentIndex = this.slides.indexOf(this.currentSlide);
      this.currentSlide = this.slides[(currentIndex + 1) % this.slides.length];
    }, 4000); // Change slide every 4 seconds
  }
}
