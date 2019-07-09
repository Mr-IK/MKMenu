var flatcolor = 'true';

$(document).ready(function () {
  $('#in_link_about').on('click',function(){
    if(window.location.pathname!="/about.html"){
      setTimeout('unloadBar()',100);
      setTimeout('unloadfooter()',200);
      setTimeout('unloadMain()',300);
      setTimeout('linkabout()',500);
      return false;
    }
    return false;
  });
  $('#in_link_home').on('click',function(){
    if(window.location.pathname!="/"){
      setTimeout('unloadBar()',100);
      setTimeout('unloadfooter()',200);
      setTimeout('unloadMain()',300);
      setTimeout('linkhome()',500);
      return false;
    }
    return false;
  });
  $('#togglebutton').on('click',function(){
    if(flatcolor == 'true'){
      setTimeout('unloadBar()',100);
      setTimeout('unloadfooter()',300);
      setTimeout('unloadMain()',500);
      setTimeout('changeflat()',1000);
      setTimeout('loadMain()',2000);
      setTimeout('loadfooter()',2400);
      setTimeout('loadBar()',3000);
      flatcolor = 'false';
      $.cookie('colortype','false',{ expires: 7, path: '/'  });
    }else{
      setTimeout('unloadBar()',100);
      setTimeout('unloadfooter()',300);
      setTimeout('unloadMain()',500);
      setTimeout('changeCool()',1000);
      setTimeout('loadMain()',2000);
      setTimeout('loadfooter()',2400);
      setTimeout('loadBar()',3000);
      flatcolor = 'true';
      $.cookie('colortype','true',{ expires: 7, path: '/'  });
    }
  });
  $('#close').on('click',function(){
    if(!$("#switch").prop('checked')){
      setTimeout('unloadWarning()',1);
      setTimeout('loadflat()',1);
      setTimeout('loadMain()',1000);
      setTimeout('loadfooter()',1500);
      setTimeout('loadBar()',2000);
      flatcolor = 'false';
      $.cookie('colortype','false',{ expires: 7, path: '/'  });
    }else{
      setTimeout('unloadWarning()',1);
      setTimeout('loadCool()',1);
      setTimeout('loadMain()',1000);
      setTimeout('loadfooter()',1500);
      setTimeout('loadBar()',2000);
      flatcolor = 'true';
      $.cookie('colortype','true',{ expires: 7, path: '/'  });
    }
  });
  // 消えるタイミングはお好みで
  flatcolor = $.cookie('colortype');
  if (flatcolor == null) {
    //警告画面を出す
    setTimeout('loadWarning()',0);
    flatcolor = 'true';
    return;
  }
  setTimeout('byeWarning()',0);
  if(flatcolor != 'true'){
    setTimeout('loadflat()',0);
    setTimeout('loadMain()',1000);
    setTimeout('loadfooter()',1500);
    setTimeout('loadBar()',2000);
  }else{
    setTimeout('loadMain()',1000);
    setTimeout('loadfooter()',1500);
    setTimeout('loadBar()',2000);
  }
});

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

function unloadBar(){
  $('#nav').removeClass("nav-load");
  $('#nav').addClass("nav-unload");
}

function loadfooter(){
  $('#footer').removeClass("foo-unload");
  $('#footer').addClass("foo-load");
}

function unloadfooter(){
  $('#footer').removeClass("foo-load");
  $('#footer').addClass("foo-unload");
}

function changeCool(){
  $('body').removeClass("body-color-flat");
  $('body').removeClass("body-flat");
  $('.nav-button').removeClass("btn-color-flat");
  $('body').addClass("body-color-cool");
  $('.nav-button').addClass("btn-color-cool");
}

function loadflat(){
  $('body').removeClass("body-color-cool");
  $('body').removeClass("body-cool");
  $('.nav-button').removeClass("btn-color-cool");
  $('body').addClass("body-flat");
  $('.nav-button').addClass("btn-color-flat");
}

function loadCool(){
  $('body').removeClass("body-color-flat");
  $('body').removeClass("body-flat");
  $('.nav-button').removeClass("btn-color-flat");
  $('body').addClass("body-cool");
  $('.nav-button').addClass("btn-color-cool");
}

function changeflat(){
  $('body').removeClass("body-color-cool");
  $('body').removeClass("body-cool");
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

function linkabout(){
  window.location.href='about.html';
}

function linkhome(){
  window.location.href='';
}
