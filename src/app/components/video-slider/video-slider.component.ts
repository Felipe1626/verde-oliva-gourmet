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

  
  logo_form_ease: string = 'https://zvziniaidkuuulxbldkr.supabase.co/storage/v1/object/sign/assets/img/logo%20form%20ease.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvaW1nL2xvZ28gZm9ybSBlYXNlLnBuZyIsImlhdCI6MTY4NjE5MjQxOCwiZXhwIjoxNzE3NzI4NDE4fQ.uF6EenBdbmiR4lxbDpEP2JZo1VHDqeRJ7Q9kXLW6z4E&t=2023-06-08T02%3A46%3A58.741Z';
  around_the_world: string = 'https://zvziniaidkuuulxbldkr.supabase.co/storage/v1/object/sign/assets/video/Around%20the%20World.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvdmlkZW8vQXJvdW5kIHRoZSBXb3JsZC5tcDQiLCJpYXQiOjE2ODU0OTQ3NTksImV4cCI6MTcxNzAzMDc1OX0.NQ6WTkqxd5DBjSmk3An4at6qbUIh-qpTVfx22hsbfh8&t=2023-05-31T00%3A59%3A25.906Z';
  cositas_kukas: string = 'https://zvziniaidkuuulxbldkr.supabase.co/storage/v1/object/sign/assets/img/Logo%20cositas%20kukas.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvaW1nL0xvZ28gY29zaXRhcyBrdWthcy5wbmciLCJpYXQiOjE2ODYxODY0NTUsImV4cCI6MTcxNzcyMjQ1NX0.oMAWKNB6Dm3pHwFgPtgfQ8GHkOQEVqHUYtqUv4ud3Kg&t=2023-06-08T01%3A07%3A37.490Z';
}
