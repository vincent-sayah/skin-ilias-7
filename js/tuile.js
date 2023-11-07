let divs = document.querySelectorAll(".il-card.thumbnail");
let borderIndex = 0;
let borders = ["40px 0px 40px 0px", "0px 40px 0px 40px"];

for (let i = 0; i < divs.length; i++) {
  if (i % 1 === 0) {
    borderIndex = (borderIndex + 1) % borders.length;
  }
  divs[i].style.borderRadius = borders[borderIndex];
}

let divheader = document.querySelectorAll(".il-card .il-card-repository-head");
let borderIndexHeader = 0;
let bordershearder = ["40px 0px 0px 0px", "0px 40px 0px 0px"];

for (let i = 0; i < divheader.length; i++) {
  if (i % 1 === 0) {
    borderIndexHeader = (borderIndexHeader + 1) % bordershearder.length;
  }
  divheader[i].style.borderRadius = bordershearder[borderIndexHeader];
}