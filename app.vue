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

    return { mainText, eraserMotorPhantomized }
  }
}
</script>
