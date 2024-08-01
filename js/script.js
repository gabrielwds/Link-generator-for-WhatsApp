document.getElementById('whatsapp-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let countryCode = document.getElementById('DDI').value;
    let number = document.getElementById('Number').value;
    let message = document.getElementById('Message').value;

    let link = `https://wa.me/${countryCode}${number}?text=${message}`

    console.log(link)

    document.getElementById('generated-link').innerHTML = `<p>${link}</p>`
});