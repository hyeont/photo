
/*이미지가 클릭되면 그 이미지 하나 저장, 
다음 이미지 두개 불러오기 반복
마지막 하나만 남으면 종료*/
const imges =["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg"];

let numL = 2;
function nextimgL(){
    if (numL>15) return;
    numL+=2;
}
let numR =3;
function nextimgR(){
    if (numR>16) return;
    numR+=2;
}

if(numL||numR>14){
    alert("민수는 모든 순간 귀여웠습니다, 순위를 매기려 한 당신은 탈락입니다.");
}

function clickImg16(){
    if(numL>15) return;
    document.getElementById("img_left").src ="../img/"+ imges[numL];
    document.getElementById("img_right").src ="../img/"+ imges[numR];
    nextimgL();
    nextimgR();
}
