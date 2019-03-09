import { ShortUrl, LongUrl, UrlServices } from "./types";

export class UrlShortener {

    private targetService: UrlServices


    constructor(service?: UrlServices) {
        if (service !== undefined)
            this.targetService = service;
        else
            this.targetService = UrlServices.vgd;
    }
    
    public create(url: string, logStats: boolean = true, shortUrl?: string, format: string = 'json', callback?: string): string {

        var apiUrl = `https://${this.targetService}/create.php?format=${format}&url=${encodeURIComponent(url)}&logstats=${logStats ? 1 : 0}`;

        if (shortUrl !== undefined)
            apiUrl = apiUrl + `&shorturl=${encodeURIComponent(shortUrl)}`;

        if (callback !== undefined)
            apiUrl = apiUrl + `&callback=${encodeURIComponent(callback)}`;

        var response = this.fetch(apiUrl);

        var result = <ShortUrl>JSON.parse(response.getContentText());

        return result.shorturl;

    }
    public lookup(url: string, format: string = "json"): string {

        var apiUrl = `https://${this.targetService}/forward.php?format=${format}&shorturl=${url}`;

        var response = this.fetch(apiUrl);

        var result = <LongUrl>JSON.parse(response.getContentText());

        return result.url;
    }

    private fetch(apiUrl: string): GoogleAppsScript.URL_Fetch.HTTPResponse {
        var response = UrlFetchApp.fetch(apiUrl);

        if (response.getResponseCode() !== 200) {
            Logger.log(response);
            throw `Create Failed. Response: ${response.getResponseCode()}`;
        }
        return response;

    }
}