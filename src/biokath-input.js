import { LitElement, html, css } from "lit-element";

export class BiokathInput extends LitElement {
  static get properties() {
    return {
      placeholder: { type: String },
      disabled: { type: Boolean },
      id: { type: String },
      value: { type: String },
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
    (this.disabled = false),
      (this.placeholder = ""),
      (this.value = "valor inicial");
  }

  render() {
    return html`
      <input
        type="text"
        id="textField"
        placeholder=${this.placeholder}
        ?disabled=${this.disabled}
        @keypress=${this.lookForEnter}
        value=${this.value}
      />
    `;
  }

  //Función handler
  lookForEnter(e) {
    let keycode = e.keycode ? e.keycode : e.which; //para que funcione en varios navegadores
    if (keycode === 13) {
      console.log("has pulsado enter!");
    }
  }
}
customElements.define("biokath-input", BiokathInput);
