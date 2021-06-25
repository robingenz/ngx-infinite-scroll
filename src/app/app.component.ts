import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'infinite-scroll-workspace';
  items: number[] = [];

  constructor() {
    this.loadMore();
  }

  loadMore(): void {
    for (let i = 0; i < 20; i++) {
      this.items.push(this.items.length);
    }
  }
}
