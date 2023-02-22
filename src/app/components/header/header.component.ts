import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public subscriber!: Subscription;
  isHome!: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.subscriber = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isHome = event['url'] == '/';
      });
  }

  ngOnDestroy() {
    this.subscriber?.unsubscribe();
  }
}
