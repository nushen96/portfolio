//Autotyping Effect
titles = ["Software Engineer", "FullStack Developer", "Code Ninja"];
new TypeIt("#title", {
  strings: titles,
  breakLines: false,
  speed: 100,
}).go();

//Scrolling nav effect
window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").className = "second-nav";
  } else {
    document.getElementById("navbar").className = "main-nav";
  }
};
