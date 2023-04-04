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
    },
    {
      url: "https://vikasnehra1.github.io/DeltaLab/",
      imgSrc: "https://cdn.dribbble.com/users/77598/screenshots/11061482/media/b5b3fdb807d59245370ec35d4d8120ae.png?compress=1&resize=400x300&vertical=top",
      altText: "Name Game",
      titleText: "The Name Game",
      
    },

    {
      url: "https://barrycumbie.github.io/urban-giggle/",
      imgSrc: "https://static.beta.vooks.com/ec1068d0-cc15-11eb-9325-931c7e07f70b.png",
      altText: "Giggle Game",
      titleText: "The Giggle Game",
    },

      {
        url: "https://connorlbrown.github.io/bingbong-charlie/",
        imgSrc: "https://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440-s1100-c50.jpg",
        altText: "CB_Shaq",
        titleText: "Shaq Drag Game",
      },

      {
        url: "https://bcoan2.github.io/supreme-octo-broccoli-delta/",
        imgSrc: "https://cdn.dribbble.com/users/573008/screenshots/15733701/media/b8966ad171b5ed6a310a17cd807da9c8.png?compress=1&resize=400x300&vertical=top",
        altText: "Brody_Name_Game",
        titleText: "The Name Game",
      },

      {
        url: "https://kaibrysouthern.github.io/psychic-octo-adventure-delta/",
        imgSrc: "https://foxriverkayakingcompany.com/wp-content/uploads/2021/03/namegame-game.jpg",
        altText: "Kaibry Name Game",
        titleText: "The Name Game",
      },

      {
        url: "https://westonhumphries.github.io/laughing-octo-bravo/",
        imgSrc: "https://res.cloudinary.com/teepublic/image/private/s--A4tZkZYv--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1459902254/production/designs/469874_1.jpg",
        altText: "Weston Bravo",
        titleText: "Weston's Bravo Game",
      },

      {
        url: "https://jacksonthompson1.github.io/jt-lab-charlie/",
        imgSrc: "https://staticg.sportskeeda.com/editor/2022/11/82e65-16685586244889-1920.jpg",
        altText: "WooWop",
        titleText: "WooWop - HaHa",
      },

      {
        url: "https://mithrandiryeet.github.io/delta_name_game/",
        imgSrc: "https://foxriverkayakingcompany.com/wp-content/uploads/2021/03/namegame-game.jpg",
        altText: "Name Game",
        titleText: "The Name Game",
      },

      {
        url: "https://amannawaria12.github.io/charlie_lab/",
        imgSrc: "https://techcrunch.com/wp-content/uploads/2019/07/2019-bmw-i8-1.jpg",
        altText: "Charlie Game",
        titleText: "Aman Charlie Game",
      },

      {
        url: "https://gagethekidd.github.io/jerky-chicken-charlie/",
        imgSrc: "https://editors.dexerto.com/wp-content/uploads/2023/01/05/TikTokTopher.jpg",
        altText: "Topher Drag Game",
        titleText: "Topher Drag Game",
      },

      {
        url: "https://phenicieaaron.github.io/cookie-monster-charlie/",
        imgSrc: "https://www.middlebury.edu/office/sites/www.middlebury.edu.office/files/styles/432x576/public/2019-08/cookie-monster-portrait.jpg?fv=oYugFKrU&itok=6qZScOPW",
        altText: "Cookie Monster Game",
        titleText: "Cookie Monster Cookie Game",
      },
    
     {
        url: "https://anhnguyen148.github.io/echolab/",
        imgSrc: "https://anhnguyen148.github.io/echolab/assets/astronaul.png",
        altText: "Astronaul Game",
        titleText: "Astronaul Game",
      },

     {
        url: "https://anhnguyen148.github.io/dogegamev2/",
        imgSrc: "https://anhnguyen148.github.io/dogegamev2/assets/Doge-meme.jpg",
        altText: "Doge Meme Game",
        titleText: "Doge Meme Game",
      },

     {
        url: "https://stokeybear.github.io/DeltaLab/",
        imgSrc: "https://www.shutterstock.com/image-vector/vector-illustration-face-cute-lion-260nw-1787955260.jpg",
        altText: "The Stokeybear Name Game",
        titleText: "The Stokeybear Name Game",
      },

     {
        url: "https://junnoiri.github.io/cis-376-CHARLIE-lab/",
        imgSrc: "https://junnoiri.github.io/cis-376-CHARLIE-lab/img/Shiba-Inu-img.jpeg,
        altText: "Junnoiri Doge Game",
        titleText: "Junnoiri Doge Game",
      },



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
  
