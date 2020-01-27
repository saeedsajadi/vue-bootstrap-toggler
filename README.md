# Vue Bootstrap Toggler

- TODO - demo site



### Requirements

- npm
- Vue.js


### Full example
```
<template>
    <div>
        <vue-bootstrap-toggler :options="{ on: 'Yis', off: 'No' }" :disabled="false" @update="updatedValue" initialValue="tempVal"></vue-bootstrap-toggler>
    </div>
</template>

<script>
    import vueBootstrapToggler from 'vue-bootstrap-toggler';

    export default {
        name: "YourComponentName",

        data() {
            return {
                tempVal: true
            }
        },

        methods: {
            updatedValue(val) {
                this.tempVal = val;
            }
        }
    }


```
