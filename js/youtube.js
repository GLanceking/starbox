// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'ZgegXuEdGKI', // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true,
       loop: true,
       playlist: 'ZgegXuEdGKI' // 반복 재생할 유튜브 영상 ID 목록
      },
      events: {
        onReady: function (event) {
         event.target.mute() // 음소거 옵션 없어서 onReady 메소드에 따로 지정해야함
       }
     }
   });
 }