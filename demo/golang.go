package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

// Post response from API
type Post struct {
	Slug        string          `json:"slug"`
	PublishedAt int64           `json:"publishedAt"`
	EditedAt    json.RawMessage `json:"editedAt"`
}

// GraphQLQuery for sitemap data
const GraphQLQuery string = "query SitemapQuery { allPosts { slug, publishedAt, editedAt } }"

func main() {
	requestBody := bytes.NewBuffer([]byte(fmt.Sprintf(`{"query":"%v"}`, GraphQLQuery)))
	response, err := http.Post("http://localhost:4000/api", "application/json", requestBody)

	if err != nil {
		log.Fatal("Failed to fetch", err)
	}

	fmt.Printf("got response %v", response)
}
