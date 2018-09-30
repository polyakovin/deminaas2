import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  currentPath = '';
  pages = [
    {
      "title": "Обо мне",
      "path": "me"
    },
    {
      "title": "Портфолио",
      "path": "portfolio"
    },
    {
      "title": "Блог",
      "path": "blog"
    },
    {
      "title": "Отзывы",
      "path": "feedback"
    },
    {
      "title": "Цены",
      "path": "prices"
    },
    {
      "title": "Контакты",
      "path": "contacts"
    }
  ];

  links = [
    {
      "icon": "instagram",
      "url": "#"
    },
    {
      "icon": "instagram",
      "url": "#"
    },
    {
      "icon": "instagram",
      "url": "#"
    },
    {
      "icon": "instagram",
      "url": "#"
    },
    {
      "icon": "instagram",
      "url": "#"
    },
    {
      "icon": "instagram",
      "url": "#"
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    this.navigate(location.pathname.slice(1));
  }

  navigate(path, event?) {
    if (event) {
      event.preventDefault();
    }
    this.currentPath = path;
    this.router.navigate([path]);
  }
}
