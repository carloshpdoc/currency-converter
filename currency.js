async function httpGet(theUrl) {
    try{
        let response = await fetch(theUrl);
        return await response.json();
      }catch(err){
        console.error(err);
      }
}

async function currencyConverter(){
    var req = 'https://api.exchangeratesapi.io/latest?base=USD'
    var httpResponse = await httpGet(req)
    return httpResponse.rates
}

var formatterUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  var formatterBRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  var formatterEUR = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  });


  var formatterCAD = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 2,
  });

  var formatterGBP = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
  });

async function usdFunc(){
    var currencyFrom = "USD"
    usdValue = document.getElementById("USD").value

    var rate = await currencyConverter()
    eurValue = (rate.EUR) * usdValue
    document.getElementById("EUR").value = formatterEUR.format(eurValue)
    
    var rate = await currencyConverter()
    brValue = (rate.BRL) * usdValue
    document.getElementById("BRL").value = formatterBRL.format(brValue)

    var rate = await currencyConverter()
    cadValue = (rate.CAD) * usdValue
    document.getElementById("CAD").value = formatterCAD.format(cadValue)

    var rate = await currencyConverter()
    gbpValue = (rate.GBP) * usdValue
    document.getElementById("GBP").value = formatterGBP.format(gbpValue)

}