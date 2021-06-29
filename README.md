# ngx-infinite-scroll

[![npm (version)](https://img.shields.io/npm/v/@robingenz/ngx-infinite-scroll)](https://www.npmjs.com/package/@robingenz/ngx-infinite-scroll)
[![npm (downloads)](https://img.shields.io/npm/dw/@robingenz/ngx-infinite-scroll)](https://www.npmjs.com/package/@robingenz/ngx-infinite-scroll)

📜 Angular directive for infinite scrolling. 

## Installation

```bash
npm install @robingenz/ngx-infinite-scroll
```

Import the `InfiniteScrollModule`:

```ts
import { InfiniteScrollModule } from '@robingenz/ngx-infinite-scroll';

@NgModule({
  imports: [InfiniteScrollModule],
})
export class AppModule {}
```

## Usage

```html
<div infiniteScroll 
     infiniteScrollThreshold="150px" 
     [infiniteScrollDisabled]="false" 
     (onInfiniteScroll)="loadMoreItems()">
  <div *ngFor="let item of items">{{ item }}</div>
</div>
```

## Example

A working example can be found [here](https://stackblitz.com/github/robingenz/ngx-infinite-scroll).

## Changelog

See [CHANGELOG.md](https://github.com/robingenz/ngx-infinite-scroll/blob/main/CHANGELOG.md).

## License

See [LICENSE](https://github.com/robingenz/ngx-infinite-scroll/blob/main/LICENSE).
