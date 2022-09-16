console.log("Welcome to NinjaStudios");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/6.mp3');
let masterPlay = document.getElementById('masterPlay');
let playlist = document.getElementById('playlist');
let playlistAside = document.getElementById('playlistAside');
let playlistPlayAll = document.getElementById('playlistPlay');
let footer = document.getElementById('footer');
let screenIcon = document.getElementById('screenIcon');
let masterCover = document.getElementById('masterCover');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('sidebar__item'));
let slaveItems = Array.from(document.getElementsByClassName('release__item-overlay'));
let volume = document.getElementById("volumeIcon")
let volumeBar = document.getElementById("volumeBar")
let artistData = document.getElementById("artist-data")
let artistsInfo = Array.from(document.getElementsByClassName("artists__items"))
let playlistList = Array.from(document.getElementsByClassName("playlist__list-item"))
let main = document.getElementById("main");
let sidebar = document.getElementById("sidebar");
let k=0;
let play=0;
let icon;

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

let artists =[
    {artistName: "Kendrick Lamar", location:"American Rapper", info: "Kendrick Lamar Duckworth (born June 17, 1987) is an American rapper, songwriter, and record producer. He is often cited as one of the most influential rappers of his generation. Aside from his solo career, he is also a member of the hip hop supergroup Black Hippy alongside his former Top Dawg Entertainment (TDE) labelmates Ab-Soul, Jay Rock, and Schoolboy Q.", imagePath: "artist/1.jpg"},
    {artistName: "J Cole", location:"American Rapper", info: "Jermaine Lamarr Cole (born January 28, 1985) is an American rapper, singer, songwriter, record producer, and professional basketball player for the Scarborough Shooting Stars of the Canadian Elite Basketball League. He is regarded as one of the most influential rappers of his generation.[4] Born on a military base in Germany and raised in Fayetteville, North Carolina,[5] Cole initially gained recognition as a rapper following the release of his debut mixtape, The Come Up, in early 2007.", imagePath: "artist/2.jpg"},
    {artistName: "FKJ", location:"French Musician", info: "Vincent Fenton (born March 26, 1990), known professionally as French Kiwi Juice or the abbreviation FKJ (sometimes stylized Fkj), is a French multi-instrumentalist, singer, and musician from the city of Tours.[1][2][3] He is known for his solo live performances, where he does live loopings through Ableton and showcases his multi-instrumentalist skills. His self-titled debut album, French Kiwi Juice, was released on March 3, 2017.[4] ", imagePath: "artist/3.jpg"},
    {artistName: "Goldlink", location:"American Rapper", info: "D'Anthony William Carlos (born May 17, 1993), better known by his stage name GoldLink, is an American rapper and singer.[2] In 2014, he released his debut mixtape, The God Complex, which received critical acclaim. In June 2015, GoldLink was chosen as part of the XXL Freshman Class. In October 2015, he released his second mixtape, And After That, We Didn't Talk, which was supported by the singles His debut album, At What Cost, was released in March 2017 to positive reviews. ", imagePath: "artist/4.jpg"},
    {artistName: "Eminem", location:"American Rapper", info: "Marshall Bruce Mathers III (born October 17, 1972), known professionally as Eminem (/ˌɛmɪˈnɛm/; stylized as EMINƎM), is an American rapper, songwriter and record producer. He is credited with popularizing hip hop in middle America and is critically acclaimed as one of the greatest rappers of all time.[2] Eminem's global success and acclaimed works are widely regarded as having broken racial barriers for the acceptance of white rappers in popular music.", imagePath: "artist/5.jpg"},
    {artistName: "Russ", location:"American Rapper", info: "Russell James Vitale (born September 26, 1992), better known by his stage name Russ, is an American rapper, singer, and songwriter from Atlanta, Georgia.[3][4][5] After years of releasing albums, mixtapes and singles for free online, Russ released his twelfth studio album, ", imagePath: "artist/6.jpg"},

]


// CarouselHover Scaling Effect


const carouselHover =(id) =>{
    const nodeList = document.getElementById("carousel-container").children;
for (let i = 0; i < nodeList.length; i++) {
    if(i==id){
        nodeList[i].style.transform = "scale(1.1)";    
    }
    else{
        nodeList[i].style.transform = "scale(0.9)";
    }
}
}
const carouselHoverOff =(id) =>{
    const nodeList = document.getElementById("carousel-container").children;
for (let i = 0; i < nodeList.length; i++) {
    if(i==id){
        nodeList[i].style.transform = "scale(1)";     
    }
    else{
        nodeList[i].style.transform = "scale(1)";
    }  
}
}

// Custom Volume Controls 

audioElement.volume=0.1;
const rangeInputs = document.querySelector('input[type="range"]')


function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  audioElement.volume=val/100;
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

  volumeBar.addEventListener('input', handleInputChange);


// Loading CoverImages and Songnames into sidebar and Adding click on play event to the sidebar

songItems.forEach((element, i)=>{ 
   
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
    element.addEventListener('click',()=>{
        footer.style.display="grid";
        audioElement.src = `songs/${(i%7)+1}.mp3`;
        masterSongName.innerText = songs[i].songName;
        masterCover.src = songs[i].coverPath;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
  })

})
 

// Handling Master play/pause/mute/unmute click actions (Footer Section)

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        if(playing){
        slaveItems.forEach((element, i)=>{ 
            if(i==playing)   
            icon=element.getElementsByTagName("i")[0];   
            icon.classList.remove('fa-pause')                     
            icon.classList.add('fa-play')                     
        })
    }
        
    }
})

const volumeToggle =()=>{
    if(audioElement.muted){
        audioElement.muted=false;
        volume.classList.remove("fa-volume-off");
        volume.classList.add("fa-volume-high");
    }
    else{
        audioElement.muted=true;
    volume.classList.remove("fa-volume-high");
    volume.classList.add("fa-volume-off");
    }


}
// Play next song when  one song ends
audioElement.onended = ()=>{
    k++;
    audioElement.src = `songs/${(k%7)+1}.mp3`;
    audioElement.play();   
}

// Handling Slave play/pause click (Latest Release Sections)
const slavePlay = (id)=>{
    footer.style.display="grid";
    slaveItems.forEach((element, i)=>{ 
        if(i==id){
            icon=element.getElementsByTagName("i")[0];     
        }
    })

    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
        playing=id;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');

        
    }
  
}

// Listening to Events for Main Player
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
    rangeInputs.style.backgroundSize= progress  + '% 100%'
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        masterCover.src = songs[songIndex].coverPath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

// Load Next Song

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterCover.src = songs[songIndex].coverPath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

// Load Previous Song

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

// Playlist view event 
artistsInfo.forEach((element,index)=>{
    element.children[0].src = artists[index%6].imagePath;
    element.children[1].innerHTML = artists[index%6].artistName;

})



// Loading Artists information from "artists" array
artistsInfo.forEach((element,index)=>{
    element.addEventListener("click",()=>{
            artistData.children[0].src=artists[index%6].imagePath
            artistData.children[1].children[0].innerText=artists[index%6].artistName
            artistData.children[1].children[1].innerText=artists[index%6].location
            artistData.children[1].children[2].innerText=artists[index%6].info

            main.style.display="none"
            sidebar.style.display='none'
            playlist.style.display='block'
            playlistAside.style.display='block'
            screenIcon.classList.remove("fa-down-left-and-up-right-to-center")
        screenIcon.classList.add("fa-up-right-and-down-left-from-center")
        
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        
    })
})

playlistList.forEach((element,i)=>{
    element.addEventListener('click',()=>{
        element.addEventListener('click',()=>{
            footer.style.display="grid";
            audioElement.src = `songs/${(i%7)+1}.mp3`;
            masterSongName.innerText = songs[i].songName;
            masterCover.src = songs[i].coverPath;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
      })
    })
})

// Adding click event to playAll button of playlist artist section  
playlistPlayAll.addEventListener('click', ()=>{
    footer.style.display="grid";
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        if(playing){
        slaveItems.forEach((element, i)=>{ 
            if(i==playing)   
            icon=element.getElementsByTagName("i")[0];   
            icon.classList.remove('fa-pause')                     
            icon.classList.add('fa-play')                     
        })
    }
        
    }
})
// toggle from home screen to playlist and vice versa
const screenToggle = ()=>{
    if(main.style.display=='none'){
        main.style.display='block'
        sidebar.style.display='grid'
        playlist.style.display='none'
        playlistAside.style.display='none'

        screenIcon.classList.add("fa-down-left-and-up-right-to-center")
        screenIcon.classList.remove("fa-up-right-and-down-left-from-center")
    }
    else{
        main.style.display='none'
        sidebar.style.display='none'
        playlist.style.display='block'
        playlistAside.style.display='block'
        screenIcon.classList.remove("fa-down-left-and-up-right-to-center")
        screenIcon.classList.add("fa-up-right-and-down-left-from-center")       
    }
}

// Move to home page from playlist on clicking the logo
const homePage = ()=>{
    main.style.display='block'
    sidebar.style.display='grid'
    playlist.style.display='none'
    playlistAside.style.display='none'

    screenIcon.classList.add("fa-down-left-and-up-right-to-center")
    screenIcon.classList.remove("fa-up-right-and-down-left-from-center")
}