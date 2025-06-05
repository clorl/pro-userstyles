# UserStyles Pro

**English** | [Français](README.fr.md)

A collection of userstyles to improve the UX of websites I frequently use at work.

# Installation

1. **Install Stylus browser extension:**
    * [Firefox](https://addons.mozilla.org/firefox/downloads/file/4451438/styl_us-2.3.14.xpi)
    * [Chrome](https://chromewebstore.google.com/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne?pli=1)
    * [Opera](https://addons.opera.com/en/extensions/privacy_policy/27c0f4146c879f67a91b70f93f4eee4a01846fdd/)
    * [Safari](https://tinyurl.com/ewtwzkfp)

2. **Install the styles**

[![Click Here to Install](https://img.shields.io/badge/Install%20-%20With%20Stylus%20-%20%231868db?style=for-the-badge)](https://raw.githubusercontent.com/clorl/pro-userstyles/main/dist/main.user.css)

# Configuration

When on a website if you click on the Stylus icon in your extensions, it will show you the style settings.
You can toggle specific features. Each site has a parameter to disable styling for this specific site.

TODO

# Websites

Here be dragons

# Development

These userstyles use the [Stylus]() CSS preprocessor. Stylus is automatically compiled by the user css extension hence no compilation step here.
This allows to use the userstyles variables defined in the metadata to conditionally include styles or not which would be impossible in pure css.
I created a simple build script to make development more manageable : 
1. It concatenates all the .styl files in the src dir in one big file (allows for multi-file userstyle which isn't supported)
2. It generates the metadata from a JS object

Anywhere in the code you can define userstyle variables using the following syntax
```js
// @var <type> <name>   <label>        <default value>
// Example
// @var text   myBorder "Border style" 3px dotted blue
```

The build script will gather all these variables and add them to the metadata block at the beginning of the userstyle file.
The syntax is exactly the same as defined by [the userstyle spec](https://github.com/openstyles/stylus/wiki/Writing-UserCSS#stylus), it's just a neat helper to have one site per file or separate components or whatever.

**Important :** The order of inclusion of the files is alphabetical, so you can reorder them by prefixing with a number like 10-myFile.styl. Non-numbered files are sorted at the end (because that's how alphabetical sorting works).
I don't number files that include styles for a specific site, and I do number ones that need to be loaded before (variables, functions whatever)

## Requirements

- Node JS

## Setup
```
npm install
```
## Build
```bash
npm run build
```

## Preview in browser and live reload

1. Drag and drop ``
