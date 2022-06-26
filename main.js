let video = document.querySelector('#video')
let canvas = document.querySelector('#canvas')
let heandle = document.querySelector('#take-photo')
let context = canvas.getContext('2d')

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({video : true}).then(strem=>{
        video.srcObject = strem;
        video.setAttribute();
    })
}
document.getElementById('snap').addEventListener('click',()=>        
        context.drawImage(video,0,0,640,480)
)