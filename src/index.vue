<template>

    <div @click="update()" class="toggle btn btn-default" :class="{ 'off': (! value), 'disabled':disabled }" :style="{ 'width': w, 'height': h }">
        <div class="toggle-group">
            <label class="btn btn-primary toggle-on">{{ this.on }}</label>
            <label class="btn btn-default active toggle-off">{{ this.off }}</label>
            <span class="toggle-handle btn btn-default"></span>
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
                type: Boolean,
                default: false,
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
            },

            w() {
                return (this.options.w != null) ? this.options.w.replace("px", "") + 'px' : 'auto';
            },

            h() {
                return (this.options.h != null) ? this.options.h.replace("px", "") + 'px' : 'auto';
            }

        },

        mounted() {
            this.value = this.initialValue;
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
