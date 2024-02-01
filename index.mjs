// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ln-two@v0.1.1-esm/index.mjs";var r=709.782712893384+i,m=-708.3964185322641-i,d=709.782712893384-i;function o(i){var o;return 0===i?i:i>r||i<m?i>0?t:s:(o=n(i))>1?o>=d?(o=e(.5*o),o*=.5*o,i<0&&(o=-o),o):(o=.5*(o=e(o))-.5/o,i<0&&(o=-o),o):i+i*(o*=o)*function(t){var s,n;return 0===t?.16666666666666666:((t<0?-t:t)<=1?(s=t*(t*(-.789474443963537*t-163.72585752598383)-11561.443576500522)-351754.9648081514,n=t*(36157.827983443196+t*(1*t-277.7110814206028))-2110529.7888489086):(s=(t=1/t)*(t*(-351754.9648081514*t-11561.443576500522)-163.72585752598383)-.789474443963537,n=1+t*(t*(36157.827983443196+-2110529.7888489086*t)-277.7110814206028)),s/n)}(o)}export{o as default};
//# sourceMappingURL=index.mjs.map
