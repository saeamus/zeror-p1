EBMMEval=function(code){eval(code)};var EBMMMenu=function(a){var aq=0;var Q=true;var y=0;var ac=0;var d="mbmcp";var l=1;var i=false;var ai=700;var ae=true;var c=false;var ar=false;var H;var ah;var t;var u=false;var r=false;var ak;var ad;var o;var s;var T=false;var f=0;var U=0;function w(){for(var au=0;au<arguments.length;++au){if(typeof(arguments[au])=="undefined"){return false}}return true}function B(au){return parseInt(au,10)||0}function O(){var av=0;var au=0;if((!document.compatMode||document.compatMode=="CSS1Compat")&&document.documentElement){au=document.documentElement}else{if(document.body){au=document.body}}if(au&&au.clientHeight){av=au.clientHeight}else{if(w(window.innerWidth,window.innerHeight,document.width)){av=window.innerHeight;if(document.width>window.innerWidth){av=av-15}}}return av}function A(){var au=0;var av=0;if((!document.compatMode||document.compatMode=="CSS1Compat")&&document.documentElement){av=document.documentElement}else{if(document.body){av=document.body}}if(av&&av.clientWidth){au=av.clientWidth
}else{if(w(window.innerWidth,window.innerHeight,document.height)){au=window.innerWidth;if(document.height>window.innerHeight){au=au-15}}}return au}function Z(aw,au){if(aw.style&&aw.style[au]){return aw.style[au]}else{try{return aw.currentStyle?aw.currentStyle[au]:getComputedStyle(aw,null)[au]}catch(av){}}return""}function E(aw){var aC=0;var aA=0;var aD=0;var ax=0;var av=aw;var aB=false;if(aw.getBoundingClientRect){var au=aw.getBoundingClientRect();var aE;aC=au.left+(((aE=document.documentElement)||(aE=document.body.parentNode))&&typeof aE.scrollLeft=="number"?aE:document.body).scrollLeft;aA=au.top+(((aE=document.documentElement)||(aE=document.body.parentNode))&&typeof aE.scrollTop=="number"?aE:document.body).scrollTop;aD=au.width;ax=au.height;while(aw&&aw!=null){if(aw.style&&aw.style.position=="fixed"){aB=true}else{try{var az=aw.currentStyle?aw.currentStyle.position:getComputedStyle(aw,null).position;if(az=="fixed"){aB=true}}catch(ay){}}aw=aw.offsetParent}}else{while(aw&&aw!=null){if(aw.style&&aw.style.position=="fixed"){aB=true
}else{try{var az=aw.currentStyle?aw.currentStyle.position:getComputedStyle(aw,null).position;if(az=="fixed"){aB=true}}catch(ay){}}aC+=B(ad?aw.pageX:aw.offsetLeft);aA+=B(ad?aw.pageY:aw.offsetTop);if(ad){if(aw.style&&(aw.style.position=="absolute"||aw.style.position=="relative")){break}}aw=aw.offsetParent}aw=av;if(ah&&!o){aD=aw.style.pixelWidth}else{if(ad){aD=aw.clip.width}else{aD=aw.offsetWidth}}if(ah&&!o){ax=aw.style.pixelHeight}else{if(ad){ax=aw.clip.height}else{ax=aw.offsetHeight}}}return{x:aC,y:aA,w:aD,h:ax,in_fixed:aB}}function X(){var aw=document.getElementById(d+"ebul_wrapper");if(!aw){return 0}var av=aw.parentElement;if(!av){return 0}var au=E(av);return au.w}function j(){var aw=document.getElementById;H=aw&&(navigator.appName=="Netscape");ah=aw&&window.opera;t=document.all&&document.all.item&&!ah;u=false;r=false;if(t){var au=navigator.userAgent;var av=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");if(av.exec(au)!=null){var ax=parseFloat(RegExp.$1);u=(ax<=6);r=(ax<=8)}}ak=t&&document.documentMode>=9;
ad=document.layers;o=ah&&document.readyState;s=("ontouchstart" in document.documentElement||navigator.msMaxTouchPoints)}function I(){var aw=0;var au=0;if(ad||H||ah){au=window.pageXOffset;aw=window.pageYOffset}else{var av=(document.compatMode=="CSS1Compat"&&!H)?document.documentElement:document.body;au=av.scrollLeft;aw=av.scrollTop}return{x:au,y:aw,w:A(),h:O()}}function aa(au,av){if(au&&au.style){if(av==1){au.style.opacity=((navigator.userAgent.indexOf("Gecko")>-1)&&!/Konqueror|Safari|KHTML/.test(navigator.userAgent))?0.999999:1;if(t&&!ak){if(au.style.filter){au.style.filter=au.style.filter.replace(/alpha\([^\)]*\)/gi,"")}}}else{if(av<0.00001){av=0}au.style.opacity=av;if(t&&!ak){au.style.filter=(au.style.filter?au.style.filter.replace(/alpha\([^\)]*\)/gi,""):"")+"alpha(opacity="+av*100+")"}}}}function am(ax,aE,aD){if(ax&&ax.style){try{if(aE>1){aE=1}if(aD>1){aD=1}if(t&&!ak){if(aE==1&&aD==1){ax.style.filter=ax.style.filter.replace(/progid:DXImageTransform.Microsoft.Matrix\([^\)]*\);?/gi,"")
}else{var aw=0;var av=0;if(ax.cbnDirectionX==-1&&ax.cbnMenuRect){aw=ax.cbnMenuRect.w-ax.cbnMenuRect.w*aE}if(ax.cbnDirectionY==-1&&ax.cbnMenuRect){av=ax.cbnMenuRect.h-ax.cbnMenuRect.h*aD}aE=Math.round(aE*100)/100;aD=Math.round(aD*100)/100;ax.style.filter=(ax.style.filter?ax.style.filter.replace(/progid\:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/gi,""):"")+"progid:DXImageTransform.Microsoft.Matrix(sizingMethod='clip to original', M11="+aE+", M12=0, M21=0, M22="+aD+" Dx="+aw+" Dy="+av+")"}}else{var aC="0";var aA="0";if(ax.cbnDirectionX==-1){aC="100%"}if(ax.cbnDirectionY==-1){aA="100%"}if(ax.ebnStyleScaleProperty){au=ax.ebnStyleScaleProperty}else{var au=null;var aB=["transform","MozTransform","WebkitTransform","OTransform","msTransform"];for(var ay=0;ay<aB.length;ay++){if(ax.style[aB[ay]]!=null){au=aB[ay];break}}ax.ebnStyleScaleProperty=au}if(au!=null){if(aE==1&&aD==1){ax.style[au]=""}else{ax.style[au]="scale("+aE+","+aD+")";ax.style[au+"Origin"]=aC+" "+aA}}}}catch(az){}}}function x(au){am(au,1,1)
}function ag(av,au){if(av.ebmScaleEffect==1){am(av,1,au)}else{if(av.ebmScaleEffect==2){am(av,au,au)}else{if(av.ebmScaleEffect==3){am(av,au,1)}}}}function an(au){var av=setTimeout(function(){al(au)},550);return av}function aj(av){var aw;for(var au=av;au;au=au.openSubmenuDiv){aw=au;if(!au.ticker){au.ticker=an(aw)}}}function ao(av){for(var au=av;au;au=au.upperTR?au.upperTR.menuDiv:0){if(au.ticker){clearTimeout(au.ticker);au.ticker=0}}}function N(av,aD,aC,ax,aB,aA,ay){var au=5;var az=aC;var aE=aB;var aw=aA;if(aE>aD-2*au&&aD>0){az=au+av;aE=aD-2*au}else{if(aw==-1){az=aC+ax-aE+ay}else{az=aC}if(az<av+au){az=av+au;aw=1}if(az+aB>aD+av-au&&aD>0){az-=az+aE-(aD+av-au);aw=-1}}return{y:az,direction:aw,size:aE}}function P(aw,ax,aC,aE,av,aB,az){var au=5;var aA=aC;var aD=av;var ay=aB;if(((ay>=0)&&(aC+aE+av>ax+aw-au))||((ay<0)&&(aC-av<au))){if(aC-aw>ax+aw-(aC+aE)&&ax>0){ay=-1}else{ay=1}}if(ay>=0){aA=aC+aE;if(ax+aw-au-aA<aD&&ax>0){aD=ax+aw-au-aA}}else{aA=aC-aD+az;if(aA-aw<au){aA=aw+au;aD=aC-(aw+au)}}return{x:aA,direction:ay,size:aD}
}function af(av){if(av){var au=new Date().getTime();var ax=au-av.cbnLastAnimTime;var aw=ax/200;if(aw<0.05||av.cbnTransitionProgress==0){aw=0.05}av.cbnTransitionProgress=aw;if(av.cbnTransitionProgress>1){av.cbnTransitionProgress=1}if(av.ebmFadeEffect){var ay=av.cbnTransitionProgress;if(av.cbnMenuAlpha&&ay>av.cbnMenuAlpha){ay=av.cbnMenuAlpha}aa(av,ay)}if(av.ebmScaleEffect>0){ag(av,av.cbnTransitionProgress)}if(av.cbnTransitionProgress>=1){clearInterval(av.ebmFadeTimer);av.ebmFadeTimer=null}}}var ap=function(){c=false;ar=false;if(p==L&&L.closeHamburgerMenu){L.closeHamburgerMenu()}else{if(p){al(p)}}};function q(){if(EditMode){if(DMenuEditor&&DMenuEditor.itemClicked){DMenuEditor.itemClicked(null,false,false,false)}if(EBMMMenu.setSelection){EBMMMenu.setSelection([],[])}}else{document.onclick=e;document.ontouchstart=at;if(m){m.onclick=null;m.ontouchstart=null}}ap();return false}function C(au){if(!au){var au=window.event}au.cancelBubble=true;if(au.stopPropagation){au.stopPropagation()}}function h(){if(s||T||EditMode){if(document.onclick!=q){e=document.onclick;
at=document.ontouchstart;document.onclick=q;document.ontouchstart=q;m.onclick=C;m.ontouchstart=C;V.onclick=C;V.ontouchstart=C}}}function D(au){if(!EditMode||!EBMMMenu.CanCloseSubmenu){return true}return EBMMMenu.CanCloseSubmenu(au)}function J(av){if(!av.isHamburgerMenuItem&&!T){var au=1;if(av.assocmenu){if(!av.assocmenu.depth){au=av.ebmMenuDirection}M(av.assocmenu,av,au,true)}}else{if(av.isHamburgerMenuItem&&T){if(p!=L){n(L,[],"slide-in",true);n(L,[],"slide-out",true);if(L.openHamburgerMenu){L.openHamburgerMenu()}}while(av&&av.isHamburgerMenuItem&&av.makeLiActiveAndExpanded){av.makeLiActiveAndExpanded(av);av=av.parentNode;if(av){av=av.parentNode}}}}}function M(aB,aw,az,aD){var ay=aB;if(ay&&ay.style){if(!ay.depth&&(p!=ay)){al(p);if(p){return false}}if(aw&&aw.menuDiv&&aw.menuDiv.openSubmenuDiv&&aw.menuDiv.openSubmenuDiv!=ay){al(aw.menuDiv.openSubmenuDiv);if(aw.menuDiv.openSubmenuDiv.isOpen){return false}}if(EditMode&&EBMMMenu.movinghandle_resizer_handle){return false}h();if(ay.style.display=="block"){ao(ay);
return}ay.style.display="block";ay.style.left="0px";ay.style.top="0px";ay.style.height="auto";ay.style.width="auto";ay.isOpen=true;ao(ay);if(aw.makeExpanded){aw.makeExpanded()}if(ay.depth>0){ay.cbnDirectionX=ay.upperTR.menuDiv.cbnDirectionX;ay.cbnDirectionY=ay.upperTR.menuDiv.cbnDirectionY}else{ay.cbnDirectionX=ay.cbnDefaultDirectionX;ay.cbnDirectionY=1}ay.style.overflow="visible";var av=aw;if(av.tagName&&av.tagName.toLowerCase()=="a"){av=av.parentNode}var au=E(av);var aC=0;var aE=E(ay);var aA=I();if(aE.in_fixed){aA.x=0;aA.y=0}var ax;if(az){ax=N(aA.y,aA.h,au.y,au.h,aE.h,ay.cbnDirectionY,0)}else{ax=P(aA.y,aA.h,au.y,au.h,aE.h,ay.cbnDirectionY,0);ax.y=ax.x}ay.cbnDirectionY=ax.direction;ay.style.top=ax.y-aE.y+"px";aE=E(ay);if(az){ax=P(aA.x,aA.w,au.x,au.w,aE.w,ay.cbnDirectionX,aC)}else{ax=N(aA.x,aA.w,au.x,au.w,aE.w,ay.cbnDirectionX,aC);ax.x=ax.y}ay.cbnDirectionX=ax.direction;if((ax.size<aE.w)&&(ay.cbnDirectionX>0)){ax.x=ax.x-(aE.w-ax.size)}ay.style.left=ax.x-aE.x+"px";ay.cbnMenuRect={w:aE.w,h:aE.h,x:ax.x-aE.x,y:ax.y-aE.y};
if((ay.ebmFadeEffect||y>0)&&!aD){if(!ay.ebmFadeTimer){if(ay.ebmFadeEffect){aa(ay,0.05)}if(ay.ebmScaleEffect>0){ag(ay,0.05)}ay.cbnTransitionProgress=0;ay.cbnLastAnimTime=new Date().getTime();ay.ebmFadeTimer=setInterval(function(){af(ay)},20)}}else{if(aD){if(aq){aa(ay,aq)}else{aa(ay,1)}}}if(!ay.depth){p=ay}else{aw.menuDiv.openSubmenuDiv=ay}if(EditMode){if(DMenuEditor&&DMenuEditor.submenuOpen){DMenuEditor.submenuOpen(aw.id)}}ay.style.display="block"}}function al(aw){var av=aw;if(av&&(av.style.display=="block")){if(!D(av.upperTR)){return false}if(EditMode){if(DMenuEditor&&DMenuEditor.submenuClose&&av.upperTR&&av.upperTR.id){DMenuEditor.submenuClose(av.upperTR.id)}}if(av==p){p=null}if(av.openSubmenuDiv){al(av.openSubmenuDiv)}if(av.upperTR&&av.upperTR.className){av.upperTR.makeNormal()}av.style.display="none";av.openSubmenuDiv=0;av.isOpen=false;var au=av.firstChild;while(au){if(au.unHighlight){au.unHighlight()}au=au.nextSibling}if(av.ticker){clearTimeout(av.ticker);av.ticker=null}if(av.ebmFadeEffect||av.ebmScaleEffect){if(av.ebmFadeEffect){aa(av,0)
}if(y>0){x(av)}if(av.ebmFadeTimer){clearTimeout(av.ebmFadeTimer);av.ebmFadeTimer=null}}}}function n(ax,az,ay,aw){if(aw){ax.className=ax.className.replace(" "+ay,"")}else{if(ax.className.indexOf(ay)==-1){ax.className+=" "+ay}}for(var av=0;av<az.length;av++){var au=ax.firstChild;while(az[av]&&au){if(au.nodeName.toLowerCase()==az[av]){n(au,az,ay,aw)}au=au.nextSibling}}}function S(au,ay,aL,av,aJ){var aH=/^([a-zA-Z]*?\:\/\/)?[^\(\)\:]*?(\?.*)?$/;var aC=/^(javascript\:)/;var aE=au.firstChild;var aF=0;while(aE){if(aE.nodeName.toLowerCase()=="li"){aF++;if(EditMode){if(aL!=0){aE.id=ay.id+"_"+aF}else{aE.id="item_"+aF}}if(aL!=0){if(EditMode){function aK(aN,aO){if(!aO){var aO=window.event}aO.cancelBubble=true;if(aO.stopPropagation){aO.stopPropagation()}if(DMenuEditor&&DMenuEditor.itemClicked){DMenuEditor.itemClicked(aN,aO.shiftKey,aO.ctrlKey,aO.altKey)}return aO}aE.onclick=function(aN){aN=aK(this,aN);return false};aE.oncontextmenu=function(aN){aN=aK(this,aN)}}var aw=aE.firstChild;while(aw){if(aw.nodeName.toLowerCase()=="a"){if(aw.href&&(!aw.target||aw.target.toLowerCase()=="_self")){if(EditMode){aw.href="javascript:;"
}else{aw.onclick=function(aN){if(!aN){var aN=window.event}aN.cancelBubble=true;if(aN.stopPropagation){aN.stopPropagation()}if(c){if(ar){ar=false;return false}}}}if(aw.href.match(aH)&&!EditMode){aE.rowClickLink=aw.href;aE.onclick=function(){if(c){if(ar){ar=false;return false}}window.location.href=this.rowClickLink;return false}}else{if(aw.href.match(aC)&&!EditMode){aE.rowClickLink=aw.href;aE.onclick=function(){if(c){if(ar){ar=false;return false}}c=false;ar=false;EBMMEval(this.rowClickLink)}}}}else{if(!aw.href&&!EditMode){aE.onclick=function(aN){if(!aN){var aN=window.event}aN.cancelBubble=true;if(aN.stopPropagation){aN.stopPropagation()}if(c){if(ar){ar=false;return false}}}}else{if(aw.href&&aw.target&&!EditMode){aE.onclick=function(aN){if(!aN){var aN=window.event}aN.cancelBubble=true;if(aN.stopPropagation){aN.stopPropagation()}if(c){if(ar){ar=false;return false}}ap()}}}}}aw=aw.nextSibling}}else{n(aE,["a","div"],"topitem",false)}if(aL!=0){var ax=function(){if(this.parentNode){var aN=this.parentNode.firstChild;
while(aN){if(aN.unHighlight){aN.unHighlight()}aN=aN.nextSibling}}n(this,["a"],"subitemhot",false);if(this.assocmenu){if(this.assocmenu.style&&this.assocmenu.style.display!="block"){ar=true}M(this.assocmenu,this,1,false);if(this.assocmenu.isOpen){this.makeExpanded()}}else{if(EditMode){if(this.menuDiv&&this.menuDiv.openSubmenuDiv){al(this.menuDiv.openSubmenuDiv)}}}};if(s&&"ontouchstart" in window){aE.ontouchstart=ax}aE.onmouseover=ax;aE.onmouseout=function(){this.unHighlight();if(this.assocmenu&&!c&&!EditMode){G(this.assocmenu)}};aE.unHighlight=function(){n(this,["a"],"subitemhot",true)};aE.makeExpanded=function(){n(this,["a"],"subexpanded",false)};aE.makeNormal=function(){n(this,["a"],"subexpanded",true)}}else{var aB=null;var aw=aE.firstChild;while(aw){if(aw.nodeName.toLowerCase()=="a"){aB=aw}aw=aw.nextSibling}if(aB){aB.parentli=aE;var aI=false;var aA=false;var aM=aB.firstChild;while(aM){if(aM.nodeName.toLowerCase()=="img"){if(aM.className=="normalbutton"){aB.imgNormal=aM;aB.imgNormalSrc=aM.src
}if(aM.className=="hoverbutton"){aB.imgOverSrc=aM.src;aI=aM}if(aM.className=="downbutton"){aB.imgDownSrc=aM.src;aA=aM}}aM=aM.nextSibling}if(aI){aB.removeChild(aI)}if(aA){aB.removeChild(aA)}aB.makehot=function(){n(this.parentli,["a","div"],"itemhot",false);if(this.imgNormal&&this.imgOverSrc){var aN=this.imgOverSrc;if(t&&(window.location.protocol!="file:")){aN+="#"}this.imgNormal.src=aN}};aB.makenormal=function(){n(this.parentli,["a","div"],"itemhot",true);n(this,["a","div"],"itemdown",true);if(this.imgNormal&&this.imgNormalSrc){this.imgNormal.src=this.imgNormalSrc}};aB.makedown=function(){n(this,["a","div"],"itemdown",false);if(this.imgNormal&&this.imgDownSrc){this.imgNormal.src=this.imgDownSrc}};aB.makeup=function(){n(this,["a","div"],"itemdown",true);if(this.imgNormal&&this.imgOverSrc){this.imgNormal.src=this.imgOverSrc}else{if(this.imgNormal&&this.imgNormalSrc){this.imgNormal.src=this.imgNormalSrc}}};if(s&&"ontouchstart" in window){aB.ontouchstart=aB.makedown;aB.ontouchend=aB.makeup}aB.onmouseover=aB.makehot;
aB.onmouseout=aB.makenormal;aB.onmousedown=aB.makedown;aB.onmouseup=aB.makeup}else{aB=K(aE)}if(EditMode){if(aB.href){aB.href="javascript:;"}aE.onclick=function(aN){if(!aN){var aN=window.event}if(DMenuEditor&&DMenuEditor.itemClicked){DMenuEditor.itemClicked(this,aN.shiftKey,aN.ctrlKey,aN.altKey)}};aE.oncontextmenu=aE.onclick}if(aB){if(s){aB.onclick=function(){if(ar){ar=false;return false}};var az=function(aN){c=true};if(window.navigator.msPointerEnabled){aB.addEventListener("MSPointerDown",az)}aB.addEventListener("touchstart",az)}}var aG=function(){if(this.assocmenu){if(this.assocmenu.style&&this.assocmenu.style.display!="block"){ar=true}b(this.assocmenu,this.ebmMenuDirection,this)}else{if(!s){this.makeExpanded();if(EditMode){ap()}}}};if(s&&"ontouchstart" in window){aE.ontouchstart=aG}aE.onmouseover=aG;aE.onmouseout=function(){if(this.assocmenu&&!c&&!EditMode){G(this.assocmenu)}else{if((EditMode&&!this.assocmenu)||(EditMode&&this.assocmenu&&!this.assocmenu.isOpen)||(!s&&!EditMode)){this.makeNormal()
}}};aE.makeExpanded=function(){n(this,["a","div"],"expanded",false)};aE.makeNormal=function(){n(this,["a","div"],"expanded",true)}}aE.menuDiv=au;var aD=aE.firstChild;while(aD){if(aD.nodeName.toLowerCase()=="ul"){aD.onmouseout=function(){if(!c&&!EditMode){G(this)}};aD.onmouseover=function(){Y(this)};aD.ebmFadeEffect=Q;if(aL==0){aD.cbnMenuAlpha=aq}if(Q){aa(aD,0)}else{if(aq){aa(aD,aD.cbnMenuAlpha)}}aD.ebmScaleEffect=y;if(y>0){x(aD)}aD.cbnDefaultDirectionX=l;aD.upperTR=aE;aD.depth=aL;aD.openSubmenuDiv=0;aE.assocmenu=aD;aE.ebmMenuDirection=ac;S(aD,aE,aL+1,av,aJ);break}aD=aD.nextSibling}}aE=aE.nextSibling}}function F(aw,aA,aS){function aQ(aT,aU){if(DMenuEditor&&DMenuEditor.itemClicked){DMenuEditor.itemClicked(aT,aU.shiftKey,aU.ctrlKey,aU.altKey)}return aU}var aL=/^([a-zA-Z]*?\:\/\/)?[^\(\)\:]*?(\?.*)?$/;var aF=/^(javascript\:)/;var aH=aw.firstChild;var aJ=0;if(aS==0){aJ--}while(aH){if(aH.nodeName.toLowerCase()=="li"){aJ++;aH.isHamburgerMenuItem=true;if(EditMode){if(aS!=0){aH.id=aA.id+"_"+aJ}else{aH.id="hamitem_"+aJ
}}if(aS==0){n(aH,[],"gradient_menuitem",false)}else{}var ax=aH.firstChild;var aE="";while(ax){if(ax.nodeName.toLowerCase()=="div"){if(ax.className.substr(0,5)==="icon_"){aE=ax.className}if(aH.className=="separator"&&EditMode){aH.onclick=function(aT){if(this){aT=aQ(this,aT)}return false};aH.oncontextmenu=function(aT){if(this){aT=aQ(this,aT)}}}var aB=ax.firstChild;if(aB){aH.insertBefore(aB,ax);aH.removeChild(ax)}ax=aB;continue}if(ax.nodeName.toLowerCase()=="a"){ax.liElem=aH;var aM=parseInt(Z(ax,"paddingLeft"),10);if(aS>0){ax.style.paddingLeft=(aS*20+aM)+"px";if(aA&&aA.firstChild&&aA.firstChild.nodeName.toLowerCase()=="a"){var az=aA.firstChild;var aR=parseInt(Z(az,"paddingLeft"),10);if(aR){ax.style.paddingLeft=(aR+20)+"px"}}}if(aS>0||aJ>0){ax.innerHTML='<span class="hamburger-link-content">'+ax.innerHTML+"</span>"}if(EditMode){ax.href="javascript:;";ax.onclick=function(aT){if(this.liElem){aT=aQ(this.liElem,aT)}return false};ax.oncontextmenu=function(aT){if(this.liElem){aT=aQ(this.liElem,aT)
}}}else{ax.onclick=function(aT){if(this.liElem&&this.liElem.assocmenu&&!this.liElem.assocmenu.isOpen){return false}else{if(!aT){var aT=window.event}aT.cancelBubble=true;if(aT.stopPropagation){aT.stopPropagation()}if(!EditMode&&this.target){L.closeHamburgerMenu()}return true}};aH.onclick=function(aT){if(!aT){var aT=window.event}aT.cancelBubble=true;if(aT.stopPropagation){aT.stopPropagation()}return false}}if(aS==0&&aE){var aI=document.createElement("div");aI.className=aE+" hamburger-topmenu-icon";ax.insertBefore(aI,ax.firstChild);ax.className=ax.className+aE;var av=/\bwith_(img_([0-9]+))\b/g;var aD=av.exec(aE);if(aD){var aN=aD[1];var aP=/\bimg_([0-9]+)\b/g;var aK=aP.exec(aw.className);if(aK){if(aK[1]<aD[2]){n(aw,[],aK[0],true);n(aw,[],aD[1],false)}}else{n(aw,[],aD[1],false)}}}}ax=ax.nextSibling}var ay=function(){if(this.parentNode){var aT=this.parentNode.firstChild;while(aT){if(aT.unHighlight){aT.unHighlight()}aT=aT.nextSibling}}n(this,["a"],"subitemhot",false)};var aC=function(){ay.call(this);
if(this.assocmenu){if(this.assocmenu.style&&this.assocmenu.style.display!="block"){ar=true}M(this.assocmenu,this,1,false);if(this.assocmenu.isOpen){this.makeExpanded()}}};aH.makeLiActiveAndExpanded=aC;aH.onmouseover=ay;aH.onmouseout=function(){this.unHighlight()};if(typeof aH.onclick!=="function"){aH.onclick=aC}else{var au=aH.onclick;aH.onclick=function(aU){var aT=(this.assocmenu&&this.assocmenu.isOpen);aC.call(this,aU);if(aT||!this.assocmenu){return au.call(this,aU)}else{return false}}}aH.unHighlight=function(){n(this,["a"],"subitemhot",true)};aH.makeExpanded=function(){n(this,["a"],"subexpanded",false);L.setLastVisibleItemClass()};aH.makeNormal=function(){n(this,["a"],"subexpanded",true)};aH.menuDiv=aw;var aG=aH.firstChild;while(aG){if(aG.nodeName.toLowerCase()=="ul"){aG.onmouseout=function(){};aG.onmouseover=function(){};if(aq){aa(aG,aq)}aG.cbnDefaultDirectionX=l;aG.upperTR=aH;aG.depth=9999;aG.openSubmenuDiv=0;aG.style.display="none";aH.assocmenu=aG;aH.ebmMenuDirection=ac;n(aH,["a"],"with_arrow",false);
var aO=K(aH);if(aO){var aI=document.createElement("div");aI.className="with_arrow";aO.appendChild(aI)}F(aG,aH,aS+1);break}aG=aG.nextSibling}}aH=aH.nextSibling}}function b(ax,av,aw){var au=ax;if(au&&au.style){aw.makeExpanded();ao(p);M(au,aw,av)}}function G(au){if(au){aj(p)}}function Y(au){if(au){ao(au)}}function K(au){if(!au){return null}if(au.nodeName&&au.nodeName.toLowerCase()=="a"){return au}else{return K(au.firstChild)}}function k(av,ax){if(!av){return null}if(av.nodeName&&av.nodeName.toLowerCase()==ax){return av}else{var au=av.firstChild;var aw=null;while(aw==null&&au!=null){aw=k(au,ax);au=au.nextSibling}return aw}}function z(au){if(m&&V){if(au){m.style.display="none";V.style.display="";T=true}else{m.style.display="";V.style.display="none";al(L);T=false}}}var v=function(aD){aq=aD.MenuAlpha;Q=aD.FadeEffect;y=aD.ScaleEffect;ac=aD.MenuDirection;d=aD.MenuName;l=aD.DefaultDirectionX;i=aD.HamburgerEnabled;ai=aD.HamburgerFromWidth;ae=aD.HamburgerAtPageTop;EditMode=aD.em;p=null;j();if(H&&!aq&&!Q){aq=1
}if(r){aq=0}var av=document.getElementById(d+"ebul_wrapper");if(av){n(av,[],"scripted",false);if(t){if(document.compatMode=="BackCompat"||document.compatMode=="Quirks"){n(av,[],"quirks",false)}}}var aG=document.getElementsByTagName("ul");var ax=false;for(var az=0;az<aG.length;az++){if(aG[az].id&&aG[az].id==d+"ebul_table"&&aG[az].className.substr(0,d.length+13)==d+"ebul_menulist"){ax=true;if(u){aG[az].style.overflow="hidden"}m=aG[az];var aE=aG[az].innerHTML;S(aG[az],0,0,d+"ebul_menulist","ebul_"+d+"_mdiv");aG[az].className=aG[az].className.replace("css_menu","");L=document.createElement("ul");L.innerHTML=aE;L.className="mb_burger_top_level gradient_menu slide-in";L.style.display="none";L.id=d+"ebul_hamburger_menu";var aB=document.createElement("li");var aA=k(L,"li");var au=document.createElement("a");au.className="hamburger_close_button";au.innerHTML='<div class="hamburger_close_button"></div>';aB.appendChild(au);L.insertBefore(aB,L.firstChild);if(aA){aA.className=" "+aA.className;n(aA,[],"first_button",true);
var aw=null;var aF=aA;while(aF){if(aF.nodeName&&aF.nodeName.toLowerCase()=="li"){aw=aF}if(aF.className){aF.className=aF.className.replace("last_button","")}aF=aF.nextSibling}if(aw){n(aw,[],"last_item",false)}}n(aB,["a"],"first_item first_visible_item",false);V=document.createElement("ul");V.className=d+"ebul_menulist";V.id=d+"ebul_table_burger";V.style.display="none";R=document.createElement("li");R.className="hamburger_button topitem first_button last_button";V.appendChild(R);R.innerHTML='<div class="buttonbg gradient_button"><a><div class="hamburger_icon">&nbsp;</div></a></div>';R.appendChild(L);R.firstChild.firstChild.onclick=function(){if(p==L&&L.closeHamburgerMenu){L.closeHamburgerMenu()}else{if(L.openHamburgerMenu){L.openHamburgerMenu()}}return false};aG[az].parentElement.appendChild(V);F(L,0,0);L.closeanimationended=function(){al(L);n(L,[],"slide-in",false);n(L,[],"slide-out",true);L.removeEventListener("animationend",L.closeanimationended);L.removeEventListener("webkitAnimationEnd",L.closeanimationended)
};L.closeHamburgerMenu=function(){n(L,[],"slide-in",true);n(L,[],"slide-out",false);L.addEventListener("animationend",L.closeanimationended,false);L.addEventListener("webkitAnimationEnd",L.closeanimationended,false)};L.openHamburgerMenu=function(){if(!ae&&!L.style.top){var aH=E(R);L.style.cssText=L.style.cssText+("; top: "+(aH.y+aH.h)+"px !important")}L.style.display="block";p=L;h();L.setLastVisibleItemClass()};L.setLastVisibleItemClass=function(){function aI(aK,aJ,aL){while(aK){if(aK.nodeName){if(aJ){if(aK.style&&aK.style.display=="none"){aJ=false}}aL(aK,aJ)}aI(aK.firstChild,aJ,aL);aK=aK.nextSibling}}var aH=null;aI(L,true,function(aK,aJ){if(aK.nodeName.toLowerCase()=="li"){n(aK,["a"],"last_visible_item",true);if(aJ){aH=aK}}});if(aH){n(aH,["a"],"last_visible_item",false)}};au.onclick=function(){L.closeHamburgerMenu();return false};aB.onclick=function(){return false}}}if(!ax){var ay=null;if(window.onload){ay=window.onload}window.onload=function(){v(aD);if(ay){ay()}};return false}var aC=function(){ab=null;
var aJ=document.getElementById(d+"ebul_table");var aL=document.getElementById(d+"ebul_wrapper");var aI=true;var aK=-99;if(i&&ai!=-1){if(ai==0||A()<ai){if(!T){z(true)}}else{if(T){z(false)}}}if(aJ&&aL){if((f&&A()>f+5)||(U&&X()>U+5)){if(T){z(false)}}var aH=aJ.firstChild;while(aH){if(aH.nodeName.toLowerCase()=="li"){if(aK!=-99&&aK!=aH.offsetTop){aI=false}aK=aH.offsetTop}aH=aH.nextSibling}if(i&&ai==-1){if(!aI&&!T){f=A();U=X();z(true)}}else{if(aI){n(aL,[],"centeritems",true)}else{if(!T){n(aL,[],"centeritems",false)}}}}};g=window.onresize;aC();window.onresize=function(){if(g!=null&&typeof(g)=="function"&&!EditMode){g()}if(ab==null){ab=setTimeout(aC,50)}if(EditMode&&EBMMMenu.onEditResize){EBMMMenu.onEditResize()}};if(EditMode){h()}if(EditMode){this.openSubmenuInstantly=J}};var m=null;var p=0;var e=null;var at=null;var ab=null;var g=null;var V=null;var R=null;var L=null;var W={init:v,hide:ap,isHamburger:function(){return T}};return W}();EBMMMenu.init({
 MenuAlpha: 0,
 FadeEffect: true,
 ScaleEffect: 1,
 MenuDirection: 0,
 MenuName: "mbmcp",
 DefaultDirectionX: 1,
 HamburgerEnabled: true,
 HamburgerFromWidth: -1,
 HamburgerAtPageTop: false
});
// Created with Easy CSS Menu
