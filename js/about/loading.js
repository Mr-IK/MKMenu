var flatcolor = 'true';
$(window).on('load',function(){
  // 消えるタイミングはお好みで
  flatcolor = $.cookie('colortype');
  if (flatcolor == null) {
    //警告画面を出す
    flatcolor = 'true';
  }
  if(flatcolor != 'true'){
    setTimeout('loadflat()',0);
    setTimeout('loadMain()',1000);
    setTimeout('loadBar()',2000);
  }else{
    setTimeout('loadMain()',1000);
    setTimeout('loadBar()',2000);
  }
});

$(document).ready(function () {
  $('a#in_link_home').on('click',function(){
    setTimeout('unloadBar()',100);
    setTimeout('unloadMain()',200);
    setTimeout('linkhome()',500);
    return false;
  });
  $('#togglebutton').on('click',function(){
    if(flatcolor == 'true'){
      setTimeout('unloadBar()',100);
      setTimeout('unloadMain()',200);
      setTimeout('changeflat()',1000);
      setTimeout('loadMain()',2000);
      setTimeout('loadBar()',2500);
      flatcolor = 'false';
      $.cookie('colortype','false',{ expires: 7, path: '/'  });
    }else{
      setTimeout('unloadBar()',100);
      setTimeout('unloadMain()',200);
      setTimeout('changeCool()',1000);
      setTimeout('loadMain()',2000);
      setTimeout('loadBar()',2500);
      flatcolor = 'true';
      $.cookie('colortype','true',{ expires: 7, path: '/'  });
    }
  });
});

function linkhome(){
  window.location.href='index.html';
}

function unloadBar(){
  $('#nav').removeClass("nav-load");
  $('#nav').addClass("nav-unload");
}

function loadWarning(){
  $('#warning-bg').addClass("main-load");
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
