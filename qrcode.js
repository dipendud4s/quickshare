import { QRCodeSVG } from '@cheprasov/qrcode';
import { html } from './utils'
import { Html5QrcodeScanner } from 'html5-qrcode'

let isOfferer = false;

export function setOffer(v) {
  isOfferer = v
}

const scan2btn = html`<button id="receiveBtn">scan answer</button>`


export const scanQR = () => {
  console.log('scan')

  document.getElementById('qrScan').style.display = 'block'
  document.getElementById('qrSec').style.display = 'none'

  let html5QrcodeScanner = new Html5QrcodeScanner('qrScan', { fps: 10, qrbox: { width: 250, height: 250 } }, false);
  html5QrcodeScanner.render(onScanSuccess, onScanFailure);
}

export const generateQR = () => {
  const divElement = document.getElementById('qrSec');
  const qrSVG = new QRCodeSVG('vjhvjvhjvhjhvjh', {
    level: 'Q'
  });

  divElement.innerHTML = html`
  <div> 
    ${qrSVG.toString()}
    ${isOfferer ? scan2btn : ''}
  </div>`;
  document.getElementById('receiveBtn').onclick = scanQR
}

export const onScanSuccess = () => {
  if (!isOfferer) {
    document.getElementById('qrScan').style.display = 'none'
    document.getElementById('qrSec').style.display = 'block'
    generateQR()
  }
}
export const onScanFailure = () => {

}