let OpenMenu=false;
let FaqShow=false;
function openMenu(){


  var navH = document.getElementById("navH");
  if (!OpenMenu){
    navH.classList.add("nav-height");
    OpenMenu = true;
  }else{
    navH.classList.remove("nav-height");
    OpenMenu = false;
  }
}



function showFAQ(){
  var faqHidden = document.getElementById("faqHidden");
  if (!FaqShow){
    faqHidden.classList.remove("faq-hidden");
    FaqShow = true;
  }else{
    faqHidden.classList.add("faq-hidden");
    FaqShow = false;
  }
}
