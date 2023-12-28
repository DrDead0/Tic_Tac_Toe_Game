
let gameb = document.querySelectorAll(".gameb");
let resetb = document.querySelector(".reset");
let winmsg = document.querySelector("#win-msg");
let winmsgcont = document.querySelector(".winmsg-cont");
let player = true; // when true will show O and when false will show X
let pattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

let finish=()=>
{
    for( let ga of gameb)
    {
        ga.disabled=true;
    };
};
let start=()=>
{
    for( let game of gameb)
    {
        game.disabled=false;
        game.innerText="";
    };
};

gameb.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("The button was clicked...!");
        if (player===true){
           button.innerText="O";
            player=false;
        }else{
            button.innerText="X";
            player=true;
        }
        isWinner();
    });
});
let whoWinner=(win) =>
 {
    winmsg.innerText=`wohoo..! The winner is ${win}`;
    winmsgcont.classList.remove("dont-disclose");
    finish();
};

 let gamereset=()=>{
    player=true;
    start();
    winmsgcont.classList.add("dont-disclose");
};

let isWinner = () => {
    for( let p of pattern){
        let val0=gameb[p[0]].innerText;
        let val1=gameb[p[1]].innerText;
        let val2=gameb[p[2]].innerText;

        if(val0 != "" && val1 !="" && val2!="")
        {
            if(val0===val1 && val1===val2)
            {
                console.log("winner");
                whoWinner(val0);
            };
        };
    };
};

resetb.addEventListener("click", gamereset);