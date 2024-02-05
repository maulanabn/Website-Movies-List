class FooterBar extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
      this.render();
    }
  
    render() {
      this._shadowRoot.innerHTML = `
      <style>
      footer {
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: white;
        color: black;
        text-align: center;
      }
    </style>
  
    <footer id="footerid">
      <p> Dicoding Indonesia - Baharuddin Nur Maulana</p>
    </footer>
      `;
    }
  }
  
  customElements.define('footer-bar', FooterBar);