!function(e){function n(t){if(r[t])return r[t].exports;var o=r[t]={exports:{},id:t,loaded:!1};return e[t].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=e,n.c=r,n.p="./",n(0)}([function(e,n,r){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function s(e){return Array.isArray(e)?e:Array.from(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.decode=n.getAnsiClasses=void 0;var u=o(["",""],["",""]),a=r(1),i=t(a),l=/(?:\033)(?:\[0?c|\[[0356]n|\[7[lh]|\[\?25[lh]|\(B|H|\[(?:\d+(;\d+){,2})?G|\[(?:[12])?[JK]|[DM]|\[0K)/gm,c=/\033\[1000D/gm,d=/\r[\n]?/gm,f=/^/gm,p=13,g=10,h=19,v=1e3,b=new TextDecoder("utf-8"),y=new TextEncoder("utf-8"),m=883e3/v,x=/[&<>'"]/g,w={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;","`":"&#x60;"},E=function(e){return w[e]},L=new Uint8Array(0),k=0,M=[],O=[],j=[],A=n.getAnsiClasses=function(e){var n=[];return e.foreground&&n.push(e.foreground),e.background&&n.push("bg-"+e.background),e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),n.join(" ")},C=n.decode=function(e){return b.decode(new DataView(e.buffer)).replace(c,"\r").replace(d,"\n").replace(l,"").split(f).map(i["default"])},T=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return new Promise(function(r,t){var o=new XMLHttpRequest;o.open("GET",e);var s=setTimeout(function(){u(s),t(o)},n?1e4:6e4),u=function(e){clearTimeout(e),o.removeEventListener("progress",a),o.removeEventListener("load",a)},a=function(){o.response&&(u(s),r(o))};o.overrideMimeType("text/plain; charset=utf-8"),o.addEventListener("progress",a),o.addEventListener("load",a),o.addEventListener("error",function(){u(s),t(o)}),n&&(o.responseType="arraybuffer"),o.send()})},J=function(e){T(e).then(function(e){e.response&&(S(e.response),N())})["catch"](function(n){n&&n.abort&&n.abort(),T(e,!1).then(function(e){e.addEventListener("error",_),e.addEventListener("progress",function(){e.response&&S(y.encode(e.response))}),e.addEventListener("load",function(){e.response&&(S(y.encode(e.response)),N())})})["catch"](function(e){e&&e.abort&&e.abort(),_()})})},S=function(e){var n=new Uint8Array(e),r=n.length;if(L.length!==r){L=n;var t=0,o=0;M=[],O=[];for(var s=0;s<r;s++){var u=L[s]===p||L[s]===g&&L[s-1]!==p;u&&t++,t===v&&(M.push(L.slice(o,s)),O.push(v*h),j.push(t),o=s+1,t=0)}o<r&&(M.push(L.slice(o,r)),O.push(t*h),j.push(t));var a=0;M.length>m&&(a=M.length-m,k=v*a,M=M.slice(a),O=O.slice(a),j=j.slice(a)),self.postMessage(JSON.stringify({type:"update",chunkHeights:O,offset:k,minLineHeight:h}))}},_=function(){return self.postMessage(JSON.stringify({type:"error"}))},N=function(){return self.postMessage(JSON.stringify({type:"loadend"}))},D=function(e,n){var r=n.highlightStart,t=n.highlightEnd;return e>=r&&e<=t?' class="highlight"':""},H=function(e){return e.replace(x,E)},P=function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];var o=s(e),u=o[0],a=o.slice(1);return r.reduce(function(e,n,r){return""+e+H(n)+a[r]},u)},q=function(e,n){var r=C(M[e]),t=v*e+k+1,o=r.map(function(e,r){var o=t+r,s=D(o,n);return"<p"+s+'><a id="'+o+'">'+o+"</a>"+e.map(function(e){var n=A(e),r=P(u,e.text);return n?'<span class="'+n+'">'+r+"</span>":"<span>"+r+"</span>"}).join("")+"</p>"}).join("");self.postMessage(JSON.stringify({type:"decoded-index",index:e,html:o}))};self.addEventListener("message",function(e){try{var n=JSON.parse(e.data);switch(n.type){case"start":return J(n.url);case"decode-index":return q(n.index,n.metadata)}}catch(r){return r}})},function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={foregroundColors:{30:"black",31:"red",32:"green",33:"yellow",34:"blue",35:"magenta",36:"cyan",37:"white",90:"grey"},backgroundColors:{40:"black",41:"red",42:"green",43:"yellow",44:"blue",45:"magenta",46:"cyan",47:"white"},styles:{1:"bold",3:"italic",4:"underline"}};n["default"]=function(e){var n,t=null,o=null,s="",u=[],a=[],i={};n=function(){var e,n;s.length?s=s.substr(0,s.length-1):a.length&&(e=a.length-1,n=a[e].text,1===n.length?a.pop():a[e].text=n.substr(0,n.length-1))};for(var l=0;l<e.length;l++)null==t?null==o?""==e[l]?t=e[l]:"\b"==e[l]?n():s+=e[l]:";"==e[l]?(u.push(o),o=""):"m"==e[l]?(u.push(o),o=null,s="",u.forEach(function(e){r.foregroundColors[e]?i.foreground=r.foregroundColors[e]:r.backgroundColors[e]?i.background=r.backgroundColors[e]:39==e?delete i.foreground:49==e?delete i.background:r.styles[e]?i[r.styles[e]]=!0:22==e?i.bold=!1:23==e?i.italic=!1:24==e&&(i.underline=!1)}),u=[]):o+=e[l]:""==t&&"["==e[l]?(s&&(i.text=s,a.push(i),i={},s=""),t=null,o=""):(s+=t+e[l],t=null);return s&&(i.text=s+(t?t:""),a.push(i)),a}}]);