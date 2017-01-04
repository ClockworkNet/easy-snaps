<template>
    <div class="container">
        <h2>Notice</h2>
        <ul>
        	 <li v-for="line in snapshot.notice">{{ line }}</li>
        </ul>
        <h2>Working On This Week</h2>
        <ul>
        	<li v-for="project in snapshot.projects"><strong>{{ project.client }}</strong>: {{project.description}} | {{project.hours}} Hours ({{displayPercentUsed(project.hours)}})</li>
        	<li v-if="snapshot.projects.length > 0 && availableHours > 0">Available for Additional Billable Work | {{availableHours }}
        </ul>
        <h2>Good, Bad, Ugly</h2>
       	<ul>
       		<li v-if="snapshot.gbu.good">Good: {{snapshot.gbu.good}}</li>
       		<li v-if="snapshot.gbu.bad">Bad: {{snapshot.gbu.bad}}</li>
       		<li v-if="snapshot.gbu.ugly">Ugly: {{snapshot.gbu.ugly}}</li>
       	</ul>

    </div>
</template>

<script>
	import percent from '../filters/percent.js';
    export default {
    	props: ['snapshot', 'totalHours'],
    	methods: {
    		displayPercentUsed(hours) {
    			return percent(hours / this.totalHours);
    		},
    	},
    	computed : {
    		availableHours() {
                return this.totalHours - this.snapshot.projects.map(function(project, prev) {
                    return prev + project.hours
                }, 0);
            }
    	}
    };
</script>

<style lang="sass" scoped>
    @import "../sass/component_helpers";


</style>