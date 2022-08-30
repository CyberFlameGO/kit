import Template from './geonet-header-basic-template.js';

export default class GeoNetHeaderBasic extends HTMLElement {

    // constructor() {
    //     super();
    //     const shadow = this.attachShadow({ mode: "open" });
    //     this.shadowRoot.innerHTML = Template.render({
    //         title: this.title,
    //         titleURL: this.titleURL,
    //     })
    // }

    connectedCallback() {
        this.innerHTML = Template.render({
            title: this.title,
            titleURL: this.titleURL,
            links: this.links.split(","),
            linkURLs: this.linkURLs.split(","),
            isExternal: this.isExternal.split(","),
        })
    }

    static get observedAttributes() {
        return ['title','titleURL','links','linkURLs','isExternal'];
    }
    // title getter and setters.
    get title() {
        return this.hasAttribute('title') ? this.getAttribute('title') : '';
    }
    set title(val) {
        this.setAttribute('title', val);
    }
    // titleURL getter and setters.
    get titleURL() {
        return this.hasAttribute('titleURL') ? this.getAttribute('titleURL') : '';
    }
    set titleURL(val) {
        this.setAttribute('titleURL', val);
    }
    // links getter and setters.
    get links() {
        return this.hasAttribute('links') ? this.getAttribute('links') : '';
    }
    set links(val) {
        this.setAttribute('links', val);
    }
    // linkURLs getter and setters.
    get linkURLs() {
        return this.hasAttribute('linkURLs') ? this.getAttribute('linkURLs') : '';
    }
    set linkURLs(val) {
        this.setAttribute('linkURLs', val);
    }
    // isExternal getter and setters.
    get isExternal() {
        return this.hasAttribute('isExternal') ? this.getAttribute('isExternal') : '';
    }
    set isExternal(val) {
        this.setAttribute('isExternal', val);
    }
}

if (!customElements.get('geonet-header-basic')) {
    customElements.define('geonet-header-basic', GeoNetHeaderBasic);
}