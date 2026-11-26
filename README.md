# kirozxy.github.io

The previous address for the kirozxy portfolio. Visitors are automatically redirected to [kirozxy.dev](https://kirozxy.dev/) after three seconds, or can use the direct link on the page.

The static redirect works without a build step. Its no-JavaScript fallback redirects to the homepage; JavaScript also preserves query strings, fragment anchors and known app or Arcade paths. Unknown paths use the homepage. Both `index.html` and `404.html` use the same responsive layout and shared assets, with reduced-motion support.

```text
index.html
404.html
assets/
  redirect.css
  redirect.js
  kori.png
  logo.png
```
