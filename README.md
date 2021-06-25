# ngx-infinite-scroll

📜 Angular directive for infinite scrolling. 

## Installation

```bash
npm install @robingenz/ngx-infinite-scroll
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

🚧 WIP

## Changelog

See [CHANGELOG.md](https://github.com/robingenz/ngx-infinite-scroll/blob/master/CHANGELOG.md).

## License

See [LICENSE](https://github.com/robingenz/ngx-infinite-scroll/blob/master/LICENSE).
