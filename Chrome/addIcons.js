const resultInfos = document.getElementsByClassName("result__info");
const ddg = true;
const size = 32;
for (let i = 0; i < resultInfos.length; i++) {
    let url = new URL(resultInfos[i].firstElementChild.href);
    let img = document.createElement('img');
    img.height = size;
    img.width = size+5;
    img.style.paddingRight = "5px";
    if(ddg)
        img.src = "https://icons.duckduckgo.com/ip3/" + url.hostname + ".ico";
    else
        img.src = "http://www.google.com/s2/favicons?domain=" + url.hostname;
    resultInfos[i].insertBefore(img, resultInfos[i].firstElementChild);
}


