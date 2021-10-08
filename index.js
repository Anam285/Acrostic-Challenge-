const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const main = ()=>{
    let words = (argv.text).toLowerCase().split(' ')
    let msg =(argv.msg).toLowerCase();
    let initial = words.map((item => item.charAt(0)));
    let last = words.map((item => item.charAt(item.length - 1)));
    let condition = true
    

    msg = msg.trim().split(" ").join("").split("");
    msg.map((item) => {if (initial.includes(item)){
        initial.splice(initial.indexOf(item), 1);
        return condition= true 
        }
        else if (last.includes(item)){
            last.splice(last.indexOf(item), 1)
        }
        else condition= false;
    })
    console.log(condition ? "Msg Exist": "Msg Does not Exist")
    
}



main()

