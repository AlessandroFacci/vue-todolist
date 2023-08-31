const { createApp } = Vue;

createApp({
  data() {
    return {
      toDoList: [
        {
          text: "",
          check: false,
        },
      ],
    };
  },
}).mount("#app");
