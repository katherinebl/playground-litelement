import { LitElement, html } from "lit-element";

export class HolaMundo extends LitElement {
  static get properties() {
    return {
      quien: { type: String },
    };
  }

  render() {
    return html` <p>Hola <b>${this.quien}!</b> :)</p> `;
  }
}
customElements.define("hola-mundo", HolaMundo);
