# UW Helper

A library that allows you to move the focus on the elements of your website by pressing several buttons in addition to Tab:

- **H**: move focus to next header
- **L**: move focus to next link
- **M**: move focus to next landmark (header, footer, main, section, etc.)
- **ArrowUp**: change the movement direction so the next element will be before the current focused element
- **ArrowDown**: change the movement direction so the next element will be after the current focused element

The website will scroll to the new focused element, and the element will get a bright focus style.

## Libary's usage

### Development

- clone the repo files
- run **npm start** and wait for the dev server to start
- open the index.html file in your browser

### Installing

- copy the files from the /dist directory into your website's directory
- import the library

```html
<body>
  <!-- content -->

  <script src="/path/to/uw-helper.js"></script>
</body>
```

### CDN like usage

- **this method works only on HTTP websites**
- import the library

```html
<body>
  <!-- content -->

  <script src="http://portfolio.adam.testhosting.hu/tests/uw-helper.js"></script>
</body>
```