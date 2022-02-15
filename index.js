const portfolio = [
  {
    name: "Getflix",
    link: "http://getflix.atwebpages.com/Frontend/welcome.php",
  },
  { name: "Slayer", link: "https://dan-dh.github.io/slayer/" },
  { name: "HaikuBoto", link: "https://github.com/Dan-DH/HaikuBoto" },
  { name: "¡Piñata!", link: "https://dan-dh.github.io/pinata/" },
  { name: "GeekOut!", link: "https://geekout.netlify.app/" },
  {
    name: "Krusty Krab",
    link: "https://dan-dh.github.io/restaurant-css-framework/",
  },
  {
    name: "Cookie Heaven",
    link: "https://alisancavus.github.io/CookieClicker/",
  },
  { name: "Responsivo", link: "https://dan-dh.github.io/responsivo/" },
];

var index = 0;
var r_index = 6;

function loopyLoop() {
  document.getElementById("p1").innerHTML = portfolio[index].name;
  document.getElementById("p1").href = portfolio[index].link;
  index++;
  index > 6 ? (index = 0) : true;

  document.getElementById("p2").innerHTML = portfolio[r_index].name;
  document.getElementById("p2").href = portfolio[r_index].link;
  r_index--;
  r_index < 0 ? (r_index = 6) : true;
}

setInterval(loopyLoop, 5000);
