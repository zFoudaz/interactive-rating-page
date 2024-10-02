let rank = document.getElementsByClassName('ratebtn');
let submit = document.getElementsByClassName('Submit');
let lastRate= document.getElementById('submitrate');
let container= document.getElementsByClassName('container');
let rate;
for(let i = 0 ; i<rank.length;i++){
    rank[i].addEventListener('click',function(){
        for(let i = 0 ; i<rank.length;i++){
            rank[i].classList.remove('active');
        }
        this.classList.add('active')
        console.log(parseInt(this.innerText));
        rate=parseInt(this.innerText);
    })
}
submit[0].addEventListener('click',function(){
    if(rate){
        lastRate.innerText= rate;
        container[0].style.display="none";
        container[1].style.display="block";
    }
})
