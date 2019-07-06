var flatcolor = "true";
$(window).on('load',function(){
  // 消えるタイミングはお好みで
  $('#loading').delay(1000).fadeOut(900);
  $('#loader-bg').delay(2000).fadeOut(900);
  flatcolor = $.cookie('colortype');
  if (typeof a === "undefined") {
    //警告画面を出す
    setTimeout('loadWarning()',2000);
    flatcolor = true;
    return;
  }
  $('#warning-bg').fadeOut(1);
  if(flatcolor != 'true'){
    setTimeout('changeflat()',2000);
    setTimeout('loadBar()',3000);
    setTimeout('loadMain()',4000);
  }else{
    setTimeout('loadBar()',3000);
    setTimeout('loadMain()',4000);
  }
});

$(document).ready(function () {
  $.cookie('colortype','false',{ expires: 7, path: '/'  });
  $('#togglebutton').on('click',function(){
    if(flatcolor){
      setTimeout('unloadBar()',100);
      setTimeout('unloadMain()',200);
      setTimeout('changeflat()',1000);
      setTimeout('loadMain()',2000);
      setTimeout('loadBar()',2500);
      flatcolor = false;
      $.cookie('colortype','false',{ expires: 7, path: '/'  });
    }else{
      setTimeout('unloadBar()',100);
      setTimeout('unloadMain()',200);
      setTimeout('changeCool()',1000);
      setTimeout('loadMain()',2000);
      setTimeout('loadBar()',2500);
      flatcolor = true;
      $.cookie('colortype','true',{ expires: 7, path: '/'  });
    }
  });
  $('#close').on('click',function(){
    if(!$("#switch").prop('checked')){
      setTimeout('unloadWarning()',1);
      setTimeout('loadflat()',1);
      setTimeout('loadMain()',1000);
      setTimeout('loadBar()',1500);
      flatcolor = false;
      $.cookie('colortype','false',{ expires: 7, path: '/'  });
    }else{
      setTimeout('unloadWarning()',1);
      setTimeout('loadCool()',1);
      setTimeout('loadMain()',1000);
      setTimeout('loadBar()',1500);
      flatcolor = true;
      $.cookie('colortype','true',{ expires: 7, path: '/'  });
    }
  });
});

function unloadBar(){
  $('#nav').removeClass("nav-load");
  $('#nav').addClass("nav-unload");
}

function loadWarning(){
  $('#warning-bg').addClass("main-load");
}

function unloadWarning(){
  $('#warning-bg').removeClass("main-load");
  $('#warning-bg').addClass("warning-unload-ani");
  setTimeout('byeWarning()',700);
}

function byeWarning(){
  $('#warning-bg').addClass("warning-unload");
}

function changeCool(){
  $('body').removeClass("body-color-flat");
  $('.nav-button').removeClass("btn-color-flat");
  $('body').addClass("body-color-cool");
  $('.nav-button').addClass("btn-color-cool");
}

function loadflat(){
  $('body').removeClass("body-color-cool");
  $('.nav-button').removeClass("btn-color-cool");
  $('body').addClass("body-flat");
  $('.nav-button').addClass("btn-color-flat");
}

function loadCool(){
  $('body').removeClass("body-color-flat");
  $('.nav-button').removeClass("btn-color-flat");
  $('body').addClass("body-cool");
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
