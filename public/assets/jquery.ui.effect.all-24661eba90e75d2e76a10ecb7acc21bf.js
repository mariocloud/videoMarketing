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
function(e,t){function i(e,t,i){var n=h[t.type]||{};return null==e?i||!t.def?null:t.def:(e=n.floor?~~e:parseFloat(e),isNaN(e)?t.def:n.mod?(e+n.mod)%n.mod:0>e?0:n.max<e?n.max:e)}function n(t){var i=u(),n=i._rgba=[];return t=t.toLowerCase(),p(l,function(e,s){var r,o=s.re.exec(t),a=o&&s.parse(o),l=s.space||"rgba";return a?(r=i[l](a),i[c[l].cache]=r[c[l].cache],n=i._rgba=r._rgba,!1):void 0}),n.length?("0,0,0,0"===n.join()&&e.extend(n,r.transparent),i):r[t]}function s(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var r,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",a=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],u=e.Color=function(t,i,n,s){return new e.Color.fn.parse(t,i,n,s)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},h={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=u.support={},f=e("<p>")[0],p=e.each;f.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=f.style.backgroundColor.indexOf("rgba")>-1,p(c,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),u.fn=e.extend(u.prototype,{parse:function(s,o,a,l){if(s===t)return this._rgba=[null,null,null,null],this;(s.jquery||s.nodeType)&&(s=e(s).css(o),o=t);var h=this,d=e.type(s),f=this._rgba=[];return o!==t&&(s=[s,o,a,l],d="array"),"string"===d?this.parse(n(s)||r._default):"array"===d?(p(c.rgba.props,function(e,t){f[t.idx]=i(s[t.idx],t)}),this):"object"===d?(s instanceof u?p(c,function(e,t){s[t.cache]&&(h[t.cache]=s[t.cache].slice())}):p(c,function(t,n){var r=n.cache;p(n.props,function(e,t){if(!h[r]&&n.to){if("alpha"===e||null==s[e])return;h[r]=n.to(h._rgba)}h[r][t.idx]=i(s[e],t,!0)}),h[r]&&e.inArray(null,h[r].slice(0,3))<0&&(h[r][3]=1,n.from&&(h._rgba=n.from(h[r])))}),this):void 0},is:function(e){var t=u(e),i=!0,n=this;return p(c,function(e,s){var r,o=t[s.cache];return o&&(r=n[s.cache]||s.to&&s.to(n._rgba)||[],p(s.props,function(e,t){return null!=o[t.idx]?i=o[t.idx]===r[t.idx]:void 0})),i}),i},_space:function(){var e=[],t=this;return p(c,function(i,n){t[n.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var n=u(e),s=n._space(),r=c[s],o=0===this.alpha()?u("transparent"):this,a=o[r.cache]||r.to(o._rgba),l=a.slice();return n=n[r.cache],p(r.props,function(e,s){var r=s.idx,o=a[r],u=n[r],c=h[s.type]||{};null!==u&&(null===o?l[r]=u:(c.mod&&(u-o>c.mod/2?o+=c.mod:o-u>c.mod/2&&(o-=c.mod)),l[r]=i((u-o)*t+o,s)))}),this[s](l)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),n=i.pop(),s=u(t)._rgba;return u(e.map(i,function(e,t){return(1-n)*s[t]+n*e}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),n=i.pop();return t&&i.push(~~(255*n)),"#"+e.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),u.fn.parse.prototype=u.fn,c.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,n=e[0]/255,s=e[1]/255,r=e[2]/255,o=e[3],a=Math.max(n,s,r),l=Math.min(n,s,r),u=a-l,c=a+l,h=.5*c;return t=l===a?0:n===a?60*(s-r)/u+360:s===a?60*(r-n)/u+120:60*(n-s)/u+240,i=0===u?0:.5>=h?u/c:u/(2-c),[Math.round(t)%360,i,h,null==o?1:o]},c.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],n=e[2],r=e[3],o=.5>=n?n*(1+i):n+i-n*i,a=2*n-o;return[Math.round(255*s(a,o,t+1/3)),Math.round(255*s(a,o,t)),Math.round(255*s(a,o,t-1/3)),r]},p(c,function(n,s){var r=s.props,o=s.cache,l=s.to,c=s.from;u.fn[n]=function(n){if(l&&!this[o]&&(this[o]=l(this._rgba)),n===t)return this[o].slice();var s,a=e.type(n),h="array"===a||"object"===a?n:arguments,d=this[o].slice();return p(r,function(e,t){var n=h["object"===a?e:t.idx];null==n&&(n=d[t.idx]),d[t.idx]=i(n,t)}),c?(s=u(c(d)),s[o]=d,s):u(d)},p(r,function(t,i){u.fn[t]||(u.fn[t]=function(s){var r,o=e.type(s),l="alpha"===t?this._hsla?"hsla":"rgba":n,u=this[l](),c=u[i.idx];return"undefined"===o?c:("function"===o&&(s=s.call(this,c),o=e.type(s)),null==s&&i.empty?this:("string"===o&&(r=a.exec(s),r&&(s=c+parseFloat(r[2])*("+"===r[1]?1:-1))),u[i.idx]=s,this[l](u)))})})}),u.hook=function(t){var i=t.split(" ");p(i,function(t,i){e.cssHooks[i]={set:function(t,s){var r,o,a="";if("transparent"!==s&&("string"!==e.type(s)||(r=n(s)))){if(s=u(r||s),!d.rgba&&1!==s._rgba[3]){for(o="backgroundColor"===i?t.parentNode:t;(""===a||"transparent"===a)&&o&&o.style;)try{a=e.css(o,"backgroundColor"),o=o.parentNode}catch(l){}s=s.blend(a&&"transparent"!==a?a:"_default")}s=s.toRgbaString()}try{t.style[i]=s}catch(l){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=u(t.elem,i),t.end=u(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},u.hook(o),e.cssHooks.borderColor={expand:function(e){var t={};return p(["Top","Right","Bottom","Left"],function(i,n){t["border"+n+"Color"]=e}),t}},r=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(t){var i,n,s=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,r={};if(s&&s.length&&s[0]&&s[s[0]])for(n=s.length;n--;)i=s[n],"string"==typeof s[i]&&(r[e.camelCase(i)]=s[i]);else for(i in s)"string"==typeof s[i]&&(r[i]=s[i]);return r}function n(t,i){var n,s,o={};for(n in i)s=i[n],t[n]!==s&&(r[n]||(e.fx.step[n]||!isNaN(parseFloat(s)))&&(o[n]=s));return o}var s=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){e.fx.step[i]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(jQuery.style(e.elem,i,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(t,r,o,a){var l=e.speed(r,o,a);return this.queue(function(){var r,o=e(this),a=o.attr("class")||"",u=l.children?o.find("*").addBack():o;u=u.map(function(){var t=e(this);return{el:t,start:i(this)}}),r=function(){e.each(s,function(e,i){t[i]&&o[i+"Class"](t[i])})},r(),u=u.map(function(){return this.end=i(this.el[0]),this.diff=n(this.start,this.end),this}),o.attr("class",a),u=u.map(function(){var t=this,i=e.Deferred(),n=e.extend({},l,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,n),i.promise()}),e.when.apply(e,u.get()).done(function(){r(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),l.complete.call(o[0])})})},e.fn.extend({addClass:function(t){return function(i,n,s,r){return n?e.effects.animateClass.call(this,{add:i},n,s,r):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(i,n,s,r){return arguments.length>1?e.effects.animateClass.call(this,{remove:i},n,s,r):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(i){return function(n,s,r,o,a){return"boolean"==typeof s||s===t?r?e.effects.animateClass.call(this,s?{add:n}:{remove:n},r,o,a):i.apply(this,arguments):e.effects.animateClass.call(this,{toggle:n},s,r,o)}}(e.fn.toggleClass),switchClass:function(t,i,n,s,r){return e.effects.animateClass.call(this,{add:i,remove:t},n,s,r)}})}(),function(){function n(t,i,n,s){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(s=i,n=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(s=n,n=i,i={}),e.isFunction(n)&&(s=n,n=null),i&&e.extend(t,i),n=n||i.duration,t.duration=e.fx.off?0:"number"==typeof n?n:n in e.fx.speeds?e.fx.speeds[n]:e.fx.speeds._default,t.complete=s||i.complete,t}function s(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?e.isFunction(t)?!0:"object"!=typeof t||t.effect?!1:!0:!0}e.extend(e.effects,{version:"1.10.3",save:function(e,t){for(var n=0;n<t.length;n++)null!==t[n]&&e.data(i+t[n],e[0].style[t[n]])},restore:function(e,n){var s,r;for(r=0;r<n.length;r++)null!==n[r]&&(s=e.data(i+n[r]),s===t&&(s=""),e.css(n[r],s))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,n;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":n=0;break;case"center":n=.5;break;case"right":n=1;break;default:n=e[1]/t.width}return{x:n,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},n=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),s={width:t.width(),height:t.height()},r=document.activeElement;try{r.id}catch(o){r=document.body}return t.wrap(n),(t[0]===r||e.contains(t[0],r))&&e(r).focus(),n=t.parent(),"static"===t.css("position")?(n.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,n){i[n]=t.css(n),isNaN(parseInt(i[n],10))&&(i[n]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(s),n.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,n,s){return s=s||{},e.each(i,function(e,i){var r=t.cssUnit(i);r[0]>0&&(s[i]=r[0]*n+r[1])}),s}}),e.fn.extend({effect:function(){function t(t){function n(){e.isFunction(r)&&r.call(s[0]),e.isFunction(t)&&t()}var s=e(this),r=i.complete,a=i.mode;(s.is(":hidden")?"hide"===a:"show"===a)?(s[a](),n()):o.call(s[0],i,n)}var i=n.apply(this,arguments),s=i.mode,r=i.queue,o=e.effects.effect[i.effect];return e.fx.off||!o?s?this[s](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):r===!1?this.each(t):this.queue(r||"fx",t)},show:function(e){return function(t){if(s(t))return e.apply(this,arguments);var i=n.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(e.fn.show),hide:function(e){return function(t){if(s(t))return e.apply(this,arguments);var i=n.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(e.fn.hide),toggle:function(e){return function(t){if(s(t)||"boolean"==typeof t)return e.apply(this,arguments);var i=n.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(e.fn.toggle),cssUnit:function(t){var i=this.css(t),n=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(n=[parseFloat(i),t])}),n}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;e<((t=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}()}(jQuery),/*!
 * jQuery UI Effects Blind 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/blind-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(e){var t=/up|down|vertical/,i=/up|left|vertical|horizontal/;e.effects.effect.blind=function(n,s){var r,o,a,l=e(this),u=["position","top","bottom","left","right","height","width"],c=e.effects.setMode(l,n.mode||"hide"),h=n.direction||"up",d=t.test(h),f=d?"height":"width",p=d?"top":"left",g=i.test(h),m={},v="show"===c;l.parent().is(".ui-effects-wrapper")?e.effects.save(l.parent(),u):e.effects.save(l,u),l.show(),r=e.effects.createWrapper(l).css({overflow:"hidden"}),o=r[f](),a=parseFloat(r.css(p))||0,m[f]=v?o:0,g||(l.css(d?"bottom":"right",0).css(d?"top":"left","auto").css({position:"absolute"}),m[p]=v?a:o+a),v&&(r.css(f,0),g||r.css(p,a+o)),r.animate(m,{duration:n.duration,easing:n.easing,queue:!1,complete:function(){"hide"===c&&l.hide(),e.effects.restore(l,u),e.effects.removeWrapper(l),s()}})}}(jQuery),/*!
 * jQuery UI Effects Bounce 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/bounce-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(e){e.effects.effect.bounce=function(t,i){var n,s,r,o=e(this),a=["position","top","bottom","left","right","height","width"],l=e.effects.setMode(o,t.mode||"effect"),u="hide"===l,c="show"===l,h=t.direction||"up",d=t.distance,f=t.times||5,p=2*f+(c||u?1:0),g=t.duration/p,m=t.easing,v="up"===h||"down"===h?"top":"left",A="up"===h||"left"===h,y=o.queue(),b=y.length;for((c||u)&&a.push("opacity"),e.effects.save(o,a),o.show(),e.effects.createWrapper(o),d||(d=o["top"===v?"outerHeight":"outerWidth"]()/3),c&&(r={opacity:1},r[v]=0,o.css("opacity",0).css(v,A?2*-d:2*d).animate(r,g,m)),u&&(d/=Math.pow(2,f-1)),r={},r[v]=0,n=0;f>n;n++)s={},s[v]=(A?"-=":"+=")+d,o.animate(s,g,m).animate(r,g,m),d=u?2*d:d/2;u&&(s={opacity:0},s[v]=(A?"-=":"+=")+d,o.animate(s,g,m)),o.queue(function(){u&&o.hide(),e.effects.restore(o,a),e.effects.removeWrapper(o),i()}),b>1&&y.splice.apply(y,[1,0].concat(y.splice(b,p+1))),o.dequeue()}}(jQuery),/*!
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
function(e){e.effects.effect.clip=function(t,i){var n,s,r,o=e(this),a=["position","top","bottom","left","right","height","width"],l=e.effects.setMode(o,t.mode||"hide"),u="show"===l,c=t.direction||"vertical",h="vertical"===c,d=h?"height":"width",f=h?"top":"left",p={};e.effects.save(o,a),o.show(),n=e.effects.createWrapper(o).css({overflow:"hidden"}),s="IMG"===o[0].tagName?n:o,r=s[d](),u&&(s.css(d,0),s.css(f,r/2)),p[d]=u?r:0,p[f]=u?0:r/2,s.animate(p,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){u||o.hide(),e.effects.restore(o,a),e.effects.removeWrapper(o),i()}})}}(jQuery),/*!
 * jQuery UI Effects Drop 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/drop-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(e){e.effects.effect.drop=function(t,i){var n,s=e(this),r=["position","top","bottom","left","right","opacity","height","width"],o=e.effects.setMode(s,t.mode||"hide"),a="show"===o,l=t.direction||"left",u="up"===l||"down"===l?"top":"left",c="up"===l||"left"===l?"pos":"neg",h={opacity:a?1:0};e.effects.save(s,r),s.show(),e.effects.createWrapper(s),n=t.distance||s["top"===u?"outerHeight":"outerWidth"](!0)/2,a&&s.css("opacity",0).css(u,"pos"===c?-n:n),h[u]=(a?"pos"===c?"+=":"-=":"pos"===c?"-=":"+=")+n,s.animate(h,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&s.hide(),e.effects.restore(s,r),e.effects.removeWrapper(s),i()}})}}(jQuery),/*!
 * jQuery UI Effects Explode 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/explode-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(e){e.effects.effect.explode=function(t,i){function n(){y.push(this),y.length===h*d&&s()}function s(){f.css({visibility:"visible"}),e(y).remove(),g||f.hide(),i()}var r,o,a,l,u,c,h=t.pieces?Math.round(Math.sqrt(t.pieces)):3,d=h,f=e(this),p=e.effects.setMode(f,t.mode||"hide"),g="show"===p,m=f.show().css("visibility","hidden").offset(),v=Math.ceil(f.outerWidth()/d),A=Math.ceil(f.outerHeight()/h),y=[];for(r=0;h>r;r++)for(l=m.top+r*A,c=r-(h-1)/2,o=0;d>o;o++)a=m.left+o*v,u=o-(d-1)/2,f.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*v,top:-r*A}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:A,left:a+(g?u*v:0),top:l+(g?c*A:0),opacity:g?0:1}).animate({left:a+(g?0:u*v),top:l+(g?0:c*A),opacity:g?1:0},t.duration||500,t.easing,n)}}(jQuery),/*!
 * jQuery UI Effects Fade 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fade-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(e){e.effects.effect.fade=function(t,i){var n=e(this),s=e.effects.setMode(n,t.mode||"toggle");n.animate({opacity:s},{queue:!1,duration:t.duration,easing:t.easing,complete:i})}}(jQuery),/*!
 * jQuery UI Effects Fold 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fold-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(e){e.effects.effect.fold=function(t,i){var n,s,r=e(this),o=["position","top","bottom","left","right","height","width"],a=e.effects.setMode(r,t.mode||"hide"),l="show"===a,u="hide"===a,c=t.size||15,h=/([0-9]+)%/.exec(c),d=!!t.horizFirst,f=l!==d,p=f?["width","height"]:["height","width"],g=t.duration/2,m={},v={};e.effects.save(r,o),r.show(),n=e.effects.createWrapper(r).css({overflow:"hidden"}),s=f?[n.width(),n.height()]:[n.height(),n.width()],h&&(c=parseInt(h[1],10)/100*s[u?0:1]),l&&n.css(d?{height:0,width:c}:{height:c,width:0}),m[p[0]]=l?s[0]:c,v[p[1]]=l?s[1]:0,n.animate(m,g,t.easing).animate(v,g,t.easing,function(){u&&r.hide(),e.effects.restore(r,o),e.effects.removeWrapper(r),i()})}}(jQuery),/*!
 * jQuery UI Effects Highlight 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/highlight-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(e){e.effects.effect.highlight=function(t,i){var n=e(this),s=["backgroundImage","backgroundColor","opacity"],r=e.effects.setMode(n,t.mode||"show"),o={backgroundColor:n.css("backgroundColor")};"hide"===r&&(o.opacity=0),e.effects.save(n,s),n.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===r&&n.hide(),e.effects.restore(n,s),i()}})}}(jQuery),/*!
 * jQuery UI Effects Pulsate 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/pulsate-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(e){e.effects.effect.pulsate=function(t,i){var n,s=e(this),r=e.effects.setMode(s,t.mode||"show"),o="show"===r,a="hide"===r,l=o||"hide"===r,u=2*(t.times||5)+(l?1:0),c=t.duration/u,h=0,d=s.queue(),f=d.length;for((o||!s.is(":visible"))&&(s.css("opacity",0).show(),h=1),n=1;u>n;n++)s.animate({opacity:h},c,t.easing),h=1-h;s.animate({opacity:h},c,t.easing),s.queue(function(){a&&s.hide(),i()}),f>1&&d.splice.apply(d,[1,0].concat(d.splice(f,u+1))),s.dequeue()}}(jQuery),/*!
 * jQuery UI Effects Scale 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/scale-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(e){e.effects.effect.puff=function(t,i){var n=e(this),s=e.effects.setMode(n,t.mode||"hide"),r="hide"===s,o=parseInt(t.percent,10)||150,a=o/100,l={height:n.height(),width:n.width(),outerHeight:n.outerHeight(),outerWidth:n.outerWidth()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:s,complete:i,percent:r?o:100,from:r?l:{height:l.height*a,width:l.width*a,outerHeight:l.outerHeight*a,outerWidth:l.outerWidth*a}}),n.effect(t)},e.effects.effect.scale=function(t,i){var n=e(this),s=e.extend(!0,{},t),r=e.effects.setMode(n,t.mode||"effect"),o=parseInt(t.percent,10)||(0===parseInt(t.percent,10)?0:"hide"===r?0:100),a=t.direction||"both",l=t.origin,u={height:n.height(),width:n.width(),outerHeight:n.outerHeight(),outerWidth:n.outerWidth()},c={y:"horizontal"!==a?o/100:1,x:"vertical"!==a?o/100:1};s.effect="size",s.queue=!1,s.complete=i,"effect"!==r&&(s.origin=l||["middle","center"],s.restore=!0),s.from=t.from||("show"===r?{height:0,width:0,outerHeight:0,outerWidth:0}:u),s.to={height:u.height*c.y,width:u.width*c.x,outerHeight:u.outerHeight*c.y,outerWidth:u.outerWidth*c.x},s.fade&&("show"===r&&(s.from.opacity=0,s.to.opacity=1),"hide"===r&&(s.from.opacity=1,s.to.opacity=0)),n.effect(s)},e.effects.effect.size=function(t,i){var n,s,r,o=e(this),a=["position","top","bottom","left","right","width","height","overflow","opacity"],l=["position","top","bottom","left","right","overflow","opacity"],u=["width","height","overflow"],c=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],d=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],f=e.effects.setMode(o,t.mode||"effect"),p=t.restore||"effect"!==f,g=t.scale||"both",m=t.origin||["middle","center"],v=o.css("position"),A=p?a:l,y={height:0,width:0,outerHeight:0,outerWidth:0};"show"===f&&o.show(),n={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},"toggle"===t.mode&&"show"===f?(o.from=t.to||y,o.to=t.from||n):(o.from=t.from||("show"===f?y:n),o.to=t.to||("hide"===f?y:n)),r={from:{y:o.from.height/n.height,x:o.from.width/n.width},to:{y:o.to.height/n.height,x:o.to.width/n.width}},("box"===g||"both"===g)&&(r.from.y!==r.to.y&&(A=A.concat(h),o.from=e.effects.setTransition(o,h,r.from.y,o.from),o.to=e.effects.setTransition(o,h,r.to.y,o.to)),r.from.x!==r.to.x&&(A=A.concat(d),o.from=e.effects.setTransition(o,d,r.from.x,o.from),o.to=e.effects.setTransition(o,d,r.to.x,o.to))),("content"===g||"both"===g)&&r.from.y!==r.to.y&&(A=A.concat(c).concat(u),o.from=e.effects.setTransition(o,c,r.from.y,o.from),o.to=e.effects.setTransition(o,c,r.to.y,o.to)),e.effects.save(o,A),o.show(),e.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),m&&(s=e.effects.getBaseline(m,n),o.from.top=(n.outerHeight-o.outerHeight())*s.y,o.from.left=(n.outerWidth-o.outerWidth())*s.x,o.to.top=(n.outerHeight-o.to.outerHeight)*s.y,o.to.left=(n.outerWidth-o.to.outerWidth)*s.x),o.css(o.from),("content"===g||"both"===g)&&(h=h.concat(["marginTop","marginBottom"]).concat(c),d=d.concat(["marginLeft","marginRight"]),u=a.concat(h).concat(d),o.find("*[width]").each(function(){var i=e(this),n={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};p&&e.effects.save(i,u),i.from={height:n.height*r.from.y,width:n.width*r.from.x,outerHeight:n.outerHeight*r.from.y,outerWidth:n.outerWidth*r.from.x},i.to={height:n.height*r.to.y,width:n.width*r.to.x,outerHeight:n.height*r.to.y,outerWidth:n.width*r.to.x},r.from.y!==r.to.y&&(i.from=e.effects.setTransition(i,h,r.from.y,i.from),i.to=e.effects.setTransition(i,h,r.to.y,i.to)),r.from.x!==r.to.x&&(i.from=e.effects.setTransition(i,d,r.from.x,i.from),i.to=e.effects.setTransition(i,d,r.to.x,i.to)),i.css(i.from),i.animate(i.to,t.duration,t.easing,function(){p&&e.effects.restore(i,u)})})),o.animate(o.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){0===o.to.opacity&&o.css("opacity",o.from.opacity),"hide"===f&&o.hide(),e.effects.restore(o,A),p||("static"===v?o.css({position:"relative",top:o.to.top,left:o.to.left}):e.each(["top","left"],function(e,t){o.css(t,function(t,i){var n=parseInt(i,10),s=e?o.to.left:o.to.top;return"auto"===i?s+"px":n+s+"px"})})),e.effects.removeWrapper(o),i()}})}}(jQuery),/*!
 * jQuery UI Effects Shake 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/shake-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(e){e.effects.effect.shake=function(t,i){var n,s=e(this),r=["position","top","bottom","left","right","height","width"],o=e.effects.setMode(s,t.mode||"effect"),a=t.direction||"left",l=t.distance||20,u=t.times||3,c=2*u+1,h=Math.round(t.duration/c),d="up"===a||"down"===a?"top":"left",f="up"===a||"left"===a,p={},g={},m={},v=s.queue(),A=v.length;for(e.effects.save(s,r),s.show(),e.effects.createWrapper(s),p[d]=(f?"-=":"+=")+l,g[d]=(f?"+=":"-=")+2*l,m[d]=(f?"-=":"+=")+2*l,s.animate(p,h,t.easing),n=1;u>n;n++)s.animate(g,h,t.easing).animate(m,h,t.easing);s.animate(g,h,t.easing).animate(p,h/2,t.easing).queue(function(){"hide"===o&&s.hide(),e.effects.restore(s,r),e.effects.removeWrapper(s),i()}),A>1&&v.splice.apply(v,[1,0].concat(v.splice(A,c+1))),s.dequeue()}}(jQuery),/*!
 * jQuery UI Effects Slide 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/slide-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(e){e.effects.effect.slide=function(t,i){var n,s=e(this),r=["position","top","bottom","left","right","width","height"],o=e.effects.setMode(s,t.mode||"show"),a="show"===o,l=t.direction||"left",u="up"===l||"down"===l?"top":"left",c="up"===l||"left"===l,h={};e.effects.save(s,r),s.show(),n=t.distance||s["top"===u?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(s).css({overflow:"hidden"}),a&&s.css(u,c?isNaN(n)?"-"+n:-n:n),h[u]=(a?c?"+=":"-=":c?"-=":"+=")+n,s.animate(h,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&s.hide(),e.effects.restore(s,r),e.effects.removeWrapper(s),i()}})}}(jQuery),/*!
 * jQuery UI Effects Transfer 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/transfer-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(e){e.effects.effect.transfer=function(t,i){var n=e(this),s=e(t.to),r="fixed"===s.css("position"),o=e("body"),a=r?o.scrollTop():0,l=r?o.scrollLeft():0,u=s.offset(),c={top:u.top-a,left:u.left-l,height:s.innerHeight(),width:s.innerWidth()},h=n.offset(),d=e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:h.top-a,left:h.left-l,height:n.innerHeight(),width:n.innerWidth(),position:r?"fixed":"absolute"}).animate(c,t.duration,t.easing,function(){d.remove(),i()})}}(jQuery);