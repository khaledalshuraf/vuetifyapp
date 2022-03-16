<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-img src="../assets/26-2.jpg" class="pa-4">
      <div class="text-center mt-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64">
          <v-img aspect-ratio="30" src="../assets/download.jpg"></v-img>
        </v-avatar>
        <h2 class="white--text">{{ $t(title) }}</h2>
      </div>
    </v-img>

    <v-divider></v-divider>

    <v-list>
      <v-list-item
        v-for="[icon, text] in links"
        :key="icon"
        link
        @click="goTo(text)"
      >
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            <ul>
              <template>
                <li>
                  <a class="cursorPointer list-unstyled"> {{ $t(text) }}</a>
                </li>
              </template>
            </ul>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      title: "vuetify Admin Panel",
      links: [
        ["mdi-microsoft windows ", "Activation"],
        ["mdi-account", "Profile"],
        ["mdi-clipboard-list-outline", "Product"],
        ["mdi-clipboard-list", "Order"],
        ["mdi-cog-outline", "SystemSetting"],
      ],
    };
  },
  props: ["drawer"],
  methods: {
    goTo(text) {
      this.$router.push({ name: text });
      // كان من المفترض اضافه النيم داخل المصفوفه لكن بسبب ان النيم و التكس نفس الشي وضعنا التكست ولكن من الأفضل وضع النيم
    },
  },
};
</script>

<style></style>
