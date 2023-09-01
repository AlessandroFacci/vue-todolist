const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "To Do List",

      toDoList: [
        {
          text: "Fare la spesa",
          done: true,
        },
        {
          text: "Chiamare il dentista",
          done: false,
        },
        {
          text: "Pulire casa",
          done: false,
        },
      ],

      newTask: {
        text: "",
        done: false,
      },
    };
  },
  methods: {
    deleteTask(index) {
      this.toDoList.splice(index, 1);
    },
    addNewTask() {
      const newTaskCopy = { ...this.newTask };

      this.toDoList.push(newTaskCopy);
    },
  },
}).mount("#app");
