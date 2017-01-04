<template>
    <div class="container">
       <div class="callout" v-for="project in projects" :key="project.id">
             <button class="close-button" aria-label="Delete Project" type="button" v-on:click="removeProject(project)">
             <span aria-hidden="true">x</span>
             </button>
            <strong>{{project.client}}</strong> |
            {{project.description}}
            - {{project.hours}}
           <a v-on:click="editProject(project)">Edit</a>
           <button class="button secondary tiny hollow" v-if="!isFirst(project) && projects.length > 1" v-on:click="swapUp(project)">Up</button>
           <button class="button secondary tiny hollow" v-if="!isLast(project) && projects.length > 1" v-on:click="swapDown(project)">Down</button>
       </div>
        <fieldset class="fieldset">
            <legend v-if="editing">Edit Project</legend>
            <legend v-else="editing">Add Project</legend>
            <div class="row">
                <div class="small-8 column">
                    <label>Client<input  type="text" v-model.trim="project.client" /></label>
                </div>
                <div class="small-4 column">
                    <label>Hours<input type="number" v-model.number="project.hours" /></label>
                </div>
                <div class="small-12 column">
                    <label>Description<input type="text" v-model.trim="project.description" /></label>
                </div>
            </div>
            <button class="button primary" v-if="editing" v-on:click="addProject">Update</button>
            <button class="button primary" v-else v-on:click="addProject">Add</button>
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
                let {client, hours, description} = this.project;
                if( client.length && hours > 0 && description.length ) {
                    let new_project = Object.assign({}, this.project, { id: newId() });
                    this.projects.push(new_project);
                    this.project = getTemplate();
                    this.editing = false;
                    this.updateValue(this.projects);
                }

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
    .button {
        margin-bottom:0;
    }
    .callout {
        padding: .2rem;
        margin-bottom: .2rem;
    }
    .close-button {
        font-size: 1.2em;
    }

</style>