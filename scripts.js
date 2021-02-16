const arms = document.getElementById("arms");
const shoulders = document.getElementById("shoulders");
const chest = document.getElementById("chest");
const abs = document.getElementById("abs");
const legs = document.getElementById("legs");

const arms_ = document.querySelector(".grid-arms");
const arms_2 = document.querySelector(".grid-arms2");
const shoulders_ = document.querySelector(".grid-shoulders");
const chest_ = document.querySelector(".grid-chest");
const abs_ = document.querySelector(".grid-abs");
const legs_ = document.querySelector(".grid-legs");

const mouseOver = (element) => {
  element.style.visibility = "visible";
};
const mouseOut = (element) => {
  element.style.visibility = "hidden";
};

arms_.onmouseover = () => {
  mouseOver(arms);
};
arms_.onmouseout = () => {
  mouseOut(arms);
};
arms_2.onmouseover = () => {
  mouseOver(arms);
};
arms_2.onmouseout = () => {
  mouseOut(arms);
};
shoulders_.onmouseover = () => {
  mouseOver(shoulders);
};
shoulders_.onmouseout = () => {
  mouseOut(shoulders);
};
chest_.onmouseover = () => {
  mouseOver(chest);
};
chest_.onmouseout = () => {
  mouseOut(chest);
};
abs_.onmouseover = () => {
  mouseOver(abs);
};
abs_.onmouseout = () => {
  mouseOut(abs);
};
legs_.onmouseover = () => {
  mouseOver(legs);
};
legs_.onmouseout = () => {
  mouseOut(legs);
};
