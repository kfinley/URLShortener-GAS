# v.gd | is.gd Client for Google Apps Script

This library provides access to the v.gd and is.gd URL shortener service for Google Apps Script. Original URLs can also be retried using an existing short URLs.

## Use

### From Script Editor
Go to Resources -> Libraries in the Script menus, 
paste in `MnGtWxuNL5wOBBBVWFMpVduMizcCsd2Gt` (the project key for this script),
and add in UrlShortener, version 2 (the most recent).  

### From `clasp` Project
Add the following section to the appsscript.json file.

```
{
    "userSymbol": "UrlShortener",
    "libraryId": "194mroUf9HyYPzEz9Cdu8GhhwYqCpYOdvMJfa39hSXvULCeuh9t1BmgB6",
    "version": "2"
}
```
### From Code

Create new short URL
```
  var client = new UrlShortener();

  shortUrl = client.create("kylefinley.net");
```

Lookup existing short URL
```
    var client = new UrlShortener();

    var originalUrl = client.lookup("https://v.gd/iZWrwj");
```
