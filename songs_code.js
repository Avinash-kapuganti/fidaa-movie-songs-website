function searchSong(){
    var filter = document.getElementById("searchContent").value.toLowerCase();
    var flexCon = document.querySelectorAll('.flex');
    for(i=0;i<flexCon.length;i++)
    {
      var x = document.getElementsByClassName("flex")[i].className;
      if(x.toLowerCase().indexOf(filter) > -1){
        document.getElementsByClassName("flex")[i].style.display="";
      }
      else
      {
        document.getElementsByClassName("flex")[i].style.display="none";
      }
    }
  }   
document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);
