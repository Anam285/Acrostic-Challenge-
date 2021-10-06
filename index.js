const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
require("wordhub")

const main = ()=>{
    let words =[]
    words = (argv.text).split(' ')
    console.log(words)
    let initial =[]
    words.map((item)=>{
        initial.push(item.charAt(0))
    })
    let scrambleWord =initial.join(' ')
    console.log(scrambleWord)
    console.log(findWords(scrambleWord))
}

main()

