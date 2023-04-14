import './style.css'
import avatarDefault from './public/60111.jpg'
import { html } from './utils'

const currentDate = (new Date()).toDateString();


const avatar = (imageUrl) => {
    return html`
        <div class="avatar" style="background-image:url(${imageUrl || avatarDefault})"></div>
    `
}


const iconButton = (text, icon, color) => {
    return html`
        <div class="icon-button ${color}">
            <div>${icon}</div>
            <button>${text}</button>
        </div>
    `
}

const listItem = (imageUrl) => {
    return html`
        <div class="listItem">
            <div>↑</div>
            <div>
                <h3>Send to SomeOne</h3>
                <p>Archive > File No.</p>
            </div>
            <div>..</div>
        </div>
    `
}

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
    <div class="start">
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

