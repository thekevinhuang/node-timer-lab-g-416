let timeleft = 0
let input = process.argv

if (!input[2]) {
  console.log("Please enter some time")
  process.exit(1)
} else if (input[2].indexOf('s')>-1) {

} else if (input[2].indexOf('min')>-1) {

} else {
  console.log("Please enter a valid time")
  process.exit(1)
}
