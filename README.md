ionic-password-show-hide
========================

> An Ionic AngularJS directive for adding a show/hide button to an input password element.

#Table of contents

- [Demo](#demo)
- [Introduction](#introduction)
- [Features](#features)
- [Ionic compatibility](#ionic-compatibility)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

# Demo

See it in action in the following image:

![demo](https://github.com/sonicwong/ionic-password-show-hide/raw/master/demo.gif)

# Introduction

For one of my private projects I needed a password input field component come with show/hide button in Ionic. I searched a lot and found some plain Angular password show hide directive, but these had too much other dependencies and mostly didn't look that good within Ionic. Then . So I spent some time to create one.

# Features

The ionic-password-show-hide component has the following features:
- add show/hide button on the right side of the input field

# Ionic compatibility

Tested on Ionic version 1.3.1

# Installation

1. Import the `ionic-password-show-hide` javascript and css file into your HTML file:

  ```html
  <script src="sw2.ionic.password-show-hide.js"></script>
  <link href="sw2.ionic.password-show-hide.css" rel="stylesheet">
  ```
  
2. Add `sw2.ionic.password-show-hide` as a dependency on your Ionic app:

  ```javascript
  angular.module('myApp', [
    'ionic',
    'sw2.ionic.password-show-hide'
  ]);
  ```

# Usage

To use the `ionic-password-show-hide` directive you need set add `ionic-password-show-hide` attribute to input field:
```html
<input ng-model="myform.password" type="password" ionic-password-show-hide />
```

REMARK: In order to let the show/hide button is clickable, please use "div" instead of "label" to wrap your input field.

# Usage (options)

1. Add "data-password-show-btn-class" attribute to change show password button class. [Default: ion-eye]

2. Add "data-password-hide-btn-class" attribute to change hide password button class. [Default: ion-eye-disabled]


# Version

v1.1.0 (2017-02-03) Keep focus on field when click on button. (Base on the code from https://github.com/sonicwong/ionic-input-clearable) Add button class option.

v1.0.0 (2016-07-25) Initial release


# License

This Ionic directive is available under the MIT license.

(c) sw2sonic | sw2hk.com
