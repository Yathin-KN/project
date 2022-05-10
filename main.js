
let container=document.getElementById('container');
let arr=['Crown studs','Heart earings','Peace hearts','Baby earings',
          'Black stud','d','d','h','1','2','3','4','4','d','d','h'];
let titels=['Spring collection','Grunge collection','Summer collection'];
let j=0;
for(let i=0;i<5;i++)
{
if(i==0||i==5||i==10)
{
    
    let titleCard=document.createElement('div');
    titleCard.setAttribute('class','title-card');
    let html=`${titels[j]}`;
    titleCard.innerHTML=html;
    container.appendChild(titleCard);
    j++;
}
let card=document.createElement('div');
card.setAttribute('id',`card${i}`);
card.setAttribute('class','cardof');
let cardElem=document.createElement('div');
cardElem.setAttribute('class','elems');
//description element
let description=document.createElement('div');
description.setAttribute('class','description');
let descriptionContent=`Price $`;
description.innerHTML=descriptionContent;
//card element
let image=`<img src=./css-files/collection${i}.png class="image2">`;
let text=document.createElement('div');
var counter=document.createElement('div');
counter.setAttribute('class',`count`);
counter.setAttribute('id',`count${i}`);
// setting of counter buttons
counterButton(i);
//counter js

//image set
card.innerHTML=image;
text.setAttribute('id',`text${i}`);
text.setAttribute('class','text');;
text.innerHTML=arr[i];
cardElem.appendChild(text);
cardElem.appendChild(description);
cardElem.appendChild(counter);
container.appendChild(card);
card.appendChild(cardElem);

}
function counterButton(i)
{
    counter.innerHTML=
    `<div class="cont" id='${i}'>
    <button class="operate" id="prev${i}" "><</button>
    <button id="quantity${i}">0</button>
    <button class="operate" id="next${i}">></button>
</div>
`;
}
// function check(elem)
// {
//    console.log(elem.parentNode.id);
// }
counterFunc();
function counterFunc()
{
    let nextElem=document.getElementById(`next2`);
let prevElem=document.getElementById(`prev2`);
let quantityElem=document.getElementById(`quantity2`);
let k=0;
nextElem.addEventListener('click',()=>
{
    console.log(k);
   k++;
   quantityElem.innerHTML=k;
   localStorage.setItem(`card2`,`${k}`);
});

prevElem.addEventListener('click',()=>
{
    if(k>0)
    {
        k--;
        quantityElem.innerHTML=k;
    }
    localStorage.setItem(`card2`,`${k}`);
})
}
let list=document.getElementsByClassName('cont');
console.log(list);

