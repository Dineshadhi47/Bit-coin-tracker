function fetchbitcoin(){
    const price = document.getElementById('value')
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        price.innerText = data.bitcoin.usd
 } )
    .catch((err) => console.log(err))
}