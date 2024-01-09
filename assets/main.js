const nomePasseggero = document.getElementById("nome-pax");
const sendButton = document.getElementById("sendbutton");
const ticketCostKM = 0.21;
const numeroCarrozza = document.getElementById("carrozza");
const codiceCP = document.getElementById("cp-code");
const costoBiglietto = document.getElementById("ticket-price");
const tipoOfferta = document.getElementById("offerta");
const bigliettohtml = document.getElementById("biglietto")

bigliettohtml.style.display = "none"

document.getElementById("sendbutton").addEventListener("click", function(){

        const randomCP = Math.floor(Math.random() * 9999) + 90000; 
        let randomNumeroCarrozza = Math.floor(Math.random() * 15) + 1;
        const nome = document.getElementById("name").value;
        const km = document.getElementById("km").value;
        const age = document.getElementById("age").value;
        const totalPrice = km * ticketCostKM;
        bigliettohtml.style.display = "block"
        


        nomePasseggero.innerHTML = `${nome}`;
        numeroCarrozza.innerHTML = `${randomNumeroCarrozza}`;
        codiceCP.innerHTML = `${randomCP}`;
        ticketprice.innerHTML = `${totalPrice}`;
    
        if (age == "under" ) {
            let prezzo20 = totalPrice - totalPrice / 100 * 20;
            document.getElementById("ticketprice").innerHTML = prezzo20.toFixed(2);
            tipoOfferta.innerHTML = "sconto under 18 del 20%";
        }
        else if (age == "over" ) {
            let prezzo40 = totalPrice - totalPrice / 100 * 40;
            document.getElementById("ticketprice").innerHTML = prezzo40.toFixed(2);
            tipoOfferta.innerHTML = "sconto over 65 del 40%";
        }
        else if (age =="" ) {
            alert("Inserisci la fascia di età");
        }
        else{
            costoBiglietto.innerHTML = `${totalPrice.toFixed(2)} €`;
            tipoOfferta.innerHTML = "Biglietto Standard";
        }
}
);