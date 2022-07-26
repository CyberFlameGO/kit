package weft

import (
	"bytes"
	"html/template"
	"log"
)

/*
 * functions to get GeoNet header/footer for specified paramters: originUrl, activeMenu, enableSearch
 * Requirement: logo images and according css need to be in calling project.
 */

const header = `
{{define "header"}}
<nav class="navbar navbar-expand-lg navbar-light flex-column bg-primary">
    <div class="container-fluid">
        <a class="navbar-brand" href="{{.Origin}}/">
            <span>GeoNet</span>
            <span><small class="d-none d-md-inline text-white">&nbsp;Geological hazard information for New Zealand</small></span>
        </a>
        <button class="navbar-toggler navbar-toggler-right " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="d-none d-lg-flex text-white text-right">
            <a class="text-white" href="http://www.eqc.govt.nz/">
                <span class="position-relative" id="eqc"></span>
            </a>
            <span class="px-2"></span>
            <a class="text-white" href="http://www.gns.cri.nz/">
                <span class="position-relative" id="gns"></span>
            </a>
        </div>
    </div>
    <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto">
                <li class="nav-item d-none d-md-inline">
                    <a class="nav-link {{if .Active.Home}}active-menu{{end}}" href="{{.Origin}}/">Home</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle {{if .Active.Earthquake}}active-menu{{end}}"
                       data-bs-toggle="dropdown" data-target="#" href="#" role="button" aria-haspopup="true"
                       aria-expanded="false">Earthquake</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="{{.Origin}}/earthquake/drums">Drums</a>
                        <a class="dropdown-item" href="{{.Origin}}/earthquake/weak">Earthquakes</a>
                        <a class="dropdown-item" href="{{.Origin}}/earthquake/forecast">Forecasts</a>
                        <a class="dropdown-item" href="{{.Origin}}/earthquake/story">Historical Events</a>
                        <a class="dropdown-item" href="https://quakesearch.geonet.org.nz">Search</a>
                        <a class="dropdown-item" href="{{.Origin}}/earthquake/sse/hikurangi">Slow Slip</a>
                        <a class="dropdown-item" href="{{.Origin}}/earthquake/swarms">Swarms</a>
                        <a class="dropdown-item" href="{{.Origin}}/earthquake/statistics">Statistics</a>
                        <a class="dropdown-item" href="{{.Origin}}/strong">Strong Motion</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="{{.Origin}}/earthquake/faq">FAQ</a>
                        <a class="dropdown-item" href="{{.Origin}}/earthquake/gallery">Gallery</a>
                        <a class="dropdown-item" href="{{.Origin}}/earthquake/glossary">Glossary</a>
                        <a class="dropdown-item" href="{{.Origin}}/earthquake/how">How</a>
                        <a class="dropdown-item" href="{{.Origin}}/earthquake/intensity">Intensity</a>
                        <a class="dropdown-item" href="{{.Origin}}/earthquake/videos">Videos</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle {{if .Active.Landslide}}active-menu{{end}}"
                       data-bs-toggle="dropdown" data-target="#" href="#" role="button" aria-haspopup="true" aria-expanded="false">Landslide</a>
                    <div class="dropdown-menu second-to-last-menu-item">
                        <a class="dropdown-item" href="{{.Origin}}/landslide/dam">Dams</a>
                        <a class="dropdown-item" href="{{.Origin}}/landslide/projects">Projects</a>
                        <a class="dropdown-item" href="{{.Origin}}/landslide/reports">Reports</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="{{.Origin}}/landslide/faq">FAQ</a>
                        <a class="dropdown-item" href="{{.Origin}}/landslide/glossary">Glossary</a>
                        <a class="dropdown-item" href="{{.Origin}}/landslide/how">How</a>
                        <a class="dropdown-item" href="{{.Origin}}/landslide/videos">Videos</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle {{if .Active.Tsunami}}active-menu{{end}}"
                       data-bs-toggle="dropdown" data-target="#" href="#" role="button" aria-haspopup="true" aria-expanded="false">Tsunami</a>
                    <div class="dropdown-menu second-to-last-menu-item">
                        <a class="dropdown-item" href="{{.Origin}}/tsunami">Gauges</a>
                        <a class="dropdown-item" href="{{.Origin}}/tsunami/dart">DART Network</a>
                        <a class="dropdown-item" href="{{.Origin}}/tsunami/story">Historical Events</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="{{.Origin}}/tsunami/faq">FAQ</a>
                        <a class="dropdown-item" href="{{.Origin}}/tsunami/glossary">Glossary</a>
                        <a class="dropdown-item" href="{{.Origin}}/tsunami/how">How</a>
                        <a class="dropdown-item" href="{{.Origin}}/tsunami/videos">Videos</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle {{if .Active.Volcano}}active-menu{{end}}"
                       data-bs-toggle="dropdown" data-target="#" href="#" role="button" aria-haspopup="true" aria-expanded="false">Volcano</a>
                    <div class="dropdown-menu second-to-last-menu-item">
                        <a class="dropdown-item" href="{{.Origin}}/volcano/vab">Activity Bulletins</a>
                        <a class="dropdown-item" href="{{.Origin}}/volcano">Alert Levels</a>
                        <a class="dropdown-item" href="{{.Origin}}/volcano/acc">Aviation Colour Codes</a>
                        <a class="dropdown-item" href="{{.Origin}}/volcano/cameras">Cameras</a>
                        <a class="dropdown-item" href="{{.Origin}}/volcano/drums">Drums</a>
                        <a class="dropdown-item" href="{{.Origin}}/volcano/rsamssam">RSAM & SSAM</a>
                        <a class="dropdown-item" href="{{.Origin}}/volcano/ruapehu">Volcanoes</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="{{.Origin}}/volcano/faq">FAQ</a>
                        <a class="dropdown-item" href="{{.Origin}}/volcano/gallery">Gallery</a>
                        <a class="dropdown-item" href="{{.Origin}}/volcano/glossary">Glossary</a>
                        <a class="dropdown-item" href="{{.Origin}}/volcano/how">How</a>
                        <a class="dropdown-item" href="{{.Origin}}/volcano/videos">Videos</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle {{if .Active.Data}}active-menu{{end}}"
                       data-bs-toggle="dropdown" data-target="#" href="#" role="button" aria-haspopup="true" aria-expanded="false">Data</a>
                    <div class="dropdown-menu second-to-last-menu-item">
                        <a class="dropdown-item" href="{{.Origin}}/data/network/sensor/search">Sensor&nbsp;Map&nbsp;Search</a>
                        <h6 class="dropdown-header">&nbsp;&nbsp;Data Types</h6>
                        <a class="dropdown-item" href="{{.Origin}}/data/types/camera">Cameras</a>
                        <a class="dropdown-item" href="{{.Origin}}/data/types/eq_catalogue">Earthquake&nbsp;Catalogue</a>
                        <a class="dropdown-item" href="{{.Origin}}/data/types/felt">Felt&nbsp;Reports</a>
                        <a class="dropdown-item" href="{{.Origin}}/data/gnss/map">Geodetic</a>
                        <a class="dropdown-item" href="{{.Origin}}/data/types/seismic_waveforms">Seismic&nbsp;Waveforms</a>
                        <a class="dropdown-item" href="{{.Origin}}/data/types/strong_motion">Strong&nbsp;Motion&nbsp;Data&nbsp;Products</a>
                        <a class="dropdown-item d-none d-md-block" href="https://strongmotion.geonet.org.nz">Strong&nbsp;Motion&nbsp;Tool</a>
                        <a class="dropdown-item" href="{{.Origin}}/data/types/structural_arrays">Structural&nbsp;Arrays</a>
                        <a class="dropdown-item" href="{{.Origin}}/data/types/tidal_gauges">Tide&nbsp;Gauges</a>
                        <a class="dropdown-item" href="{{.Origin}}/data/types/volcano_monitoring">Volcano&nbsp;Monitoring</a>
                        <h6 class="dropdown-header">&nbsp;&nbsp;Data Services</h6>
                        <a class="dropdown-item" href="{{.Origin}}/data/tools/FDSN">FDSN</a>
                        <a class="dropdown-item" href="{{.Origin}}/data/tools/FITS">FITS</a>
                        <a class="dropdown-item" href="https://api.geonet.org.nz">GeoNet API</a>
                        <a class="dropdown-item" href="https://quakesearch.geonet.org.nz">Quake Search</a>
                        <a class="dropdown-item" href="{{.Origin}}/data/tools/Tutorials">Data Tutorials</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{if .Active.News}}active-menu{{end}}" href="{{.Origin}}/news">News</a>
                </li>
            </ul>
            <form id="search_form" class="navbar-form navbar-toggler-right" aria-label="search" role="search" method="POST" action="{{.Origin}}/search">
                {{if .Active.Search}}
                <div class="form-group input-group-sm pt-1">
                    <input type="text" class="form-control" placeholder="Search" id="search_query" name="q">
                    <input type="hidden" name="page" value="1">
                    <button type="submit" class="p-0 border border-0"><span class="fa fa-search"></span></button>
                </div>
                {{end}}
                <div class="d-lg-none mobile-menu-link-panel">
                    <span class="mobile-menu-link"><a href="http://www.eqc.govt.nz/" target="_blank">EQC</a></span>
                    <span class="mobile-menu-link"><a href="http://www.gns.cri.nz/" target="_blank">GNS Science</a></span>
                </div>
            </form>
        </div>
    </div>
</nav>
{{end}}
`

const footer = `
{{define "footer"}}
<div class="container">
    <div class="footer">
        <div class="row d-none d-md-flex">
            <div class="col"><a href="{{.Origin}}/ngmc">NGMC</a></div>
            <div class="col"><a href="{{.Origin}}/about">About</a></div>
            <div class="col"><a href="{{.Origin}}/contact">Contact</a></div>
            <div class="col"><a href="{{.Origin}}/policy">Data&nbsp;Policy</a></div>
            <div class="col"><a href="{{.Origin}}/disclaimer">Disclaimer</a></div>
            <div class="col"><a href="https://gns.cri.nz/Home/Contact-Us/Privacy-Policy" target="_blank">Privacy</a></div>
            <div class="col"><a href="{{.Origin}}/sponsors">Sponsors</a></div>
            <div class="col"><a href="{{.Origin}}/reviews">Strategic&nbsp;Reviews</a></div>
        </div>
        <div class="row d-md-none">
            <div class="col"><a href="{{.Origin}}/ngmc">NGMC</a></div>
            <div class="col-12"><a href="{{.Origin}}/about">About</a></div>
            <div class="col-12"><a href="{{.Origin}}/contact">Contact</a></div>
            <div class="col-12"><a href="{{.Origin}}/policy">Data Policy</a></div>
            <div class="col-12"><a href="{{.Origin}}/disclaimer">Disclaimer</a></div>
            <div class="col-12"><a href="https://gns.cri.nz/Home/Contact-Us/Privacy-Policy" target="_blank">Privacy</a></div>
            <div class="col-12"><a href="{{.Origin}}/sponsors">Sponsors</a></div>
            <div class="col-12"><a href="{{.Origin}}/reviews">Strategic Reviews</a></div>
            <div class="col-12"><a id="appLink" href="">Get&nbsp;our&nbsp;GeoNet&nbsp;App
                <i id="osIcon" aria-hidden="true"></i></a>
            </div>
        </div>
    </div>
    <div id="footer" class="footer">
        <div class="row">
            <div class="col-12 d-md-none text-center">
                <a target="_blank" href="{{.Origin}}/">
                    <span id="geonet"></span>
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3 d-none d-md-block">
                <a target="_blank" href="{{.Origin}}/">
                    <span id="geonet"></span>
                </a>
            </div>
            <div class="col-sm-12 col-md-6 footer-middle-col">
                <p>GeoNet is a collaboration between <a target="_blank" href="http://www.eqc.govt.nz">Toka Tū Ake EQC</a>
                    and <a target="_blank" href="http://www.gns.cri.nz/">GNS Science</a>.</p>
                <p>GeoNet content is copyright <a target="_blank" href="http://www.gns.cri.nz/">GNS Science</a> and is
                    licensed under a <a rel="license" target="_blank"
                                        href="http://creativecommons.org/licenses/by/3.0/nz/">Creative Commons
                        Attribution 3.0 New Zealand License</a></p>
            </div>
            <div class="col-md-3 d-none d-md-block social-icon">
                <a target="_blank" href="https://twitter.com/geonet">
                    <i class="fa fa-twitter-square fa-2" aria-hidden="true"></i>
                </a>
                <a target="_blank" href="https://www.facebook.com/geonetnz/">
                    <i class="fa fa-facebook-square fa-2" aria-hidden="true"></i>
                </a>
                <a target="_blank" href="https://www.youtube.com/user/GeoNetNZ">
                    <i class="fa fa-youtube-square fa-2" aria-hidden="true"></i>
                </a>
                <a target="_blank" href="https://play.google.com/store/apps/details?id=nz.org.geonet.quake&hl=en">
                    <i class="fa fa-android fa-2" aria-hidden="true"></i>
                </a>
                <a target="_blank" href="https://itunes.apple.com/nz/app/geonet-quake/id533054360?mt=8">
                    <i class="fa fa-apple fa-2" aria-hidden="true"></i>
                </a>
                <a target="_blank" href="https://github.com/GeoNet">
                    <i class="fa fa-github fa-2" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    </div>
</div>
{{end}}
`

var (
	headerTmpl *template.Template
	footerTmpl *template.Template
)

func init() {
	loadTemplates()
}

func loadTemplates() {
	log.Println("Loading templates.")
	headerTmpl = template.Must(template.New("t").Parse(header))
	footerTmpl = template.Must(template.New("t").Parse(footer))
	log.Println("Done loading templates.")
}

type HeaderFooter struct {
	Origin string
	Active
}

type Active struct {
	About, Data, Home, Earthquake, Volcano, Tsunami, Landslide, News, Search bool
}

/**
 * get GeoNet header html content with specified origin and active menu
 * @ geonetUrl: e.g. /, https://www.geonet.org.nz/
 * @ activeMenu: e.g. earthquake, volcano
 * @ searchEnabled: only enable on www-geonet
 */
func GetGeoNetHeader(geonetUrl, activeMenu string, searchEnabled bool) (template.HTML, error) {
	var p = HeaderFooter{Origin: geonetUrl}
	p.Active.Search = searchEnabled
	var b bytes.Buffer
	var contents template.HTML
	p.parseActiveMenu(activeMenu)
	if err := headerTmpl.ExecuteTemplate(&b, "header", p); err != nil {
		log.Println("err", err)
		return contents, err
	}
	contents = template.HTML(b.String())
	return contents, nil
}

/**
 * get GeoNet footer html content
 * @ geonetUrl: e.g. /, https://www.geonet.org.nz/
 */
func GetGeoNetFooter(geonetUrl string) (template.HTML, error) {
	var p = HeaderFooter{Origin: geonetUrl}
	var b bytes.Buffer
	var contents template.HTML
	if err := footerTmpl.ExecuteTemplate(&b, "footer", p); err != nil {
		return contents, err
	}
	contents = template.HTML(b.String())
	return contents, nil
}

//specify which menu is active
func (p *HeaderFooter) parseActiveMenu(activeMenu string) {
	switch activeMenu {
	case "home":
		p.Active.Home = true
	case "about":
		p.Active.About = true
	case "data":
		p.Active.Data = true
	case "earthquake":
		p.Active.Earthquake = true
	case "landslide":
		p.Active.Landslide = true
	case "tsunami":
		p.Active.Tsunami = true
	case "volcano":
		p.Active.Volcano = true
	case "news":
		p.Active.News = true
	}
}
