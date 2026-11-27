// Cloudflare Web Analytics (cookieless). Loaded by index.html, privacy.html and report.html.
//
// Paste your site token below. Find it in the Cloudflare dashboard: Web Analytics >
// your site > Manage site; it's the "token" value in the JS snippet shown there.
// Until it's filled in, nothing is loaded.
//
// If reelmonkey.io is proxied through Cloudflare (orange cloud) and you've left
// Web Analytics on "automatic setup", Cloudflare adds the snippet itself: leave this
// blank, or the visit would be counted twice.
(function () {
  var TOKEN = "YOUR_CF_ANALYTICS_TOKEN";
  if (!TOKEN || TOKEN.indexOf("YOUR_") === 0) return;
  var s = document.createElement("script");
  s.type = "module";
  s.src = "https://static.cloudflareinsights.com/beacon.min.js?token=" + encodeURIComponent(TOKEN);
  document.head.appendChild(s);
})();
