const resultInfos = document.getElementsByClassName("result__info");
var size = 32;
run();

async function run(){
    let sizeObj = await browser.storage.local.get({'size': 24});
    size = sizeObj.size*1;
    for (let i = 0; i < resultInfos.length; i++) {
        let url = new URL(resultInfos[i].firstElementChild.href);
        let img = document.createElement('img');
        img.height = size;
        img.width = size+5;
        img.style.paddingRight = "5px";
        img.src = "https://icons.duckduckgo.com/ip3/" + url.hostname + ".ico";
        resultInfos[i].insertBefore(img, resultInfos[i].firstElementChild);
    }
}