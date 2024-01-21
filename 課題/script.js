'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// testCode actual　値, expected　結果 を比較する
function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}

test()


// let card = 1;// 場にあるトランプのカード番号

// let Hi_L = 0;// Low(0) と High(1) どっちを選んだか仮の数字（実際にはクリックで決める）
// let Result = "●●を選んで、あなたの●●";//勝ち負けの結果


// function High_Low(Hi_L) {

//       document.getElementById("Card_img_Before").src="torannpu-illust" + card + ".png";

// let trump = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,]; // ハイアンドローをするカード番号
// let trump_n = Math.floor( Math.random() * 13) +1 ;// ランダムで数字を決める+１で一回とる


// if (card < trump[trump_n]) {//賭けカードが、伏せカードより大きい
//   if (Hi_L === 0){ Result = "  LOWを選んで、あなたの<span style='background:blue;'>『 負け 』</span>";
//       }else if(Hi_L === 1){ Result = "  HIGHを選んで、あなたの<span style='background:red;'>【 勝ち 】</span>";}
// }
// else if (card > trump[trump_n]) {//賭けカードが、伏せカードより小さい
//   if (Hi_L === 0){ Result = "  LOWを選んで、あなたの<span style='background:red;'>【 勝ち 】</span>";
//       }else if (Hi_L === 1){ Result = "  HIGHを選んで、あなたの<span style='background:blue;'>『 負け 』</span>";}
// }
// else {Result = "引き分け！！";}

//       document.getElementById("Card_img_After").src="torannpu-illust" + trump_n + ".png";

// document.getElementById("After").innerHTML ="伏せカードは" + trump[trump_n] + Result + "<br />次のカードが今の数字より高いか低いか考えてみよう！";
// document.getElementById("Before").innerHTML ="場にあるカードは" + card ;

// card = trump[trump_n];//場にあるカードを新しく引いたカードに変える

// }



let card = 1;// 場にあるトランプのカード番号

let Hi_L = 0;//どっちを選んだか仮の引数　クリックして中身を変える
let Result = "●●を選んで、あなたの●●";//勝ち負けの結果
let trump = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,]; // 表示するカード番号

let wincount = 0 //勝利数

function High_Low(Hi_L) {

      document.getElementById("Card_img_Before").src="torannpu-illust" + card + ".png";

let trump_n = Math.floor( Math.random() * 13) ;// ランダムで数字を決める+1でジョーカー[0]を選べなくする
//trumpから_nを引いた数字で抽選する

if (card < trump[trump_n]) {//賭けカードが、伏せカードより大きい
  if (Hi_L === 0){ wincount = 0;
                   Result = "  LOWを選んだ、あなたの<span style='background:blue font;'>『 負け 』</span>";
      }else if(Hi_L === 1){ wincount++;
                            Result = "  HIGHを選んだ、あなたの<span style='background:red;'>【 勝ち 】</span>";}
}
else if (card > trump[trump_n]) {//賭けカードが、伏せカードより小さい
  if (Hi_L === 0){ wincount++;
                   Result = "  LOWを選んだ、あなたの<span style='background:red;'>【 勝ち 】</span>";
      }else if (Hi_L === 1){ wincount = 0;
                             Result = "  HIGHを選んだ、あなたの<span style='background:blue;'>『 負け 』</span>";}
}
else {Result = "引き分け！！";}
      document.getElementById("Card_img_After").src="torannpu-illust" + trump_n + ".png";

document.getElementById("After").innerHTML ="伏せカードは" + trump[trump_n] + Result + "<br />次の勝負をしよう。High　or　Low？";
document.getElementById("Before").innerHTML ="場にあるカードは" + card ;
document.getElementById("wincount").innerHTML = "今" + wincount + "勝目だ";
card = trump[trump_n];//場にあるカードを新しく引いたカードに変える

//13勝利したら　congratulation　な表示をする
}