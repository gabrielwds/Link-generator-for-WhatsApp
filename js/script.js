function createWhatsAppLink(countryCode, number, message) {

    let WhatsAppLink = `https://wa.me/${countryCode}${number}?text=${message}`

    return WhatsAppLink;
}

let countryCode = '55';
let number = '81999999999';
let message = "Olá Mundo!";

let link = createWhatsAppLink(countryCode, number, message)

console.log(link)