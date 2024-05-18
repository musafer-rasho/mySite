const btn=document.querySelector('#btn');
function addp(){
    const random =Math.floor(Math.random()*100);
    const pcontent='the random number ist :'+random;
    const newElement=document.createElement('p');
    newElement.textContent=pcontent;
    document.body.appendChild(newElement);
}
const list=document.querySelector('ul');
const listItem=list.children.item(0);
listItem.textContent="mu";



align-items: center;
justify-content: center;