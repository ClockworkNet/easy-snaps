<template>
    <div class="container row">
        <div class="small-12 medium-12 column">
            <div class="button-group">
                <button class="button primary" v-on:click="copySource()">Copy Markdown</button>
                <button class="button primary" v-on:click="copyCompiled()">Copy Text</button>
            </div>
            <div id="compiled" v-html="compiled"></div>

        </div>
    </div>
</template>

<script>
/* global document, window, MouseEvent, FocusEvent */
    import percent from '../filters/percent.js';
    import marked from 'marked';
    export default {
        props: ['snapshot', 'totalHours'],
        computed: {
            notice() {
                if(this.snapshot.notice.length > 0) {
                    return this.snapshot.notice.reduce(function(value, current) {
                        return value + '\n* ' + current;
                    }, '\n## Notice \n') + '\n';
                }
                else {
                    return '';
                }

            },
            projects() {
                let renderLine = (line) => {
                    return '\n* ' + '**' + line.client + '**: ' + line.description +
                    ' | ' + line.hours + ' hours (' + this.displayPercentUsed(line.hours) +  ')';
                };
                let additionalWork = () => {
                    if( this.snapshot.projects.length > 0 && this.availableHours > 0 ) {
                        return '\n* ' + 'Available for Additional Billable Work | ' + this.availableHours + ' hours (' + this.displayPercentUsed(this.availableHours) + ')';
                    }
                    else {
                        return '';
                    }
                };

                if(this.snapshot.projects.length > 0) {
                    return this.snapshot.projects.reduce(function(value, current) {
                        return value + renderLine(current);
                    }, '\n## Working On This Week \n') + additionalWork() + '\n';
                }
                else {
                    return '';
                }

            },
            gbu() {
                let {good, bad, ugly} = this.snapshot.gbu;
                let gbu = '';
                let headline = '';
                if( good || bad || ugly ) {
                    headline = '\n## The Good, The Bad, and The Ugly\n';
                }

                if( good ) {
                    gbu = gbu + '\n* **Good**: ' + good;
                }
                if( bad ) {
                    gbu = gbu + '\n* **Bad**: ' + bad;
                }
                if( ugly ) {
                    gbu = gbu + '\n* **Ugly**: ' + ugly;
                }
                return headline + gbu;
            },
            availableHours() {

                return this.totalHours - this.snapshot.projects.reduce(function(prev, project) {
                    return prev + project.hours;
                }, 0);
            },
            source() {
               return this.notice + this.projects + this.gbu;
            },
            compiled() {
                return marked(this.source, { sanitize: true });
            }


        },
        methods: {
            displayPercentUsed(hours) {
                return percent(hours / this.totalHours);
            },
            copyCompiled() {
                let compiled = document.getElementById("compiled");
                let selectEvent = new MouseEvent("select", {
                    bubbles: true,
                    cancelable: true,
                    view: window
                  });
                let focusEvent = new FocusEvent('focus', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });
                  compiled.dispatchEvent(focusEvent);
                  compiled.dispatchEvent(selectEvent);
                  document.execCommand('SelectAll');
                  document.execCommand('copy');
            },
            copySource() {
                let body = document.getElementsByTagName('body')[0];
                let source = document.createElement('textarea');
                source.value = this.source;
                body.appendChild(source);
                source.select();
                document.execCommand('copy');
                body.removeChild(source);
            }
        },
    };
</script>

<style lang="sass" scoped>
    @import "../sass/component_helpers";
    #compiled {
        user-select: text;
    }

</style>
