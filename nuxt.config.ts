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
  },

  buildModules: ["nuxt-windicss"],
  windicss: {
    analyze: true,
  },
})
