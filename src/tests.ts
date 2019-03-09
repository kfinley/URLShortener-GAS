import { UrlShortener } from "./UrlShortener";

function RunTests() {
    GivenValidUrl_ItShouldCreateShortUrlWithStats();
    GivenShortUrl_ItShouldReturnOriginalUrl();
}

var shortUrl: string;

function GivenValidUrl_ItShouldCreateShortUrlWithStats() {
    
    var client = new UrlShortener();

    shortUrl = client.create("kylefinley.net");

    Logger.log(shortUrl);
}

function GivenShortUrl_ItShouldReturnOriginalUrl() {
    var client = new UrlShortener();

    var originalUrl = client.lookup(shortUrl);

    Logger.log(originalUrl);
}

