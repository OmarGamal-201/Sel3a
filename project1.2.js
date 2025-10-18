
const images=[
    'about1.jpg',
     'about2.jpg',
     'about3.jpg',
     'about4.jpg',
    
];
let currentimageindex=0;

function changeimage(){
  currentimageindex=(currentimageindex+1)%images.length;
  document.getElementById('mainimage').src=images[currentimageindex];

}
setInterval(changeimage,3000)