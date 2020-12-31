importScripts("/13H13/sw-toolbox.js");
toolbox.precache([
    "/13H13/index.html",
    "/13H13/style.css",
    "/13H13/script.js",
    "/13H13/icon/512x512.png",
    "/13H13/icon/192x192.png"
])

toolbox.router.get("/*", toolbox.networkFirst, {
    networkTimeoutSeconds: 5
})