$(".area").css('cursor','url("hammer.ico"),move');

var hole =  $(".hole")
var easy = document.getElementById("easy");
var medium = document.getElementById("medium");
var hard = document.getElementById("hard");
var audio = document.getElementById("audio");
var img1 = document.getElementById("img1");
var img2=document.getElementById("img2")
var state=false;
var time = 30;

//Use for loop to crate hools and moles.
var hole = "<div class='hole'><img src='molex.png' alt='' /></div>"
var holenum = 18;
for(var i=0;i<holenum;i++){
    $(".area").append(hole);
}

function playSound(m_src) { 
	sound.src = m_src;
	sound.play() }

function lable(x,y){
    var arr=[];
    for(var i=x;i<y;i++){
        arr.push(i);
    }
    return arr;
}

easy.onclick = function() {
    img1.style.display="none";
    easy.style.display = "none";
    medium.style.display = "none";
    hard.style.display = "none";
    audio.style.display = "none";
    setTimeout(function() {
        img2.style.display="inline";
        gameStar(1000);
    },1000);
    $('#easy').append("<audio src='click.mp3' autoplay='autoplay'></audio>")
}

medium.onclick = function() {
    img1.style.display="none";
    easy.style.display = "none";
    medium.style.display = "none";
    hard.style.display = "none";
    audio.style.display = "none";
    setTimeout(function() {
        img2.style.display="inline";
        gameStar(500);
    },1000);
    $('#medium').append("<audio src='click.mp3' autoplay='autoplay'></audio>")
}

hard.onclick = function() {
    img1.style.display="none";
    easy.style.display = "none";
    medium.style.display = "none";
    hard.style.display = "none";
    audio.style.display = "none";
    setTimeout(function() {
        img2.style.display="inline";
        gameStar(300);
    },1000);
    $('#hard').append("<audio src='click.mp3' autoplay='autoplay'></audio>")
}

RestartBtn.onclick = function() {
    $('#RestartBtn').append("<audio src='click.mp3' autoplay='autoplay'></audio>")
    setTimeout(() => {
        window.location.href = "index.html";
    }, 500);
}


function gameStar(speed){
    $('.hole img').click(function(){
        $(this).hide();
        var score = parseInt($('.score span').html())+1;
        $('.score span').html(score);
        $(".area").css('cursor','url("hammer2.ico"),move');
        setTimeout(() => {
            $(".area").css('cursor','url("hammer.ico"),move');
        }, 150);
        $('.area').append("<audio src='hit.mp3' autoplay='autoplay'></audio>")
    }
    )

    setInterval(() => {
        time=time-1;
        if(time>=0){
            $(".time span").html(time);    
        }else{
            clearInterval(time);
            if(document.getElementById("so").innerText>=40)
        {
            $('.area').html('<h1>You Win!</h1>');
            var ReStartBtn = document.getElementById("RestartBtn");
            ReStartBtn.style.display = "inline";
            state=true;
        }
        else{
            $('.area').html('<h1><br>You Lose!</h1>');
            var ReStartBtn = document.getElementById("RestartBtn");
            ReStartBtn.style.display = "inline";
            state=true;
            }
        }
    }, 1000);

    setInterval(()=>{
        //The number of mole that appear each time.
        var moleNum = Math.ceil(Math.random()*4);
        //lable each moles
        var arr2=lable(0,18);
        //Generate a Mole's number
        for(var i=0;i<moleNum;i++){
            var ranNum= Math.floor(Math.random()*arr2.length);
            //Delete the Mole's number that already generated last time 
            var mole=$('img').eq(arr2.splice(ranNum,1));
            if(mole.is(":hidden")){
                mole.fadeIn(100,function(){
                    $(this).delay(speed).fadeOut();
                })
            }
        }
    },1000)
}

