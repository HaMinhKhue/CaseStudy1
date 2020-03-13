
function setUpLevel1() {
    originlist=['aimo','aomua','bikich','dauthu','homcongduc','kiemchuyen','mahoa','nhaccu','nhanduc','sotroi'];
    chosenlist=[];
    rightanswerlist=[];
    round=0;
    iteration=[]
}

function turnOffNofication() {
    document.getElementById('nofication').innerHTML=''
}
function refresh() {
    document.getElementById("image").src = './images/'+chosen + ".jpg";
    turnOffNofication();
    document.getElementById('suggestion').innerHTML=''
    document.getElementById('answer').value=''
}

function choosenew() {
    i=Math.round(Math.random()*(originlist.length-1));
    chosen=originlist[i];
    originlist.splice(i,1);
    chosenlist.push(chosen);
    document.getElementById('serial').innerHTML = 'Câu số ' + ++round;
    refresh()

}
function start() {
    do {
        playername=prompt('Đăng ký tên người chơi (bắt buộc):')
    } while (playername===null);
    setUpLevel1()
    document.getElementById('start').innerHTML = '';
    document.getElementById('serial').style = '';
    document.getElementById('image').style = '';
    document.getElementById('main').style = '';

    choosenew();
console.log(playername)
}
function check() {
    answer=change_alias(document.getElementById('answer').value);
    switch (answer) {
        case '':document.getElementById('nofication').innerHTML ='Bạn chưa nhập đáp án';break;
        case chosen:document.getElementById('nofication').innerHTML = "Chuẩn!";
            if(rightanswerlist.includes(chosen)===false){
                rightanswerlist.push(chosen);
                document.getElementById('scores').innerHTML=rightanswerlist.length;
                setTimeout(function () {
                    switch (rightanswerlist.length) {
                        case 1:document.getElementById('nofication').innerHTML=playername+' vừa lập chiến công đầu!';break;
                        case 2:document.getElementById('nofication').innerHTML=playername+' vừa có thêm 1 chiến công!';break;
                        case 3:document.getElementById('nofication').innerHTML=playername+' vừa lập hat-trick!';break;
                        case 4:document.getElementById('nofication').innerHTML=playername+' đang cày nát trò chơi này!';break;
                        case 5:document.getElementById('nofication').innerHTML=playername+' thật không thể ngăn cản!';break;
                        case 6:document.getElementById('nofication').innerHTML=playername+' đang áp đảo tuyệt đối!';break;
                        case 7:document.getElementById('nofication').innerHTML=playername+' thật thần thánh!';break;
                        case 9:document.getElementById('nofication').innerHTML=playername+' là truyền thuyết!';break;
                        case 8:document.getElementById('nofication').innerHTML=playername+' đã trở thành huyền thoại!';break;
                        case 10:document.getElementById('nofication').innerHTML=playername+' là đấng tối cao!';break
                    }
                },1000)
                if(rightanswerlist.length>9/*&&rightanswerlist.includes('aimo')*/){
                    setTimeout(function () {
                        if(confirm('Bạn đã phá đảo cấp 1, chuyển sang chơi cấp 2?')){
                            nextlevel()
                        }
                    },1000)
                }
                if(rightanswerlist.length>9/*&&rightanswerlist.includes('cacao')*/){
                    setTimeout(function () {
                        alert('Xin chúc mừng, bạn đã phá đảo cấp 2!')
                    },1000)
                }
            }break;
        default:document.getElementById('nofication').innerHTML = "Không đúng, mời bạn thử lại!"

    }
}
function showTheChosen() {
    document.getElementById('nofication').innerHTML='Đáp án đúng là: '+chosen

}
function next() {
   switch (iteration.length===0) {
       case true:if (originlist.length>0){
           choosenew()
       }
       break;
       default:chosen=iteration[iteration.length-1];
           chosenlist.push(iteration.pop());
           document.getElementById('serial').innerHTML = 'Câu số ' + ++round;
           refresh()
   }
}


function previous() {
    if (chosenlist.length>1){
        iteration.push(chosenlist.pop());
        chosen=chosenlist[chosenlist.length-1];
        document.getElementById('serial').innerHTML = 'Câu số ' + --round
        refresh()
    }
}
function reset() {
    if(confirm('Vẫn sử dụng tên hiện tại?')){setUpLevel1();
        document.getElementById('scores').innerHTML=0;
        choosenew()}else {start()}
}
function setUpLevel2() {
    originlist=['cacao','nhosi','canhdong','nhatky','lenmang','giaotranh','baogia','cuphap','cuuvan','congcong'];
    chosenlist=[];
    rightanswerlist=[];
    round=0;
    iteration=[]

}
function nextlevel() {
    if(rightanswerlist.length>2){
        setTimeout(function () {
            document.getElementById('h2').innerHTML='Game đuổi hình bắt chữ 2020- Cấp độ 2';
            document.getElementById('scores').innerHTML=0
            document.getElementById('nextlevel').replaceWith('Các cấp sau đang được xây dựng');
            setUpLevel2();
            choosenew()
        },1000)
    }else {
        alert('Bạn cần tối thiểu 3 điểm để vượt cấp')
    }

}