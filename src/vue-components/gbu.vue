<template>
    <div class="container">
    <fieldset class="fieldset">
        <legend>Good, Bad, and Ugly</legend>
        <label>Good<input type="text" v-model="good" v-on:blur="change"/></label>
        <label>Bad<input type="text" v-model="bad" v-on:blur="change"/></label>
        <label>Ugly<input type="text" v-model="ugly" v-on:blur="change"/></label>
    </fieldset>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        data() {
            return {
                good : '',
                bad : '',
                ugly : ''
            };
        },
        methods: {
            change() {
                this.$emit('input', {
                    good : this.good,
                    bad  : this.bad,
                    ugly : this.ugly
                });
            }
        }
    };

</script>

<style lang="sass" scoped>
    @import "../sass/component_helpers";


</style>