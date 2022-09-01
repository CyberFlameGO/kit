export default {
    render(props) {
        return `${this.html(props)}`;
    },

    // <style>
    // @import url('../bootstrap/bootstrap.v5.min.css');
    // </style>

    html(p) {

        const links = createLinks(p.links,p.linkURLs,p.isExternal);


        return /*html*/ `
        <nav class="navbar navbar-expand-lg navbar-light flex-column bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand pb-0" href="${p.titleURL}">GeoNet - ${p.title}</a>
                <button class="navbar-toggler navbar-toggler-right " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="container-fluid">
                <div class="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto bottom-0">
                        ${links}
                    </ul>
                </div>
            </div>
        </nav>
    `}
 }

 /**
  * Creates list/hyperlink tags for the header's links. The first link is considered
  * the "home" link, and will have a home icon to the left of it.
  * An external link will have an external link icon to the right of it.
  * @param {string[]} links The text to display each link.
  * @param {string[]} linkURLs The urls for each link.
  * @param {string[]} isExternal Whether each link is external or not ("true" or "false")
  * @returns {string} <li> tags for each link in a concatenated string.
  */
 function createLinks(links, linkURLs, isExternal) {
    if (links.length !== linkURLs.length || links.length !== isExternal.length) {
        return "";
    }
    let linkElements = "";
    for (let i = 0; i < links.length; i++) {

        const leftImg = (i === 0) ? /*html*/ `<img src="../icons/home.svg" class="pe-2 pb-1">` : "";
        const rightImg = (isExternal[i] === "true") ? /*html*/ `<img src="../icons/external.svg" class="ps-2 pb-1">` : "";
        const rel = (isExternal[i] === "true") ? "external" : "noreferrer";

        linkElements += /*html*/ `
            <li class="nav-item">
                <a
                    class="nav-link"
                    href="${linkURLs[i]}"
                    rel="${rel}"
                    title="${links[i]}"
                >
                    ${leftImg}${links[i]}${rightImg}
                </a>
            </li>`
    }
    return linkElements;
 }

