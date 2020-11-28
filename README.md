# mod-db
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
## Concept
This is an updated (Or downgraded in a good way) version of my previous project, `Informa-Db.js`.
You **cannot** use this package alone. You will need another package such as `@informathemusic/lobale-mod-db`
## Why did you downgrade?
I used to have a `LocaleDb` and a `RemoteDb` in `Informa-Db.js`, however I noticed that it might've not been enough.
I deleted both but keeped `BaseDb`.
If you wish to use the old version you still can but please keep in mind that I won't update it anymore.
## How do I make my own mod-db module?
To learn how to make your own module for mod-db, please refer to [the mod-db template repository](https://github.com/informathemusic/mod-db-template).
## Docs
### `new BaseDb( options<Object>, updateOnChange<Boolean> )`
Creates a new `BaseDb`
#### `options<Object>`
Options passed down to the parent package
#### `updateOnChange<Boolean>`
Whether mod-db should update (`this.update()`) on value change
Defaults to `true`

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/informathemusic"><img src="https://avatars3.githubusercontent.com/u/39065949?v=4" width="100px;" alt=""/><br /><sub><b>informathemusic</b></sub></a><br /><a href="https://github.com/informathemusic/informa-db.js/commits?author=informathemusic" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/wolfpat01"><img src="https://avatars1.githubusercontent.com/u/57036855?v=4" width="100px;" alt=""/><br /><sub><b>Haouari haithem</b></sub></a><br /><a href="https://github.com/informathemusic/informa-db.js/commits?author=wolfpat01" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!