const submit = document.getElementById("submitbutton");
const sizeInput = document.getElementById("icon-size");
document.addEventListener("DOMContentLoaded", initialize);

submit.addEventListener('click', () => save());
async function initialize(){
    let size = await browser.storage.local.get({'size': 32});
    sizeInput.value = size.size;
}

function save(){
    browser.storage.local.set({'size:': sizeInput.value});
}