var firstListItem = document.querySelector("ul li");
firstListItem.style.textTransform = "uppercase";
console.log(firstListItem);

var moreReasons = document.querySelector(".more-reasons");
moreReasons.style.fontSize = "2.5em";
console.log(moreReasons.outerHTML);

var whyJS = document.querySelector("h3");
whyJS.innerHTML = `Why learn <span class="highlight">JavaScript</span>`;
console.log(whyJS.outerHTML);

var highLight = document.querySelector(".highlight");
highLight.style.backgroundColor = "#ffff82";

var mainImage = document.querySelector("img");
mainImage.src = "img/js-code.png";
mainImage.alt = "JavaScript code example";
console.log(mainImage);