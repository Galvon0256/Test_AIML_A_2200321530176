const btn = document.querySelector("button");

btn.addEventListener("click", (e)=>{
    let from_amount = document.querySelector("#from_amount").value
    let to_amount = document.querySelector("#to_amount").value
})

fetch("https://api.exchangerate-api.com/v4/latest/USD")
.then((response) => {
    console.log(response.json())
});
