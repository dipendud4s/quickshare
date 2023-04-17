import './style.css'
import { html } from './utils'
import { avatar, iconButton, listItem } from './components'
import { generateQR, scanQR, setOffer } from './qrcode'

const currentDate = (new Date()).toDateString();

const populateHistory = () => {
    const prevUsr = new Array(10).fill(null)
    const result = prevUsr.map(usr => {
        return avatar()
    })
    return result.join('')
}
const populateActivities = () => {
    const prevUsr = new Array(10).fill(null)
    const result = prevUsr.map(usr => {
        return listItem()
    })
    return result.join('')
}

document.querySelector('#app').innerHTML = html`
<main>
    <nav class="pd">
        <div>
            <h1>Dashboard</h1>
            <p>${currentDate}</p>
        </div>
        <div>
            ${avatar()}
        </div>
    </nav>
    <div id="qrScan"></div>
    <div id="qrSec" class="start">
        ${iconButton('send', '↑', 'secondary')}
        ${iconButton('receive', '↓', 'primary')}
    </div>
    <div class="container">
        <div class="connect pd" >
            <h2>Send again</h2>
            <div>
                ${populateHistory()}
            </div>
        </div>
        <div class="history pd" >
            <h2>Last Activities</h2>
            <div>
                ${populateActivities()}
            </div>
        </div>
    </div>
</main>
`


// this need to be improved later
sendBtn.onclick = () => {
    setOffer(true)
    generateQR()
}

receiveBtn.onclick = scanQR

