<template>
    <div class="container">
        <ul v-if="lines.length">
               <li v-for="line in lines" :key="line.id">{{ line.text }}
                   <button class="button primary tiny" v-on:click="editLine(line)">Edit</button>
                   <button class="alert button tiny" v-on:click="removeLine(line)">Remove</button>
                   <button class="button primary tiny" v-if="!isFirst(line) && lines.length > 1" v-on:click="swapUp(line)">Up</button>
                   <button class="button primary tiny" v-if="!isLast(line) && lines.length > 1" v-on:click="swapDown(line)">Down</button>
               </li>
        </ul>
        <fieldset class="fieldset">
            <legend v-if="editing">Edit Notice</legend>
            <legend v-else>Add Notice</legend>
            <textarea v-model="line"></textarea>
            <button class="button success" v-if="editing" v-on:click="addLine">Update</button>
            <button class="button success" v-else v-on:click="addLine">Add</button>
        </fieldset>

    </div>
</template>

<script>
    let id = 1;

    export default {
        props: ['value'],
        data() {
            return {
                lines : [],
                line : '',
                editing: false
            };
        },
        methods: {
            addLine() {
                this.lines.push({id: newId(), text: this.line});
                this.line = '';
                this.editing = false;
                this.updateValue(this.lines);
            },
            removeLine(line) {
                this.lines.splice(this.lines.indexOf(line), 1);
                this.updateValue(this.lines);
            },
            editLine(line) {
                this.editing = true;
                this.lines.splice(this.lines.indexOf(line), 1);
                this.line = line.text;
            },
            swapUp(line) {
                this.lines.splice( this.lines.indexOf(line), 1,  this.lines.splice( this.lines.indexOf(line) - 1, 1, line)[0]);
                this.updateValue(this.lines);
            },
            swapDown(line) {
                this.lines.splice( this.lines.indexOf(line), 1,  this.lines.splice( this.lines.indexOf(line) + 1, 1, line)[0]);
                this.updateValue(this.lines);
            },
            isLast: function(line) {
                return this.lines.length - 1 === this.lines.indexOf(line);
            },
            isFirst: function(line) {
                return 0 === this.lines.indexOf(line);
            },
            updateValue: function(lines) {
              this.$emit('input', lines.map(function(line) {
                return line.text;
              }));
            }
        }
    };

    function newId() {
        return id++;
    }

</script>

<style lang="sass" scoped>
    @import "../sass/component_helpers";


</style>