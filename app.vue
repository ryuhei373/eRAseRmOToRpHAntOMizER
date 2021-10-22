<template>
  <div>
    <header class="bg-indigo-500 body-font">
      <div
        class="
          container
          mx-auto
          flex flex-wrap
          p-5
          flex-col
          md:flex-row
          items-center
        "
      >
        <div class="flex title-font font-medium items-center mb-4 md:mb-0">
          <span class="ml-3 text-gray-100 text-xl">eRAsoRmOToRpHAntOMizER</span>
        </div>
      </div>
    </header>

    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1
            class="
              sm:text-3xl
              text-2xl
              font-medium
              title-font
              mb-4
              text-gray-900
            "
          >
            {{ eraserMotorPhantomized }}
          </h1>
        </div>
        <div
          class="
            flex
            lg:w-2/3
            w-full
            sm:flex-row
            flex-col
            mx-auto
            px-8
            sm:space-x-4 sm:space-y-0
            space-y-4
            sm:px-0
            items-end
          "
        >
          <div class="relative flex-grow w-full">
            <input
              v-model="mainText"
              type="text"
              id="main"
              name="main"
              class="
                w-full
                bg-gray-100 bg-opacity-50
                rounded
                border border-gray-300
                focus:border-indigo-500
                focus:bg-transparent
                focus:ring-2
                focus:ring-indigo-200
                text-base
                outline-none
                text-gray-700
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out
              "
            />
          </div>
          <a v-bind:href="twitterShareUrl">
            <button
              class="
                text-white
                bg-indigo-500
                border-0
                py-2
                px-6
                focus:outline-none
                hover:bg-indigo-600
                rounded
                text-lg
                inline-flex
                items-center
                justify-evenly
              "
            >
              <svg
                class="fill-white pr-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                />
              </svg>
              <span class="pl-1">tWEeT</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="ts">
export default {
  setup() {
    const mainText = ref("eraser motor phantom")

    const eraserMotorPhantomized = computed(() => {
      if (mainText.value.length <= 1) {
        return mainText.value
      }

      if (mainText.value.split(" ").join("").toLowerCase() === "erasermotormaximum"){
        return "ErAseRmoToR maXimUM"
      } else if (mainText.value.split(" ").join("").toLowerCase() === "eraserenginedistorted"){
        return "ERaSeR EnGinE DistorteD"
      } else if (mainText.value.split(" ").join("").toLowerCase() === "eraserengine"){
        return "ERASER ENGINE"
      }

      const words = mainText.value.split(" ")

      const a = words.map(word => {
        const middleLetter = word.slice(1).slice(0, -1)
        let result = [];
        for (let i = 0; i < middleLetter.length / 2; i++) {
            result.push(middleLetter.substr(i * 2, 2));
        }

        const convertedMiddleLetter = result.map((w, index) => {
          if(index % 2 === 0){
            return w.toUpperCase()
          } else {
            return w.toLowerCase()
          }
        })

        return word.charAt(0).toLowerCase() + convertedMiddleLetter.join("") + word.charAt(word.length - 1).toUpperCase()
      })

      return a.join("")
    })

    const twitterShareUrl = computed(() => `https://twitter.com/intent/tweet?url=https://eloquent-volhard-d4031f.netlify.app&text=${eraserMotorPhantomized.value}&hashtags=eRAsoRmOToRpHAntOMizER`)

    return { mainText, eraserMotorPhantomized, twitterShareUrl }
  }
}
</script>
