<template>
    <div class="container">
        <transition name="custom-classes-transition"enter-active-class="animated fadeIn"leave-active-class="animated fadeOut">
           <div class="callout" v-for="line in lines" :key="line.id">{{ line.text }}
            <button class="close-button" aria-label="Delete Line" type="button" v-on:click="removeLine(line)">
                <span aria-hidden="true">x</span>
            </button>
               <a v-on:click="editLine(line)">Edit</a>

               <button class="button secondary tiny hollow" v-if="!isFirst(line) && lines.length > 1" v-on:click="swapUp(line)">Up</button>
               <button class="button secondary tiny hollow" v-if="!isLast(line) && lines.length > 1" v-on:click="swapDown(line)">Down</button>
           </div>
        </transition>
        <fieldset class="fieldset">
            <legend v-if="editing">Edit Notice</legend>
            <legend v-else>Add Notice</legend>
            <input type="text" v-model="line" />
            <button class="button primary" v-if="editing" v-on:click="addLine">Update</button>
            <button class="button primary" v-else v-on:click="addLine">Add</button>
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
                if( this.line.length ) {
                    this.lines.push({id: newId(), text: this.line});
                    this.line = '';
                    this.editing = false;
                    this.updateValue(this.lines);
                }

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
    .button {
        margin-bottom:0;
    }
    .callout {
        padding: .2rem;
        margin-bottom: .2rem;
    }
    .close-button {
        font-size: 1.2em;
        top:.2rem;
    }

</style>