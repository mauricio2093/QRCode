const codeQR = document.getElementById('codeQR');
const form = document.getElementById('form');
let copyText = document.getElementById("copyText").innerText;



console.log('Paso al else');
const QR = new QRCode(codeQR);

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const qt = QR.makeCode(form.siteUrl.value);
    console.log(qt);
})


/**
 * It creates a link element, sets the download attribute to the name of the file, sets the href
 * attribute to the dataUrl of the image, appends the link to the body, clicks the link, removes the
 * link from the body, and deletes the link.
 * </code>
 */
function downloadQR(){
    let dataUrl=document.querySelector('#codeQR').querySelector('img').src;
    var link=document.createElement('a');
    link.download='QRcode.png';
    link.href=dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}

//copy Image to Clipboard
function copyQR(){
    let img=document.querySelector('#codeQR').querySelector('img');
    const canvas=document.createElement('canvas');
    canvas.width=img.width;
    canvas.height=img.height;
    canvas.getContext('2d').drawImage(img,0,0,img.width,img.height);
    canvas.toBlob((blob)=>{
        navigator.clipboard.write([new ClipboardItem({'image/png':blob})]);
    },'image/png');

    console.log('success');
    copyText = 'Copied !';
    document.getElementById("copyText").innerText = copyText;

    setTimeout(()=>{
        copyText = ' ';
        document.getElementById("copyText").innerText = copyText;
    },1500);
}

