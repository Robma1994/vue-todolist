Vue.config.devtools = true;

const app = new Vue(
    {
        el: "#root",
        data: {
            newTasks: "",
            tasks: ["Fare la spesa", "Fare i compiti"]
        },
        methods: {
            addNewTasks(){
                this.tasks.push(this.newTasks);
            }
        }
    }
);