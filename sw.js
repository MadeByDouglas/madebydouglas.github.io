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

var precacheConfig = [["/404/index.html","d296a2e64ddfdbb3fd33a95bedcd9872"],["/Bloc-Bootcamp/index.html","4bc4a7ddae3f74b9fd83cdd7e1f19991"],["/Do-It-Live/index.html","954cc7c5ee2bbfeb32e165220de751b2"],["/Let-s-Fix-StarCraft/index.html","722ecd3d13d51b599eeb0c9b16c54fcf"],["/Plango/index.html","6e6c75df9b797b147227a7eed54346c2"],["/Rendevu/index.html","556282b1c9fe60eaf5676a72ab27e94a"],["/Spark-App-Studio/index.html","df7d9ea8977c079411c783a6f0468986"],["/Spark-Computer/index.html","3ff9b18ac87009be9ddb3bc1bf0baaf0"],["/Tesla-Insurance-Concept/index.html","9f564c580f70e1619efb9e7db872e4d6"],["/about/index.html","10c416d23c6694f865cd45903e0205ea"],["/assets/css/main.css","e8de8727f3c18e669a785de2c1d3f7f8"],["/assets/img/douglas.jpg","82f44dde12ab33d90d3bf2fdbc6d96c2"],["/assets/img/favicon.jpg","c07160fff0d69ca9bed13a1d883a2681"],["/assets/img/icons/apple-touch-icon.png","b4f435e327bf7b78f80033f29af2a359"],["/assets/img/icons/favicon-16x16.png","1d124ebff1dc49d3777f4ebf78755cb7"],["/assets/img/icons/favicon-32x32.png","ab548d89b2ab9ec09118761d342dbbf2"],["/assets/img/icons/favicon.png","323d57999ae7bb1b50553975e57b50e3"],["/assets/img/icons/favicon192.png","5a2f6e01f552d5083ef8678738d2eb79"],["/assets/img/icons/favicon256.png","efe8305a42ff775db514fe6830a22dd8"],["/assets/img/icons/icon-github.svg","4e06335104a29f91e08d4ef420da7679"],["/assets/img/icons/icon-instagram.svg","1e1119e2628235ee4c8771bff15eb2ca"],["/assets/img/icons/icon-twitter.svg","30551913d5399d6520e8a74b6f1e23f0"],["/assets/img/icons/mstile-150x150.png","e5444ddfaab292ace1dfb702d64b0589"],["/assets/img/icons/safari-pinned-tab.svg","4e19d83b91beec71b578cada9a2f9006"],["/assets/img/plango1.jpg","6796965d71f6cd991432584f7412c830"],["/assets/img/plango2.jpg","960a74baaf5fcd68be53918f29edb895"],["/assets/img/plango3.jpg","42f139ce053de11254592edc3b00dff7"],["/assets/img/posts/blocCover.jpg","241f0d11f975eb107b3ac7c73573d6bf"],["/assets/img/posts/blocCover_lg.jpg","2dd6712f4dc248a134598de8e1e88cb2"],["/assets/img/posts/blocCover_md.jpg","6dbb295003c717553dca1a74c7e5ef56"],["/assets/img/posts/blocCover_placehold.jpg","a04c97c60005011c31f305c21cc8cf71"],["/assets/img/posts/blocCover_sm.jpg","289a38418a70d1541459962e7931b0ef"],["/assets/img/posts/blocCover_thumb.jpg","8c8a160ed611b84ae38023cd269e1f92"],["/assets/img/posts/blocCover_thumb@2x.jpg","aa0834fe76ac692eccee8535867efd38"],["/assets/img/posts/blocCover_xs.jpg","599a12cc40fe68e7c7d2bbec42369807"],["/assets/img/posts/emile-perron-190221.jpg","4705474281b975b7a213b96e71f772e7"],["/assets/img/posts/emile-perron-190221_lg.jpg","aafe35b1dc6d9dc9293c8c2ef4121046"],["/assets/img/posts/emile-perron-190221_md.jpg","03ed35ed656429599daba312f0990a0f"],["/assets/img/posts/emile-perron-190221_placehold.jpg","67f40708f69ab671cee04d624258b85c"],["/assets/img/posts/emile-perron-190221_sm.jpg","4ce4178a62d5a456e90e7bc47bde50f5"],["/assets/img/posts/emile-perron-190221_thumb.jpg","f20085dfe2e36854f8a12f1fd6c50425"],["/assets/img/posts/emile-perron-190221_thumb@2x.jpg","b8fa22c3237de529316037f093b9cb4d"],["/assets/img/posts/emile-perron-190221_xs.jpg","ac32cbd525d72e932499668af5647d03"],["/assets/img/posts/plangoCover.jpg","3ee2bc9688c1370b4ee29be183ee1131"],["/assets/img/posts/plangoCover_lg.jpg","0cdacc91611505ca65ada221f5d12a77"],["/assets/img/posts/plangoCover_md.jpg","30a5790ea409ccb334fa387afb17282a"],["/assets/img/posts/plangoCover_placehold.jpg","5a0f72a8250b03d9d2fb1bdba5b78d7f"],["/assets/img/posts/plangoCover_sm.jpg","17821f1121b33d5b23eaf74f9f988b90"],["/assets/img/posts/plangoCover_thumb.jpg","4aee1ce81acb55ad309348c045e0306b"],["/assets/img/posts/plangoCover_thumb@2x.jpg","8259068a6abe96147546bedf34ee6cfb"],["/assets/img/posts/plangoCover_xs.jpg","8734ab49e0992f173238962d83f6c217"],["/assets/img/posts/rendevuCover.jpg","ca75ea870df4cd2740cbee2f50a9e072"],["/assets/img/posts/rendevuCover_lg.jpg","abe0e8f3fb634088c2f17e99ed9a9aff"],["/assets/img/posts/rendevuCover_md.jpg","104a959ec021d7b86dc9f88412aafdec"],["/assets/img/posts/rendevuCover_placehold.jpg","4d4839cc0c029b73853c447b2f9e73a8"],["/assets/img/posts/rendevuCover_sm.jpg","37bddb8cb32bee643ccbe357a46b8a7c"],["/assets/img/posts/rendevuCover_thumb.jpg","13bc02f94a1acbd6ceaeb618169e8307"],["/assets/img/posts/rendevuCover_thumb@2x.jpg","c3cb1a137730fc4725f4c68c64d11fac"],["/assets/img/posts/rendevuCover_xs.jpg","6a91ad697d59f7fa53e3e2154eb75194"],["/assets/img/posts/shane-rounce-205187.jpg","bb774d6e05b2b55ffdabe11a8aac7c56"],["/assets/img/posts/shane-rounce-205187_lg.jpg","83cd838024fff9c3faec59fa1da97872"],["/assets/img/posts/shane-rounce-205187_md.jpg","628cf27bf658cf6de9df79ab9bf2cb2d"],["/assets/img/posts/shane-rounce-205187_placehold.jpg","249fc4a09bcfcbd7d5764f14c14ae82e"],["/assets/img/posts/shane-rounce-205187_sm.jpg","a2400a468e10d7d64528ac9c6bc3b6f0"],["/assets/img/posts/shane-rounce-205187_thumb.jpg","c3b2dd0d95a6d3a44d7702f8c06b1e78"],["/assets/img/posts/shane-rounce-205187_thumb@2x.jpg","b0722b63a92c92a44cd92c0201fc92a4"],["/assets/img/posts/shane-rounce-205187_xs.jpg","cd58fd23f3b3c1de2183beb9ed08327b"],["/assets/img/posts/sleek.jpg","a32252a618ffe8ae57c9ce9ab157a01b"],["/assets/img/posts/sleek_lg.jpg","95a1338aa524727f34950f269133e904"],["/assets/img/posts/sleek_md.jpg","4e35ceb2f5fffd3d758fade699b0b85a"],["/assets/img/posts/sleek_placehold.jpg","0f48050cd7776895b98c6ce21597ff39"],["/assets/img/posts/sleek_sm.jpg","f30af3d30b7df905d962e494750f5da0"],["/assets/img/posts/sleek_thumb.jpg","f7b8a94ac9da8e5ea36bb9e459872400"],["/assets/img/posts/sleek_thumb@2x.jpg","e67e2129dc58a100b98a5e027c964dbc"],["/assets/img/posts/sleek_xs.jpg","c8212cace6d446950556a3bf6efe4520"],["/assets/img/posts/sparkComputerCover.jpg","db3956f0e8519ca03d137267d78851f8"],["/assets/img/posts/sparkComputerCover_lg.jpg","7231f2ccd56c74b5782dc9a438866065"],["/assets/img/posts/sparkComputerCover_md.jpg","2d55079d47d85b5a23794c320508ab66"],["/assets/img/posts/sparkComputerCover_placehold.jpg","cfec59e38b597ea95fe8c7000e357e36"],["/assets/img/posts/sparkComputerCover_sm.jpg","98b6a69a9370ee5a60ccb94df91f781b"],["/assets/img/posts/sparkComputerCover_thumb.jpg","23aa1ec6f2275b698f38ea9f27a4613a"],["/assets/img/posts/sparkComputerCover_thumb@2x.jpg","4f1733897c703d5be096dc34f3a044f2"],["/assets/img/posts/sparkComputerCover_xs.jpg","646894bb9cd2d17e50392ebc45a360f1"],["/assets/img/posts/sparkCover.jpg","d2402f7d9b357332a146a4b20ad99cd5"],["/assets/img/posts/sparkCover_lg.jpg","e05d18f057e0585779c2abdfde82837f"],["/assets/img/posts/sparkCover_md.jpg","a1b9cbd511b7cee1bfd70d87a547da9f"],["/assets/img/posts/sparkCover_placehold.jpg","9a3924414f699c3bf1115dbf8cac0083"],["/assets/img/posts/sparkCover_sm.jpg","9ffc7222a0a3062d4cbab7030ac88c2b"],["/assets/img/posts/sparkCover_thumb.jpg","45d8b6b0d86a1694e4398ff24a166d9d"],["/assets/img/posts/sparkCover_thumb@2x.jpg","74a915375a8151892e57f42dad54150c"],["/assets/img/posts/sparkCover_xs.jpg","c9a2fb3ea44c7cf3247657685ed1e165"],["/assets/img/posts/starcraftCover.jpg","c573173d078d4b3005f524ddba0b2859"],["/assets/img/posts/starcraftCover_lg.jpg","54d4e0837ecdf36f0eec2d6e8a4534ac"],["/assets/img/posts/starcraftCover_md.jpg","98623d81b6ad4bc1b2c51ce26aa3976e"],["/assets/img/posts/starcraftCover_placehold.jpg","a282c24d1672b04e4560f0e00e4fd841"],["/assets/img/posts/starcraftCover_sm.jpg","6e858486f20ddb8c5b497ae25232282c"],["/assets/img/posts/starcraftCover_thumb.jpg","818d4da7aa1e1da09d194a1e971761ab"],["/assets/img/posts/starcraftCover_thumb@2x.jpg","50d6fd14368273fb00cf775a2bf5c0c2"],["/assets/img/posts/starcraftCover_xs.jpg","a928de1a5c5dcc34007dfcc3eaf923ff"],["/assets/img/posts/teslaCover.jpg","70e4a837e4db90c3f72526184851229f"],["/assets/img/posts/teslaCover_lg.jpg","d6bb3457a3a1d5d8068c740eefdbbf7b"],["/assets/img/posts/teslaCover_md.jpg","16a76700393eeb2c99bf5a7563c762f6"],["/assets/img/posts/teslaCover_placehold.jpg","aa7a90ae34d6908dd52b2ad1fc862468"],["/assets/img/posts/teslaCover_sm.jpg","35e5e260105574beee23a95f9696f701"],["/assets/img/posts/teslaCover_thumb.jpg","fc9e6d9e6c0ef5b596a1b4a011206ec9"],["/assets/img/posts/teslaCover_thumb@2x.jpg","5deec18e33e7eadd40cb14e8dc4064fc"],["/assets/img/posts/teslaCover_xs.jpg","639fb35a5a0162d33f2eab2f31ee6fed"],["/assets/img/rendevu.jpg","09ac95873ae45be53770da30f173540e"],["/assets/img/spark-computer/spark1.png","9c61d90ad1b61d5adea8965b1c479d19"],["/assets/img/spark-computer/spark10.png","cc920ec12bd4e906cba215f938bbcaba"],["/assets/img/spark-computer/spark11.png","c9cb0de60fbf2a998c67889165217242"],["/assets/img/spark-computer/spark12.png","d69663ac640c58355345afd35f2f0a5f"],["/assets/img/spark-computer/spark13.png","e805c58b2c75dfd654f2284791db99f4"],["/assets/img/spark-computer/spark2.png","e77c83b0aab6021d52539d6cdfc460af"],["/assets/img/spark-computer/spark3.png","65f1b9d9de5cbfefdd796e050c328f8e"],["/assets/img/spark-computer/spark3b.png","d543538cdef1da76bc0448ff402fb3dc"],["/assets/img/spark-computer/spark4.png","e87a6ef608ad27bbe3f4420d1ae48539"],["/assets/img/spark-computer/spark5.png","484e7de56ae18ddb1d98afd60c416b11"],["/assets/img/spark-computer/spark6.png","0e98367eec8df1cb98c3a0ca8574a10a"],["/assets/img/spark-computer/spark7.png","0e5e2dbdd0c8ee5807591980ccbc440f"],["/assets/img/spark-computer/spark8.png","3dbd8586dc68ead66903b9f929b8e563"],["/assets/img/spark-computer/spark9.png","19da90206558b0b569ef75358a35e405"],["/assets/img/workweek.jpg","243665495fd10466f2a45d47a4a56ca4"],["/assets/js/bundle.js","c584627a84670e3626710e82d7468b69"],["/contact/index.html","858775cc611fbdca5690108e1198555f"],["/index.html","c88055ae77c5a4abc7de33d23010e524"],["/sw.js","100466c3a79026b8192a854274bfaeec"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
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

var createCacheKey = function(originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
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







