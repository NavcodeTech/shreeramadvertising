import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      title: 'Non-Lit Board',
      description: 'Building fast, responsive, and scalable web solutions tailored to your business.',
      icon: 'bi bi-laptop',
      image: 'assets/img/services/NonlitBoard.jpg'
    },
    {
      title: 'Standy Development',
      description: 'Creating intuitive and robust mobile apps for Android and iOS platforms.',
      icon: 'bi bi-phone',
      image: 'assets/img/services/Standy.jpg'
    },
    {
      title: 'Light glow Design board',
      description: 'Designing seamless, user-friendly interfaces that elevate user experience.',
      icon: 'bi bi-palette',
      image: 'assets/img/services/glow.jpg'
    },
    {
      title: 'Vinyl Branding',
      description: 'Empowering your business with secure and scalable cloud infrastructure.',
      icon: 'bi bi-cloud',
      image: 'assets/img/services/vinylbrand.jpg'
    },
    {
      title: 'Wall Wrap',
      description: 'Turning raw data into actionable insights using modern analytics tools.',
      icon: 'bi bi-graph-up',
      image: 'assets/img/services/wallwrap.jpg'
    },
    {
      title: 'Outlet Promotion',
      description: 'Boosting your online presence through SEO, ads, and social media campaigns.',
      icon: 'bi bi-bullseye',
      image: 'assets/img/services/outlet.jpg'
    }
  ];

  projects = [
    {
      name: 'Van activity',
      description: 'An AI-powered analytics dashboard for a global retail chain.',
      category: '',
      image: 'assets/img/services/van_pic.jpg'
    },
    {
      name: 'Outlet Activity',
      description: 'A cross-platform app enabling remote education for 50K+ students.',
      category: '',
      image: 'assets/img/services/outlet.jpg'
    },
    {
      name: 'Retail Outlet Non-Lits Branding',
      description: 'Migrated legacy infrastructure to AWS with 99.9% uptime reliability.',
      category: '',
      image: 'assets/img/services/LitBoard.jpg'
    }
  ];
}