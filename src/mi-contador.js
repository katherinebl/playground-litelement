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

        <feedback-element id="feedback"></feedback-element>
      </div>
    `;
  }

  //Métodos

  // Getter
  get feedback() {
    return this.shadowRoot.getElementById("feedback");
  }

  incrementar() {
    this.counter++;

    if (this.counter == 3) {
      this.feedback.open("You've reached the top!");
    }
  }

  decrementar() {
    this.counter--;

    if (this.counter == 0) {
      this.feedback.open("You're out of clicks!");
    }
  }
}
customElements.define("mi-contador", MiContador);
