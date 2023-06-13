


const stars=document.querySelectorAll(".images");

document.addEventListener("DOMContentLoaded",()=>{
    let image=[];
    let i=0;
    const src="./images/icon-star.svg";
    stars.forEach((ev)=>{
        for(let n=0;n<5;n++)
        { image[i]=document.createElement("img"); 
            image[i].src=src;
            ev.append(image[i]);
            } i++;
    }) 
    /*image[0]=document.createElement("img");
    image[0].src=src;
    stars[2].append(image[0]);  */
})