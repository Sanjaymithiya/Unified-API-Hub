let url = "https://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
let inp = document.querySelector("#country");
let ul = document.querySelector("#list");
let p = document.querySelector("p");

btn.addEventListener("click", async () => {
     p.innerText = "loading...";
     let colArr = await getColleges();
     showCollege(colArr);
});

function showCollege(colArr){
    for(let col of colArr){
        p.innerText = "List of colleges";
        let li = document.createElement("li");
        li.classList.add("college");
        ul.appendChild(li);
        li.innerText = col.name, col.name.state;
    }
}
async function getColleges(){
    try{
        let country = inp.value;
        let res = await axios.get(url+country);
        return res.data;
    }catch(e){
        console.log("ERROR: " , e);
    }
}
