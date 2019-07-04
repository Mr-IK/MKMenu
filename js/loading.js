$(window).on('load',function(){
  // 消えるタイミングはお好みで
    $('#loading').delay(1000).fadeOut(900);
    $('#loader-bg').delay(2000).fadeOut(900);
    setTimeout('loadBlog()',3000);
    setTimeout('loadGithub()',3500);
});

function loadBlog(){
  $('#blog').addClass("animationBlog");
}

function loadGithub(){
  $('#github').addClass("animationGithub");
}

// 10秒待っても読み込みが終わらない時は強制的にローディング画面をフェードアウト
function stopload(){
  $('#loading').delay(1000).fadeOut(900);
  $('#loader-bg').delay(2000).fadeOut(900);
}
setTimeout('stopload()',10000);
