let items = [
    "Hello this is my first Todo.",
    "Hello this is my second Todo.",
    "Hello this is my 3rd Todo.",
];

function showitems(list) {
    let text = ""; 
    list.map((el, i) => {
        text += `
            <div class="card">
                <p>${el}</p>
                <button onclick="removerdata(${i})">
                    <img src="img/close btn.svg" alt="">
                </button>
            </div>`;
    });
    document.getElementById("item").innerHTML = text;
}

showitems(items);

function removerdata(index) {
    items.splice(index, 1);
    showitems(items);
}

function Adding(){
  let x =  document.getElementById("Newitem").value;
  if(x != ""){
    items.push(x);
    showitems(items);
    document.getElementById("Newitem").value = "";
  }else{
    alert("enter Value Plz");
  }
}
