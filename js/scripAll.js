let textSelect = document.querySelector(".section-one__box-text");
console.log(textSelect)
let seclectOne = document.querySelector(".section-one");
let buttonSelect =document.querySelector(".section-one__box--button button");
var check = false;
buttonSelect.addEventListener("click",()=>{
    check = !check;
  
    if(check === true){
        console.log("ok")
        seclectOne.style.top = 'calc(100%/2.1)';
        textSelect.style.display = 'block';
        buttonSelect.innerHTML ="Đóng"
    }else{
        seclectOne.style.top = 'calc(100%/1.3)';
        textSelect.style.display = 'none';
        buttonSelect.innerHTML ="Ấn Vào Đây Đi!"
    }
})