<template>

    <div @click="update()" class="toggle btn btn-default" :class="{ 'off': (! value), 'disabled':disabled }" data-toggle="toggle">
        <div class="toggle-group">
            <label class="btn btn-primary toggle-on">{{ this.on }}</label>
            <label class="btn btn-default active toggle-off">{{ this.off }}</label>
            <span class="toggle-handle btn btn-default"></span>
            <input type="hidden" :name="name" :value="(value)?'1':'0'">
        </div>
    </div>

</template>

<script>

    export default {
        props: {
            options: {
                type: Object,
                default: () => ({})
            },

            disabled: {
                type: Boolean,
                default: false,
            },

            initialValue: {
                type: Number,
                default: 0
            },

            name: {
                type: String,
                default: ""
            }
        },

        data() {
            return {
                value: false
            }
        },

        computed: {
            on() {
                return (this.options.on != null) ? this.options.on : 'On';
            },
            off() {
                return (this.options.off != null) ? this.options.off : 'Off';
            }
        },

        created() {
            this.value = !!this.initialValue;
        },

        methods: {
            update() {
                if(! this.disabled) {
                    this.value =! this.value;
                    this.$emit('update', this.value);
                }
            }
        }
    }

</script>

<style lang="css" src="../css/bootstrap-toggle.css"/>
