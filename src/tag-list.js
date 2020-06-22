import { LitElement, html, css } from "lit-element";

export class Taglist extends LitElement {
  static get properties() {
    return {
      tags: { type: Array },
    };
  }

  static get styles() {
    return css`
      p {
        display: inline-block;
        color: #333;
        background-color: orange;
        border-radius: 5px;
        margin-right: 12px;
        padding: 5px 20px;
      }
    `;
  }

  constructor() {
    super();
    this.tags = [];
  }

  render() {
    return html`
      ${this.tags.map(function (item) {
        return html` <p>${item}</p>`;
      })}
    `;
  }
}
customElements.define("tag-list", Taglist);
