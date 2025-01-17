const btn = document.querySelector("button");
const p = document.querySelector("p");
const div = document.querySelector(".random");

//Generate random image from our local machine
const images = ['cat3.gif', 'cat4.gif', 'cat5.gif', 'cat6.gif', 'cat7.gif', 'cat8.gif', 'cat9.gif', 'cat10.gif'];

function getRandomImage(){
   const randomIdx = Math.floor(Math.random() * 8);
   const randomImg = images[randomIdx];
   let img = document.querySelector("#image");
   img.setAttribute("src", randomImg);
}

let url = "https://catfact.ninja/fact";

btn.addEventListener("click", 
    async function getFacts() {
        p.innerText = "loading...."
        try{ 
        let res = await axios.get(url);
        let data = await res.data;
        div.classList.remove("hide");
        getRandomImage();
        p.innerText = data.fact;
        }catch(e){
            console.log("ERROR: " , e)
        }
    }
)