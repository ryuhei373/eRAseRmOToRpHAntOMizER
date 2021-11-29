export const useEraserMotorPhantomize = () => {
  // 入力: フォームに入力された値
  const input = ref("eraser motor phantom")

  // 出力: 変換されたテキスト
  const eraserMotorPhantomized = computed(() => {
    if (input.value.length <= 1) {
      return input.value
    }

    if (
      input.value.split(" ").join("").toLowerCase() === "erasermotormaximum"
    ) {
      return "ErAseRmoToR maXimUM"
    } else if (
      input.value.split(" ").join("").toLowerCase() === "eraserenginedistorted"
    ) {
      return "ERaSeR EnGinE DistorteD"
    } else if (
      input.value.split(" ").join("").toLowerCase() === "eraserengine"
    ) {
      return "ERASER ENGINE"
    }

    // 単語ごとに「先頭を小文字、終端を大文字、それ以外は二文字ずつ大文字、小文字、大文字、...の順に変換」を行う
    return input.value
      .split(" ")
      .map((word) => {
        // 1文字だったらその1文字を小文字にして返す
        if (word.length <= 1) {
          return word.toLowerCase()
        }

        const middleLetter = word.slice(1).slice(0, -1)
        const result: string[] = []
        for (let i = 0; i < middleLetter.length / 2; i++) {
          result.push(middleLetter.substr(i * 2, 2))
        }

        const convertedMiddleLetter = result.map((w, index) => {
          if (index % 2 === 0) {
            return w.toUpperCase()
          } else {
            return w.toLowerCase()
          }
        })

        return (
          word.charAt(0).toLowerCase() +
          convertedMiddleLetter.join("") +
          word.charAt(word.length - 1).toUpperCase()
        )
      })
      .join("")
  })

  const twitterShareUrl = computed(
    () =>
      `https://twitter.com/intent/tweet?url=https://erasermotorphantomizer.netlify.app&text=${encodeURIComponent(
        eraserMotorPhantomized.value + " #eRAseRmOToRpHAntOMizER"
      )}`
  )

  return { input, eraserMotorPhantomized, twitterShareUrl }
}
