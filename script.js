const accordionContent= document.querySelectorAll(".accordion-content");


accordionContent.forEach((item, index) => {
    let header= item.querySelector("header");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");
        let description= item.querySelector(".description");
        if(item.classList.contains("open")){
            description.style.height= `${description.scrollHeight}px`;
        }else{
            description.style.height= "0px";
        }
        removeOpen(index);
    })

});



function removeOpen(index1){
    accordionContent.forEach((item2, index2) =>{
        if(index1 != index2){
            item2.classList.remove('open');
            let description= item2.querySelector(".description");
            description.style.height= "0px";
        }
    })
}