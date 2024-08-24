# MgPlus (*Mg+*)

![](/demp/images/logo.svg)

## Mg+ is a micro CSS library

Formerly called Milligram Plus, Mg+ was based on [milligram](https://github.com/milligram/milligram) which provides a minimal setup of styles for a fast and clean starting point

**Mg+ is specially designed to quickly create a website or a small page with minimal dependencies for better performance and higher productivity**

****Only one css file, around 55 KB minified****

*This library is in active development, some breaking may occurs until next stable release including a new documentation portal*

A complete documentation page will be available soon

### Demo page and production ready integrations

**[Demo page](https://demo.mgpluscss.com)**

**[Corporate website integration](https://www.evodim.com)**

### Features

* Lightweight and many components
* Reponsive and mobile first design
* Sass sources could be extended or composed for your custom needs
* JS plugins to interact with some component (optional)

Usefull components was included in this library:

* Custom variables
* Theming (dark theme)
* Navs
* Tabs
* Forms inputs
* Badges
* Modals
* Grid system
* Icon helper including some css icons
* Styling helpers like tailwindcss

## Getting started

### Install dependencies from [npm](https://www.npmjs.com/package/mgplus)

***npm***

```sh
npm install mgplus
```

***yarn***

```sh
yarn add mgplus
```

### Finaly import mgplus.css file to your project

### Alternatively, you can import directly css library from official cdn resources without nodejs stack

**[mgplus.css](https://cdn.mgpluscss.com/latest/css/mgplus.css)**

### JS plugins

Optionaly: use vanilla js plugin to handle UI interaction for some components (toggle classes on dom events)
They are mainly used to toggle visibility of content inside a component

**[mgplus-dom.js](https://cdn.mgpluscss.com/latest/js/mgplus-dom.js)**

Register specifics plugins:

To register automatically plugins on page load, use following query param when you import mgplus-dom.js :

```html
?register_plugins="dropdowns,tabs,modals,collaspses,darkmode"
```

of only one of them

```html
?register_plugins="darkmode"
```

Example:

```html
<script src="https://cdn.mgpluscss.com/latest/js/mgplus-dom.js?register_plugins="dropdowns,tabs,modals,collaspses,darkmode" >
</script>
```

#### To use plugin for your mgplus css components

Add html attribute data-toggle=["plugin_name"] in your html components

Example:

```html
 <div class="mg-dropdown" >
      <button title="choose a car" class="mg-dropdown--icon" data-toggle="dropdown">
        Choose a car
      </button>
      <div class="mg-dropdown--content">
        <div class="mg-nav">
          <ul>
            <li data-value="audi">Audi</li>
            <li data-value="bmw">BMW</li>
            <li data-value="toyota">Toyota</li>
          </ul>
        </div>
      </div>
    </div>
```

#### To configure darkmode plugin

In your main html document page, add attribute data-theme=["dark" | "light" |  "auto" ]

```html
<!DOCTYPE html>
<html lang="en" data-theme="auto">

<head>
</head>
```

"auto" mode will use your system browser preference to choose dark or light mode

*Js extensions are required only to handle interactions with dom events for navs, tabs, dropdowns, modals, etc.
It could be replaced by creating a wrapped UI components with react, angular or other any UI framework*

### For debugging run demo site directly from the repository

* Clone the repository

```sh
git clone https://github.com/Evodim/mgplus.git
```

* Install packages

```sh
npm install
```

* To start demo page:

```sh
npm run start 
```

* Debugging:
Run watch command to enable hot reload for the scss library

```sh
npm run watch 
```

*In order to start watch command, you should launch demo page with start command in another process*

* To build only the library :

```sh
npm run build
```

*yarn commands are also supported*

## License

Licensed under the [MIT License](https://raw.githubusercontent.com/Evodim/mgplus/master/LICENSE).
