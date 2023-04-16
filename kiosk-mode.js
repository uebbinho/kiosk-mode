(function () {
    'use strict';

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }

    var _a;
    var STYLES_PREFIX = 'kiosk_mode';
    var CACHE;
    (function (CACHE) {
        CACHE["HEADER"] = "kmHeader";
        CACHE["SIDEBAR"] = "kmSidebar";
        CACHE["OVERFLOW"] = "kmOverflow";
        CACHE["MENU_BUTTON"] = "kmMenuButton";
        CACHE["ACCOUNT"] = "kmAccount";
        CACHE["SEARCH"] = "kmSearch";
        CACHE["ASSISTANT"] = "kmAssistant";
        CACHE["REFRESH"] = "kmRefresh";
        CACHE["UNUSED_ENTITIES"] = "kmUnusedEntities";
        CACHE["RELOAD_RESOURCES"] = "kmReloadResources";
        CACHE["EDIT_DASHBOARD"] = "kmEditDashboard";
        CACHE["MOUSE"] = "kmMouse";
    })(CACHE || (CACHE = {}));
    var OPTION;
    (function (OPTION) {
        OPTION["KIOSK"] = "kiosk";
        OPTION["CACHE"] = "cache";
        OPTION["CLEAR_CACHE"] = "clear_km_cache";
        OPTION["DISABLE_KIOSK_MODE"] = "disable_km";
        OPTION["HIDE_SIDEBAR"] = "hide_sidebar";
        OPTION["HIDE_HEADER"] = "hide_header";
        OPTION["HIDE_OVERFLOW"] = "hide_overflow";
        OPTION["HIDE_MENU_BUTTON"] = "hide_menubutton";
        OPTION["HIDE_ACCOUNT"] = "hide_account";
        OPTION["HIDE_SEARCH"] = "hide_search";
        OPTION["HIDE_ASSISTANT"] = "hide_assistant";
        OPTION["HIDE_REFRESH"] = "hide_refresh";
        OPTION["HIDE_UNUSED_ENTITIES"] = "hide_unused_entities";
        OPTION["HIDE_RELOAD_RESOURCES"] = "hide_reload_resources";
        OPTION["HIDE_EDIT_DASHBOARD"] = "hide_edit_dashboard";
        OPTION["BLOCK_MOUSE"] = "block_mouse";
    })(OPTION || (OPTION = {}));
    var UI_PREFIX = 'ui';
    var COMMON_PREFIX = "".concat(UI_PREFIX, ".common");
    var PANEL_PREFIX = "".concat(UI_PREFIX, ".panel");
    var LOVELACE_PREFIX = "".concat(PANEL_PREFIX, ".lovelace");
    var MENU_PREFIX = "".concat(LOVELACE_PREFIX, ".menu");
    var MENU;
    (function (MENU) {
        MENU["SEARCH"] = "SEARCH";
        MENU["ASSIST"] = "ASSIST";
        MENU["REFRESH"] = "REFRESH";
        MENU["UNUSED_ENTITIES"] = "UNUSED_ENTITIES";
        MENU["RELOAD_RESOURCES"] = "RELOAD_RESOURCES";
        MENU["EDIT_DASHBOARD"] = "EDIT_DASHBOARD";
    })(MENU || (MENU = {}));
    var LOVELACE_MODE;
    (function (LOVELACE_MODE) {
        LOVELACE_MODE["STORAGE"] = "storage";
        LOVELACE_MODE["YAML"] = "yaml";
    })(LOVELACE_MODE || (LOVELACE_MODE = {}));
    var MENU_REFERENCES = Object.freeze((_a = {},
        _a[MENU.SEARCH] = "".concat(MENU_PREFIX, ".search"),
        _a[MENU.ASSIST] = "".concat(MENU_PREFIX, ".assist"),
        _a[MENU.REFRESH] = "".concat(COMMON_PREFIX, ".refresh"),
        _a[MENU.UNUSED_ENTITIES] = "".concat(LOVELACE_PREFIX, ".unused_entities.title"),
        _a[MENU.RELOAD_RESOURCES] = "".concat(MENU_PREFIX, ".reload_resources"),
        _a[MENU.EDIT_DASHBOARD] = "".concat(MENU_PREFIX, ".configure_ui"),
        _a));
    var ELEMENT;
    (function (ELEMENT) {
        ELEMENT["HOME_ASSISTANT"] = "home-assistant";
        ELEMENT["HOME_ASSISTANT_MAIN"] = "home-assistant-main";
        ELEMENT["HA_PANEL_LOVELACE"] = "ha-panel-lovelace";
        ELEMENT["PARTIAL_PANEL_RESOLVER"] = "partial-panel-resolver";
        ELEMENT["HUI_ROOT"] = "hui-root";
        ELEMENT["HUI_VIEW"] = "hui-view";
        ELEMENT["MENU_ITEM"] = "ha-icon-button";
        ELEMENT["MENU_ITEM_ICON"] = "mwc-icon-button";
        ELEMENT["OVERLAY_MENU"] = "ha-button-menu";
        ELEMENT["OVERLAY_MENU_ITEM"] = "mwc-list-item";
        ELEMENT["APP_DRAWER_LAYOUT"] = "app-drawer-layout";
        ELEMENT["APP_TOOLBAR"] = "app-toolbar";
        ELEMENT["APP_DRAWER"] = "app-drawer";
        ELEMENT["HA_SIDEBAR"] = "ha-sidebar";
        ELEMENT["HA_DRAWER"] = "ha-drawer";
        ELEMENT["TOOLBAR"] = ".toolbar";
        ELEMENT["ACTION_ITEMS"] = ".action-items";
    })(ELEMENT || (ELEMENT = {}));
    var TRUE = 'true';
    var FALSE = 'false';
    var CUSTOM_MOBILE_WIDTH_DEFAULT = 812;
    var SUSCRIBE_EVENTS_TYPE = 'subscribe_events';
    var STATE_CHANGED_EVENT = 'state_changed';
    var WINDOW_RESIZE_DELAY = 250;

    var toArray = function (x) {
        return Array.isArray(x) ? x : [x];
    };
    var getElementName = function (elem) {
        if (elem instanceof ShadowRoot) {
            return elem.host.localName;
        }
        return elem.localName;
    };
    var styleExists = function (elem) {
        var name = getElementName(elem);
        return elem.querySelector("#".concat(STYLES_PREFIX, "_").concat(name));
    };
    var addStyle = function (css, elem) {
        var name = getElementName(elem);
        var style = styleExists(elem);
        if (!style) {
            style = document.createElement('style');
            style.setAttribute('id', "".concat(STYLES_PREFIX, "_").concat(name));
            elem.appendChild(style);
        }
        style.innerHTML = css;
    };
    var removeStyle = function (elements) {
        toArray(elements).forEach(function (elem) {
            var name = getElementName(elem);
            if (styleExists(elem)) {
                elem.querySelector("#".concat(STYLES_PREFIX, "_").concat(name)).remove();
            }
        });
    };
    var queryString = function (keywords) {
        return toArray(keywords).some(function (x) { return window.location.search.includes(x); });
    };
    var setCache = function (k, v) {
        toArray(k).forEach(function (x) { return window.localStorage.setItem(x, v); });
    };
    var cached = function (key) {
        return toArray(key).some(function (x) { return window.localStorage.getItem(x) === TRUE; });
    };
    var getCSSString = function (cssInJs) {
        return Object.entries(cssInJs)
            .map(function (entry) {
            var decl = entry[0], value = entry[1];
            return "".concat(decl, ":").concat(value);
        })
            .join(';') + ';';
    };
    var getCSSRulesString = function (cssRulesInJs) {
        return Object.entries(cssRulesInJs)
            .map(function (entry) {
            var rule = entry[0], cssInJs = entry[1];
            return "".concat(rule, "{").concat(getCSSString(cssInJs), "}");
        }).join('');
    };
    var getDisplayNoneRulesString = function () {
        var rules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rules[_i] = arguments[_i];
        }
        return rules.map(function (rule) {
            return "".concat(rule, "{display: none !important;}");
        }).join('');
    };
    var getMenuTranslations = function (resources) {
        var entries = Object.entries(MENU_REFERENCES);
        var menuTranslationsEntries = entries.map(function (entry) {
            var reference = entry[0], prop = entry[1];
            return [resources[prop], reference];
        });
        return Object.fromEntries(menuTranslationsEntries);
    };
    var parseVersion = function (version) {
        var versionRegExp = /^(\d+)\.(\d+)\.(\w+)$/;
        var match = version
            ? version.match(versionRegExp)
            : null;
        if (match) {
            return [
                +match[1],
                +match[2],
                match[3]
            ];
        }
        return null;
    };
    var isLegacyVersion = function (version) {
        var parsedVersion = parseVersion(version);
        if (version) {
            return parsedVersion[0] <= 2023 && parsedVersion[1] <= 3;
        }
        return false;
    };

    var APP_TOOLBAR = 'app-toolbar';
    var TOOLBAR = '.toolbar';
    var ACTION_ITEMS = '.action-items';
    var BUTTON_MENU = 'ha-button-menu';
    var OVERFLOW_BUTTON_MENU = 'mwc-list-item';
    var STYLES_COMMON = {
        HEADER: getCSSRulesString({
            '#view': {
                'min-height': '100vh !important',
                '--header-height': '0'
            }
        }),
        ACCOUNT: getDisplayNoneRulesString('.profile'),
        MENU_BUTTON: getDisplayNoneRulesString('.menu ha-icon-button'),
        MENU_BUTTON_BURGER: getDisplayNoneRulesString('ha-menu-button'),
        MOUSE: getCSSRulesString({
            'body::after': {
                'bottom': '0',
                'content': '""',
                'cursor': 'none',
                'display': 'block',
                'left': '0',
                'position': 'fixed',
                'right': '0',
                'top': '0',
                'z-index': '999999'
            }
        })
    };
    var STYLES_LEGACY = {
        HEADER: getCSSRulesString({
            'app-header': {
                'display': 'none'
            }
        }),
        SIDEBAR: getCSSRulesString({
            ':host': {
                '--app-drawer-width': '0 !important'
            },
            '#drawer': {
                'display': 'none'
            }
        }),
        OVERFLOW_MENU: getDisplayNoneRulesString("".concat(APP_TOOLBAR, " > ").concat(BUTTON_MENU)),
        OVERFLOW_MENU_EMPTY_DESKTOP: getDisplayNoneRulesString("".concat(APP_TOOLBAR, " > ").concat(BUTTON_MENU, "[data-lovelace-mode=").concat(LOVELACE_MODE.STORAGE, "][data-children=\"1\"]"), "".concat(APP_TOOLBAR, " > ").concat(BUTTON_MENU, "[data-lovelace-mode=").concat(LOVELACE_MODE.YAML, "][data-children=\"4\"]")),
        OVERFLOW_MENU_EMPTY_MOBILE: getDisplayNoneRulesString("".concat(APP_TOOLBAR, " > ").concat(BUTTON_MENU, "[data-lovelace-mode=").concat(LOVELACE_MODE.STORAGE, "][data-children=\"3\"]"), "".concat(APP_TOOLBAR, " > ").concat(BUTTON_MENU, "[data-lovelace-mode=").concat(LOVELACE_MODE.YAML, "][data-children=\"6\"]")),
        SEARCH: getDisplayNoneRulesString("".concat(APP_TOOLBAR, " > ha-icon-button[data-selector=\"").concat(MENU.SEARCH, "\"]"), "".concat(APP_TOOLBAR, " > ").concat(BUTTON_MENU, " > ").concat(OVERFLOW_BUTTON_MENU, "[data-selector=\"").concat(MENU.SEARCH, "\"]")),
        ASSISTANT: getDisplayNoneRulesString("".concat(APP_TOOLBAR, " > ha-icon-button[data-selector=\"").concat(MENU.ASSIST, "\"]"), "".concat(APP_TOOLBAR, " > ").concat(BUTTON_MENU, " > ").concat(OVERFLOW_BUTTON_MENU, "[data-selector=\"").concat(MENU.ASSIST, "\"]")),
        REFRESH: getDisplayNoneRulesString("".concat(APP_TOOLBAR, " > ").concat(BUTTON_MENU, " > ").concat(OVERFLOW_BUTTON_MENU, "[data-selector=\"").concat(MENU.REFRESH, "\"]")),
        UNUSED_ENTITIES: getDisplayNoneRulesString("".concat(APP_TOOLBAR, " > ").concat(BUTTON_MENU, " > ").concat(OVERFLOW_BUTTON_MENU, "[data-selector=\"").concat(MENU.UNUSED_ENTITIES, "\"]")),
        RELOAD_RESOURCES: getDisplayNoneRulesString("".concat(APP_TOOLBAR, " > ").concat(BUTTON_MENU, " > ").concat(OVERFLOW_BUTTON_MENU, "[data-selector=\"").concat(MENU.RELOAD_RESOURCES, "\"]")),
        EDIT_DASHBOARD: getDisplayNoneRulesString("".concat(APP_TOOLBAR, " > ").concat(BUTTON_MENU, " > ").concat(OVERFLOW_BUTTON_MENU, "[data-selector=\"").concat(MENU.EDIT_DASHBOARD, "\"]"))
    };
    var STYLES = {
        HEADER: getCSSRulesString({
            '.header': {
                'display': 'none'
            }
        }),
        SIDEBAR: getCSSRulesString({
            ':host': {
                '--mdc-drawer-width': '0 !important'
            },
            'partial-panel-resolver': {
                '--mdc-top-app-bar-width': '100% !important'
            },
            'ha-drawer > ha-sidebar': {
                'display': 'none'
            },
            '.header': {
                'width': '100% !important'
            }
        }),
        OVERFLOW_MENU: getDisplayNoneRulesString("".concat(TOOLBAR, " > ").concat(ACTION_ITEMS, " > ").concat(BUTTON_MENU)),
        OVERFLOW_MENU_EMPTY_DESKTOP: getDisplayNoneRulesString("".concat(TOOLBAR, " > ").concat(ACTION_ITEMS, " > ").concat(BUTTON_MENU, "[data-lovelace-mode=").concat(LOVELACE_MODE.STORAGE, "][data-children=\"1\"]"), "".concat(TOOLBAR, " > ").concat(ACTION_ITEMS, " > ").concat(BUTTON_MENU, "[data-lovelace-mode=").concat(LOVELACE_MODE.YAML, "][data-children=\"4\"]")),
        OVERFLOW_MENU_EMPTY_MOBILE: getDisplayNoneRulesString("".concat(TOOLBAR, " > ").concat(ACTION_ITEMS, " > ").concat(BUTTON_MENU, "[data-lovelace-mode=").concat(LOVELACE_MODE.STORAGE, "][data-children=\"3\"]"), "".concat(TOOLBAR, " > ").concat(ACTION_ITEMS, " > ").concat(BUTTON_MENU, "[data-lovelace-mode=").concat(LOVELACE_MODE.YAML, "][data-children=\"6\"]")),
        SEARCH: getDisplayNoneRulesString("".concat(TOOLBAR, " > ").concat(ACTION_ITEMS, " > ha-icon-button[data-selector=\"").concat(MENU.SEARCH, "\"]"), "".concat(TOOLBAR, " > ").concat(ACTION_ITEMS, " > ").concat(BUTTON_MENU, " > ").concat(OVERFLOW_BUTTON_MENU, "[data-selector=\"").concat(MENU.SEARCH, "\"]")),
        ASSISTANT: getDisplayNoneRulesString("".concat(TOOLBAR, " > ").concat(ACTION_ITEMS, " > ha-icon-button[data-selector=\"").concat(MENU.ASSIST, "\"]"), "".concat(TOOLBAR, " > ").concat(ACTION_ITEMS, " > ").concat(BUTTON_MENU, " > ").concat(OVERFLOW_BUTTON_MENU, "[data-selector=\"").concat(MENU.ASSIST, "\"]")),
        REFRESH: getDisplayNoneRulesString("".concat(TOOLBAR, " > ").concat(ACTION_ITEMS, " > ").concat(BUTTON_MENU, " > ").concat(OVERFLOW_BUTTON_MENU, "[data-selector=\"").concat(MENU.REFRESH, "\"]")),
        UNUSED_ENTITIES: getDisplayNoneRulesString("".concat(TOOLBAR, " > ").concat(ACTION_ITEMS, " > ").concat(BUTTON_MENU, " > ").concat(OVERFLOW_BUTTON_MENU, "[data-selector=\"").concat(MENU.UNUSED_ENTITIES, "\"]")),
        RELOAD_RESOURCES: getDisplayNoneRulesString("".concat(TOOLBAR, " > ").concat(ACTION_ITEMS, " > ").concat(BUTTON_MENU, " > ").concat(OVERFLOW_BUTTON_MENU, "[data-selector=\"").concat(MENU.RELOAD_RESOURCES, "\"]")),
        EDIT_DASHBOARD: getDisplayNoneRulesString("".concat(TOOLBAR, " > ").concat(ACTION_ITEMS, " > ").concat(BUTTON_MENU, " > ").concat(OVERFLOW_BUTTON_MENU, "[data-selector=\"").concat(MENU.EDIT_DASHBOARD, "\"]"))
    };
    var getStyles = function (isLegacy) {
        if (isLegacy) {
            return {
                HEADER: "".concat(STYLES_COMMON.HEADER).concat(STYLES_LEGACY.HEADER),
                SIDEBAR: STYLES_LEGACY.SIDEBAR,
                ACCOUNT: STYLES_COMMON.ACCOUNT,
                MENU_BUTTON: STYLES_COMMON.MENU_BUTTON,
                MENU_BUTTON_BURGER: STYLES_COMMON.MENU_BUTTON_BURGER,
                OVERFLOW_MENU: STYLES_LEGACY.OVERFLOW_MENU,
                OVERFLOW_MENU_EMPTY_DESKTOP: STYLES_LEGACY.OVERFLOW_MENU_EMPTY_DESKTOP,
                OVERFLOW_MENU_EMPTY_MOBILE: STYLES_LEGACY.OVERFLOW_MENU_EMPTY_MOBILE,
                SEARCH: STYLES_LEGACY.SEARCH,
                ASSISTANT: STYLES_LEGACY.ASSISTANT,
                REFRESH: STYLES_LEGACY.REFRESH,
                UNUSED_ENTITIES: STYLES_LEGACY.UNUSED_ENTITIES,
                RELOAD_RESOURCES: STYLES_LEGACY.RELOAD_RESOURCES,
                EDIT_DASHBOARD: STYLES_LEGACY.EDIT_DASHBOARD,
                MOUSE: STYLES_COMMON.MOUSE
            };
        }
        return {
            HEADER: "".concat(STYLES_COMMON.HEADER).concat(STYLES.HEADER),
            SIDEBAR: STYLES.SIDEBAR,
            ACCOUNT: STYLES_COMMON.ACCOUNT,
            MENU_BUTTON: STYLES_COMMON.MENU_BUTTON,
            MENU_BUTTON_BURGER: STYLES_COMMON.MENU_BUTTON_BURGER,
            OVERFLOW_MENU: STYLES.OVERFLOW_MENU,
            OVERFLOW_MENU_EMPTY_DESKTOP: STYLES.OVERFLOW_MENU_EMPTY_DESKTOP,
            OVERFLOW_MENU_EMPTY_MOBILE: STYLES.OVERFLOW_MENU_EMPTY_MOBILE,
            SEARCH: STYLES.SEARCH,
            ASSISTANT: STYLES.ASSISTANT,
            REFRESH: STYLES.REFRESH,
            UNUSED_ENTITIES: STYLES.UNUSED_ENTITIES,
            RELOAD_RESOURCES: STYLES.RELOAD_RESOURCES,
            EDIT_DASHBOARD: STYLES.EDIT_DASHBOARD,
            MOUSE: STYLES_COMMON.MOUSE
        };
    };

    var version = "1.7.8";

    var MAX_LENGTH = 27;
    var ConInfo = (function () {
        function ConInfo() {
            this.lines = [
                {
                    content: '%c≡ kiosk-mode',
                    color: 'white',
                    background: '#03a9f4'
                },
                {
                    content: "%cversion ".concat(version)
                }
            ];
        }
        ConInfo.prototype.log = function () {
            var contents = [];
            var styles = [];
            var lastIndex = this.lines.length - 1;
            var commonStyles = {
                'display': 'inline-block',
                'font-size': '12px',
                'border-style': 'solid',
                'border-color': '#424242'
            };
            this.lines.forEach(function (line, index) {
                contents.push(line.content.padEnd(MAX_LENGTH));
                contents.push('%c⋮');
                if (index !== lastIndex)
                    contents.push('%c\n');
                var borderWidthStart = '0 0 0 1px';
                var borderWidthEnd = '0 1px 0 1px';
                if (lastIndex === 0) {
                    borderWidthStart = '1px 0 1px 1px';
                    borderWidthEnd = '1px 1px 1px 0';
                }
                else if (index === 0) {
                    borderWidthStart = '1px 0 0 1px';
                    borderWidthEnd = '1px 1px 0 0';
                }
                else if (index === lastIndex) {
                    borderWidthStart = '0 0 1px 1px';
                    borderWidthEnd = '0 1px 1px 0';
                }
                styles.push(getCSSString(__assign(__assign({}, commonStyles), { 'background': line.background || 'white', 'color': line.color || '#424242', 'padding': index === 0
                        ? '5px 0 5px 5px'
                        : '7px 0 7px 10px', 'border-width': borderWidthStart })));
                styles.push(getCSSString(__assign(__assign({}, commonStyles), { 'background': line.background || 'white', 'color': line.color || 'white', 'padding': index === 0
                        ? '5px'
                        : '7px 5px 7px 0px', 'border-width': borderWidthEnd })));
                if (index !== lastIndex)
                    styles.push('');
            });
            console.info.apply(console, __spreadArray([contents.join('')], styles, false));
        };
        return ConInfo;
    }());

    var KioskMode = (function () {
        function KioskMode() {
            var _a, _b;
            window.kioskModeEntities = {};
            if (queryString(OPTION.CLEAR_CACHE)) {
                setCache([
                    CACHE.HEADER,
                    CACHE.SIDEBAR,
                    CACHE.OVERFLOW,
                    CACHE.MENU_BUTTON,
                    CACHE.ACCOUNT,
                    CACHE.SEARCH,
                    CACHE.ASSISTANT,
                    CACHE.REFRESH,
                    CACHE.UNUSED_ENTITIES,
                    CACHE.RELOAD_RESOURCES,
                    CACHE.EDIT_DASHBOARD,
                    CACHE.MOUSE
                ], FALSE);
            }
            this.ha = document.querySelector(ELEMENT.HOME_ASSISTANT);
            this.language = this.ha.hass.language;
            this.menuTranslations = getMenuTranslations(this.ha.hass.resources[this.language]);
            this.main = this.ha.shadowRoot.querySelector(ELEMENT.HOME_ASSISTANT_MAIN).shadowRoot;
            this.user = this.ha.hass.user;
            this.isLegacy = isLegacyVersion((_b = (_a = this.ha.hass) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.version);
            this.llAttempts = 0;
            this.resizeWindowBinded = this.resizeWindow.bind(this);
            this.run();
            this.entityWatch();
            new MutationObserver(this.watchDashboards).observe(this.main.querySelector(ELEMENT.PARTIAL_PANEL_RESOLVER), {
                childList: true
            });
        }
        KioskMode.prototype.run = function (lovelace) {
            if (lovelace === void 0) { lovelace = this.main.querySelector(ELEMENT.HA_PANEL_LOVELACE); }
            if (queryString(OPTION.DISABLE_KIOSK_MODE) || !lovelace) {
                return;
            }
            this.lovelace = lovelace;
            this.getConfig();
        };
        KioskMode.prototype.getConfig = function () {
            var _this = this;
            this.llAttempts++;
            try {
                var llConfig = this.lovelace.lovelace.config;
                var config = llConfig.kiosk_mode || {};
                this.processConfig(config);
            }
            catch (e) {
                if (this.llAttempts < 200) {
                    setTimeout(function () { return _this.getConfig(); }, 50);
                }
                else {
                    console.log('Lovelace config not found, continuing with default configuration.');
                    console.log(e);
                    this.processConfig({});
                }
            }
        };
        KioskMode.prototype.processConfig = function (config) {
            var _this = this;
            var dash = this.ha.hass.panelUrl;
            if (!window.kioskModeEntities[dash]) {
                window.kioskModeEntities[dash] = [];
            }
            this.hideHeader = false;
            this.hideSidebar = false;
            this.hideOverflow = false;
            this.hideMenuButton = false;
            this.hideAccount = false;
            this.hideSearch = false;
            this.hideAssistant = false;
            this.hideRefresh = false;
            this.hideUnusedEntities = false;
            this.hideReloadResources = false;
            this.hideEditDashboard = false;
            this.blockMouse = false;
            this.ignoreEntity = false;
            this.ignoreMobile = false;
            this.mode = this.lovelace.lovelace.mode;
            this.huiRoot = this.lovelace.shadowRoot.querySelector(ELEMENT.HUI_ROOT).shadowRoot;
            if (this.isLegacy) {
                this.drawerLayout = this.main.querySelector(ELEMENT.APP_DRAWER_LAYOUT);
                this.appToolbar = this.huiRoot.querySelector(ELEMENT.APP_TOOLBAR);
                var appDrawer = this.drawerLayout.querySelector(ELEMENT.APP_DRAWER);
                this.sideBarRoot = appDrawer.querySelector(ELEMENT.HA_SIDEBAR).shadowRoot;
                this.overlayMenu = this.appToolbar.querySelector(":scope > ".concat(ELEMENT.OVERLAY_MENU));
            }
            else {
                this.drawerLayout = this.main.querySelector(ELEMENT.HA_DRAWER);
                this.appToolbar = this.huiRoot.querySelector(ELEMENT.TOOLBAR);
                this.sideBarRoot = this.drawerLayout.querySelector(ELEMENT.HA_SIDEBAR).shadowRoot;
                this.overlayMenu = this.appToolbar.querySelector(":scope > ".concat(ELEMENT.ACTION_ITEMS, " > ").concat(ELEMENT.OVERLAY_MENU));
            }
            var queryStringsSet = (cached([
                CACHE.HEADER,
                CACHE.SIDEBAR,
                CACHE.OVERFLOW,
                CACHE.MENU_BUTTON,
                CACHE.ACCOUNT,
                CACHE.SEARCH,
                CACHE.ASSISTANT,
                CACHE.REFRESH,
                CACHE.UNUSED_ENTITIES,
                CACHE.RELOAD_RESOURCES,
                CACHE.EDIT_DASHBOARD,
                CACHE.MOUSE
            ]) ||
                queryString([
                    OPTION.KIOSK,
                    OPTION.HIDE_HEADER,
                    OPTION.HIDE_SIDEBAR,
                    OPTION.HIDE_OVERFLOW,
                    OPTION.HIDE_MENU_BUTTON,
                    OPTION.HIDE_ACCOUNT,
                    OPTION.HIDE_SEARCH,
                    OPTION.HIDE_ASSISTANT,
                    OPTION.HIDE_REFRESH,
                    OPTION.HIDE_RELOAD_RESOURCES,
                    OPTION.HIDE_UNUSED_ENTITIES,
                    OPTION.HIDE_EDIT_DASHBOARD,
                    OPTION.BLOCK_MOUSE
                ]));
            if (queryStringsSet) {
                this.hideHeader = cached(CACHE.HEADER) || queryString([OPTION.KIOSK, OPTION.HIDE_HEADER]);
                this.hideSidebar = cached(CACHE.SIDEBAR) || queryString([OPTION.KIOSK, OPTION.HIDE_SIDEBAR]);
                this.hideOverflow = cached(CACHE.OVERFLOW) || queryString([OPTION.KIOSK, OPTION.HIDE_OVERFLOW]);
                this.hideMenuButton = cached(CACHE.MENU_BUTTON) || queryString([OPTION.KIOSK, OPTION.HIDE_MENU_BUTTON]);
                this.hideAccount = cached(CACHE.ACCOUNT) || queryString([OPTION.KIOSK, OPTION.HIDE_ACCOUNT]);
                this.hideSearch = cached(CACHE.SEARCH) || queryString([OPTION.KIOSK, OPTION.HIDE_SEARCH]);
                this.hideAssistant = cached(CACHE.ASSISTANT) || queryString([OPTION.KIOSK, OPTION.HIDE_ASSISTANT]);
                this.hideRefresh = cached(CACHE.REFRESH) || queryString([OPTION.KIOSK, OPTION.HIDE_REFRESH]);
                this.hideUnusedEntities = cached(CACHE.UNUSED_ENTITIES) || queryString([OPTION.KIOSK, OPTION.HIDE_UNUSED_ENTITIES]);
                this.hideReloadResources = cached(CACHE.RELOAD_RESOURCES) || queryString([OPTION.KIOSK, OPTION.HIDE_RELOAD_RESOURCES]);
                this.hideEditDashboard = cached(CACHE.EDIT_DASHBOARD) || queryString([OPTION.KIOSK, OPTION.HIDE_EDIT_DASHBOARD]);
                this.blockMouse = cached(CACHE.MOUSE) || queryString([OPTION.BLOCK_MOUSE]);
            }
            this.hideHeader = queryStringsSet
                ? this.hideHeader
                : config.kiosk || config.hide_header;
            this.hideSidebar = queryStringsSet
                ? this.hideSidebar
                : config.kiosk || config.hide_sidebar;
            this.hideOverflow = queryStringsSet
                ? this.hideOverflow
                : config.kiosk || config.hide_overflow;
            this.hideMenuButton = queryStringsSet
                ? this.hideMenuButton
                : config.kiosk || config.hide_menubutton;
            this.hideAccount = queryStringsSet
                ? this.hideAccount
                : config.kiosk || config.hide_account;
            this.hideSearch = queryStringsSet
                ? this.hideSearch
                : config.kiosk || config.hide_search;
            this.hideAssistant = queryStringsSet
                ? this.hideAssistant
                : config.kiosk || config.hide_assistant;
            this.hideRefresh = queryStringsSet
                ? this.hideRefresh
                : config.kiosk || config.hide_refresh;
            this.hideUnusedEntities = queryStringsSet
                ? this.hideUnusedEntities
                : config.kiosk || config.hide_unused_entities;
            this.hideReloadResources = queryStringsSet
                ? this.hideReloadResources
                : config.kiosk || config.hide_reload_resources;
            this.hideEditDashboard = queryStringsSet
                ? this.hideEditDashboard
                : config.kiosk || config.hide_edit_dashboard;
            this.blockMouse = queryStringsSet
                ? this.blockMouse
                : config.block_mouse;
            var adminConfig = this.user.is_admin
                ? config.admin_settings
                : config.non_admin_settings;
            if (adminConfig) {
                this.setOptions(adminConfig);
            }
            if (config.user_settings) {
                toArray(config.user_settings).forEach(function (conf) {
                    if (toArray(conf.users).some(function (x) { return x.toLowerCase() === _this.user.name.toLowerCase(); })) {
                        _this.setOptions(conf);
                    }
                });
            }
            var mobileConfig = this.ignoreMobile
                ? null
                : config.mobile_settings;
            if (mobileConfig) {
                var mobileWidth = mobileConfig.custom_width
                    ? mobileConfig.custom_width
                    : CUSTOM_MOBILE_WIDTH_DEFAULT;
                if (window.innerWidth <= mobileWidth) {
                    this.setOptions(mobileConfig);
                }
            }
            var entityConfig = this.ignoreEntity
                ? null
                : config.entity_settings;
            if (entityConfig) {
                for (var _i = 0, entityConfig_1 = entityConfig; _i < entityConfig_1.length; _i++) {
                    var conf = entityConfig_1[_i];
                    var entity = Object.keys(conf.entity)[0];
                    if (!window.kioskModeEntities[dash].includes(entity))
                        window.kioskModeEntities[dash].push(entity);
                    if (this.ha.hass.states[entity].state == conf.entity[entity]) {
                        if (OPTION.HIDE_HEADER in conf)
                            this.hideHeader = conf[OPTION.HIDE_HEADER];
                        if (OPTION.HIDE_SIDEBAR in conf)
                            this.hideSidebar = conf[OPTION.HIDE_SIDEBAR];
                        if (OPTION.HIDE_OVERFLOW in conf)
                            this.hideOverflow = conf[OPTION.HIDE_OVERFLOW];
                        if (OPTION.HIDE_MENU_BUTTON in conf)
                            this.hideMenuButton = conf[OPTION.HIDE_MENU_BUTTON];
                        if (OPTION.HIDE_ACCOUNT in conf)
                            this.hideAccount = conf[OPTION.HIDE_ACCOUNT];
                        if (OPTION.HIDE_SEARCH in conf)
                            this.hideSearch = conf[OPTION.HIDE_SEARCH];
                        if (OPTION.HIDE_ASSISTANT in conf)
                            this.hideAssistant = conf[OPTION.HIDE_ASSISTANT];
                        if (OPTION.HIDE_REFRESH in conf)
                            this.hideRefresh = conf[OPTION.HIDE_REFRESH];
                        if (OPTION.HIDE_UNUSED_ENTITIES in conf)
                            this.hideUnusedEntities = conf[OPTION.HIDE_UNUSED_ENTITIES];
                        if (OPTION.HIDE_RELOAD_RESOURCES in conf)
                            this.hideReloadResources = conf[OPTION.HIDE_RELOAD_RESOURCES];
                        if (OPTION.HIDE_EDIT_DASHBOARD in conf)
                            this.hideEditDashboard = conf[OPTION.HIDE_EDIT_DASHBOARD];
                        if (OPTION.BLOCK_MOUSE in conf)
                            this.blockMouse = conf[OPTION.BLOCK_MOUSE];
                        if (OPTION.KIOSK in conf)
                            this.hideHeader = this.hideSidebar = conf[OPTION.KIOSK];
                    }
                }
            }
            this.insertStyles();
        };
        KioskMode.prototype.insertStyles = function () {
            var STYLES = getStyles(this.isLegacy);
            if (this.hideHeader) {
                addStyle(STYLES.HEADER, this.huiRoot);
                if (queryString(OPTION.CACHE))
                    setCache(CACHE.HEADER, TRUE);
            }
            else {
                removeStyle(this.huiRoot);
            }
            if (this.hideSidebar) {
                addStyle(STYLES.SIDEBAR, this.drawerLayout);
                if (queryString(OPTION.CACHE))
                    setCache(CACHE.SIDEBAR, TRUE);
            }
            else {
                removeStyle(this.drawerLayout);
            }
            if (this.hideAccount ||
                this.hideMenuButton) {
                var styles = [
                    this.hideAccount ? STYLES.ACCOUNT : '',
                    this.hideMenuButton ? STYLES.MENU_BUTTON : ''
                ];
                addStyle(styles.join(''), this.sideBarRoot);
                if (this.hideAccount && queryString(OPTION.CACHE))
                    setCache(CACHE.ACCOUNT, TRUE);
            }
            else {
                removeStyle(this.sideBarRoot);
            }
            if (this.hideSearch ||
                this.hideAssistant ||
                this.hideRefresh ||
                this.hideUnusedEntities ||
                this.hideReloadResources ||
                this.hideEditDashboard ||
                this.hideMenuButton ||
                this.hideOverflow ||
                this.hideSidebar) {
                var styles = [
                    this.hideSearch ? STYLES.SEARCH : '',
                    this.hideAssistant ? STYLES.ASSISTANT : '',
                    this.hideRefresh ? STYLES.REFRESH : '',
                    this.hideUnusedEntities ? STYLES.UNUSED_ENTITIES : '',
                    this.hideReloadResources ? STYLES.RELOAD_RESOURCES : '',
                    this.hideEditDashboard ? STYLES.EDIT_DASHBOARD : '',
                    this.hideOverflow ? STYLES.OVERFLOW_MENU : '',
                    this.hideEditDashboard &&
                        (this.mode === LOVELACE_MODE.STORAGE ||
                            (this.mode === LOVELACE_MODE.YAML &&
                                this.hideRefresh &&
                                this.hideUnusedEntities &&
                                this.hideReloadResources))
                        ? STYLES.OVERFLOW_MENU_EMPTY_DESKTOP
                        : '',
                    this.hideSearch &&
                        this.hideAssistant &&
                        this.hideEditDashboard &&
                        (this.mode === LOVELACE_MODE.STORAGE ||
                            (this.mode === LOVELACE_MODE.YAML &&
                                this.hideRefresh &&
                                this.hideUnusedEntities &&
                                this.hideReloadResources))
                        ? STYLES.OVERFLOW_MENU_EMPTY_MOBILE
                        : '',
                    this.hideMenuButton || this.hideSidebar ? STYLES.MENU_BUTTON_BURGER : '',
                ];
                addStyle(styles.join(''), this.appToolbar);
                if (queryString(OPTION.CACHE)) {
                    if (this.hideSearch)
                        setCache(CACHE.SEARCH, TRUE);
                    if (this.hideAssistant)
                        setCache(CACHE.ASSISTANT, TRUE);
                    if (this.hideRefresh)
                        setCache(CACHE.REFRESH, TRUE);
                    if (this.hideUnusedEntities)
                        setCache(CACHE.UNUSED_ENTITIES, TRUE);
                    if (this.hideReloadResources)
                        setCache(CACHE.RELOAD_RESOURCES, TRUE);
                    if (this.hideEditDashboard)
                        setCache(CACHE.EDIT_DASHBOARD, TRUE);
                    if (this.hideOverflow)
                        setCache(CACHE.OVERFLOW, TRUE);
                    if (this.hideMenuButton)
                        setCache(CACHE.MENU_BUTTON, TRUE);
                }
            }
            else {
                removeStyle(this.appToolbar);
            }
            if (this.blockMouse) {
                addStyle(STYLES.MOUSE, document.body);
                if (queryString(OPTION.CACHE))
                    setCache(CACHE.MOUSE, TRUE);
            }
            else {
                removeStyle(document.body);
            }
            window.removeEventListener('resize', this.resizeWindowBinded);
            window.addEventListener('resize', this.resizeWindowBinded);
            window.dispatchEvent(new Event('resize'));
            this.llAttempts = 0;
        };
        KioskMode.prototype.resizeWindow = function () {
            var _this = this;
            window.clearTimeout(this.resizeDelay);
            this.resizeDelay = window.setTimeout(function () {
                _this.updateMenuItemsLabels();
            }, WINDOW_RESIZE_DELAY);
        };
        KioskMode.prototype.watchDashboards = function (mutations) {
            mutations.forEach(function (_a) {
                var addedNodes = _a.addedNodes;
                addedNodes.forEach(function (node) {
                    if (node.localName === ELEMENT.HA_PANEL_LOVELACE) {
                        window.KioskMode.run(node);
                    }
                });
            });
        };
        KioskMode.prototype.updateMenuItemsLabels = function () {
            var _this = this;
            var menuItems = this.isLegacy
                ? this.appToolbar.querySelectorAll(":scope > ".concat(ELEMENT.MENU_ITEM))
                : this.appToolbar.querySelectorAll(":scope > ".concat(ELEMENT.ACTION_ITEMS, " > ").concat(ELEMENT.MENU_ITEM));
            var overflowMenuItems = this.appToolbar.querySelectorAll(ELEMENT.OVERLAY_MENU_ITEM);
            menuItems.forEach(function (menuItem) {
                if (!menuItem.dataset.selector) {
                    var icon = menuItem.shadowRoot.querySelector(ELEMENT.MENU_ITEM_ICON);
                    menuItem.dataset.selector = _this.menuTranslations[icon.title];
                }
            });
            overflowMenuItems.forEach(function (overflowMenuItem) {
                if (!overflowMenuItem.dataset.selector) {
                    var textContent = overflowMenuItem.textContent.trim();
                    overflowMenuItem.dataset.selector = _this.menuTranslations[textContent];
                }
            });
            this.overlayMenu.dataset.children = "".concat(overflowMenuItems.length);
            if (!this.overlayMenu.dataset.lovelaceMode) {
                this.overlayMenu.dataset.lovelaceMode = this.mode;
            }
        };
        KioskMode.prototype.entityWatch = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, window.hassConnection];
                        case 1:
                            (_a.sent()).conn.subscribeMessage(function (e) { return _this.entityWatchCallback(e); }, {
                                type: SUSCRIBE_EVENTS_TYPE,
                                event_type: STATE_CHANGED_EVENT
                            });
                            return [2];
                    }
                });
            });
        };
        KioskMode.prototype.entityWatchCallback = function (event) {
            var entities = window.kioskModeEntities[this.ha.hass.panelUrl] || [];
            if (entities.length &&
                event.event_type === STATE_CHANGED_EVENT &&
                entities.includes(event.data.entity_id) &&
                (!event.data.old_state || event.data.new_state.state !== event.data.old_state.state)) {
                this.run();
            }
        };
        KioskMode.prototype.setOptions = function (config) {
            this.hideHeader = config.kiosk || config.hide_header;
            this.hideSidebar = config.kiosk || config.hide_sidebar;
            this.hideOverflow = config.kiosk || config.hide_overflow;
            this.hideMenuButton = config.kiosk || config.hide_menubutton;
            this.hideAccount = config.kiosk || config.hide_account;
            this.hideSearch = config.kiosk || config.hide_search;
            this.hideAssistant = config.kiosk || config.hide_assistant;
            this.hideRefresh = config.kiosk || config.hide_refresh;
            this.hideUnusedEntities = config.kiosk || config.hide_unused_entities;
            this.hideReloadResources = config.kiosk || config.hide_reload_resources;
            this.hideEditDashboard = config.kiosk || config.hide_edit_dashboard;
            this.blockMouse = config.block_mouse;
            this.ignoreEntity = config.ignore_entity_settings;
            this.ignoreMobile = config.ignore_mobile_settings;
        };
        return KioskMode;
    }());
    var info = new ConInfo();
    info.log();
    Promise.resolve(customElements.whenDefined(ELEMENT.HUI_VIEW))
        .then(function () {
        window.KioskMode = new KioskMode();
    });

})();
