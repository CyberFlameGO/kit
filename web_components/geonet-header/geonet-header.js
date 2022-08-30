import Template from './geonet-header-template.js';

export default class GeoNetHeader extends HTMLElement {

    connectedCallback() {
        // if (this.react === 'true') {
        //     this.innerHTML = Template.htmlReact({
        //         origin: this.origin,
        //         home: this.home,
        //         earthquake: this.earthquake,
        //         landslide: this.landslide,
        //         tsunami: this.tsunami,
        //         volcano: this.volcano,
        //         data: this.data,
        //     });
        // } else {
        //     this.innerHTML = Template.html({
        //         origin: this.origin,
        //     });
        // }

        this.innerHTML = Template.html({
            origin: this.origin,
            home: this.home,
            earthquake: this.earthquake,
            landslide: this.landslide,
            tsunami: this.tsunami,
            volcano: this.volcano,
            data: this.data,
        });
    }

    static get observedAttributes() {
        return ['origin','react','earthquake','landslide','tsunami','volcano','data'];
    }
    // origin getter and setters.
    get origin() {
        return this.hasAttribute('origin') ? this.getAttribute('origin') : '';
    }
    set origin(val) {
        this.setAttribute('origin', val);
    }
    // react getter and setters.
    get react() {
        return this.hasAttribute('react') ? this.getAttribute('react') : 'false';
    }
    set react(val) {
        this.setAttribute('react', val);
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
    // data getter and setters.
    get data() {
        return this.hasAttribute('data') ? this.getAttribute('data') : 'false';
    }
    set data(val) {
        this.setAttribute('data', val);
    }
}

if (!customElements.get('geonet-header')) {
    customElements.define('geonet-header', GeoNetHeader);
}