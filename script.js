
var btn = document.querySelectorAll(".btn");
var emoji = document.getElementById("emoji");

Array.from(btn).forEach((e, index)=>{
    
    e.addEventListener("click",()=>{
        
        for(var j=0;j<btn.length;j++){
            btn[j].style.color="white";
        }

        for(var i=0;i<=index;i++){
            btn[i].style.color="#ffc83d";
        }

        switch (index) {
            case 0:
                emoji.innerHTML="&#128550";
                
                break;
            case 1:
                emoji.innerHTML="&#128543";
                break;
            case 2:
                emoji.innerHTML="&#128528";
                break;
            case 3:
                emoji.innerHTML="&#128578";
                break;
            case 4:
                emoji.innerHTML="&#128512";
                break;
        }
    })

})

setInterval(() => {document.title="Star Rating";}, 1000);
setInterval(() => {document.title="Thank You";}, 2000);