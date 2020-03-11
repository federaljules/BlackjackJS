let lisaa = document.getElementById('lisaa');
let jata = document.getElementById('jata');
let jako = document.getElementById('jako');
let jakaja_lvt = document.getElementById('jLuvut');
let pelaaja_lvt = document.getElementById('pLuvut');
let info = document.getElementById('info');
let jakaja = document.getElementById('jakaja');
let pelaaja = document.getElementById('pelaaja');

let lopputulos;
let nimi;
let numero;
let kuva;

let pakka = {
     "maa": [{
        "nimi": "Pata",
        "arvot": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,"J", "Q", "K"]
    },
    {
        "nimi": "Ruutu",
        "arvot": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
        },
    {
        "nimi": "Risti",
        "arvot": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
        },
    {
        "nimi": "Hertta",
        "arvot": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
        }]
};

let randKortti = function (){

    let arvo = pakka.maa[Math.floor(Math.random()*pakka.maa.length)]
    let numero;

    if(arvo.nimi == "Hertta"){
        numero = pakka.maa[3].arvot[Math.floor(Math.random()*pakka.maa[3].arvot.length)];
        if(numero == 1){
            console.log("Onko kortin " +arvo.nimi+" "+ numero +" arvo 1 vai 11?")
        }   
            else if(numero == "J"){
                kuva = "K";
                index = pakka.maa[1].arvot.indexOf(numero);
                pakka.maa[3].arvot.splice(index,1);
                numero = 10;
            }
            else if (numero == "Q"){
                kuva = "K";
                index = pakka.maa[1].arvot.indexOf(numero);
                pakka.maa[3].arvot.splice(index,1);
                numero = 10;
            }
            else if (numero == "K"){
                kuva = "K";
                index = pakka.maa[1].arvot.indexOf(numero);
                pakka.maa[3].arvot.splice(index,1);
                numero = 10;
            }else{
                kuva = " ";
                index = pakka.maa[3].arvot.indexOf(numero);
                pakka.maa[3].arvot.splice(index, 1);
                }
                console.log(arvo.nimi +" "+numero+" "+pakka.maa[3].arvot)
        }
      
         
    else if(arvo.nimi == "Pata"){
        numero = pakka.maa[0].arvot[Math.floor(Math.random()*pakka.maa[0].arvot.length)];
        if(numero == 1){
            console.log("Onko kortin " +arvo.nimi+" "+ numero +" arvo 1 vai 11?")
        }   
        else if(numero == "J"){
            kuva = "J";
            index = pakka.maa[1].arvot.indexOf(numero);
            pakka.maa[0].arvot.splice(index,1);
            numero = 10;
        }
        else if (numero == "Q"){
            kuva = "Q";
            index = pakka.maa[1].arvot.indexOf(numero);
            pakka.maa[0].arvot.splice(index,1);
            numero = 10;
        }
        else if (numero == "K"){
            kuva = "K";
            index = pakka.maa[1].arvot.indexOf(numero);
            pakka.maa[0].arvot.splice(index,1);
            numero = 10;
        }else{
            kuva = " ";
            index = pakka.maa[0].arvot.indexOf(numero);
            pakka.maa[0].arvot.splice(index,1);
            }
        console.log(arvo.nimi +" "+numero+" "+pakka.maa[0].arvot)
    } 
    else if(arvo.nimi == "Ruutu"){
        numero = pakka.maa[1].arvot[Math.floor(Math.random()*pakka.maa[1].arvot.length)];
        if(numero == 1){
            console.log("Onko kortin " +arvo.nimi+" "+ numero +" arvo 1 vai 11?")
        }   
        else if(numero == "J"){
            kuva = "J";
            index = pakka.maa[1].arvot.indexOf(numero);
            pakka.maa[1].arvot.splice(index,1);
            numero = 10;
        }
        else if (numero == "Q"){
            kuva = "Q";
            index = pakka.maa[1].arvot.indexOf(numero);
            pakka.maa[1].arvot.splice(index,1);
            numero = 10;
        }
        else if (numero == "K"){
            kuva = "K";
            index = pakka.maa[1].arvot.indexOf(numero);
            pakka.maa[1].arvot.splice(index,1);
            numero = 10;
        }else{
            kuva = " ";
            index = pakka.maa[1].arvot.indexOf(numero)
            console.log(index)
            pakka.maa[1].arvot.splice(index,1);
            }
       console.log(arvo.nimi +" "+numero+" "+pakka.maa[1].arvot)
    }
    else if(arvo.nimi == "Risti"){
        numero = pakka.maa[2].arvot[Math.floor(Math.random()*pakka.maa[2].arvot.length)];

        if(numero == 1){
            console.log("Onko kortin " +arvo.nimi+" "+ numero +" arvo 1 vai 11?")
        }        
        else if(numero == "J"){
            
            kuva = "J";
            index = pakka.maa[2].arvot.indexOf(numero);
            pakka.maa[2].arvot.splice(index,1);
            numero = 10;
        }
        else if (numero == "Q"){
            
            kuva = "Q";
            index = pakka.maa[2].arvot.indexOf(numero);
            pakka.maa[2].arvot.splice(index,1);
            numero = 10;
        }
        else if (numero == "K"){
           
            kuva = "K";
            index = pakka.maa[2].arvot.indexOf(numero);
            pakka.maa[2].arvot.splice(index,1);
            numero = 10;
        }else{
            kuva = " ";
            index = pakka.maa[2].arvot.indexOf(numero);
            pakka.maa[2].arvot.splice(index,1);
            
            }
            console.log(pakka.maa[2].arvot)
    //    
    }

    return [arvo.nimi, numero, kuva];

} // randKortti loppuu

function teeKortti(maa, num, kuva, pj, tausta) { 

    let kortti = document.createElement('div');
    kortti.setAttribute('class', 'kortti');
    let kortti_kuva = document.createElement('img');
    kortti_kuva.setAttribute('class', 'maa_ico');
    let kortti1_luku = document.createElement('h3');
    kortti1_luku.setAttribute('class', 'luku');
    let kortti_JQK = document.createElement('h3');
    kortti_JQK.setAttribute('class', 'jqk');
    let korttiHead = document.createElement('div');
    korttiHead.setAttribute('id','kortti_head');
    let korttiFoot = document.createElement('div');
    korttiFoot.setAttribute('id','kortti_foot');
    

    if(pj == "J"){
        jakaja.appendChild(kortti);
    }
    else{
        pelaaja.appendChild(kortti);
    }

    kortti.appendChild(korttiHead);
    kortti.appendChild(korttiFoot);
    korttiHead.appendChild(kortti_kuva);
    korttiHead.appendChild(kortti1_luku);
    korttiFoot.appendChild(kortti_JQK);
    
    
    if(tausta == "tausta"){
        
        kortti.setAttribute('class', 'kortti_tausta');
        kortti_kuva.style.display = "none"
        kortti1_luku.style.display ="none"
        kortti_JQK.style.display ="none"
        
   
    if(maa =="Hertta"){
        
        kortti_kuva.setAttribute("src", "img/hertta.png");

        kortti1_luku.innerHTML = num;
        kortti_JQK.innerHTML = kuva;
    }

    else if(maa =="Risti"){
    
        kortti_kuva.setAttribute("src", "img/risti.png");
        kortti1_luku.innerHTML = num;
        kortti_JQK.innerHTML = kuva;
        
    }
    else if(maa =="Pata"){

        kortti_kuva.setAttribute("src", "img/pata.png");
        kortti1_luku.innerHTML = num;
        kortti_JQK.innerHTML = kuva;
    }
    else if(maa == "Ruutu"){

        kortti_kuva.setAttribute("src", "img/timantti.png");
        kortti1_luku.innerHTML = num;
        kortti_JQK.innerHTML = kuva;
    }

}else{
    if(maa =="Hertta"){
        
        kortti_kuva.setAttribute("src", "img/hertta.png");

        kortti1_luku.innerHTML = num;
        kortti_JQK.innerHTML = kuva;
    }

    else if(maa =="Risti"){
    
        kortti_kuva.setAttribute("src", "img/risti.png");
        kortti1_luku.innerHTML = num;
        kortti_JQK.innerHTML = kuva;
        
    }
    else if(maa =="Pata"){

        kortti_kuva.setAttribute("src", "img/pata.png");
        kortti1_luku.innerHTML = num;
        kortti_JQK.innerHTML = kuva;
    }
    else if(maa == "Ruutu"){

        kortti_kuva.setAttribute("src", "img/timantti.png");
        kortti1_luku.innerHTML = num;
        kortti_JQK.innerHTML = kuva;
    }
}

    

    if(kuva == undefined){
        kortti_JQK.innerHTML= " "
    }
 } // teeKortti loppuu

function kaannaKortti(){
    document.getElementsByClassName('kortti_tausta')[0].setAttribute("class", "kortti")
    document.getElementsByClassName('maa_ico')[1].style.display = "initial";
    document.getElementsByClassName('luku')[1].style.display = "initial";
    document.getElementsByClassName('jqk')[1].style.display = "initial";
}

 function laskeKortit(pluvut, jluvut){

    ptulos = pluvut;
    jtulos = jluvut;
    
    lisaa.addEventListener('click', function(){
      
        let lisakortti;
    
        lisakortti= randKortti();
        console.log(lisakortti[1]);
        console.log(ptulos+lisakortti[1]);
        teeKortti(lisakortti[0], lisakortti[1], lisakortti[2], "P")
        ptulos = ptulos + lisakortti[1];

        if(tulos < 21){
            lopputulos = ptulos;
        }

        if(ptulos == 21){
            console.log("Blackjack!")
            lisaa.disabled = true;
            jata.disabled = true;
            lopputulos = ptulos;
            jakaja.style.background ="red"
            pelaaja.style.background ="green"
            kaannaKortti();
            
        }
        
        if(ptulos > 21){
            console.log("Liikaa, hävisit. Tuloksesi: "+tulos)  
            lisaa.disabled = true;
            jata.disabled = true;
            lopputulos = ptulos;
            pelaaja.style.background = "red"
            jakaja.style.background = "green"
            kaannaKortti();
            }
        })

        jata.addEventListener("click", function(){
            console.log("TÄÄ ON TULOS "+lopputulos)
            lisaa.disabled = true;
            jata.disabled = true;
            lopputulos = ptulos;
            kaannaKortti();

            jakajaBot(jtulos, lopputulos);
         })

 } // laskeKortit loppuu


 let jaa = function (){
    
    let j1 = randKortti();
    let j2 = randKortti();
    let p1 = randKortti();
    let p2 = randKortti();
    let pSumma = p1[1]+p2[1];
    let jSumma = j1[1]+j2[1];
    let pelaaja = "Pelaaja : " + p1[0]+" "+p1[1]+" "+p1[2] + " & "+ p2[0]+" "+p2[1]+" "+p2[2];
    let jakaja = "Jakaja : " + j1[0]+" "+j1[1]+" "+j1[2] + " & "+ j2[0]+" "+j2[1]+" "+j2[2];
    
    teeKortti(p1[0], p1[1], p1[2], "P")
    teeKortti(p2[0], p2[1], p2[2], "P")
    teeKortti(j1[0], j1[1], j1[2], "J")
    teeKortti(j2[0], j2[1], j2[2], "J", "tausta")
    

    let assa;
 
   //pelaaja_lvt.innerHTML = pelaaja;

   //jakaja_lvt.innerHTML = jakaja;
   

    console.log(pSumma + " "+ jSumma)
    let jtulos = j1[1]+ j2[1];
    let ptulos = p1[1]+ p2[1];
    lopputulos = ptulos;
    laskeKortit(ptulos, jtulos);
    
    
  
 } // jaa loppuu
 jaa();


 function jakajaBot(jtul, ltul){
     while(jtul < 18){
        let lisakortti;
        lisakortti= randKortti();
        console.log(lisakortti[1]);
        console.log(jtul+lisakortti[1]);
        window.setTimeout(teeKortti(lisakortti[0], lisakortti[1], lisakortti[2], "J"), 20000)
        jtul = jtul + lisakortti[1];
    }
     if(jtul < ltul && jtul <= 21){
        console.log("Pelaaja voitti!")
        pelaaja.style.background = "green"
        jakaja.style.background ="red";
    }else if(jtul > ltul && jtul <= 21){
        console.log("Jakaja voitti!")
        jakaja.style.background = "green"
        pelaaja.style.background ="red";
    }else if(jtul == ltul){
        console.log("Tasapeli")
        pelaaja.style.background ="green";
        jakaja.style.background ="green";
    }else if(jtul > 21){
        console.log("Pelaaja voitti!")
        jakaja.style.background ="red";
        pelaaja.style.background ="green";
    }
}  // jakajaBot loppuu



 jako.addEventListener("click", function(){
    location.reload();
 })

