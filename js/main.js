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
                if(this.newTasks != "") {
                    this.tasks.push(this.newTasks);
                }
                
            }
        }
    }
);