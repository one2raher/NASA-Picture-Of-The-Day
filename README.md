# NASA Picture Of The Day
[![License](https://img.shields.io/github/license/one2raher/NASA-Picture-Of-The-Day)](https://github.com/one2raher/NASA-Picture-Of-The-Day/blob/master/LICENSE)

This is a VK mini app. It helps with finding "Astronomy Picture of the Day" by NASA.

## Screenshots
<p float="left">
  <img src="/2.PNG" width="250" />
  <img src="/1.PNG" width="250" /> 
</p>

## Features
- Сonvenient Date Picker
- Nice scrolable page with all information about the photo
- Original resolution of the photo
- Adopted for almost all version of IOS and Android

## License
NASA-Picture-Of-The-Day is available under the MIT license. See the LICENSE file for more info.

[<img width="134" src="https://vk.com/images/apps/mini_apps/vk_mini_apps_logo.svg">](https://vk.com/services)

# Create VK Mini App [![npm][npm]][npm-url] [![deps][deps]][deps-url]

## How to use

### With NPX

```bash
npx @vkontakte/create-vk-mini-app [app-directory-name] [options]
```
[NPX](https://github.com/npm/npx) allows you to always use the **latest** version of the package without a global installation.

### With installing the package globally
Install the package globally via yarn
```bash
yarn global add @vkontakte/create-vk-mini-app
```
...or npm
```bash
npm install --global @vkontakte/create-vk-mini-app
```

and use as follows

```bash
create-vk-mini-app [app-directory-name] [options]
```

This way is less recommended because you will have to update the package yourself.

### Options
Without `--zeit` and `--surge` options 

#### `--zeit`
Vercel (Zeit) deploy

Firstly, you have to create Vercel account and connect it with your GitHub profile on [vercel.com](https://vercel.com)

#### `--surge <surge-domain>`
Surge deploy

Firstly, you have to create Surge account and Surge-domain on [surge.sh](https://surge.sh)

#### `--help`
Prints the synopsis and a list of options

## How to start work with app

Go to created folder and run:  
`yarn start` or  `npm start` to start dev server with hot reload on `localhost:10888`.

`yarn run build` or `npm run build` to build production bundle, with tree-shaking, uglify and all this modern fancy stuff.

[npm]: https://img.shields.io/npm/v/@vkontakte/create-vk-mini-app.svg
[npm-url]: https://npmjs.com/package/@vkontakte/create-vk-mini-app

[deps]: https://img.shields.io/david/vkcom/create-vk-mini-app.svg
[deps-url]: https://david-dm.org/vkcom/create-vk-mini-app
