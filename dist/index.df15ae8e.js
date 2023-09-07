// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dmexu":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b1ea7396df15ae8e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"biPfD":[function(require,module,exports) {
//////////////////////////////////
// SHOW MENU
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
//////////////////////////////////////////////
// PARTICLES JS ANIMATION
var _particlesJson = require("../../particles.json");
var _particlesJsonDefault = parcelHelpers.interopDefault(_particlesJson);
const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId), nav = document.getElementById(navId);
    if (toggle && nav) toggle.addEventListener("click", ()=>{
        nav.classList.toggle("show-menu");
    });
};
showMenu("nav-toggle", "nav-menu");
// REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n)=>n.addEventListener("click", linkAction));
// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach((current)=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");
        if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
        else document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
    });
}
window.addEventListener("scroll", scrollActive);
// CHANGE BACKGROUND HEADER
function scrollHeader() {
    const header = document.getElementById("header");
    if (this.scrollY >= 200) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
// SHOW SCROLL TOP
function scrollTop() {
    const scrollTop = document.getElementById("scroll-top");
    if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
    else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);
// MIXITUP FILTER PORTFOLIO
const mixer = mixitup(".portfolio__container", {
    selectors: {
        target: ".portfolio__content"
    },
    animation: {
        duration: 300
    }
});
// LINK ACTIVE PORTFOLIO
const linkPortfolio = document.querySelectorAll(".portfolio__item");
function activePortfolio() {
    if (linkPortfolio) {
        linkPortfolio.forEach((l)=>l.classList.remove("active-portfolio"));
        this.classList.add("active-portfolio");
    }
}
linkPortfolio.forEach((l)=>l.addEventListener("click", activePortfolio));
/////////////////////////////////////
//   GSAP ANIMATION
gsap.from(".home__img", {
    opacity: 0,
    duration: 2,
    delay: 0.5,
    x: 60
});
gsap.from(".home__data", {
    opacity: 0,
    duration: 2,
    delay: 0.8,
    y: 25
});
gsap.from(".home__greeting, .home__name, .home__profession, .home__button", {
    opacity: 0,
    duration: 2,
    delay: 1,
    y: 25,
    ease: "expo.out",
    stagger: 0.2
});
gsap.from(".nav__logo, .nav__toggle", {
    opacity: 0,
    duration: 2,
    delay: 1.5,
    y: 25,
    ease: "expo.out",
    stagger: 0.2
});
gsap.from(".nav__item", {
    opacity: 0,
    duration: 2,
    delay: 1.8,
    y: 25,
    ease: "expo.out",
    stagger: 0.2
});
gsap.from(".home__social-icon", {
    opacity: 0,
    duration: 2,
    delay: 2.3,
    y: 25,
    ease: "expo.out",
    stagger: 0.2
});
///////////////////////////////////////
// FORM SUBMIT
TEMPLATE_ID = "template_vnk0jbb";
SERVICE_ID = "service_kpzvjx8";
PUBLIC_KEY = "o27GH_pTFYPacIXp-";
emailjs.init(PUBLIC_KEY);
const mainForm = document.querySelector(".contact__form");
mainForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    // Get the form data
    const name = mainForm.elements["name"].value;
    const email = mainForm.elements["email"].value;
    const message = mainForm.elements["message"].value;
    const phone = mainForm.elements["phone"].value;
    const project = mainForm.elements["project"].value;
    // Send the email
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        to_name: "Amirbek",
        from_name: name,
        from_email: email,
        phone_number: phone,
        project_name: project,
        message_html: message
    }).then(function() {
        let notyf = new Notyf({
            duration: 3500,
            position: {
                x: "center",
                y: "top"
            }
        });
        notyf.success({
            message: "Сообщение успешно отправлено!",
            dismissible: true
        });
    }, function(error) {
        let notyf = new Notyf({
            duration: 3500,
            position: {
                x: "center",
                y: "top"
            }
        });
        notyf.error({
            message: "Не удалось отправить сообщение!",
            dismissible: true
        });
    });
    mainForm.reset();
});
particlesJS.load("particles-js", (0, _particlesJsonDefault.default), function() {});
//////////////////////////////////////////////
// scrollreveal js in services section
let slideUp1 = {
    distance: "50%",
    origin: "left",
    opacity: null,
    reset: true,
    duration: 850,
    delay: 200,
    easing: "ease-in-out",
    mobile: false
};
let slideUp2 = {
    distance: "20%",
    origin: "bottom",
    opacity: null,
    reset: true,
    duration: 850,
    delay: 200,
    easing: "ease-in-out",
    mobile: false
};
let slideUp3 = {
    distance: "50%",
    origin: "right",
    opacity: null,
    reset: true,
    duration: 850,
    delay: 200,
    easing: "ease-in-out",
    mobile: false
};
ScrollReveal().reveal(".services__data_1", slideUp1);
ScrollReveal().reveal(".services__data_2", slideUp2);
ScrollReveal().reveal(".services__data_3", slideUp3);
// scrollreveal js in about section
let sectionTitle = {
    distance: "60%",
    origin: "top",
    opacity: null,
    reset: true,
    duration: 850,
    delay: 100,
    easing: "ease-in-out",
    mobile: false
};
let aboutDesc = {
    opacity: 0.4,
    reset: true,
    duration: 850,
    delay: 100,
    easing: "ease-in-out",
    mobile: false,
    scale: 1.25
};
let aboutNum1 = {
    distance: "60%",
    origin: "left",
    opacity: null,
    reset: true,
    duration: 850,
    delay: 150,
    easing: "ease-in-out",
    mobile: false
};
let aboutNum2 = {
    distance: "60%",
    origin: "right",
    opacity: null,
    reset: true,
    duration: 850,
    delay: 150,
    easing: "ease-in-out",
    mobile: false
};
ScrollReveal().reveal(".section-title", sectionTitle);
ScrollReveal().reveal(".about__description", aboutDesc);
ScrollReveal().reveal(".about__num_1", aboutNum1);
ScrollReveal().reveal(".about__num_2", aboutNum2);
// scrollreveal js in qualification section
let firstQual = {
    distance: "50%",
    origin: "left",
    opacity: null,
    reset: true,
    duration: 850,
    delay: 200,
    easing: "ease-in-out",
    mobile: false
};
let secondQual = {
    distance: "50%",
    origin: "right",
    opacity: null,
    reset: true,
    duration: 850,
    delay: 200,
    easing: "ease-in-out",
    mobile: false
};
ScrollReveal().reveal(".qualification__content_1", firstQual);
ScrollReveal().reveal(".qualification__content_2", secondQual);
// scrollreveal js in qualification section
let contactBox1 = {
    distance: "50%",
    origin: "right",
    opacity: null,
    reset: true,
    duration: 850,
    delay: 150,
    easing: "ease-in-out",
    mobile: false
};
let contactBox2 = {
    distance: "55%",
    origin: "right",
    opacity: null,
    reset: true,
    duration: 850,
    delay: 250,
    easing: "ease-in-out",
    mobile: false
};
let contactBox3 = {
    distance: "60%",
    origin: "right",
    opacity: null,
    reset: true,
    duration: 850,
    delay: 300,
    easing: "ease-in-out",
    mobile: false
};
let contactBox4 = {
    distance: "65%",
    origin: "right",
    opacity: null,
    reset: true,
    duration: 850,
    delay: 350,
    easing: "ease-in-out",
    mobile: false
};
ScrollReveal().reveal(".contact__box_1", contactBox1);
ScrollReveal().reveal(".contact__box_2", contactBox2);
ScrollReveal().reveal(".contact__box_3", contactBox3);
ScrollReveal().reveal(".contact__box_4", contactBox4);
// scrollreveal js in portfolio section
let allPortfolioContent = document.querySelectorAll(".portfolio__content");
let portfolioContent = {
    distance: "28%",
    origin: "bottom",
    opacity: null,
    reset: true,
    duration: 850,
    delay: 200,
    easing: "ease-in-out"
};
allPortfolioContent.forEach((e)=>{
    portfolioContent.delay += 50;
    ScrollReveal().reveal(e, portfolioContent);
});
//////////////////////////////////////////////
// typewriter js animation for home h1
let homeTitle = document.querySelector(".home__name");
let nickName = null;
const mobile = window.matchMedia("(max-width: 768px)");
if (mobile.matches) nickName = "MIRR DESIGNER";
else nickName = "MIRRDESIGNER";
let homeTypewriter = new Typewriter(homeTitle, {
    loop: true
});
homeTypewriter.pauseFor(2000).typeString("Тоиров Амир").pauseFor(2000).deleteAll().typeString(nickName).pauseFor(1500).deleteAll().start();
// typewriter js animation for footer h1
let footerTitle = document.querySelector(".footer__title");
let footerTypewriter = new Typewriter(footerTitle, {
    loop: true
});
footerTypewriter.pauseFor(500).typeString("Тоиров Амир").pauseFor(2000).deleteAll().typeString("mirrdesigner").pauseFor(1500).deleteAll().start();
//////////////////////////////////
// CUSTOMIZING MODAL
const infoForModal = [
    {
        header: "Для чего нужен Дизайн И/Э",
        paragraph: "Дизайн интерьера и экстерьера помогает создавать гармоничное и функциональное окружение, которое отвечает нуждам и предпочтениям жильцов или пользователей помещений. Это может включать в себя выбор цветов, текстур, мебели, освещения и других элементов, которые создают цельное и визуально привлекательное пространство. Внешний дизайн, в свою очередь, направлен на создание привлекательной и функциональной внешней среды. Это может включать выбор материалов, цветов, ландшафтного дизайна и других элементов, которые дополняют архитектуру здания и создают приветливую и визуально привлекательную внешнюю среду."
    },
    {
        header: "Для чего нужен Ландшафтный дизайн ?",
        paragraph: "Главная задача ландшафтного дизайна — создание гармонии, красоты в сочетании с удобствами использования инфраструктуры зданий, сглаживание конфликтности между урбанизационными формами и природой, зачастую от них страдающей."
    },
    {
        header: "Для чего нужен Графический дизайн ?",
        paragraph: "Графический дизайн — это творческая область, которая включает использование визуальных элементов для передачи идей, сообщений и информации. Он охватывает множество носителей, таких как печатные, цифровые и мультимедийные, и может использоваться для самых разных целей, включая рекламу, брендинг, упаковку, веб-дизайн и многое другое."
    }
];
const changeHandlerModal = function(num) {
    const h2 = document.querySelector(".modal__h");
    const p = document.querySelector(".modal__p");
    h2.textContent = infoForModal[num].header;
    p.textContent = infoForModal[num].paragraph;
};
const navs = document.querySelectorAll(".modal__header ul li");
navs.forEach((child)=>{
    child.addEventListener("click", (e)=>{
        navs.forEach((nav)=>{
            nav.classList.remove("active__li");
        });
        child.classList.add("active__li");
        const num = Number(child.getAttribute("data-num"));
        changeHandlerModal(num);
    });
});
const exit = document.querySelector(".modal__exit");
const modal = document.querySelector(".modal");
exit.addEventListener("click", (e)=>{
    modal.style.display = "none";
    document.body.style.overflowY = "visible";
});
const btns = document.querySelectorAll(".services__btn");
btns.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        document.body.style.overflowY = "hidden";
        modal.style.display = "block";
        const num = Number(btn.getAttribute("data-num"));
        navs.forEach((e)=>{
            e.classList.remove("active__li");
        });
        navs[num].classList.add("active__li");
        changeHandlerModal(num);
    });
});
// DROPDOWN CONFIG
const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");
// Toggle dropdown function
const toggleDropdown = function() {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
};
// Toggle dropdown open/close when dropdown button is clicked
dropdownBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    toggleDropdown();
});
// Close dropdown when dom element is clicked
document.documentElement.addEventListener("click", function() {
    if (dropdownMenu.classList.contains("show")) toggleDropdown();
});
// Changing UI of modal
const aEl = document.querySelectorAll(".dropdown a");
aEl.forEach((child)=>{
    child.addEventListener("click", (e)=>{
        const num = Number(child.getAttribute("data-num"));
        changeHandlerModal(num);
    });
});
// Swiper for Portfolio section
const viewDetailsBtn = document.querySelectorAll(".view__details");
const sliderMainContainer = document.querySelectorAll(".slider__main");
const sliderExit = document.querySelector(".slider__exit_icon");
const sliderContainer = document.querySelector(".slider__container");
sliderExit.addEventListener("click", (e)=>{
    sliderContainer.style.display = "none";
    document.body.style.overflowY = "visible";
});
viewDetailsBtn.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        e.preventDefault();
        sliderContainer.style.display = "flex";
        document.body.style.overflowY = "hidden";
        sliderMainContainer.forEach((e)=>{
            e.style.display = "none";
        });
        const whichBtn = Number(btn.getAttribute("data-which"));
        const activeSlider = document.querySelector(`.slider__main--${whichBtn + 1}`);
        activeSlider.style.display = "flex";
    });
});

},{"../../particles.json":"j6fVO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j6fVO":[function(require,module,exports) {
module.exports = JSON.parse('{"particles":{"number":{"value":55,"density":{"enable":true,"value_area":800}},"color":{"value":"#013549"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.3,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":50,"random":false,"anim":{"enable":true,"speed":10,"size_min":40,"sync":false}},"line_linked":{"enable":false,"distance":200,"color":"#ffffff","opacity":1,"width":2},"move":{"enable":true,"speed":8,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}');

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["dmexu","biPfD"], "biPfD", "parcelRequire2041")

//# sourceMappingURL=index.df15ae8e.js.map
