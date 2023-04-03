const images = ["01.jpg", "02.jpg", "03.jpg"];

const randomImage = images[Math.floor(Math.random()*images.length)];

// body.style.backgroundImages = /images/randomImage;

const bgImage = document.createElement("img");

bgImage.src = `img/${randomImage}`;
bgImage.width = "100"
bgImage.height = "100"
bgImage.left = "0"

bgImage.position = "absolute"
bgImage.opacity = "80"



// document.body.style.backgroundImage = "bgImage.src"
document.body.appendChild(bgImage) // html에 해당 element를 추가


// console.log(bgImage);

// createElement는 html 문서에 element를 추가하는 메서드
// {}.src 등을 이용해 해당 elememnt에 속성을 추가할 수 있다.
// <img src=> 태그가 추가되는 것!