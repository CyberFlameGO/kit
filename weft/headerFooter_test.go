package weft_test

import (
	"io/ioutil"
	"strings"
	"testing"

	"github.com/GeoNet/kit/weft"
)

func TestGetGeoNetHeader(t *testing.T) {
	header, err := weft.GetGeoNetHeader("https://www.geonet.org.nz", "earthquake", true)
	if err != nil {
		t.Error(err)
	}
	file := "testdata/header_quake.html"
	b, err := ioutil.ReadFile(file)
	if err != nil {
		t.Error(err)
	}
	content1 := strings.TrimSpace(strings.ReplaceAll(string(header), " ", ""))
	content2 := strings.TrimSpace(strings.ReplaceAll(string(b), " ", ""))
	if len(content1) != len(content2) {
		t.Errorf("resulting header length %v not equal to expected %v", len(content1), len(content2))
	}
}

func TestGetGeoNetFooter(t *testing.T) {
	footer, err := weft.GetGeoNetFooter("https://www.geonet.org.nz")
	if err != nil {
		t.Error(err)
	}
	file := "testdata/geonet-footer.html"
	b, err := ioutil.ReadFile(file)
	if err != nil {
		t.Error(err)
	}
	content1 := strings.TrimSpace(strings.ReplaceAll(string(footer), " ", ""))
	content2 := strings.TrimSpace(strings.ReplaceAll(string(b), " ", ""))
	if len(content1) != len(content2) {
		t.Errorf("resulting footer length %v not equal to expected %v", len(content1), len(content2))
	}
}
