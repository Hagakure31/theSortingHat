const value = ['400', '401', '403', '404'];


function randomize(){
    return value[(Math.floor(Math.random()*4))];
}  



const input = document.getElementById('button');
const bulle = document.getElementById('bulle')
const house = document.getElementById('houseNum')
console.log(bulle);
input.addEventListener('click', ()=>{

    house.innerHTML= "Vous avez été assigné à la maison:";
    setTimeout(function(){house.innerHTML = "                   " +randomize()}, 2000);
    
});