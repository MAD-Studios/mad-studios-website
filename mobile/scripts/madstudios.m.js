/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});

/*
 * NETEYE Activity Indicator jQuery Plugin
 *
 * Copyright (c) 2010 NETEYE GmbH
 * Licensed under the MIT license
 *
 * Author: Felix Gnass [fgnass at neteye dot de]
 * Version: 1.0.0
 */
(function($){$.fn.activity=function(opts){this.each(function(){var $this=$(this);var el=$this.data("activity");if(el){clearInterval(el.data("interval"));el.remove();$this.removeData("activity");}if(opts!==false){opts=$.extend({color:$this.css("color")},$.fn.activity.defaults,opts);el=render($this,opts).css("position","absolute").prependTo(opts.outside?"body":$this);var h=$this.outerHeight()-el.height();var w=$this.outerWidth()-el.width();var margin={top:opts.valign=="top"?opts.padding:opts.valign=="bottom"?h-opts.padding:Math.floor(h/2),left:opts.align=="left"?opts.padding:opts.align=="right"?w-opts.padding:Math.floor(w/2)};var offset=$this.offset();if(opts.outside){el.css({top:offset.top+"px",left:offset.left+"px"});}else{margin.top-=el.offset().top-offset.top;margin.left-=el.offset().left-offset.left;}el.css({marginTop:margin.top+"px",marginLeft:margin.left+"px"});animate(el,opts.segments,Math.round(10/opts.speed)/10);$this.data("activity",el);}});return this;};$.fn.activity.defaults={segments:12,space:3,length:7,width:4,speed:1.2,align:"center",valign:"center",padding:4};$.fn.activity.getOpacity=function(opts,i){var steps=opts.steps||opts.segments-1;var end=opts.opacity!==undefined?opts.opacity:1/steps;return 1-Math.min(i,steps)*(1-end)/steps;};var render=function(){return $("<div>").addClass("busy");};var animate=function(){};function svg(tag,attr){var el=document.createElementNS("http://www.w3.org/2000/svg",tag||"svg");if(attr){$.each(attr,function(k,v){el.setAttributeNS(null,k,v);});}return $(el);}if(document.createElementNS&&document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect){render=function(target,d){var innerRadius=d.width*2+d.space;var r=(innerRadius+d.length+Math.ceil(d.width/2)+1);var el=svg().width(r*2).height(r*2);var g=svg("g",{"stroke-width":d.width,"stroke-linecap":"round",stroke:d.color}).appendTo(svg("g",{transform:"translate("+r+","+r+")"}).appendTo(el));for(var i=0;i<d.segments;i++){g.append(svg("line",{x1:0,y1:innerRadius,x2:0,y2:innerRadius+d.length,transform:"rotate("+(360/d.segments*i)+", 0, 0)",opacity:$.fn.activity.getOpacity(d,i)}));}return $("<div>").append(el).width(2*r).height(2*r);};if(document.createElement("div").style.WebkitAnimationName!==undefined){var animations={};animate=function(el,steps,duration){if(!animations[steps]){var name="spin"+steps;var rule="@-webkit-keyframes "+name+" {";for(var i=0;i<steps;i++){var p1=Math.round(100000/steps*i)/1000;var p2=Math.round(100000/steps*(i+1)-1)/1000;var value="% { -webkit-transform:rotate("+Math.round(360/steps*i)+"deg); }\n";rule+=p1+value+p2+value;}rule+="100% { -webkit-transform:rotate(100deg); }\n}";document.styleSheets[0].insertRule(rule);animations[steps]=name;}el.css("-webkit-animation",animations[steps]+" "+duration+"s linear infinite");};}else{animate=function(el,steps,duration){var rotation=0;var g=el.find("g g").get(0);el.data("interval",setInterval(function(){g.setAttributeNS(null,"transform","rotate("+(++rotation%steps*(360/steps))+")");},duration*1000/steps));};}}else{var s=$("<shape>").css("behavior","url(#default#VML)").appendTo("body");if(s.get(0).adj){var sheet=document.createStyleSheet();$.each(["group","shape","stroke"],function(){sheet.addRule(this,"behavior:url(#default#VML);");});render=function(target,d){var innerRadius=d.width*2+d.space;var r=(innerRadius+d.length+Math.ceil(d.width/2)+1);var s=r*2;var o=-Math.ceil(s/2);var el=$("<group>",{coordsize:s+" "+s,coordorigin:o+" "+o}).css({top:o,left:o,width:s,height:s});for(var i=0;i<d.segments;i++){el.append($("<shape>",{path:"m "+innerRadius+",0  l "+(innerRadius+d.length)+",0"}).css({width:s,height:s,rotation:(360/d.segments*i)+"deg"}).append($("<stroke>",{color:d.color,weight:d.width+"px",endcap:"round",opacity:$.fn.activity.getOpacity(d,i)})));}return $("<group>",{coordsize:s+" "+s}).css({width:s,height:s,overflow:"hidden"}).append(el);};animate=function(el,steps,duration){var rotation=0;var g=el.get(0);el.data("interval",setInterval(function(){g.style.rotation=++rotation%steps*(360/steps);},duration*1000/steps));};}$(s).remove();}})(jQuery);
//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?void(this._wrapped=n):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.6.0";var A=j.each=j.forEach=function(n,t,e){if(null==n)return n;if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return;return n};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var O="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},j.find=j.detect=function(n,t,r){var e;return k(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var k=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:k(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,j.property(t))},j.where=function(n,t){return j.filter(n,j.matches(t))},j.findWhere=function(n,t){return j.find(n,j.matches(t))},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);var e=-1/0,u=-1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;o>u&&(e=n,u=o)}),e},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);var e=1/0,u=1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;u>o&&(e=n,u=o)}),e},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=j.values(n)),n[j.random(n.length-1)]):j.shuffle(n).slice(0,Math.max(0,t))};var E=function(n){return null==n?j.identity:j.isFunction(n)?n:j.property(n)};j.sortBy=function(n,t,r){return t=E(t),j.pluck(j.map(n,function(n,e,u){return{value:n,index:e,criteria:t.call(r,n,e,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=E(r),A(t,function(i,a){var o=r.call(e,i,a,t);n(u,o,i)}),u}};j.groupBy=F(function(n,t,r){j.has(n,t)?n[t].push(r):n[t]=[r]}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=E(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.partition=function(n,t){var r=[],e=[];return A(n,function(n){(t(n)?r:e).push(n)}),[r,e]},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.contains(t,n)})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===j&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:j.now(),a=null,i=n.apply(e,u),e=u=null};return function(){var l=j.now();o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u),e=u=null):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o,c=function(){var l=j.now()-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u),i=u=null))};return function(){i=this,u=arguments,a=j.now();var l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u),i=u=null),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return j.partial(t,n)},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=function(n){if(!j.isObject(n))return[];if(w)return w(n);var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o)&&"constructor"in n&&"constructor"in t)return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.constant=function(n){return function(){return n}},j.property=function(n){return function(t){return t[n]}},j.matches=function(n){return function(t){if(t===n)return!0;for(var r in n)if(n[r]!==t[r])return!1;return!0}},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},j.now=Date.now||function(){return(new Date).getTime()};var T={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};T.unescape=j.invert(T.escape);var I={escape:new RegExp("["+j.keys(T.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(T.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(I[n],function(t){return T[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return j})}).call(this);
//# sourceMappingURL=underscore-min.map
(function(t,e){if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,s){t.Backbone=e(t,s,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore");e(t,exports,i)}else{t.Backbone=e(t,{},t._,t.jQuery||t.Zepto||t.ender||t.$)}})(this,function(t,e,i,r){var s=t.Backbone;var n=[];var a=n.push;var o=n.slice;var h=n.splice;e.VERSION="1.1.2";e.$=r;e.noConflict=function(){t.Backbone=s;return this};e.emulateHTTP=false;e.emulateJSON=false;var u=e.Events={on:function(t,e,i){if(!c(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,r){if(!c(this,"once",t,[e,r])||!e)return this;var s=this;var n=i.once(function(){s.off(t,n);e.apply(this,arguments)});n._callback=e;return this.on(t,n,r)},off:function(t,e,r){var s,n,a,o,h,u,l,f;if(!this._events||!c(this,"off",t,[e,r]))return this;if(!t&&!e&&!r){this._events=void 0;return this}o=t?[t]:i.keys(this._events);for(h=0,u=o.length;h<u;h++){t=o[h];if(a=this._events[t]){this._events[t]=s=[];if(e||r){for(l=0,f=a.length;l<f;l++){n=a[l];if(e&&e!==n.callback&&e!==n.callback._callback||r&&r!==n.context){s.push(n)}}}if(!s.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=o.call(arguments,1);if(!c(this,"trigger",t,e))return this;var i=this._events[t];var r=this._events.all;if(i)f(i,e);if(r)f(r,arguments);return this},stopListening:function(t,e,r){var s=this._listeningTo;if(!s)return this;var n=!e&&!r;if(!r&&typeof e==="object")r=this;if(t)(s={})[t._listenId]=t;for(var a in s){t=s[a];t.off(e,r,this);if(n||i.isEmpty(t._events))delete this._listeningTo[a]}return this}};var l=/\s+/;var c=function(t,e,i,r){if(!i)return true;if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(l.test(i)){var n=i.split(l);for(var a=0,o=n.length;a<o;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true};var f=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,o);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e);return}};var d={listenTo:"on",listenToOnce:"once"};i.each(d,function(t,e){u[e]=function(e,r,s){var n=this._listeningTo||(this._listeningTo={});var a=e._listenId||(e._listenId=i.uniqueId("l"));n[a]=e;if(!s&&typeof r==="object")s=this;e[t](r,s,this);return this}});u.bind=u.on;u.unbind=u.off;i.extend(e,u);var p=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId("c");this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};r=i.defaults({},r,i.result(this,"defaults"));this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(p.prototype,u,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,r){var s,n,a,o,h,u,l,c;if(t==null)return this;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;a=r.unset;h=r.silent;o=[];u=this._changing;this._changing=true;if(!u){this._previousAttributes=i.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in n)this.id=n[this.idAttribute];for(s in n){e=n[s];if(!i.isEqual(c[s],e))o.push(s);if(!i.isEqual(l[s],e)){this.changed[s]=e}else{delete this.changed[s]}a?delete c[s]:c[s]=e}if(!h){if(o.length)this._pending=r;for(var f=0,d=o.length;f<d;f++){this.trigger("change:"+o[f],this,c[o[f]],r)}}if(u)return this;if(!h){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e,r=false;var s=this._changing?this._previousAttributes:this.attributes;for(var n in t){if(i.isEqual(s[n],e=t[n]))continue;(r||(r={}))[n]=e}return r},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=t?i.clone(t):{};if(t.parse===void 0)t.parse=true;var e=this;var r=t.success;t.success=function(i){if(!e.set(e.parse(i,t),t))return false;if(r)r(e,i,t);e.trigger("sync",e,i,t)};q(this,t);return this.sync("read",this,t)},save:function(t,e,r){var s,n,a,o=this.attributes;if(t==null||typeof t==="object"){s=t;r=e}else{(s={})[t]=e}r=i.extend({validate:true},r);if(s&&!r.wait){if(!this.set(s,r))return false}else{if(!this._validate(s,r))return false}if(s&&r.wait){this.attributes=i.extend({},o,s)}if(r.parse===void 0)r.parse=true;var h=this;var u=r.success;r.success=function(t){h.attributes=o;var e=h.parse(t,r);if(r.wait)e=i.extend(s||{},e);if(i.isObject(e)&&!h.set(e,r)){return false}if(u)u(h,t,r);h.trigger("sync",h,t,r)};q(this,r);n=this.isNew()?"create":r.patch?"patch":"update";if(n==="patch")r.attrs=s;a=this.sync(n,this,r);if(s&&r.wait)this.attributes=o;return a},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var s=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(t.wait||e.isNew())s();if(r)r(e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};if(this.isNew()){t.success();return false}q(this,t);var n=this.sync("delete",this,t);if(!t.wait)s();return n},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||M();if(this.isNew())return t;return t.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var v=["keys","values","pairs","invert","pick","omit"];i.each(v,function(t){p.prototype[t]=function(){var e=o.call(arguments);e.unshift(this.attributes);return i[t].apply(i,e)}});var g=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var m={add:true,remove:true,merge:true};var y={add:true,remove:false};i.extend(g.prototype,u,{model:p,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,y))},remove:function(t,e){var r=!i.isArray(t);t=r?[t]:i.clone(t);e||(e={});var s,n,a,o;for(s=0,n=t.length;s<n;s++){o=t[s]=this.get(t[s]);if(!o)continue;delete this._byId[o.id];delete this._byId[o.cid];a=this.indexOf(o);this.models.splice(a,1);this.length--;if(!e.silent){e.index=a;o.trigger("remove",o,this,e)}this._removeReference(o,e)}return r?t[0]:t},set:function(t,e){e=i.defaults({},e,m);if(e.parse)t=this.parse(t,e);var r=!i.isArray(t);t=r?t?[t]:[]:i.clone(t);var s,n,a,o,h,u,l;var c=e.at;var f=this.model;var d=this.comparator&&c==null&&e.sort!==false;var v=i.isString(this.comparator)?this.comparator:null;var g=[],y=[],_={};var b=e.add,w=e.merge,x=e.remove;var E=!d&&b&&x?[]:false;for(s=0,n=t.length;s<n;s++){h=t[s]||{};if(h instanceof p){a=o=h}else{a=h[f.prototype.idAttribute||"id"]}if(u=this.get(a)){if(x)_[u.cid]=true;if(w){h=h===o?o.attributes:h;if(e.parse)h=u.parse(h,e);u.set(h,e);if(d&&!l&&u.hasChanged(v))l=true}t[s]=u}else if(b){o=t[s]=this._prepareModel(h,e);if(!o)continue;g.push(o);this._addReference(o,e)}o=u||o;if(E&&(o.isNew()||!_[o.id]))E.push(o);_[o.id]=true}if(x){for(s=0,n=this.length;s<n;++s){if(!_[(o=this.models[s]).cid])y.push(o)}if(y.length)this.remove(y,e)}if(g.length||E&&E.length){if(d)l=true;this.length+=g.length;if(c!=null){for(s=0,n=g.length;s<n;s++){this.models.splice(c+s,0,g[s])}}else{if(E)this.models.length=0;var k=E||g;for(s=0,n=k.length;s<n;s++){this.models.push(k[s])}}}if(l)this.sort({silent:true});if(!e.silent){for(s=0,n=g.length;s<n;s++){(o=g[s]).trigger("add",o,this,e)}if(l||E&&E.length)this.trigger("sort",this,e)}return r?t[0]:t},reset:function(t,e){e||(e={});for(var r=0,s=this.models.length;r<s;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(){return o.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[t.id]||this._byId[t.cid]},at:function(t){return this.models[t]},where:function(t,e){if(i.isEmpty(t))return e?void 0:[];return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(i.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(i.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=t?i.clone(t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var r=this;t.success=function(i){var s=t.reset?"reset":"set";r[s](i,t);if(e)e(r,i,t);r.trigger("sync",r,i,t)};q(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var r=this;var s=e.success;e.success=function(t,i){if(e.wait)r.add(t,e);if(s)s(t,i,e)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof p)return t;e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_addReference:function(t,e){this._byId[t.cid]=t;if(t.id!=null)this._byId[t.id]=t;if(!t.collection)t.collection=this;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});var _=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"];i.each(_,function(t){g.prototype[t]=function(){var e=o.call(arguments);e.unshift(this.models);return i[t].apply(i,e)}});var b=["groupBy","countBy","sortBy","indexBy"];i.each(b,function(t){g.prototype[t]=function(e,r){var s=i.isFunction(e)?e:function(t){return t.get(e)};return i[t](this.models,s,r)}});var w=e.View=function(t){this.cid=i.uniqueId("view");t||(t={});i.extend(this,i.pick(t,E));this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var x=/^(\S+)\s*(.*)$/;var E=["model","collection","el","id","attributes","className","tagName","events"];i.extend(w.prototype,u,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,i){if(this.$el)this.undelegateEvents();this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0];if(i!==false)this.delegateEvents();return this},delegateEvents:function(t){if(!(t||(t=i.result(this,"events"))))return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[t[e]];if(!r)continue;var s=e.match(x);var n=s[1],a=s[2];r=i.bind(r,this);n+=".delegateEvents"+this.cid;if(a===""){this.$el.on(n,r)}else{this.$el.on(n,a,r)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");var r=e.$("<"+i.result(this,"tagName")+">").attr(t);this.setElement(r,false)}else{this.setElement(i.result(this,"el"),false)}}});e.sync=function(t,r,s){var n=T[t];i.defaults(s||(s={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:n,dataType:"json"};if(!s.url){a.url=i.result(r,"url")||M()}if(s.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(s.attrs||r.toJSON(s))}if(s.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(s.emulateHTTP&&(n==="PUT"||n==="DELETE"||n==="PATCH")){a.type="POST";if(s.emulateJSON)a.data._method=n;var o=s.beforeSend;s.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",n);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!s.emulateJSON){a.processData=false}if(a.type==="PATCH"&&k){a.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var h=s.xhr=e.ajax(i.extend(a,s));r.trigger("request",r,h,s);return h};var k=typeof window!=="undefined"&&!!window.ActiveXObject&&!(window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent);var T={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var S=/\((.*?)\)/g;var H=/(\(\?)?:\w+/g;var A=/\*\w+/g;var I=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,u,{initialize:function(){},route:function(t,r,s){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){s=r;r=""}if(!s)s=this[r];var n=this;e.history.route(t,function(i){var a=n._extractParameters(t,i);n.execute(s,a);n.trigger.apply(n,["route:"+r].concat(a));n.trigger("route",r,a);e.history.trigger("route",n,r,a)});return this},execute:function(t,e){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(I,"\\$&").replace(S,"(?:$1)?").replace(H,function(t,e){return e?t:"([^/?]+)"}).replace(A,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var N=e.History=function(){this.handlers=[];i.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var R=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var P=/msie [\w.]+/;var C=/\/$/;var j=/#.*$/;N.started=false;i.extend(N.prototype,u,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=decodeURI(this.location.pathname+this.location.search);var i=this.root.replace(C,"");if(!t.indexOf(i))t=t.slice(i.length)}else{t=this.getHash()}}return t.replace(R,"")},start:function(t){if(N.started)throw new Error("Backbone.history has already been started");N.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var r=this.getFragment();var s=document.documentMode;var n=P.exec(navigator.userAgent.toLowerCase())&&(!s||s<=7);this.root=("/"+this.root+"/").replace(O,"/");if(n&&this._wantsHashChange){var a=e.$('<iframe src="javascript:0" tabindex="-1">');this.iframe=a.hide().appendTo("body")[0].contentWindow;this.navigate(r)}if(this._hasPushState){e.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!n){e.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=r;var o=this.location;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){this.fragment=this.getFragment(null,true);this.location.replace(this.root+"#"+this.fragment);return true}else if(this._hasPushState&&this.atRoot()&&o.hash){this.fragment=this.getHash().replace(R,"");this.history.replaceState({},document.title,this.root+this.fragment)}}if(!this.options.silent)return this.loadUrl()},stop:function(){e.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);N.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){t=this.fragment=this.getFragment(t);return i.any(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!N.started)return false;if(!e||e===true)e={trigger:!!e};var i=this.root+(t=this.getFragment(t||""));t=t.replace(j,"");if(this.fragment===t)return;this.fragment=t;if(t===""&&i!=="/")i=i.slice(0,-1);if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new N;var U=function(t,e){var r=this;var s;if(t&&i.has(t,"constructor")){s=t.constructor}else{s=function(){return r.apply(this,arguments)}}i.extend(s,r,e);var n=function(){this.constructor=s};n.prototype=r.prototype;s.prototype=new n;if(t)i.extend(s.prototype,t);s.__super__=r.prototype;return s};p.extend=g.extend=$.extend=w.extend=N.extend=U;var M=function(){throw new Error('A "url" property or function must be specified')};var q=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger("error",t,r,e)}};return e});
//# sourceMappingURL=backbone-min.map
/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 1.0.1
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */

/*jslint browser:true, node:true*/
/*global define, Event, Node*/


/**
 * Instantiate fast-clicking listeners on the specificed layer.
 *
 * @constructor
 * @param {Element} layer The layer to listen on
 * @param {Object} options The options to override the defaults
 */
function FastClick(layer, options) {
	'use strict';
	var oldOnClick;

	options = options || {};

	/**
	 * Whether a click is currently being tracked.
	 *
	 * @type boolean
	 */
	this.trackingClick = false;


	/**
	 * Timestamp for when click tracking started.
	 *
	 * @type number
	 */
	this.trackingClickStart = 0;


	/**
	 * The element being tracked for a click.
	 *
	 * @type EventTarget
	 */
	this.targetElement = null;


	/**
	 * X-coordinate of touch start event.
	 *
	 * @type number
	 */
	this.touchStartX = 0;


	/**
	 * Y-coordinate of touch start event.
	 *
	 * @type number
	 */
	this.touchStartY = 0;


	/**
	 * ID of the last touch, retrieved from Touch.identifier.
	 *
	 * @type number
	 */
	this.lastTouchIdentifier = 0;


	/**
	 * Touchmove boundary, beyond which a click will be cancelled.
	 *
	 * @type number
	 */
	this.touchBoundary = options.touchBoundary || 10;


	/**
	 * The FastClick layer.
	 *
	 * @type Element
	 */
	this.layer = layer;

	/**
	 * The minimum time between tap(touchstart and touchend) events
	 *
	 * @type number
	 */
	this.tapDelay = options.tapDelay || 200;

	if (FastClick.notNeeded(layer)) {
		return;
	}

	// Some old versions of Android don't have Function.prototype.bind
	function bind(method, context) {
		return function() { return method.apply(context, arguments); };
	}


	var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
	var context = this;
	for (var i = 0, l = methods.length; i < l; i++) {
		context[methods[i]] = bind(context[methods[i]], context);
	}

	// Set up event handlers as required
	if (deviceIsAndroid) {
		layer.addEventListener('mouseover', this.onMouse, true);
		layer.addEventListener('mousedown', this.onMouse, true);
		layer.addEventListener('mouseup', this.onMouse, true);
	}

	layer.addEventListener('click', this.onClick, true);
	layer.addEventListener('touchstart', this.onTouchStart, false);
	layer.addEventListener('touchmove', this.onTouchMove, false);
	layer.addEventListener('touchend', this.onTouchEnd, false);
	layer.addEventListener('touchcancel', this.onTouchCancel, false);

	// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
	// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
	// layer when they are cancelled.
	if (!Event.prototype.stopImmediatePropagation) {
		layer.removeEventListener = function(type, callback, capture) {
			var rmv = Node.prototype.removeEventListener;
			if (type === 'click') {
				rmv.call(layer, type, callback.hijacked || callback, capture);
			} else {
				rmv.call(layer, type, callback, capture);
			}
		};

		layer.addEventListener = function(type, callback, capture) {
			var adv = Node.prototype.addEventListener;
			if (type === 'click') {
				adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
					if (!event.propagationStopped) {
						callback(event);
					}
				}), capture);
			} else {
				adv.call(layer, type, callback, capture);
			}
		};
	}

	// If a handler is already declared in the element's onclick attribute, it will be fired before
	// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
	// adding it as listener.
	if (typeof layer.onclick === 'function') {

		// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
		// - the old one won't work if passed to addEventListener directly.
		oldOnClick = layer.onclick;
		layer.addEventListener('click', function(event) {
			oldOnClick(event);
		}, false);
		layer.onclick = null;
	}
}


/**
 * Android requires exceptions.
 *
 * @type boolean
 */
var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0;


/**
 * iOS requires exceptions.
 *
 * @type boolean
 */
var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);


/**
 * iOS 4 requires an exception for select elements.
 *
 * @type boolean
 */
var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


/**
 * iOS 6.0(+?) requires the target element to be manually derived
 *
 * @type boolean
 */
var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS ([6-9]|\d{2})_\d/).test(navigator.userAgent);


/**
 * Determine whether a given element requires a native click.
 *
 * @param {EventTarget|Element} target Target DOM element
 * @returns {boolean} Returns true if the element needs a native click
 */
FastClick.prototype.needsClick = function(target) {
	'use strict';
	switch (target.nodeName.toLowerCase()) {

	// Don't send a synthetic click to disabled inputs (issue #62)
	case 'button':
	case 'select':
	case 'textarea':
		if (target.disabled) {
			return true;
		}

		break;
	case 'input':

		// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
		if ((deviceIsIOS && target.type === 'file') || target.disabled) {
			return true;
		}

		break;
	case 'label':
	case 'video':
		return true;
	}

	return (/\bneedsclick\b/).test(target.className);
};


/**
 * Determine whether a given element requires a call to focus to simulate click into element.
 *
 * @param {EventTarget|Element} target Target DOM element
 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
 */
FastClick.prototype.needsFocus = function(target) {
	'use strict';
	switch (target.nodeName.toLowerCase()) {
	case 'textarea':
		return true;
	case 'select':
		return !deviceIsAndroid;
	case 'input':
		switch (target.type) {
		case 'button':
		case 'checkbox':
		case 'file':
		case 'image':
		case 'radio':
		case 'submit':
			return false;
		}

		// No point in attempting to focus disabled inputs
		return !target.disabled && !target.readOnly;
	default:
		return (/\bneedsfocus\b/).test(target.className);
	}
};


/**
 * Send a click event to the specified element.
 *
 * @param {EventTarget|Element} targetElement
 * @param {Event} event
 */
FastClick.prototype.sendClick = function(targetElement, event) {
	'use strict';
	var clickEvent, touch;

	// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
	if (document.activeElement && document.activeElement !== targetElement) {
		document.activeElement.blur();
	}

	touch = event.changedTouches[0];

	// Synthesise a click event, with an extra attribute so it can be tracked
	clickEvent = document.createEvent('MouseEvents');
	clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
	clickEvent.forwardedTouchEvent = true;
	targetElement.dispatchEvent(clickEvent);
};

FastClick.prototype.determineEventType = function(targetElement) {
	'use strict';

	//Issue #159: Android Chrome Select Box does not open with a synthetic click event
	if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
		return 'mousedown';
	}

	return 'click';
};


/**
 * @param {EventTarget|Element} targetElement
 */
FastClick.prototype.focus = function(targetElement) {
	'use strict';
	var length;

	// Issue #160: on iOS 7, some input elements (e.g. date datetime) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
	if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time') {
		length = targetElement.value.length;
		targetElement.setSelectionRange(length, length);
	} else {
		targetElement.focus();
	}
};


/**
 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
 *
 * @param {EventTarget|Element} targetElement
 */
FastClick.prototype.updateScrollParent = function(targetElement) {
	'use strict';
	var scrollParent, parentElement;

	scrollParent = targetElement.fastClickScrollParent;

	// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
	// target element was moved to another parent.
	if (!scrollParent || !scrollParent.contains(targetElement)) {
		parentElement = targetElement;
		do {
			if (parentElement.scrollHeight > parentElement.offsetHeight) {
				scrollParent = parentElement;
				targetElement.fastClickScrollParent = parentElement;
				break;
			}

			parentElement = parentElement.parentElement;
		} while (parentElement);
	}

	// Always update the scroll top tracker if possible.
	if (scrollParent) {
		scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
	}
};


/**
 * @param {EventTarget} targetElement
 * @returns {Element|EventTarget}
 */
FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {
	'use strict';

	// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
	if (eventTarget.nodeType === Node.TEXT_NODE) {
		return eventTarget.parentNode;
	}

	return eventTarget;
};


/**
 * On touch start, record the position and scroll offset.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchStart = function(event) {
	'use strict';
	var targetElement, touch, selection;

	// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
	if (event.targetTouches.length > 1) {
		return true;
	}

	targetElement = this.getTargetElementFromEventTarget(event.target);
	touch = event.targetTouches[0];

	if (deviceIsIOS) {

		// Only trusted events will deselect text on iOS (issue #49)
		selection = window.getSelection();
		if (selection.rangeCount && !selection.isCollapsed) {
			return true;
		}

		if (!deviceIsIOS4) {

			// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
			// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
			// with the same identifier as the touch event that previously triggered the click that triggered the alert.
			// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
			// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
			if (touch.identifier === this.lastTouchIdentifier) {
				event.preventDefault();
				return false;
			}

			this.lastTouchIdentifier = touch.identifier;

			// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
			// 1) the user does a fling scroll on the scrollable layer
			// 2) the user stops the fling scroll with another tap
			// then the event.target of the last 'touchend' event will be the element that was under the user's finger
			// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
			// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
			this.updateScrollParent(targetElement);
		}
	}

	this.trackingClick = true;
	this.trackingClickStart = event.timeStamp;
	this.targetElement = targetElement;

	this.touchStartX = touch.pageX;
	this.touchStartY = touch.pageY;

	// Prevent phantom clicks on fast double-tap (issue #36)
	if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
		event.preventDefault();
	}

	return true;
};


/**
 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.touchHasMoved = function(event) {
	'use strict';
	var touch = event.changedTouches[0], boundary = this.touchBoundary;

	if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
		return true;
	}

	return false;
};


/**
 * Update the last position.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchMove = function(event) {
	'use strict';
	if (!this.trackingClick) {
		return true;
	}

	// If the touch has moved, cancel the click tracking
	if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
		this.trackingClick = false;
		this.targetElement = null;
	}

	return true;
};


/**
 * Attempt to find the labelled control for the given label element.
 *
 * @param {EventTarget|HTMLLabelElement} labelElement
 * @returns {Element|null}
 */
FastClick.prototype.findControl = function(labelElement) {
	'use strict';

	// Fast path for newer browsers supporting the HTML5 control attribute
	if (labelElement.control !== undefined) {
		return labelElement.control;
	}

	// All browsers under test that support touch events also support the HTML5 htmlFor attribute
	if (labelElement.htmlFor) {
		return document.getElementById(labelElement.htmlFor);
	}

	// If no for attribute exists, attempt to retrieve the first labellable descendant element
	// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
	return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
};


/**
 * On touch end, determine whether to send a click event at once.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchEnd = function(event) {
	'use strict';
	var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

	if (!this.trackingClick) {
		return true;
	}

	// Prevent phantom clicks on fast double-tap (issue #36)
	if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
		this.cancelNextClick = true;
		return true;
	}

	// Reset to prevent wrong click cancel on input (issue #156).
	this.cancelNextClick = false;

	this.lastClickTime = event.timeStamp;

	trackingClickStart = this.trackingClickStart;
	this.trackingClick = false;
	this.trackingClickStart = 0;

	// On some iOS devices, the targetElement supplied with the event is invalid if the layer
	// is performing a transition or scroll, and has to be re-detected manually. Note that
	// for this to function correctly, it must be called *after* the event target is checked!
	// See issue #57; also filed as rdar://13048589 .
	if (deviceIsIOSWithBadTarget) {
		touch = event.changedTouches[0];

		// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
		targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
		targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
	}

	targetTagName = targetElement.tagName.toLowerCase();
	if (targetTagName === 'label') {
		forElement = this.findControl(targetElement);
		if (forElement) {
			this.focus(targetElement);
			if (deviceIsAndroid) {
				return false;
			}

			targetElement = forElement;
		}
	} else if (this.needsFocus(targetElement)) {

		// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
		// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
		if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
			this.targetElement = null;
			return false;
		}

		this.focus(targetElement);
		this.sendClick(targetElement, event);

		// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
		// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
		if (!deviceIsIOS || targetTagName !== 'select') {
			this.targetElement = null;
			event.preventDefault();
		}

		return false;
	}

	if (deviceIsIOS && !deviceIsIOS4) {

		// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
		// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
		scrollParent = targetElement.fastClickScrollParent;
		if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
			return true;
		}
	}

	// Prevent the actual click from going though - unless the target node is marked as requiring
	// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
	if (!this.needsClick(targetElement)) {
		event.preventDefault();
		this.sendClick(targetElement, event);
	}

	return false;
};


/**
 * On touch cancel, stop tracking the click.
 *
 * @returns {void}
 */
FastClick.prototype.onTouchCancel = function() {
	'use strict';
	this.trackingClick = false;
	this.targetElement = null;
};


/**
 * Determine mouse events which should be permitted.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onMouse = function(event) {
	'use strict';

	// If a target element was never set (because a touch event was never fired) allow the event
	if (!this.targetElement) {
		return true;
	}

	if (event.forwardedTouchEvent) {
		return true;
	}

	// Programmatically generated events targeting a specific element should be permitted
	if (!event.cancelable) {
		return true;
	}

	// Derive and check the target element to see whether the mouse event needs to be permitted;
	// unless explicitly enabled, prevent non-touch click events from triggering actions,
	// to prevent ghost/doubleclicks.
	if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

		// Prevent any user-added listeners declared on FastClick element from being fired.
		if (event.stopImmediatePropagation) {
			event.stopImmediatePropagation();
		} else {

			// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			event.propagationStopped = true;
		}

		// Cancel the event
		event.stopPropagation();
		event.preventDefault();

		return false;
	}

	// If the mouse event is permitted, return true for the action to go through.
	return true;
};


/**
 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
 * an actual click which should be permitted.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onClick = function(event) {
	'use strict';
	var permitted;

	// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
	if (this.trackingClick) {
		this.targetElement = null;
		this.trackingClick = false;
		return true;
	}

	// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
	if (event.target.type === 'submit' && event.detail === 0) {
		return true;
	}

	permitted = this.onMouse(event);

	// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
	if (!permitted) {
		this.targetElement = null;
	}

	// If clicks are permitted, return true for the action to go through.
	return permitted;
};


/**
 * Remove all FastClick's event listeners.
 *
 * @returns {void}
 */
FastClick.prototype.destroy = function() {
	'use strict';
	var layer = this.layer;

	if (deviceIsAndroid) {
		layer.removeEventListener('mouseover', this.onMouse, true);
		layer.removeEventListener('mousedown', this.onMouse, true);
		layer.removeEventListener('mouseup', this.onMouse, true);
	}

	layer.removeEventListener('click', this.onClick, true);
	layer.removeEventListener('touchstart', this.onTouchStart, false);
	layer.removeEventListener('touchmove', this.onTouchMove, false);
	layer.removeEventListener('touchend', this.onTouchEnd, false);
	layer.removeEventListener('touchcancel', this.onTouchCancel, false);
};


/**
 * Check whether FastClick is needed.
 *
 * @param {Element} layer The layer to listen on
 */
FastClick.notNeeded = function(layer) {
	'use strict';
	var metaViewport;
	var chromeVersion;

	// Devices that don't support touch don't need FastClick
	if (typeof window.ontouchstart === 'undefined') {
		return true;
	}

	// Chrome version - zero for other browsers
	chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

	if (chromeVersion) {

		if (deviceIsAndroid) {
			metaViewport = document.querySelector('meta[name=viewport]');

			if (metaViewport) {
				// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
				if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
					return true;
				}
				// Chrome 32 and above with width=device-width or less don't need FastClick
				if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
					return true;
				}
			}

		// Chrome desktop doesn't need FastClick (issue #15)
		} else {
			return true;
		}
	}

	// IE10 with -ms-touch-action: none, which disables double-tap-to-zoom (issue #97)
	if (layer.style.msTouchAction === 'none') {
		return true;
	}

	return false;
};


/**
 * Factory method for creating a FastClick object
 *
 * @param {Element} layer The layer to listen on
 * @param {Object} options The options to override the defaults
 */
FastClick.attach = function(layer, options) {
	'use strict';
	return new FastClick(layer, options);
};


if (typeof define !== 'undefined' && define.amd) {

	// AMD. Register as an anonymous module.
	define(function() {
		'use strict';
		return FastClick;
	});
} else if (typeof module !== 'undefined' && module.exports) {
	module.exports = FastClick.attach;
	module.exports.FastClick = FastClick;
} else {
	window.FastClick = FastClick;
}

/*!
 * VERSION: 1.11.6
 * DATE: 2014-03-26
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function(t){"use strict";var e=t.GreenSockGlobals||t;if(!e.TweenLite){var i,s,r,n,a,o=function(t){var i,s=t.split("."),r=e;for(i=0;s.length>i;i++)r[s[i]]=r=r[s[i]]||{};return r},l=o("com.greensock"),h=1e-10,_=[].slice,u=function(){},m=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),f={},p=function(i,s,r,n){this.sc=f[i]?f[i].sc:[],f[i]=this,this.gsClass=null,this.func=r;var a=[];this.check=function(l){for(var h,_,u,m,c=s.length,d=c;--c>-1;)(h=f[s[c]]||new p(s[c],[])).gsClass?(a[c]=h.gsClass,d--):l&&h.sc.push(this);if(0===d&&r)for(_=("com.greensock."+i).split("."),u=_.pop(),m=o(_.join("."))[u]=this.gsClass=r.apply(r,a),n&&(e[u]=m,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+i.split(".").join("/"),[],function(){return m}):"undefined"!=typeof module&&module.exports&&(module.exports=m)),c=0;this.sc.length>c;c++)this.sc[c].check()},this.check(!0)},c=t._gsDefine=function(t,e,i,s){return new p(t,e,i,s)},d=l._class=function(t,e,i){return e=e||function(){},c(t,[],function(){return e},i),e};c.globals=e;var v=[0,0,1,1],g=[],T=d("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?v.concat(e):v},!0),w=T.map={},P=T.register=function(t,e,i,s){for(var r,n,a,o,h=e.split(","),_=h.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=h[_],r=s?d("easing."+n,null,!0):l.easing[n]||{},a=u.length;--a>-1;)o=u[a],w[n+"."+o]=w[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(r=T.prototype,r._calcEnd=!1,r.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},i=["Linear","Quad","Cubic","Quart","Quint,Strong"],s=i.length;--s>-1;)r=i[s]+",Power"+s,P(new T(null,null,1,s),r,"easeOut",!0),P(new T(null,null,2,s),r,"easeIn"+(0===s?",easeNone":"")),P(new T(null,null,3,s),r,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var y=d("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});r=y.prototype,r.addEventListener=function(t,e,i,s,r){r=r||0;var o,l,h=this._listeners[t],_=0;for(null==h&&(this._listeners[t]=h=[]),l=h.length;--l>-1;)o=h[l],o.c===e&&o.s===i?h.splice(l,1):0===_&&r>o.pr&&(_=l+1);h.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==n||a||n.wake()},r.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},r.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i)};var b=t.requestAnimationFrame,k=t.cancelAnimationFrame,A=Date.now||function(){return(new Date).getTime()},S=A();for(i=["ms","moz","webkit","o"],s=i.length;--s>-1&&!b;)b=t[i[s]+"RequestAnimationFrame"],k=t[i[s]+"CancelAnimationFrame"]||t[i[s]+"CancelRequestAnimationFrame"];d("Ticker",function(t,e){var i,s,r,o,l,h=this,_=A(),m=e!==!1&&b,f=function(t){S=A(),h.time=(S-_)/1e3;var e,n=h.time-l;(!i||n>0||t===!0)&&(h.frame++,l+=n+(n>=o?.004:o-n),e=!0),t!==!0&&(r=s(f)),e&&h.dispatchEvent("tick")};y.call(h),h.time=h.frame=0,h.tick=function(){f(!0)},h.sleep=function(){null!=r&&(m&&k?k(r):clearTimeout(r),s=u,r=null,h===n&&(a=!1))},h.wake=function(){null!==r&&h.sleep(),s=0===i?u:m&&b?b:function(t){return setTimeout(t,0|1e3*(l-h.time)+1)},h===n&&(a=!0),f(2)},h.fps=function(t){return arguments.length?(i=t,o=1/(i||60),l=this.time+o,h.wake(),void 0):i},h.useRAF=function(t){return arguments.length?(h.sleep(),m=t,h.fps(i),void 0):m},h.fps(t),setTimeout(function(){m&&(!r||5>h.frame)&&h.useRAF(!1)},1500)}),r=l.Ticker.prototype=new l.events.EventDispatcher,r.constructor=l.Ticker;var x=d("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,Q){a||n.wake();var i=this.vars.useFrames?G:Q;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});n=x.ticker=new l.Ticker,r=x.prototype,r._dirty=r._gc=r._initted=r._paused=!1,r._totalTime=r._time=0,r._rawPrevTime=-1,r._next=r._last=r._onUpdate=r._timeline=r.timeline=null,r._paused=!1;var C=function(){a&&A()-S>2e3&&n.wake(),setTimeout(C,2e3)};C(),r.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},r.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},r.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},r.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},r.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},r.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},r.render=function(){},r.invalidate=function(){return this},r.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},r._enabled=function(t,e){return a||n.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},r._kill=function(){return this._enabled(!1,!1)},r.kill=function(t,e){return this._kill(t,e),this},r._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},r._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},r.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=m(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},r.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},r.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},r.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},r.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},r.totalTime=function(t,e,i){if(a||n.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&this.render(t,e,!1)}return this},r.progress=r.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},r.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},r.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||h,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},r.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},r.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){a||t||n.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==s&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var R=d("core.SimpleTimeline",function(t){x.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});r=R.prototype=new x,r.constructor=R,r.kill()._gc=!1,r._first=r._last=null,r._sortChildren=!1,r.add=r.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._timeline&&this._uncache(!0),this},r._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t.timeline=null,t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),this._timeline&&this._uncache(!0)),this},r.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},r.rawTime=function(){return a||n.wake(),this._totalTime};var D=d("TweenLite",function(e,i,s){if(x.call(this,i,s),this.render=D.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:D.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?j[D.defaultOverwrite]:"number"==typeof l?l>>0:j[l],(o||e instanceof Array||e.push&&m(e))&&"number"!=typeof e[0])for(this._targets=a=_.call(e,0),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(_.call(n,0))):(this._siblings[r]=B(n,this,!1),1===l&&this._siblings[r].length>1&&q(n,this,null,1,this._siblings[r])):(n=a[r--]=D.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=B(e,this,!1),1===l&&this._siblings.length>1&&q(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&this.render(-this._delay,!1,!0)},!0),E=function(e){return e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},I=function(t,e){var i,s={};for(i in t)F[i]||i in e&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!N[i]||N[i]&&N[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};r=D.prototype=new x,r.constructor=D,r.kill()._gc=!1,r.ratio=0,r._firstPT=r._targets=r._overwrittenProps=r._startAt=null,r._notifyPluginsOfEnabled=!1,D.version="1.11.6",D.defaultEase=r._ease=new T(null,null,1,1),D.defaultOverwrite="auto",D.ticker=n,D.autoSleep=!0,D.selector=t.$||t.jQuery||function(e){return t.$?(D.selector=t.$,t.$(e)):t.document?t.document.getElementById("#"===e.charAt(0)?e.substr(1):e):e};var O=D._internals={isArray:m,isSelector:E},N=D._plugins={},L=D._tweenLookup={},U=0,F=O.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1},j={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},G=x._rootFramesTimeline=new R,Q=x._rootTimeline=new R;Q._startTime=n.time,G._startTime=n.frame,Q._active=G._active=!0,x._updateRoot=function(){if(Q.render((n.time-Q._startTime)*Q._timeScale,!1,!1),G.render((n.frame-G._startTime)*G._timeScale,!1,!1),!(n.frame%120)){var t,e,i;for(i in L){for(e=L[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete L[i]}if(i=Q._first,(!i||i._paused)&&D.autoSleep&&!G._first&&1===n._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||n.sleep()}}},n.addEventListener("tick",x._updateRoot);var B=function(t,e,i){var s,r,n=t._gsTweenID;if(L[n||(t._gsTweenID=n="t"+U++)]||(L[n]={target:t,tweens:[]}),e&&(s=L[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return L[n].tweens},q=function(t,e,i,s,r){var n,a,o,l;if(1===s||s>=4){for(l=r.length,n=0;l>n;n++)if((o=r[n])!==e)o._gc||o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var _,u=e._startTime+h,m=[],f=0,p=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(_=_||$(e,0,p),0===$(o,_,p)&&(m[f++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((p||!o._initted)&&2e-10>=u-o._startTime||(m[f++]=o)));for(n=f;--n>-1;)o=m[n],2===s&&o._kill(i,t)&&(a=!0),(2!==s||!o._firstPT&&o._initted)&&o._enabled(!1,!1)&&(a=!0);return a},$=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*h>n-e?h:(n+=t.totalDuration()/t._timeScale/r)>e+h?0:n-e-h};r._init=function(){var t,e,i,s,r=this.vars,n=this._overwrittenProps,a=this._duration,o=r.immediateRender,l=r.ease;if(r.startAt){if(this._startAt&&this._startAt.render(-1,!0),r.startAt.overwrite=0,r.startAt.immediateRender=!0,this._startAt=D.to(this.target,0,r.startAt),o)if(this._time>0)this._startAt=null;else if(0!==a)return}else if(r.runBackwards&&0!==a)if(this._startAt)this._startAt.render(-1,!0),this._startAt=null;else{i={};for(s in r)F[s]&&"autoCSS"!==s||(i[s]=r[s]);if(i.overwrite=0,i.data="isFromStart",this._startAt=D.to(this.target,0,i),r.immediateRender){if(0===this._time)return}else this._startAt.render(-1,!0)}if(this._ease=l?l instanceof T?r.easeParams instanceof Array?l.config.apply(l,r.easeParams):l:"function"==typeof l?new T(l,r.easeParams):w[l]||D.defaultEase:D.defaultEase,this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],n?n[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,n);if(e&&D._onPluginEvent("_onInitAllProps",this),n&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),r.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=r.onUpdate,this._initted=!0},r._initProps=function(e,i,s,r){var n,a,o,l,h,_;if(null==e)return!1;this.vars.css||e.style&&e!==t&&e.nodeType&&N.css&&this.vars.autoCSS!==!1&&I(this.vars,e);for(n in this.vars){if(_=this.vars[n],F[n])_&&(_ instanceof Array||_.push&&m(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(N[n]&&(l=new N[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:l._priority},a=l._overwriteProps.length;--a>-1;)i[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=h={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},h.s=h.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),h.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-h.s||0;h&&h._next&&(h._next._prev=h)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&q(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):o},r.render=function(t,e,i){var s,r,n,a,o=this._time,l=this._duration;if(t>=l)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete"),0===l&&(a=this._rawPrevTime,this._startTime===this._timeline._duration&&(t=0),(0===t||0>a||a===h)&&a!==t&&(i=!0,a>h&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||this._rawPrevTime===t?t:h);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&this._rawPrevTime>0&&this._rawPrevTime!==h)&&(r="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===l&&(this._rawPrevTime>=0&&(i=!0),this._rawPrevTime=a=!e||t||this._rawPrevTime===t?t:h)):this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var _=t/l,u=this._easeType,m=this._easePower;(1===u||3===u&&_>=.5)&&(_=1-_),3===u&&(_*=2),1===m?_*=_:2===m?_*=_*_:3===m?_*=_*_*_:4===m&&(_*=_*_*_*_),this.ratio=1===u?1-_:2===u?_:.5>t/l?_/2:1-_/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;this._time&&!s?this.ratio=this._ease.getRatio(this._time/l):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||g))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||g)),r&&(this._gc||(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||g),0===l&&this._rawPrevTime===h&&a!==h&&(this._rawPrevTime=0)))}},r._kill=function(t,e){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var i,s,r,n,a,o,l,h;if((m(e)||E(e))&&"number"!=typeof e[0])for(i=e.length;--i>-1;)this._kill(t,e[i])&&(o=!0);else{if(this._targets){for(i=this._targets.length;--i>-1;)if(e===this._targets[i]){a=this._propLookup[i]||{},this._overwrittenProps=this._overwrittenProps||[],s=this._overwrittenProps[i]=t?this._overwrittenProps[i]||{}:"all";break}}else{if(e!==this.target)return!1;a=this._propLookup,s=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(a){l=t||a,h=t!==s&&"all"!==s&&t!==a&&("object"!=typeof t||!t._tempKill);for(r in l)(n=a[r])&&(n.pg&&n.t._kill(l)&&(o=!0),n.pg&&0!==n.t._overwriteProps.length||(n._prev?n._prev._next=n._next:n===this._firstPT&&(this._firstPT=n._next),n._next&&(n._next._prev=n._prev),n._next=n._prev=null),delete a[r]),h&&(s[r]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return o},r.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=!1,this._propLookup=this._targets?{}:[],this},r._enabled=function(t,e){if(a||n.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=B(s[i],this,!0);else this._siblings=B(this.target,this,!0)}return x.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?D._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new D(t,e,s)},D.delayedCall=function(t,e,i,s,r){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:r,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:D.selector(t)||t;var i,s,r,n;if((m(t)||E(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(D.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=B(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=D.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var M=d("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=M.prototype},!0);if(r=M.prototype,M.version="1.10.1",M.API=2,r._firstPT=null,r._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},r.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=0|e+(e>0?.5:-.5):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},r._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},r._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},D._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},M.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===M.API&&(N[(new t[e])._propName]=t[e]);return!0},c.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=d("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){M.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new M(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,M.activate([a]),a},i=t._gsQueue){for(s=0;i.length>s;s++)i[s]();for(r in f)f[r].func||t.console.log("GSAP encountered missing dependency: com.greensock."+r)}a=!1}})(window);
/*!
 * VERSION: 1.11.6
 * DATE: 2014-03-26
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,r,s,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o={},l=a.prototype=new t("css");l.constructor=a,a.version="1.11.6",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",l="px",a.suffixMap={top:l,right:l,bottom:l,left:l,width:l,height:l,fontSize:l,padding:l,margin:l,perspective:l,lineHeight:""};var h,u,_,f,p,c,d=/(?:\d|\-\d|\.\d|\-\.\d)+/g,m=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/[^\d\-\.]/g,y=/(?:\d|\-|\+|=|#|\.)*/g,T=/opacity *= *([^)]*)/,w=/opacity:([^;]*)/,x=/alpha\(opacity *=.+?\)/i,b=/^(rgb|hsl)/,P=/([A-Z])/g,S=/-([a-z])/gi,R=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,k=function(t,e){return e.toUpperCase()},C=/(?:Left|Right|Width)/i,O=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,A=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,D=/,(?=[^\)]*(?:\(|$))/gi,M=Math.PI/180,N=180/Math.PI,L={},X=document,I=X.createElement("div"),F=X.createElement("img"),E=a._internals={_specialProps:o},Y=navigator.userAgent,z=function(){var t,e=Y.indexOf("Android"),i=X.createElement("div");return _=-1!==Y.indexOf("Safari")&&-1===Y.indexOf("Chrome")&&(-1===e||Number(Y.substr(e+8,1))>3),p=_&&6>Number(Y.substr(Y.indexOf("Version/")+8,1)),f=-1!==Y.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y)&&(c=parseFloat(RegExp.$1)),i.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",t=i.getElementsByTagName("a")[0],t?/^0.55/.test(t.style.opacity):!1}(),U=function(t){return T.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},B=function(t){window.console&&console.log(t)},j="",W="",V=function(t,e){e=e||I;var i,r,s=e.style;if(void 0!==s[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],r=5;--r>-1&&void 0===s[i[r]+t];);return r>=0?(W=3===r?"ms":i[r],j="-"+W.toLowerCase()+"-",W+t):null},H=X.defaultView?X.defaultView.getComputedStyle:function(){},q=a.getStyle=function(t,e,i,r,s){var n;return z||"opacity"!==e?(!r&&t.style[e]?n=t.style[e]:(i=i||H(t,null))?(t=i.getPropertyValue(e.replace(P,"-$1").toLowerCase()),n=t||i.length?t:i[e]):t.currentStyle&&(n=t.currentStyle[e]),null==s||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:s):U(t)},Q=E.convertToPixels=function(t,e,i,r,s){if("px"===r||!r)return i;if("auto"===r||!i)return 0;var n,a=C.test(e),o=t,l=I.style,h=0>i;return h&&(i=-i),"%"===r&&-1!==e.indexOf("border")?n=i/100*(a?t.clientWidth:t.clientHeight):(l.cssText="border:0 solid red;position:"+q(t,"position")+";line-height:0;","%"!==r&&o.appendChild?l[a?"borderLeftWidth":"borderTopWidth"]=i+r:(o=t.parentNode||X.body,l[a?"width":"height"]=i+r),o.appendChild(I),n=parseFloat(I[a?"offsetWidth":"offsetHeight"]),o.removeChild(I),0!==n||s||(n=Q(t,e,i,r,!0))),h?-n:n},Z=E.calculateOffset=function(t,e,i){if("absolute"!==q(t,"position",i))return 0;var r="left"===e?"Left":"Top",s=q(t,"margin"+r,i);return t["offset"+r]-(Q(t,e,parseFloat(s),s.replace(y,""))||0)},$=function(t,e){var i,r,s={};if(e=e||H(t,null))if(i=e.length)for(;--i>-1;)s[e[i].replace(S,k)]=e.getPropertyValue(e[i]);else for(i in e)s[i]=e[i];else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===s[i]&&(s[i.replace(S,k)]=e[i]);return z||(s.opacity=U(t)),r=Pe(t,e,!1),s.rotation=r.rotation,s.skewX=r.skewX,s.scaleX=r.scaleX,s.scaleY=r.scaleY,s.x=r.x,s.y=r.y,xe&&(s.z=r.z,s.rotationX=r.rotationX,s.rotationY=r.rotationY,s.scaleZ=r.scaleZ),s.filters&&delete s.filters,s},G=function(t,e,i,r,s){var n,a,o,l={},h=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||s&&s[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(v,"")?n:0:Z(t,a),void 0!==h[a]&&(o=new _e(h,a,h[a],o)));if(r)for(a in r)"className"!==a&&(l[a]=r[a]);return{difs:l,firstMPT:o}},K={width:["Left","Right"],height:["Top","Bottom"]},J=["marginLeft","marginRight","marginTop","marginBottom"],te=function(t,e,i){var r=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),s=K[e],n=s.length;for(i=i||H(t,null);--n>-1;)r-=parseFloat(q(t,"padding"+s[n],i,!0))||0,r-=parseFloat(q(t,"border"+s[n]+"Width",i,!0))||0;return r},ee=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),r=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],s=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==s?s="0":"center"===s&&(s="50%"),("center"===r||isNaN(parseFloat(r))&&-1===(r+"").indexOf("="))&&(r="50%"),e&&(e.oxp=-1!==r.indexOf("%"),e.oyp=-1!==s.indexOf("%"),e.oxr="="===r.charAt(1),e.oyr="="===s.charAt(1),e.ox=parseFloat(r.replace(v,"")),e.oy=parseFloat(s.replace(v,""))),r+" "+s+(i.length>2?" "+i[2]:"")},ie=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},re=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*Number(t.substr(2))+e:parseFloat(t)},se=function(t,e,i,r){var s,n,a,o,l=1e-6;return null==t?o=e:"number"==typeof t?o=t:(s=360,n=t.split("_"),a=Number(n[0].replace(v,""))*(-1===t.indexOf("rad")?1:N)-("="===t.charAt(1)?0:e),n.length&&(r&&(r[i]=e+a),-1!==t.indexOf("short")&&(a%=s,a!==a%(s/2)&&(a=0>a?a+s:a-s)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*s)%s-(0|a/s)*s:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*s)%s-(0|a/s)*s)),o=e+a),l>o&&o>-l&&(o=0),o},ne={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ae=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},oe=function(t){var e,i,r,s,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),ne[t]?ne[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),r=t.charAt(3),t="#"+e+e+i+i+r+r),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(d),s=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=ae(s+1/3,e,i),t[1]=ae(s,e,i),t[2]=ae(s-1/3,e,i),t):(t=t.match(d)||ne.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):ne.black},le="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(l in ne)le+="|"+l+"\\b";le=RegExp(le+")","gi");var he=function(t,e,i,r){if(null==t)return function(t){return t};var s,n=e?(t.match(le)||[""])[0]:"",a=t.split(n).join("").match(g)||[],o=t.substr(0,t.indexOf(a[0])),l=")"===t.charAt(t.length-1)?")":"",h=-1!==t.indexOf(" ")?" ":",",u=a.length,_=u>0?a[0].replace(d,""):"";return u?s=e?function(t){var e,f,p,c;if("number"==typeof t)t+=_;else if(r&&D.test(t)){for(c=t.replace(D,"|").split("|"),p=0;c.length>p;p++)c[p]=s(c[p]);return c.join(",")}if(e=(t.match(le)||[n])[0],f=t.split(e).join("").match(g)||[],p=f.length,u>p--)for(;u>++p;)f[p]=i?f[0|(p-1)/2]:a[p];return o+f.join(h)+h+e+l+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,f;if("number"==typeof t)t+=_;else if(r&&D.test(t)){for(n=t.replace(D,"|").split("|"),f=0;n.length>f;f++)n[f]=s(n[f]);return n.join(",")}if(e=t.match(g)||[],f=e.length,u>f--)for(;u>++f;)e[f]=i?e[0|(f-1)/2]:a[f];return o+e.join(h)+l}:function(t){return t}},ue=function(t){return t=t.split(","),function(e,i,r,s,n,a,o){var l,h=(i+"").split(" ");for(o={},l=0;4>l;l++)o[t[l]]=h[l]=h[l]||h[(l-1)/2>>0];return s.parse(e,o,n,a)}},_e=(E._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,r,s,n=this.data,a=n.proxy,o=n.firstMPT,l=1e-6;o;)e=a[o.v],o.r?e=e>0?0|e+.5:0|e-.5:l>e&&e>-l&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(s=i.xs0+i.s+i.xs1,r=1;i.l>r;r++)s+=i["xn"+r]+i["xs"+(r+1)];i.e=s}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,r,s){this.t=t,this.p=e,this.v=i,this.r=s,r&&(r._prev=this,this._next=r)}),fe=(E._parseToProxy=function(t,e,i,r,s,n){var a,o,l,h,u,_=r,f={},p={},c=i._transform,d=L;for(i._transform=null,L=e,r=u=i.parse(t,e,r,s),L=d,n&&(i._transform=c,_&&(_._prev=null,_._prev&&(_._prev._next=null)));r&&r!==_;){if(1>=r.type&&(o=r.p,p[o]=r.s+r.c,f[o]=r.s,n||(h=new _e(r,"s",o,h,r.r),r.c=0),1===r.type))for(a=r.l;--a>0;)l="xn"+a,o=r.p+"_"+l,p[o]=r.data[l],f[o]=r[l],n||(h=new _e(r,l,o,h,r.rxp[l]));r=r._next}return{proxy:f,end:p,firstMPT:h,pt:u}},E.CSSPropTween=function(t,e,r,s,a,o,l,h,u,_,f){this.t=t,this.p=e,this.s=r,this.c=s,this.n=l||e,t instanceof fe||n.push(this.n),this.r=h,this.type=o||0,u&&(this.pr=u,i=!0),this.b=void 0===_?r:_,this.e=void 0===f?r+s:f,a&&(this._next=a,a._prev=this)}),pe=a.parseComplex=function(t,e,i,r,s,n,a,o,l,u){i=i||n||"",a=new fe(t,e,0,0,a,u?2:1,null,!1,o,i,r),r+="";var _,f,p,c,g,v,y,T,w,x,P,S,R=i.split(", ").join(",").split(" "),k=r.split(", ").join(",").split(" "),C=R.length,O=h!==!1;for((-1!==r.indexOf(",")||-1!==i.indexOf(","))&&(R=R.join(" ").replace(D,", ").split(" "),k=k.join(" ").replace(D,", ").split(" "),C=R.length),C!==k.length&&(R=(n||"").split(" "),C=R.length),a.plugin=l,a.setRatio=u,_=0;C>_;_++)if(c=R[_],g=k[_],T=parseFloat(c),T||0===T)a.appendXtra("",T,ie(g,T),g.replace(m,""),O&&-1!==g.indexOf("px"),!0);else if(s&&("#"===c.charAt(0)||ne[c]||b.test(c)))S=","===g.charAt(g.length-1)?"),":")",c=oe(c),g=oe(g),w=c.length+g.length>6,w&&!z&&0===g[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(k[_]).join("transparent")):(z||(w=!1),a.appendXtra(w?"rgba(":"rgb(",c[0],g[0]-c[0],",",!0,!0).appendXtra("",c[1],g[1]-c[1],",",!0).appendXtra("",c[2],g[2]-c[2],w?",":S,!0),w&&(c=4>c.length?1:c[3],a.appendXtra("",c,(4>g.length?1:g[3])-c,S,!1)));else if(v=c.match(d)){if(y=g.match(m),!y||y.length!==v.length)return a;for(p=0,f=0;v.length>f;f++)P=v[f],x=c.indexOf(P,p),a.appendXtra(c.substr(p,x-p),Number(P),ie(y[f],P),"",O&&"px"===c.substr(x+P.length,2),0===f),p=x+P.length;a["xs"+a.l]+=c.substr(p)}else a["xs"+a.l]+=a.l?" "+c:c;if(-1!==r.indexOf("=")&&a.data){for(S=a.xs0+a.data.s,_=1;a.l>_;_++)S+=a["xs"+_]+a.data["xn"+_];a.e=S+a["xs"+_]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ce=9;for(l=fe.prototype,l.l=l.pr=0;--ce>0;)l["xn"+ce]=0,l["xs"+ce]="";l.xs0="",l._next=l._prev=l.xfirst=l.data=l.plugin=l.setRatio=l.rxp=null,l.appendXtra=function(t,e,i,r,s,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=r||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=s,a["xn"+o]=e,a.plugin||(a.xfirst=new fe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,s,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=s,a)):(a["xs"+o]+=e+(r||""),a)};var de=function(t,e){e=e||{},this.p=e.prefix?V(t)||t:t,o[t]=o[this.p]=this,this.format=e.formatter||he(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},me=E._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var r,s,n=t.split(","),a=e.defaultValue;for(i=i||[a],r=0;n.length>r;r++)e.prefix=0===r&&e.prefix,e.defaultValue=i[r]||a,s=new de(n[r],e)},ge=function(t){if(!o[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";me(t,{parser:function(t,i,r,s,n,a,l){var h=(window.GreenSockGlobals||window).com.greensock.plugins[e];return h?(h._cssRegister(),o[r].parse(t,i,r,s,n,a,l)):(B("Error: "+e+" js file not loaded."),n)}})}};l=de.prototype,l.parseComplex=function(t,e,i,r,s,n){var a,o,l,h,u,_,f=this.keyword;if(this.multi&&(D.test(i)||D.test(e)?(o=e.replace(D,"|").split("|"),l=i.replace(D,"|").split("|")):f&&(o=[e],l=[i])),l){for(h=l.length>o.length?l.length:o.length,a=0;h>a;a++)e=o[a]=o[a]||this.dflt,i=l[a]=l[a]||this.dflt,f&&(u=e.indexOf(f),_=i.indexOf(f),u!==_&&(i=-1===_?l:o,i[a]+=" "+f));e=o.join(", "),i=l.join(", ")}return pe(t,this.p,e,i,this.clrs,this.dflt,r,this.pr,s,n)},l.parse=function(t,e,i,r,n,a){return this.parseComplex(t.style,this.format(q(t,this.p,s,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){me(t,{parser:function(t,r,s,n,a,o){var l=new fe(t,s,0,0,a,2,s,!1,i);return l.plugin=o,l.setRatio=e(t,r,n._tween,s),l},priority:i})};var ve="scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),ye=V("transform"),Te=j+"transform",we=V("transformOrigin"),xe=null!==V("perspective"),be=E.Transform=function(){this.skewY=0},Pe=E.getTransform=function(t,e,i,r){if(t._gsTransform&&i&&!r)return t._gsTransform;var s,n,o,l,h,u,_,f,p,c,d,m,g,v=i?t._gsTransform||new be:new be,y=0>v.scaleX,T=2e-5,w=1e5,x=179.99,b=x*M,P=xe?parseFloat(q(t,we,e,!1,"0 0 0").split(" ")[2])||v.zOrigin||0:0;for(ye?s=q(t,Te,e,!0):t.currentStyle&&(s=t.currentStyle.filter.match(O),s=s&&4===s.length?[s[0].substr(4),Number(s[2].substr(4)),Number(s[1].substr(4)),s[3].substr(4),v.x||0,v.y||0].join(","):""),n=(s||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],o=n.length;--o>-1;)l=Number(n[o]),n[o]=(h=l-(l|=0))?(0|h*w+(0>h?-.5:.5))/w+l:l;if(16===n.length){var S=n[8],R=n[9],k=n[10],C=n[12],A=n[13],D=n[14];if(v.zOrigin&&(D=-v.zOrigin,C=S*D-n[12],A=R*D-n[13],D=k*D+v.zOrigin-n[14]),!i||r||null==v.rotationX){var L,X,I,F,E,Y,z,U=n[0],B=n[1],j=n[2],W=n[3],V=n[4],H=n[5],Q=n[6],Z=n[7],$=n[11],G=Math.atan2(Q,k),K=-b>G||G>b;v.rotationX=G*N,G&&(F=Math.cos(-G),E=Math.sin(-G),L=V*F+S*E,X=H*F+R*E,I=Q*F+k*E,S=V*-E+S*F,R=H*-E+R*F,k=Q*-E+k*F,$=Z*-E+$*F,V=L,H=X,Q=I),G=Math.atan2(S,U),v.rotationY=G*N,G&&(Y=-b>G||G>b,F=Math.cos(-G),E=Math.sin(-G),L=U*F-S*E,X=B*F-R*E,I=j*F-k*E,R=B*E+R*F,k=j*E+k*F,$=W*E+$*F,U=L,B=X,j=I),G=Math.atan2(B,H),v.rotation=G*N,G&&(z=-b>G||G>b,F=Math.cos(-G),E=Math.sin(-G),U=U*F+V*E,X=B*F+H*E,H=B*-E+H*F,Q=j*-E+Q*F,B=X),z&&K?v.rotation=v.rotationX=0:z&&Y?v.rotation=v.rotationY=0:Y&&K&&(v.rotationY=v.rotationX=0),v.scaleX=(0|Math.sqrt(U*U+B*B)*w+.5)/w,v.scaleY=(0|Math.sqrt(H*H+R*R)*w+.5)/w,v.scaleZ=(0|Math.sqrt(Q*Q+k*k)*w+.5)/w,v.skewX=0,v.perspective=$?1/(0>$?-$:$):0,v.x=C,v.y=A,v.z=D}}else if(!(xe&&!r&&n.length&&v.x===n[4]&&v.y===n[5]&&(v.rotationX||v.rotationY)||void 0!==v.x&&"none"===q(t,"display",e))){var J=n.length>=6,te=J?n[0]:1,ee=n[1]||0,ie=n[2]||0,re=J?n[3]:1;v.x=n[4]||0,v.y=n[5]||0,u=Math.sqrt(te*te+ee*ee),_=Math.sqrt(re*re+ie*ie),f=te||ee?Math.atan2(ee,te)*N:v.rotation||0,p=ie||re?Math.atan2(ie,re)*N+f:v.skewX||0,c=u-Math.abs(v.scaleX||0),d=_-Math.abs(v.scaleY||0),Math.abs(p)>90&&270>Math.abs(p)&&(y?(u*=-1,p+=0>=f?180:-180,f+=0>=f?180:-180):(_*=-1,p+=0>=p?180:-180)),m=(f-v.rotation)%180,g=(p-v.skewX)%180,(void 0===v.skewX||c>T||-T>c||d>T||-T>d||m>-x&&x>m&&false|m*w||g>-x&&x>g&&false|g*w)&&(v.scaleX=u,v.scaleY=_,v.rotation=f,v.skewX=p),xe&&(v.rotationX=v.rotationY=v.z=0,v.perspective=parseFloat(a.defaultTransformPerspective)||0,v.scaleZ=1)}v.zOrigin=P;for(o in v)T>v[o]&&v[o]>-T&&(v[o]=0);return i&&(t._gsTransform=v),v},Se=function(t){var e,i,r=this.data,s=-r.rotation*M,n=s+r.skewX*M,a=1e5,o=(0|Math.cos(s)*r.scaleX*a)/a,l=(0|Math.sin(s)*r.scaleX*a)/a,h=(0|Math.sin(n)*-r.scaleY*a)/a,u=(0|Math.cos(n)*r.scaleY*a)/a,_=this.t.style,f=this.t.currentStyle;if(f){i=l,l=-h,h=-i,e=f.filter,_.filter="";var p,d,m=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==f.position,w="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+h+", M22="+u,x=r.x,b=r.y;if(null!=r.ox&&(p=(r.oxp?.01*m*r.ox:r.ox)-m/2,d=(r.oyp?.01*g*r.oy:r.oy)-g/2,x+=p-(p*o+d*l),b+=d-(p*h+d*u)),v?(p=m/2,d=g/2,w+=", Dx="+(p-(p*o+d*l)+x)+", Dy="+(d-(p*h+d*u)+b)+")"):w+=", sizingMethod='auto expand')",_.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(A,w):w+" "+e,(0===t||1===t)&&1===o&&0===l&&0===h&&1===u&&(v&&-1===w.indexOf("Dx=0, Dy=0")||T.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&_.removeAttribute("filter")),!v){var P,S,R,k=8>c?1:-1;for(p=r.ieOffsetX||0,d=r.ieOffsetY||0,r.ieOffsetX=Math.round((m-((0>o?-o:o)*m+(0>l?-l:l)*g))/2+x),r.ieOffsetY=Math.round((g-((0>u?-u:u)*g+(0>h?-h:h)*m))/2+b),ce=0;4>ce;ce++)S=J[ce],P=f[S],i=-1!==P.indexOf("px")?parseFloat(P):Q(this.t,S,parseFloat(P),P.replace(y,""))||0,R=i!==r[S]?2>ce?-r.ieOffsetX:-r.ieOffsetY:2>ce?p-r.ieOffsetX:d-r.ieOffsetY,_[S]=(r[S]=Math.round(i-R*(0===ce||2===ce?1:k)))+"px"}}},Re=E.set3DTransformRatio=function(){var t,e,i,r,s,n,a,o,l,h,u,_,p,c,d,m,g,v,y,T,w,x,b,P=this.data,S=this.t.style,R=P.rotation*M,k=P.scaleX,C=P.scaleY,O=P.scaleZ,A=P.perspective;if(f){var D=1e-4;D>k&&k>-D&&(k=O=2e-5),D>C&&C>-D&&(C=O=2e-5),!A||P.z||P.rotationX||P.rotationY||(A=0)}if(R||P.skewX)v=Math.cos(R),y=Math.sin(R),t=v,s=y,P.skewX&&(R-=P.skewX*M,v=Math.cos(R),y=Math.sin(R),"simple"===P.skewType&&(T=Math.tan(P.skewX*M),T=Math.sqrt(1+T*T),v*=T,y*=T)),e=-y,n=v;else{if(!(P.rotationY||P.rotationX||1!==O||A))return S[ye]="translate3d("+P.x+"px,"+P.y+"px,"+P.z+"px)"+(1!==k||1!==C?" scale("+k+","+C+")":""),void 0;t=n=1,e=s=0}u=1,i=r=a=o=l=h=_=p=c=0,d=A?-1/A:0,m=P.zOrigin,g=1e5,R=P.rotationY*M,R&&(v=Math.cos(R),y=Math.sin(R),l=u*-y,p=d*-y,i=t*y,a=s*y,u*=v,d*=v,t*=v,s*=v),R=P.rotationX*M,R&&(v=Math.cos(R),y=Math.sin(R),T=e*v+i*y,w=n*v+a*y,x=h*v+u*y,b=c*v+d*y,i=e*-y+i*v,a=n*-y+a*v,u=h*-y+u*v,d=c*-y+d*v,e=T,n=w,h=x,c=b),1!==O&&(i*=O,a*=O,u*=O,d*=O),1!==C&&(e*=C,n*=C,h*=C,c*=C),1!==k&&(t*=k,s*=k,l*=k,p*=k),m&&(_-=m,r=i*_,o=a*_,_=u*_+m),r=(T=(r+=P.x)-(r|=0))?(0|T*g+(0>T?-.5:.5))/g+r:r,o=(T=(o+=P.y)-(o|=0))?(0|T*g+(0>T?-.5:.5))/g+o:o,_=(T=(_+=P.z)-(_|=0))?(0|T*g+(0>T?-.5:.5))/g+_:_,S[ye]="matrix3d("+[(0|t*g)/g,(0|s*g)/g,(0|l*g)/g,(0|p*g)/g,(0|e*g)/g,(0|n*g)/g,(0|h*g)/g,(0|c*g)/g,(0|i*g)/g,(0|a*g)/g,(0|u*g)/g,(0|d*g)/g,r,o,_,A?1+-_/A:1].join(",")+")"},ke=E.set2DTransformRatio=function(t){var e,i,r,s,n,a=this.data,o=this.t,l=o.style;return a.rotationX||a.rotationY||a.z||a.force3D?(this.setRatio=Re,Re.call(this,t),void 0):(a.rotation||a.skewX?(e=a.rotation*M,i=e-a.skewX*M,r=1e5,s=a.scaleX*r,n=a.scaleY*r,l[ye]="matrix("+(0|Math.cos(e)*s)/r+","+(0|Math.sin(e)*s)/r+","+(0|Math.sin(i)*-n)/r+","+(0|Math.cos(i)*n)/r+","+a.x+","+a.y+")"):l[ye]="matrix("+a.scaleX+",0,0,"+a.scaleY+","+a.x+","+a.y+")",void 0)};me("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType",{parser:function(t,e,i,r,n,o,l){if(r._transform)return n;var h,u,_,f,p,c,d,m=r._transform=Pe(t,s,!0,l.parseTransform),g=t.style,v=1e-6,y=ve.length,T=l,w={};if("string"==typeof T.transform&&ye)_=g.cssText,g[ye]=T.transform,g.display="block",h=Pe(t,null,!1),g.cssText=_;else if("object"==typeof T){if(h={scaleX:re(null!=T.scaleX?T.scaleX:T.scale,m.scaleX),scaleY:re(null!=T.scaleY?T.scaleY:T.scale,m.scaleY),scaleZ:re(T.scaleZ,m.scaleZ),x:re(T.x,m.x),y:re(T.y,m.y),z:re(T.z,m.z),perspective:re(T.transformPerspective,m.perspective)},d=T.directionalRotation,null!=d)if("object"==typeof d)for(_ in d)T[_]=d[_];else T.rotation=d;h.rotation=se("rotation"in T?T.rotation:"shortRotation"in T?T.shortRotation+"_short":"rotationZ"in T?T.rotationZ:m.rotation,m.rotation,"rotation",w),xe&&(h.rotationX=se("rotationX"in T?T.rotationX:"shortRotationX"in T?T.shortRotationX+"_short":m.rotationX||0,m.rotationX,"rotationX",w),h.rotationY=se("rotationY"in T?T.rotationY:"shortRotationY"in T?T.shortRotationY+"_short":m.rotationY||0,m.rotationY,"rotationY",w)),h.skewX=null==T.skewX?m.skewX:se(T.skewX,m.skewX),h.skewY=null==T.skewY?m.skewY:se(T.skewY,m.skewY),(u=h.skewY-m.skewY)&&(h.skewX+=u,h.rotation+=u)}for(xe&&null!=T.force3D&&(m.force3D=T.force3D,c=!0),m.skewType=T.skewType||m.skewType||a.defaultSkewType,p=m.force3D||m.z||m.rotationX||m.rotationY||h.z||h.rotationX||h.rotationY||h.perspective,p||null==T.scale||(h.scaleZ=1);--y>-1;)i=ve[y],f=h[i]-m[i],(f>v||-v>f||null!=L[i])&&(c=!0,n=new fe(m,i,m[i],f,n),i in w&&(n.e=w[i]),n.xs0=0,n.plugin=o,r._overwriteProps.push(n.n));return f=T.transformOrigin,(f||xe&&p&&m.zOrigin)&&(ye?(c=!0,i=we,f=(f||q(t,i,s,!1,"50% 50%"))+"",n=new fe(g,i,0,0,n,-1,"transformOrigin"),n.b=g[i],n.plugin=o,xe?(_=m.zOrigin,f=f.split(" "),m.zOrigin=(f.length>2&&(0===_||"0px"!==f[2])?parseFloat(f[2]):_)||0,n.xs0=n.e=g[i]=f[0]+" "+(f[1]||"50%")+" 0px",n=new fe(m,"zOrigin",0,0,n,-1,n.n),n.b=_,n.xs0=n.e=m.zOrigin):n.xs0=n.e=g[i]=f):ee(f+"",m)),c&&(r._transformType=p||3===this._transformType?3:2),n},prefix:!0}),me("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),me("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,l,h,u,_,f,p,c,d,m,g,v,y,T,w,x,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(d=parseFloat(t.offsetWidth),m=parseFloat(t.offsetHeight),o=e.split(" "),l=0;b.length>l;l++)this.p.indexOf("border")&&(b[l]=V(b[l])),_=u=q(t,b[l],s,!1,"0px"),-1!==_.indexOf(" ")&&(u=_.split(" "),_=u[0],u=u[1]),f=h=o[l],p=parseFloat(_),v=_.substr((p+"").length),y="="===f.charAt(1),y?(c=parseInt(f.charAt(0)+"1",10),f=f.substr(2),c*=parseFloat(f),g=f.substr((c+"").length-(0>c?1:0))||""):(c=parseFloat(f),g=f.substr((c+"").length)),""===g&&(g=r[i]||v),g!==v&&(T=Q(t,"borderLeft",p,v),w=Q(t,"borderTop",p,v),"%"===g?(_=100*(T/d)+"%",u=100*(w/m)+"%"):"em"===g?(x=Q(t,"borderLeft",1,"em"),_=T/x+"em",u=w/x+"em"):(_=T+"px",u=w+"px"),y&&(f=parseFloat(_)+c+g,h=parseFloat(u)+c+g)),a=pe(P,b[l],_+" "+u,f+" "+h,!1,"0px",a);return a},prefix:!0,formatter:he("0px 0px 0px 0px",!1,!0)}),me("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,r,n,a){var o,l,h,u,_,f,p="background-position",d=s||H(t,null),m=this.format((d?c?d.getPropertyValue(p+"-x")+" "+d.getPropertyValue(p+"-y"):d.getPropertyValue(p):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==m.indexOf("%")!=(-1!==g.indexOf("%"))&&(f=q(t,"backgroundImage").replace(R,""),f&&"none"!==f)){for(o=m.split(" "),l=g.split(" "),F.setAttribute("src",f),h=2;--h>-1;)m=o[h],u=-1!==m.indexOf("%"),u!==(-1!==l[h].indexOf("%"))&&(_=0===h?t.offsetWidth-F.width:t.offsetHeight-F.height,o[h]=u?parseFloat(m)/100*_+"px":100*(parseFloat(m)/_)+"%");m=o.join(" ")}return this.parseComplex(t.style,m,g,n,a)},formatter:ee}),me("backgroundSize",{defaultValue:"0 0",formatter:ee}),me("perspective",{defaultValue:"0px",prefix:!0}),me("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),me("transformStyle",{prefix:!0}),me("backfaceVisibility",{prefix:!0}),me("userSelect",{prefix:!0}),me("margin",{parser:ue("marginTop,marginRight,marginBottom,marginLeft")}),me("padding",{parser:ue("paddingTop,paddingRight,paddingBottom,paddingLeft")}),me("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,r,n,a){var o,l,h;return 9>c?(l=t.currentStyle,h=8>c?" ":",",o="rect("+l.clipTop+h+l.clipRight+h+l.clipBottom+h+l.clipLeft+")",e=this.format(e).split(",").join(h)):(o=this.format(q(t,this.p,s,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),me("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),me("autoRound,strictUnits",{parser:function(t,e,i,r,s){return s}}),me("border",{defaultValue:"0px solid #000",parser:function(t,e,i,r,n,a){return this.parseComplex(t.style,this.format(q(t,"borderTopWidth",s,!1,"0px")+" "+q(t,"borderTopStyle",s,!1,"solid")+" "+q(t,"borderTopColor",s,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(le)||["#000"])[0]}}),me("borderWidth",{parser:ue("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),me("float,cssFloat,styleFloat",{parser:function(t,e,i,r,s){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new fe(n,a,0,0,s,-1,i,!1,0,n[a],e)}});var Ce=function(t){var e,i=this.t,r=i.filter||q(this.data,"filter"),s=0|this.s+this.c*t;100===s&&(-1===r.indexOf("atrix(")&&-1===r.indexOf("radient(")&&-1===r.indexOf("oader(")?(i.removeAttribute("filter"),e=!q(this.data,"filter")):(i.filter=r.replace(x,""),e=!0)),e||(this.xn1&&(i.filter=r=r||"alpha(opacity="+s+")"),-1===r.indexOf("opacity")?0===s&&this.xn1||(i.filter=r+" alpha(opacity="+s+")"):i.filter=r.replace(T,"opacity="+s))};me("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,r,n,a){var o=parseFloat(q(t,"opacity",s,!1,"1")),l=t.style,h="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),h&&1===o&&"hidden"===q(t,"visibility",s)&&0!==e&&(o=0),z?n=new fe(l,"opacity",o,e-o,n):(n=new fe(l,"opacity",100*o,100*(e-o),n),n.xn1=h?1:0,l.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Ce),h&&(n=new fe(l,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",r._overwriteProps.push(n.n),r._overwriteProps.push(i)),n}});var Oe=function(t,e){e&&(t.removeProperty?t.removeProperty(e.replace(P,"-$1").toLowerCase()):t.removeAttribute(e))},Ae=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.className=0===t?this.b:this.e;for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Oe(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.className!==this.e&&(this.t.className=this.e)};me("className",{parser:function(t,e,r,n,a,o,l){var h,u,_,f,p,c=t.className,d=t.style.cssText;if(a=n._classNamePT=new fe(t,r,0,0,a,2),a.setRatio=Ae,a.pr=-11,i=!0,a.b=c,u=$(t,s),_=t._gsClassPT){for(f={},p=_.data;p;)f[p.p]=1,p=p._next;_.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:c.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.className=a.e,h=G(t,u,$(t),l,f),t.className=c,a.data=h.firstMPT,t.style.cssText=d,a=a.xfirst=n.parse(t,h.difs,a,o)),a}});var De=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,r,s,n=this.t.style,a=o.transform.parse;if("all"===this.e)n.cssText="",s=!0;else for(e=this.e.split(","),r=e.length;--r>-1;)i=e[r],o[i]&&(o[i].parse===a?s=!0:i="transformOrigin"===i?we:o[i].p),Oe(n,i);s&&(Oe(n,ye),this.t._gsTransform&&delete this.t._gsTransform)}};for(me("clearProps",{parser:function(t,e,r,s,n){return n=new fe(t,r,0,0,n,2),n.setRatio=De,n.e=e,n.pr=-10,n.data=s._tween,i=!0,n}}),l="bezier,throwProps,physicsProps,physics2D".split(","),ce=l.length;ce--;)ge(l[ce]);l=a.prototype,l._firstPT=null,l._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,h=e.autoRound,i=!1,r=e.suffixMap||a.suffixMap,s=H(t,""),n=this._overwriteProps;var l,f,c,d,m,g,v,y,T,x=t.style;if(u&&""===x.zIndex&&(l=q(t,"zIndex",s),("auto"===l||""===l)&&(x.zIndex=0)),"string"==typeof e&&(d=x.cssText,l=$(t,s),x.cssText=d+";"+e,l=G(t,l,$(t)).difs,!z&&w.test(e)&&(l.opacity=parseFloat(RegExp.$1)),e=l,x.cssText=d),this._firstPT=f=this.parse(t,e,null),this._transformType){for(T=3===this._transformType,ye?_&&(u=!0,""===x.zIndex&&(v=q(t,"zIndex",s),("auto"===v||""===v)&&(x.zIndex=0)),p&&(x.WebkitBackfaceVisibility=this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):x.zoom=1,c=f;c&&c._next;)c=c._next;y=new fe(t,"transform",0,0,null,2),this._linkCSSP(y,null,c),y.setRatio=T&&xe?Re:ye?ke:Se,y.data=this._transform||Pe(t,s,!0),n.pop()}if(i){for(;f;){for(g=f._next,c=d;c&&c.pr>f.pr;)c=c._next;(f._prev=c?c._prev:m)?f._prev._next=f:d=f,(f._next=c)?c._prev=f:m=f,f=g}this._firstPT=d}return!0},l.parse=function(t,e,i,n){var a,l,u,_,f,p,c,d,m,g,v=t.style;for(a in e)p=e[a],l=o[a],l?i=l.parse(t,p,a,this,i,n,e):(f=q(t,a,s)+"",m="string"==typeof p,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||m&&b.test(p)?(m||(p=oe(p),p=(p.length>3?"rgba(":"rgb(")+p.join(",")+")"),i=pe(v,a,f,p,!0,"transparent",i,0,n)):!m||-1===p.indexOf(" ")&&-1===p.indexOf(",")?(u=parseFloat(f),c=u||0===u?f.substr((u+"").length):"",(""===f||"auto"===f)&&("width"===a||"height"===a?(u=te(t,a,s),c="px"):"left"===a||"top"===a?(u=Z(t,a,s),c="px"):(u="opacity"!==a?0:1,c="")),g=m&&"="===p.charAt(1),g?(_=parseInt(p.charAt(0)+"1",10),p=p.substr(2),_*=parseFloat(p),d=p.replace(y,"")):(_=parseFloat(p),d=m?p.substr((_+"").length)||"":""),""===d&&(d=a in r?r[a]:c),p=_||0===_?(g?_+u:_)+d:e[a],c!==d&&""!==d&&(_||0===_)&&(u||0===u)&&(u=Q(t,a,u,c),"%"===d?(u/=Q(t,a,100,"%")/100,e.strictUnits!==!0&&(f=u+"%")):"em"===d?u/=Q(t,a,1,"em"):(_=Q(t,a,_,d),d="px"),g&&(_||0===_)&&(p=_+u+d)),g&&(_+=u),!u&&0!==u||!_&&0!==_?void 0!==v[a]&&(p||"NaN"!=p+""&&null!=p)?(i=new fe(v,a,_||u||0,0,i,-1,a,!1,0,f,p),i.xs0="none"!==p||"display"!==a&&-1===a.indexOf("Style")?p:f):B("invalid "+a+" tween value: "+e[a]):(i=new fe(v,a,u,_-u,i,0,a,h!==!1&&("px"===d||"zIndex"===a),0,f,p),i.xs0=d)):i=pe(v,a,f,p,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},l.setRatio=function(t){var e,i,r,s=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;s;){if(e=s.c*t+s.s,s.r?e=e>0?0|e+.5:0|e-.5:n>e&&e>-n&&(e=0),s.type)if(1===s.type)if(r=s.l,2===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2;else if(3===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3;else if(4===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4;else if(5===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4+s.xn4+s.xs5;else{for(i=s.xs0+e+s.xs1,r=1;s.l>r;r++)i+=s["xn"+r]+s["xs"+(r+1)];s.t[s.p]=i}else-1===s.type?s.t[s.p]=s.xs0:s.setRatio&&s.setRatio(t);else s.t[s.p]=e+s.xs0;s=s._next}else for(;s;)2!==s.type?s.t[s.p]=s.b:s.setRatio(t),s=s._next;else for(;s;)2!==s.type?s.t[s.p]=s.e:s.setRatio(t),s=s._next},l._enableTransforms=function(t){this._transformType=t||3===this._transformType?3:2,this._transform=this._transform||Pe(this._target,s,!0)},l._linkCSSP=function(t,e,i,r){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,r=!0),i?i._next=t:r||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},l._kill=function(e){var i,r,s,n=e;if(e.autoAlpha||e.alpha){n={};for(r in e)n[r]=e[r];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(s=i.xfirst,s&&s._prev?this._linkCSSP(s._prev,i._next,s._prev._prev):s===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,s._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var Me=function(t,e,i){var r,s,n,a;if(t.slice)for(s=t.length;--s>-1;)Me(t[s],e,i);else for(r=t.childNodes,s=r.length;--s>-1;)n=r[s],a=n.type,n.style&&(e.push($(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||Me(n,e,i)};return a.cascadeTo=function(t,i,r){var s,n,a,o=e.to(t,i,r),l=[o],h=[],u=[],_=[],f=e._internals.reservedProps;for(t=o._targets||o.target,Me(t,h,_),o.render(i,!0),Me(t,u),o.render(0,!0),o._enabled(!0),s=_.length;--s>-1;)if(n=G(_[s],h[s],u[s]),n.firstMPT){n=n.difs;for(a in r)f[a]&&(n[a]=r[a]);l.push(e.to(_[s],i,n))}return l},t.activate([a]),a},!0)}),window._gsDefine&&window._gsQueue.pop()();
/*!
 * VERSION: beta 1.9.3
 * DATE: 2013-04-02
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=window.GreenSockGlobals||window,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},p=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},f=u("Back",p("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),p("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),p("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),p=u,f=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--p>-1;)i=f?Math.random():1/u*p,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),f?s+=Math.random()*r-.5*r:p%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),p=u;--p>-1;)a=l[p],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),f},!0)}),window._gsDefine&&window._gsQueue.pop()();
/*!
 * VERSION: 1.7.3
 * DATE: 2014-01-14
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";var t=document.documentElement,e=window,i=function(i,r){var s="x"===r?"Width":"Height",n="scroll"+s,a="client"+s,o=document.body;return i===e||i===t||i===o?Math.max(t[n],o[n])-(e["inner"+s]||Math.max(t[a],o[a])):i[n]-i["offset"+s]},r=window._gsDefine.plugin({propName:"scrollTo",API:2,version:"1.7.3",init:function(t,r,s){return this._wdw=t===e,this._target=t,this._tween=s,"object"!=typeof r&&(r={y:r}),this._autoKill=r.autoKill!==!1,this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),null!=r.x?(this._addTween(this,"x",this.x,"max"===r.x?i(t,"x"):r.x,"scrollTo_x",!0),this._overwriteProps.push("scrollTo_x")):this.skipX=!0,null!=r.y?(this._addTween(this,"y",this.y,"max"===r.y?i(t,"y"):r.y,"scrollTo_y",!0),this._overwriteProps.push("scrollTo_y")):this.skipY=!0,!0},set:function(t){this._super.setRatio.call(this,t);var r=this._wdw||!this.skipX?this.getX():this.xPrev,s=this._wdw||!this.skipY?this.getY():this.yPrev,n=s-this.yPrev,a=r-this.xPrev;this._autoKill&&(!this.skipX&&(a>7||-7>a)&&i(this._target,"x")>r&&(this.skipX=!0),!this.skipY&&(n>7||-7>n)&&i(this._target,"y")>s&&(this.skipY=!0),this.skipX&&this.skipY&&this._tween.kill()),this._wdw?e.scrollTo(this.skipX?r:this.x,this.skipY?s:this.y):(this.skipY||(this._target.scrollTop=this.y),this.skipX||(this._target.scrollLeft=this.x)),this.xPrev=this.x,this.yPrev=this.y}}),s=r.prototype;r.max=i,s.getX=function(){return this._wdw?null!=e.pageXOffset?e.pageXOffset:null!=t.scrollLeft?t.scrollLeft:document.body.scrollLeft:this._target.scrollLeft},s.getY=function(){return this._wdw?null!=e.pageYOffset?e.pageYOffset:null!=t.scrollTop?t.scrollTop:document.body.scrollTop:this._target.scrollTop},s._kill=function(t){return t.scrollTo_x&&(this.skipX=!0),t.scrollTo_y&&(this.skipY=!0),this._super._kill.call(this,t)}}),window._gsDefine&&window._gsQueue.pop()();
/** @preserve
 * jquery-image-loader
 *
 * Created at: 2011-12-01 08:32:01 +0200
 * Author: Yves Van Broekhoven
 * Version: 1.2.0
 * https://github.com/mrhenry/jquery-image-loader
 *
 * How to use:
 *
 * HTML:
 *
 * <div class="wrapper">
 *   <img data-src="url-to-image.jpg">
 * </div>
 *
 *
 * JS:
 *
 * $('.wrapper').loadImages({
 *   imgLoadedClb: function(){},
 *   allLoadedClb: function(){},
 *   imgErrorClb:  function(){},
 *   noImgClb:     function(){},
 *   dataAttr:     'src'
 * });
 *
 */

/*global jQuery:false*/

(function($) {
  "use strict";

  var _load,
      _callback,
      _removeData;

  $.fn.loadImages = function(options){
    options = $.extend({}, $.fn.loadImages.defaults, options);

    this.each(function(){
      var _this = this,
          $this = $(_this),
          $images;

      // Check if "this" is an image or an image container
      if ( $this.is('img') ) {
        $images = $this;
      } else {
        $images = $this.find('*[data-' + options.dataAttr + ']');
      }

      // If there are no images, exit immediately
      if ($images.length < 1) {
        if ($.isFunction(options.noImgClb)) {
          options.noImgClb.call(_this);
          return;
        }
      }

      // Attach dfd & options to our context element
      $this.data( 'dfd', $.Deferred() );
      $this.data( 'options', options );

      // Initialize counters
      $this.data('total_images_count', $images.length);
      $this.data('processed_count', 0);
      $this.data('failed_count', 0);

      // Async
      $.when( _load.call(_this, $images) )
       .then( function() {
          if ( $.isFunction( options.allLoadedClb ) ) {
            options.allLoadedClb.call(_this);
          }
       });

    });

    return this;
  };

  /*
   * Load image(s)
   * this [object] plugin selector object
   * @param $images [$object] $array of <img>
   */
  _load = function($images) {
    var _this   = this,
        $this   = $(_this),
        options = $this.data('options'),
        dfd     = $this.data('dfd');

    // Iterate images
    $images.each(function(){
      var $this = $(this),
          $img;

      if ( $this.is('img') ) {
        $img = $this;

      } else {
        $img = $('<img/>');

      }

      $img
        .load(function(){
          if ( !$this.is('img') ) {
            $this.css({
              'background-image': 'url("' + $this.data(options.dataAttr) + '")'
            });
          }
          _callback.call(_this, $this[0], 'success');
        })
        .error(function(){
          _callback.call(_this, $this[0], 'error');
        })
        .attr( 'src', $this.data(options.dataAttr) );
    });

    return dfd.promise();
  };


  /*
   * Callback after load/error
   *
   * this [object] plugin selector object
   * @param img    [object]  processed image object
   * @param status [string]  'success' or 'error'
   */
  _callback = function(img, status){
    var _this               = this,
        $this               = $(_this),
        dfd                 = $this.data('dfd'),
        options             = $this.data('options'),
        processed_count     = $this.data('processed_count') + 1,
        total_images_count  = $this.data('total_images_count');

    // Increase process count
    $this.data('processed_count', processed_count);

    // Image success callback
    if ( status === 'success' && $.isFunction(options.imgLoadedClb) ) {
      options.imgLoadedClb.call(img, processed_count, total_images_count);
    }

    // Image error callback
    if (status === 'error') {
      $this.data('failed_count', $this.data('failed_count') + 1);

      // Unbind load event to avoid triggering our load function again
      // when you for example add a fallback image
      $(this).unbind('load');

      if ( $.isFunction(options.imgErrorClb) ) {
        options.imgErrorClb.call(img, processed_count, total_images_count);
      }

    }

    // If all images are processed, resolve
    if ( processed_count === total_images_count ) {
      // If failed count equals image count, then reject
      // otherwise resolve
      if ( $this.data('failed_count') === total_images_count ) {
        if ( $.isFunction(options.noImgClb) ) {
          options.noImgClb.call(_this);
        }
        dfd.reject();

      } else {
        dfd.resolve();

      }
      _removeData.call(_this);

    }

  };

  /*
   * Remove all plugin temporary data
   * this [object] plugin selector object
   */
  _removeData = function() {
    $(this).removeData('dfd', 'options', 'total_images_count', 'processed_count', 'failed_count');
  };


  /*
   * Plugin defaults
   */
  $.fn.loadImages.defaults = {
    imgLoadedClb: false, /* callback when an image is loaded.
                            this [object] loaded image
                            @params processed [integer] processed images
                            @params total  [integer] total images
                         */
    allLoadedClb: false, /* callback when all images are loaded.
                            this [object] wrapper element
                         */
    imgErrorClb: false,  /* callback when an image fails loading.
                            this [object] failed image
                         */
    noImgClb: false,     /* callback when there are no images to be loaded,
                            or all are failed.
                            this [object] wrapper element
                         */
    dataAttr: 'src'       /* the data attribute that contains the src */

  };

}(jQuery));


//set up main namespace
var main = {
    models: {},
    views: {},
    utils: {},
    router: {}
};

// ----------------- Backbone.View.prototype.close
Backbone.View.prototype.close = function () {
    console.log("VIEW CLOSE ---");
    //extend the close method of of all views
    //apply beforeClose
    if (this.beforeClose) {
        console.log("VIEW CLOSE --- beforeClose");
        this.beforeClose();
    }
}
// ----------------- Backbone.View.prototype.dispose
Backbone.View.prototype.dispose = function () {
    if (this.beforeDispose) {
        console.log("VIEW DISPOSE --- beforeDispose");
        this.beforeDispose();
    }
    this.unbind();
    console.log('View undelegateEvents');
    this.undelegateEvents();
    this.remove();
    console.log('View removed');
};

// _________________________________________________________________________ main Router
main.Router = Backbone.Router.extend({
	 DOWN: "down",
	 UP: "up",
	 UNROUTED_TIMEOUT: 200,
	 autoScrolling: false,
	 scrollDirection: "",
	 unrouted: true,
     routes:{
        "": "method",
        "how": "how",
        "work": "work",
        "team": "team",
        "disciplines": "disciplines",
        "contact": "contact"
     },
     // ----------------- initialize
     initialize: function() {
        console.log("initialize");
        var self = this;
        this.responseGeneratorModel = new main.models.ResponseGeneratorModel();
        this.mainView = new main.views.MainView( {el: $('#main', this.el)} );
        this.initTouchEvents();
        //break down url and navigate to the right place
        //grab the string after the last "/"
        var route = window.location.href;
        var slash_index = route.lastIndexOf("/");
        if( slash_index > 0 && route.length >= (slash_index+1) ) route = route.slice( (slash_index+1), route.length );
     },
     // ----------------- method
     method: function(){
         console.log("main --- method");
         var self = this;
         var id = "method";
         //if first time set a delay
         if(this.unrouted){
	         setTimeout(function(){	
		          self.mainView.scrollToPane(id);
	         }, this.UNROUTED_TIMEOUT);
	         self.unrouted = false;
         }
         else{
		     //scroll to the  posY
		     this.mainView.scrollToPane(id);
	     }
     },
     // ----------------- how
     how: function(){
          console.log("main --- how");
          var self = this;
          var id = "how";
          //if first time set a delay
          if(this.unrouted){
	         setTimeout(function(){
		          self.mainView.scrollToPane(id);
	         }, this.UNROUTED_TIMEOUT);
	         self.unrouted = false;
          }
          else{
		     //scroll to the  posY
		     this.mainView.scrollToPane(id);
	      }
     },
     // ----------------- work
     work: function(){
          console.log("main --- work");
          var self = this;
          var id = "work";
          //if first time set a delay
         if(this.unrouted){
	         setTimeout(function(){	
		          self.mainView.scrollToPane(id);
	         }, this.UNROUTED_TIMEOUT);
	         self.unrouted = false;
         }
         else{
		     //scroll to the  posY
		     this.mainView.scrollToPane(id);
		 }
     },
     // ----------------- team
     team: function(){
          console.log("main --- team");
          var self = this;
          var id = "team";
           //if first time set a delay
         if(this.unrouted){
	         setTimeout(function(){
		          self.mainView.scrollToPane(id);
	         }, this.UNROUTED_TIMEOUT);
	         self.unrouted = false;
         }
         else{
		     //scroll to the  posY
		     this.mainView.scrollToPane(id);
		 }
     },
     // ----------------- disciplines
     disciplines: function(){
         console.log("main --- disciplines");
         var self = this;
         var id = "disciplines";         
           //if first time set a delay
         if(this.unrouted){
	         setTimeout(function(){
		          self.mainView.scrollToPane(id);
	         }, this.UNROUTED_TIMEOUT);
	         self.unrouted = false;
         }
         else{
		     //scroll to the  posY
		     this.mainView.scrollToPane(id);
	     }
     },
     // ----------------- contact
     contact: function(){
         console.log("main --- contact");
         var self = this;
         var id = "contact";         
           //if first time set a delay
         if(this.unrouted){
	         setTimeout(function(){	
		          self.mainView.scrollToPane(id);	          
	         }, this.UNROUTED_TIMEOUT);
	         self.unrouted = false;
         }
         else{
		     //scroll to the  posY
		     this.mainView.scrollToPane(id);
		 }
     },
     // ----------------- initTouchEvents
     initTouchEvents: function() {
        var self = this;
        // Check of browser supports touch events
        if (document.documentElement.hasOwnProperty('ontouchstart')) {
           // document.addEventListener('touchmove', function (event) { event.preventDefault(); }, false);
           //if so register touch event listener to change the "selected" state of the item
           $('#main').on('touchstart', 'a', function(event) {
              self.select_timeout = setTimeout(function(){
                  self.selectItem(event);
              }, 100);
           });
           $('#main').on('touchend', 'a', function(event) {
              clearTimeout(self.select_timeout);
              self.deselectItem(event);
           });
        }
        else {
            // otherwise register mouse events instead
            $('#main').on('mousedown', 'a', function(event) {
               self.selectItem(event);
            });
            $('#main').on('mouseup', 'a', function(event) {
                 self.deselectItem(event);
            });
         }
     },
     // ----------------- posize
     posize: function() {
     },
     // ----------------- selectItem
     selectItem: function(event) {
       $(event.currentTarget).addClass('tappable-active');
     },
     // ----------------- deselectItem
     deselectItem: function(event) {
       $(event.currentTarget).removeClass('tappable-active');
     }
});

// _________________________________________________________________________


// ----------------- document ready handler
$(document).ready(function() {
    onDocReady();
});
// ----------------- doc handler
function onDocReady() {
    console.log("onDocReady");
    var cur_src;
	Modernizr.addTest('hires', function() {
	    // starts with default value for modern browsers
	    var dpr = window.devicePixelRatio || 1;
	    return !!(dpr > 1);
	});
	Modernizr.addTest('large', function() {
	    var device_width = $(window).width();
	    //var device_width = window.width;
	    return (device_width >= 640);
	});
	if (!Modernizr.svg) {
		//replace the svg with the png
		$('img').each(function(){
			cur_src = $(this).attr('src');
			cur_src.replace(/svg/g, 'png');
			$(this).attr('src', cur_src);
		});
	}
	if (!Modernizr.hires) {
		//replace the svg with the png
		$('img').each(function(){
			cur_src = $(this).attr('src');
			cur_src.replace(/@2x/g, '');
			$(this).attr('src', cur_src);
		});
	}
    main.utils.templateLoader.load([ 'scene-swipe-instruction',
								 'scene-castle',
							     'scene-xray',
							     'scene-lab',
							     'scene-creation',
							     'scene-gerbil',
							     'scene-boy',
							     'scene-final',
							     'corporate',
							     'orientation-alert',
							     'story',
							     'audio-loader'
                               ],
        function() {
            console.log("templates loaded");
            onReady();
    });
    //onReady();
}
// ----------------- onReady
function onReady() {
    main.router = new main.Router();
    if (Modernizr.history){
	    //Backbone.history.start({ pushState: true, root: "kelsey/projects/madstudios/mobile" });
	    Backbone.history.start({ pushState: true });
    }
   else{
	    Backbone.history.start();
   }
}


// ------------------------------------------------------------------------- templateLoader
// asynchronously loads templates
// located in separate .html files

main.utils.templateLoader = {
    templates: {},
    
    // __________________________________ functions
    // ------------ load
    load: function(names, callback) {

        var deferreds = [],
            self = this;

        $.each(names, function(index, name) {
            deferreds.push($.get('tpl/' + name + '.html', function(data) {
                self.templates[name] = data;
            }));
        });

        $.when.apply(null, deferreds).done(callback);
    },

    // ------------ get
    // Get template by name from hash of preloaded templates
    get: function(name) {
        return this.templates[name];
    }

};

// _________________________________________________________________________ PaneModel
main.models.PaneModel = Backbone.Model.extend({
     // set vars
     defaults: {
         "id": -1,
         "el_id": "",
         "posY": -1,
         "endPosY": -1,
         "view": {}
      },
     // ----------------- initialize
     initialize: function(){
         console.log("PaneModel ---- initialize");
     }
});

// _________________________________________________________________________ PaneCollection
main.models.PaneCollection = Backbone.Collection.extend({
   model: main.models.PaneModel,
   // ----------------- initialize
   initialize: function(){
       console.log("PaneCollection --- initialize");
   }
});

// _________________________________________________________________________ PaneModel
main.models.ResponseGeneratorModel = Backbone.Model.extend({
	 // set vars
     defaults: {
         "questions": [
			"How can I increase my social media presence?",
			"What's more effective, advertising online or on television?",
			"Are Facebook ads effective at targeting consumers?",
			"What are some simple web marketing techniques?",
			"How do I use web analytics to my advantage?"
		 ],
         "answers": [
			"Increase your social media presence by deleting all of your social media. Less is more these days.",
			"Dunk an intern in a pool of yellow paint and have him or her run around town screaming your company's name.",
			"Eat a bag of peyote and marinate on that thought a little more. We're sure you'll come up with something.",
			"Well, lets see…you could always film a squirrel performing some sort of human activity. People always go for that.",
			"One word: Tom Selleck's Mustache  (Okay, that's three words.)",
			"Think of branding your company the same way celebrities name their babies. Choose your favorite color, animal and plant, combine them into one word and Voilà! You've got a multi-million dollar enterprise.",
			"I'm sorry I didn't understand that question. Were you asking how to market socket appliances, or rocket scientists?",
			"Of course we can help you with all of your SEO needs, but first we'll need you to take a blood oath that you'll never leave our company for another.",
			"When I was just a young website my father, the Internet, told me I could grow up to be whatever I wanted. Now look at me, I'm answering questions from you. Talk about a let down.",
			"What would make you think we'd know that? Google it, pal.",
			"Ok, here's what you do. You make a drop on the corner of Broward and 3rd Ave. Once we verify that the money is in the bag, you can then have your answer back.",
			"Product placement in films and television is a great way to have your company stand out. It's only going to cost you a couple million dollars. No biggie.",
			"Hire an up and coming rapper to pitch your product to his fans. These guys know a lot about selling product for a premium price.",
			"Stick your underwear on your head and do a rain dance. Hey, it worked for Mark Zuckerberg.",
			"Marketing is kind of like dancing. The more you drink the better you get at it. Did that answer your question?",
			"Wow, that's a great question. You're too smart for us. Sorry we can't work with you.",
			"I know! We'll make bumper stickers. Who doesn't love a great, big sticker stuck to your care that is impossible to remove?!",
			"Ask Anthony Weiner to handle your social media.",
			"Try a Crystal Pepsi. Mmmmm. 1990's Deliciousness.",
			"Tell your 11-year-old cousin to handle your company's social media. Those kids know everything about the interwebs.",
			"Increase company morale by having a local dance instructor teach everyone how to twerk. Both fun and awkward.",
			'To gain new clients, ask employees to stand on the side of road with a sandwich sign that says, "I need someone new in my life. Apply within."',
			"Hmmmmm...I'm not sure. You should probably hire Justin Timberlake for that. Everything he touches is gold.",
			"Our Aunt Mildred usually fixes that by adding whiskey...to everything.",
			"Put your right foot in. Put your right foot out.  Put your right foot in and you shake it all about it. You do the hokey pokey and your turn yourself around. That's what it's all about.",
			"Wear thick brimmed glasses without lenses, you hipster, you.",
			"Put your big kid pants on and deal with it.",
			"Cool story, bro. Maybe you should talk to some about it.",
			"Oh. It's on the tip of our tongue! … Nope. Got nothin'.",
			"Have you tried shaking the Magic Eight Ball to get the answer you want?",
			"Your mom. (Yup. We went there.)",
			"Go to Target. Target has ALL the answers. And shoes. And cute kids' clothes. And holiday candy. And fishing poles. And...",
			"You have the same amount of hours in a day as Beyonce. You can figure it out.",
			"Mom used to use vinegar and baking soda to get that out.  Try it.",
			"Did you see the Tigers game yesterday? I know that doesn't answer your question. But it was an AWESOME game.",
			"C++ is just an extra special average grade on a test. Right?",
			"Tell HR and management you've organized a team-building event. Once you're there, show them the sumo suits and yell, &#34;GO!&#34;",
			"Sounds like an issue with efficiency. Are you currently awake?",
			"I don't know. Who are you? What are you doing here? Mom. MOM!",
			"To get to the other side.",
			"We should talk about this over drinks. I picked up the tab last time. Your turn!",
			"In our experience, we've found that ignoring the problem until it implodes is the best solution. Cool?"
		],
		"current_question": "",
		"current_answer": ""
     },
     // ----------------- initialize
     initialize: function(){
         console.log("ResponseGeneratorModel ---- initialize");
     }
});
// _________________________________________________________________________ SceneModel
main.models.SceneModel = Backbone.Model.extend({
     // set vars
     defaults: {
         "id": -1,
         "name": "",
         "topOffset": -1,
         "sounds": []
      },
     // ----------------- initialize
     initialize: function(){
         console.log("SceneModel ---- initialize");
     }
});

// _________________________________________________________________________ SceneCollection
main.models.SceneCollection = Backbone.Collection.extend({
   model: main.models.SceneModel,
   scenes: [
   	   { name:"scene-swipe-instruction" },
	   { name:"scene-castle" },
	   { name:"scene-xray" },
	   { name:"scene-lab" },
	   { name:"scene-creation" },
	   { name:"scene-gerbil" },
	   { name:"scene-boy" },
	   { name:"scene-final" }
   ],
   // ----------------- initialize
   initialize: function(){
       console.log("SceneCollection --- initialize");
       //create a model for each scene
       this.reset(this.scenes);
   },
   // ----------------- setAudio
   setAudio: function(audioCollection){
	   var sounds = [];
	   //for each model
	   //filter audioCollection
	   //by scene name
	   this.each(function(model){
		   sounds = audioCollection.filter(function(audio_model){
			   return ( model.get("name") == audio_model.get("scene") )
		   });
		   model.set({sounds: sounds});
	   });
	   
   }
});

// _________________________________________________________________________ LoaderModel
main.models.LoaderModel = Backbone.Model.extend({
     // set vars
     defaults: {
         "totalNumAssets": 0,
         "numAssetsLoaded": 0,
         "loadedRatio": 0
     },
     // ----------------- initialize
     initialize: function(){
         console.log("LoaderModel ---- initialize");
         var self = this;
     },
     // ----------------- handleSceneAssetLoaded
     handleSceneAssetLoaded: function(){	     
	     var cur_num_loaded = this.get("numAssetsLoaded");
	     cur_num_loaded++;
	     this.set({numAssetsLoaded: cur_num_loaded});
	     var loaded_rat = this.get("numAssetsLoaded")/this.get("totalNumAssets");
	     this.set({loadedRatio: loaded_rat});
     },
     // ----------------- addNumAssets
     addNumAssets: function(num_assets){
	     var cur_total_num_assets = this.get("totalNumAssets");
	     cur_total_num_assets+=num_assets;
	     this.set({totalNumAssets: cur_total_num_assets});
	 }
});

// _________________________________________________________________________ AudioModel
main.models.AudioModel = Backbone.Model.extend({
	ACTIVE_CLASS: "active",
     // set vars
     defaults: {
         "id": -1,
         "scene": "",
         "name": "",
         "src": ""
      },
     // ----------------- initialize
     initialize: function(){
         console.log("AudioModel ---- initialize");
     }
});

// _________________________________________________________________________ AudioCollection
main.models.AudioCollection = Backbone.Collection.extend({
   model: main.models.AudioModel,
   sounds: [
   	   //--------- cene-swipe-instruction
	   { scene:"scene-swipe-instruction", name:"royal-trumpet", src:"sounds/castle-horn.mp3" },
	   //--------- scene-castle
	   { scene:"scene-castle", name:"lighting-sizzle", src:"sounds/xray-lighting-sizzle1.mp3" },
	   //--------- scene-xray
	   { scene:"scene-xray", name:"victorian-man-scream", src:"sounds/xray-lab-m.mp3" },
	   //--------- scene-lab
	   { scene:"scene-lab", name:"lab-fart", src:"sounds/lab-creation-m.mp3" },
	   //--------- scene-creation
	   { scene:"scene-creation", name:"gorilla-swoop", src:"sounds/gorilla-gerbil-m.mp3" },
	   //--------- scene-gerbil
	   { scene:"scene-gerbil", name:"gerbil-squeal", src:"sounds/behold-answer-m.mp3" },
	   //--------- scene-boy
   ],
   // ----------------- initialize
   initialize: function(){
       console.log("AudioCollection --- initialize");
       //create a model for each scene
       this.reset(this.sounds);
   }
});

// _________________________________________________________________________ BasicAudioCollection
main.models.BasicAudioCollection = Backbone.Collection.extend({
   model: main.models.AudioModel,
   // ----------------- initialize
   initialize: function(){
       console.log("AudioCollection --- initialize");
   }
});


// _________________________________________________________________________ MainView
main.views.MainView = Backbone.View.extend({
	STAGE_LEFT_CLASS: "stage-left",
	STAGE_CENTER_CLASS: "stage-center",
	STAGE_RIGHT_CLASS: "stage-right",
	STAGE_TRANSITION: "stage-transition",
	EXIT_STORY_PANE: "contact",
    // ----------------- initialize
    initialize: function() {
        console.log("MainView ---- initialize");
        this.render();
    },
    // ----------------- render
    render: function(eventName) {
        console.log("MainView ---- initialize");
        var self = this;
        this.initiateCorporate();
	     $(window).resize(  function(){
			var device_width = $(window).width();
			if(device_width >= 640) $(window.document.documentElement).addClass('large');
			else $(window.document.documentElement).removeClass('large');
	        self.posize(); 
	       }
        );
        return this;
	},
	// ----------------- posize
    posize: function() {
	    $(this.el).css('height', $(window).height() + 'px');
	    if(this.corporateView && this.corporateView.posize) this.corporateView.posize();
	    if(this.storyView && this.storyView.posize) this.storyView.posize();
    },
    // ----------------- scrollToPane
    scrollToPane: function(id) {
	   this.corporateView.scrollTo(id);
    },
    // ----------------- initiateCorporate
    initiateCorporate: function(){
	    var self = this;
	    if(!this.corporateView) this.corporateView = new main.views.CorporateView( {el: $('.corporate', this.el)} );
	    else {
		    this.corporateView = new main.views.CorporateView();
		    $(this.el).append($(this.corporateView.el));
		    //set scrolltop to go to the 
		    //contact pane
		    setTimeout(function(){
			    var animate = false;
			    //self.corporateView.scrollWindowTo(self.EXIT_STORY_PANE, animate);
			    self.corporateView.scrollTo(self.EXIT_STORY_PANE, animate);
		    }, 200);
	    }
	    //append corporate view
	    $(this.corporateView.el).on(this.corporateView.CORPORATE_SUBMIT, function(event){
		    //first begin the hide animation 
		    //of the corporate view
		    //then open/add the story view 
		    //so that the memory spike during the add
		    //does not affect the performance of
		    //the hide animation
		    setTimeout(function(){
			    self.beginHideCorporateView();
			    setTimeout(function(){
				   self.openStory();
			    }, 1200);
			}, 200);
        });
    },
	// ----------------- openStory
    openStory: function() {
	    console.log("openStory");
	    var self = this;
	    var story_div;
	    if(!this.storyView) this.storyView = new main.views.StoryView( { el: $('.story', this.el) } );
	    else {
			this.storyView = new main.views.StoryView();
		    $(this.el).append($(this.storyView.el));
		}
	    //create Story view
	    $(this.storyView.el).on(this.storyView.EXIT, function(event){
		    self.closeStory();
	    });
	    $(this.storyView.el).on(this.storyView.HIDE_COMPLETE, function(event){
		    self.handleHideStoryComplete();
	    });
	    $(this.storyView.el).addClass(this.STAGE_CENTER_CLASS);
	    this.storyView.render();
	    this.storyView.startLoader();
	    setTimeout(function(){
	    	self.storyView.show();
		    setTimeout(function(){
			    console.log("removeCorporate");
			    self.removeCorporate();
		    }, 1200);
	    }, 200);
	},
	// ----------------- closeStory
    closeStory: function() {
	    console.log("closeStory");
	    var self = this;
	    //first hide the story
	    this.storyView.hide();	    
	},
    // ----------------- handleHideStoryComplete
    handleHideStoryComplete: function() {
	    var self = this;

	    setTimeout(function(){
	       /* $(document.body).height($(window).height());
	        $(document.body).css('overflow-x', 'visible');
	        $(document.body).css('overflow-y', 'visible');
	        $(document.documentElement).css('overflow-x', 'visible');
	        $(document.documentElement).css('overflow-y', 'visible');
	        $(document.documentElement).removeClass('no-skrollr');*/
		    //add the corporate view back
		    self.initiateCorporate();
		    //add the left transition class
		    $(self.corporateView.el).addClass(self.STAGE_TRANSITION);
		    $(self.storyView.el).addClass(self.STAGE_TRANSITION);
		    $(self.corporateView.el).removeClass(self.STAGE_CENTER_CLASS);
		    $(self.corporateView.el).addClass(self.STAGE_LEFT_CLASS);
		    $(self.corporateView.el).css('top', '0');
		    //set it to the left of the stage
		    //transition the story view 
		    //out to the right
		    //set it from fixed to absolute
		    setTimeout(function(){
			    /*$(self.storyView.el).css('position', 'absolute');*/
			    $(self.storyView.el).removeClass(self.STAGE_CENTER_CLASS);
			    $(self.storyView.el).addClass(self.STAGE_RIGHT_CLASS);     
			    //add webkit transition end listener
			    $(self.storyView.el).on('transitionend webkitTransitionEnd oTransitionEnd', function(){
				    $(self.storyView.el).off('transitionend webkitTransitionEnd oTransitionEnd');
				    self.removeStory();
				});
			    //trasnition th ecorporate view
			    //in from the left
			    $(self.corporateView.el).removeClass(self.STAGE_LEFT_CLASS);
			    $(self.corporateView.el).addClass(self.STAGE_CENTER_CLASS);
		    }, 300);
		 },200);
    },
    // ----------------- beginHideCorporateView
    beginHideCorporateView: function() {
	    this.corporateView.beginHide();
    },
    // ----------------- removeCorporate
    removeCorporate: function() {
	    this.corporateView.dispose(); 
	    $(this.corporateView.el).off();
	    $(this.corporateView.el).remove();
    },
    // ----------------- removeStory
    removeStory: function() {
    	    console.log("removeStory ----------- before dispose");

	    this.storyView.dispose(); 
	    console.log("removeStory ----------- after dispose");
	    $(this.storyView.el).css('visibility', 'hidden');
	    $(this.storyView.el).off();
	    $(this.storyView.el).remove();
    }
});
// _________________________________________________________________________ CorporateView
main.views.CorporateView = Backbone.View.extend({
	CORPORATE_SUBMIT: "corporate_submit",
	CORPORATE: "corporate",
	CORPORATE_INIT: "corporate-init",
	template_load_external: false,
	templateLoader: main.utils.templateLoader,
    // ----------------- initialize
    initialize: function() {
        console.log("CorporateView ---- initialize");
        //if no el pull it in through template loader
        if(!($(this.el).hasClass(this.CORPORATE_INIT))) {
	         console.log("template load external");
	         this.template = _.template(this.templateLoader.get(this.CORPORATE));
	         this.template_load_external = true;
        }
        this.render();
    },
    // ----------------- render
    render: function(eventName) {
        console.log("CorporateView ---- render");
	    var self = this;
	    if(this.template_load_external) {
		    $(this.el).html(this.template());
		    $(this.el).addClass(this.CORPORATE);
	    }
	    //set touch move to default in case it 
	    //is coming from the story where 
	    //default behavior is prevented
	    document.ontouchmove = function(event){ return true; }
        this.paneContainerView = new main.views.PaneContainerView({el: $('#pane-container', this.el)});
        this.menuView = new main.views.MenuView({el: $('.menu', this.el)});
        this.headerView = new main.views.HeaderView({el: $('#header', this.el)});
	    this.footerView = new main.views.FooterView({el: $('#footer', this.el)});  
        this.paneContainerView.offset = $(this.headerView.el).outerHeight();
         this.scroller_el =  $('.scroller', this.el);
        this.scroller_el.scroll(function(){
	        var scroll_top = $(this).scrollTop();
	        if(scroll_top < self.lastScrollTop) main.router.scrollDirection = main.router.UP;
	        else main.router.scrollDirection = main.router.DOWN;
	        self.lastScrollTop = scroll_top;
	        self.paneContainerView.checkPanes(scroll_top);
	        self.menuView.checkMenu(scroll_top);
	    });
	    $(this.paneContainerView.el).on(this.paneContainerView.SCROLL_TO_BOTTOM, function(event, params){
			self.scrollToBottom();
        });
        $(this.paneContainerView.el).on(this.paneContainerView.CLICK, function(events){
			self.menuView.close();
        });
        $(this.paneContainerView.el).on(this.paneContainerView.METHOD_PANE_SUBMIT, function(event){
	        $(self.el).trigger(self.CORPORATE_SUBMIT);
        });

        setTimeout(function(){
	        self.posize();
	        self.show();
        }, 100);
        return this;
	},
	// ----------------- posize
    posize: function() {
	     //make sure scroller is heightof window
	     var to_height = $(window).height();
	     this.scroller_el.css('height', to_height + 'px');
	     this.paneContainerView.posize();
	     this.menuView.posize();
	     this.headerView.open_nav_width = $(this.menuView.el).outerWidth();
	     this.headerView.posize();
    },
    // ----------------- scrollWindowTo
    /*scrollWindowTo: function(id, animate) {
	    if(animate == null ||  typeof animate === undefined) animate = true;
	   this.paneContainerView.scrollWindowTo(id, animate);
    },*/
    // ----------------- scrollTo
    scrollTo: function(id, animate) {
	   this.paneContainerView.scrollTo(this.scroller_el, id, animate);
    },
     // ----------------- scrollTo
    scrollToBottom: function() {
	   this.paneContainerView.scrollToBottom(this.scroller_el);
    },
    // ----------------- beginHide
    beginHide: function() {
        var self = this;
    	this.paneContainerView.scrollToTop(this.scroller_el);
	    this.headerView.beginHide();
	    this.menuView.beginHide();
	    this.paneContainerView.beginHide();
	    this.basicDispose();
        
        //set a timeout and
        //to ensure scrollTop has finished
        //do a clearLowerPanes();
        setTimeout(function(){
            self.paneContainerView.clearLowerPanes();
        }, 1500);
        
	    //add the gold cover
	    //setTimeout
	    //show the gold cover
	    //move corporate off stage and make it invisible
    },
    // ----------------- hide
    hide: function() {
	     //$(this.el).css('visibility', 'hidden');
    },
	// ----------------- show
    show: function() {
	     console.log("show ");
	     $(this.el).css('visibility', 'visible');
    },
    // ----------------- basicDispose
	basicDispose: function(){
		this.scroller_el.off('scroll');
	},
	// ----------------- beforeDispose
	beforeDispose: function(){
		 console.log("CorporateView ---- beforeDispose");
		 $(this.el).removeClass(this.CORPORATE_INIT);
		 //remove any event listeners 
		 $(this.paneContainerView.el).off();
		 $(this.menuView.el).off();
	     this.scroller_el.off('scroll');
		 //dispose children
		 this.paneContainerView.dispose();
		 this.menuView.dispose();
		 this.headerView.dispose();
		 this.footerView.dispose();
	}
});
// _________________________________________________________________________ PaneContainerView
main.views.PaneContainerView = Backbone.View.extend({
	//METHOD_PANE_ACTIVATE: "method_pane_activate",
	PANE_ACTIVATE: "pane_activate",
	PANE_ID_END_STR: "-pane",
	SCROLL_TO_BOTTOM: "scroll_to_bottom",
	METHOD_PANE_SUBMIT: "method_pane_submit",
	CLICK: "",
	offset: 0,
	paneViews: [],
	curPaneView: {},
	defaultPaneId: "method",
	cur_scroll_top: 0,
    // ----------------- initialize
    initialize: function() {
        console.log("PaneContainerView ---- initialize");
        this.render();
    },
    // ----------------- render
    render: function(eventName) {
        console.log("PaneContainerView ---- render");
        var self = this;
        this.paneViews = [];
        //create a view for each pane
        this.methodPaneView = new main.views.MethodPaneView( {el: $('#method-pane', this.el)} );
        $(this.methodPaneView.el).on(this.methodPaneView.ACTIVATE, function(event, params){
	        $(self.el).trigger(self.PANE_ACTIVATE, [params]);
        });
        $(this.methodPaneView.el).on(this.methodPaneView.SUBMIT, function(event){
	        $(self.el).trigger(self.METHOD_PANE_SUBMIT);
	        self.scrollToTop();
        });
        //set the methodPaneView to active
        this.methodPaneView.activate();
        this.curPaneView =  this.methodPaneView;
        this.methodPaneView.render();
        this.paneViews.push(this.methodPaneView);
        this.howPaneView = new main.views.HowPaneView( {el: $('#how-pane', this.el)} );
        $(this.howPaneView.el).on(this.howPaneView.ACTIVATE, function(event, params){
	        $(self.el).trigger(self.PANE_ACTIVATE, [params]);
        });
        this.howPaneView.render();
        this.paneViews.push(this.howPaneView);
        this.workPaneView = new main.views.WorkPaneView( {el: $('#work-pane', this.el)} );
        $(this.workPaneView.el).on(this.workPaneView.ACTIVATE, function(event, params){
	        $(self.el).trigger(self.PANE_ACTIVATE, [params]);
        });
        this.workPaneView.render();
        this.paneViews.push(this.workPaneView);
        this.teamPaneView = new main.views.TeamPaneView( {el: $('#team-pane', this.el)} );
        $(this.teamPaneView.el).on(this.teamPaneView.ACTIVATE, function(event, params){
	        $(self.el).trigger(self.PANE_ACTIVATE, [params]);
        });
        this.teamPaneView.render();
        this.paneViews.push(this.teamPaneView);
        this.disciplinesPaneView = new main.views.DisciplinesPaneView( {el: $('#disciplines-pane', this.el)} );
        $(this.disciplinesPaneView.el).on(this.disciplinesPaneView.ACTIVATE, function(event, params){
	        $(self.el).trigger(self.PANE_ACTIVATE, [params]);
        });
        this.disciplinesPaneView.render();
        this.paneViews.push(this.disciplinesPaneView);
		this.contactPaneView = new main.views.ContactPaneView( {el: $('#contact-pane', this.el)} );
		$(this.contactPaneView.el).on(this.contactPaneView.ACTIVATE, function(event, params){
	        $(self.el).trigger(self.PANE_ACTIVATE, [params]);
        });
        $(this.contactPaneView.el).on(this.contactPaneView.RESIZE, function(event){
	        console.log("this.contactPaneView.RESIZE");
	        self.initPanes();
        });
        $(this.contactPaneView.el).on(this.contactPaneView.SHOW_MESSAGE, function(event){
	        console.log("this.contactPaneView.SHOW_MESSAGE");
	        //scrollto bottom of the screen
	        //self.scrollToBottom();
	        $(self.el).trigger(self.SCROLL_TO_BOTTOM);
        });
        this.contactPaneView.render();
        this.paneViews.push(this.contactPaneView);
        //on click anywhere
        //close the menu
        $(this.el).click(function(event){
	        $(self.el).trigger(self.CLICK);
	        return false;
        });
		setTimeout(function(){
	        self.lastScrollTop = $(window).scrollTop();
	        self.initPanes();
	        /*setTimeout(function(){
		        self.checkPanes();
	        }, 400);*/
        }, 200);
        return this;
	},
	// ----------------- initPanes
    initPanes: function() {
	    var self = this;
    	this.paneCollection = new main.models.PaneCollection();
	    var pane_obj, pos, pos_top, end_pos_top, pane_model, paneHeight;
	    var method_pos = $(this.methodPaneView.el).position();
		//save each pane id
	    //and its absolute position on the page
	    for(var i=0;i<this.paneViews.length;i++){
		    pane_view = this.paneViews[i];
		    pos = $(pane_view.el).position();
			paneHeight = $(pane_view.el).outerHeight();
		    if(i == 0) pos_top = pos.top + this.cur_scroll_top;
		    else pos_top = pos.top + this.cur_scroll_top - pane_view.offset;

		    end_pos_top = pos_top + paneHeight;
		    pane_model = new main.models.PaneModel({id: i+1, el_id: $(pane_view.el).attr('id'), posY: pos_top, endPosY: end_pos_top, view: pane_view}); 
		    self.paneCollection.add(pane_model);
	    }
    },
    // ----------------- posize
    posize: function() {
	    this.methodPaneView.posize();
	    this.howPaneView.posize();
	    this.workPaneView.posize();
	    this.teamPaneView.posize();
	    this.disciplinesPaneView.posize();
	    this.contactPaneView.posize();

	    this.initPanes();
    },
    // ----------------- checkPanes
    checkPanes: function(scroll_top) {
		console.log("checkPanes");
		var pane_view, pane_model;
		var self = this;
		this.cur_scroll_top = scroll_top;
		scroll_top += this.offset;

		if(scroll_top >= 0 && this.paneCollection){
		    pane_model = this.paneCollection.find(function(model){
		         return ( scroll_top >= model.get("posY") && scroll_top < model.get("endPosY") );
		    });
		    //get the view based upon pane_data_model.el_id
			if(pane_model) {
				pane_view = pane_model.get("view");
				if( !$(pane_view.el).hasClass(pane_view.ACTIVE_CLASS) ) pane_view.activate();
				this.curPaneView.deactivate();
				this.curPaneView = pane_view;
			}
			//also check for display
			//display
			/*pane_model = this.paneCollection.find(function(model){
				 var is_pane = false;
				 if(scroll_top + $(window).height() <= model.get("posY") + 100 &&  scroll_top + $(window).height() >= model.get("posY") - 100 && main.router.scrollDirection == main.router.DOWN ) is_pane = true;
				 else if(scroll_top <= model.get("endPosY") + 100 &&  scroll_top >= model.get("endPosY") - 100 && main.router.scrollDirection == main.router.UP) is_pane = true;
		         return is_pane;
		    });
		    //get the view based upon pane_data_model.el_id
			if(pane_model) {
				pane_view = pane_model.get("view");
				pane_view.display();
			}*/
		}
    },
    // ----------------- scrollTo
    scrollTo: function(el, id, animate) {
	    var self = this;
	    //scroll the window to the correct pane 
	    //according to id
	    if(this.paneCollection){
			  /*var pane_model = this.paneCollection.find(function(model){
				return ( model.get("el_id") == (id + self.PANE_ID_END_STR) );
			  });
			  var scroll_to_y = pane_model.get("posY");
			  TweenLite.to(el, 1.4, {scrollTo:{y:scroll_to_y, autoKill:false}, ease:Expo.easeOut, onStart:self.onAutoScrollStart, onComplete:self.onAutoScrollComplete});*/
			  
			  if(animate == null || typeof animate === undefined) animate = true;
			  var self = this;
			  //scroll the window to the correct pane 
			  //according to id
			  //if(this.paneCollection){
				  var pane_model = this.paneCollection.find(function(model){
					return ( model.get("el_id") == (id + self.PANE_ID_END_STR) );
				  });
				  var scroll_to_y = pane_model.get("posY");
				  console.log("PaneContainer ----- scroll_to_y = " + scroll_to_y);
				
				  if(animate) TweenLite.to(el, 1.4, {scrollTo:{y:scroll_to_y, autoKill:false}, ease:Expo.easeOut, onStart:self.onAutoScrollStart, onComplete:self.onAutoScrollComplete});
				  else $(el).scrollTop(scroll_to_y);
			  //}
		}
    },
    // ----------------- scrollToTop
    scrollToTop: function(el) {
		    TweenLite.to(el, 1.4, {scrollTo:{y:0, autoKill:false}, ease:Expo.easeOut, onStart:self.onAutoScrollStart, onComplete:self.onAutoScrollComplete});
    },
    // ----------------- scrollToBottom
    scrollToBottom: function(el) {
	  if(el){
		  var self = this;
		  var scroll_to_y = $(this.el).height() - $(window).height() + (this.offset*2);
		  TweenLite.to(el, 1.4, {scrollTo:{y:scroll_to_y, autoKill:false}, ease:Expo.easeOut, onStart:self.onAutoScrollStart, onComplete:self.onAutoScrollComplete});
	  }
    },
    // ----------------- beginHide
    beginHide: function() {
	    this.methodPaneView.beginHide();
    },
    // ----------------- clearLowerPanes
    clearLowerPanes: function() {
        //remove and dispose
        //all panes except the
        //method pane
        this.howPaneView.dispose();
        $(this.howPaneView.el).remove();
        this.howPaneView.close();
        this.workPaneView.dispose();
        $(this.workPaneView.el).remove();
        this.workPaneView.close();
        this.teamPaneView.dispose();
        $(this.teamPaneView.el).remove();
        this.teamPaneView.close();
        this.disciplinesPaneView.dispose();
        $(this.disciplinesPaneView.el).remove();
        this.disciplinesPaneView.close();
        this.contactPaneView.dispose();
        $(this.contactPaneView.el).remove();
        this.contactPaneView.close();
    },
    // ----------------- onAutoScrollStart
    onAutoScrollStart: function() {
	    main.router.autoScrolling = true;
    },
    // ----------------- onAutoScrollComplete
    onAutoScrollComplete: function() {
        main.router.autoScrolling = false;
    },
    // ----------------- beforeDispose
	beforeDispose: function(){
		var view;
		$(this.el).off();
		$(this.el).unbind();
		//remove events
		//dispose each pane
		for( var i=0;i<this.paneViews.length;i++){
			view = this.paneViews[i];
			view.dispose();
			$(view.el).off();
		}
	}
});
// _________________________________________________________________________ PaneView
main.views.PaneView = Backbone.View.extend({
	ANIM_OFFSET: 50,
	ACTIVE_CLASS: "pane-active",
	FULL_SCREEN_CLASS: "full-screen",
	CONTENT_TRANSITION_CLASS: "pane-content-transition",
	DEACTIVATE: "deactivate",
	ACTIVATE: "activate",
	RESIZE: "resize",
	offset: 0,
	default_content_margin: 0,
	id: "",
	_route: "",
	paneActivationData: [],
    // ----------------- initialize
    initialize: function() {
        console.log("PaneView ---- initialize");
    },
    // ----------------- render
    render: function(eventName) {
	    var self = this;
	    if(this.beforeRender) this.beforeRender();
        console.log("PaneView ---- render");
        this.content_el = $('.content', this.el);
        //create a view for each pane
       setTimeout(function(){
	        self.default_content_margin = parseInt(self.content_el.css('margin-top'));
        }, 150);
        return this;
	},
	// ----------------- posize
    posize: function() {
		if( $(this.el).hasClass(this.FULL_SCREEN_CLASS)){
			var to_h = $(window).height();
			var min_h = parseInt( $(this.el).css('min-height') );
			if(to_h < min_h) to_h = min_h;
			$(this.el).height( to_h );
		} 
		if(this.beforePosize) this.beforePosize();
    },
    // ----------------- activate
    activate: function() {
	    $(this.el).addClass(this.ACTIVE_CLASS);
	    if(this.beforeActivate) this.beforeActivate();
	    if(main.router.navigate && !main.router.autoScrolling)  main.router.navigate(this._route, {trigger: false});
	    $(this.el).trigger(this.ACTIVATE, [this.id]);
	    //animate margin of content
	    //if(this.content_el) this.animateContent();
    },
    // ----------------- display
    display: function() {
	    //if(this.content_el) this.animateContent();
    }, 
    // ----------------- deactivate
    deactivate: function() {
    	$(this.el).removeClass(this.ACTIVE_CLASS);
	    if(this.beforeDeactivate) this.beforeDeactivate();
	    $(this.el).trigger(this.DEACTIVATE);
    }//,
    // ----------------- animateContent
    /*animateContent: function() {
    	var self = this;
    	clearTimeout(this.animContentTimeout);
    	clearTimeout(this.delayAnimContent);
	    this.animContentTimeout = setTimeout(function(){
		    console.log("animateContent ---- this.id = " + self.id);
		    //remove the transition class
		    self.content_el.removeClass(self.CONTENT_TRANSITION_CLASS);
		    //set the content margin to positive
		    //offset if scrolling in down direction
		    //set the content margin to negative if the 
		    //scrolling direction is down
		    if(main.router.scrollDirection == main.router.DOWN){
			    self.content_el.css('margin-top', (parseInt(self.default_content_margin) + self.ANIM_OFFSET) + 'px');
		    }
		    else{
			   	self.content_el.css('margin-top', (parseInt(self.default_content_margin) - self.ANIM_OFFSET) + 'px'); 
		    }

		    //them set it back to 0
		    //add the transition Class
		    self.delayAnimContent = setTimeout(function(){
		    	self.content_el.addClass(self.CONTENT_TRANSITION_CLASS);
			    self.content_el.css('margin-top', self.default_content_margin + 'px');
		    }, 400);
	    }, 10);
    }*/
});
// _________________________________________________________________________ MethodPaneView
main.views.MethodPaneView = main.views.PaneView.extend({
	CONTENT_TRANS_CLASS: "method-content-trans",
	PREPEND_PLACEHOLDER_STR: "Example: ",
	SUBMIT: "submit",
	id: "method",
	_route: "",
	offset: 0,
	questions: [],
	events: {
		'click .btn-down': 'onBtnDownClick',
		'click .btn-ask': 'onBtnAskClick'	
	},
	// ----------------- initialize
    initialize: function() {
        console.log("MethodPaneView ---- initialize"); 
        var self = this;
    },
    // ----------------- beforeRender
    beforeRender: function() {
        console.log("MethodPaneView ---- beforeRender");
        var self = this;
        setTimeout(function(){       
	        self.model = main.router.responseGeneratorModel;
	        self.questions = self.model.get("questions");
	        self.setQuestionPlaceholder();
			self.generateQuestion();
        }, 100);
        //choose a question
		
		$('#input-method', this.el).keyup(function(event){
		    if(event.keyCode == 13){
		        self.submit();
		    }
		});
	},
	// ----------------- beforeActivate
    beforeActivate: function() {
	    //animate the btn-arrow
	},
	// ----------------- beforeActivate
    beforeDeactivate: function() {
    },
    // ----------------- beforePosize
    beforePosize: function() {
	    //position content to be nearly centered
	    var _height = $(this.el).outerHeight();
	    this.spacer_el = $('.spacer', this.el);
	    var to_margin_top = (_height - $('.row-content', this.el).outerHeight())/2.0 + 18;
	    $('.content', this.el).css('margin-top', to_margin_top + 'px');
	    //make sure spacer sticks to the bottom
	    var to_top = _height - this.spacer_el.outerHeight();
	    this.spacer_el.css('top', to_top + 'px');
    },
	// ----------------- setQuestionPlaceholder
	setQuestionPlaceholder:function(){
		var quest = this.generateQuestion();
		//set the input placeholder to the 
		//generated question
		$('#input-method', this.el).attr('placeholder', this.PREPEND_PLACEHOLDER_STR + quest);
	},
	// ----------------- generateQuestion
	generateQuestion:function(){
		//generate a random number
		//between 0 and num questions
		var rand = Math.floor(Math.random()*this.questions.length);
		this.model.set({currentQuestion: rand});
		return this.questions[rand];
	},
	// ----------------- submit
	submit:function(){
        //un focus the input
        //so that the keyboard closes
        $('#input-method', this.el).blur();
		// send them into 
		//the story
		$(this.el).trigger(this.SUBMIT);
	},
	// ----------------- beginHide
    beginHide: function() {
	    var self = this;
	    var content_arr = [ $('.btn-arrow-container', this.el),
						    $('.shadow-bordered-blue', this.el),
						    $('.input-container', this.el),
						    $('h3', this.el),
						    $('h1', this.el) ];
		var content_el, delay;
		for(var i=0;i<content_arr.length;i++){
		    content_el = content_arr[i];
		    content_el.addClass(this.CONTENT_TRANS_CLASS);
		    delay = i*100;
		   
		    this.hideContent(content_el, delay);
	    }
	    setTimeout(function(){
		    self.spacer_el.addClass(self.CONTENT_TRANS_CLASS);
		    self.spacer_el.css('top', $(self.el).outerHeight() + 'px')
	    }, 600);
    },
    // ----------------- hideContent
	hideContent: function(el, delay){
		var self = this;
		setTimeout(function(){
			el.css('top', $(self.el).outerHeight() + 'px');
		}, delay);
	},
	// ----------------- onBtnDownClick
	onBtnDownClick: function(){
		if (Modernizr.history) main.router.navigate('', {trigger: false});
		main.router.navigate('how', {trigger: true});
		return false;
	},
	// ----------------- onBtnAskClick
	onBtnAskClick: function(){
		this.submit();
		return false;
	}
	
});
// _________________________________________________________________________ HowPaneView
main.views.HowPaneView = main.views.PaneView.extend({
	id: "how",
	_route: "how",
	offset: 0,
	events: {
		'click .btn-move' : 'onBtnMoveClick'
	},
	// ----------------- initialize
    initialize: function() {
        console.log("HowPaneView ---- initialize");
    },
    // ----------------- beforeRender
    beforeRender: function() {
        console.log("HowPaneView ---- beforeRender");
	},
	// ----------------- onBtnMoveClick
    onBtnMoveClick: function() {
        main.router.navigate('how', {trigger: false});
    	main.router.navigate('', {trigger: true});
	    return false;
    }
});
// _________________________________________________________________________ WorkPaneView
main.views.WorkPaneView = main.views.PaneView.extend({
	VIDEO_EMBED_STR: '<iframe src="//instagram.com/p/m5N1iwEWuP/embed/" width="_width_" height="_height_" frameborder="0" scrolling="no" wmode="Opaque" allowtransparency="true"></iframe>',
	id: "work",
	_route: "work",
	offset: 0,
	    // ----------------- initialize
    initialize: function() {
        console.log("WorkPaneView ---- initialize");
    },
    // ----------------- beforeRender
    beforeRender: function() {
        console.log("WorkPaneView ---- beforeRender");
        var self = this;
        this.offset = -($('.pane-title', this.el).outerHeight() + $('.spacer', this.el).outerHeight()) - 1;
        //setTimeout to add the video
        setTimeout(function(){
	        self.addVideo();
        }, 1500);
	},
	// ----------------- addVideo
    addVideo: function() {
	    //make the vide the size of its parent
	    var parent_width = $('.video-container', this.el).outerWidth() - 2;
	    var parent_height = $('.video-container', this.el).outerHeight() - 2;
	    var embed_str = this.VIDEO_EMBED_STR.replace("_width_", parent_width);
	    embed_str = embed_str.replace("_height_", parent_height);
	    var video_el = $(embed_str);
	    $('.video-container', this.el).append(video_el);
    },
    // ----------------- beforePosize
    beforePosize: function() {
	    var parent_width = $('.video-container', this.el).outerWidth() - 2;
	    var parent_height = $('.video-container', this.el).outerHeight() - 2;
	    $('iframe', this.el).css('width', parent_width + 'px');
	    $('iframe', this.el).css('height', parent_height + 'px');
    }
});
// _________________________________________________________________________ TeamPaneView
main.views.TeamPaneView = main.views.PaneView.extend({
	id: "team",
	_route: "team",
	offset: 0,
	events: {
		'click .btn-move' : 'onBtnMoveClick'
	},
	// ----------------- initialize
    initialize: function() {
        console.log("TeamPaneView ---- initialize");
    },
    // ----------------- beforeRender
    beforeRender: function() {
        console.log("TeamPaneView ---- beforeRender");
        this.offset = -$('.spacer', this.el).outerHeight() - 1;
	},
    // ----------------- onBtnMoveClick
    onBtnMoveClick: function() {
	    main.router.navigate('team', {trigger: false});
    	main.router.navigate('work', {trigger: true});
	    return false;
    }
});
// _________________________________________________________________________ DisciplinesPaneView
main.views.DisciplinesPaneView = main.views.PaneView.extend({
	id: "disciplines",
	_route: "disciplines",
	offset: 0,
	// ----------------- initialize
    initialize: function() {
        console.log("DisciplinesPaneView ---- initialize");
        //this.render();
    },
    // ----------------- beforeRender
    beforeRender: function() {
        console.log("DisciplinesPaneView ---- beforeRender");
        this.offset =  -$('.spacer', this.el).outerHeight() - 1;
	}
});
// _________________________________________________________________________ ContactPaneView
main.views.ContactPaneView = main.views.PaneView.extend({
	SHOW_MESSAGE: "showMessage",
	CUSTOM_FOCUS_CLASS: "custom-focus",
	offset: -2,
	id: "contact",
	_route: "contact",
	message_is_shown: false,
	locations: [
		{state:"fl", lat:"26.1233269", lng:"-80.1413047", name:"MAD SOUTH", directions_url:"https://www.google.com/maps/dir//101+NE+3rd+Ave+%231920,+Fort+Lauderdale,+FL+33301/@26.1233269,-80.1413047,17z/data=!4m13!1m4!3m3!1s0x88d90055c64579ed:0xf1b43f13a53ce760!2s101+NE+3rd+Ave+%231920!3b1!4m7!1m0!1m5!1m1!1s0x88d90055c64579ed:0xf1b43f13a53ce760!2m2!1d-80.1413047!2d26.1233269" },
		{state:"mn", lat:"44.984508", lng:"-93.274399", name:"MAD MIDWEST", directions_url:"https://www.google.com/maps/dir//333+Washington+Ave+N+%23321,+Minneapolis,+MN+55401/@44.984508,-93.274399,17z/data=!4m13!1m4!3m3!1s0x52b3328f1e4ef4cb:0x5c1e8331385ee5f!2s333+Washington+Ave+N+%23321!3b1!4m7!1m0!1m5!1m1!1s0x52b3328f1e4ef4cb:0x5c1e8331385ee5f!2m2!1d-93.274399!2d44.984508"}
	],
	events: {
		'click #btn-fl' : 'onBtnFlClick',
		'click #btn-mn' : 'onBtnMnClick',
		'click .btn-submit' : 'onBtnSubmitClick'
	},
	errors: {
		SEND_EMAIL_ERROR: "We could not complete your request.  Please check your connection and try again.",
	},
	validation_errors: [
		{error: "email", msg: "Please enter a valid E-mail address.", regExp: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
	],
	successes: {
		SEND_EMAIL_SUCCESS_H: "Thank you!",
		SEND_EMAIL_SUCCESS: "Your request was sent to the <b>Help Desk</b>."
	},
	mapStyles: [
		 {
		   "featureType": "landscape",
		   "elementType": "geometry.fill",
		   "stylers": [
		     { "color": "#333e48" }
		   ]
		 },{
		   "featureType": "poi",
		   "elementType": "geometry.fill",
		   "stylers": [
		     { "color": "#919191" }
		   ]
		 },{
		   "featureType": "poi",
		   "elementType": "geometry.stroke",
		   "stylers": [
		     { "color": "#ffa227" }
		   ]
		 },{
		   "featureType": "water",
		   "elementType": "geometry.fill",
		   "stylers": [
		     { "color": "#e7ebf3" }
		   ]
		 },{
		   "featureType": "administrative",
		   "elementType": "labels.text.stroke",
		   "stylers": [
		     { "color": "#ffffff" },
		     { "visibility": "off" }
		   ]
		 },{
		   "elementType": "labels.text",
		   "stylers": [
		     { "color": "#FFFFFF" }
		   ]
		 },{
		   "featureType": "road.arterial",
		   "elementType": "geometry.fill",
		   "stylers": [
		     { "color": "#ffa227" }
		   ]
		 },{
		   "featureType": "road.highway",
		   "elementType": "geometry.fill",
		   "stylers": [
		     { "color": "#ffc627" }
		   ]
		 },{
		   "featureType": "road.arterial",
		   "elementType": "geometry.stroke",
		   "stylers": [
		     { "visibility": "off" }
		   ]
		 },{
		   "featureType": "road.highway",
		   "elementType": "geometry.stroke",
		   "stylers": [
		     { "visibility": "off" }
		   ]
		 },{
		   "featureType": "road.local",
		   "elementType": "geometry.fill",
		   "stylers": [
		     { "color": "#797979" }
		   ]
		 },{
		   "featureType": "road.local",
		   "elementType": "geometry.stroke",
		   "stylers": [
		     { "visibility": "off" }
		   ]
		 },{
		   "featureType": "transit.line",
		   "elementType": "geometry.fill",
		   "stylers": [
		     { "color": "#ffc627" }
		   ]
		 },{
		   "featureType": "transit.line",
		   "elementType": "geometry.stroke",
		   "stylers": [
		     { "color": "#ffa227" }
		   ]
		 },{
		   "elementType": "labels.text.fill",
		   "stylers": [
		     { "color": "#FFFFFF" }
		   ]
		 },{
		   "elementType": "labels.text.stroke",
		   "stylers": [
		     { "visibility": "off" }
		   ]
		 },{
		   "featureType": "administrative",
		   "elementType": "labels.text.fill",
		   "stylers": [
		     { "color": "#FFFFFF" }
		   ]
		 },{
		   "featureType": "road",
		   "elementType": "labels",
		   "stylers": [
		     { "hue": "#ffc627" }
		   ]
		 }
	],
	mapOptions:  {
         mapTypeId: google.maps.MapTypeId.ROADMAP,
         zoomControl: false,
         streetViewControl: false,
         mapTypeControl: false,
         zoom: 18,
         draggable:false,
         scrollwheel: false
    },
	// ----------------- initialize
    initialize: function() {
        console.log("ContactPaneView ---- initialize");
    },
    // ----------------- beforeRender
    beforeRender: function() {
        console.log("ContactPaneView ---- beforeRender");
        var self = this;
        $('input', this.el).keyup(function(event){
		    if(event.keyCode == 13){
		        self.submit();
		    }
		});
        setTimeout(function(){
	        self.createMap();
        }, 1000);
	},
    // ----------------- createMap
    createMap: function(){
	    var self = this;
        this.map_canvas_el = $('.map', this.el);
        this.mapOptions.center = new google.maps.LatLng(this.locations[0].lat, this.locations[0].lng);
		var marker_img_path = 'images/corporate/png/mad_pin@2x.png';
		var marker_img_width = 22;
        var  marker_img_height = 28;
        this.markerImage = new google.maps.MarkerImage( marker_img_path, new google.maps.Size(marker_img_width, marker_img_height), new google.maps.Point(0, 0), null, new google.maps.Size(marker_img_width, marker_img_height) );
        var info_box_content = "<span style='font-size:11px;color:#333e48;'><b>" + this.locations[0].name + "</b><br/><a style='color:#333e48;' href='" + this.locations[0].directions_url + "' target=_blank >Get Directions &nbsp;></a></span>";
        this.map_canvas_el.gmap(this.mapOptions).bind('init', function(evt, map) {
	        self.map_canvas_el.gmap('addMarker', {position: self.locations[0].lat + ',' + self.locations[0].lng,  icon: self.markerImage, animation: google.maps.Animation.DROP}).click(function() {
				self.map_canvas_el.gmap('openInfoWindow', {'content': info_box_content}, this);
			});
			map.setOptions({styles: self.mapStyles});
			self.map = map;
			$(map).click(function(){
			});
        });
    },
    // ----------------- onBtnFlClick
    onBtnFlClick: function(){
	    this.showLocation("fl");
	    return false;
    },
    // ----------------- onBtnMnClick
    onBtnMnClick: function(){
	    this.showLocation("mn");
	    return false;
    },
	// ----------------- onBtnSubmitClick
    onBtnSubmitClick: function(){
	    this.submit();
    	return false;
	},
	// ----------------- clearForm
    clearForm: function(){
	    $('input', this.el).each( function(){
		    $(this).val("");
	    } );
	    $('textarea', this.el).each( function(){
		    $(this).val("");
	    } );
	},
	// ----------------- submit
    submit: function(){
	    var self = this;
	    var delay = false;
	    if(this.message_is_shown){
		    this.removeMessage();
		    delay = true;
		}
	    var isValid = this.formIsValid();
	    if(isValid == true){
		    var param = {
                  user_name:  $('#input-name', self.el).val(),
                  user_email: $('#input-email', self.el).val(),
                  user_industry:  $('#input-industry', self.el).val(),
                  user_challenge: $('#input-challenge', self.el).val()
            };
		    this.showSubmitLoader();
		    //send the email
		    $.ajax({
              url: "api/send_email.php",
              type:"POST",
              //contentType: "application/json",
              //data: JSON.stringify(param),
              data: param,
              success: function(data){
	              self.clearForm();
                  //show success alert
                  self.hideSubmitLoader();
			      if(delay){
				     setTimeout(function(){ self.showSuccessMessage(self.successes.SEND_EMAIL_SUCCESS); }, 700);
			      }
			      else{
				     self.showSuccessMessage(self.successes.SEND_EMAIL_SUCCESS);
			      }
                  console.log("sendEmail succcess");
              },
              error: function(data){
                  //show error alert
				  self.hideSubmitLoader();
			      if(delay){
				     setTimeout(function(){ self.showErrorMessage(self.errors.SEND_EMAIL_ERROR); }, 700);
			      }
			      else{
				     self.showErrorMessage(self.errors.SEND_EMAIL_ERROR);
			      }
                  console.log("sendEmail error"); 
               }
            });
		}
	    else{
	    	 this.highlightInvalidInput(isValid.error);
		     if(delay){
			     setTimeout(function(){ self.showErrorMessage(isValid.msg); }, 700);
		     }
		     else{
			    this.showErrorMessage(isValid.msg);
		     }
	    }
    },
    // ----------------- showSubmitLoader
    showSubmitLoader: function(){
	    //hid ethe
	    //hide sunbmit btn
	    var submit_btn_container_el = $('.btn-submit-container', this.el);
	    var loader_row_el = $('.loader-row', this.el);
	    TweenLite.to(submit_btn_container_el, 0.25, {opacity:0, overwrite: 2});
	    loader_row_el.activity({segments: 8, width:2, space: 0, length: 3, color: '#bdd0ff', valign:'top', align:'center', padding:26});

		//show loader 
    },
     // ----------------- hideSubmitLoader
    hideSubmitLoader: function(){
	    //hide the loader
	    //show sunbmit btn
	     var submit_btn_container_el = $('.btn-submit-container', this.el);
	    var loader_row_el = $('.loader-row', this.el);
	    TweenLite.to(submit_btn_container_el, 0.25, {opacity:1, overwrite: 2});
	    loader_row_el.activity(false);

    },
    // ----------------- showErrorMessage
    showErrorMessage: function(msg){
	     this.msg_el = $('<p class="notice error-msg">' + msg + '</p>');
		 this.showMessage();
    },
    // ----------------- showErrorMessage
    showSuccessMessage: function(msg){
	     this.msg_el = $('<h2 class="notice success-msg">' + this.successes.SEND_EMAIL_SUCCESS_H + '</h2><p class="notice">' + this.successes.SEND_EMAIL_SUCCESS + '</p>');
		 this.showMessage();
    },
    // ----------------- showErrorMessage
    showMessage: function(){
	    var self = this;
	    var msg_col_el = $('.notice-col', this.el);
    	msg_col_el.append(this.msg_el);
    	this.msg_el.css('opacity', '0');
    	var to_height = this.msg_el.outerHeight();
		//grow the height kof the .msg-col to fit its content
		TweenLite.to(msg_col_el, 0.5, {height:to_height, ease: Expo.easeOut, overwrite: 2, onComplete: function(){ $(self.el).trigger(self.RESIZE); } });
		//on  almost complete show the content
		TweenLite.to(this.msg_el, 0.25, {opacity:1, delay: 0.45, overwrite: 2});
		//scrollto the bottom of the page
		$(this.el).trigger(this.SHOW_MESSAGE);
		this.message_is_shown = true;
    },
    // ----------------- removeMessage
    removeMessage: function(){
	    var self = this;
	    var msg_col_el = $('.notice-col', this.el);
    	TweenLite.to(this.msg_el, 0.25, {opacity:0, overwrite: 2});
	    //shrink the .msg-col
	    //rmove  this.msg_el on complete
	    TweenLite.to(msg_col_el, 0.5, {height:0, ease: Expo.easeOut, delay: 0.45, overwrite: 2, onComplete: function(){ $(self.el).trigger(self.RESIZE); } });
	    setTimeout(function(){
		    self.msg_el.remove();
		    self.message_is_shown = false;
	    }, 250);
    },
    // ----------------- formIsValid
    formIsValid: function(){
	    for(var i=0; i<this.validation_errors.length; i++){
		    var val = $('#input-' + this.validation_errors[i].error, this.el).val();
		    var isValid = true;
		    var regExp = this.validation_errors[i].regExp;
		    isValid = regExp.test(val);
		    if(isValid == false) return this.validation_errors[i];
		    return isValid;
	    }
    },
    // ----------------- highlightInvalidInput
    highlightInvalidInput: function(error){
	    var self = this;
		//highlight the invalid input  
		$('#input-' + error, this.el).addClass(this.CUSTOM_FOCUS_CLASS); 
		//on blur the input
		//remove the custom focus class
		$('#input-' + error, this.el).on('blur', function(){
			$('#input-' + error, self.el).off('blur');
			$(this).removeClass(self.CUSTOM_FOCUS_CLASS); 
			self.removeMessage();
		});
    },
    // ----------------- showFL
    showLocation: function(state){
	    console.log("showLocation ------ ");
	    var self = this;
	    var loc_ind = 0;
	    for(var i=0;i<this.locations.length;i++){
		    if(this.locations[i].state === state){
			    //remove active from other locations
			    //set the flag to active
			    //set the addr-title to active
			    loc_ind = i;
			    $('#btn-' + state, this.el).addClass('active');
		    }
		    else{
			    $('#btn-' + this.locations[i].state, this.el).removeClass('active');
		    }
	    }
	    //recenter the map
        var center = new google.maps.LatLng(this.locations[loc_ind].lat, this.locations[loc_ind].lng);
	    this.map.panTo(center);	    
	    //remove current pin
	    self.map_canvas_el.gmap('clear', 'markers');
	    //add new pin
	    var info_box_content = "<span style='font-size:11px;color:#333e48;'><b>" + this.locations[loc_ind].name + "</b><br/><a style='color:#333e48;' href='" + this.locations[loc_ind].directions_url + "' target=_blank >Get Directions &nbsp;></a></span>";
	    this.map_canvas_el.gmap('addMarker', {position: this.locations[loc_ind].lat + ',' + this.locations[loc_ind].lng,  icon: this.markerImage, animation: google.maps.Animation.DROP}).click(function() {
				self.map_canvas_el.gmap('openInfoWindow', {'content': info_box_content}, this);
		});
	},
	// ----------------- beforeDispose
	beforeDispose: function(){
		this.map_canvas_el.gmap('destroy');
		$('input', this.el).off();
	}
});
// _________________________________________________________________________ MenuView
main.views.MenuView = Backbone.View.extend({
	ARROW_UP_CLASS: "arrow-up",
	ARROW_TRANSITION_CLASS: "arrow-transition",
	ARROW_LEFT_CLASS: "arrow-left",
	TOP_BORDERED_CLASS: "top-bordered",
	MENU_TRANSITION_CLASS: "menu-transition",
	MENU_TRANSITION_Y_CLASS: "menu-transition-y",
	SOCIAL_NAV_TRANSITION_H_CLASS: "social-nav-cnt-transition-h",
	OFFSET_Y: 12, 
	OPEN: "open",
	CLOSE: "close",
	state: "",
	width_offset: 0,
	scroll_y_offset: 0,
	is_open: false,
	social_is_shown: false,
	events: {
		'click .btn-how' : 'onHowBtnClick',
		'click .btn-work' : 'onWorkBtnClick',
		'click .btn-team' : 'onTeamBtnClick',
		'click .btn-disciplines' : 'onDisciplinesBtnClick',
		'click .btn-contact' : 'onContactBtnClick',
		'click .btn-social' : 'onSocialBtnClick',
		'click .btn-nav': 'onBtnNavClick'
	},
    // ----------------- initialize
    initialize: function() {
        console.log("MenuView ---- initialize");
        this.render();
    },
    // ----------------- render
    render: function(eventName) {
        console.log("MenuView ---- render");
        var self = this;
        this.nav_cnt_el = $('.nav-cnt', this.el);
        this.social_nav_cnt_el = $('.social-nav-cnt', this.el);
        this.social_nav_cnt_el.addClass(this.SOCIAL_NAV_TRANSITION_H_CLASS);
        this.social_nav_arrow_img_el = $('.arrow', this.social_nav_cnt_el);
        this.social_nav_arrow_img_el.addClass(this.ARROW_TRANSITION_CLASS);
        this.btn_nav_el = $('.btn-nav', this.el);
        this.nav_arrow_img_el = $('.arrow', this.btn_nav_el);
        this.nav_arrow_img_el.addClass(this.ARROW_TRANSITION_CLASS);
        this.state = this.CLOSE;
        setTimeout(function(){
	        self.scroll_y_offset = self.btn_nav_el.height();
        	//self.width_offset = self.nav_cnt_el.width();
	        $(self.el).addClass(self.MENU_TRANSITION_CLASS);
        }, 100);
        return this;
	},
    // ----------------- posize
    posize: function() {
		var to_w = $(window).width() - this.btn_nav_el.outerWidth();
		var max_w = parseInt( this.nav_cnt_el.css('max-width') );
		if(to_w > max_w) to_w = max_w;
		this.nav_cnt_el.width( to_w );
		//position it to the left od stage is state is closed
		var to_left = -to_w - 1; 
		if(this.state == this.CLOSE) $(this.el).css( 'left', to_left + 'px' );
		else  $(this.el).css( 'left', -1 + 'px' );
	},
	// ----------------- open
    toggleNav: function() {
	    if(this.is_open) this.close();
	    else this.open();
    },
	// ----------------- open
    open: function() {
	    var self = this;
	    $(this.el).css( 'left', '-1px' );
	    this.state = this.OPEN;
	    //$(this.el).trigger(this.OPEN);
		this.is_open = true;
		clearTimeout(this.rotateArrowTimeout);
		//setTimeout to rotate the arrow
		this.rotateArrowTimeout = setTimeout(function(){
			self.nav_arrow_img_el.addClass(self.ARROW_LEFT_CLASS);
		}, 250);
	},
    // ----------------- close
    close: function() {
    	var self = this;
	    var to_left = -(this.nav_cnt_el.outerWidth());
	    $(this.el).css( 'left', to_left + 'px' )
    	this.state = this.CLOSE;
    	this.hideSocial();
    	//$(this.el).trigger(this.CLOSE);
    	this.is_open = false;
    	clearTimeout(this.rotateArrowTimeout);
		//setTimeout to rotate the arrow
		this.rotateArrowTimeout = setTimeout(function(){
			self.nav_arrow_img_el.removeClass(self.ARROW_LEFT_CLASS);
		}, 250);
    },
    // ----------------- beginHide
    beginHide: function() {
	    //get current x
	    var cur_left = parseInt($(this.el).css('left'));
	    //move this left 
	    $(this.el).css('left', (cur_left - $(this.btn_nav_el).outerWidth()) + 'px');
	},	
	// ----------------- toggleSocial
    toggleSocial: function() {
	    if(this.social_is_shown) this.hideSocial();
	    else this.showSocial();
    },
	// ----------------- showSocial
    showSocial: function() {
    	var self = this;
	    var to_height = $('.header', this.social_nav_cnt_el).outerHeight() + $('.social-nav', this.el).outerHeight();
	    //animate the height of the 'social-nav-cnt'
	    //to fit header height + social nav height
	    this.social_nav_cnt_el.css('height', to_height + 'px');
	    this.social_is_shown = true;
	    clearTimeout(this.socialRotateArrowTimeout);
		//setTimeout to rotate the arrow
		this.socialRotateArrowTimeout = setTimeout(function(){
			self.social_nav_arrow_img_el.addClass(self.ARROW_UP_CLASS);
		}, 50);
	},
	// ----------------- hideSocial
    hideSocial: function() {
	    var self = this;    
    	var to_height = $('.header', this.social_nav_cnt_el).outerHeight();
	    //animate the height of the 'social-nav-cnt'
	    //to fit header height
	    this.social_nav_cnt_el.css('height', to_height + 'px');
	    this.social_is_shown = false;
	    clearTimeout(this.socialRotateArrowTimeout);
		//setTimeout to rotate the arrow
    	this.socialRotateArrowTimeout = setTimeout(function(){
			self.social_nav_arrow_img_el.removeClass(self.ARROW_UP_CLASS);
		}, 50);
	},
	// ----------------- onSocialBtnClick
    onSocialBtnClick: function(event) {
	    this.toggleSocial();
	    return false;
    },
    // ----------------- onHowBtnClick
    onHowBtnClick: function(event) {
	    this.toggleNav();
	    //setTimeout(function(){
		    if (Modernizr.history) main.router.navigate('', {trigger: false});
		    main.router.navigate('how', {trigger: true});
	    //}, 300);
	    return false;
    },
    // ----------------- onWorkBtnClick
    onWorkBtnClick: function(event) {
    	this.toggleNav();
    	//setTimeout(function(){
	    	if (Modernizr.history) main.router.navigate('', {trigger: false});
		    main.router.navigate('work', {trigger: true});
	    //}, 300);	    
	    return false;
    },
    // ----------------- onHowBtnClick
    onTeamBtnClick: function(event) {
	    this.toggleNav();
	    //setTimeout(function(){	     
	        if (Modernizr.history) main.router.navigate('', {trigger: false});
		    main.router.navigate('team', {trigger: true});
	    //}, 300);	    
	    return false;
    },
    // ----------------- onHowBtnClick
    onDisciplinesBtnClick: function(event) {
	    this.toggleNav(); 
	    //setTimeout(function(){	       
	        if (Modernizr.history) main.router.navigate('', {trigger: false});
		    main.router.navigate('disciplines', {trigger: true});
	    //}, 300);	    
	    return false;
    },  
	// ----------------- onHowBtnClick
    onContactBtnClick: function(event) {
	    this.toggleNav();
	    //setTimeout(function(){	    
	        if (Modernizr.history) main.router.navigate('', {trigger: false});
		    main.router.navigate('contact', {trigger: true});
	    //}, 300);	    
	    return false;
    },
    // ----------------- onBtnNavClick
    onBtnNavClick: function(event) {
	    this.toggleNav();
	    return false;
    },
    // ----------------- checkMenu
    checkMenu: function(scrollTop){
	    var self = this;
	    clearTimeout(this.hideBorderTimeout);
	    if(scrollTop >= this.scroll_y_offset){
		    $(this.el).css('top', this.OFFSET_Y + 'px');
		    $(this.el).addClass(this.TOP_BORDERED_CLASS);
	    } 
	    else {
		    $(this.el).css('top', '0');
		    this.hideBorderTimeout = setTimeout(function(){
			    $(self.el).removeClass(self.TOP_BORDERED_CLASS);
		    }, 300);
	    }
    }
});
// _________________________________________________________________________ HeaderView
main.views.HeaderView = Backbone.View.extend({
	TRANS_CLASS: "header-trans",
	events:{
	},
    // ----------------- initialize
    initialize: function() {
        console.log("HeaderView ---- initialize");
        this.render();
    },
    // ----------------- render
    render: function(eventName) {
        console.log("HeaderView ---- render");
        return this;
	},    
	// ----------------- posize
    posize: function() {
	},
	// ----------------- beginHide
    beginHide: function() {
	    var self = this;
	    setTimeout(function(){
		    //get current Y
		    var cur_top = parseInt($(self.el).css('top'));
		    //move this down
		    $(self.el).addClass(self.TRANS_CLASS);
		    $(self.el).css('top', (cur_top - $(self.el).outerHeight()) + 'px');
	    }, 500);
	}	
});
// _________________________________________________________________________ FooterView
main.views.FooterView = Backbone.View.extend({
	events: {
		'click .btn-up' : 'onBtnUpClick'
	},
    // ----------------- initialize
    initialize: function() {
        console.log("FooterView ---- initialize");
        this.render();
    },
    // ----------------- render
    render: function(eventName) {
        console.log("FooterView ---- render");
        return this;
	},    
	// ----------------- posize
    posize: function() {
	},
	// ----------------- submit
	onBtnUpClick: function(){
		main.router.navigate('', {trigger: true});
		return false;
	}
});
// _________________________________________________________________________ StoryView
main.views.StoryView = Backbone.View.extend({
	SHOW_SCENES: "show_scenes",
	STORY: "story",
	EXIT: "exit",
	HIDE_COMPLETE: "hide_complete",
	FADE_CLASS: "fade-fast",
	FADE_SLOW_CLASS: "fade-slow",
	NAVY: "#333e48",
	STORY_INIT: "story-init",
	COVER_CLASS: "cover",
	CENTER_CLASS: "center",
	VERTICAL_CENTER_CLASS: "vertical-center",
	//IDLE_START_TIME: 6000,
	//INIT_IDLE_START_TIME: 1600,
	maintain_aspect_ratios: [],
	template_load_external: false,
	//scrollDownIndicatorShowNum: 0,
	templateLoader: main.utils.templateLoader,
    // ----------------- initialize
    initialize: function() {
        console.log("StoryView ---- initialize");
        if(!($(this.el).hasClass(this.STORY_INIT))) {
	         console.log("template load external");
	         this.template = _.template(this.templateLoader.get(this.STORY));
	         this.template_load_external = true;
        }
    },
    // ----------------- render
    render: function(eventName) {
        console.log("StoryView ---- render");
	    var self = this;
	    //prevent the nav bounce on safari mobile
	    document.ontouchmove = function(event) {
	        event.preventDefault();
	    };
	    if(this.template_load_external) {
		    $(this.el).html(this.template());
		    $(this.el).addClass(this.STORY);
	    }
	    //-------- sceneContainerView
        this.sceneContainerView = new main.views.SceneContainerView({el:$('.scene-container', this.el)});
        //ALL_SCENE_ASSETS_LOADED
        $(this.sceneContainerView.el).on(this.sceneContainerView.ALL_SCENE_ASSETS_LOADED, function(){
	        self.stopLoader();
        });
        //EXIT_SCENES
        $(this.sceneContainerView.el).on(this.sceneContainerView.EXIT_SCENES, function(){ self.exit(); });
        //listen for the init assets event
        //that comes from each scene
        //so that you can sen the total num assets 
        //of all scenes to the loader
        //INIT_ASSETS
        $(this.sceneContainerView.el).on(this.sceneContainerView.INIT_SCENE_ASSETS, function(event, params){ self.handleInitSceneAssets(params); });
        //ASSET_LOADED
        $(this.sceneContainerView.el).on(this.sceneContainerView.SCENE_ASSET_LOADED, function(){ self.handleSceneAssetLoaded(); });
        //SHOW_AUDIO_LOADER
        //HIDE_AUDIO_LOADER
        $(this.sceneContainerView.el).on(this.sceneContainerView.SHOW_AUDIO_LOADER, function(event){ self.showAudioLoader(); });
	   	$(this.sceneContainerView.el).on(this.sceneContainerView.HIDE_AUDIO_LOADER, function(event){ self.hideAudioLoader(); });
        this.sceneContainerView.render();
        
        //create bg
        this.createBg();
        
        //-------- LoaderView
        this.loaderModel = new main.models.LoaderModel();
        this.loaderView = new main.views.LoaderView({ el:$('.loader', this.el), model: this.loaderModel});
        $(this.loaderView.el).on(this.loaderView.IS_COVERING, function(){
	       	self.unveilScenes();
        });
         $(this.loaderView.el).on(this.loaderView.TOTAL_HIDE_BG, function(){
	       	self.hideBg();
        });
        
        //-------- OrientationAlertView
        this.orientationAlertView = new main.views.OrientationAlertView();
        $(this.el).append(this.orientationAlertView.el);
        
        //-------- AudioLoaderView
        this.audioLoaderView = new main.views.AudioLoaderView();
        $(this.el).append(this.audioLoaderView.el);
        
        this.initAudio();
        
        //-------- ScrollDownIndicatorView
        //this.scrollDownIndicatorView = new main.views.ScrollDownIndicatorView();
        //$(this.el).append(this.scrollDownIndicatorView.el);
        
        //position and size the elements
	    self.posize();
        return this;
	},
    // ----------------- initAudio
	initAudio: function() {
		console.log("initAudio");
        //create  this.audio_container
	    this.audio_container = $('<div class="scene-audio-cnt"></div>');
        $(this.el).append(this.audio_container);
        
        this.audio_el = $('<audio></audio>');
    },
    // ----------------- showAudioLoader
	showAudioLoader: function() {
		this.audioLoaderView.show();
	},
	// ----------------- showAudioLoader
	hideAudioLoader: function() {
		this.audioLoaderView.hide();
	},
	// ----------------- handleInitSceneAssets
	handleInitSceneAssets: function(num_assets) {
		this.loaderModel.addNumAssets(num_assets);
	},
	// ----------------- handleSceneAssetsLoaded
	handleSceneAssetLoaded: function() {
		this.loaderModel.handleSceneAssetLoaded();
	},
	// ----------------- exit
	exit: function() {
		$(this.el).trigger(this.EXIT);
	},
	// ----------------- posize
    posize: function() {
	    //set this.el to height of the window
	    $(this.el).css('height', $(window).height() + 'px');
	    this.goldBg_el.css('height', $(window).height() + 'px');
	    this.sceneContainerView.posize();
	    this.loaderView.posize();
	    this.audioLoaderView.posize();
        
        //if aspect ratio is landsape
        //show alert that orientation
        //is best in portrait
        if(window.orientation && Math.abs(window.orientation) == 90){
            $(this.orientationAlertView.el).css('display', 'block');
        }
    },
    // ----------------- createBg
    createBg: function() {
	    this.goldBg_el = $('<div class="gold-bg"></div>');
	    //make it's width the size of the window
	    var to_h = $(window).height();
	    this.goldBg_el.css('opacity', '0');
	    this.goldBg_el.css('height', to_h + 'px');
	    $(this.el).prepend(this.goldBg_el);
	    this.goldBg_el.css('visibility', 'hidden');
	    this.goldBg_el.addClass(this.FADE_SLOW_CLASS);
    },
    // ----------------- show
    showBg: function() {
	    var self = this;
	    this.goldBg_el.css('visibility', 'visible');
	    //fade in the  bg 
	    this.goldBg_el.css('opacity', '1');
	    $(this.goldBg_el).on('transitionend webkitTransitionEnd oTransitionEnd', function(){
	    	 self.goldBg_el.removeClass(self.FADE_SLOW_CLASS);
	    });
	},
    // ----------------- hideBg
    hideBg: function() {
	    var self = this;
	    this.goldBg_el.addClass('fade-slow');
	    this.goldBg_el.css('opacity', '0');
	    this.goldBg_el.on('transitionend webkitTransitionEnd oTransitionEnd', function(){
			$(this).off('transitionend webkitTransitionEnd oTransitionEnd');
			self.goldBg_el.css('display', 'none');
		});
    },
    // ----------------- startLoader
    startLoader: function() {
	    var self = this;
        setTimeout(function(){
		   self.loaderView.startLoader();	
		}, 100);
    },
     // ----------------- stopLoader
    stopLoader: function() {
		this.loaderView.stopLoader();	
    },
     // ----------------- beginLoadingAssets
    beginLoadingAssets: function() {
	    this.sceneContainerView.beginLoadingAssets();
    },
    // ----------------- show
    show: function() {
	    var self = this;
    	$(this.el).css('visibility', 'visible');
    	self.showBg();
        //setTimeout(function(){
	       self.loaderView.show();	
        //}, 100);
    },
   	// ----------------- hide
    hide: function() {
	    var self = this;
	    //fade out the scene container
	    $(this.el).css('background-color', this.NAVY);
	    //this.sceneContainerView.stopSounds();
	    $(this.sceneContainerView.el).addClass(this.FADE_CLASS);
	    $(this.sceneContainerView.el).css('opacity', '0');
	    $(this.sceneContainerView.el).on('transitionend webkitTransitionEnd oTransitionEnd', function(){
    	    $(self.sceneContainerView.el).off('transitionend webkitTransitionEnd oTransitionEnd');
    	    self.sceneContainerView.story_is_stopped = true;
    	    $(self.sceneContainerView.el).remove();
			$(self.el).trigger(self.HIDE_COMPLETE);
		});
    },
	// ----------------- unveilScenes
	unveilScenes: function() {
		var self = this;
		//settimeout ot unveil, 
		//move gold bg up
        //and hide Loder
    	self.sceneContainerView.addScenes();
    	setTimeout(function(){
	        self.posize();
	        setTimeout(function(){
				self.loaderView.hide();
			}, 200);
			self.sceneContainerView.show();
        }, 100);
	},
    // ----------------- beforeDispose
	beforeDispose: function(){
	   $(this.sceneContainerView.el).off();
	   this.sceneContainerView.dispose(); 
	   $(this.loaderView.el).off();
    }
});
// _________________________________________________________________________ SceneView
main.views.SceneView = Backbone.View.extend({
	ASSET_LOADED: "asset_loaded",
	ALL_ASSETS_LOADED: "all_assets_loaded",
	SCENE_ACTIVE_CLASS: "scene-active",
	ACTIVE_CLASS: "active",
	ANIMATE_CLASS: "animate",
	FADE_CLASS: "fade-fast",
	FADE_SLOW_CLASS: "fade-slow",
	STAGE_TRANSITION_CLASS: "stage-transition",
	SCENE_TRANSITION_CLASS: "scene-transition",
	NEXT_CLASS: 'next',
	DEACTIVATE: "deactivate",
	ACTIVATE: "activate",
	RESIZE: "resize",
	ALLOW_SWIPE_CLASS: 'allowSwipe',
	NEXT: "next",
	SHOW_AUDIO_LOADER: "show_audio_loader",
	HIDE_AUDIO_LOADER: "hide_audio_loader",
	//IDLE: "idle",
	INIT_ASSETS: "init-assets",
	VOLUME_DECREMENT: 0.2,
	BASE_Z_INDEX: 200,
	BACK: 'back',
	//IDLE_START_TIME: 8000,
	templateLoader: main.utils.templateLoader,
	scene_name: "",
	offset: 0,
	id: "",
	images: [],
	num_assets: 0,
	num_images: 0,
	num_sounds: 0,
	num_sounds_loaded: 0,
	sounds: [], 
	soundCollection: {},
	_route: "",
	audio_has_played: false,
	can_play_sound: false,
    // ----------------- initialize
    initialize: function() {
        console.log("SceneView ---- initialize");
    },
    // ----------------- render
    render: function(eventName) {
        console.log("SceneView ---- render");
        var self = this;
	    if(this.beforeRender) this.beforeRender();
        //create a view for each pane
        //make a list of all images
        $(this.el).addClass('scene');
        $(this.el).addClass(this.name);
        this.initAssets();
        this.panel_el = $('.panel', this.el);
        this.text_tab_el = $('.text-tab', this.panel_el);
        $('img', this.el).attr('draggable', 'false');
        
        //load them
        setTimeout(function(){
	        self.posize();
	        self.setTab();
        });
        return this;
	},
	// ----------------- onAppend
    onAppend: function() {
	    var self = this;
	    setTimeout(function(){
		    self.initTab();
	    }, 100);
    },
	// ----------------- initTab
    initTab: function() {
       //also set the height of the tab to fit it's 
	    //containeing row
	    var to_height =  $('#text-tab-container', this.text_tab_el).outerHeight();
	    //var to_height = $(this.el).outerHeight();
	    this.text_tab_el.css('height', to_height + 'px');
	    //also potiion the tab so the that only the tab  shows
	    var to_margin_bottom = -(to_height - $('h3', this.text_tab_el).outerHeight() );
	    this.text_tab_el.css('margin-bottom', to_margin_bottom + 'px');
    },
	// ----------------- setTab
    setTab: function() {
	     var self = this;
	     clearTimeout(self.tabTimeout);

	      this.text_tab_el.on('mousedown touchstart', function() {
		      self.text_tab_el.off('mousedown touchstart'); 
		     //once released reset
		     $(self.el).on('mouseup touchend', function() {
		         $(self.el).off('mouseup touchend');
		         self.tabTimeout = setTimeout(function(){
			         self.setTab();
		          }, 500);
		      });
			  var active = $(this);
			  if (active.hasClass(self.ACTIVE_CLASS)) {
				  active.removeClass(self.ACTIVE_CLASS);
				  var to_margin_bottom = -(active.outerHeight() - $('h3', active).outerHeight() );
			      active.css('margin-bottom', to_margin_bottom + 'px');
			  } 
			  else if (!active.hasClass(self.ACTIVE_CLASS)) {
				  active.addClass(self.ACTIVE_CLASS);
				  active.css('margin-bottom', '0');
			  }
	    });
    },
    // ----------------- closeTab
    closeTab: function() {
	    var to_margin_bottom = -( this.text_tab_el.outerHeight() - $('h3',  this.text_tab_el).outerHeight() );
	     this.text_tab_el.css('margin-bottom', to_margin_bottom + 'px');
    },
	// ----------------- setImages
    setImages: function() {
	    //determine the number of images 
	    //so that we can send it to
	    //the loader
	    //find all elements with source images
	    this.images =  $('[data-src]', this.el).toArray();

	    if(!this.images) this.num_images = 0;
	    else this.num_images = this.images.length;
    },
	// ----------------- setSounds
    setSounds: function(arr) {
	    var self = this;
        this.sounds = arr;
        this.soundCollection = new main.models.BasicAudioCollection();
        
        for(var i=0;i<this.sounds.length;i++){
	        this.sounds[i].set("id", i);
	        this.soundCollection.add(this.sounds[i]);
        }
        this.num_sounds = this.sounds.length;
    },
	// ----------------- posize
    posize: function() {
		if(this.beforePosize) this.beforePosize();
    },
    // ----------------- activate
    activate: function() {
	    var self = this;
	    console.log("ACTIVATE ---------------------------- " + this.name);
	    if(this.el) {
		    //this.setIdleTimer();
		    $(this.el).addClass(this.SCENE_ACTIVE_CLASS);
		    if(this.beforeActivate) this.beforeActivate();

		    $(this.el).trigger(this.ACTIVATE, [this.name]);
            this.beginAnimation();
	    }
    }, 
    // ----------------- deactivate
    deactivate: function(back) {
    	var self = this;
    	console.log("DEACTIVATE ---------------------------- " + this.name);
    	if(back == null) back = false;
    	if(this.el) {
	    	//this.setIdleTimer();
		    if ($('body').hasClass(self.ALLOW_SWIPE_CLASS)) {
		    	$('body').removeClass(self.ALLOW_SWIPE_CLASS);
		    	if(back) this.transitionBack();
		    	else this.transitionOut();
		    	$(this.el).removeClass(this.SCENE_ACTIVE_CLASS);
			    if(this.beforeDeactivate) this.beforeDeactivate();
			    $(this.el).trigger(this.DEACTIVATE);
			    //this.unsetIdleTimer();
			    this.closeTab();
		    }
	    }
    },
    // ----------------- playAudio
   playAudio: function() {
   		if(!this.audio_has_played) {
	   		this.audio_has_played = true;
		    var self = this;
		    var cur_sound_model = this.sounds[0];
	        	
	        main.router.mainView.storyView.audio_el.attr('src', cur_sound_model.get("src"));
		    //play the audio
		    main.router.mainView.storyView.audio_el.get(0).load();
		   // $(self.el).trigger(this.SHOW_AUDIO_LOADER);

			//set unique timeout per scene
		    this.playAudioUnique();
			
			$(main.router.mainView.storyView.audio_el.get(0)).on('loadeddata', function(){
				$(this).off('loadeddata');
				self.can_play_sound = true;
				//self.deactivate();
				//$(self.el).trigger(self.HIDE_AUDIO_LOADER);
				console.log("loadSound CANPLAY");
			});
			$(main.router.mainView.storyView.audio_el.get(0)).on('error', function(){
			    //continue even if error
			    console.log("loadSound ERROR");
			    $(this).off();
		    });
		    $(main.router.mainView.storyView.audio_el.get(0)).on('stalled', function(){
		    	console.log("loadSound stalled");
		    });
		     $(main.router.mainView.storyView.audio_el.get(0)).on('suspend', function(){
		    	console.log("loadSound suspend ");
		    });
	    }
    },
    // ----------------- beginAnimation
    beginAnimation: function() {
    },
    // ----------------- transitionOut
    transitionOut: function() {
    },
    // ----------------- initAssets
    initAssets: function() {
	    var self = this;
	    self.setImages();
        self.setSounds(self.model.get("sounds"));
        self.num_assets = self.num_sounds + self.num_images;
	    setTimeout(function(){
	        $(self.el).trigger(self.INIT_ASSETS, [self.num_assets]);
        }, 100);
    },
    // ----------------- loadAssets
    loadAssets: function() {
	    this.loadImages();
    },
    // ----------------- loadImages
    loadImages: function() {
	    var self = this;
	    if(this.num_images == 0 ) this.handleLoadSoundsComplete();
	    //if images already loaded move on with loading sounds	    
	    $(this.el).loadImages({
		      imgLoadedClb: function(){ $(self.el).trigger(self.ASSET_LOADED); }, // Triggered when an image is loaded. ('this' is the loaded image)
			  allLoadedClb: function(){ self.handleLoadSoundsComplete(); }, // Triggered when all images are loaded. ('this' is the wrapper in which all images are loaded, or the image if you ran it on one image)
			  imgErrorClb:  function(){  } // Triggered when the image gives an error. Useful when you want to add a placeholder instead or remove it. ('this' is the loaded image)
	    });
    },
    // ----------------- handleLoadSoundComplete
    handleLoadSoundsComplete: function() {
	    $(this.el).trigger(this.ALL_ASSETS_LOADED);
    },
	// ----------------- pauseSound
	pauseSound: function(sound_el){
	  var cur_vol = sound_el.volume;
	  this.fadeSound(sound_el, cur_vol);
	},
	// ----------------- fadeSound
	fadeSound: function(sound_el, cur_vol){
	  ///need to stop this
	  //if play is encountered first
	  var self = this;
	  var new_vol = cur_vol - this.VOLUME_DECREMENT;
	  if(new_vol < 0) new_vol = 0;
	  sound_el.volume = new_vol;
	  if(new_vol > 0){
		  setTimeout(function(){
			  self.fadeSound(sound_el, new_vol);
		  }, 60);
	  }
	},
	// ----------------- beforeDispose
	beforeDispose: function(){
		 $('.text-tab', this.panel_el).off();
		 $(this.el).off();
		 if(this.beforeDisposeUnique) this.beforeDisposeUnique();
		 //!!!!!!!!!!!!!!!!!!!!!!!!!
		 //$(audio_el.get(0)).off();	
	}
});
// _________________________________________________________________________ SceneSwipeInstructionView
main.views.SceneSwipeInstructionView = main.views.SceneView.extend({
	STAGE_TOP: "stage-top",
	INFO_TRANS_CLASS: "info-transition",
	ANIM_OFFSET: 60,
	name: "scene-swipe-instruction",
    // ----------------- initialize
    initialize: function() {
        console.log("SceneSwipeInstructionView ---- initialize");
        console.log("SceneSwipeInstructionView ---- this.name = " + this.name);

        this.template = _.template(this.templateLoader.get(this.name));
    },
    // ----------------- playAudioUnique
    playAudioUnique: function() {
	    var self = this;
	   // setTimeout(function(){
			 main.router.mainView.storyView.audio_el.get(0).play();
			 setTimeout(function(){
				 if(!self.can_play_sound) main.router.mainView.storyView.audio_el.get(0).pause();
			 }, 1500);
		//}, 100);
    }, 
    // ----------------- beforeRender
    beforeRender: function() {
        console.log("SceneSwipeInstructionView ----bfore render");
        var self = this;
        $(this.el).html(this.template());
        $(this.el).addClass(this.SCENE_TRANSITION_CLASS);
        $(this.el).addClass(this.STAGE_CENTER);
        this.swipe_instructions_el = $('#swipe-instructions', this.el);
        this.swipe_instructions_el.css('opacity', '0');
        this.swipe_instructions_el.css('bottom', String(-this.ANIM_OFFSET) + 'px');

        this.swipe_instructions_el.addClass(this.INFO_TRANS_CLASS);

        this.swipeMove = Hammer($('#scene-swipe-instruction', this.el));
        this.swipeMove.on('swipeleft dragleft', function() {
        	 self.playAudio();
	         self.deactivate();
	    });
        return this;
	},
	// ----------------- show
    show: function() {
	    this.beginAnimation();
    },
    // ----------------- beginAnimation
    beginAnimation: function() {
	    var self = this;
	    setTimeout(function(){
		    //fade in and move up the content
		    self.swipe_instructions_el.css('opacity', '1');
		    self.swipe_instructions_el.css('bottom', '0');
	    }, 300);
	},
    // ----------------- transitionOut
    transitionOut: function() {
	    var self = this;
	    clearTimeout(this.transitionTimeout);
	    var bodyTimer = setTimeout(function() {
	         $('body').addClass(self.ALLOW_SWIPE_CLASS);
	    }, 1000);

	    //add the next class to 
	    //move up
	    this.transitionTimeout = setTimeout(function(){
		    $(self.el).removeClass(self.STAGE_CENTER);
		   	$(self.el).addClass(self.STAGE_TOP);
		   self.removeTimeout = setTimeout(function(){
		        //on comolete
		   	    //display none
			    $(self.el).css('display', 'none');
		   }, 2000);
		   	
	   	}, 200);
	   	
        $(self.el).trigger(self.NEXT);
    }
});
// _________________________________________________________________________ OrientationAlertView
main.views.OrientationAlertView = Backbone.View.extend({
    templateLoader: main.utils.templateLoader,
    // ----------------- initialize
    initialize: function() {
        console.log("OrientationAlertView ---- initialize");
        this.template = _.template(this.templateLoader.get('orientation-alert'));
        this.render();
    },
    // ----------------- render
    render: function(eventName) {
        console.log("OrientationAlertView ---- render");
        $(this.el).html(this.template());
        return this;
	}
});
// _________________________________________________________________________ AudioLoaderView
main.views.AudioLoaderView = Backbone.View.extend({
	FADE_CLASS: "fade-slow",
    templateLoader: main.utils.templateLoader,
    // ----------------- initialize
    initialize: function() {
        console.log("AudioLoaderView ---- initialize");
        this.template = _.template(this.templateLoader.get('audio-loader'));
        this.render();
    },
    // ----------------- render
    render: function(eventName) {
        console.log("AudioLoaderView ---- render");
        var self = this;
        $(this.el).html(this.template());
        $(this).css('display', 'none');
        $(this.el).css('opacity', '0');
        $(this.el).addClass(this.FADE_CLASS);
        
        //set the activity indicator
        $('.activity-indicator', this.el).activity({segments: 8, width:3, space: 0, length: 5, color: '#333e48', valign:'top', align:'left', padding: 12});
        
        return this;
	},
	// ----------------- show
    show: function() {
	    console.log("AudioLoaderView ------- show");
    	$(this).css('display', 'block');
	    $(this.el).css('opacity', '1');
    },
    // ----------------- hide
    hide: function() {
        console.log("AudioLoaderView ------- hide");
    	$(this.el).css('opacity', '0');
    	//add webkit transition end listener
    	$(this.el).on('transitionend webkitTransitionEnd oTransitionEnd', function(){
			$(this).off('transitionend webkitTransitionEnd oTransitionEnd');
			$(this).css('display', 'none');
		});
    },
    // ----------------- beforePosize
    posize: function() {
	    var to_margin = ($(window).outerHeight() - $('.activity-indicator', this.el).outerHeight())/2;
	    //center the activity indicator
	    $('.activity-indicator', this.el).css('margin-top', to_margin + 'px');
    }
});
// _________________________________________________________________________ SceneCastleView
main.views.SceneCastleView = main.views.SceneView.extend({
	FADE_CLASS: "fade-fast",
	name: "scene-castle",
    // ----------------- initialize
    initialize: function() {
        console.log("SceneCastleView ---- initialize");
        this.template = _.template(this.templateLoader.get(this.name));
    },
    // ----------------- beforeRender
    beforeRender: function() {
        console.log("SceneCastleView ---- render");
	    var self = this;
        $(this.el).html(this.template());
        this.castleMove = Hammer($('#scene-castle', this.el));
        this.castleMove.on('swipeleft dragleft', function() {
	       self.playAudio();
	       self.deactivate();
	    });
        return this;
	},
	// ----------------- playAudioUnique
    playAudioUnique: function() {
	    var self = this;
	    setTimeout(function(){
		    //haven't hit the can play sound event yet
		    //do not do not play the sound
		    if(self.can_play_sound) main.router.mainView.storyView.audio_el.get(0).play();
		     setTimeout(function(){
				 if(!self.can_play_sound) main.router.mainView.storyView.audio_el.get(0).pause();
			 }, 1500);
		}, 3000);
    }, 
	// ----------------- beforePosize
    beforePosize: function() {
        console.log("SceneCastleView ---- beforePosize");
	},
	// ----------------- beginAnimation
    beginAnimation: function() {
	},
    // ----------------- transitionOut
    transitionOut: function() {
	    var self = this;
	    clearTimeout(this.transitionTimeout);
	    
	    var bodyTimer = setTimeout(function() {
	         $('body').addClass(self.ALLOW_SWIPE_CLASS);
	    }, 3000);
	    
	    $('.fade-to-black').css('display', 'block');
	    this.transitionTimeout = setTimeout(function(){
	    	$('#scene-castle', self.el).removeClass(self.NEXT_CLASS);
	        $('#scene-castle', self.el).addClass(self.ANIMATE_CLASS).delay(2900).queue(function() {
	            $(this).hide();
	            $(self.el).css('display', 'none');
	            $(self.el).trigger(self.NEXT);
	            $('body').addClass(self.ALLOW_SWIPE_CLASS);
			 });
		 }, 200);
    },
    // ----------------- show
	show:function(){
		var self = this;
	   $('#scene-castle', this.el).addClass(this.NEXT_CLASS);
	}
});
// _________________________________________________________________________ SceneCreationView
main.views.SceneCreationView = main.views.SceneView.extend({
	state: "",
	name: "scene-creation",
    // ----------------- initialize
    initialize: function() {
        console.log("SceneCreationView ---- initialize");
        this.template = _.template(this.templateLoader.get(this.name));
    },
    // ----------------- beforeRender
    beforeRender: function() {
        console.log("SceneCreationView ---- render");
        var self = this;
        $(this.el).html(this.template());
        this.creationMove = Hammer($('#scene-creation', this.el));
        // CREATION GESTURES
	    this.creationMove.on('swipeleft dragleft', function() {
	    	self.playAudio();
		    self.deactivate();
	    });
	    this.creationMove.on('swiperight', function() {
		    //!!!!!!!!!!!!!!!!!!!
	        /*if ($('body').hasClass(self.ALLOW_SWIPE_CLASS) && !$(this).hasClass(self.NEXT_CLASS)) {
	            $('body').removeClass(self.ALLOW_SWIPE_CLASS);
	            var bodyTimer = setTimeout(function() {
	                $('body').addClass(self.ALLOW_SWIPE_CLASS);
	            }, 2800);
	
	            $('#scene-creation', self.el).css({
	                '-webkit-transition-delay': '0s',
	                '-webkit-transform': 'translateX(0%)'
	            });
	            $('#scene-lab', self.el).css({
	                '-webkit-transition-delay': '0s',
	                '-webkit-transform': 'translateX(-100%)'
	            });
	        } else if ($('body').hasClass(self.ALLOW_SWIPE_CLASS) && $(this).hasClass(self.NEXT_CLASS)) {
	            $('body').removeClass(self.ALLOW_SWIPE_CLASS);
	            var bodyTimer = setTimeout(function() {
	                $('body').addClass(self.ALLOW_SWIPE_CLASS);
	            }, 2000);
	
	            $(this).css({
	                '-webkit-transition-delay': '0s',
	                '-webkit-transform': 'translateX(0%)'
	            });
	            $('#scene-lab').css({
	                '-webkit-transition-delay': '0s',
	                '-webkit-transform': 'translateX(-100%)'
	            });
	        }*/
	    });
     
        return this;
	},
	// ----------------- playAudioUnique
    playAudioUnique: function() {
	    var self = this;
	   // setTimeout(function(){
		main.router.mainView.storyView.audio_el.get(0).play();
		setTimeout(function(){
			 if(!self.can_play_sound) main.router.mainView.storyView.audio_el.get(0).pause();
		}, 2000);

		//}, 2500);
    }, 
	// ----------------- beforePosize
    beforePosize: function() {
    	var self = this;
    },
    // ----------------- beginAnimation
    beginAnimation: function() {
	    var self = this;
        $('#scene-creation', this.el).addClass(this.ANIMATE_CLASS);
        //set 3600 timeout to hide unicorn container
        $('#unicorn-container', this.el).addClass(this.ANIMATE_CLASS);
	},
    // ----------------- transitionOut
    transitionOut: function() {
	    var self = this;
	    
	     var bodyTimer = setTimeout(function() {
	         $('body').addClass(self.ALLOW_SWIPE_CLASS);
	    }, 3000);
	    
	    if ( !$('#scene-creation', self.el).hasClass(self.NEXT_CLASS)) {
            clearTimeout(this.davidTimeout);
            clearTimeout(this.trasitionTimeout);
            clearTimeout(this.endTimeout);
            this.davidTimeout = setTimeout(function(){
	            $('#david', self.el).css('display', 'none');
            }, 1410);
            $(self.el).css('zIndex', self.BASE_Z_INDEX);
            this.trasitionTimeout = setTimeout(function(){
	            $('#scene-creation', self.el).addClass(self.NEXT_CLASS);
	            $(self.el).trigger(self.NEXT);
            }, 200);
             //after transition end
	        //set to display none
	        this.endTimeout = setTimeout(function(){
		        $(self.el).css('display', 'none');
	        }, 3500);
        } 
        else {
            $('#scene-creation', self.el).css({
                '-webkit-transition-delay': '0s',
                '-webkit-transform': 'translateX(-200%)'
            });
        }
	}
});
// _________________________________________________________________________ SceneGerbilView
main.views.SceneGerbilView = main.views.SceneView.extend({
	SCENE_TRANSITION_CLASS: "scene-transition",
	STATE_LEFT: "state-left",
	STATE_GERBIL: "state-gerbil",
	STATE_STATUE: "state-statue",
	STATE_DEFAULT: "state-default",
	STATUE_FOCUS_POS_OFFSET_LEFT: 0.42,
	GERBIL_FOCUS_POS_OFFSET_LEFT: 0.21,
	state: "",
	name: "scene-gerbil",
    // ----------------- initialize
    initialize: function() {
        console.log("SceneGerbilView ---- initialize");
        this.template = _.template(this.templateLoader.get(this.name));
    },
    // ----------------- beforeRender
    beforeRender: function() {
        console.log("SceneGerbilView ---- render");
        var self = this;
        $(this.el).html(this.template());  
        this.gerbilMove = Hammer($('#scene-gerbil', this.el));
        // GERBIL GESTURES
	    this.gerbilMove.on('swipeleft dragleft', function() {
	    	self.playAudio();
		    self.deactivate();
	 	});
	    this.gerbilMove.on('swiperight', function() {
	        /*if ($('body').hasClass(self.ALLOW_SWIPE_CLASS) && !$(this).hasClass(self.NEXT_CLASS)) {
	            $('body').removeClass(self.ALLOW_SWIPE_CLASS);
	            var bodyTimer = setTimeout(function() {
	                $('body').addClass(self.ALLOW_SWIPE_CLASS);
	            }, 2000);
	
	            $('#scene-gerbil', self.el).css({
	                '-webkit-transition-delay': '0s',
	                '-webkit-transform': 'translateX(0%)'
	            });
	            $('#scene-creation', self.el).css({
	                '-webkit-transition-delay': '0s',
	                '-webkit-transform': 'translateX(-100%)'
	            });
	        } else if ($('body').hasClass(self.ALLOW_SWIPE_CLASS) && $(this).hasClass(self.NEXT_CLASS)) {
	            $('body').removeClass(self.ALLOW_SWIPE_CLASS);
	            var bodyTimer = setTimeout(function() {
	                $('body').addClass(self.ALLOW_SWIPE_CLASS);
	            }, 2000);
	
	            $('#scene-gerbil', self.el).css({
	                '-webkit-transition-delay': '0s',
	                '-webkit-transform': 'translateX(0%)'
	            });
	            $('#scene-creation', self.el).css({
	                '-webkit-transition-delay': '0s',
	                '-webkit-transform': 'translateX(-100%)'
	            });
	        }*/
	    });
        return this;
	},
	// ----------------- playAudioUnique
    playAudioUnique: function() {
	    var self = this;
	    //setTimeout(function(){
		main.router.mainView.storyView.audio_el.get(0).play();
		 setTimeout(function(){
			 if(!self.can_play_sound) main.router.mainView.storyView.audio_el.get(0).pause();
		 }, 2000);
		//}, 2500);
    }, 
	// ----------------- beforePosize
    beforePosize: function() {
	    var self = this;
	    setTimeout(function(){
	    	if(self.state == self.STATE_STATUE) self.forceToStatue();
		    if(self.state == self.STATE_GERBIL) self.forceToGerbil();
		    if(self.state == self.STATE_LEFT) self.forceToLeft();
	    }, 1200);
    },
   
    // ----------------- beginAnimation
    beginAnimation: function() {
	     var self = this;
	     $('#scene-gerbil', this.el).addClass(this.ANIMATE_CLASS);
	},
    // ----------------- transitionOut
    transitionOut: function() {
	    var self = this;
	    
	     var bodyTimer = setTimeout(function() {
	         $('body').addClass(self.ALLOW_SWIPE_CLASS);
	    }, 3000);
	    
	    if ( !$('#scene-gerbil', self.el).hasClass(self.NEXT_CLASS) ) {
            $('#scene-gerbil', self.el).addClass(self.NEXT_CLASS);
            $(self.el).trigger(self.NEXT);
            $(self.el).css('display', 'none');
	    }
	}
});   
// _________________________________________________________________________ SceneXrayView
main.views.SceneXrayView = main.views.SceneView.extend({
	name: "scene-xray",
    // ----------------- initialize
    initialize: function() {
        console.log("SceneXrayView ---- initialize");
        this.template = _.template(this.templateLoader.get(this.name));
    },
    // ----------------- beforeRender
    beforeRender: function() {
        console.log("SceneXrayView ---- render");
        var self = this;
        $(this.el).html(this.template());
        this.xRayMove = Hammer($('#scene-xray', this.el));
        
         this.xRayMove.on('swipeleft dragleft', function() {
         	 self.playAudio();
	         self.deactivate();
	    });
        return this;
	},
	// ----------------- playAudioUnique
    playAudioUnique: function() {
	    var self = this;
	    setTimeout(function(){
			main.router.mainView.storyView.audio_el.get(0).play();
			setTimeout(function(){
				 if(!self.can_play_sound) main.router.mainView.storyView.audio_el.get(0).pause();
			}, 1500);
		}, 2500);
    }, 
	// ----------------- beginAnimation
    beginAnimation: function() {
	     $('#scene-xray', this.el).addClass(this.ANIMATE_CLASS);
	},
    // ----------------- transitionOut
    transitionOut: function() {
	    var self = this;
        clearTimeout(this.endTimeout);
         var bodyTimer = setTimeout(function() {
	         $('body').addClass(self.ALLOW_SWIPE_CLASS);
	    }, 5000);
	    
        //clearTimeout(this.manAudioTimeout);
	    $('#scene-xray', self.el).addClass(self.NEXT_CLASS).delay(3000).queue(function() {
            $(self.el).trigger(self.NEXT);
        });
        this.endTimeout = setTimeout(function(){
	        $(self.el).css('display', 'none');
        }, 5000);

        $('#xray-parts', self.el).addClass(self.ANIMATE_CLASS);
        $('#xray-parts', self.el).addClass(self.NEXT_CLASS);
    }
});
// _________________________________________________________________________ SceneLabView
main.views.SceneLabView = main.views.SceneView.extend({
	name: "scene-lab",
    // ----------------- initialize
    initialize: function() {
        console.log("SceneLabView ---- initialize");
        this.template = _.template(this.templateLoader.get(this.name));
    },
    // ----------------- beforeRender
    beforeRender: function() {
        console.log("SceneLabView ---- render");
        var self = this;
        $(this.el).html(this.template());  
        this.labMove = Hammer($('#scene-lab', this.el));
	    // LAB GESTURES
	    this.labMove.on('swipeleft dragleft', function() {
	    	self.playAudio();
		    self.deactivate();
	    });
	    this.labMove.on('swiperight', function() {
		    //self.transitionBack();
		    var back = true;
		    self.deactivate(back);
	       /* if ($('body').hasClass(self.ALLOW_SWIPE_CLASS) && !$(this).hasClass(self.NEXT_CLASS)) {
	            $('body').removeClass(self.ALLOW_SWIPE_CLASS);
	            var bodyTimer = setTimeout(function() {
	                $('body').addClass(self.ALLOW_SWIPE_CLASS);
	            }, 2000);
	
	            $('#scene-lab', self.el).css({
	                '-webkit-transition-delay': '0s',
	                '-webkit-transform': 'translateX(0%)'
	            });
	            $('#scene-xray', self.el).css({
	                '-webkit-transition-delay': '0s',
	                '-webkit-transform': 'translateX(0%)'
	            });
	        } else if ($('body').hasClass(self.ALLOW_SWIPE_CLASS) && $(this).hasClass(self.NEXT_CLASS)) {
	            $('body').removeClass(self.ALLOW_SWIPE_CLASS);
	            var bodyTimer = setTimeout(function() {
	                $('body').addClass(self.ALLOW_SWIPE_CLASS);
	            }, 2000);
	
	            $('#scene-lab', self.el).css({
	                '-webkit-transition-delay': '0s',
	                '-webkit-transform': 'translateX(0%)'
	            });
	            $('#scene-xray', self.el).css({
	                '-webkit-transition-delay': '0s',
	                '-webkit-transform': 'translateX(0%)'
	            });
	        }*/
	    });
              
        return this;
	},
	// ----------------- playAudioUnique
    playAudioUnique: function() {
	    var self = this;
	    //setTimeout(function(){
		main.router.mainView.storyView.audio_el.get(0).play();
		setTimeout(function(){
			 if(!self.can_play_sound) main.router.mainView.storyView.audio_el.get(0).pause();
		}, 1500);

		//}, 2500);
    }, 
	// ----------------- beforePosize
    beforePosize: function() {
	},
	// ----------------- beforeDeactivate
    beforeDeactivate: function() {
    },
	// ----------------- beginAnimation
    beginAnimation: function() {
	    var self = this;
	     $('#scene-lab', this.el).addClass(this.ANIMATE_CLASS);
	},
    // ----------------- transitionOut
    transitionOut: function() {
		var self = this;
		
		 var bodyTimer = setTimeout(function() {
	         $('body').addClass(self.ALLOW_SWIPE_CLASS);
	     }, 3000);
		
		if(!$('#scene-lab', self.el).hasClass(self.NEXT_CLASS)){
            clearTimeout(this.trasitionTimeout);
            clearTimeout(this.endTimeout);
			this.transitionTimeout = setTimeout(function(){
				$(self.el).trigger(self.NEXT);
				$('#scene-lab', self.el).addClass(self.NEXT_CLASS);
			}, 200);
		    $(self.el).css('zIndex', self.BASE_Z_INDEX);
		    //after transition end
	        //set to display none
	       this.endTimeout = setTimeout(function(){
		        $(self.el).css('display', 'none');
		   }, 5500);
		}
    },
    // ----------------- transitionOut
    transitionBack: function() {
    }
});
// _________________________________________________________________________ SceneBoyView
main.views.SceneBoyView = main.views.SceneView.extend({
	TOP_Z_INDEX: 999,
	ANIM_OFFSET: 40,
	name: "scene-boy",
	answer: "",
	exp_screen_is_shown: false,
	events:{
		'click #btn-different-answer': 'onBtnDifferentAnswerClick',
		'click #btn-exit': 'onBtnExitClick'
	},
    // ----------------- initialize
    initialize: function() {
        console.log("SceneBoyView ---- initialize");
        this.template = _.template(this.templateLoader.get(this.name));
    },
    // ----------------- beforeRender
    beforeRender: function() {
        console.log("SceneBoyView ---- render");
        $(this.el).html(this.template());
        var self = this;
        this.boyMove = Hammer($('#scene-boy', this.el));
        // BOY GESTURES
	    this.boyMove.on('swipeleft dragleft', function() {
	        self.deactivate();
	    });
	    //set the text of the answer
        this.answer_el = $('#answer', this.el);
        this.cta_container_el = $('#cta-container', this.el);
        this.text_container_el = $('.text-container', self.el);
		this.text_container_el.addClass(this.STAGE_TRANSITION_CLASS);
       //$('#text-02', self.el).css('opacity', '0');
       $('#text-01', this.el).addClass(this.FADE_CLASS);
       $('#text-02', this.el).addClass(this.FADE_CLASS);
        //add fade class
		this.answer_el.addClass(this.FADE_CLASS);
		setTimeout(function(){
	        self.model = main.router.responseGeneratorModel;
	        self.answers = self.model.get("answers");
	        self.setAnswer();
	        self.prepareForAnimation();
        }, 100);
        return this;
	},	
	// ----------------- prepareForAnimation
	prepareForAnimation:function(){
		//Explanation Screen Info
		//set to default pos + offset  d
	},
	// ----------------- generateQuestion
	generateAnswer:function(){
		//generate a random number
		//between 0 and num questions
		var rand = Math.floor(Math.random()*this.answers.length);
		return this.answers[rand];
		//return this.answers[5];
	},
	// ----------------- changeAnswer
	changeAnswer:function(){
		var self = this;
		this.hideAnswer();
		setTimeout(function(){
			//generate new answer
			self.setAnswer();
			//showAnswer
			self.showAnswer();
		}, 400);
	},
	// ----------------- setAnswer
	setAnswer:function(){
		var self =  this;
	    this.answer = this.generateAnswer();
		//set opacity to 0
        this.answer_el.html(this.answer);
        //set text container height its inner row
        //also update the model 
        //so that you can send  the answer for reference
        //if the user sends a contact email
        this.model.set({current_answer: this.answer});
	},
	// ----------------- onAppend
    onAppend: function() {
    },
    // ----------------- posizeAnswer
    posizeAnswer: function() {
	    var self = this;
	    setTimeout(function(){
			var min_height = parseInt(self.text_container_el.css('min-height'));
			var to_height = $('#answer', self.el).outerHeight();
			if(to_height > min_height) self.text_container_el.css('height', to_height + 'px');
		}, 100);
    },
    // ----------------- hideAnswer
	hideAnswer:function(){
		//set opacity to 0
		this.answer_el.css('opacity', '0');
	},
	// ----------------- showAnswer
	showAnswer:function(){
		//set opacity to 1
		this.answer_el.css('opacity', '1');
	},
	// ----------------- beginAnimation
    beginAnimation: function() {
	     var self = this;
	     $('#scene-boy', self.el).addClass(self.ANIMATE_CLASS).delay(2500).queue(function() {
		        self.posizeAnswer();
		        
                setTimeout(function(){
	                $('#text-01', self.el).css('opacity', '0');
	            }, 1000);
                setTimeout(function(){
	                $('#text-02', self.el).css('opacity', '1');
	                $('#boy-02', self.el).css('display', 'none');
	                $('#boy-01', self.el).css({
	                    'display': 'block',
	                    '-webkit-animation': 'headTremble 0.25s',
	                    '-webkit-animation-iteration-count': '4'
	                });
                }, 1500);
         });
	},
    // ----------------- transitionOut
    transitionOut: function() {
	    var self = this;
	     var bodyTimer = setTimeout(function() {
	         $('body').addClass(self.ALLOW_SWIPE_CLASS);
	    }, 1000);
	    
         $(this.el).css('zIndex', this.BASE_Z_INDEX);
         this.transitionTimeout = setTimeout(function(){
				$(self.el).trigger(self.NEXT);
				$('#scene-lab', self.el).addClass(self.NEXT_CLASS);
		}, 200);
	},
	// ----------------- beforeDisposeUnique
    beforeDisposeUnique: function() {
	    var self = this;
	     this.boyMove.off('swipeleft dragleft', function() {
	        self.deactivate();
	    });
    }
});
// _________________________________________________________________________ SceneFinalView
main.views.SceneFinalView = main.views.SceneView.extend({
	//EXIT_SWIPE: "exit_swipe",
	ACTIVE_Z_INDEX: 300,
	name: "scene-final",
    // ----------------- initialize
    initialize: function() {
        console.log("SceneFinalView ---- initialize");
        this.template = _.template(this.templateLoader.get(this.name));
    },
    // ----------------- beforeRender
    beforeRender: function() {
        console.log("SceneFinalView ---- render");
        var self = this;
        $(this.el).html(this.template());
        this.finalMove = Hammer($('#scene-final', this.el));
        this.finalMove.on('swipeleft dragleft', function() {
	         self.deactivate();
	         //$(self.el).trigger(self.EXIT_SWIPE);
	    });
        return this;
	},
	// ----------------- showExplanation
	showExplanation: function(){
		var self = this;
		//this.exp_screen_is_shown = true;
		//first hide the first cta container
		//this.hideAnswerScreen();
		//set display to block;
		this.cta_final_container_el = $('#cta-final-container', this.el);
		this.cta_final_container_el.css('opacity', '0'); 
		this.cta_final_container_el.css('display', 'block');
		console.log("this.FADE_SLOW_CLASS = " + this.FADE_SLOW_CLASS);
		this.cta_final_container_el.addClass(this.FADE_SLOW_CLASS);
		
		this.sub_text_top_el = $('.sub-text-top', this.cta_final_container_el);
		this.sub_text_top_el.css('opacity', '0');
		this.h1_el = $('h1', this.cta_final_container_el);
		this.h1_el.css('opacity', '0');
		this.sub_text_bottom_el = $('.sub-text-bottom', this.cta_final_container_el);
		this.sub_text_bottom_el.css('opacity', '0');
		
		setTimeout(function(){
			//fade in 
			self.cta_final_container_el.css('opacity', '1');
			//self.cta_final_container_el.css('zIndex', self.TOP_Z_INDEX);
			//then show the info
			//set z-index above the last
			self.showExplanationInfo();
		}, 100);
	},
	// ----------------- showExplanationInfo
	showExplanationInfo: function(){
		var self = this;
		this.sub_text_top_el.css('opacity', '0');
		this.sub_text_top_el.addClass(this.FADE_CLASS);
		this.h1_el.css('opacity', '0');
		this.h1_el.addClass(this.FADE_CLASS);
		this.sub_text_bottom_el.css('opacity', '0');
		this.sub_text_bottom_el.addClass(this.FADE_CLASS);
		//settimeout
		//to wait for faede in to nearly finish
		setTimeout(function(){
			//fade in h1
			self.h1_el.css('opacity', '1');
			setTimeout(function(){
				//fade in sub-text
				self.sub_text_top_el.css('opacity', '1');
				setTimeout(function(){
					//fade in button
					self.sub_text_bottom_el.css('opacity', '1');
				}, 60);
			}, 200);		
		}, 500);
	},
	// ----------------- removeExplanation
	/*removeExplanation: function(){
		if(this.exp_screen_is_shown && this.cta_final_container_el && this.cta_container_el){
			this.cta_final_container_el.css('opacity', '0');
			this.cta_final_container_el.css('zIndex', this.TOP_Z_INDEX-1);
			this.cta_container_el.css('zIndex', this.TOP_Z_INDEX);
			this.sub_text_el.css('opacity', '0');
			this.h1_el.css('opacity', '0');
			this.btn_el.css('opacity', '0');
			this.exp_screen_is_shown = false;
			//this.cta_container_el.css('opacity', '1');
		}
		this.cta_container_el.removeClass(this.ANIMATE_CLASS);
	},*/
	// ----------------- beginAnimation
    beginAnimation: function() {
	     $('#scene-final', this.el).addClass(this.ANIMATE_CLASS);
	     $(this.el).css('zIndex', this.ACTIVE_Z_INDEX);
	     this.showExplanation();
	},
    // ----------------- transitionOut
    transitionOut: function() {
	    var self = this;
	    //  $('#scene-final', self.el).addClass(self.NEXT_CLASS).delay(3000).queue(function() {
        $(self.el).trigger(self.NEXT);
        
        // });
        //after transition end
        //set to display none
        //$('#scene-xray', self.el).on('transitionend webkitTransitionEnd oTransitionEnd', function(){
        /*this.endTimeout = setTimeout(function(){
	        $(self.el).css('display', 'none');
        //});
        }, 5000);

        $('#xray-parts', self.el).addClass(self.ANIMATE_CLASS);
        $('#xray-parts', self.el).addClass(self.NEXT_CLASS);*/
    }
});
// _________________________________________________________________________ LoaderView
main.views.LoaderView = Backbone.View.extend({
	GOLD_GRAD_TRANS_CLASS: "gold-grad-transition",
	GOLD_GRAD_TRANS_CLASS_OUT: "gold-grad-transition-out",
	INFO_TRANS_CLASS: "info-transition",
	FADE_CLASS: "fade-fast",
	LOAD_RATIO_TRANS_CLASS: "loaded-ratio-indicator-transition",
	STATE_TOP: "state_top",
	STATE_BOTTOM: "state_bottom",
	STATE_STAGE: "state_stage",
	STATE_TOTAL: "state_total",
	IS_COVERING: "is_covering",
    TOTAL_HIDE_BG: "total_hide_bg",
	INFO_ANIM_OFFSET: 40,
	is_stopped: false,
	view_state: "",
	info_default_y_arr: [],
	show_info_incr: 0,
	rainbow_cache: [],
	basic_anim_is_complete: false,
	override_is_stoppped: false,
	num_rainbows_generated: 0,
	loadedRatioIndicator_defY: 0,
	ratio_indicator_num_letters: 0,
	actual_ratio_indicator_num_letters: 0,
	min_ratio_update_dealy: 100,
	cur_ratio_update_delay: 60,
	ratio_indicator_is_hidden: false,
	loaded_ratio_indicator_copy: "weeeeeeeee",
	info: [
		"<p>It will be just one moment while we clean our Creative Castle for our very special guest.</p>",
		"<p>(That’s YOU!)</p>",
		"<p>Look.</p>",
		"<p>Even unicorns are involved.</p>",
		"<p>It will be just one moment while we clean our Creative Castle for our very special guest.</p>"
	],
    // ----------------- initialize
    initialize: function() {
        console.log("LoaderView ---- initialize");
         $(this.el).css('visibility', 'hidden');
        this.render();
    },
    // ----------------- render
    render: function(eventName) {
        console.log("LoaderView ---- render");
        this.initModel();
         $(this.el).addClass('loader');
        //add the large yellow gradient
        this.createBG();
        this.createLoaderInfo();
        this.createReadyMsg();
        this.prepareForAnimation();
        this.view_state = this.STATE_BOTTOM;
        return this;
	},
	// ----------------- initModel
    initModel: function() {
            console.log("LoaderView ---- initModel");
	    var self = this;
	    //when the model's loaded ratio changes
	    //update the loaded ratio indicator
		this.model.on('change:loadedRatio', function(){
	        self.updateRatioIndicator();
        });
    },
	// ----------------- createBG
    createBG: function() {
	    this.rainbowContainer_el = $('<div class="rainbow-container"></div>');
	    $(this.el).append(this.rainbowContainer_el);
	    this.goldGrad_el = $('<div class="gold-grad"></div>');
	    this.goldGrad_el_top = $('<div class="top"></div>');
	    this.goldGrad_el_bottom = $('<div class="bottom"></div>');
	    this.goldGrad_el.append(this.goldGrad_el_top);
	    this.goldGrad_el.append(this.goldGrad_el_bottom);
	    $(this.el).append(this.goldGrad_el);
    },
    // ----------------- createReadyMsg
    createReadyMsg: function() {
	    this.readyMsgCnt_el = $('<div class="ready-msg-cnt"></div>');
	    this.readyMsg_el = $('<div class="ready-msg"><h1>READY<h1></div>');
	    this.readyMsgCnt_el.append(this.readyMsg_el);
	    $(this.el).append(this.readyMsgCnt_el);
	    this.readyMsgCnt_el.css('visibilty', 'hidden');
	    this.readyMsg_el.css('opacity', '0');
	    this.readyMsg_el.addClass(this.INFO_TRANS_CLASS);
    },
    // ----------------- createLoaderInfo
    createLoaderInfo: function() {
	    //create a container for the 
	    //loaded ratio indicator
	    this.loaderInfoContainer = $('<div class="loader-info-container"></div>');
	    $(this.el).append(this.loaderInfoContainer);
	    //create the loaded ratio indicator
	    //loaded_ratio_indicator_copy
	    this.createRatioIndicator();
	    this.createInfo();
	    
	    //position info at the center x
	    var to_x = ($(window).width() - this.loaderInfoContainer.outerWidth())/2;
	    //and at 2/3 y
	    var to_y = ($(window).height() - this.loaderInfoContainer.outerHeight())/2;
	    this.loaderInfoContainer.css('top', to_y + 'px');
	    this.loaderInfoContainer.css('left', to_x + 'px');
	    this.loaderInfoContainer.css('visibility', 'hidden');
	},
	// ----------------- createRatioIndicator
    createRatioIndicator: function() {
        var self = this;
	    this.loadedRatioIndicator = $('<div class="loaded-ratio-indicator"></div>');
        this.loadedRatioIndicatorRow = $('<div class="row"></div>');
        this.loadedRatioIndicator.append(this.loadedRatioIndicatorRow);
	    this.loadedRatioIndicatorTextContainer = $('<div class="loaded-ratio-indicator-text-cta"></div>');
	    this.loadedRatioIndicator.append(this.loadedRatioIndicatorTextContainer);
	    this.loadedRatioIndicatorActivityIndicator = $('<div class="activity-indicator"></div>');
	    this.loadedRatioIndicator.append(this.loadedRatioIndicatorActivityIndicator);
	    if (Modernizr.large) this.loadedRatioIndicatorActivityIndicator.activity({segments: 8, width:3, space: 0, length: 5, color: '#333e48', valign:'top', align:'left', padding: 12});
	    else this.loadedRatioIndicatorActivityIndicator.activity({segments: 8, width:2, space: 0, length: 3, color: '#333e48', valign:'top', align:'left', padding: 9});
        self.loadedRatioIndicator.css('visibilty', 'hidden');
        self.loadedRatioIndicator.css('opacity', '0');
        self.loaderInfoContainer.append(self.loadedRatioIndicator);
        self.loadedRatioIndicator.addClass(self.INFO_TRANS_CLASS);
        //settimeout here
        setTimeout(function(){
            var to_x = (self.loaderInfoContainer.outerWidth() - self.loadedRatioIndicator.outerWidth())/2;
            self.loadedRatioIndicator.css('left', to_x + 'px');
        }, 100);
    },
    // ----------------- updateRatioIndicator
    updateRatioIndicator: function() {
	    //need to slow the 
	    //indicator down when data is cached
	    //save the current time
	    //if current time - last_ratio_update_time
	    //is less than minimum time to update again
	    //min_ratio_update_dealy
	    var delay = 60;
	    var date = new Date();
	    this.current_time = date.getTime();
	    if( (this.current_time-this.last_ratio_update_time) < this.min_ratio_update_dealy ){
		    this.cur_ratio_update_delay += 100;
		    delay = this.cur_ratio_update_delay;
	    }
	    this.last_ratio_update_time = this.current_time;
	    //show the ratio of letters
	    //that matches the ratio
	    //of assets loaded
	    var self = this;
	    var add_letter_start, add_letter_end, letter_el, to_x;
        var total_num_letters = self.loaded_ratio_indicator_copy.length;
        var num_letters_to_show = Math.floor(self.model.get("loadedRatio")*total_num_letters);
        if(self.ratio_indicator_num_letters < num_letters_to_show){
            //create an el for each letter that needs 
            //to be shown 
            add_letter_start = self.ratio_indicator_num_letters;
            add_letter_end = num_letters_to_show;
        }
        for(var i=add_letter_start;i<add_letter_end;i++){
            //create a new letter container el
            letter_el = $('<h1>' + this.loaded_ratio_indicator_copy.charAt(i) + '</h1>');
            letter_el.css('opacity', '0');
            //add the transition class
            letter_el.addClass(this.FADE_CLASS);
            this.addLetter(letter_el, delay);
            if(this.model.get("loadedRatio") == 1){
                this.loadedRatioIndicatorActivityIndicator.remove();
            }
        }
        self.ratio_indicator_num_letters = num_letters_to_show;
    },
    // ----------------- addLetter
    addLetter: function(letter_el, delay) {
         var self = this;
         var to_x;
         setTimeout(function(){
            if(!self.ratio_indicator_is_hidden){
                self.loadedRatioIndicatorTextContainer.append(letter_el);
                //and center the ratio indicator
                //after each add
                to_x = (self.loaderInfoContainer.outerWidth() - self.loadedRatioIndicator.outerWidth())/2;
                self.loadedRatioIndicator.css('left', to_x + 'px');
                letter_el.css('opacity', '1');
                self.actual_ratio_indicator_num_letters = self.loadedRatioIndicatorTextContainer.children().length;
           }
        }, delay);
    },
    // ----------------- createInfo
    createInfo: function() {
	    this.infoContainer = $('<div class="info-container"></div>');
	    this.loaderInfoContainer.append(this.infoContainer);
	    var info_el, to_y;
	    this.next_y = 0;
	    //create each info line
	    for(var i=0;i<this.info.length;i++){
	    	info_el = $('<div class="info">' + this.info[i] + '</div>');
	    	this.infoContainer.append(info_el);
	    	info_el.css('opacity', '0');
	    	to_y = this.next_y;
	    	this.next_y = to_y + info_el.outerHeight();
	    	info_el.css({transform: 'translate3d(0,' + (to_y + this.INFO_ANIM_OFFSET) + 'px, 0)',
						 MozTransform: 'translate3d(0,' + (to_y + this.INFO_ANIM_OFFSET) + 'px, 0)',
						 WebkitTransform: 'translate3d(0,' + (to_y + this.INFO_ANIM_OFFSET) + 'px, 0)',
						 OTransform: 'translate3d(0,' + (to_y + this.INFO_ANIM_OFFSET) + 'px, 0)',
						 msTransform: 'translate3d(0,' + (to_y + this.INFO_ANIM_OFFSET) + 'px, 0)'});
			info_el.addClass(this.INFO_TRANS_CLASS);
	    	this.info_default_y_arr.push(to_y);
	    }
	    //position it below the 
	    // ratio indicator
	    //var to_y = this.loadedRatioIndicator.outerHeight();
	    //this.infoContainer.css('top', '45px');
    },
    // ----------------- posize
    posize: function() {
	    var to_height = parseInt($(window).height()*(0.85));
	    this.goldGrad_el_top.css('height', to_height + 'px');
	    to_height = $(window).height()*1;
	    //set goldGrad_el_bottom height to window height
	    this.goldGrad_el_bottom.css('height', to_height + 'px');
	    
	    var to_y = $(window).height() - this.goldGrad_el_top.outerHeight();
	    if(this.view_state == this.STATE_BOTTOM){
		    var to_y = $(window).height();
		    var to_x = 0;
		    this.goldGrad_el.css({transform: 'translate3d('+ to_x + 'px,' + to_y + 'px, 0)',
							  MozTransform: 'translate3d('+ to_x + 'px,' + to_y + 'px, 0)',
							  WebkitTransform: 'translate3d('+ to_x + 'px,' + to_y + 'px, 0)',
							  Oransform: 'translate3d('+ to_x + 'px,' + to_y + 'px, 0)',
							  msTransform: 'translate3d('+ to_x + 'px,' + to_y + 'px, 0)'});
	    }
	    else if(this.view_state == this.STATE_STAGE){
	    	to_y = $(window).height() - this.goldGrad_el_top.outerHeight();
		    this.goldGrad_el.css({transform: 'translateY('+ to_y + 'px)',
							  MozTransform: 'translateY('+ to_y + 'px)',
							  WebkitTransform: 'translateY('+ to_y + 'px)',
							  OTransform: 'translateY('+ to_y + 'px)',
							  msTransform: 'translateY('+ to_y + 'px)'});
		}
		//update height of the rainbow container
		to_height = $(window).height()*(2/3);
		this.rainbowContainer_el.css('height', to_height + 'px');
		//position info at the center x
	    var to_x = ($(window).width() - this.loaderInfoContainer.outerWidth())/2;
	    //and at 2/3 y
	    //to_y = ($(window).height())*(0.4);
	    to_y = ($(window).height() - this.loaderInfoContainer.outerHeight())/2;
	    this.loaderInfoContainer.css('top', to_y + 'px');
	    this.loaderInfoContainer.css('left', to_x + 'px');
	    
	    //position the ready-msg-cnt in the center
	    to_y = ($(window).height() - this.readyMsgCnt_el.outerHeight())/2;
	    to_x = ($(window).width() - this.readyMsgCnt_el.outerWidth())/2;
	    this.readyMsgCnt_el.css({transform: 'translate3d('+ to_x + 'px,' + to_y + 'px, 0)',
							  MozTransform: 'translate3d('+ to_x + 'px,' + to_y + 'px, 0)',
							  WebkitTransform: 'translate3d('+ to_x + 'px,' + to_y + 'px, 0)',
							  Oransform: 'translate3d('+ to_x + 'px,' + to_y + 'px, 0)',
							  msTransform: 'translate3d('+ to_x + 'px,' + to_y + 'px, 0)'});
			
		this.loadedRatioIndicatorActivityIndicator.activity(false);				  
		if (Modernizr.large) this.loadedRatioIndicatorActivityIndicator.activity({segments: 8, width:3, space: 0, length: 5, color: '#333e48', valign:'top', align:'left', padding: 12});
	    else this.loadedRatioIndicatorActivityIndicator.activity({segments: 8, width:2, space: 0, length: 3, color: '#333e48', valign:'top', align:'left', padding: 9});
	},
	// ----------------- startLoader
    startLoader: function() {
	    //if already stopped 
	    //need to override this
	    if(this.is_stopped) this.override_is_stoppped = true;
	    var self = this;
	 	self.generateRainbows();
		this.is_stopped = false;
    },
     // ----------------- stopLoader
    stopLoader: function() {
	    var self = this;
	    //clear the generate rainbow timer
	    //if basic loader hasn't
	    //played out
	    if(!this.is_stopped){
		    if(this.basic_anim_is_complete){
			    this.completeStopLoader();
		    }
	    }
	    this.is_stopped = true;
	},
    // ----------------- completeStopLoader
    completeStopLoader: function() {
    	var self = this;
    	this.is_stopped = true;
	    //fade out the text
	    //stetImeout to 
	    //move the gold bg up
	    setTimeout(function(){
	    	self.hideLoaderInfo();
		    setTimeout(function(){
		    	self.showReadyMsg();
			    self.hideBg();
			    self.override_is_stoppped = false;
	    	}, 900);
		}, 500);
    },
    // ----------------- show
    show: function() {
	     var self = this;
    	$(this.el).css('visibility', 'visible');
	    //set to visible
	     this.animateBg();
	     setTimeout(function(){
		    self.showLoaderInfo();
	     }, 100);
    },
    // ----------------- hide
    hide: function() {
    	//move the gradient off the screen
	    this.totalHideBg();
    },
    // ----------------- show
    showReadyMsg: function() {
	    var self = this;
	    //setTimeout(function(){
	    	self.readyMsgCnt_el.css('visibility', 'visible');
	    	//move in and fade in
			var to_y = 0;
			self.readyMsg_el.css({transform: 'translateY('+ to_y + 'px)',
							  MozTransform: 'translateY('+ to_y + 'px)',
							  WebkitTransform: 'translateY('+ to_y + 'px)',
							  OTransform: 'translateY('+ to_y + 'px)',
							  msTransform: 'translateY('+ to_y + 'px)'});
			self.readyMsg_el.css('opacity', '1');
		//}, 200);
    },
    // ----------------- hideReadyMsg
    hideReadyMsg: function() {
    	//move in and fade in
		var to_y = -(this.INFO_ANIM_OFFSET);
		this.readyMsg_el.css({transform: 'translateY('+ to_y + 'px)',
						  MozTransform: 'translateY('+ to_y + 'px)',
						  WebkitTransform: 'translateY('+ to_y + 'px)',
						  OTransform: 'translateY('+ to_y + 'px)',
						  msTransform: 'translateY('+ to_y + 'px)'});
		this.readyMsg_el.css('opacity', '0');
    },
    // ----------------- hideLoaderInfo
    hideLoaderInfo: function() {
	    var self = this;
    	this.hideLoaderRatioIndicator();
    	setTimeout(function(){
	    	self.hideInfo();
    	}, 300);
	},
    // ----------------- showLoaderInfo
    showLoaderInfo: function() {
    	var self = this;
	    //initialize the ratio indicator
	    this.initLoaderRatioIndicator();
	     //set a delay to show the 
	    //info lines
	    setTimeout(function(){
		    self.showInfo();
	    }, 500);
    },
    // ----------------- initLoaderRatioIndicator
    initLoaderRatioIndicator: function() {
    	//begin the ratio indicator
	    //and show it
    	this.showLoaderRatioIndicator();
    },
    // ----------------- hideLoaderRatioIndicator
    hideLoaderRatioIndicator: function() {
    	 //clearTimeout(this.upadteRatioIndicatorTimeout);
    	 this.ratio_indicator_is_hidden = true;
	    //if full ratio indicator is not shown
	    //add all letter els and show them immediately 
	    //clear any timeouts for the individual showing
	    //of the letters
	    var self = this;
	    var add_letter_start = 0; 
	    var add_letter_end = 0;
	    var letter_el, to_x;
	    var num_letters_to_show = this.loaded_ratio_indicator_copy.length;
	    if(this.actual_ratio_indicator_num_letters < num_letters_to_show){
		    //create an el for each letter that needs 
		    //to be shown 
		    add_letter_start = this.actual_ratio_indicator_num_letters;
		    add_letter_end = num_letters_to_show;
	    };
	    
	    for(var i=add_letter_start;i<add_letter_end;i++){
		    //create a new letter container el
		    letter_el = $('<h1>' + this.loaded_ratio_indicator_copy.charAt(i-1) + '</h1>');
		    letter_el.css('opacity', '0');
		    self.loadedRatioIndicatorTextContainer.append(letter_el);

		    //add the tarnsition class
		    letter_el.addClass(this.FADE_CLASS);
		    
		   to_x = (self.loaderInfoContainer.outerWidth() - self.loadedRatioIndicator.outerWidth())/2;
		   self.loadedRatioIndicator.css('left', to_x + 'px');
		}
	    
	    setTimeout(function(){
		    self.loadedRatioIndicatorActivityIndicator.remove();
			for(var i=add_letter_start;i<add_letter_end;i++){
				letter_el = self.loadedRatioIndicatorTextContainer.children().eq(i);
				letter_el.css('opacity', '1');
				//self.actual_ratio_indicator_num_letters = i;
			}
			//and center the ratio indicator
			to_x = (self.loaderInfoContainer.outerWidth() - self.loadedRatioIndicator.outerWidth())/2;
			self.loadedRatioIndicator.css('left', to_x + 'px');
		}, 200);
	    
	    this.ratio_indicator_num_letters = num_letters_to_show;
	    
	    setTimeout(function(){
		    var to_y = self.loadedRatioIndicator_defY - self.INFO_ANIM_OFFSET;
			self.loadedRatioIndicator.css({transform: 'translateY('+ to_y + 'px)',
							  MozTransform: 'translateY('+ to_y + 'px)',
							  WebkitTransform: 'translateY('+ to_y + 'px)',
							  OTransform: 'translateY('+ to_y + 'px)',
							  msTransform: 'translateY('+ to_y + 'px)'});
			self.loadedRatioIndicator.css('opacity', '0');
		}, 800);
    },
    // ----------------- showLoaderRatioIndicator
    showLoaderRatioIndicator: function() {
    	//fade in and move up
    	this.loadedRatioIndicator.css('visibility', 'visible');
    	//move in and fade in
		var to_y = this.loadedRatioIndicator_defY;
		this.loadedRatioIndicator.css({transform: 'translateY('+ to_y + 'px)',
						  MozTransform: 'translateY('+ to_y + 'px)',
						  WebkitTransform: 'translateY('+ to_y + 'px)',
						  OTransform: 'translateY('+ to_y + 'px)',
						  msTransform: 'translateY('+ to_y + 'px)'});
		this.loadedRatioIndicator.css('opacity', '1');
    },
    // ----------------- hideInfo
    hideInfo: function() {
	    var self = this;
	    clearTimeout(this.showInfoTimeout);
	    var info_1 = this.infoContainer.children().eq(this.show_info_incr-1);
	    var info_2 = this.infoContainer.children().eq(this.show_info_incr);
	    var info_1_to_y = this.info_default_y_arr[1] - this.INFO_ANIM_OFFSET;
	    var info_2_to_y = this.info_default_y_arr[2] - this.INFO_ANIM_OFFSET;
	    info_1.css('opacity', '0');
	    info_1.css( {transform: 'translate3d(0,' + info_1_to_y  + 'px, 0)',
				  MozTransform: 'translate3d(0,' + info_1_to_y  + 'px, 0)',
				  WebkitTransform: 'translate3d(0,' + info_1_to_y + 'px, 0)',
				  OTransform: 'translate3d(0,' + info_1_to_y + 'px, 0)',
				  msTransform: 'translate3d(0,' + info_1_to_y + 'px, 0)'} );
		setTimeout(function(){
			  info_2.css('opacity', '0');
			  info_2.css( {transform: 'translate3d(0,' + info_2_to_y  + 'px, 0)',
				  MozTransform: 'translate3d(0,' + info_2_to_y  + 'px, 0)',
				  WebkitTransform: 'translate3d(0,' + info_2_to_y + 'px, 0)',
				  OTransform: 'translate3d(0,' + info_2_to_y + 'px, 0)',
				  msTransform: 'translate3d(0,' + info_2_to_y + 'px, 0)'} );
		}, 400);
    },
    // ----------------- showInfo
    showInfo: function() {
	    //show the info lines
	    this.loaderInfoContainer.css('visibility', 'visible');
	    //show each line
	    this.show_info_incr = 0;	    
	    this.showInfoLine();
    },
     // ----------------- showInfoLine
    showInfoLine: function() {
    	var self = this;
	    //fade in
	    //and move up the 
	    //info line
	    var to_y; 
	    var delay = 1500;
	    var info_above, info_2_above;
	    var info = this.infoContainer.children().eq(this.show_info_incr);
	    if(this.show_info_incr > 0 ) delay = 1500;
	    //on show of 4 + lines move 2nd to top line out 
	    if(this.show_info_incr < 2){
		    if(this.show_info_incr == 0) to_y = this.info_default_y_arr[this.show_info_incr];
            else to_y = this.next_to_y;
            this.next_to_y = to_y + info.outerHeight();
		    info.css('opacity', '1');
			info.css( {transform: 'translate3d(0,' + to_y  + 'px, 0)',
					  MozTransform: 'translate3d(0,' + to_y  + 'px, 0)',
					  WebkitTransform: 'translate3d(0,' + to_y + 'px, 0)',
					  OTransform: 'translate3d(0,' + to_y + 'px, 0)',
					  msTransform: 'translate3d(0,' + to_y + 'px, 0)'} );
	    }
	    else{
		    //get the 2 info above and 2 above
	    	info_above = this.infoContainer.children().eq(this.show_info_incr - 1);
            //to_y += info.outerHeight();
            //makes sure there is no overlap
		    to_y = this.info_default_y_arr[1];
			info_above.css( {transform: 'translate3d(0,' + to_y + 'px, 0)',
					  MozTransform: 'translate3d(0,' + to_y + 'px, 0)',
					  WebkitTransform: 'translate3d(0,' + to_y + 'px, 0)',
					  OTransform: 'translate3d(0,' + to_y + 'px, 0)',
					  msTransform: 'translate3d(0,' + to_y + 'px, 0)'} );
            
            info.css('opacity', '1');
		    //to_y = this.info_default_y_arr[2];
            to_y += info_above.outerHeight(); 
		    info.css('opacity', '1');
			info.css( {transform: 'translate3d(0,' + to_y + 'px, 0)',
					  MozTransform: 'translate3d(0,' + to_y + 'px, 0)',
					  WebkitTransform: 'translate3d(0,' + to_y + 'px, 0)',
					  OTransform: 'translate3d(0,' + to_y + 'px, 0)',
					  msTransform: 'translate3d(0,' + to_y + 'px, 0)'} );
            
		    info_2_above = this.infoContainer.children().eq(this.show_info_incr - 2);
		    to_y = this.info_default_y_arr[0] + 12;
		    if(this.show_info_incr == 2)  to_y = this.info_default_y_arr[0]-this.INFO_ANIM_OFFSET;
		    info_2_above.css('opacity', '0');
			info_2_above.css( {transform: 'translate3d(0,' + to_y + 'px, 0)',
					  MozTransform: 'translate3d(0,' + to_y + 'px, 0)',
					  WebkitTransform: 'translate3d(0,' + to_y + 'px, 0)',
					  OTransform: 'translate3d(0,' + to_y + 'px, 0)',
					  msTransform: 'translate3d(0,' + to_y + 'px, 0)'} );
            
           
		}
		if(this.show_info_incr < this.info.length){
				this.showInfoTimeout = setTimeout(function(){
					self.show_info_incr++;
					self.showInfoLine();
				}, delay);
		}
	    //setTimeout to do the next line
	},
	// ----------------- hideBg
    hideBg: function() {
	    var self = this;
    	this.view_state = this.STATE_TOP;
    	this.goldGrad_el.removeClass(this.GOLD_GRAD_TRANS_CLASS_OUT);
	    this.goldGrad_el.addClass(this.GOLD_GRAD_TRANS_CLASS);
	    var to_y = $(window).height() - this.goldGrad_el.outerHeight();
        this.goldGrad_el.on('transitionend webkitTransitionEnd oTransitionEnd', function(){
			self.goldGrad_el.off('transitionend webkitTransitionEnd oTransitionEnd');
			$(self.el).trigger(self.IS_COVERING);
		});
	    this.goldGrad_el.css({transform: 'translateY(' + to_y + 'px)',
							  MozTransform: 'translateY(' + to_y + 'px)',
							  WebkitTransform: 'translateY(' + to_y + 'px)',
							  OTransform: 'translateY(' + to_y + 'px)',
							  msTransform: 'translateY(' + to_y + 'px)'});  
     
							  
	  setTimeout(function(){
		  self.rainbowContainer_el.css('visibilty', 'hidden');
	      self.rainbowContainer_el.remove();
	      self.hideReadyMsg();
	  }, 900);
    },
    // ----------------- totalHideBg
    totalHideBg: function() {
	    //fade out here instead
	    var self = this;
	    $(this.el).addClass(this.FADE_SLOW_CLASS);
	    $(this.el).css('opacity', '0');
	    $(this.el).trigger(this.TOTAL_HIDE_BG);
	    $(this.el).on('transitionend webkitTransitionEnd oTransitionEnd', function(){
			$(this).off('transitionend webkitTransitionEnd oTransitionEnd');
			self.totalHide();
		});
    },
    // ----------------- totalHide
    totalHide: function() {
	    $(this.el).css('display', 'none');
	    this.dispose();
    },
    // ----------------- animateBg
    animateBg: function() {
	    var self = this;
	    //move the gold gradient down
	    //to the center of the screen
	    //(as the method pain text moves up)
	    var to_y = $(window).height() - this.goldGrad_el_top.outerHeight();
	    this.goldGrad_el.css({transform: 'translateY('+ to_y + 'px)',
						  MozTransform: 'translateY('+ to_y + 'px)',
						  WebkitTransform: 'translateY('+ to_y + 'px)',
						  OTransform: 'translateY('+ to_y + 'px)',
						  msTransform: 'translateY('+ to_y + 'px)'});
		this.view_state = this.STATE_STAGE;
		//on transition end
		this.goldGrad_el.on('transitionend webkitTransitionEnd oTransitionEnd', function(){
			self.goldGrad_el.off('transitionend webkitTransitionEnd oTransitionEnd');
			self.basic_anim_is_complete = true;
			if(self.is_stopped || self.override_is_stoppped) self.completeStopLoader();
		});
    },
    // ----------------- prepareForAnimation
    prepareForAnimation: function() {
	    //set goldGrad_el_top height to about 2/3ish of window height
	    var to_height = parseInt($(window).height()*(0.7));
	    this.goldGrad_el_top.css('height', to_height + 'px');
	    to_height = $(window).height();
	    //set goldGrad_el_bottom height to window height
	    this.goldGrad_el_bottom.css('height', to_height + 'px');
	    //move the gold gradient to the top cente
	    //of the screen
	    var to_y = $(window).height();
	    var to_x = 0;
	    this.goldGrad_el.css({transform: 'translate3d('+ to_x + 'px,' + to_y + 'px, 0)',
						  MozTransform: 'translate3d('+ to_x + 'px,' + to_y + 'px, 0)',
						  WebkitTransform: 'translate3d('+ to_x + 'px,' + to_y + 'px, 0)',
						  OTransform: 'translate3d('+ to_x + 'px,' + to_y + 'px, 0)',
						  msTransform: 'translate3d('+ to_x + 'px,' + to_y + 'px, 0)'});
		this.goldGrad_el.addClass(this.GOLD_GRAD_TRANS_CLASS_OUT);
		
		this.readyMsgCnt_el.css('visibility', 'visible');
    	//move in and fade in
		to_y = -this.INFO_ANIM_OFFSET;
		this.readyMsg_el.css({transform: 'translateY('+ to_y + 'px)',
						  MozTransform: 'translateY('+ to_y + 'px)',
						  WebkitTransform: 'translateY('+ to_y + 'px)',
						  OTransform: 'translateY('+ to_y + 'px)',
						  msTransform: 'translateY('+ to_y + 'px)'});
		//move the indicator down initailly 
	    //so that it can move in with the 
	    //info lines of the info container
	    to_y = this.loadedRatioIndicator_defY + this.INFO_ANIM_OFFSET;
	    this.loadedRatioIndicator.css({transform: 'translateY('+ to_y + 'px)',
						  MozTransform: 'translateY('+ to_y + 'px)',
						  WebkitTransform: 'translateY('+ to_y + 'px)',
						  OTransform: 'translateY('+ to_y + 'px)',
						  msTransform: 'translateY('+ to_y + 'px)'});
    },
    // ----------------- generateRainbow
    generateRainbows: function() {
	    var self = this;
	    var rainbowView, view;
	    this.num_rainbows_generated++;
	    var contain = false;
	    var rand_delay = 160 + Math.random()*600;
	    //if one of the first two lines
	    //contain them more so that 
	    //they start  near the cneter of the screen
	    if(this.num_rainbows_generated < 2){
		    contain = true; 
	    } 
	    if(this.rainbow_cache.length > 0){
		    rainbowView = this.rainbow_cache.pop();
		    if(contain) rainbowView.contain = true;
		    setTimeout(function(){
			   rainbowView.beginAnimation();
		    }, 100);
	    }  
	    else{
		   rainbowView = new main.views.RainbowView(); 
		   if(contain) rainbowView.contain = true;
		   this.rainbowContainer_el.append($(rainbowView.el));
	    } 
	    $(rainbowView.el).on(rainbowView.KILL, function(event, params){
		    $(event.currentTarget).off();
	    	view = params;
		    self.rainbow_cache.push(view);
	    });
	    //set timer with a random delay
	    //to generate the next rainbow
	    if(!this.is_stopped || this.override_is_stoppped){
		    setTimeout(function(){self.generateRainbows();}, rand_delay);
	    }
	}, 
	// ----------------- beforeDispose
    beforeDispose: function() {
    	$(this.el).off();
	    this.goldGrad_el.off();
    }
});

// _________________________________________________________________________ RainbowView
main.views.RainbowView = Backbone.View.extend({
	KILL: "kill",
	RAINBOW_SOLID_W_RANGE: {min: 0, max: 1400},
	EASE_OUT_TRANS_CLASS: "rainbow-ease-out-transition",
	EASE_IN_TRANS_CLASS: "rainbow-ease-in-transition",
	slope: 0,
	intercept: 0,
	end_y: 0,
	end_x:0,
	rot:0,
	contain: false,
	// ----------------- initialize
    initialize: function() {
        console.log("RainbowView ---- initialize");
        this.rainbow_el = $('<div class="rainbow"></div>');
	    this.el = this.rainbow_el; 
	    this.el.css('visibility', 'hidden');
        this.render();
    },
    // ----------------- render
    render: function(eventName) {
        console.log("RainbowView ---- render");
        var self = this;
        //create the unicorn & his rainbow
        setTimeout(function(){
	        self.createRainbow();
        }, 100);
        //setTimer to kill
        return this;
	},
	// ----------------- createRainbow
    createRainbow: function() {
	    var self = this;
	    var rand_solid_w = this.RAINBOW_SOLID_W_RANGE.min + parseInt(Math.random()*(this.RAINBOW_SOLID_W_RANGE.max - this.RAINBOW_SOLID_W_RANGE.min));
	    //load the rainbow parts
	    //then add them as the 
	    //bg image for each
	    this.rainbow_all_el = $('<div class="rainbow-all"></div>');
	    this.rainbow_end_el = $('<div class="rainbow-end"></div>');
	    this.rainbow_solid_el = $('<div class="rainbow-solid"></div>');
	    this.unicorn_el = $('<div class="unicorn"></div>');
	    
	    this.rainbow_solid_el.css('width', rand_solid_w + 'px');
	    
	    this.el.append(this.rainbow_all_el); 
	    this.rainbow_all_el.append(this.rainbow_end_el); 
	    this.rainbow_all_el.append(this.rainbow_solid_el); 
	    this.el.append(this.unicorn_el); 
	    var to_w = this.rainbow_all_el.outerWidth() + this.unicorn_el.width()*3;
	    $(this.el).css('width', to_w + 'px');
	    this.el.css('transform-origin', 'center right');
	    this.beginAnimation();
    },
    // ----------------- prepareForAnimate
    beginAnimation: function() {
	    var self = this;
	    //roatate
	    this.deg_rot_1 = -89 + parseInt(Math.random()*54);
	    this.deg_rot_2 = 35 + parseInt(Math.random()*54);
	    
	    if(this.contain) {
		    this.deg_rot_1 = -80 + parseInt(Math.random()*30);
		    this.deg_rot_2 = 50 + parseInt(Math.random()*30);
	    }
	    
	    var rander = Math.round(Math.random());
	    if(rander == 0) this.deg_rot = this.deg_rot_1;
	    else this.deg_rot = this.deg_rot_2;

	    this.rot  = this.deg_rot  * (Math.PI/180);
		//position x as random 
		var rainbow_cnt_el = this.el.parent();
		//if  contain
		//limit the start x to the center
		if(this.contain) this.start_x = parseInt( $(window).width()*(1/3) +  Math.random()*($(window).width()*(2/3)) ) - this.el.outerWidth();
		else this.start_x = parseInt( -$(window).width()*(1/4) + Math.random()*($(window).width()*(1.5)) ) - this.el.outerWidth();
		//position y according to rand_rotate
		this.slope = Math.tan(this.rot);
		var start_y;
		//--- upward
		if(this.deg_rot >= -90 && this.deg_rot <= 0 ){
			start_y = rainbow_cnt_el.outerHeight() + this.unicorn_el.outerHeight(); 
			this.end_y = -(this.unicorn_el.outerHeight()) - this.el.outerWidth();
		} 
		// downward 
		else{
			start_y = (-rainbow_cnt_el.outerHeight()) - this.unicorn_el.outerHeight();
			this.end_y = rainbow_cnt_el.outerHeight() + this.unicorn_el.outerHeight() + this.el.outerWidth();
		}
		this.intercept = start_y - (this.slope*this.start_x);
		//determin end x 
	    //by this.slope
	    this.end_x = (this.end_y - this.intercept)/this.slope;
		this.el.css({transform: 'translate3d('+ this.start_x + 'px,' + start_y + 'px, 0) rotateZ(' + this.deg_rot +'deg)',
				  MozTransform: 'translate3d('+ this.start_x + 'px,' + start_y + 'px, 0) rotateZ(' + this.deg_rot +'deg)',
				  WebkitTransform: 'translate3d('+ this.start_x + 'px,' + start_y + 'px, 0) rotateZ(' + this.deg_rot +'deg)',
				  OTransform: 'translate3d('+ this.start_x + 'px,' + start_y + 'px, 0) rotateZ(' + this.deg_rot +'deg)',
				  msTransform: 'translate3d('+ this.start_x + 'px,' + start_y + 'px, 0) rotateZ(' + this.deg_rot +'deg)'});
	    setTimeout(function(){
			if(self.deg_rot >= -90 && self.deg_rot <= 0) self.el.addClass(self.EASE_OUT_TRANS_CLASS);
			// --- downward 
			else self.el.addClass(self.EASE_IN_TRANS_CLASS);
	        self.animate();
		}, 100);
    },
    // ----------------- animate
    animate: function() {
	    var self = this;
    	this.el.css('visibility', 'visible');
	    this.el.css({ transform: 'translate3d('+ this.end_x + 'px,' + this.end_y + 'px, 0) rotateZ(' + this.deg_rot +'deg)',
					  MozTransform: 'translate3d('+ this.end_x + 'px,' + this.end_y + 'px, 0) rotateZ(' + this.deg_rot +'deg)',
					  WebkitTransform: 'translate3d('+ this.end_x + 'px,' + this.end_y + 'px, 0) rotateZ(' + this.deg_rot +'deg)',
					  OTransform: 'translate3d('+ this.end_x + 'px,' + this.end_y + 'px, 0) rotateZ(' + this.deg_rot +'deg)',
					  msTransform: 'translate3d('+ this.end_x + 'px,' + this.end_y + 'px, 0) rotateZ(' + this.deg_rot +'deg)'});
		//listen gfo rtransition end
		//or set a timeout
		setTimeout(function(){
			self.kill();
		}, 12000); 
    },
    // ----------------- kill
    kill: function() {
    	this.reset();
	    $(this.el).trigger(this.KILL, [this]);
	    $(this.el).off();
	    $(this.el).unbind();
    },
    // ----------------- reset
    reset: function() {
	    $(this.el).css('visibility', 'hidden');
	    $(this.el).removeClass(this.EASE_IN_TRANS_CLASS);
	    $(this.el).removeClass(this.EASE_OUT_TRANS_CLASS);
    }	    
});
// _________________________________________________________________________ SceneContainerView
main.views.SceneContainerView = Backbone.View.extend({
	PEPARE_OFFSET: 1000,
	ALL_SCENE_ASSETS_LOADED: "all_scene_assets_loaded",
	ACTIVE_CLASS: "active",
	EXIT_SCENES: "exit_scenes",
	INIT_SCENE_ASSETS: "init_scene_assets",
	SCENE_IDLE: "scene_idle",
	SCENE_ASSET_LOADED: "scene_asset_loaded",
	SCENE_DEACTIVATE: "scene_deactivate",
	SCENE_ACTIVATE: "scene_activate",
	SCENE_DEACTIVATE: "scene_deactivate",
	ALLOW_SWIPE_CLASS: 'allowSwipe',
	SHOW_AUDIO_LOADER: "show_audio_loader",
	HIDE_AUDIO_LOADER: "hide_audio_loader",
	scene_views: [],
	cur_scene_index: 0,
	curSceneView: {},
	num_scenes_loaded: 0,
	num_scenes: 0,
	story_is_stopped: false,
    // ----------------- initialize
    initialize: function() {
        console.log("SceneContainerView ---- initialize");
        $(this.el).css('visibility', 'hidden');
    },
    // ----------------- render
    render: function(eventName) {
        console.log("SceneContainerView ---- render");
	    var self = this;
	    //ceraet audio collection
	    //to handle sound data
	    this.audioCollection = new main.models.AudioCollection();
	    this.story_is_stopped = false;
	    //scene-container
	    //set model to the sceneCollection
	    this.model = new main.models.SceneCollection();
	    this.model.setAudio(this.audioCollection);
	    this.createScenes();
	    $('body').addClass(this.ALLOW_SWIPE_CLASS);
	    setTimeout(function(){
	        //self.lastScrollTop = $(window).scrollTop();
	        self.initScenes();
	        //setTimeout(function(){
		        //self.checkScenes();
	        //}, 400);
        }, 200);

        return this;
	},
	// ----------------- posize
    posize: function() {
	   $(this.el).css('height', $(window).height() + 'px');
	   for(var i=0;i<this.scene_views.length;i++){
	   	   scene = this.scene_views[i];
	   	   scene.posize();
	   }
    },
    // ----------------- createScenes
    createScenes: function() {
	   var self = this;
	   var model, scene;
	   this.num_scenes_loaded = 0;
	   this.scene_views = [];
	   //create and render each scene view
	   //scene-castle
	   //find the right scene model
	   this.sceneSwipeInstructionView = new main.views.SceneSwipeInstructionView();
	   this.scene_views.push(this.sceneSwipeInstructionView);
	   this.sceneCastleView = new main.views.SceneCastleView();
	   this.scene_views.push(this.sceneCastleView);
	   this.sceneXrayView = new main.views.SceneXrayView();
	   this.scene_views.push(this.sceneXrayView);
	   this.sceneLabView = new main.views.SceneLabView();
	   this.scene_views.push(this.sceneLabView);
	   this.sceneCreationView = new main.views.SceneCreationView();
	   this.scene_views.push(this.sceneCreationView);
	   this.sceneGerbilView = new main.views.SceneGerbilView();
	   this.scene_views.push(this.sceneGerbilView);
	   this.sceneBoyView = new main.views.SceneBoyView();
	   this.scene_views.push(this.sceneBoyView);
	   this.sceneFinalView = new main.views.SceneFinalView();
	   this.scene_views.push(this.sceneFinalView);
	   //set the castle scene as the fisrt scene
	   
   	   for(var i=0;i<this.scene_views.length;i++){
   	   	   scene = this.scene_views[i];
   	   	   console.log(" befroe render --------- scene.name ------- " +  scene.name);
   	   	   model = this.model.find(function(scene_model){ return ( scene_model.get("name") ==  scene.name ) });
	   	   scene.model = model;
	   	   scene.render();
	   	   $(scene.el).on(scene.NEXT, function(event, params){ self.showNextScene() });
	   	   //$(scene.el).on(scene.DEACTIVATE, function(event){ $(self.el).trigger(self.SCENE_DEACTIVATE); });
	       $(scene.el).on(scene.INIT_ASSETS, function(event, params){  $(self.el).trigger(self.INIT_SCENE_ASSETS, [params]); });
	       //$(scene.el).on(scene.IDLE, function(event){ $(self.el).trigger(self.SCENE_IDLE); });
	       $(scene.el).on(scene.ASSET_LOADED, function(event){ $(self.el).trigger(self.SCENE_ASSET_LOADED); });
	   	   $(scene.el).on(scene.ALL_ASSETS_LOADED, function(event){ self.handleLoadSceneComplete(); });
	   	   $(scene.el).on(scene.SHOW_AUDIO_LOADER, function(event){ $(self.el).trigger(self.SHOW_AUDIO_LOADER); });
	   	   $(scene.el).on(scene.HIDE_AUDIO_LOADER, function(event){ $(self.el).trigger(self.HIDE_AUDIO_LOADER); });
   	   }
	  //$(this.sceneFinalView.el).on(this.sceneFinalView.EXIT_SWIPE, function(){ $(self.el).trigger(self.EXIT_SCENES); });
	   this.num_scenes = this.scene_views.length;
	   setTimeout(function(){
		   self.beginLoadingAssets();
	   }, 100);
	   this.hideScenes();
    },
    // ----------------- showNextScene
    showNextScene: function() {
	    console.log("showNextScene");
	    //activate the next scene
	    //var cur_scene_view = scene_views[this.cur_scene_index];
	    //cur_scene_view.deactivate();
	    this.cur_scene_index++;
	    if(this.cur_scene_index >= this.scene_views.length) {
		    //exit BAU
		    $(this.el).trigger(this.EXIT_SCENES);
	    }
	    else{
		    //and deactivate the current scene
		    var next_scene_view = this.scene_views[this.cur_scene_index];
		    next_scene_view.activate();
	    }
    },
    // ----------------- initScenes
    initScenes: function() {
	    var self = this;
	    var scene_obj, scene_model, scene;
		//save each pane id
	    //and its absolute position on the page
	    for(var i=0;i<this.scene_views.length;i++){
		    scene = this.scene_views[i];
		    //grab the scene model with the name that matches the
		    //scene's name
		    scene_model = this.model.find( function(model){ return ( model.get("name") ==  scene.name ) } );
		    //update it with the scene view
		    if(scene_model) scene_model.set({view: scene});
	    }
    },
     // ----------------- removeExplanationScreen
    removeExplanationScreen: function() {
	    this.sceneBoyView.removeExplanationScreen();
    },
    // ----------------- showAnswerScreen
    showAnswerScreen: function() {
	    this.sceneBoyView.showAnswerScreen();
    },
   	// ----------------- stopSounds
	/*stopSounds: function(obj){
		var scene;
		for(var i=0;i<this.scene_views.length;i++){
		   scene = this.scene_views[i];
		   scene.stopSounds();
		}
	},*/
   	// ----------------- addScenes
    setScenes: function() {
	},
    // ----------------- addScenes
    addScenes: function() {
	   var scene;
   	   for(var i=0;i<this.scene_views.length;i++){
   	   	   scene = this.scene_views[i];
	   	   $(this.el).append($(scene.el));
	   	   scene.onAppend();
   	   }
    },
    // ----------------- beginLoadingAssets
    beginLoadingAssets: function() {
    	console.log("beginLoadingAssets");
	    this.loadSceneAssets();
    },
    // ----------------- loadSceneAssets
    loadSceneAssets: function() {
	    var cur_scene = this.scene_views[this.num_scenes_loaded];
	    cur_scene.loadAssets();
    },
    // ----------------- handleLoadSceneComplete
    handleLoadSceneComplete: function() {
	    this.num_scenes_loaded++;
	    if( this.num_scenes_loaded < this.num_scenes ) this.loadSceneAssets();
	    else $(this.el).trigger(this.ALL_SCENE_ASSETS_LOADED);
    },
     // ----------------- hideScenes
    hideScenes: function() {
    	$(this.el).css('visibility', 'hidden');
	},
    // ----------------- show
    show: function() {
	    console.log("SceneContainerView ------ show");
    	$(this.el).css('visibility', 'visible');
    	var scene = this.scene_views[this.cur_scene_index];
    	if(scene.show) scene.show();
	},
	// ----------------- beforeDispose
	beforeDispose: function(){
	   var scene;
   	   for(var i=0;i<this.scene_views.length;i++){
   	   	   scene = this.scene_views[i];
	   	   $(scene.el).off();
	   	   scene.dispose();
   	   }
    }
});
/*! jQuery plugin for Hammer.JS - v1.1.0dev - 2014-04-11
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2014 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */

!function(a,b){"use strict";function c(){e.READY||(t.determineEventTypes(),s.each(e.gestures,function(a){v.register(a)}),t.onTouch(e.DOCUMENT,o,v.detect),t.onTouch(e.DOCUMENT,p,v.detect),e.READY=!0)}function d(a,b){Date.now||(Date.now=function(){return(new Date).getTime()}),a.utils.each(["on","off"],function(c){a.utils[c]=function(a,d,e){b(a)[c](d,function(a){var c=b.extend({},a.originalEvent,a);e.call(this,c)})}}),a.Instance.prototype.trigger=function(a,c){var d=b(this.element);return d.has(c.target).length&&(d=b(c.target)),d.trigger({type:a,gesture:c})},b.fn.hammer=function(c){return this.each(function(){var d=b(this),e=d.data("hammer");e?e&&c&&a.utils.extend(e.options,c):d.data("hammer",new a(this,c||{}))})}}var e=function w(a,b){return new w.Instance(a,b||{})};e.VERSION="1.1.0dev",e.defaults={behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},e.DOCUMENT=a.document,e.HAS_POINTEREVENTS=a.navigator.pointerEnabled||a.navigator.msPointerEnabled,e.HAS_TOUCHEVENTS="ontouchstart"in a,e.CALCULATE_INTERVAL=50;var f={},g=e.DIRECTION_DOWN="down",h=e.DIRECTION_LEFT="left",i=e.DIRECTION_UP="up",j=e.DIRECTION_RIGHT="right",k=e.POINTER_MOUSE="mouse",l=e.POINTER_TOUCH="touch",m=e.POINTER_PEN="pen",n=e.EVENT_START="start",o=e.EVENT_MOVE="move",p=e.EVENT_END="end",q=e.EVENT_RELEASE="release",r=e.EVENT_TOUCH="touch";e.READY=!1,e.plugins=e.plugins||{},e.gestures=e.gestures||{};var s=e.utils={extend:function(a,c,d){for(var e in c)a[e]!==b&&d||(a[e]=c[e]);return a},on:function(a,b,c){a.addEventListener(b,c,!1)},off:function(a,b,c){a.removeEventListener(b,c,!1)},each:function(a,c,d){var e,f;if("forEach"in a)a.forEach(c,d);else if(a.length!==b){for(e=-1;f=a[++e];)if(c.call(d,f,e,a)===!1)return}else for(e in a)if(a.hasOwnProperty(e)&&c.call(d,a[e],e,a)===!1)return},inStr:function(a,b){return a.indexOf(b)>-1},inArray:function(a,b){if(a.indexOf){var c=a.indexOf(b);return-1===c?!1:c}for(var d=0,e=a.length;e>d;d++)if(a[d]===b)return d;return!1},toArray:function(a){return Array.prototype.slice.call(a,0)},hasParent:function(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1},getCenter:function(a){var b=[],c=[],d=[],e=[],f=Math.min,g=Math.max;return 1===a.length?{pageX:a[0].pageX,pageY:a[0].pageY,clientX:a[0].clientX,clientY:a[0].clientY}:(s.each(a,function(a){b.push(a.pageX),c.push(a.pageY),d.push(a.clientX),e.push(a.clientY)}),{pageX:(f.apply(Math,b)+g.apply(Math,b))/2,pageY:(f.apply(Math,c)+g.apply(Math,c))/2,clientX:(f.apply(Math,d)+g.apply(Math,d))/2,clientY:(f.apply(Math,e)+g.apply(Math,e))/2})},getVelocity:function(a,b,c){return{x:Math.abs(b/a)||0,y:Math.abs(c/a)||0}},getAngle:function(a,b){var c=b.clientX-a.clientX,d=b.clientY-a.clientY;return 180*Math.atan2(d,c)/Math.PI},getDirection:function(a,b){var c=Math.abs(a.clientX-b.clientX),d=Math.abs(a.clientY-b.clientY);return c>=d?a.clientX-b.clientX>0?h:j:a.clientY-b.clientY>0?i:g},getDistance:function(a,b){var c=b.clientX-a.clientX,d=b.clientY-a.clientY;return Math.sqrt(c*c+d*d)},getScale:function(a,b){return a.length>=2&&b.length>=2?this.getDistance(b[0],b[1])/this.getDistance(a[0],a[1]):1},getRotation:function(a,b){return a.length>=2&&b.length>=2?this.getAngle(b[1],b[0])-this.getAngle(a[1],a[0]):0},isVertical:function(a){return a==i||a==g},toggleBehavior:function(a,b,c){if(b&&a&&a.style){s.each(["webkit","moz","Moz","ms","o",""],function(d){s.each(b,function(b,e){d&&(e=d+e.substring(0,1).toUpperCase()+e.substring(1)),e in a.style&&(a.style[e]=!c&&b)})});var d=function(){return!1};"none"==b.userSelect&&(a.onselectstart=!c&&d),"none"==b.userDrag&&(a.ondragstart=!c&&d)}}};e.Instance=function(a,b){var d=this;c(),this.element=a,this.enabled=!0,this.options=s.extend(s.extend({},e.defaults),b||{}),this.options.behavior&&s.toggleBehavior(this.element,this.options.behavior,!1),this.eventStartHandler=t.onTouch(a,n,function(a){d.enabled&&a.eventType==n?v.startDetect(d,a):a.eventType==r&&v.detect(a)}),this.eventHandlers=[]},e.Instance.prototype={on:function(a,b){var c=this;return t.on(c.element,a,b,function(a){c.eventHandlers.push({gesture:a,handler:b})}),c},off:function(a,b){var c=this;return t.off(c.element,a,b,function(a){var d=s.inArray({gesture:a,handler:b});d!==!1&&c.eventHandlers.splice(d,1)}),c},trigger:function(a,b){b||(b={});var c=e.DOCUMENT.createEvent("Event");c.initEvent(a,!0,!0),c.gesture=b;var d=this.element;return s.hasParent(b.target,d)&&(d=b.target),d.dispatchEvent(c),this},enable:function(a){return this.enabled=a,this},dispose:function(){var a,b;for(this.options.behavior&&s.toggleBehavior(this.element,this.options.behavior,!0),a=-1;b=this.eventHandlers[++a];)s.off(this.element,b.gesture,b.handler);return this.eventHandlers=[],t.off(this.element,f[n],this.eventStartHandler),null}};var t=e.event={prevent_mouseevents:!1,started:!1,should_detect:!1,on:function(a,b,c,d){var e=b.split(" ");s.each(e,function(b){s.on(a,b,c),d&&d(b)})},off:function(a,b,c,d){var e=b.split(" ");s.each(e,function(b){s.off(a,b,c),d&&d(b)})},onTouch:function(a,b,c){var d=this,g=function(f){var g,h=f.type.toLowerCase(),i=e.HAS_POINTEREVENTS,j=s.inStr(h,"mouse");j&&d.prevent_mouseevents||(j&&1===f.which?d.should_detect=!0:b!=n||j||(d.prevent_mouseevents=!0,d.should_detect=!0),i&&b!=p&&u.updatePointer(b,f),d.should_detect&&(g=d.doDetect.call(d,f,b,a,c)),g==p?(d.prevent_mouseevents=!1,d.should_detect=!1,u.reset()):i&&b==p&&u.updatePointer(b,f))};return this.on(a,f[b],g),g},doDetect:function(a,b,c,d){var e,f=this.getTouchList(a,b),g=f.length,h=b,i=g;b==n?e=r:b==p&&(e=q,i=f.length-(a.changedTouches?a.changedTouches.length:1)),i>0&&this.started&&(h=o),this.started=!0;var j=this.collectEventData(c,h,f,a);return b!=p&&d.call(v,j),e&&(j.changedLength=i,j.eventType=e,d.call(v,j),j.eventType=h,delete j.changedLength),h==p&&(d.call(v,j),this.started=!1),h},determineEventTypes:function(){var a;return a=e.HAS_POINTEREVENTS?["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],f[n]=a[0],f[o]=a[1],f[p]=a[2],f},getTouchList:function(a,b){if(e.HAS_POINTEREVENTS)return u.getTouchList();if(a.touches){if(b==o)return a.touches;var c=[],d=[].concat(s.toArray(a.touches),s.toArray(a.changedTouches)),f=[];return s.each(d,function(a){s.inArray(c,a.identifier)===!1&&f.push(a),c.push(a.identifier)}),f}return a.identifier=1,[a]},collectEventData:function(a,b,c,d){var e=l;return(s.inStr(d.type,"mouse")||u.matchType(k,d))&&(e=k),{center:s.getCenter(c),timeStamp:Date.now(),target:d.target,touches:c,eventType:b,pointerType:e,srcEvent:d,preventDefault:function(){var a=this.srcEvent;a.preventManipulation&&a.preventManipulation(),a.preventDefault&&a.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return v.stopDetect()}}}},u=e.PointerEvent={pointers:{},getTouchList:function(){var a=[];return s.each(this.pointers,function(b){a.push(b)}),a},updatePointer:function(a,b){a==p?delete this.pointers[b.pointerId]:(b.identifier=b.pointerId,this.pointers[b.pointerId]=b)},matchType:function(a,b){if(!b.pointerType)return!1;var c=b.pointerType,d={};return d[k]=c===(b.MSPOINTER_TYPE_MOUSE||k),d[l]=c===(b.MSPOINTER_TYPE_TOUCH||l),d[m]=c===(b.MSPOINTER_TYPE_PEN||m),d[a]},reset:function(){this.pointers={}}},v=e.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(a,b){this.current||(this.stopped=!1,this.current={inst:a,startEvent:s.extend({},b),lastEvent:!1,lastCalcEvent:!1,futureCalcEvent:!1,lastCalcData:{},name:""},this.detect(b))},detect:function(a){if(this.current&&!this.stopped){a=this.extendEventData(a);var b=this.current.inst,c=b.options;return s.each(this.gestures,function(d){return this.stopped||c[d.name]===!1||b.enabled===!1||d.handler.call(d,a,b)!==!1?void 0:(this.stopDetect(),!1)},this),this.current&&(this.current.lastEvent=a),a.eventType==p&&this.stopDetect(),a}},stopDetect:function(){this.previous=s.extend({},this.current),this.current=null,this.stopped=!0},getCalculatedData:function(a,b,c,d,f){var g=this.current,h=!1,i=g.lastCalcEvent,j=g.lastCalcData;i&&a.timeStamp-i.timeStamp>e.CALCULATE_INTERVAL&&(b=i.center,c=a.timeStamp-i.timeStamp,d=a.center.clientX-i.center.clientX,f=a.center.clientY-i.center.clientY,h=!0),(a.eventType==r||a.eventType==q)&&(g.futureCalcEvent=a),(!g.lastCalcEvent||h)&&(j.velocity=s.getVelocity(c,d,f),j.angle=s.getAngle(b,a.center),j.direction=s.getDirection(b,a.center),g.lastCalcEvent=g.futureCalcEvent||a,g.futureCalcEvent=a),a.velocityX=j.velocity.x,a.velocityY=j.velocity.y,a.angle=j.angle,a.direction=j.direction},extendEventData:function(a){var b=this.current,c=b.startEvent,d=b.lastEvent||c;(a.eventType==r||a.eventType==q)&&(c.touches=[],s.each(a.touches,function(a){c.touches.push(s.extend({},a))}));var e=a.timeStamp-c.timeStamp,f=a.center.clientX-c.center.clientX,g=a.center.clientY-c.center.clientY;return this.getCalculatedData(a,d.center,e,f,g),s.extend(a,{startEvent:c,deltaTime:e,deltaX:f,deltaY:g,distance:s.getDistance(c.center,a.center),scale:s.getScale(c.touches,a.touches),rotation:s.getRotation(c.touches,a.touches)}),a},register:function(a){var c=a.defaults||{};return c[a.name]===b&&(c[a.name]=!0),s.extend(e.defaults,c,!0),a.index=a.index||1e3,this.gestures.push(a),this.gestures.sort(function(a,b){return a.index<b.index?-1:a.index>b.index?1:0}),this.gestures}};!function(a){function b(b,d){var e=v.current;if(!(d.options.drag_max_touches>0&&b.touches.length>d.options.drag_max_touches))switch(b.eventType){case n:c=!1;break;case o:if(b.distance<d.options.drag_min_distance&&e.name!=a)return;var f=e.startEvent.center;if(e.name!=a&&(e.name=a,d.options.correct_for_drag_min_distance&&b.distance>0)){var k=Math.abs(d.options.drag_min_distance/b.distance);f.pageX+=b.deltaX*k,f.pageY+=b.deltaY*k,f.clientX+=b.deltaX*k,f.clientY+=b.deltaY*k,b=v.extendEventData(b)}(e.lastEvent.drag_locked_to_axis||d.options.drag_lock_to_axis&&d.options.drag_lock_min_distance<=b.distance)&&(b.drag_locked_to_axis=!0);var l=e.lastEvent.direction;b.drag_locked_to_axis&&l!==b.direction&&(b.direction=s.isVertical(l)?b.deltaY<0?i:g:b.deltaX<0?h:j),c||(d.trigger(a+"start",b),c=!0),d.trigger(a,b),d.trigger(a+b.direction,b);var m=s.isVertical(b.direction);(d.options.drag_block_vertical&&m||d.options.drag_block_horizontal&&!m)&&b.preventDefault();break;case q:c&&b.changedLength<=d.options.drag_max_touches&&(d.trigger(a+"end",b),c=!1);break;case p:c=!1}}var c=!1;e.gestures.Drag={name:a,index:50,handler:b,defaults:{drag_min_distance:10,correct_for_drag_min_distance:!0,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,drag_lock_min_distance:25}}}("drag"),e.gestures.Gesture={name:"gesture",index:1337,handler:function(a,b){b.trigger(this.name,a)}},function(a){function b(b,d){var e=d.options,f=v.current;switch(b.eventType){case n:clearTimeout(c),f.name=a,c=setTimeout(function(){f&&f.name==a&&d.trigger(a,b)},e.hold_timeout);break;case o:b.distance>e.hold_threshold&&clearTimeout(c);break;case q:clearTimeout(c)}}var c;e.gestures.Hold={name:a,index:10,defaults:{hold_timeout:500,hold_threshold:2},handler:b}}("hold"),e.gestures.Release={name:"release",index:1/0,handler:function(a,b){a.eventType==q&&b.trigger(this.name,a)}},e.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_min_touches:1,swipe_max_touches:1,swipe_velocity_x:.7,swipe_velocity_y:.6},handler:function(a,b){if(a.eventType==q){var c=a.touches.length,d=b.options;if(c<d.swipe_min_touches||c>d.swipe_max_touches)return;(a.velocityX>d.swipe_velocity_x||a.velocityY>d.swipe_velocity_y)&&(b.trigger(this.name,a),b.trigger(this.name+a.direction,a))}}},function(a){function b(b,d){var e,f,g=d.options,h=v.current,i=v.previous;switch(b.eventType){case n:c=!1;break;case o:c=c||b.distance>g.tap_max_distance;break;case p:"touchcancel"!=b.srcEvent.type&&b.deltaTime<g.tap_max_touchtime&&!c&&(e=i&&i.lastEvent&&b.timeStamp-i.lastEvent.timeStamp,f=!1,i&&i.name==a&&e&&e<g.doubletap_interval&&b.distance<g.doubletap_distance&&(d.trigger("doubletap",b),f=!0),(!f||g.tap_always)&&(h.name=a,d.trigger(h.name,b)))}}var c=!1;e.gestures.Tap={name:a,index:100,handler:b,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300}}}("tap"),e.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(a,b){return b.options.prevent_mouseevents&&a.pointerType==k?void a.stopDetect():(b.options.prevent_default&&a.preventDefault(),void(a.eventType==r&&b.trigger("touch",a)))}},function(a){function b(b,d){switch(b.eventType){case n:c=!1;break;case o:if(b.touches.length<2)return;var e=Math.abs(1-b.scale),f=Math.abs(b.rotation);if(e<d.options.transform_min_scale&&f<d.options.transform_min_rotation)return;v.current.name=a,c||(d.trigger(a+"start",b),c=!0),d.trigger(a,b),f>d.options.transform_min_rotation&&d.trigger("rotate",b),e>d.options.transform_min_scale&&(d.trigger("pinch",b),d.trigger("pinch"+(b.scale<1?"in":"out"),b));break;case q:c&&b.changedLength<2&&(d.trigger(a+"end",b),c=!1)}}var c=!1;e.gestures.Transform={name:a,index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1},handler:b}}("transform"),a.Hammer=e,"undefined"!=typeof module&&module.exports&&(module.exports=e),"function"==typeof define&&define.amd?define(["jquery"],function(b){return d(a.Hammer,b)}):d(a.Hammer,a.jQuery||a.Zepto)}(window);
//# sourceMappingURL=jquery.hammer-full.min.map
