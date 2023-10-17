console.log("welcome to spotify");

//element initialisations
let songindex = 0;
let audioelement = new Audio('./songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let gif = document.getElementById('gif');
let songrange = document.getElementById('songrange');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let masterSongName = document.getElementById('masterSongName');
let next = document.getElementById('next');
let back = document.getElementById('back');

let songs = [
    {songname:"highwaytohell",filepath:"./songs/1.mp3",coverpath:"./covers/DSC_0650.jpg"},
    {songname:"Ali Gatie - What if i told you that i love you",filepath:"./songs/2.mp3",coverpath:"./covers/1.jpg"},
    {songname:"bad_guy",filepath:"./songs/3.mp3",coverpath:"./covers/4.jpg"},
    {songname:"Changes",filepath:"./songs/4.mp3",coverpath:"./covers/7.jpg"},
    {songname:"10000 hours",filepath:"./songs/5.mp3",coverpath:"./covers/8.jpg"},
    {songname:"Work From Home",filepath:"./songs/6.mp3",coverpath:"./covers/7.jpg"},
    {songname:"Bekhayali",filepath:"./songs/7.mp3",coverpath:"./covers/5.jpg"},
    {songname:"Pachtaoge",filepath:"./songs/8.mp3",coverpath:"./covers/3.jpg"},
]

//pause and play
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        gif.style.opacity = 1;
      
    }
    else{
        audioelement.pause();
        gif.style.opacity = 0;
        
    }
})

//Listen To event
audioelement.addEventListener('timeupdate',()=>{
    //update seekbar
    
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100)
    console.log(progress)
    songrange.value = progress;

    

})

songrange.addEventListener('change', ()=>{
    audioelement.currentTime = (songrange.value * songrange.duration)/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('play1')).forEach((element)=>{
        element.classList.remove('./icons/pause.png');
        element.classList.add('./icons/play.jpg');
    })
}

Array.from(document.getElementsByClassName('play1')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('./icons/play.jpg');
        e.target.classList.add('./icons/pause.png');
        audioelement.src = `./songs/${songindex+1}.mp3`;
        masterSongName.innerText = songs[songindex].musicname;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('./icons/play.jpg');
        masterplay.classList.add('./icons/pause.jpg');
    })
})

 next.addEventListener('click', ()=>{
     if(songindex>=9){
        songindex = 0
     }
     else{
         songindex += 1;
     }
     audioelement.src = `./songs/${songindex+1}.mp3`;
     masterSongName.innerText = songs[songindex].songname;
     audioelement.currentTime = 0;
     audioelement.play();
     masterplay.classList.remove('/icon/play.png');
     masterplay.classList.add('/icons/pause.jpg');

 })

     back.addEventListener('click', ()=>{
     if(songindex<=0){
         songindex = 0
     }
     else{
         songindex -= 1;
     }
     audioelement.src = `./songs/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songname;
     audioelement.currentTime = 0;
   audioelement.play();
     masterplay.classList.remove('/icons/play.png');
     masterplay.classList.add('/icons/pause.jpg');
 })


