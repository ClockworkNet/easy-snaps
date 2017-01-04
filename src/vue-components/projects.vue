<template>
    <div class="container">
        <ul v-if="projects.length">
               <li v-for="project in projects" :key="project.id">
                    <strong>{{project.client}}</strong> |
                    {{project.description}}
                    - {{project.hours}}
                   <button class="button primary tiny" v-on:click="editProject(project)">Edit</button>
                   <button class="alert button tiny" v-on:click="removeProject(project)">Remove</button>
                   <button class="button primary tiny" v-if="!isFirst(project) && projects.length > 1" v-on:click="swapUp(project)">Up</button>
                   <button class="button primary tiny" v-if="!isLast(project) && projects.length > 1" v-on:click="swapDown(project)">Down</button>
               </li>
               <li
        </ul>
        <fieldset class="fieldset">
            <legend v-if="editing">Edit Project</legend>
            <legend v-else="editing">Add Project</legend>
            <div class="row">
                <div class="small-8 column">
                    <label>Client<input  type="text" v-model="project.client" /></label>
                </div>
                <div class="small-4 column">
                    <label>Hours<input type="number" v-model="project.hours" /></label>
                </div>
                <div class="small-12 column">
                    <label>Description<input type="text" v-model="project.description" /></label>
                </div>
            </div>
            <button class="button success" v-if="editing" v-on:click="addProject">Update</button>
            <button class="button success" v-else v-on:click="addProject">Add</button>
        </fieldset>
    </div>
</template>

<script>
    let id = 1;
    const project_template = {client: '', description:'', hours:0};

    export default {
        props: ['value', 'totalHours'],
        data() {
            return {
                projects : [],
                project : getTemplate(),
                editing: false
            };
        },
        methods: {
            addProject() {
                let new_project = Object.assign({}, this.project, { id: newId() });
                this.projects.push(new_project);
                this.project = getTemplate();
                this.editing = false;
                this.updateValue(this.projects);
            },
            removeProject(project) {
                this.projects.splice(this.projects.indexOf(project), 1);
                this.updateValue(this.projects);
            },
            editProject(project) {
                let {client, description, hours} = project;
                this.projects.splice(this.projects.indexOf(project), 1);
                this.project = Object.assign({}, {'client': client, 'description': description, 'hours': hours});
                this.editing = true;
            },
            swapUp(project) {
                this.projects.splice( this.projects.indexOf(project), 1,  this.projects.splice( this.projects.indexOf(project) - 1, 1, project)[0]);
                this.updateValue(this.projects);
            },
            swapDown(project) {
                this.projects.splice( this.projects.indexOf(project), 1,  this.projects.splice( this.projects.indexOf(project) + 1, 1, project)[0]);
                this.updateValue(this.projects);
            },
            isLast: function(project) {
                return this.projects.length - 1 === this.projects.indexOf(project);
            },
            isFirst: function(project) {
                return 0 === this.projects.indexOf(project);
            },
            getPercent: function(hours) {
                return hours / this.totalHours;
            },
            updateValue: function(projects) {
              this.$emit('input', projects.map(function(project) {
                let {client, description, hours} = project;
                return Object.assign({}, {'client': client, 'description': description, 'hours': hours});
              }));
            }
        }
    };

    function newId() {
        return id++;
    }
    function getTemplate() {
        return Object.assign({}, project_template);
    }

</script>

<style lang="sass" scoped>
    @import "../sass/component_helpers";


</style>