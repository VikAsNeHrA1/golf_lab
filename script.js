//script file

// const links = document.querySelectorAll('a'); // get all the links on the page

// links.forEach(link => {
//   link.addEventListener('click', () => {
//     console.log(`Link clicked: ${link.href}`); // log the href attribute of the clicked link
//   });
// });

// function log() {
//     console.log('Clicked');
//   };
//   <button onclick="log()">Click me!</button>

// console.log('https://vikasnehra1.github.io/CharlieLab/');


//script file

// const links = document.querySelectorAll('a'); // get all the links on the page

// links.forEach(link => {
//   link.addEventListener('click', () => {
//     console.log(`Link clicked: ${link.href}`); // log the href attribute of the clicked link
//   });
// });

// function log() {
//     console.log('Clicked');
//   };
//   <button onclick="log()">Click me!</button>

// console.log('https://vikasnehra1.github.io/CharlieLab/');

const data = [
    { 
      url: "https://vikasnehra1.github.io/CharlieLab/",
      imgSrc: "https://imgs2.dab3games.com/yolo-dogecoin-game34.png",
      altText: "Doge Game",
      titleText: "The Doge Game",
      description: "Play as a Doge and collect coins in this fun game!"
    },
    {
      url: "https://vikasnehra1.github.io/DeltaLab/",
      imgSrc: "https://cdn.dribbble.com/users/77598/screenshots/11061482/media/b5b3fdb807d59245370ec35d4d8120ae.png?compress=1&resize=400x300&vertical=top",
      altText: "Name Game",
      titleText: "The Name Game",
      description: "Test your knowledge of names with this challenging game!"
    },

    {
        url: "https://barrycumbie.github.io/urban-giggle/",
        imgSrc: "https://static.beta.vooks.com/ec1068d0-cc15-11eb-9325-931c7e07f70b.png",
        altText: "Name Game",
        titleText: "The Name Game",
        description: "Test your knowledge of names with this challenging game!"
      },

      {
        url: "https://vikasnehra1.github.io/DeltaLab/",
        imgSrc: "https://cdn.dribbble.com/users/77598/screenshots/11061482/media/b5b3fdb807d59245370ec35d4d8120ae.png?compress=1&resize=400x300&vertical=top",
        altText: "Name Game",
        titleText: "The Name Game",
        description: "Test your knowledge of names with this challenging game!"
      },

      {
        url: "https://vikasnehra1.github.io/DeltaLab/",
        imgSrc: "https://cdn.dribbble.com/users/77598/screenshots/11061482/media/b5b3fdb807d59245370ec35d4d8120ae.png?compress=1&resize=400x300&vertical=top",
        altText: "Name Game",
        titleText: "The Name Game",
        description: "Test your knowledge of names with this challenging game!"
      },

      {
        url: "https://vikasnehra1.github.io/DeltaLab/",
        imgSrc: "https://cdn.dribbble.com/users/77598/screenshots/11061482/media/b5b3fdb807d59245370ec35d4d8120ae.png?compress=1&resize=400x300&vertical=top",
        altText: "Name Game",
        titleText: "The Name Game",
        description: "Test your knowledge of names with this challenging game!"
      },

      {
        url: "https://vikasnehra1.github.io/DeltaLab/",
        imgSrc: "https://cdn.dribbble.com/users/77598/screenshots/11061482/media/b5b3fdb807d59245370ec35d4d8120ae.png?compress=1&resize=400x300&vertical=top",
        altText: "Name Game",
        titleText: "The Name Game",
        description: "Test your knowledge of names with this challenging game!"
      },

      {
        url: "https://vikasnehra1.github.io/DeltaLab/",
        imgSrc: "https://cdn.dribbble.com/users/77598/screenshots/11061482/media/b5b3fdb807d59245370ec35d4d8120ae.png?compress=1&resize=400x300&vertical=top",
        altText: "Name Game",
        titleText: "The Name Game",
        description: "Test your knowledge of names with this challenging game!"
      },

      {
        url: "https://vikasnehra1.github.io/DeltaLab/",
        imgSrc: "https://cdn.dribbble.com/users/77598/screenshots/11061482/media/b5b3fdb807d59245370ec35d4d8120ae.png?compress=1&resize=400x300&vertical=top",
        altText: "Name Game",
        titleText: "The Name Game",
        description: "Test your knowledge of names with this challenging game!"
      }


  ];
  
  const container = document.getElementById("myContainer");
  
  data.forEach(item => {
    const gameDiv = document.createElement("div");
    gameDiv.className = "game";
    
    const link = document.createElement("a");
    link.href = item.url;
    link.target = "_blank";
    
    const img = document.createElement("img");
    img.src = item.imgSrc;
    img.alt = item.altText;
    img.title = item.titleText;
    
    const p = document.createElement("p");
    p.textContent = item.description;
    
    link.appendChild(img);
    link.appendChild(p);
    gameDiv.appendChild(link);
    container.appendChild(gameDiv);
  });
  
