/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404/index.html","132cbf1bfa687205876654996f34142d"],["/Let-s-Fix-StarCraft/index.html","d28f404a43be2de3e9e5fec70f164e72"],["/Plango/index.html","96b8ccb35fff756df2cff433478ee51f"],["/Rendevu/index.html","7a538885d8f41c6378fa1a1a764f9cc3"],["/Spark-App-Studio/index.html","452ac634e0a2f80a7258aec7691ccbcd"],["/Tesla-Insurance-Concept/index.html","8334a3b7c9a36d78cf30aa392477c675"],["/about/index.html","cb4269b041c79f5add0dbb5c61061ab8"],["/assets/css/main.css","e8de8727f3c18e669a785de2c1d3f7f8"],["/assets/img/douglas.jpg","82f44dde12ab33d90d3bf2fdbc6d96c2"],["/assets/img/favicon.jpg","c07160fff0d69ca9bed13a1d883a2681"],["/assets/img/icons/apple-touch-icon.png","b4f435e327bf7b78f80033f29af2a359"],["/assets/img/icons/favicon-16x16.png","1d124ebff1dc49d3777f4ebf78755cb7"],["/assets/img/icons/favicon-32x32.png","ab548d89b2ab9ec09118761d342dbbf2"],["/assets/img/icons/favicon.png","323d57999ae7bb1b50553975e57b50e3"],["/assets/img/icons/favicon192.png","5a2f6e01f552d5083ef8678738d2eb79"],["/assets/img/icons/favicon256.png","efe8305a42ff775db514fe6830a22dd8"],["/assets/img/icons/icon-github.svg","4e06335104a29f91e08d4ef420da7679"],["/assets/img/icons/icon-instagram.svg","1e1119e2628235ee4c8771bff15eb2ca"],["/assets/img/icons/icon-twitter.svg","30551913d5399d6520e8a74b6f1e23f0"],["/assets/img/icons/mstile-150x150.png","e5444ddfaab292ace1dfb702d64b0589"],["/assets/img/icons/safari-pinned-tab.svg","4e19d83b91beec71b578cada9a2f9006"],["/assets/img/plango1.jpg","6796965d71f6cd991432584f7412c830"],["/assets/img/plango2.jpg","960a74baaf5fcd68be53918f29edb895"],["/assets/img/plango3.jpg","42f139ce053de11254592edc3b00dff7"],["/assets/img/posts/emile-perron-190221.jpg","4705474281b975b7a213b96e71f772e7"],["/assets/img/posts/emile-perron-190221_lg.jpg","aafe35b1dc6d9dc9293c8c2ef4121046"],["/assets/img/posts/emile-perron-190221_md.jpg","03ed35ed656429599daba312f0990a0f"],["/assets/img/posts/emile-perron-190221_placehold.jpg","67f40708f69ab671cee04d624258b85c"],["/assets/img/posts/emile-perron-190221_sm.jpg","4ce4178a62d5a456e90e7bc47bde50f5"],["/assets/img/posts/emile-perron-190221_thumb.jpg","f20085dfe2e36854f8a12f1fd6c50425"],["/assets/img/posts/emile-perron-190221_thumb@2x.jpg","b8fa22c3237de529316037f093b9cb4d"],["/assets/img/posts/emile-perron-190221_xs.jpg","ac32cbd525d72e932499668af5647d03"],["/assets/img/posts/plangoCover.jpg","e70bf061f1d0a205924c4c9a3f2c362f"],["/assets/img/posts/plangoCover_lg.jpg","82222bcc6e5d0bbde9e07a0e3fc84b83"],["/assets/img/posts/plangoCover_md.jpg","96ce85e6b460f3d8b0c919748c5b3831"],["/assets/img/posts/plangoCover_placehold.jpg","5d61da11d30e6a58414e7bfddefe463b"],["/assets/img/posts/plangoCover_sm.jpg","946c65d977bd78974dda2955708274b3"],["/assets/img/posts/plangoCover_thumb.jpg","81b392197fbe08c499caba08897037e9"],["/assets/img/posts/plangoCover_thumb@2x.jpg","b275dd565bf46f6b839430739d2c2cc0"],["/assets/img/posts/plangoCover_xs.jpg","62a83c1182bf8cd2eac39087f07ac696"],["/assets/img/posts/rendevuCover.jpg","40b51194a8d280ab76a8137bf04dca95"],["/assets/img/posts/rendevuCover_lg.jpg","6b13ede4b3267ade771f398c3c9b4647"],["/assets/img/posts/rendevuCover_md.jpg","b932aa8de7dd2038dc7ff7a341f5194f"],["/assets/img/posts/rendevuCover_placehold.jpg","6616bc765d88fa9584eb7ad950209ace"],["/assets/img/posts/rendevuCover_sm.jpg","9acfddf8a9860b9641a14d0d8aa8b5a9"],["/assets/img/posts/rendevuCover_thumb.jpg","f8b5b8fee223bb528c9423e1673f5150"],["/assets/img/posts/rendevuCover_thumb@2x.jpg","6bb0cc19ee93d9d2c79f6396e3d5b904"],["/assets/img/posts/rendevuCover_xs.jpg","49481de02231f925e179d44ed0f80b2f"],["/assets/img/posts/shane-rounce-205187.jpg","bb774d6e05b2b55ffdabe11a8aac7c56"],["/assets/img/posts/shane-rounce-205187_lg.jpg","83cd838024fff9c3faec59fa1da97872"],["/assets/img/posts/shane-rounce-205187_md.jpg","628cf27bf658cf6de9df79ab9bf2cb2d"],["/assets/img/posts/shane-rounce-205187_placehold.jpg","249fc4a09bcfcbd7d5764f14c14ae82e"],["/assets/img/posts/shane-rounce-205187_sm.jpg","a2400a468e10d7d64528ac9c6bc3b6f0"],["/assets/img/posts/shane-rounce-205187_thumb.jpg","c3b2dd0d95a6d3a44d7702f8c06b1e78"],["/assets/img/posts/shane-rounce-205187_thumb@2x.jpg","b0722b63a92c92a44cd92c0201fc92a4"],["/assets/img/posts/shane-rounce-205187_xs.jpg","cd58fd23f3b3c1de2183beb9ed08327b"],["/assets/img/posts/sleek.jpg","a32252a618ffe8ae57c9ce9ab157a01b"],["/assets/img/posts/sleek_lg.jpg","95a1338aa524727f34950f269133e904"],["/assets/img/posts/sleek_md.jpg","4e35ceb2f5fffd3d758fade699b0b85a"],["/assets/img/posts/sleek_placehold.jpg","0f48050cd7776895b98c6ce21597ff39"],["/assets/img/posts/sleek_sm.jpg","f30af3d30b7df905d962e494750f5da0"],["/assets/img/posts/sleek_thumb.jpg","f7b8a94ac9da8e5ea36bb9e459872400"],["/assets/img/posts/sleek_thumb@2x.jpg","e67e2129dc58a100b98a5e027c964dbc"],["/assets/img/posts/sleek_xs.jpg","c8212cace6d446950556a3bf6efe4520"],["/assets/img/posts/sparkCover.jpg","5e5d9f21f1a0ab54d99c332909bfe830"],["/assets/img/posts/sparkCover_lg.jpg","b49f3a1a42cdefabba36bd9c2eda66da"],["/assets/img/posts/sparkCover_md.jpg","4ef87b1efec1b1080b05781c8f387ba7"],["/assets/img/posts/sparkCover_placehold.jpg","484fc790913f81a986b18e85fce3d1e7"],["/assets/img/posts/sparkCover_sm.jpg","7de524a48f206089be580d0c84303707"],["/assets/img/posts/sparkCover_thumb.jpg","823d71f7e670867b6042a4c5d82d6ef7"],["/assets/img/posts/sparkCover_thumb@2x.jpg","19e6d066f8c1b5847fb4609cdb65d68c"],["/assets/img/posts/sparkCover_xs.jpg","9191d1a3b57feead83081af2a6c216af"],["/assets/img/posts/starcraftCover.jpg","017bf28ca4d3d66f370c2e72276d2509"],["/assets/img/posts/starcraftCover_lg.jpg","0917d4c0a920471903be9a326fa8d88c"],["/assets/img/posts/starcraftCover_md.jpg","7f5e0813d746e12d675f64db4dcb4fdf"],["/assets/img/posts/starcraftCover_placehold.jpg","e8e52e63ab3e981d0f4f6804ffecf750"],["/assets/img/posts/starcraftCover_sm.jpg","c69abfae9477cd384864478b60161fad"],["/assets/img/posts/starcraftCover_thumb.jpg","e09adbfaad101bdf0e650d46eed45bca"],["/assets/img/posts/starcraftCover_thumb@2x.jpg","20a8297f8c63342035aff9b7c56d0c13"],["/assets/img/posts/starcraftCover_xs.jpg","b1307913fe3b4f4acff652a4a05024d4"],["/assets/img/posts/teslaCover.jpg","8713519189dea5edf72e09919ba11564"],["/assets/img/posts/teslaCover_lg.jpg","68b9002147eac8a3ae680c3ad88f4a07"],["/assets/img/posts/teslaCover_md.jpg","242527d371eacec98755b378110fbcf8"],["/assets/img/posts/teslaCover_placehold.jpg","6771532c51a7a70b7540006252f74c12"],["/assets/img/posts/teslaCover_sm.jpg","2d4136e830804406b5f2228c97d43d11"],["/assets/img/posts/teslaCover_thumb.jpg","6e00c6fbeab86b7c62ac6e96368b51f8"],["/assets/img/posts/teslaCover_thumb@2x.jpg","75aa1891af27d74a94be912b059d6cfb"],["/assets/img/posts/teslaCover_xs.jpg","2036432607230a2ca627a32e0f3c542c"],["/assets/img/rendevu.jpg","09ac95873ae45be53770da30f173540e"],["/assets/img/workweek.jpg","243665495fd10466f2a45d47a4a56ca4"],["/assets/js/bundle.js","9790d1fedd220bec1de684467b49c1f2"],["/contact/index.html","373627a2ee28a3f768990d82213f3d9e"],["/index.html","a7715145cc7a2b8ca390177a684107bd"],["/sw.js","94cfe1a0134abc0cf21d97681e505e37"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







