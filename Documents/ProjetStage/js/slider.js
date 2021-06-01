var image = new Array("https://www.atelierpoisson.fr/wp-content/uploads/2019/12/adc-cipatartefineprintaniereweb-e1576512538367-580x389.jpg", "https://tout-metz.com/wp-content/uploads/2015/03/smoothie-580x389.jpg", "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a","https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4","https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840","https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23","https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129","https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6");
var desc = new Array("Une crêpe de qualitée.","With supporting text below as a natural lead-in to additional content.","With supporting text below as a natural lead-in to additional content.","With supporting text below as a natural lead-in to additional content.","With supporting text below as a natural lead-in to additional content.","With supporting text below as a natural lead-in to additional content.","With supporting text below as a natural lead-in to additional content.","With supporting text below as a natural lead-in to additional content.","With supporting text below as a natural lead-in to additional content.");
num = 0; //compteur pour savoir ou on en est dans les liste

function changeSlide(sens){ //sens => int
    console.log(document.getElementsByClassName('Choixx1').scr);
    num = num + sens;
    if (num < 0){
        num = image.length - 1;
        document.getElementsByClassName("Choixx3").src =  document.getElementsByClassName("Choixx2").src;
        document.getElementsByClassName("Choixx2").src = document.getElementsByClassName("Choixx1").src;
        document.getElementsByClassName("Choixx1").src = image[num];
        console.log("dernier test1");
    }
    else if (num + 2 >= image.length){
        document.getElementsByClassName("Choixx1").src = document.getElementsByClassName("Choixx2").src;
        document.getElementsByClassName("Choixx2").src = document.getElementsByClassName("Choixx3").src;
        document.getElementsByClassName("Choix3x").src = image[num + 2 - image.length];//peut etre activer que si demande suivant donc dois checker si la derniere est dans la liste ou pas est repartir de 0 si elle n'y est pas
        if (num = image.length){
            num = 0;
        }
        console.log("dernier test2");
    }
    else if (sens < 0){
        document.getElementsByClassName("Choix3x").src =  document.getElementsByClassName("Choixx2").src;
        document.getElementsByClassName("Choix2x").src = document.getElementsByClassName("Choixx1").src;
        document.getElementsByClassName("Choix1x").src = image[num];
        console.log("dernier test3");
    }
    else{
        document.getElementsByClassName("Choix1x").src = document.getElementsByClassName("Choixx2").src;
        document.getElementsByClassName("Choix2x").src = document.getElementsByClassName("Choixx3").src;
        document.getElementsByClassName("Choix3x").src = image[num];
        console.log(image[num]);
        console.log(document.getElementsByClassName("Choix3x").src);
        console.log("dernier test4");
    }
}

function changeChoix(numChoix){ //numChoix => int
    numChoisi = num + numChoix;
    if (numChoisi >= image.length){
        numChoisi = numChoisi - image.length;
    }
    document.getElementsByClassName("imgPrincipall").src = image[numChoisi];
    document.getElementsByClassName("descritionPlatt").innerText = desc[numChoisi];
    console.log(document.getElementsByClassName("descritionPlatt").innerText)
}
