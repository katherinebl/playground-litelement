import { LitElement, html } from "lit-element";

export class MiContador extends LitElement {
  static get properties() {
    return {
      counter: { type: Number },
    };
  }

  // Inicializar la prop
  constructor() {
    super();
    this.counter = 0;
  }

  render() {
    return html`
      <style>
        button {
          border: solid 1px purple;
          width: 100px;
          border-radius: 5px;
        }
      </style>

      <div>
        <p>Llevas ${this.counter} clicks! :)</p>

        <button @click="${this.incrementar}">+1</button>
        <button @click="${this.decrementar}">-1</button>
      </div>
    `;
  }

  //Métodos
  incrementar() {
    this.counter++;
  }

  decrementar() {
    this.counter--;
  }
}
customElements.define("mi-contador", MiContador);
