const { createApp } = Vue;

//import { createApp } from "vue";
//import App from "./App.vue";
const {vSelect} = "vue-select";




createApp({
  components: {
    vSelect: window["vue-select"]
  },
  data() {
    return {
      countries: [
        {
          country: "Spain",
          image: "https://flagsworld.org/img/cflags/spain-flag.png"
        },

        {
          country: "France",
          image: "https://flagsworld.org/img/cflags/France-flag.png"
        },
        {
          country: "Ghana",
          image: "https://flagsworld.org/img/cflags/ghana-flag.png"
        },
        {
          country: "Nigeria",
          image: "https://flagsworld.org/img/cflags/nigeria-flag.png"
        },
        {
          country: "Brazil",
          image: "https://flagsworld.org/img/cflags/brazil-flag.png"
        },
        {
          country: "Ecuador",
          image: "https://flagsworld.org/img/cflags/ecuador-flag.png"
        }
      ]
    };
  }
}).mount("#app");

console.log();