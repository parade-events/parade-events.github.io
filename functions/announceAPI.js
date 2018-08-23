// Grabs the news data from parade.events/announce/news.json
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    res = JSON.parse(this.response);

    console.log(res);

    // Hide our shame when it all goes wrong.
    if (!res) {
      return;
    }

    let output = '';

    res.forEach(function(item) {
      var str = ["<p>",'[i]<b>', item.title, "</b><br>", item.description, '</p>'];
      output += str.join(" ");
    });





    document.getElementById("announce").innerHTML = output;

      // songStatus +
      // "<span id='spotifyGreen'>" +
      // songName +
      // "</span>" +
      // filler1 +
      // "<span id='spotifyGreen'>" +
      // artistName +
      // "</span>" +
      // filler2
      // + spotifyStar;
  }
};
xhttp.open("GET", "https://parade.events/announce/news.json", true);
xhttp.send();
