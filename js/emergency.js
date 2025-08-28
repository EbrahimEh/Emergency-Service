//



//Heart Clicked
let counting = 0;

const container = document.getElementById('card-container');

container.addEventListener('click', function(e){
    if(e.target.classList.contains('heart-clicked')){
        counting++;
        document.getElementById('heart-count').innerText = counting;
    }
})


//Coins Counting
let coins = 100;

container.addEventListener('click', function(e){
    if(e.target.classList.contains('call-btn') || e.target.closest('.call-btn')){
        if(coins >= 20){
            coins -= 20;

            //parent div call btn
            let callbtnParent = e.target.closest(".callBtn-container");

            let title = callbtnParent.querySelector('.card-title').innerText;
            let cardNum = callbtnParent.querySelector('.card-num').innerText;
            
            document.getElementById('coin').innerText = coins;

            alert("Calling " + title + " " + cardNum)
        }
        else{
            alert("Not Working!")
        }
    }
})
// const callBtn = document.getElementsByClassName('call-btn');

// //
// for(let i = 0; i < callBtn.length; i++){
//     callBtn[i].addEventListener('click', function(){
//         if(coins >= 20){
            
//             coins = coins - 20;
//             let cardParent = this.parentElement;

//             let title = cardParent.getElementsByClassName('card-title')[0].innerText;
//             let number = cardParent.getElementsByClassName('card-num')[0].innerText;

//             alert("Calling" + title, number);
//             document.getElementById('coin').innerText = coins;
//         }
//         else{
//             alert("sorry!")
//         }
//     })
// }
