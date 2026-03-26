"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=u(function(M,v){
function o(r){var e,a,i;return r===0?.16666666666666666:(r<0?e=-r:e=r,e<=1?(a=-351754.9648081514+r*(-11561.443576500522+r*(-163.72585752598383+r*-.789474443963537)),i=-2.1105297888489086e6+r*(36157.827983443196+r*(-277.7110814206028+r*1))):(r=1/r,a=-.789474443963537+r*(-163.72585752598383+r*(-11561.443576500522+r*-351754.9648081514)),i=1+r*(-277.7110814206028+r*(36157.827983443196+r*-2.1105297888489086e6))),a/i)}v.exports=o
});var O=u(function(P,q){
var L=require('@stdlib/constants-float64-pinf/dist'),N=require('@stdlib/constants-float64-ninf/dist'),c=require('@stdlib/math-base-special-abs/dist'),n=require('@stdlib/math-base-special-exp/dist'),t=require('@stdlib/constants-float64-ln-two/dist'),l=s(),f=709.782712893384,p=-708.3964185322641,E=f+t,F=p-t,G=f-t;function I(r){var e;return r===0?r:r>E||r<F?r>0?L:N:(e=c(r),e>1?e>=G?(e=n(.5*e),e*=.5*e,r<0&&(e=-e),e):(e=n(e),e=.5*e-.5/e,r<0&&(e=-e),e):(e*=e,r+r*e*l(e)))}q.exports=I
});var R=O();module.exports=R;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
