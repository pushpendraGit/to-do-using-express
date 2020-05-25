var listItem = document.querySelectorAll('.d-content');


console.log(listItem);

for(let i=0;i<listItem.length;i++)
{
    listItem[i].addEventListener('click',function(){

        var c = this.childNodes;

        c[0].checked = true;

        console.log(c[1]);

        c[1].style.textDecoration = "line-through";

        console.log(c[2]);
        console.log(c[3]);
    });
}