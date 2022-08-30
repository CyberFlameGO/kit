import Template from './test-component-template.js';

export default class FUUU extends HTMLElement {

    // Runs when FUUU instantiated (can't add children or any visual stuff (except if in the ShadowDOM!!!))
    // Good for:
    // - Network requests
    // - Property constructors ( deprecated now?)
    constructor()  {
        super();
    }

    connectedCallback() {
        this.innerHTML = Template.render();
    }


    attributeChangedCallback() {

        // const count = this.count();
        // let message = "F";
        // for (let i = 0; i < count; i++) {
        //     message += "U";
        // }
        // this.innerHTML = `<p>${message}</p><style>p {background-color: red;}</style>`;

    }

    disconnectedCallback() {
        count = null;
    }

    // So that attributeChangedCallback runs when count changes.
    static get observedAttributes() {
        return ['count'];
    }

    // Best practice getter and setter pattern to keep attribute and property values in sync.
    get count() {
        return this.getAttribute('count');          1
    }
    set count(val) {
        this.setAttribute('count', val);            2
    }

}
if (!customElements.get('fuuu-')) {
    customElements.define('fuuu-', FUUU);
}