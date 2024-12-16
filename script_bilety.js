let vyborTribune = '';
let vyborFloor = '';
let vyborStatus = '';
let vyborMatch = '';
let vyborkolichestvo = 1;
let totalCost = 0;

function selectTribune(tribune, price) {
    resetSelection('.tribune');
    vyborTribune = tribune;
    totalCost += price;
    updateTicketInfo();
    markAsvybor(event.target);
}

function selectFloor(floor) {
    resetSelection('.floor');
    vyborFloor = floor;
    updateTicketInfo();
    markAsvybor(event.target);
}

function selectStatus(status, price) {
    resetSelection('.status');
    vyborStatus = status;
    totalCost += price;
    updateTicketInfo();
    markAsvybor(event.target);
}

function selectMatch(match) {
    resetSelection('.match');
    vyborMatch = match;
    updateTicketInfo();
    markAsvybor(event.target);
}

function selectkolichestvo(kolichestvo) {
    resetSelection('.kolichestvo');
    vyborkolichestvo = kolichestvo;
    updateTicketInfo();
    markAsvybor(event.target);
}

function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

const randomString = generateRandomString(15);
console.log(randomString);

function updateTicketInfo() {
    const info = `
        Трибунa: ${vyborTribune}
        Этаж: ${vyborFloor}
        Статус: ${vyborStatus}
        Матч: ${vyborMatch}
        Количество: ${vyborkolichestvo}
    `;
    document.getElementById('ticket-info').innerText = info;
    document.getElementById('total-cost').innerText = `Общая стоимость: ${totalCost * vyborkolichestvo} руб.`;
}

function resetSelection(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.classList.remove('vybor');
        element.style.backgroundColor = ""; 
    });
}

function markAsvybor(element) {
    element.classList.add('vybor');
}

function downloadTicket() {
    const ticketDetails = `
        Спасибо за покупку!
        ${document.getElementById('ticket-info').innerText}
        Общая стоимость: ${totalCost * vyborkolichestvo} руб.
        Номер билета(-ов):${randomString}
    `;
    const blob = new Blob([ticketDetails], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Билет.txt';
    link.click();
}