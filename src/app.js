var github=document.querySelector('#gh')
var yt=document.querySelector('#yt')
var twitter=document.querySelector('#tw')
var msg=document.querySelector('#message')

var ghlink,ytlink,twlink;
ghlink="https://github.com/neoxenon66"
ytlink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
twlink="https://twitter.com/NeoXenon66"
var msglist=["404- swag not found","Huh....huh wuh?",
"Hello there","Smell's like....egg?","L+ no honour + maidenless ...."
,"Bruh",
"Egg","Well, well, well who do we have here.","Yoo, smels like broke in here","Delux!"
,"Drink water -Christiano Ronaldo","Water-proof","LTT-proof",
"Clear your search history!","h","& watch","Best viewed on Microsoft Edge"
,"Didn't I do it for you?","Now available for the... XBOX LIVE!","Mama mia, here we go again!",
"Out of context","Never gonna give you up, never gonna let you down",
"The true program was the friends we met along the way",
"To make an omelette, dont be afraid to break a few eggs","Aaaaah! Demogorgon!"
,"There's a platypus controlling me"]
msggen()

var button=document.querySelectorAll("button")

function glow(obj) {
    obj.onmouseenter=()=>{
        obj.style.filter="invert(1)"
    }
    obj.onmouseout=()=>{
        obj.style.filter="invert(0.6)"
    }
}
glow(github)
github.onclick=()=>{
    window.open(
        ghlink, "_blank");
}
glow(yt)
yt.onclick=()=>{
    window.open(
        ytlink, "_blank");
}
glow(twitter)
twitter.onclick=()=>{
    window.open(
        twlink, "_blank");
}

function msggen(){
    len=msglist.length
    num=Math.floor(Math.random() * len);
    msg.innerHTML=msglist[num]
}
