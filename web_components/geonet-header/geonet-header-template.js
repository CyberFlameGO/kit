export default {
    render(props) {
        return `${this.html(props)}`;
    },

    html(p) {
        const earthquake = (p.earthquake === "true") ? true : false;
        const landslide = (p.landslide === "true") ? true : false;
        const tsunami = (p.tsunami === "true") ? true : false;
        const volcano = (p.volcano === "true") ? true : false;
        const datadiscovery = (p.datadiscovery === "true") ? true : false;
        const datatypes = (p.datatypes === "true") ? true : false;
        const dataaccess = (p.dataaccess === "true") ? true : false;

        return /*html*/`
        <nav class="geonet-header navbar navbar-expand-lg navbar-light flex-column bg-primary">
            <div class="container-fluid p-3">
                <a class="text-white" href="${p.origin}/">
                <span>GeoNet</span>
                <span>
                    <small class="d-none d-md-inline text-white">
                    &nbsp;Geological hazard information for New Zealand
                    </small>
                </span>
                </a>
                <button
                    class="navbar-toggler navbar-toggler-right"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="d-none d-lg-block">
                    <a href="${p.origiin}/news" class="text-white">News</a>
                    <a href="http://www.eqc.govt.nz/" class="text-white ms-4">Toka Tū Ake EQC</a>
                    <img src="../icons/external.svg" class="pb-1">
                    <a href="http://www.gns.cri.nz/" class="text-white ms-4">GNS Science</a>
                    <img src="../icons/external.svg" class="pb-1">
                    <img src="../icons/search.svg" class="pb-1 ms-4">
                </div>
            </div>
            <div class="container-fluid d-none d-lg-block">
                <hr class="text-white w-100">
            </div>
            <div class="container-fluid">
                <div class="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="${p.origin}/" title="Home">
                                <img src="../icons/home.svg" class="pb-1">
                                <span class="ms-1 d-lg-none">Home</span>
                            </a>
                        </li>
                        <li id="Earthquake" class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle${earthquake ? " active-menu" : ""}"
                                data-bs-toggle="dropdown"
                                data-target="#"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                                title="Earthquake"
                            >
                                Earthquake
                            </a>
                            <div class="dropdown-menu">
                                <a
                                class="dropdown-item"
                                href="${p.origin}/earthquake/drums"
                                >
                                Drums
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/earthquake/weak"
                                >
                                Earthquakes
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/earthquake/forecast"
                                >
                                Forecasts
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/earthquake/story"
                                >
                                Historical Events
                                </a>
                                <a
                                class="dropdown-item"
                                href="https://quakesearch.geonet.org.nz"
                                >
                                Search
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/earthquake/sse/hikurangi"
                                >
                                Slow Slip
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/earthquake/statistics"
                                >
                                Statistics
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/strong"
                                >
                                Strong Motion
                                </a>
                                <div class="dropdown-divider"></div>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/earthquake/faq"
                                >
                                FAQ
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/earthquake/gallery"
                                >
                                Gallery
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/earthquake/glossary"
                                >
                                Glossary
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/earthquake/how"
                                >
                                How
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/earthquake/intensity"
                                >
                                Intensity
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/earthquake/videos"
                                >
                                Videos
                                </a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle${landslide ? " active-menu" : ""}"
                                data-bs-toggle="dropdown"
                                data-target="#"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                                title="Landslide"
                            >
                                Landslide
                            </a>
                            <div class="dropdown-menu">
                                <a
                                class="dropdown-item"
                                href="${p.origin}/landslide/dam"
                                >
                                Dams
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/landslide/projects"
                                >
                                Projects
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/landslide/reports"
                                >
                                Reports
                                </a>
                                <div class="dropdown-divider"></div>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/landslide/faq"
                                >
                                FAQ
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/landslide/glossary"
                                >
                                Glossary
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/landslide/how"
                                >
                                How
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/landslide/videos"
                                >
                                Videos
                                </a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle${tsunami ? " active-menu" : ""}"
                                data-bs-toggle="dropdown"
                                data-target="#"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                                title="Tsunami"
                            >
                                Tsunami
                            </a>
                            <div class="dropdown-menu">
                                <a
                                    class="dropdown-item"
                                    href="${p.origin}/tsunami"
                                >
                                Gauges
                                </a>
                                <a
                                    class="dropdown-item"
                                    href="${p.origin}/tsunami/dart"
                                >
                                DART Network
                                </a>
                                <a
                                    class="dropdown-item"
                                    href="${p.origin}/tsunami/story"
                                >
                                Historical Events
                                </a>
                                <div class="dropdown-divider"></div>
                                <a
                                    class="dropdown-item"
                                    href="${p.origin}/tsunami/faq"
                                >
                                FAQ
                                </a>
                                <a
                                    class="dropdown-item"
                                    href="${p.origin}/tsunami/glossary"
                                >
                                Glossary
                                </a>
                                <a
                                    class="dropdown-item"
                                    href="${p.origin}/tsunami/how"
                                >
                                How
                                </a>
                                <a
                                    class="dropdown-item"
                                    href="${p.origin}/tsunami/videos"
                                >
                                Videos
                                </a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle${volcano ? " active-menu" : ""}"
                                data-bs-toggle="dropdown"
                                data-target="#"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                                title="Volcano"
                            >
                                Volcano
                            </a>
                            <div class="dropdown-menu">
                                <a
                                class="dropdown-item"
                                href="${p.origin}/volcano/vab"
                                >
                                Alert Bulletins
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/volcano"
                                >
                                Alert Levels
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/volcano/acc"
                                >
                                Aviation Colour Codes
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/volcano/cameras"
                                >
                                Cameras
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/volcano/drums"
                                >
                                Drums
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/volcano/rsamssam"
                                >
                                RSAM & SSAM
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/volcano/ruapehu"
                                >
                                Volcanoes
                                </a>
                                <div class="dropdown-divider"></div>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/volcano/faq"
                                >
                                FAQ
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/volcano/gallery"
                                >
                                Gallery
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/volcano/glossary"
                                >
                                Glossary
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/volcano/how"
                                >
                                How
                                </a>
                                <a
                                class="dropdown-item"
                                href="${p.origin}/volcano/videos"
                                >
                                Videos
                                </a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle${datadiscovery ? " active-menu" : ""}"
                                data-bs-toggle="dropdown"
                                data-target="#"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                                title="Data Discovery"
                            >
                                Data Discovery
                            </a>
                            <div class="dropdown-menu">
                                <a
                                class="dropdown-item"
                                href="${p.origin}/data/network/sensor/search"
                                >
                                Sensor&nbsp;Map
                                </a>
                                <a
                                class="dropdown-item"
                                href="https://quakesearch.geonet.org.nz"
                                >
                                Quake Search
                                </a>
                                <a
                                class="dropdown-item d-none d-md-block"
                                href="https://strongmotion.geonet.org.nz"
                                >
                                Strong&nbsp;Motion
                                </a>
                                <a
                                class="dropdown-item"
                                href="https://tilde.geonet.org.nz/ui/data-exploration"
                                >
                                Tilde&nbsp;Data&nbsp;Discovery
                                </a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle${datatypes ? " active-menu" : ""}"
                                data-bs-toggle="dropdown"
                                data-target="#"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                                title="Data Types"
                            >
                                Data Types
                            </a>
                            <div class="dropdown-menu">
                                <a
                                    class="dropdown-item"
                                    href="${p.origin}/data/gnss/map"
                                >
                                Geodetic
                                </a>
                                <a
                                    class="dropdown-item"
                                    href="${p.origin}/data/types/camera"
                                >
                                Cameras
                                </a>
                                <a
                                    class="dropdown-item"
                                    href="${p.origin}/data/types/eq_catalogue"
                                >
                                Earthquake&nbsp;Catalogue
                                </a>
                                <a
                                    class="dropdown-item"
                                    href="${p.origin}/data/types/felt"
                                >
                                Felt&nbsp;Reports
                                </a>
                                <a
                                    class="dropdown-item"
                                    href="${p.origin}/data/types/seismic_waveforms"
                                >
                                Seismic&nbsp;Waveforms
                                </a>
                                <a
                                    class="dropdown-item"
                                    href="${p.origin}/data/types/strong_motion"
                                >
                                Strong&nbsp;Motion&nbsp;Data&nbsp;Products
                                </a>
                                <a
                                    class="dropdown-item"
                                    href="${p.origin}/data/types/structural_arrays"
                                >
                                Structural&nbsp;Arrays
                                </a>
                                <a
                                    class="dropdown-item"
                                    href="${p.origin}/data/types/volcano_monitoring"
                                >
                                Volcano&nbsp;Monitoring
                                </a>
                                <a class="dropdown-item" href="">Environmental Data</a>
                                <a class="dropdown-item" href="">Shaking Layers Data</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle${dataaccess ? " active-menu" : ""}"
                                data-bs-toggle="dropdown"
                                data-target="#"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                                title="Data Access"
                            >
                                Data Access
                            </a>
                            <div class="dropdown-menu">
                                <a
                                    class="dropdown-item"
                                    href="${p.origin}/data/tools/FITS"
                                >
                                FITS
                                </a>
                                <a
                                    class="dropdown-item"
                                    href="${p.origin}/data/tools/FDSN"
                                >
                                FDSN
                                </a>
                                <a
                                    class="dropdown-item"
                                    href="https://wfs.geonet.org.nz"
                                >
                                WFS
                                </a>
                                <a class="dropdown-item" href="//api.geonet.org.nz">
                                    GeoNet API
                                </a>
                                <a class="dropdown-item" href="//tilde.geonet.org.nz">
                                    Tilde API
                                </a>
                                <a class="dropdown-item" href="shakinglayer.geonet.org.nz">
                                    Shaking Layers API
                                </a>
                                <a class="dropdown-item" href="">
                                    Big Data
                                </a>
                                <a
                                    class="dropdown-item"
                                    href=""
                                >
                                Data Support
                                </a>
                                <a
                                    class="dropdown-item"
                                    href="${p.origin}/data/tools/Tutorials"
                                >
                                Data Tutorials
                                </a>
                            </div>
                        </li>
                        <li class="nav-item d-lg-none bg-secondary p-3">
                            <input type="text" placeholder="Search" aria-label="Search" class="input-small">
                            <img src="../icons/search.svg" class="p-1 bg-info">
                        </li>
                        <li class="nav-item d-lg-none bg-secondary p-3">
                            <a href="http://www.eqc.govt.nz/" class="text-white ms-4">Toka Tū Ake EQC</a>
                            <img src="../icons/external.svg" class="pb-1">
                            <div class="vr text-white"></div>
                            <a href="http://www.gns.cri.nz/" class="text-white ms-4">GNS Science</a>
                            <img src="../icons/external.svg" class="pb-1">
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `}
 }

