"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","39ede2a9f06f526f56999868c0c395d2"],["static/css/main.8c12d343.css","5c0854a4af424bdd43df9b88a986e9c6"],["static/js/main.0bc0d641.js","4bca04695850d669d683ec02c2436623"],["static/media/bg1.8a90b916.png","8a90b916e4883eed6c8a2e3e574df180"],["static/media/bg2.2bc4bef2.png","2bc4bef249bd24abb7a5aa5dc6ceed72"],["static/media/herelyLogo.90e6c311.svg","90e6c311339196446729480b7c12b14c"],["static/media/icon-email.24a0ada0.svg","24a0ada0d2516cdb60179108be7c4416"],["static/media/icon-logo.28630be6.svg","28630be6eccde0f230f359557d43790d"],["static/media/icon-map.491ce156.svg","491ce156ce3f39dbbc0b6f578ce2cd20"],["static/media/icon-search.e3e54705.svg","e3e54705b2ccae3e1890e4ab900ea3cb"],["static/media/iconfont.0e32fc5e.svg","0e32fc5eb2617ce80a1ac86d5cbcf394"],["static/media/iconfont.91146d08.ttf","91146d08183eb5b16b85affdd9e283f9"],["static/media/iconfont.cc19502a.eot","cc19502ad5b0c83205def40bcced353d"],["static/media/iconfont.d64b5c64.woff","d64b5c649668bd265c77d6cef612d124"],["static/media/phone.fcfa3019.png","fcfa3019c9d9a081c48e3a504be5a979"],["static/media/qtCode.576b1132.jpg","576b113214bc5054eff0a3a0d83912ef"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(n);t||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});