import { defineNuxtConfig } from "nuxt3"

export default defineNuxtConfig({
  meta: {
    title: "eRAsoRmOToRpHAntOMizER",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "入力したテキストをeRAseRmOToRpHAntOM風にするだけのサイト",
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://eloquent-volhard-d4031f.netlify.app",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "eRAsoRmOToRpHAntOMizER",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "入力したテキストをeRAseRmOToRpHAntOM風にするだけのサイト",
      },
    ],
    link: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true,
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&display=swap",

        preconnect: "https://fonts.googleapis.com",
      },
    ],
  },

  buildModules: ["nuxt-windicss"],
  windicss: {
    analyze: true,
  },
})
