import { Component, signal } from '@angular/core';
import { InfiniteScrollDirective } from '@robingenz/ngx-infinite-scroll';

@Component({
  selector: 'app-root',
  imports: [InfiniteScrollDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly items = signal<number[]>(Array.from({ length: 30 }, (_, i) => i + 1));
  protected readonly fireCount = signal(0);
  protected readonly disabled = signal(false);

  protected onInfiniteScroll(): void {
    this.fireCount.update(n => n + 1);
    this.items.update(current => {
      const next = current.length;
      return [...current, ...Array.from({ length: 20 }, (_, i) => next + i + 1)];
    });
  }

  protected toggleDisabled(): void {
    this.disabled.update(d => !d);
  }

  protected reset(): void {
    this.items.set(Array.from({ length: 30 }, (_, i) => i + 1));
    this.fireCount.set(0);
  }
}
