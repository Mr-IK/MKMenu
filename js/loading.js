$(window).on('load',function(){
  // 消えるタイミングはお好みで
  $('#loading').delay(1000).fadeOut(900);
  $('#loader-bg').delay(2000).fadeOut(900);
  setTimeout('loadBar()',3000);
  setTimeout('loadMain()',4000);
});

$(document).ready(function () {
  $('#togglebutton').on('click',function(){
    if(flatcolor){
      setTimeout('unloadBar()',100);
      setTimeout('unloadMain()',200);
      setTimeout('changeflat()',1000);
      setTimeout('loadMain()',2000);
      setTimeout('loadBar()',2500);
      flatcolor = false;
    }else{
      setTimeout('unloadBar()',100);
      setTimeout('unloadMain()',200);
      setTimeout('changeCool()',1000);
      setTimeout('loadMain()',2000);
      setTimeout('loadBar()',2500);
      flatcolor = true;
    }
  });
});

var flatcolor = true;

function unloadBar(){
  $('#nav').removeClass("nav-load");
  $('#nav').addClass("nav-unload");
}

function changeCool(){
  $('body').removeClass("body-color-flat");
  $('.nav-button').removeClass("btn-color-flat");
  $('body').addClass("body-color-cool");
  $('.nav-button').addClass("btn-color-cool");
}

function changeflat(){
  $('body').removeClass("body-color-cool");
  $('.nav-button').removeClass("btn-color-cool");
  $('body').addClass("body-color-flat");
  $('.nav-button').addClass("btn-color-flat");
}

function loadBar(){
  $('#nav').removeClass("nav-unload");
  $('#nav').addClass("nav-load");
}

function loadMain(){
  $('#main-contents').removeClass("main-unload");
  $('#main-contents').addClass("main-load");
}

function unloadMain() {
  $('#main-contents').removeClass("main-load");
  $('#main-contents').addClass("main-unload");
}

// 10秒待っても読み込みが終わらない時は強制的にローディング画面をフェードアウト
function stopload(){
  $('#loading').delay(1000).fadeOut(900);
  $('#loader-bg').delay(2000).fadeOut(900);
}
setTimeout('stopload()',10000);
