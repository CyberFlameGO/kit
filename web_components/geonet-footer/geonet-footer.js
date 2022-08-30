import Template from './geonet-footer-template.js';

export default class GeoNetFooter extends HTMLElement {

    connectedCallback() {
        // this._internalProperty = "whatever";
        // this.querySelector vs document.querySelector
        // this.querySelector('button.back').addEventListener('click', event => this.onBackButtonClick(event));
        // if (this.hasAttribute('count')) => set else set default

        // Attributes should be all lowercase

        // Check attribute exists before setting (Not a problem with shadowDOM though)

        // connectedCallback() runs once at startup?
        // attributeChangedCallback(name, oldVal, newVal)


        // WORKS WITH CSP, NOT SURE ABOUT BROWSER COMPATIBILITY
        // const sheet = new CSSStyleSheet();
        // sheet.replaceSync(Template.css({}));
        // document.adoptedStyleSheets = [sheet];


        this.innerHTML = Template.render({});

    }

}
if (!customElements.get('geonet-footer')) {
    customElements.define('geonet-footer', GeoNetFooter);
}