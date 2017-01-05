<template>
    <div class="application row">
        <h2>{{app_title}}</h2>
        <div class="small-12 column">
            <div class="row">
                <div class="small-12 medium-6 column">
                <div class="row">
                    <div class="small-12 medium-4 column">
                        <label>Total Available This Week<input type="number" v-model="targetHours" /></label>
                    </div>
                    <div class="small-12 medium-4 column">
                        <label>Total Accounted For<input type="number" disabled v-bind:value="usedHours" /></label>
                    </div>
                    <div class="small-12 medium-4 column">
                        <label>Total Remaining<input type="number" disabled v-bind:value="remaingHours" /></label>
                    </div>
                </div>
                    <progress class="success" max="100" v-if="percentUsed > 87" v-bind:value="percentUsed"></progress>
                    <progress class="warning" max="100" v-else-if="percentUsed > 60" v-bind:value="percentUsed"></progress>
                    <progress class="alert" max="100" v-else v-bind:value="percentUsed"></progress>
                    <projects v-model="projects" :totalHours="targetHours" class="animated"  transition="tasks"></projects>
                </div>
                <div class="small-12 medium-6 column">
                    <notice v-model="notice"></notice>
                    <gbu v-model="gbu"></gbu>
                </div>
            </div>
        </div>
        <div class="small-12 medium-12 column">
            <snapshot :snapshot="snapshot" :totalHours="targetHours"></snapshot>
        </div>

    </div>
</template>

<script>
import percent from '../filters/percent.js';
import log from '../logger.js';

import data from '../data.js';

import NoticeComponent from './notice.vue';
import SnapshotComponent from './output.vue';
import GbuComponent from './gbu.vue';
import ProjectsComponent from './projects.vue';

log.setLogLevel('debug');

    export default {
        data() {
            return data;
        },
        components: {
            'notice' : NoticeComponent,
            'snapshot' : SnapshotComponent,
            'gbu' : GbuComponent,
            'projects' : ProjectsComponent
        },
        computed : {
            snapshot() {
                return {
                    'notice'      : this.notice,
                    'gbu'         : this.gbu,
                    'projects'    : this.projects
                };
            },
            usedHours() {
                return this.projects.reduce(function(a, b) {
                          return a + b.hours;
                        }, 0);
            },
            remaingHours() {
                return this.targetHours - this.projects.reduce(function(a, b) {
                          return a + b.hours;
                        }, 0);
            },
            displayPercentUsed() {
                return percent(this.projects.reduce(function(a, b) {
                          return a + b.hours;
                        }, 0) / this.targetHours);
            },
            percentUsed() {
                return percent(this.projects.reduce(function(a, b) {
                          return a + b.hours;
                        }, 0) / this.targetHours, 2, false);
            }

        },
        mounted() {
            log.debug('Loaded Snapshot Application');
        }
    };
</script>