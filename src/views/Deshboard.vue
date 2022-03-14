<template>
  <div class="deshboard">
    <v-subheader class="d-flex justify-space-between align-center">
      <h3>Deshboard</h3>
      <v-btn color="success" class="rounded-lg"> View Orders </v-btn>
    </v-subheader>
    <br />
    <v-row>
      <v-col lg="7" cols="12">
        <v-alert dense text type="success">
          Login Successfully! Welcome to <strong>web Burden</strong>
        </v-alert>
        <v-row>
          <v-col
            lg="6"
            cols="12"
            v-for="(item, index) in activities"
            :key="index"
          >
            <v-card elevation="2" class="rounded-lg">
              <v-card-text class="d-flex justify-space-between align-center">
                <div class="">
                  <strong>{{ item.title }}</strong
                  ><br />
                  <small>Last 2 weeks</small>
                </div>
                <v-avatar :color="item.color" size="60">
                  <span class="white--text">{{ item.amouts }}</span>
                </v-avatar>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col lg="5" cols="12">
        <v-card>
          <v-card-title>activities</v-card-title>
          <v-timeline align-top dense>
            <v-timeline-item color="pink" small>
              <strong>50 minuts ago</strong>
              <div class="text-caption">Mobile App</div>
            </v-timeline-item>

            <v-timeline-item color="green" small
              ><strong>10 minuts ago</strong>
              <div class="text-caption">Mobile App</div>
            </v-timeline-item>

            <v-timeline-item color="teal lighten-3" small
              ><strong>New Icon</strong>
              <div class="text-caption">Mobile App</div>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="12">
        <v-data-table
           caption="Recent Orders"
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Deshboard",
  data() {
    return {
      activities: [
        { title: "Total Products", color: "red", amouts: 4545 },
        { title: "Total Category", color: "purple", amouts: 23 },
        { title: "Total Orders", color: "indigo", amouts: 4545 },
        { title: "Pending Orders", color: "light-blue", amouts: 4545 },
      ],
       headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
};

</script>

<style></style>
