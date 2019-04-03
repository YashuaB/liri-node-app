

require("dotenv").config()
var fs = require("fs");
var func = require("./func")


var userRequest = process.argv[2]
var userInput = process.argv.slice(3).join(" ")

userPick(userRequest, userInput)

function userPick(option, search) {

  userRequest = option
  userInput = search
  if (userRequest === "concert-this") {

    func.findConcert(userInput)

  } else if (userRequest === "movie-this") {

    func.findMovie(userInput) 

  } else if (option === "spotify-this-song") {

    func.findSong(userInput)


  } else if (userRequest === "do-what-it-says") {
    random()
   
  } else {
    console.log("Could not find search result")
  }


}

function random() {

  fs.readFile("random.txt", "utf8", function (err, data) {

    var output = data.split(", ")
   // var newOutput = output.split(",")
    // console.log(output.split(","));
    // spotify.findSong(newOutput[0],newOutput[1])

    userPick(output[0], output[1])
  });
}