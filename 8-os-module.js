const os = require('os')

// info about current user
 const user = os.userInfo()
 console.log(user)

 //check uptime of device
console.log(`the system uptime is ${os.uptime()}`)
 
const currentOs = {
    name: os.type(),
    release: os.release(),
}

console.log(currentOs)