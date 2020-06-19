import { LitElement, html } from "lit-element";

export class FeedbackElement extends LitElement {
  static get properties() {
    return {
      msg: { type: String },
      opened: { type: Boolean },
    };
  }

  render() {
    return html`
      <style>
        div {
          position: fixed;
          bottom: 0;
          left: 0;
          height: 0;
          overflow: hidden;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1px;
          font-family: Arial, Helvetica, sans-serif;
          background-color: purple;
          color: white;
          transition: all 0.7s ease-in;
        }
        .opened {
          height: 100px;
          font-size: 2em;
        }
      </style>

      <div class="${this.opened ? "opened" : ""}">${this.msg}</div>
    `;
  }
}
customElements.define("feedback-element", FeedbackElement);
