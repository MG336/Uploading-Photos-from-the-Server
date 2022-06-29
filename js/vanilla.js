let url = "https://jsonplaceholder.typicode.com/photos";


// g-s-item1
let gsItem1 = document.querySelectorAll('.g-s-item1');
let jsonResult = fetch(url).then(result => result.json());
let ImgBtnPrev = document.querySelector('.g-server__btn1');
let ImgBtnNext = document.querySelector('.g-server__btn2');
let item = 0;

// topImg
let gServerTopImg2 = document.querySelector('.g-server-topImg2');
let gServerTopImg2_img = document.querySelector('.g-server-topImg2__img');
let gServerTopImg2_caption = document.querySelector('.g-server-topImg2__caption');
let gServerTopImg2_close = document.querySelector('.g-server-topImg2__close');
let gServerTopImg2_id = document.querySelector('.g-server-topImg2__id');

//arrowsTopImg
let gServerTopImg2_arrowL = document.querySelector('.g-server-topImg2__arrowBox_l');
let gServerTopImg2_arrowR = document.querySelector('.g-server-topImg2__arrowBox_r');


function getImagesFromServer (items, jsonResult, itemNum=0){
    jsonResult.then(result => {
    for (let item of items) {
      let img = item.querySelector(".g-s-item1__img");
      let imgTitle = item.querySelector(".g-s-item1__title");
      let imgId = item.querySelector(".g-s-item1__id");
      let item1ImgBox = item.querySelector(".g-s-item1__imgBox")
    
      img.src = `${result[itemNum].thumbnailUrl}`;
      imgTitle.innerHTML = `${result[itemNum].title}`;
      imgId.innerHTML = `ID : ${result[itemNum].id}`;

      let imgUrl = `${result[itemNum].url}`
      
      item1ImgBox.onclick = (e) => {
        gServerTopImg2.style.display = 'flex';
        gServerTopImg2_img.src = imgUrl;
        gServerTopImg2_caption.innerHTML = imgTitle.innerHTML;
        gServerTopImg2_id.innerHTML = imgId.innerHTML;
    } 
    itemNum++
  }})  
}
    
getImagesFromServer(gsItem1, jsonResult);

     
//nav Prev/Next
ImgBtnNext.addEventListener("click", () => {
  item += gsItem1.length;
  getImagesFromServer(gsItem1, jsonResult, item);
});

ImgBtnPrev.addEventListener("click", () => {
  if (item > 0) {
    item -= gsItem1.length;
    getImagesFromServer(gsItem1, jsonResult, item);
  }
});
    



let topImgLink = document.querySelector('.g-s-item1__link');
let topImg = document.querySelector('.g-server-topImg');

topImgLink.addEventListener('mouseout',()=>{
    topImg.style.display = 'none'
})
        
//top image arrowsNav
function prevNextImagsTopImg (num){
    let id = +gServerTopImg2_id.innerHTML.substring(5); 
    id -= num;
    if(id > -1) { 
        jsonResult.then(result => {
            gServerTopImg2_img.src = `${result[id].url}`;
            gServerTopImg2_caption.innerHTML = `${result[id].title}`;
            gServerTopImg2_id.innerHTML = `ID : ${result[id].id}`;
        })}
    }
gServerTopImg2_arrowL.addEventListener('click',
    () => prevNextImagsTopImg(2)
)
gServerTopImg2_arrowR.addEventListener('click',
    () => prevNextImagsTopImg(0)
)    
gServerTopImg2.addEventListener('keydown',
    function (e) {
        console.log(11111)
        if(e.code == 'KeyZ') prevNextImagsTopImg(2)
    }
)  
    
gServerTopImg2_arrowR.addEventListener('keydown',
    () => prevNextImagsTopImg(0)
)    

gServerTopImg2_close.onclick = function(){
    gServerTopImg2.style.display = 'none';
}         
        
        



 
      
           
         
       
   
      


               