// Arrays

let images = []

// Helper Functions
function removeImages() {
    if (document.querySelector('#containerMain').querySelector('img')) {
        let memeBox = document.querySelector('#containerMain').querySelectorAll('img');
        memeBox[0].remove();
    }
}

// Library Generators

function generateOtterLibrary() {
    images = [];
    for (i = 0; i <= 78; i++) {
        images[i] = `otter` + i + `.gif`
    }
}

function generateMemeLibrary(button) {
    images = [];
    for (i = 0; i <= 222; i++) {
        images[i] = `pic` + i + `.jpg`
    }
}

function generateCelticLibrary(button) {
    images = [];
    for (i = 0; i <= 117; i++) {
        images[i] = i + `.gif`
    }
}
// Generator
function Summon(button) {
    removeImages();
    var imgCount = images.length;
    var dir = button.textContent + `/`;
    var randomCount = Math.round(Math.random() * (imgCount)) + 1;
    var generatedImage = document.createElement('img');
    generatedImage.src = dir + images[randomCount];
    generatedImage.setAttribute("id", "Image");
    var container = document.getElementById("containerMain");
    container.appendChild(generatedImage);
    console.log(generatedImage);
}

// news portion

function newsFunc(button) {
    let text = button.innerText;
    let Mass = ["https://www.bostonglobe.com/", "https://www.capecodtimes.com/", "https://www.itemlive.com/", "https://www.gazettenet.com/", "https://www.eagletribune.com/", "https://www.enterprisenews.com/", "https://www.masslive.com/", "https://www.lowellsun.com/", "https://www.recorder.com/", "https://www.telegram.com/"];
    let Regional = ["https://www.stamfordadvocate.com/", "https://www.greenwichtime.com/", "https://www.rep-am.com/", "https://www.concordmonitor.com//", "https://www.fosters.com/", "https://www.unionleader.com/", "https://www.providencejournal.com/", "https://www.woonsocketcall.com/", "https://www.necn.com/"];
    let National = ["https://abcnews.go.com/", "https://www.cbsnews.com/", "https://www.cnn.com/", "https://www.foxnews.com/", "https://www.msnbc.com/", "https://www.nbcnews.com/", "https://www.usatoday.com/", "https://www.bloomberg.com/", "https://www.usnews.com/"];
    let National2 = ["https://www.thedailybeast.com/", "https://www.theroot.com/", "https://thehill.com/", "https://www.politico.com/", "https://www.businessinsider.com/", "https://lawandcrime.com/"]
    let Networks = ["https://www.wcvb.com/", "https://www.wgbh.org/", "https://whdh.com/news/local/", "https://whdh.com/cw56/", "https://www.nbcboston.com/", "https://www.boston25news.com/"]
    var interval = setInterval(function() {
        let url = text.pop()
        if (url) {
            window.open(url);
        } else {
            clearInterval(interval);
        }
    }, 6500);
}