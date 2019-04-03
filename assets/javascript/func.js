
var Spotify = require('node-spotify-api')
var axios = require("axios")
var moment = require("moment")
moment().format()

function findSong(nameOfSong){
    
  var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret:  process.env.SPOTIFY_SECRET
  });

  spotify
    .search({ type: 'track', query: nameOfSong, limit: 5 })
    .then(function (response) {

      
      
    console.log(`
       Song Name: ${response.tracks.items[0].name} 
       -------------------------------------------
       URl:       ${response.tracks.items[0].preview_url}
       -------------------------------------------
       Album Name: ${response.tracks.items[0].album.name}
       -------------------------------------------
       Artist Name:${response.tracks.items[0].artists[0].name}`)

    

})
}
function findMovie(nameOfMovie){

  // var movie = new Movie({
  //   id: process.env.MOVIE_ID
    
  // });

  var movie = process.env.MOVIE_ID
  
  var queryUrl = "http://www.omdbapi.com/?t=" + nameOfMovie + "&y=&plot=short&apikey=" + movie + ""
  axios.get(queryUrl).then(
    function(response){
     
      console.log(`
      Movie Title: ${response.data.Title}
      ------------------------------------
      Release Date: ${response.data.Released}
      ------------------------------------
      IMDB Rating:  ${response.data.imdbRating}
      ------------------------------------
      Country:      ${response.data.Country}
      ------------------------------------
      Language:     ${response.data.Language}
      ------------------------------------
      Plot:${response.data.Plot}
      -------------------------------------
      Actors:       ${response.data.Actors}
      -------------------------------------
      rotten tomatoes: ${response.data.Ratings[0].Value}
      `)
      
    }
  )
}

 function findConcert(concert){
   var concertKey = process.env.CONCERT_ID
  var queryUrl = "https://rest.bandsintown.com/artists/" + concert + "/events?app_id=" + concertKey +""
  
  axios.get(queryUrl).then(
    function(response){

      time = response.data[0].datetime
     // concert = JSON.parse(response.data)
      console.log(`
            Venue:  ${response.data[0].venue.name}
            -------------------------------------
            City concert is in: ${response.data[0].venue.city}
            -------------------------------------
            Date of concert:     ${moment(time).format("MM/DD/YYYY")}`)
      // console.log(" The movie was released " + response.data.venue.name)
    }
  )

 }


module.exports = {
  findSong:findSong,
  findMovie:findMovie,
  findConcert:findConcert
}


