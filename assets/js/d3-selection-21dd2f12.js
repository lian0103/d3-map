var g="http://www.w3.org/1999/xhtml";const b={svg:"http://www.w3.org/2000/svg",xhtml:g,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function L(t){var n=t+="",e=n.indexOf(":");return e>=0&&(n=t.slice(0,e))!=="xmlns"&&(t=t.slice(e+1)),b.hasOwnProperty(n)?{space:b[n],local:t}:t}function H(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===g&&n.documentElement.namespaceURI===g?n.createElement(t):n.createElementNS(e,t)}}function U(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function R(t){var n=L(t);return(n.local?U:H)(n)}function X(){}function F(t){return t==null?X:function(){return this.querySelector(t)}}function k(t){typeof t!="function"&&(t=F(t));for(var n=this._groups,e=n.length,i=new Array(e),r=0;r<e;++r)for(var s=n[r],l=s.length,o=i[r]=new Array(l),u,c,f=0;f<l;++f)(u=s[f])&&(c=t.call(u,u.__data__,f,s))&&("__data__"in u&&(c.__data__=u.__data__),o[f]=c);return new a(i,this._parents)}function w(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function z(){return[]}function Y(t){return t==null?z:function(){return this.querySelectorAll(t)}}function K(t){return function(){var n=t.apply(this,arguments);return n==null?[]:w(n)}}function G(t){typeof t=="function"?t=K(t):t=Y(t);for(var n=this._groups,e=n.length,i=[],r=[],s=0;s<e;++s)for(var l=n[s],o=l.length,u,c=0;c<o;++c)(u=l[c])&&(i.push(t.call(u,u.__data__,c,l)),r.push(u));return new a(i,r)}function J(t){return function(){return this.matches(t)}}function V(t){return function(n){return n.matches(t)}}var Q=Array.prototype.find;function W(t){return function(){return Q.call(this.children,t)}}function Z(){return this.firstElementChild}function $(t){return this.select(t==null?Z:W(typeof t=="function"?t:V(t)))}var j=Array.prototype.filter;function tt(){return this.children}function nt(t){return function(){return j.call(this.children,t)}}function et(t){return this.selectAll(t==null?tt:nt(typeof t=="function"?t:V(t)))}function rt(t){typeof t!="function"&&(t=J(t));for(var n=this._groups,e=n.length,i=new Array(e),r=0;r<e;++r)for(var s=n[r],l=s.length,o=i[r]=[],u,c=0;c<l;++c)(u=s[c])&&t.call(u,u.__data__,c,s)&&o.push(u);return new a(i,this._parents)}function B(t){return new Array(t.length)}function it(){return new a(this._enter||this._groups.map(B),this._parents)}function v(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}v.prototype={constructor:v,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function st(t){return function(){return t}}function ot(t,n,e,i,r,s){for(var l=0,o,u=n.length,c=s.length;l<c;++l)(o=n[l])?(o.__data__=s[l],i[l]=o):e[l]=new v(t,s[l]);for(;l<u;++l)(o=n[l])&&(r[l]=o)}function lt(t,n,e,i,r,s,l){var o,u,c=new Map,f=n.length,p=s.length,_=new Array(f),h;for(o=0;o<f;++o)(u=n[o])&&(_[o]=h=l.call(u,u.__data__,o,n)+"",c.has(h)?r[o]=u:c.set(h,u));for(o=0;o<p;++o)h=l.call(t,s[o],o,s)+"",(u=c.get(h))?(i[o]=u,u.__data__=s[o],c.delete(h)):e[o]=new v(t,s[o]);for(o=0;o<f;++o)(u=n[o])&&c.get(_[o])===u&&(r[o]=u)}function ut(t){return t.__data__}function ct(t,n){if(!arguments.length)return Array.from(this,ut);var e=n?lt:ot,i=this._parents,r=this._groups;typeof t!="function"&&(t=st(t));for(var s=r.length,l=new Array(s),o=new Array(s),u=new Array(s),c=0;c<s;++c){var f=i[c],p=r[c],_=p.length,h=w(t.call(f,f&&f.__data__,c,i)),d=h.length,S=o[c]=new Array(d),C=l[c]=new Array(d),O=u[c]=new Array(_);e(f,p,S,C,O,h,n);for(var y=0,m=0,E,N;y<d;++y)if(E=S[y]){for(y>=m&&(m=y+1);!(N=C[m])&&++m<d;);E._next=N||null}}return l=new a(l,i),l._enter=o,l._exit=u,l}function ft(){return new a(this._exit||this._groups.map(B),this._parents)}function at(t,n,e){var i=this.enter(),r=this,s=this.exit();return i=typeof t=="function"?t(i):i.append(t+""),n!=null&&(r=n(r)),e==null?s.remove():e(s),i&&r?i.merge(r).order():r}function ht(t){if(!(t instanceof a))throw new Error("invalid merge");for(var n=this._groups,e=t._groups,i=n.length,r=e.length,s=Math.min(i,r),l=new Array(i),o=0;o<s;++o)for(var u=n[o],c=e[o],f=u.length,p=l[o]=new Array(f),_,h=0;h<f;++h)(_=u[h]||c[h])&&(p[h]=_);for(;o<i;++o)l[o]=n[o];return new a(l,this._parents)}function _t(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var i=t[n],r=i.length-1,s=i[r],l;--r>=0;)(l=i[r])&&(s&&l.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(l,s),s=l);return this}function pt(t){t||(t=yt);function n(p,_){return p&&_?t(p.__data__,_.__data__):!p-!_}for(var e=this._groups,i=e.length,r=new Array(i),s=0;s<i;++s){for(var l=e[s],o=l.length,u=r[s]=new Array(o),c,f=0;f<o;++f)(c=l[f])&&(u[f]=c);u.sort(n)}return new a(r,this._parents).order()}function yt(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function dt(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function mt(){return Array.from(this)}function vt(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var i=t[n],r=0,s=i.length;r<s;++r){var l=i[r];if(l)return l}return null}function gt(){let t=0;for(const n of this)++t;return t}function wt(){return!this.node()}function At(t){for(var n=this._groups,e=0,i=n.length;e<i;++e)for(var r=n[e],s=0,l=r.length,o;s<l;++s)(o=r[s])&&t.call(o,o.__data__,s,r);return this}function xt(t){return function(){this.removeAttribute(t)}}function St(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Ct(t,n){return function(){this.setAttribute(t,n)}}function Et(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function Nt(t,n){return function(){var e=n.apply(this,arguments);e==null?this.removeAttribute(t):this.setAttribute(t,e)}}function bt(t,n){return function(){var e=n.apply(this,arguments);e==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function Lt(t,n){var e=L(t);if(arguments.length<2){var i=this.node();return e.local?i.getAttributeNS(e.space,e.local):i.getAttribute(e)}return this.each((n==null?e.local?St:xt:typeof n=="function"?e.local?bt:Nt:e.local?Et:Ct)(e,n))}function P(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function Rt(t){return function(){this.style.removeProperty(t)}}function Ft(t,n,e){return function(){this.style.setProperty(t,n,e)}}function Vt(t,n,e){return function(){var i=n.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,e)}}function Bt(t,n,e){return arguments.length>1?this.each((n==null?Rt:typeof n=="function"?Vt:Ft)(t,n,e==null?"":e)):Pt(this.node(),t)}function Pt(t,n){return t.style.getPropertyValue(n)||P(t).getComputedStyle(t,null).getPropertyValue(n)}function Tt(t){return function(){delete this[t]}}function Mt(t,n){return function(){this[t]=n}}function qt(t,n){return function(){var e=n.apply(this,arguments);e==null?delete this[t]:this[t]=e}}function Dt(t,n){return arguments.length>1?this.each((n==null?Tt:typeof n=="function"?qt:Mt)(t,n)):this.node()[t]}function T(t){return t.trim().split(/^|\s+/)}function A(t){return t.classList||new M(t)}function M(t){this._node=t,this._names=T(t.getAttribute("class")||"")}M.prototype={add:function(t){var n=this._names.indexOf(t);n<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function q(t,n){for(var e=A(t),i=-1,r=n.length;++i<r;)e.add(n[i])}function D(t,n){for(var e=A(t),i=-1,r=n.length;++i<r;)e.remove(n[i])}function It(t){return function(){q(this,t)}}function Ot(t){return function(){D(this,t)}}function Ht(t,n){return function(){(n.apply(this,arguments)?q:D)(this,t)}}function Ut(t,n){var e=T(t+"");if(arguments.length<2){for(var i=A(this.node()),r=-1,s=e.length;++r<s;)if(!i.contains(e[r]))return!1;return!0}return this.each((typeof n=="function"?Ht:n?It:Ot)(e,n))}function Xt(){this.textContent=""}function kt(t){return function(){this.textContent=t}}function zt(t){return function(){var n=t.apply(this,arguments);this.textContent=n==null?"":n}}function Yt(t){return arguments.length?this.each(t==null?Xt:(typeof t=="function"?zt:kt)(t)):this.node().textContent}function Kt(){this.innerHTML=""}function Gt(t){return function(){this.innerHTML=t}}function Jt(t){return function(){var n=t.apply(this,arguments);this.innerHTML=n==null?"":n}}function Qt(t){return arguments.length?this.each(t==null?Kt:(typeof t=="function"?Jt:Gt)(t)):this.node().innerHTML}function Wt(){this.nextSibling&&this.parentNode.appendChild(this)}function Zt(){return this.each(Wt)}function $t(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function jt(){return this.each($t)}function tn(t){var n=typeof t=="function"?t:R(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})}function nn(){return null}function en(t,n){var e=typeof t=="function"?t:R(t),i=n==null?nn:typeof n=="function"?n:F(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),i.apply(this,arguments)||null)})}function rn(){var t=this.parentNode;t&&t.removeChild(this)}function sn(){return this.each(rn)}function on(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function ln(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function un(t){return this.select(t?ln:on)}function cn(t){return arguments.length?this.property("__data__",t):this.node().__data__}function fn(t){return function(n){t.call(this,n,this.__data__)}}function an(t){return t.trim().split(/^|\s+/).map(function(n){var e="",i=n.indexOf(".");return i>=0&&(e=n.slice(i+1),n=n.slice(0,i)),{type:n,name:e}})}function hn(t){return function(){var n=this.__on;if(!!n){for(var e=0,i=-1,r=n.length,s;e<r;++e)s=n[e],(!t.type||s.type===t.type)&&s.name===t.name?this.removeEventListener(s.type,s.listener,s.options):n[++i]=s;++i?n.length=i:delete this.__on}}}function _n(t,n,e){return function(){var i=this.__on,r,s=fn(n);if(i){for(var l=0,o=i.length;l<o;++l)if((r=i[l]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=e),r.value=n;return}}this.addEventListener(t.type,s,e),r={type:t.type,name:t.name,value:n,listener:s,options:e},i?i.push(r):this.__on=[r]}}function pn(t,n,e){var i=an(t+""),r,s=i.length,l;if(arguments.length<2){var o=this.node().__on;if(o){for(var u=0,c=o.length,f;u<c;++u)for(r=0,f=o[u];r<s;++r)if((l=i[r]).type===f.type&&l.name===f.name)return f.value}return}for(o=n?_n:hn,r=0;r<s;++r)this.each(o(i[r],n,e));return this}function I(t,n,e){var i=P(t),r=i.CustomEvent;typeof r=="function"?r=new r(n,e):(r=i.document.createEvent("Event"),e?(r.initEvent(n,e.bubbles,e.cancelable),r.detail=e.detail):r.initEvent(n,!1,!1)),t.dispatchEvent(r)}function yn(t,n){return function(){return I(this,t,n)}}function dn(t,n){return function(){return I(this,t,n.apply(this,arguments))}}function mn(t,n){return this.each((typeof n=="function"?dn:yn)(t,n))}function*vn(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var i=t[n],r=0,s=i.length,l;r<s;++r)(l=i[r])&&(yield l)}var x=[null];function a(t,n){this._groups=t,this._parents=n}function gn(){return new a([[document.documentElement]],x)}function wn(){return this}a.prototype=gn.prototype={constructor:a,select:k,selectAll:G,selectChild:$,selectChildren:et,filter:rt,data:ct,enter:it,exit:ft,join:at,merge:ht,selection:wn,order:_t,sort:pt,call:dt,nodes:mt,node:vt,size:gt,empty:wt,each:At,attr:Lt,style:Bt,property:Dt,classed:Ut,text:Yt,html:Qt,raise:Zt,lower:jt,append:tn,insert:en,remove:sn,clone:un,datum:cn,on:pn,dispatch:mn,[Symbol.iterator]:vn};function xn(t){return typeof t=="string"?new a([[document.querySelector(t)]],[document.documentElement]):new a([[t]],x)}function An(t){let n;for(;n=t.sourceEvent;)t=n;return t}function Sn(t,n){if(t=An(t),n===void 0&&(n=t.currentTarget),n){var e=n.ownerSVGElement||n;if(e.createSVGPoint){var i=e.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(n.getScreenCTM().inverse()),[i.x,i.y]}if(n.getBoundingClientRect){var r=n.getBoundingClientRect();return[t.clientX-r.left-n.clientLeft,t.clientY-r.top-n.clientTop]}}return[t.pageX,t.pageY]}function Cn(t){return typeof t=="string"?new a([document.querySelectorAll(t)],[document.documentElement]):new a([t==null?[]:w(t)],x)}export{F as a,Y as b,gn as c,Pt as d,Cn as e,J as m,L as n,Sn as p,xn as s};