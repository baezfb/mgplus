import registergCollapses from "./mgCollapse.js";
import registerDropdown from "./mgDropdown.js";
import registerModals from "./mgModal.js";
import registerNavs from "./mgNav.js";
import registerTabs from "./mgTabs.js";
import registerThemeSwitcher from "./mgThemeSwitcher.js";

(function (window) {
  function registerThemeSwitcherPlugin() {
    registerThemeSwitcher();
    console.log("mgplus - registered theme switcher plugin");
  }
  function registerDomPlugins(autorun) {
    registerDropdown();
    registerModals();
    registerNavs();
    registerTabs();
    registergCollapses();
    registerThemeSwitcherPlugin();

    console.log(
      `mgplus - registered DOM plugins (autorun=${autorun ? "true" : "false"})`
    );
  }

  // extracts the params from the currently running (external) script
  function getScriptUrl() {
    const scripts = document.getElementsByTagName("script");

    for (let i = 0; i < scripts.length; i++) {
      const scriptUrl = scripts[i] && scripts[i].src;

      if (scriptUrl.indexOf("mgplus-dom.js") > 0) {
        return scriptUrl;
      }
    }
    return null;
  }

  // gets the Query Params of a given query string
  function getQueryParam(name, query) {
    name = name.replace(/[[]/, "\\[").replace(/[]]/, "\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(query);

    if (results == null) return "";
    else return results[1];
  }
  window.mgplus = { registerDomPlugins, registerThemeSwitcherPlugin };
  window.addEventListener("DOMContentLoaded", () => {
    const autorun = getQueryParam("autorun", getScriptUrl());

    if (autorun === "true") {
      registerThemeSwitcherPlugin();
      registerDomPlugins(true);
    }
  });
})(window);
