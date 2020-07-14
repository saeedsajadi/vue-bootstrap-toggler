# Vue Bootstrap Toggler

A simple Vue.js component to add a bootstrap style toggle. Using Vue data bindings to handle class changes and removing the need for ~~jQuery~~ dependency.  This is based on the styles in [Bootstrap Toggle](https://www.bootstraptoggle.com/).


### Requirements

- [npm](https://www.npmjs.com/get-npm)
- [Vue.js](https://vuejs.org/)


### Installation

Install with [npm](https://www.npmjs.com/get-npm)

```
npm install --save-dev vue-bootstrap-toggler-with-input
```

----

### Full example
```
<template>
    <div>
        <vue-bootstrap-toggler :options="{ on: 'Yiss', off: 'Nah' }" :disabled="false" @update="updatedValue" 
        name="input_name"
        initial-value="toggleValue"></vue-bootstrap-toggler>
    </div>
</template>

<script>
    import vueBootstrapToggler from 'vue-bootstrap-toggler-with-input';

    export default {
        name: "YourComponentName",

        components: {
            vueBootstrapToggler
        },

        data() {
            return {
                toggleValue: true
            }
        },

        methods: {
            updatedValue(val) {
                this.toggleValue = val;
            }
        }
    }


```
