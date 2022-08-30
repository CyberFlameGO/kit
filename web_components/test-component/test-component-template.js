export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    html() { return /*html*/ `
        <p class="test">Test component<p>`;
    },
    css() { return /*html*/ `
        <style>
            .test {
                background-color: red;
            }
        </style>`; /* <------- css as style tags requires unsafe-inline for style-src */
    }
 }

