//



//Heart Clicked
let counting = 0;

const container = document.getElementById('heart-container');

container.addEventListener('click', function(e){
    if(e.target.classList.contains('heart-clicked')){
        counting++;
        document.getElementById('heart-count').innerText = counting;
    }
})


//Coins Counting
let coins = 100;

const callBtn = document.getElementsByClassName('call-btn');

//
for(let i = 0; i < callBtn.length; i++){
    callBtn[i].addEventListener('click', function(){
        if(coins > 20){
            alert('Succesfully!');
            coins = coins - 20;
            document.getElementById('coin').innerText = coins;
        }
        else{
            alert("sorry!")
        }
    })
}
