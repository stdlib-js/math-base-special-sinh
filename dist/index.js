"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var s=u(function(M,v){
function o(e){var r,a,i;return e===0?.16666666666666666:(e<0?r=-e:r=e,r<=1?(a=-351754.9648081514+e*(-11561.443576500522+e*(-163.72585752598383+e*-.789474443963537)),i=-2.1105297888489086e6+e*(36157.827983443196+e*(-277.7110814206028+e*1))):(e=1/e,a=-.789474443963537+e*(-163.72585752598383+e*(-11561.443576500522+e*-351754.9648081514)),i=1+e*(-277.7110814206028+e*(36157.827983443196+e*-2.1105297888489086e6))),a/i)}v.exports=o
});var O=u(function(P,q){
var L=require('@stdlib/constants-float64-pinf/dist'),N=require('@stdlib/constants-float64-ninf/dist'),c=require('@stdlib/math-base-special-abs/dist'),n=require('@stdlib/math-base-special-exp/dist'),t=require('@stdlib/constants-float64-ln-two/dist'),l=s(),f=709.782712893384,p=-708.3964185322641,E=f+t,F=p-t,G=f-t;function I(e){var r;return e===0?e:e>E||e<F?e>0?L:N:(r=c(e),r>1?r>=G?(r=n(.5*r),r*=.5*r,e<0&&(r=-r),r):(r=n(r),r=.5*r-.5/r,e<0&&(r=-r),r):(r*=r,e+e*r*l(r)))}q.exports=I
});var R=O();module.exports=R;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
