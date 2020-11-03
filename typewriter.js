let sentence = "hello there from lighthouse labs";

// console.log(sentence.charAt(31), sentence.length)

const charTimer = () => {
  let timer = 0;
  sentence += '\n'
  for (let char in sentence) {
    // console.log(`index of ${sentence[char]} is: ${char}`)
      setTimeout(() => {
        process.stdout.write(sentence[char]);
      }, timer)
      timer += 50;
    }
  }


charTimer(sentence)