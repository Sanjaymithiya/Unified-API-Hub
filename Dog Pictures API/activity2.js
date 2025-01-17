let btn = document.querySelector("button");

let url = "https://dog.ceo/api/breeds/image/random";

async function getImage() {
    try{ 
    let res = await axios.get(url);
    return res.data.message;
     }catch(e){
        console.log("ERROR: " , e);
    }
}

//add event listner
btn.addEventListener("click", async ()=>{
    btn.innerHTML = "Image loading....";
    let link =  await getImage();
    let img = document.querySelector("#image");
    img.setAttribute("src", link);
    btn.innerHTML = "Generate Random Image"
})

