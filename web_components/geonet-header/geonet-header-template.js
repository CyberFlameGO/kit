export default {
    render(props) {
        return `${this.html(props)}`;
    },

    html(p) {
        const earthquake = (p.earthquake === "true") ? true : false;
        const landslide = (p.landslide === "true") ? true : false;
        const tsunami = (p.tsunami === "true") ? true : false;
        const volcano = (p.volcano === "true") ? true : false;
        const data = (p.data === "true") ? true : false;

        return /*html*/`
        <link href="./geonet-header.css" rel="stylesheet"/>
        <nav class="geonet-header navbar navbar-expand-lg navbar-light flex-column bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="${p.origin}/">
            <span>GeoNet</span>
            <span>
                <small class="d-none d-md-inline text-white">
                &nbsp;Geological hazard information for New Zealand
                </small>
            </span>
            </a>
            <button
            class="navbar-toggler navbar-toggler-right "
            type="button"
            data-bs-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="d-none d-lg-block text-white text-end">
            <a
                id="eqc-nav-logo"
                class="text-white"
                href="http://www.eqc.govt.nz/"
            >
                <img src="../icons/eqc_logo_50.png" height="50px" alt="EQC logo" />
            </a>
            <span class="px-2"></span>
            <a class="text-white" href="http://www.gns.cri.nz/">
                <img src="../icons/gns_logo_50.png" height="50px" alt="GNS logo" />
            </a>
            </div>
        </div>
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto">
                <li class="nav-item d-none d-md-inline">
                    <a class="nav-link" href="${p.origin}/" title="Home">
                        Home
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
                <div class="dropdown-menu second-to-last-menu-item">
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
                <div class="dropdown-menu second-to-last-menu-item">
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
                <div class="dropdown-menu second-to-last-menu-item">
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
                    class="nav-link dropdown-toggle${data ? " active-menu" : ""}"
                    data-bs-toggle="dropdown"
                    data-target="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    title="Data"
                >
                    Data
                </a>
                <div class="dropdown-menu second-to-last-menu-item">
                    <a
                    class="dropdown-item"
                    href="${p.origin}/data/network/sensor/search"
                    >
                    Sensor&nbsp;Map&nbsp;Search
                    </a>
                    <h6 class="dropdown-header">&nbsp;&nbsp;Data Types</h6>
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
                    href="${p.origin}/data/gnss/map"
                    >
                    Geodetic
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
                    class="dropdown-item d-none d-md-block"
                    href="https://strongmotion.geonet.org.nz"
                    >
                    Strong&nbsp;Motion&nbsp;Tool
                    </a>
                    <a
                    class="dropdown-item"
                    href="${p.origin}/data/types/structural_arrays"
                    >
                    Structural&nbsp;Arrays
                    </a>
                    <a
                    class="dropdown-item"
                    href="${p.origin}/data/types/tidal_gauges"
                    >
                    Tide&nbsp;Gauges
                    </a>
                    <a
                    class="dropdown-item"
                    href="${p.origin}/data/types/volcano_monitoring"
                    >
                    Volcano&nbsp;Monitoring
                    </a>

                    <h6 class="dropdown-header">&nbsp;&nbsp;Data Services</h6>
                    <a
                    class="dropdown-item"
                    href="${p.origin}/data/tools/FDSN"
                    >
                    FDSN
                    </a>
                    <a
                    class="dropdown-item"
                    href="${p.origin}/data/tools/FITS"
                    >
                    FITS
                    </a>
                    <a class="dropdown-item" href="//api.geonet.org.nz">
                    GeoNet API
                    </a>
                    <a
                    class="dropdown-item"
                    href="https://quakesearch.geonet.org.nz"
                    >
                    Quake Search
                    </a>
                    <a
                    class="dropdown-item"
                    href="${p.origin}/data/tools/Tutorials"
                    >
                    Data Tutorials
                    </a>
                </div>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="${p.origin}/news" title="News">
                    News
                </a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    `}
 }

