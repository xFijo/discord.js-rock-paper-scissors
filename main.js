// for in command handler

const options = [
        "rock :shell: ",
        "paper :newspaper2:",
         "scissors :scissors: "
     ]
     const option = options[Math.floor(Math.random() * options.length)]
     message.channel.send(`You got ${option}`);
