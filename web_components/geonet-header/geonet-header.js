import Template from './geonet-header-template.js';

export default class GeoNetHeader extends HTMLElement {

    connectedCallback() {
        this.innerHTML = Template.html({
            origin: this.origin,
            earthquake: this.earthquake,
            landslide: this.landslide,
            tsunami: this.tsunami,
            volcano: this.volcano,
            datadiscovery: this.datadiscovery,
            datatypes: this.datatypes,
            dataaccess: this.dataaccess,
        });
    }

    static get observedAttributes() {
        return ['origin','earthquake','landslide','tsunami','volcano','datadiscovery','datatypes','dataaccess'];
    }
    // origin getter and setters.
    get origin() {
        return this.hasAttribute('origin') ? this.getAttribute('origin') : '';
    }
    set origin(val) {
        this.setAttribute('origin', val);
    }
    // earthquake getter and setters.
    get earthquake() {
        return this.hasAttribute('earthquake') ? this.getAttribute('earthquake') : 'false';
    }
    set earthquake(val) {
        this.setAttribute('earthquake', val);
    }
    // landslide getter and setters.
    get landslide() {
        return this.hasAttribute('landslide') ? this.getAttribute('landslide') : 'false';
    }
    set landslide(val) {
        this.setAttribute('landslide', val);
    }
    // tsunami getter and setters.
    get tsunami() {
        return this.hasAttribute('tsunami') ? this.getAttribute('tsunami') : 'false';
    }
    set tsunami(val) {
        this.setAttribute('tsunami', val);
    }
    // volcano getter and setters.
    get volcano() {
        return this.hasAttribute('volcano') ? this.getAttribute('volcano') : 'false';
    }
    set volcano(val) {
        this.setAttribute('volcano', val);
    }
    // datadiscovery getter and setters.
    get datadiscovery() {
        return this.hasAttribute('datadiscovery') ? this.getAttribute('datadiscovery') : 'false';
    }
    set datadiscovery(val) {
        this.setAttribute('datadiscovery', val);
    }
    // datatypes getter and setters.
    get datatypes() {
        return this.hasAttribute('datatypes') ? this.getAttribute('datatypes') : 'false';
    }
    set datatypes(val) {
        this.setAttribute('datatypes', val);
    }
    // dataaccess getter and setters.
    get dataaccess() {
        return this.hasAttribute('dataaccess') ? this.getAttribute('dataaccess') : 'false';
    }
    set dataaccess(val) {
        this.setAttribute('dataaccess', val);
    }
}

if (!customElements.get('geonet-header')) {
    customElements.define('geonet-header', GeoNetHeader);
}