originlist=['aimo','aomua','bikich','dauthu','homcongduc','kiemchuyen','mahoa','nhaccu','nhanduc','sotroi'];
chosenlist=[]
rightanswerlist=[]
round=0
iteration=[]

function turnOffNofication() {
    document.getElementById('nofication').innerHTML=''
}
function refresh() {
    document.getElementById("image").src = './images/'+chosen + ".jpg"
    turnOffNofication()
    document.getElementById('sochucai').innerHTML=chosen.length
    document.getElementById('answer').value=''
}

function choosenew() {
    i=Math.round(Math.random()*(originlist.length-1))
    chosen=originlist[i]
    originlist.splice(i,1)
    chosenlist.push(chosen)
    document.getElementById('serial').innerHTML = 'Câu số ' + ++round
    refresh()

}
function start() {
    document.getElementById('start').innerHTML = ''
    document.getElementById('serial').style = ''
    document.getElementById('image').style = ''
    document.getElementById('main').style = ''

    choosenew()

}
function check() {
    switch (document.getElementById('answer').value) {
        case '':document.getElementById('nofication').innerHTML ='Bạn chưa nhập đáp án';break
        case chosen:document.getElementById('nofication').innerHTML = "Chuẩn, bạn được cộng thêm 1 điểm!";
            if(rightanswerlist.includes(chosen)===false){
                rightanswerlist.push(chosen)
                document.getElementById('scores').innerHTML=rightanswerlist.length;
                if(rightanswerlist.length>9&&rightanswerlist.includes('aimo')){
                    setTimeout(function () {
                        alert('Bạn đã ghi điểm tuyệt đối, mời sang cấp độ 2!')
                    },1000)
                }
                if(rightanswerlist.length>9&&rightanswerlist.includes('cacao')){
                    setTimeout(function () {
                        alert('Bạn đã phá đảo cấp độ 2!')
                    },1000)
                }
            }break
        default:document.getElementById('nofication').innerHTML = "Không đúng, mời bạn thử lại!"

    }
}
function next() {
   switch (iteration.length===0) {
       case true:if (originlist.length>0){
           choosenew()
       }
       break;
       default:chosen=iteration[iteration.length-1]
           chosenlist.push(iteration.pop())
           document.getElementById('serial').innerHTML = 'Câu số ' + ++round
           refresh()
   }
}


function previous() {
    if (chosenlist.length>1){
        iteration.push(chosenlist.pop())
        chosen=chosenlist[chosenlist.length-1]
        document.getElementById('serial').innerHTML = 'Câu số ' + --round
        refresh()
    }
}
function reset() {
    location.reload()

}
function setUpLevel2() {
    originlist=['cacao','nhosi','canhdong','nhatky','lenmang','giaotranh','baogia','cuphap','cuuvan','congcong'];
    chosenlist=[]
    rightanswerlist=[]
    round=0
    iteration=[]

}
function nextlevel() {
    if(rightanswerlist.length>2){
        setTimeout(function () {
            document.getElementById('h2').innerHTML='Game đuổi hình bắt chữ 2020- Cấp độ 2'
            document.getElementById('scores').innerHTML=0
            document.getElementById('nextlevel').replaceWith('Các cấp sau đang được xây dựng')
            setUpLevel2()
            choosenew()
        },1000)
    }else {
        alert('Bạn cần tối thiểu 3 điểm để vượt cấp')
    }

}