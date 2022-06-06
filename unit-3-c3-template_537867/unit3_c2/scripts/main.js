function User(n,a,e,am){
    this.name=n;
    this.address=a;
    this.email=e;
    this.amount=am;

}

function storeData(e){
    e.preventDefault()
    let form=document.getElementById("voucher_data");
    let name=form.name.value;
    let address=form.address.value;
    let email=form.email.value;
    let amount=form.amount.value;
    //console.log(name,address,email,amount)
    let u1=new User(name,address,email,amount)

    let data=JSON.parse(localStorage.getItem("users")) ||[];
    data.push(u1);

    localStorage.setItem("user",JSON.stringify(data))||[];
    //console.log(u1)
    form.name.value="";
    form.address.value="";
    form.email.value="";
    form.amount.value="";
    
}