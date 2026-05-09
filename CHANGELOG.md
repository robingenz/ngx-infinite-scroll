# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [21.0.0](https://github.com/robingenz/ngx-infinite-scroll/compare/v13.0.0...v21.0.0) (2026-05-09)


### ⚠ BREAKING CHANGES

* library peer deps now require `@angular/common` and
`@angular/core` >=21.0.0. Library version bumped 13.0.0 -> 21.0.0.

* setup app for testing

* chore: add CI workflow and wire directive into dev app

- Add `.github/workflows/ci.yml` with build (library + workspace + tests)
  and lint (Prettier check) jobs
- Replace `prettier` script with `fmt` (write) and `lint` (check)
- Add `.prettierignore` for build artifacts and generated caches
- Wire `InfiniteScrollDirective` into the dev app with a scrollable
  demo list, fire counter, and disable toggle
- Format remaining scaffold files to satisfy the new lint check

### Features

* upgrade to Angular 21 ([#22](https://github.com/robingenz/ngx-infinite-scroll/issues/22)) ([67bdef6](https://github.com/robingenz/ngx-infinite-scroll/commit/67bdef6248a158973d80634f19aecf197378054b))

## [13.0.0](https://github.com/robingenz/ngx-infinite-scroll/compare/v12.1.0...v13.0.0) (2021-12-20)


### ⚠ BREAKING CHANGES

* update to Angular 13 (#5)

### Features

* update to Angular 13 ([#5](https://github.com/robingenz/ngx-infinite-scroll/issues/5)) ([bb42f6a](https://github.com/robingenz/ngx-infinite-scroll/commit/bb42f6aa2cb384ade7d030a0b0da684da1bd6d60))

## [12.1.0](https://github.com/robingenz/ngx-infinite-scroll/compare/v12.0.0...v12.1.0) (2021-12-05)


### Features

* support Angular 13 ([95250d8](https://github.com/robingenz/ngx-infinite-scroll/commit/95250d8d01e98dc90644c1f7419eda2b51743227))

## 12.0.0 (2021-06-29)

Initial release 🎉
