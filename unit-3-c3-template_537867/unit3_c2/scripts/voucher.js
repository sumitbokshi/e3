//let money=document.getElementById("amount");

let wallet = document.getElementById("wallet_balance");
let data = JSON.parse(localStorage.getItem("user"));
let available = Number(data[0].wallet);
console.log(available);
wallet.innerText = available;

getData();
async function getData() {
  try {
    let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";
    let res = await fetch(url);
    let data = await res.json();
    let Data = data[0].vouchers;
    console.log(Data);
    append(Data);
  } catch (err) {
    console.log(err);
  }
}

function append(Data) {
  let container = document.getElementById("voucher_list");

  Data.forEach((elem) => {
    let div = document.createElement("div");
    div.setAttribute("class", "voucher");

    let image = document.createElement("img");
    image.src = elem.image;

    let name = document.createElement("h5");
    name.innerText = elem.name;

    let p1 = document.createElement("h4");
    p1.innerText = elem.price;

    let btn = document.createElement("button");
    btn.innerText = "Buy";
    btn.setAttribute("class", "buy_voucher");
    btn.addEventListener("click", function () {
      purchase(elem);
    });
    div.append(image, name, p1, btn);
    container.append(div);
  });
}

function purchase(elem){
    let data=JSON.parse(localStorage.getItem("user"));
    let available=Number[0].wallet;

    let total=Number(elem.price);

    if(total>a){
        alert("Sorry! insufficient balance")
    }else{
        available=available-total;
        wallet.innerText=available;
        available=data[0].wallet;
        localStorage.setItem("user",json.stringify(data))
        alert("Hurray! purchase successful")

        let commonData=JSON.parse(localStorage.getItem("purchase")) || [] ;
        commonData.push(elem);
        localStorage.setItem("purchase",JSON.stringify(commonData))
    }
}