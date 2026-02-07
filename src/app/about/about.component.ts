import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  team = [
    {
      name: 'Sachin Kumar',
      role: 'Founder & CEO',
      image: 'assets/img/profile/sachinprof.jpg'
    },
    {
      name: 'Naveen Kumar',
      role: 'CTO',
      image: 'assets/img/profile/naveen.jpg'
    },
    {
      name: 'Sahil Kumar',
      role: 'Lead Operations Head',
      image: 'assets/img/profile/sahil.jpg'
    },
    {
      name: 'Sonu Patel',
      role: 'Logistics Head',
      image: 'assets/img/profile/sonu.jpg'
    }
  ];
  facilities = [
    {
      title: 'In-house Printing Setup',
      image: 'printing.jpg',
      desc: 'High-quality flex & vinyl printing with precision'
    },
    {
      title: 'Fabrication & Installation',
      image: 'installation.jpg',
      desc: 'Professional mounting and branding execution'
    },
    {
      title: 'On-ground Execution Team',
      image: 'ongroundexecution.jpg',
      desc: 'Experienced manpower for seamless campaigns'
    },
    {
      title: 'Event & Logistics Support',
      image: 'event_setup.jpg',
      desc: 'End-to-end event branding & logistics handling'
    }
  ];
}
