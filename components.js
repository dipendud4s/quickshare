import avatarDefault from './public/60111.jpg'
import { html } from './utils'

export const avatar = (imageUrl) => {
  return html`
      <div class="avatar" style="background-image:url(${imageUrl || avatarDefault})"></div>
  `
}
export const iconButton = (text, icon, color) => {


  return html`
      <div id="${text}Btn" class="icon-button ${color}">
          <div>${icon}</div>
          <button>${text}</button>
      </div>
  `
}
export const listItem = (imageUrl) => {
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