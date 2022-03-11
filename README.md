# rrule-input-js

rrule input javascript library

### Usage
1. Install dependencies

```sh
npm install
```

2. Create JS bundle

```sh
npm run build
```

The bundled script will be located in the `./dist` folder. The script should be added to the bottom of the page. It looks for a container with `class = rrule-container` and embeds the rrule form into it. The rrule string is located in the input element with `id = rrule-result`. The container can also be used inside other custom form, in this way the rrule string can be accessible either through the ` document.forms['your-custom-form-name']['rrule-result'].value` or by `#rrule-result` selector.

### Demo
1. Install dependencies

```sh
npm install
```

2. Run demo

```sh
npm run demo
```

Demo contains three examples:
- separate use (see `./src/demo/separate-use.html` for markup example)
- inside custom form (see `./src/demo/inside-custom-form.html` for markup example). This example also contains `Submit form` button, the rrule string will be logged in the browser console when that button is clicked.
- predefined form (see `./src/demo/predefined-form.html` for markup example). This example does not have a form container and has a predefined form instead. In this case (when the container does not exist) the script looks for the form (by `.rrule` selector) and handles it.
