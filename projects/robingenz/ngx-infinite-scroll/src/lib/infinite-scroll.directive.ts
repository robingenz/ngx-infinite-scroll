import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

const scrollEventName = 'scroll';
const scrollEventArgs = ['$event.target.scrollTop', '$event.target.scrollHeight', '$event.target.offsetHeight'];

@Directive({
  selector: '[infiniteScroll]',
})
export class InfiniteScrollDirective {
  /**
   * The threshold distance from the bottom of the element to call the `onInfiniteScroll` output event when scrolled.
   * The value can be either a percent, or in pixels.
   *
   * Default: `200px`
   */
  @Input() public set infiniteScrollThreshold(value: string) {
    if (value.includes('%')) {
      this.thrPx = 0;
      this.thrPc = parseFloat(value) / 100;
    } else {
      this.thrPx = parseFloat(value);
      this.thrPc = 0;
    }
  }
  /**
   * If `true`, the infinite scroll event listeners will be removed.
   */
  @Input() public infiniteScrollDisabled = false;
  /**
   * Emitted when the scroll reaches the threshold distance.
   */
  @Output() public onInfiniteScroll = new EventEmitter<void>();

  private thrPc = 0;
  private thrPx = 200;
  private didFire = false;

  @HostListener(scrollEventName, scrollEventArgs)
  public onScroll(scrollTop: number, scrollHeight: number, offsetHeight: number): void {
    if (this.infiniteScrollDisabled) {
      return;
    }
    const scrollPos = offsetHeight + scrollTop;
    const threshold = this.thrPx || offsetHeight * this.thrPc;
    if (scrollPos + threshold >= scrollHeight) {
      if (!this.didFire) {
        this.didFire = true;
        this.onInfiniteScroll.emit();
      }
    } else {
      if (this.didFire) {
        this.didFire = false;
      }
    }
  }
}
