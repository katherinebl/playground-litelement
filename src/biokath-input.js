import { LitElement, html, css } from "lit-element";

export class BiokathInput extends LitElement {
  static get properties() {
    return {
      placeholder: { type: String },
      disabled: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      input {
        border: 1px solid orange;
        border-radius: 10px;
        padding: 5px 20px;
      }
      input:disabled {
        background-color: #f2f2f2;
        border: 1px solid grey;
      }
    `;
  }

  //Definir aquí el valor inicial de las props para que no sean undefined
  constructor() {
    super();
    (this.disabled = false), (this.placeholder = "");
  }

  render() {
    return html`
      <input
        type="text"
        placeholder=${this.placeholder}
        ?disabled=${this.disabled}
      />
    `;
  }
}
customElements.define("biokath-input", BiokathInput);
