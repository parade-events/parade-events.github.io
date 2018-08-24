// Grabs the news data from parade.events/announce/news.json
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    res = JSON.parse(this.response);

    console.log(res);

    // If it breaks we must have nothing to say.....
    if (!res) {
      output = "No announcements!";
    }

    let output = "";

    res.forEach(function(item) {
      var str = [
        "<span>",
        '<img class="infoIcon" src="./assets/info-white.png/>',
        '"<b><a class="announceTitle" href="',
        item.link,
        '">',
        item.title,
        "</a></b><br><div class='announceDescription'>",
        convertTimestamp(item.date),
        "- ",
        item.description,
        "</div></span>"
      ];

      output += str.join(" ");
      output += '<br>';
    });

    document.getElementById("announce").innerHTML = output;
  }
};

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];

function convertTimestamp(timestamp) {
  // Credits: https://gist.github.com/kmaida/6045266
  var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
    yyyy = d.getFullYear(),
    mm = ("0" + (d.getMonth() + 1)).slice(-2), // Months are zero based. Add leading 0.
    dd = ("0" + d.getDate()).slice(-2), // Add leading 0.
    hh = d.getHours(),
    h = hh,
    min = ("0" + d.getMinutes()).slice(-2), // Add leading 0.
    ampm = "AM",
    time;

  if (hh > 12) {
    h = hh - 12;
    ampm = "PM";
  } else if (hh === 12) {
    h = 12;
    ampm = "PM";
  } else if (hh == 0) {
    h = 12;
  }

  time = months[mm - 1] + ". " + dd;
  return time;
}

xhttp.open("GET", "https://parade.events/announce/news.json", true);
xhttp.send();
