// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ln-two@esm/index.mjs";var r=t,m=s,d=n,o=e,a=function(t){var s,n;return 0===t?.16666666666666666:((t<0?-t:t)<=1?(s=t*(t*(-.789474443963537*t-163.72585752598383)-11561.443576500522)-351754.9648081514,n=t*(36157.827983443196+t*(1*t-277.7110814206028))-2110529.7888489086):(s=(t=1/t)*(t*(-351754.9648081514*t-11561.443576500522)-163.72585752598383)-.789474443963537,n=1+t*(t*(36157.827983443196+-2110529.7888489086*t)-277.7110814206028)),s/n)},l=709.782712893384+i,j=-708.3964185322641-i,p=709.782712893384-i;var f=function(t){var s;return 0===t?t:(s=d(t),t>l||t<j?t>0?r:m:s>1?s>=p?(s=o(.5*s),s*=.5*s,t<0&&(s=-s),s):(s=.5*(s=o(s))-.5/s,t<0&&(s=-s),s):t+t*(s*=s)*a(s))};export{f as default};
//# sourceMappingURL=index.mjs.map
