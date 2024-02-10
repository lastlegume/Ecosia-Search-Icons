const resultInfos = document.getElementsByClassName("result__info");

for (let i = 0; i < resultInfos.length; i++) {
    let url = new URL(resultInfos[i].firstElementChild.href);

    let img = document.createElement('img');
    img.height = 35;
    img.width = 35;
    img.style.padding = "5px";
    resultInfos[i].insertBefore(img, resultInfos[i].firstElementChild);
    let x = new XMLHttpRequest();
    x.responseType = 'blob';
    x.open('get', "https://icons.duckduckgo.com/ip3/" + url.hostname + ".ico");
    x.onload = function () {
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(x.response);
        img.src = imageUrl;
        // var fileReader = new FileReader();
        // fileReader.onloadend = function() {
        //     // fileReader.result is a data-URL (string)
        //     window.open(fileReader.result);
        // };
        // // x.response is a Blob object
        // fileReader.readAsDataURL(x.response);
    };
    x.send();
}


