export default {
    render(props) {
        return `${this.html(props)}`;
    },

    html(p) { return /*html*/ `
        <div class="container">
            <div class="footer">
                <hr>
                <div class="row d-none d-md-flex">
                    <div class="col"><a href="https://www.geonet.org.nz/about">About&nbsp;GeoNet</a></div>
                    <div class="col"><a href="https://www.geonet.org.nz/contact">Contact</a></div>
                    <div class="col"><a href="https://www.geonet.org.nz/ngmc">NGMC</a></div>
                    <div class="col"><a href="https://www.geonet.org.nz/policy">Data&nbsp;Policy</a></div>
                    <div class="col"><a href="https://www.geonet.org.nz/disclaimer">Disclaimer</a></div>
                    <div class="col"><a href="https://gns.cri.nz/Home/Contact-Us/Privacy-Policy" target="_blank">Privacy</a></div>
                    <div class="col"><a href="https://www.geonet.org.nz/sponsors">Sponsors</a></div>
                    <div class="col"><a href="https://www.geonet.org.nz/reviews">Strategic&nbsp;Review</a></div>
                </div>
                <div class="row d-md-none">
                    <div class="col-12"><a href="https://www.geonet.org.nz/about">About GeoNet</a></div>
                    <div class="col-12"><a href="https://www.geonet.org.nz/contact">Contact</a></div>
                    <div class="col"><a href="https://www.geonet.org.nz/ngmc">NGMC</a></div>
                    <div class="col-12"><a href="https://www.geonet.org.nz/policy">Data Policy</a></div>
                    <div class="col-12"><a href="https://www.geonet.org.nz/disclaimer">Disclaimer</a></div>
                    <div class="col-12"><a href="https://gns.cri.nz/Home/Contact-Us/Privacy-Policy" target="_blank">Privacy</a></div>
                    <div class="col-12"><a href="https://www.geonet.org.nz/sponsors">Sponsors</a></div>
                    <div class="col-12"><a href="https://www.geonet.org.nz/reviews">Strategic Review</a></div>
                    <div class="col-12"><a id="appLink" href="">Get&nbsp;our&nbsp;GeoNet&nbsp;App
                        <i id="osIcon" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
            <div id="footer" class="footer">
                <div class="row">
                    <div class="col-12 d-md-none text-center">
                        <a target="_blank" href="https://www.geonet.org.nz">
                            <img src="../images/geonet_logo.png">
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 d-md-none text-center">
                        <a target="_blank" href="https://www.geonet.org.nz">
                            <img src="../images/gns_logo.svg">
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 d-md-none text-center">
                        <a target="_blank" href="https://www.geonet.org.nz">
                            <img src="../images/toka_tu_ake_eqc_logo.png">
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 d-none d-md-block">
                        <a target="_blank" href="https://www.geonet.org.nz">
                            <img src="../images/geonet_logo.png" width="100px" class="m-3">
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
                    <div class="col-md-3 d-none d-md-block">
                        <a target="_blank" href="https://www.geonet.org.nz">
                            <img src="../images/gns_logo.svg" width="100px" class="m-3">
                        </a>
                        <a target="_blank" href="https://www.geonet.org.nz">
                            <img src="../images/toka_tu_ake_eqc_logo.png" width="50px" class="m-3">
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4 d-none d-md-block social-icon">
                        <div class="row d-flex justify-content-center">
                            <a target="_blank" class="m-1 p-0 w-auto" href="https://twitter.com/geonet">
                                <i class="fa fa-twitter-square fa-2" aria-hidden="true"></i>
                            </a>
                            <a target="_blank" class="m-1 p-0 w-auto" href="https://www.facebook.com/geonetnz/">
                                <i class="fa fa-facebook-square fa-2" aria-hidden="true"></i>
                            </a>
                            <a target="_blank" class="m-1 p-0 w-auto" href="https://github.com/GeoNet">
                                <i class="fa fa-github fa-2" aria-hidden="true"></i>
                            </a>
                            <a target="_blank" class="m-1 p-0 w-auto" href="https://www.youtube.com/user/GeoNetNZ">
                                <i class="fa fa-youtube-square fa-2" aria-hidden="true"></i>
                            </a>
                            <a target="_blank" class="m-1 p-0 w-auto" href="https://play.google.com/store/apps/details?id=nz.org.geonet.quake&hl=en">
                                <i class="fa fa-android fa-2" aria-hidden="true"></i>
                            </a>
                            <a target="_blank" class="m-1 p-0 w-auto" href="https://itunes.apple.com/nz/app/geonet-quake/id533054360?mt=8">
                                <i class="fa fa-apple fa-2" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-4"></div>
                </div>
            </div>
        </div>`
    },
 }

