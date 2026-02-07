import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  contactUs() {
    this.router.navigate(['contact']);
  }

  services = [
    { title: 'Retail Branding', icon: 'fa-store' },
    { title: 'Van Activity', icon: 'fa-truck' },
    { title: 'Wall Wrap & Painting', icon: 'fa-paint-roller' },
    { title: 'Auto Branding', icon: 'fa-car' },
    { title: 'Mini Hoarding', icon: 'fa-ad' },
    { title: 'Mela Activity & Branding', icon: 'fa-flag' },
    { title: 'Standy / Pilor Branding', icon: 'fa-sign' },
    { title: 'Outlet Activity', icon: 'fa-store-alt' },
    { title: 'Pole Board Activity', icon: 'fa-broadcast-tower' },
    { title: 'Unipole', icon: 'fa-building' },
    { title: 'Event Branding', icon: 'fa-calendar-check' }
  ];

  stats = [
    { value: '100+', label: 'Clients Worked With' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '30+', label: 'Client Retention' }
  ];

  clients = [
    { name: 'Sprite', logo: 'sprite.png' },
    { name: 'Catch', logo: 'catch.jpg' },
    { name: 'Lux Cozi', logo: 'lux-cozi.png' },
    { name: 'Kutchina', logo: 'kutchina.png' },
    { name: 'Dainik-Bhaskar', logo: 'dainik-bhaskar.png' },
    { name: 'Concreto', logo: 'concreto.png' },
    { name: 'Ashirvad', logo: 'ashirvad.png' },
    { name: 'ACC', logo: 'acc.png' },
    { name: 'Vectus', logo: 'vectus.png' }
  ];

  activityImages = [
    'wall-painting.jpg',
    'van-branding.jpg',
    'event-branding.jpg'
  ];

  states = [
    { name: 'Bihar', image: 'assets/img/states/bihar.png' },
    { name: 'Jharkhand', image: 'assets/img/states/Jharkhand.png' },
    { name: 'Uttar Pradesh', image: 'assets/img/states/UP_image.png' },
    { name: 'Uttarakhand', image: 'assets/img/states/uttarakhand.png' },
    { name: 'Chhattisgarh', image: 'assets/img/states/Chhattisgarh.png' },
    { name: 'Madhya Pradesh', image: 'assets/img/states/MP.png' }
  ];
}
