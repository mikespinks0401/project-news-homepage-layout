<script setup lang="ts">
const stories = [
  { title: "Hydrogen VS Electric Cars", text: "Will hydrogen-fueled cars ever catch up to EVs?" },
  { title: "The Downsides of AI Artistry", text: "What are the possible adverse effects of on-demand AI image generation?" },
  { title: "Is VC Funding Drying Up?", text: "Private funding by VC firms is down 50% YOY. We take a look at what that means." },
]

const links = [
  "Home", "New", "Popular", "Trending", "Category"
]

const articles = [
  {
    title: "Reviving Retro PCs",
    text: "What happens when old PCs are given modern upgrades?",
    img: "image-retro-pcs.jpg"
  },
  {
    title: "Top 10 Laptops of 2022",
    text: "Our best picks for various needs and budgets.",
    img: "image-top-laptops.jpg"
  },
  {
    title: "The Growth of Gaming",
    text: "How the pandemic has sparked fresh opportunities.",
    img: "image-gaming-growth.jpg"
  }
]

</script>

<template>
  <div>
    <v-app>
      <v-app-bar elevation="0">
        <v-container tag="container">
          <v-row align="center">

            <img src="/logo.svg" />
            <v-spacer />
            <div
              v-if="$vuetify.display.smAndDown"
              class="h-1 w-4"
            >
              <v-app-bar-nav-icon />
            </div>
            <ul
              v-else
              class="d-flex text-grey-darken-1"
            >
              <li v-for="link in links">
                {{ link }}
              </li>
            </ul>
          </v-row>
        </v-container>
      </v-app-bar>
      <v-main class="d-flex justify-center">
        <v-container tag="container">
          <v-row
            class="main-row"
            style="ma-2"
          >
            <v-col :cols="$vuetify.display.smAndDown ? 12 : 8">
              <v-row>
                <v-img
                  v-if="!$vuetify.display.smAndDown"
                  src="image-web-3-desktop.jpg"
                />
                <v-img
                  v-else
                  src="image-web-3-mobile.jpg"
                />

              </v-row>
              <v-row class="pt-4">
                <v-col :cols="$vuetify.display.smAndDown ? 12 : 6">
                  <h2 class="text-h2 font-weight-bold pr-16"> The Bright Future of Web 3.0?</h2>
                </v-col>
                <v-col class="d-flex flex-column justify-space-between">
                  <p class="text-grey">We dive into the next evolution of the web that claims to put the power of the
                    platforms back into
                    the hands of the people.
                    But is it really fulfilling its promise?</p>
                  <div>
                    <v-btn class="bg-red mt-2 px-10">
                      Read More
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="new-card d-flex flex-column pa-7">
              <h4 class="text-h4 font-weight-black text-amber-darken-1 pb-4">New</h4>
              <div class="h-100 d-flex flex-column justify-space-around">
                <template
                  v-for="(story, ind) of stories"
                  :key=ind
                >
                  <div class="py-4">
                    <h6 class="font-weight-bold py-2 text-h6">{{ story.title }}</h6>
                    <p class="text-grey">{{ story.text }}</p>
                  </div>
                  <v-divider
                    v-if="ind != 2"
                    thickness="2"
                    class="border-opacity-100"
                    color="grey-ligthen-5"
                  />
                </template>
              </div>
            </v-col>
          </v-row>
          <v-row class="mt-9">
            <template
              v-for="(article, index) in articles"
              :key="index"
            >
              <v-col :cols="$vuetify.display.smAndDown ? 12 : 4">
                <v-card
                  class="d-flex my-1"
                  elevation="0"
                >
                  <div class="d-flex flex-column">
                    <v-img
                      :width="$vuetify.display.smAndDown ? 120 : 100"
                      aspect-ratio="4/3"
                      :src="article.img"
                    />
                  </div>
                  <div class="pa-2 ml-1">
                    <div class="h-100  d-flex flex-column justify-space-between">
                      <h4 class="text-h4 text-grey-lighten-2 font-weight-bold">0{{ index + 1 }}</h4>
                      <h6 class="font-weight-black text-h6">{{ article.title }}</h6>
                      <p class="">{{ article.text }}</p>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </template>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
<style>
ul {
  list-style: none;
  gap: 3.5em;
}

ul li {
  font-weight: 700;
}

.v-container {
  width: 1400px;
}

.main-row {
  gap: 2em;
}

.new-card {
  background: hsl(240, 100%, 5%);
  color: white;
}

.v-app-bar-nav-icon {
  color: black;
}
</style>

