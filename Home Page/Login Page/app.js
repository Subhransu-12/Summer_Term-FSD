const backgroundPhoto=['ash-edmonds-mXBZo6PvjMk-unsplash.jpg','nathan-anderson-qtHvaKg42Vs-unsplash.jpg','philippe-toupet-R261qkc-nDE-unsplash.jpg']
const container=document.querySelector('.container');
let counter=0;
setInterval(()=>{
if(counter===3){
    counter=0;
}
bkgChanger();

},8000)


const bkgChanger=()=>{
    container.style.backgroundImage=`url(Photos/${backgroundPhoto[counter++]})`
}