package main

import (
	"embed"
	"html/template"
	"io/fs"
	"log"
	"net/http"
	"time"

	footer "github.com/GeoNet/kit/ui/geonet_footer"
	header "github.com/GeoNet/kit/ui/geonet_header"
	header_basic "github.com/GeoNet/kit/ui/geonet_header_basic"
)

//go:embed assets
var assets embed.FS

func main() {

	// Setup for serving embedded asset files.
	var assetFS = fs.FS(assets)
	htmlContent, err := fs.Sub(assetFS, "assets")
	if err != nil {
		log.Fatal(err)
	}
	fs := http.FileServer(http.FS(htmlContent))

	http.Handle("/", fs) // Serve static files
	http.Handle("/geonetheader", http.HandlerFunc(testUIhandler))
	http.Handle("/geonetfooter", http.HandlerFunc(testUIhandler))
	http.Handle("/geonetheaderbasic", http.HandlerFunc(testUIhandler))

	log.Println("starting server")
	server := &http.Server{
		Addr:         ":8080",
		ReadTimeout:  30 * time.Second,
		WriteTimeout: 60 * time.Second,
	}
	log.Fatal(server.ListenAndServe())
}

func testUIhandler(w http.ResponseWriter, req *http.Request) {

	var html template.HTML
	var err error

	// Add leading HTML, including Bootstrap CSS/JS, fonts, custom CSS/JS
	leadingHTML := `<!DOCTYPE html><html><head>
	<link rel="stylesheet" href="/bootstrap.v5.min.css">
	<link rel="stylesheet" href="/font-awesome.min.css">
	<link rel="stylesheet" href="/header.css">
	<script src="/bootstrap.v5.bundle.min.js"></script>
	<script src="/header.js"></script>
	<script src="/footer.js"></script>
	</head>
	<body>`
	_, err = w.Write([]byte(leadingHTML))
	if err != nil {
		log.Println(err)
	}

	path := req.URL.Path
	switch path {
	case "/geonetfooter":
		html, err = footer.ReturnGeoNetFooter()
		if err != nil {
			log.Println(err)
		}
	case "/geonetheader":
		config := header.HeaderConfig{
			Origin: "https://www.geonet.org.nz",
			Active: header.Active{
				Home: true,
			},
		}
		html, err = header.ReturnGeoNetHeader(config)
		if err != nil {
			log.Println(err)
		}
	case "/geonetheaderbasic":
		links := []header_basic.HeaderBasicLink{
			{
				Title:      "Test Home",
				URL:        "https://www.geonet.org.nz",
				IsExternal: false,
			},
			{
				Title:      "Test External",
				URL:        "https://www.geonet.org.nz",
				IsExternal: true,
			},
			{
				Title:      "Test Not External",
				URL:        "https://www.geonet.org.nz",
				IsExternal: false,
			},
		}
		config := header_basic.HeaderBasicConfig{
			Title:    "Test Page",
			TitleURL: "https://www.geonet.org.nz",
			Links:    links,
		}
		html, err = header_basic.ReturnGeoNetHeaderBasic(config)
		if err != nil {
			log.Println(err)
		}
	default:
		w.WriteHeader(http.StatusNotFound)
	}

	// Write HTML UI fragment to writer.
	_, err = w.Write([]byte(html))
	if err != nil {
		log.Println(err)
	}

	// Add trailing HTML
	trailingHTML := `</body></html>`
	_, err = w.Write([]byte(trailingHTML))
	if err != nil {
		log.Println(err)
	}
}
