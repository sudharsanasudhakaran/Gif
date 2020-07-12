let dataList = [
  {
    avatar: [
      "https://media.giphy.com/media/vEiCqOzQet1Is/giphy.gif",
      "https://media.giphy.com/media/PFsVjUCmSkZDq/giphy.gif",
      "https://media.giphy.com/media/STJ7W3pc7F6iA/giphy.gif",
      "https://media.giphy.com/media/yC7j4vZDEvrK8/giphy.gif",
      "https://media.giphy.com/media/V7YAU2ml6MD6M/giphy.gif",
      "https://media.giphy.com/media/npcUEgHlNLIzu/giphy.gif",
      "https://i.imgur.com/HtaUfj4.gif",
      "https://i.imgur.com/b6vW6Sr.gif",
      "https://media1.tenor.com/images/c9ba742c2058356b6d18598ed2923caa/tenor.gif?itemid=13766716",
      "https://media2.giphy.com/media/cpte18kjtF43e/giphy.gif",
      "https://raw.githubusercontent.com/sumitc91/data/master/askgif/hd_24506f09-26b0-4e7d-aa09-a87d4ce70821_judging_you_logo.gif",
      "https://thumbs.gfycat.com/HoarseDefiniteBarbet-size_restricted.gif"
    ]
  },
   {
     happy: [
       "https://giphy.com/gifs/dancing-happy-food-9Y6n9TR7U07ew",
       "https://giphy.com/gifs/happy-despicable-me-im-so-l46C52IJdRfvCGyVW",
       "https://giphy.com/gifs/cheer-cheering-11sBLVxNs7v6WA",
       "https://giphy.com/gifs/see-heavy-aQYR1p8saOQla",
       "https://giphy.com/gifs/new-girl-fox-new-girl-jeff-day-l3V0dy1zzyjbYTQQM",
       "https://media.tenor.com/images/02d6514c550f6b5ab07391d619944220/tenor.gif",
       "https://lipglossmaffia.files.wordpress.com/2017/06/happy-gif.gif",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQugjE_nxssoB743-mSegFZQiMBeyCPijnRjA&usqp=CAU",
       "https://2l90qdgid4-flywheel.netdna-ssl.com/wp-content/uploads/2017/08/laugh1.gif" ,     
       "https://24.media.tumblr.com/ac38cc25492e58279991752155117440/tumblr_mh5ujevbAm1s2vp06o1_500.gif",
       "https://cdn.lowgif.com/small/0796b5929ce90fae-crazy-happy-gif-crazy-happy-wierd-discover-share-gifs.gif",
       "https://i.pinimg.com/originals/2c/4b/cf/2c4bcf67816766b78dda7686079b1b7b.gif"
     ]
 },
  {
    sad: [
      "https://media.giphy.com/media/1BXa2alBjrCXC/giphy.gif",
      "https://media.giphy.com/media/M28rUlcjueKUE/giphy.gif",
      "https://media.giphy.com/media/NTY1kHmcLsCsg/giphy.gif",
      "https://media.giphy.com/media/wIhfELB4LvDhe/giphy.gif",
      "https://media2.giphy.com/media/TU76e2JHkPchG/giphy.gif",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQLM27VxLqaIT8tW7IVv3NvaDZ-UW4qWr9xw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsdJ7obuO0koiwGsNfzvEZPDK5tOsTh_dCXQ&usqp=CAU",
      "https://33.media.tumblr.com/a3ba5b0ad92b77fb735d829a23faac69/tumblr_noqzl8WxkN1ss1pmro1_500.gif",
      "https://66.media.tumblr.com/f04923ff214b5d241a9d18bad47ed034/1400f0db01fc21be-d9/s500x750/b565fc0c80e9ec302a6ac307a36ad46d2ff92564.gif",
      "https://i.gifer.com/origin/70/7083035f8f4625a01ac3f72ffabe7b3b_w200.gif",
      "https://i.dlpng.com/static/png/1258818-star-butterfly-sad-gif-sad-butterfly-png-498_278_preview.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXXFH7uiYlBwUr9Ev05-SuE4E1A2Q5p0yGpA&usqp=CAU"
    ]
  },
  {
    starwars: [
      "https://media3.giphy.com/media/Nx0rz3jtxtEre/200.gif",
      "https://media1.giphy.com/media/UIeLsVh8P64G4/giphy.gif",
      "https://thumbs.gfycat.com/FreshGleamingFulmar-size_restricted.gif",
      "https://media.giphy.com/media/6fScAIQR0P0xW/giphy.gif",
      "https://media.giphy.com/media/rHR8qP1mC5V3G/giphy.gif",
      "https://media.giphy.com/media/26FmQ6EOvLxp6cWyY/giphy.gif",
      "https://media.giphy.com/media/3ornk57KwDXf81rjWM/giphy.gif",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3GdergXdtdYlMPxokjn1hB4w8R6v7IoPiHQ&usqp=CAU",
      "https://i.pinimg.com/originals/22/82/b4/2282b4983f1a49f138b93f82a3f20923.gif",
      "https://i.chzbgr.com/full/9031979776/hBA93929F/you-where-the-chosen-one-star-wars-reaction-gif",
      "https://media2.giphy.com/media/U4q2Ej2UEdq5mzpUCB/200.gif"
    ]
  }
];

function getSearch() {
  const data = <HTMLInputElement>document.getElementById("searchPlayList");
  if (data.value === "avatar") 
  {
    (document.getElementById("demo") as HTMLImageElement).src = dataList[0].avatar[0];
    (document.getElementById("demo1") as HTMLImageElement).src = dataList[0].avatar[1];
    (document.getElementById("demo2") as HTMLImageElement).src = dataList[0].avatar[2];
    (document.getElementById("demo3") as HTMLImageElement).src = dataList[0].avatar[3];
    (document.getElementById("demo4") as HTMLImageElement).src = dataList[0].avatar[4];
    (document.getElementById("demo5") as HTMLImageElement).src = dataList[0].avatar[5];
    (document.getElementById("demo") as HTMLImageElement).src = dataList[0].avatar[6];
    (document.getElementById("demo1") as HTMLImageElement).src = dataList[0].avatar[7];
    (document.getElementById("demo2") as HTMLImageElement).src = dataList[0].avatar[8];
    (document.getElementById("demo3") as HTMLImageElement).src = dataList[0].avatar[9];
    (document.getElementById("demo4") as HTMLImageElement).src = dataList[0].avatar[10];
    (document.getElementById("demo5") as HTMLImageElement).src = dataList[0].avatar[11];
    (document.getElementById("demo5") as HTMLImageElement).src = dataList[0].avatar[12];

  }
  else if (data.value === "happy")
   {
    (document.getElementById("demo") as HTMLImageElement).src = dataList[1].happy[0];
    (document.getElementById("demo1") as HTMLImageElement).src = dataList[1].happy[1];
    (document.getElementById("demo2") as HTMLImageElement).src = dataList[1].happy[2];
    (document.getElementById("demo3") as HTMLImageElement).src = dataList[1].happy[3];
    (document.getElementById("demo4") as HTMLImageElement).src = dataList[1].happy[4];
    (document.getElementById("demo5") as HTMLImageElement).src = dataList[1].happy[5];
    (document.getElementById("demo") as HTMLImageElement).src = dataList[1].happy[6];
    (document.getElementById("demo1") as HTMLImageElement).src = dataList[1].happy[7];
    (document.getElementById("demo2") as HTMLImageElement).src = dataList[1].happy[8];
    (document.getElementById("demo3") as HTMLImageElement).src = dataList[1].happy[9];
    (document.getElementById("demo4") as HTMLImageElement).src = dataList[1].happy[10];
    (document.getElementById("demo5") as HTMLImageElement).src = dataList[1].happy[11];
    (document.getElementById("demo5") as HTMLImageElement).src = dataList[1].happy[12];

  }
  else if (data.value === "starwars") 
  {
    (document.getElementById("demo") as HTMLImageElement).src = dataList[3].starwars[0];
    (document.getElementById("demo1") as HTMLImageElement).src = dataList[3].starwars[1];
    (document.getElementById("demo2") as HTMLImageElement).src = dataList[3].starwars[2];
    (document.getElementById("demo3") as HTMLImageElement).src = dataList[3].starwars[3];
    (document.getElementById("demo4") as HTMLImageElement).src = dataList[3].starwars[4];
    (document.getElementById("demo5") as HTMLImageElement).src = dataList[3].starwars[5];
    (document.getElementById("demo") as HTMLImageElement).src = dataList[3].starwars[6];
    (document.getElementById("demo1") as HTMLImageElement).src = dataList[3].starwars[7];
    (document.getElementById("demo2") as HTMLImageElement).src = dataList[3].starwars[8];
    (document.getElementById("demo3") as HTMLImageElement).src = dataList[3].starwars[9];
    (document.getElementById("demo4") as HTMLImageElement).src = dataList[3].starwars[10];
    (document.getElementById("demo5") as HTMLImageElement).src = dataList[3].starwars[11];
    (document.getElementById("demo5") as HTMLImageElement).src = dataList[3].starwars[12];
  }  
    else if (data.value === "sad") 
    {
      (document.getElementById("demo") as HTMLImageElement).src = dataList[2].sad[0];
      (document.getElementById("demo1") as HTMLImageElement).src = dataList[2].sad[1];
      (document.getElementById("demo2") as HTMLImageElement).src = dataList[2].sad[2];
      (document.getElementById("demo3") as HTMLImageElement).src = dataList[2].sad[3];
      (document.getElementById("demo4") as HTMLImageElement).src = dataList[2].sad[4];
      (document.getElementById("demo5") as HTMLImageElement).src = dataList[2].sad[5];
      (document.getElementById("demo") as HTMLImageElement).src = dataList[2].sad[6];
      (document.getElementById("demo1") as HTMLImageElement).src = dataList[2].sad[7];
      (document.getElementById("demo2") as HTMLImageElement).src = dataList[2].sad[8];
      (document.getElementById("demo3") as HTMLImageElement).src = dataList[2].sad[9];
      (document.getElementById("demo4") as HTMLImageElement).src = dataList[2].sad[10];
      (document.getElementById("demo5") as HTMLImageElement).src = dataList[2].sad[11];
      (document.getElementById("demo5") as HTMLImageElement).src = dataList[2].sad[12];

}
function getSearchData() {
  let search = <HTMLInputElement>document.getElementById("searchTheme")
  console.log(search.value);
}
}