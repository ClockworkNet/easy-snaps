<template>
    <div class="container">
        <div class="small-12 medium-6 column">
            <div v-html="compiled"></div>
        </div>
        <div class="small-12 medium-6 column">
            <pre>{{source}}</pre>
        </div>
    </div>
</template>

<script>
	import percent from '../filters/percent.js';
    import marked from 'marked';
    export default {
    	props: ['snapshot', 'totalHours'],
    	methods: {
    		displayPercentUsed(hours) {
    			return percent(hours / this.totalHours);
    		},
            renderNotice() {
                if(this.snapshot.notice.length > 0) {
                    return this.snapshot.notice.reduce(function(value, current) {
                        return value + '\n* ' + current;
                    }, '\n## Notice \n') + '\n';
                }
                else {
                    return '';
                }

            },
            renderProjects() {
                let renderLine = (line) => {
                    return '\n* ' + '**' + line.client + '**: ' + line.description +
                    ' | ' + line.hours + ' hours (' + this.displayPercentUsed(line.hours) +  ')';
                };
                let additionalWork = () => {
                    if( this.snapshot.projects.length > 0 && this.availableHours > 0 ) {
                        return '\n* ' + 'Available for Additional Billable Work | ' + this.availableHours;
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
            renderGbu() {
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
            }
    	},
    	computed : {
    		availableHours() {
                return this.totalHours - this.snapshot.projects.map(function(project, prev) {
                    return prev + project.hours;
                }, 0);
            },
            source() {
               return this.renderNotice() + this.renderProjects() + this.renderGbu();
            },
            compiled() {
                return marked(this.source, { sanitize: true });
            }
    	}
    };
</script>

<style lang="sass" scoped>
    @import "../sass/component_helpers";


</style>