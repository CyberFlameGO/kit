package geonet_footer

import (
	"bytes"
	_ "embed"
	"html/template"
)

//go:embed footer.html
var footerHTML string
var footerTmpl = template.Must(template.New("footer").Parse(footerHTML))

//go:embed images/geonet_logo.svg
var geonetLogo template.HTML

//go:embed images/gns_logo.svg
var gnsLogo template.HTML

//go:embed images/toka_tu_ake_eqc_logo.svg
var eqcLogo template.HTML

type footerConfig struct {
	GeoNetLogo template.HTML
	GnsLogo    template.HTML
	EqcLogo    template.HTML
}

// ReturnGeoNetFooter returns HTML for the main GeoNet footer that
// can be inserted into a webpage.
func ReturnGeoNetFooter() (template.HTML, error) {
	var b bytes.Buffer
	var contents template.HTML

	config := footerConfig{
		GeoNetLogo: geonetLogo,
		GnsLogo:    gnsLogo,
		EqcLogo:    eqcLogo,
	}

	if err := footerTmpl.ExecuteTemplate(&b, "footer", config); err != nil {
		return contents, err
	}
	return template.HTML(b.String()), nil // nolint: gosec // The source is our HTML file.
}
