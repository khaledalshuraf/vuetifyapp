<template>
  <v-app id="inspire">
    <Header @HeaderDrawer="drawer=!drawer"/>
    <Sidebar :drawer="drawer"/>





    <v-main>
      <v-container
       class="py-8 px-6"
        fluid
      >
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';

export default {
  name: "App",

  data: () => ({
    cards: ["Today", "Yesterday"],
    drawer: true,

  }),
  components:{
    Header , 
    Sidebar
  }
};
</script>
