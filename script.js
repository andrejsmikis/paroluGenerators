
const vardi1 = ['mazais','raibais','lielais','niknais', 'klusais'];
const vardi2 = ['suns','dundurs','vilks','lacis', 'irsis'];
const vardi3 = ['skrien','velkas','gul','snauz', 'mostas'];
let vardaIndeks1, vardaIndeks2, vardaIndeks3, parole, cipars1, ciparuSkaits, variantuSkaits, izveletaisVards,i,j;
ciparuSkaits=0;
variantuSkaits=0;
izveletaisVards='';
ciparuSkaits=document.getElementById("cipSkaits").value;
variantuSkaits=document.getElementById("varSkaits").value;
izveletaisVards=document.getElementById("ieklVards").value;
let rindas=document.querySelector('.rindas');
//rindas.innerHTML = '';
for(i=0;i<variantuSkaits;i=++){
vardaIndeks1=Math.random()*5;
vardaIndeks1=Math.floor(vardaIndeks1);
vardaIndeks2=Math.random()*5;
vardaIndeks2=Math.floor(vardaIndeks2);
vardaIndeks3=Math.random()*5;
vardaIndeks3=Math.floor(vardaIndeks3);
if(izveletaisVards!==null){    
    parole=vardi1[vardaIndeks1]+izveletaisVards+vardi3[vardaIndeks3] ;
}
else{    
    parole=vardi1[vardaIndeks1]+vardi2[vardaIndeks2]+vardi3[vardaIndeks3];
}

if(ciparuSkaits>0){
    for(j=0;j<ciparuSkaits;j=++){
        cipars1=Math.random()*10;
        cipars1=Math.floor(cipars1);
        parole=parole+cipars1;
    }
    if(Math.random()*10>5){
        parole = parole.replace('e','E');
        parole = parole.replace('i','1'); 
    }
    parole = parole.replace('e','E');
}

//console.log(parole);
rindas.innerHTML += `
<tr>
<td>parole</td>
</tr>`;
}

    