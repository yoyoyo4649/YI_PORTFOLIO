// new Vivus("mask", {
//   duration: 200,
//   start: "autostart",
//   type: "oneByOne"
// });

//SVGアニメーションの描画
var stroke;
stroke = new Vivus('mask', {//アニメーションをするIDの指定
    start:'manual',//自動再生をせずスタートをマニュアルに
    type: 'scenario-sync',// アニメーションのタイプを設定
    duration: 10,//アニメーションの時間設定。数字が小さくなるほど速い
    forceRender: false,//パスが更新された場合に再レンダリングさせない
    animTimingFunction:Vivus.EASE,//動きの加速減速設定
},
function(){
       $("#mask").attr("class", "done");//描画が終わったらdoneというクラスを追加
}
);

$(window).on('load',function(){
  $("#splash").delay(3000).fadeOut('slow');//ローディング画面を3秒（3000ms）待機してからフェイドアウト
	$("#splash_logo").delay(3000).fadeOut('slow');//ロゴを3秒（3000ms）待機してからフェイドアウト
  stroke.play();//SVGアニメーションの実行
});





// 特定の範囲で表示・非表示する

jQuery(window).on('scroll load', function () {
    let scrollTop = jQuery(window).scrollTop(); // スクロール上部の位置
    let areaTop = jQuery(".target-area").offset().top; // 対象エリアの上部の位置
    let areaBottom = areaTop + jQuery(".target-area").innerHeight(); // 対象エリアの下部の位置

    if (scrollTop > areaTop && scrollTop < areaBottom) {
      jQuery("body").addClass("is_in"); // スクロールが対象エリアに入った場合
    } else {
      jQuery("body").removeClass("is_in"); // スクロールが対象エリアから出ている場合
    }
  });

  jQuery(window).on('scroll load', function () {
    let scrollTop = jQuery(window).scrollTop(); // スクロール上部の位置
    let areaTop = jQuery(".target-area2").offset().top; // 対象エリアの上部の位置
    let areaBottom = areaTop + jQuery(".target-area2").innerHeight(); // 対象エリアの下部の位置

    if (scrollTop > areaTop && scrollTop < areaBottom) {
      jQuery("body").addClass("is_in2"); // スクロールが対象エリアに入った場合
    } else {
      jQuery("body").removeClass("is_in2"); // スクロールが対象エリアから出ている場合
    }
  });

  jQuery(window).on('scroll load', function () {
    let scrollTop = jQuery(window).scrollTop(); // スクロール上部の位置
    let areaTop = jQuery(".target-area3").offset().top; // 対象エリアの上部の位置
    let areaBottom = areaTop + jQuery(".target-area3").innerHeight(); // 対象エリアの下部の位置

    if (scrollTop > areaTop && scrollTop < areaBottom) {
      jQuery("body").addClass("is_in3"); // スクロールが対象エリアに入った場合
    } else {
      jQuery("body").removeClass("is_in3"); // スクロールが対象エリアから出ている場合
    }
  });


  $(function() {
    $('.tab').on('click', function() {
      $('.tab, .panel').removeClass('active');
   
      $(this).addClass('active');
      
      var index = $('.tab').index(this);
      $('.panel').eq(index).addClass('active');
    });
  }); 



  
  function delayScrollAnime() {
    var time = 0.2;//遅延時間を増やす秒数の値
    var value = time;
    $('.delayScroll').each(function () {
      var parent = this;					//親要素を取得
      var elemPos = $(this).offset().top;//要素の位置まで来たら
      var scroll = $(window).scrollTop();//スクロール値を取得
      var windowHeight = $(window).height();//画面の高さを取得
      var childs = $(this).children();	//子要素を取得
      
      if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
        $(childs).each(function () {
          
          if (!$(this).hasClass("fadeUp")) {//アニメーションのクラス名が指定されているかどうかをチェック
            
            $(parent).addClass("play");	//親要素にクラス名playを追加
            $(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
            $(this).addClass("fadeUp");//アニメーションのクラス名を追加
            value = value + time;//delay時間を増加させる
            
            //全ての処理を終わったらplayを外す
            var index = $(childs).index(this);
            if((childs.length-1) == index){
              $(parent).removeClass("play");
            }
          }
        })
      }else {
        $(childs).removeClass("fadeUp");//アニメーションのクラス名を削除
        value = time;//delay初期値の数値に戻す
      }
    })
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
    // $(window).scroll(function (){
    //   delayScrollAnime();/* アニメーション用の関数を呼ぶ*/
    // });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
    // $(window).on('load', function(){
    //   delayScrollAnime();
    // });
    // // 画面が読み込まれたらすぐに動かしたい場合の記述
    // $(window).on('load', function(){
    //   delayScrollAnime();/* アニメーション用の関数を呼ぶ*/
    // });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


    // $(window).on('mousemove', function () {
    //   delayScrollAnime();
    // });

    setTimeout(function () {
      delayScrollAnime();
      //時間を遅らせて動かしたいソースコードを記述する
    }, 3700);//この場合1秒後
    