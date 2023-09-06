
const togglebtn = document.getElementById("togglebtn");
var count =0;
const menu =document.getElementsByClassName('menu')[0];

togglebtn.addEventListener("click",()=> {
    if (count ==0){
        menu.computedStyleMap.height='300px';
        count=1
    }else{
        menu.style.height='40px';
        count=0
    }

})
function addToCart(){
    const buttons1=document.getElementsByClassName('addToCartbtn');
    var button2=Object.values(buttons1);
    const productname=document.querySelectorAll('.productname');
    const productprice=document.querySelectorAll('.productprice');
    var arr=[];
    button2.forEach((el,index)=>{
        el.addEventListener('click',()=>{
            var item=new Object();
            item.id =index;
            item.qty=1;
            item.name=productname[index].innertext;
            item.price=productprice[index].getAttribute('data-value');
           var check=false;
           arr.forEach(el1 =>{
            if(el1['id']==index){
                el1['qty']++;
                check=true;
            }
           });
           if(check==false){
            arr.push(item);
           }
           console.log(arr);
        })
    })
}
addToCart();

