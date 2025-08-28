//

//History
const historyData = [];

//Heart Clicked
let counting = 0;

const container = document.getElementById('card-container');

container.addEventListener('click', function (e) {
    if (e.target.classList.contains('heart-clicked')) {
        counting++;
        document.getElementById('heart-count').innerText = counting;
    }
})


//Coins Counting + history 
let coins = 100;

container.addEventListener('click', function (e) {
    if (e.target.classList.contains('call-btn') || e.target.closest('.call-btn')) {
        if (coins >= 20) {
            coins -= 20;

            //parent div call btn
            let callbtnParent = e.target.closest(".callBtn-container");

            let title = callbtnParent.querySelector('.card-title').innerText;
            let cardNum = callbtnParent.querySelector('.card-num').innerText;

            document.getElementById('coin').innerText = coins;

            alert("📞 Calling " + title + " " + cardNum)

            //history
            let date = new Date().toLocaleTimeString();

            const div = document.createElement('div');
            const historyContainer = document.getElementById('history-Container');

            div.innerHTML = `
            <div class="flex gap-5 text-xl rounded-lg mt-5 bg-[#FAFAFA] p-3 items-center">
                        <div class="flex-2 font-semibold">
                            <h2>${title}</h2>
                            <p>${cardNum}</p>
                        </div>
                        <div class="font-semibold">${date}</div>
                    </div>
            `
            historyContainer.appendChild(div)
        }
        else {
            alert("❌ You are out of coins! You will need at least 20 coins to make a call.")
        }
    }
})

//History Clear Part
document.getElementById('history-clear')
    .addEventListener('click', function (e) {
        document.getElementById('history-Container').innerHTML = '';

    })


//copy number
let copy = 0;
container.addEventListener('click', function (e) {
    // const copyButton = document.getElementById('copy-button');

    if (e.target.classList.contains('copy-button') || e.target.closest('.copy-button')) {
        copy++;

        //apend
        document.getElementById('copy-counting').innerText = copy;

        // parentdiv
        let parentContainer = e.target.closest('.callBtn-container');
        if (parentContainer) {
            //card num
            let cardNumbers = parentContainer.querySelector('.copy-num').innerText;

            //copy
            navigator.clipboard.writeText(cardNumbers).then(() => {
                alert("Copied Succesfully: " + cardNumbers);
            }).catch(errors => {
                console.error("Copy Failed", errors)
            })
        }


    }
})
// const nu = document.querySelector('.copy-num').innerText;

// console.log('num', nu)





