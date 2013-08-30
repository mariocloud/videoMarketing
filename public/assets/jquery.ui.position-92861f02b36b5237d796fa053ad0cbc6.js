/*!
 * jQuery UI Position 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
!function(e,t){function i(e,t,i){return[parseFloat(e[0])*(f.test(e[0])?t/100:1),parseFloat(e[1])*(f.test(e[1])?i/100:1)]}function n(t,i){return parseInt(e.css(t,i),10)||0}function s(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var o,r=Math.max,a=Math.abs,l=Math.round,u=/left|center|right/,c=/top|center|bottom/,h=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,f=/%$/,p=e.fn.position;e.position={scrollbarWidth:function(){if(o!==t)return o;var i,n,s=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),r=s.children()[0];return e("body").append(s),i=r.offsetWidth,s.css("overflow","scroll"),n=r.offsetWidth,i===n&&(n=s[0].clientWidth),s.remove(),o=i-n},getScrollInfo:function(t){var i=t.isWindow?"":t.element.css("overflow-x"),n=t.isWindow?"":t.element.css("overflow-y"),s="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,o="scroll"===n||"auto"===n&&t.height<t.element[0].scrollHeight;return{width:o?e.position.scrollbarWidth():0,height:s?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),n=e.isWindow(i[0]);return{element:i,isWindow:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:n?i.width():i.outerWidth(),height:n?i.height():i.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return p.apply(this,arguments);t=e.extend({},t);var o,f,g,m,v,A,y=e(t.of),b=e.position.getWithinInfo(t.within),w=e.position.getScrollInfo(b),x=(t.collision||"flip").split(" "),C={};return A=s(y),y[0].preventDefault&&(t.at="left top"),f=A.width,g=A.height,m=A.offset,v=e.extend({},m),e.each(["my","at"],function(){var e,i,n=(t[this]||"").split(" ");1===n.length&&(n=u.test(n[0])?n.concat(["center"]):c.test(n[0])?["center"].concat(n):["center","center"]),n[0]=u.test(n[0])?n[0]:"center",n[1]=c.test(n[1])?n[1]:"center",e=h.exec(n[0]),i=h.exec(n[1]),C[this]=[e?e[0]:0,i?i[0]:0],t[this]=[d.exec(n[0])[0],d.exec(n[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===t.at[0]?v.left+=f:"center"===t.at[0]&&(v.left+=f/2),"bottom"===t.at[1]?v.top+=g:"center"===t.at[1]&&(v.top+=g/2),o=i(C.at,f,g),v.left+=o[0],v.top+=o[1],this.each(function(){var s,u,c=e(this),h=c.outerWidth(),d=c.outerHeight(),p=n(this,"marginLeft"),A=n(this,"marginTop"),E=h+p+n(this,"marginRight")+w.width,_=d+A+n(this,"marginBottom")+w.height,k=e.extend({},v),S=i(C.my,c.outerWidth(),c.outerHeight());"right"===t.my[0]?k.left-=h:"center"===t.my[0]&&(k.left-=h/2),"bottom"===t.my[1]?k.top-=d:"center"===t.my[1]&&(k.top-=d/2),k.left+=S[0],k.top+=S[1],e.support.offsetFractions||(k.left=l(k.left),k.top=l(k.top)),s={marginLeft:p,marginTop:A},e.each(["left","top"],function(i,n){e.ui.position[x[i]]&&e.ui.position[x[i]][n](k,{targetWidth:f,targetHeight:g,elemWidth:h,elemHeight:d,collisionPosition:s,collisionWidth:E,collisionHeight:_,offset:[o[0]+S[0],o[1]+S[1]],my:t.my,at:t.at,within:b,elem:c})}),t.using&&(u=function(e){var i=m.left-k.left,n=i+f-h,s=m.top-k.top,o=s+g-d,l={target:{element:y,left:m.left,top:m.top,width:f,height:g},element:{element:c,left:k.left,top:k.top,width:h,height:d},horizontal:0>n?"left":i>0?"right":"center",vertical:0>o?"top":s>0?"bottom":"middle"};h>f&&a(i+n)<f&&(l.horizontal="center"),d>g&&a(s+o)<g&&(l.vertical="middle"),l.important=r(a(i),a(n))>r(a(s),a(o))?"horizontal":"vertical",t.using.call(this,e,l)}),c.offset(e.extend(k,{using:u}))})},e.ui.position={fit:{left:function(e,t){var i,n=t.within,s=n.isWindow?n.scrollLeft:n.offset.left,o=n.width,a=e.left-t.collisionPosition.marginLeft,l=s-a,u=a+t.collisionWidth-o-s;t.collisionWidth>o?l>0&&0>=u?(i=e.left+l+t.collisionWidth-o-s,e.left+=l-i):e.left=u>0&&0>=l?s:l>u?s+o-t.collisionWidth:s:l>0?e.left+=l:u>0?e.left-=u:e.left=r(e.left-a,e.left)},top:function(e,t){var i,n=t.within,s=n.isWindow?n.scrollTop:n.offset.top,o=t.within.height,a=e.top-t.collisionPosition.marginTop,l=s-a,u=a+t.collisionHeight-o-s;t.collisionHeight>o?l>0&&0>=u?(i=e.top+l+t.collisionHeight-o-s,e.top+=l-i):e.top=u>0&&0>=l?s:l>u?s+o-t.collisionHeight:s:l>0?e.top+=l:u>0?e.top-=u:e.top=r(e.top-a,e.top)}},flip:{left:function(e,t){var i,n,s=t.within,o=s.offset.left+s.scrollLeft,r=s.width,l=s.isWindow?s.scrollLeft:s.offset.left,u=e.left-t.collisionPosition.marginLeft,c=u-l,h=u+t.collisionWidth-r-l,d="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,f="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,p=-2*t.offset[0];0>c?(i=e.left+d+f+p+t.collisionWidth-r-o,(0>i||i<a(c))&&(e.left+=d+f+p)):h>0&&(n=e.left-t.collisionPosition.marginLeft+d+f+p-l,(n>0||a(n)<h)&&(e.left+=d+f+p))},top:function(e,t){var i,n,s=t.within,o=s.offset.top+s.scrollTop,r=s.height,l=s.isWindow?s.scrollTop:s.offset.top,u=e.top-t.collisionPosition.marginTop,c=u-l,h=u+t.collisionHeight-r-l,d="top"===t.my[1],f=d?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,p="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,g=-2*t.offset[1];0>c?(n=e.top+f+p+g+t.collisionHeight-r-o,e.top+f+p+g>c&&(0>n||n<a(c))&&(e.top+=f+p+g)):h>0&&(i=e.top-t.collisionPosition.marginTop+f+p+g-l,e.top+f+p+g>h&&(i>0||a(i)<h)&&(e.top+=f+p+g))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,n,s,o,r=document.getElementsByTagName("body")[0],a=document.createElement("div");t=document.createElement(r?"div":"body"),n={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(n,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in n)t.style[o]=n[o];t.appendChild(a),i=r||document.documentElement,i.insertBefore(t,i.firstChild),a.style.cssText="position: absolute; left: 10.7432222px;",s=e(a).offset().left,e.support.offsetFractions=s>10&&11>s,t.innerHTML="",i.removeChild(t)}()}(jQuery);