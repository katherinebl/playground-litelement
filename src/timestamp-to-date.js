import { LitElement, html } from "lit-element";

export class TimestampToDate extends LitElement {
  static get properties() {
    return {
      timestamp: { type: String },
    };
  }

  render() {
    return html` <p>${this.getDate(this.timestamp)}</p> `;
  }

  getDate(timestamp) {
    let date = new Date(parseInt(timestamp));

    return html`<h5>
      ${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}
    </h5>`;
  }
}
customElements.define("timestamp-to-date", TimestampToDate);
