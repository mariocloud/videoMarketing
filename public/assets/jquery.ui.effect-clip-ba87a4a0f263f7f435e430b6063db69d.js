/*!
 * jQuery UI Effects 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/effects-core/
 */
!function(e,t){var i="ui-effects-";e.effects={effect:{}},/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
function(e,t){function i(e,t,i){var n=h[t.type]||{};return null==e?i||!t.def?null:t.def:(e=n.floor?~~e:parseFloat(e),isNaN(e)?t.def:n.mod?(e+n.mod)%n.mod:0>e?0:n.max<e?n.max:e)}function n(t){var i=u(),n=i._rgba=[];return t=t.toLowerCase(),f(l,function(e,s){var a,o=s.re.exec(t),r=o&&s.parse(o),l=s.space||"rgba";return r?(a=i[l](r),i[c[l].cache]=a[c[l].cache],n=i._rgba=a._rgba,!1):void 0}),n.length?("0,0,0,0"===n.join()&&e.extend(n,a.transparent),i):a[t]}function s(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],u=e.Color=function(t,i,n,s){return new e.Color.fn.parse(t,i,n,s)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},h={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=u.support={},p=e("<p>")[0],f=e.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),u.fn=e.extend(u.prototype,{parse:function(s,o,r,l){if(s===t)return this._rgba=[null,null,null,null],this;(s.jquery||s.nodeType)&&(s=e(s).css(o),o=t);var h=this,d=e.type(s),p=this._rgba=[];return o!==t&&(s=[s,o,r,l],d="array"),"string"===d?this.parse(n(s)||a._default):"array"===d?(f(c.rgba.props,function(e,t){p[t.idx]=i(s[t.idx],t)}),this):"object"===d?(s instanceof u?f(c,function(e,t){s[t.cache]&&(h[t.cache]=s[t.cache].slice())}):f(c,function(t,n){var a=n.cache;f(n.props,function(e,t){if(!h[a]&&n.to){if("alpha"===e||null==s[e])return;h[a]=n.to(h._rgba)}h[a][t.idx]=i(s[e],t,!0)}),h[a]&&e.inArray(null,h[a].slice(0,3))<0&&(h[a][3]=1,n.from&&(h._rgba=n.from(h[a])))}),this):void 0},is:function(e){var t=u(e),i=!0,n=this;return f(c,function(e,s){var a,o=t[s.cache];return o&&(a=n[s.cache]||s.to&&s.to(n._rgba)||[],f(s.props,function(e,t){return null!=o[t.idx]?i=o[t.idx]===a[t.idx]:void 0})),i}),i},_space:function(){var e=[],t=this;return f(c,function(i,n){t[n.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var n=u(e),s=n._space(),a=c[s],o=0===this.alpha()?u("transparent"):this,r=o[a.cache]||a.to(o._rgba),l=r.slice();return n=n[a.cache],f(a.props,function(e,s){var a=s.idx,o=r[a],u=n[a],c=h[s.type]||{};null!==u&&(null===o?l[a]=u:(c.mod&&(u-o>c.mod/2?o+=c.mod:o-u>c.mod/2&&(o-=c.mod)),l[a]=i((u-o)*t+o,s)))}),this[s](l)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),n=i.pop(),s=u(t)._rgba;return u(e.map(i,function(e,t){return(1-n)*s[t]+n*e}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),n=i.pop();return t&&i.push(~~(255*n)),"#"+e.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),u.fn.parse.prototype=u.fn,c.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,n=e[0]/255,s=e[1]/255,a=e[2]/255,o=e[3],r=Math.max(n,s,a),l=Math.min(n,s,a),u=r-l,c=r+l,h=.5*c;return t=l===r?0:n===r?60*(s-a)/u+360:s===r?60*(a-n)/u+120:60*(n-s)/u+240,i=0===u?0:.5>=h?u/c:u/(2-c),[Math.round(t)%360,i,h,null==o?1:o]},c.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],n=e[2],a=e[3],o=.5>=n?n*(1+i):n+i-n*i,r=2*n-o;return[Math.round(255*s(r,o,t+1/3)),Math.round(255*s(r,o,t)),Math.round(255*s(r,o,t-1/3)),a]},f(c,function(n,s){var a=s.props,o=s.cache,l=s.to,c=s.from;u.fn[n]=function(n){if(l&&!this[o]&&(this[o]=l(this._rgba)),n===t)return this[o].slice();var s,r=e.type(n),h="array"===r||"object"===r?n:arguments,d=this[o].slice();return f(a,function(e,t){var n=h["object"===r?e:t.idx];null==n&&(n=d[t.idx]),d[t.idx]=i(n,t)}),c?(s=u(c(d)),s[o]=d,s):u(d)},f(a,function(t,i){u.fn[t]||(u.fn[t]=function(s){var a,o=e.type(s),l="alpha"===t?this._hsla?"hsla":"rgba":n,u=this[l](),c=u[i.idx];return"undefined"===o?c:("function"===o&&(s=s.call(this,c),o=e.type(s)),null==s&&i.empty?this:("string"===o&&(a=r.exec(s),a&&(s=c+parseFloat(a[2])*("+"===a[1]?1:-1))),u[i.idx]=s,this[l](u)))})})}),u.hook=function(t){var i=t.split(" ");f(i,function(t,i){e.cssHooks[i]={set:function(t,s){var a,o,r="";if("transparent"!==s&&("string"!==e.type(s)||(a=n(s)))){if(s=u(a||s),!d.rgba&&1!==s._rgba[3]){for(o="backgroundColor"===i?t.parentNode:t;(""===r||"transparent"===r)&&o&&o.style;)try{r=e.css(o,"backgroundColor"),o=o.parentNode}catch(l){}s=s.blend(r&&"transparent"!==r?r:"_default")}s=s.toRgbaString()}try{t.style[i]=s}catch(l){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=u(t.elem,i),t.end=u(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},u.hook(o),e.cssHooks.borderColor={expand:function(e){var t={};return f(["Top","Right","Bottom","Left"],function(i,n){t["border"+n+"Color"]=e}),t}},a=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(t){var i,n,s=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,a={};if(s&&s.length&&s[0]&&s[s[0]])for(n=s.length;n--;)i=s[n],"string"==typeof s[i]&&(a[e.camelCase(i)]=s[i]);else for(i in s)"string"==typeof s[i]&&(a[i]=s[i]);return a}function n(t,i){var n,s,o={};for(n in i)s=i[n],t[n]!==s&&(a[n]||(e.fx.step[n]||!isNaN(parseFloat(s)))&&(o[n]=s));return o}var s=["add","remove","toggle"],a={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){e.fx.step[i]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(jQuery.style(e.elem,i,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(t,a,o,r){var l=e.speed(a,o,r);return this.queue(function(){var a,o=e(this),r=o.attr("class")||"",u=l.children?o.find("*").addBack():o;u=u.map(function(){var t=e(this);return{el:t,start:i(this)}}),a=function(){e.each(s,function(e,i){t[i]&&o[i+"Class"](t[i])})},a(),u=u.map(function(){return this.end=i(this.el[0]),this.diff=n(this.start,this.end),this}),o.attr("class",r),u=u.map(function(){var t=this,i=e.Deferred(),n=e.extend({},l,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,n),i.promise()}),e.when.apply(e,u.get()).done(function(){a(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),l.complete.call(o[0])})})},e.fn.extend({addClass:function(t){return function(i,n,s,a){return n?e.effects.animateClass.call(this,{add:i},n,s,a):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(i,n,s,a){return arguments.length>1?e.effects.animateClass.call(this,{remove:i},n,s,a):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(i){return function(n,s,a,o,r){return"boolean"==typeof s||s===t?a?e.effects.animateClass.call(this,s?{add:n}:{remove:n},a,o,r):i.apply(this,arguments):e.effects.animateClass.call(this,{toggle:n},s,a,o)}}(e.fn.toggleClass),switchClass:function(t,i,n,s,a){return e.effects.animateClass.call(this,{add:i,remove:t},n,s,a)}})}(),function(){function n(t,i,n,s){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(s=i,n=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(s=n,n=i,i={}),e.isFunction(n)&&(s=n,n=null),i&&e.extend(t,i),n=n||i.duration,t.duration=e.fx.off?0:"number"==typeof n?n:n in e.fx.speeds?e.fx.speeds[n]:e.fx.speeds._default,t.complete=s||i.complete,t}function s(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?e.isFunction(t)?!0:"object"!=typeof t||t.effect?!1:!0:!0}e.extend(e.effects,{version:"1.10.3",save:function(e,t){for(var n=0;n<t.length;n++)null!==t[n]&&e.data(i+t[n],e[0].style[t[n]])},restore:function(e,n){var s,a;for(a=0;a<n.length;a++)null!==n[a]&&(s=e.data(i+n[a]),s===t&&(s=""),e.css(n[a],s))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,n;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":n=0;break;case"center":n=.5;break;case"right":n=1;break;default:n=e[1]/t.width}return{x:n,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},n=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),s={width:t.width(),height:t.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return t.wrap(n),(t[0]===a||e.contains(t[0],a))&&e(a).focus(),n=t.parent(),"static"===t.css("position")?(n.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,n){i[n]=t.css(n),isNaN(parseInt(i[n],10))&&(i[n]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(s),n.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,n,s){return s=s||{},e.each(i,function(e,i){var a=t.cssUnit(i);a[0]>0&&(s[i]=a[0]*n+a[1])}),s}}),e.fn.extend({effect:function(){function t(t){function n(){e.isFunction(a)&&a.call(s[0]),e.isFunction(t)&&t()}var s=e(this),a=i.complete,r=i.mode;(s.is(":hidden")?"hide"===r:"show"===r)?(s[r](),n()):o.call(s[0],i,n)}var i=n.apply(this,arguments),s=i.mode,a=i.queue,o=e.effects.effect[i.effect];return e.fx.off||!o?s?this[s](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):a===!1?this.each(t):this.queue(a||"fx",t)},show:function(e){return function(t){if(s(t))return e.apply(this,arguments);var i=n.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(e.fn.show),hide:function(e){return function(t){if(s(t))return e.apply(this,arguments);var i=n.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(e.fn.hide),toggle:function(e){return function(t){if(s(t)||"boolean"==typeof t)return e.apply(this,arguments);var i=n.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(e.fn.toggle),cssUnit:function(t){var i=this.css(t),n=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(n=[parseFloat(i),t])}),n}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;e<((t=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}()}(jQuery),/*!
 * jQuery UI Effects Clip 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/clip-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(e){e.effects.effect.clip=function(t,i){var n,s,a,o=e(this),r=["position","top","bottom","left","right","height","width"],l=e.effects.setMode(o,t.mode||"hide"),u="show"===l,c=t.direction||"vertical",h="vertical"===c,d=h?"height":"width",p=h?"top":"left",f={};e.effects.save(o,r),o.show(),n=e.effects.createWrapper(o).css({overflow:"hidden"}),s="IMG"===o[0].tagName?n:o,a=s[d](),u&&(s.css(d,0),s.css(p,a/2)),f[d]=u?a:0,f[p]=u?0:a/2,s.animate(f,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){u||o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}})}}(jQuery);