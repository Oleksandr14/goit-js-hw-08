!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var r,o,a,u,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function T(e){return l=e,f=setTimeout(w,t),s?b(e):u}function h(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function w(){var e=p();if(h(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-c);return d?g(n,a-(e-l)):n}(e))}function O(e){return f=void 0,v&&r?b(e):(r=o=void 0,u)}function S(){var e=p(),n=h(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return T(c);if(d)return f=setTimeout(w,t),b(c)}return void 0===f&&(f=setTimeout(w,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},S.flush=function(){return void 0===f?u:O(p())},S}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?c(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};var T,h=document.querySelector(".feedback-form"),w="feedback-form-state";h.addEventListener("submit",(function(e){e.preventDefault(),new FormData(h).forEach((function(e,t){return console.log("".concat(t," : ").concat(e))})),localStorage.removeItem(w),e.currentTarget.reset()})),h.addEventListener("input",e(t)((function(e){var t=e.currentTarget.elements,n=t.email.value,r=t.message.value,i={email:n,message:r};localStorage.setItem(w,JSON.stringify(i))}),500)),(T=JSON.parse(localStorage.getItem(w)))&&(h.elements.email.value=T.email,h.elements.message.value=T.message)}();
//# sourceMappingURL=03-feedback.dcc3fd2b.js.map
