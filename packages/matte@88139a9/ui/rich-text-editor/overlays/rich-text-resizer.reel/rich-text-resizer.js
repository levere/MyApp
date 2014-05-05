var Component=require("montage/ui/component").Component,dom=require("montage/core/dom"),Point=require("montage/core/geometry/point").Point;exports.RichTextResizer=Component.specialize({_isActive:{enumerable:!1,value:!1},_editor:{enumerable:!1,value:null},target:{enumerable:!1,value:null},_draggedElement:{enumerable:!1,value:null},_needsReset:{enumerable:!1,value:!1},initWithEditor:{value:function(e){this._editor=e}},editorMouseDown:{value:function(e){var t=e.target;return this._isActive&&t===this.element?(e.preventDefault(),e.stopPropagation(),!0):void 0}},editorTouchStart:{value:function(e){this.editorMouseDown(e)}},editorMouseUp:{value:function(e){var t=e.target,n=this.target;if(this._observedPointer)return!0;if(t===this.element&&this._editor.activeOverlay==this)this._editor.hideOverlay(),e.target=this.target,e.preventDefault(),e.stopPropagation();else{if("IMG"===t.tagName)return t!==n&&(n&&(n.classList.remove("matte-Resizer-element"),0==n.classList.length&&n.removeAttribute("class")),this.target=t,this._needsReset=!0,this._isActive?this.needsDraw=!0:(this._ignoreNextSelectionchanged=!0,this._editor.showOverlay(this))),e.preventDefault(),e.stopPropagation(),!0;this._editor.activeOverlay==this&&this._editor.hideOverlay()}return!1}},editorTouchEnd:{value:function(e){this.editorMouseUp(e)}},editorSelectionDidChange:{value:function(){return this._ignoreNextSelectionchanged||this._finalizeDrag?this._ignoreNextSelectionchanged=!1:(this._editor.activeOverlay==this&&this._editor.hideOverlay(),this.target=null),!1}},draw:{enumerable:!1,value:function(){var e,t=this.element,n=this.target,i=this._editor.innerElement;if(this._needsReset){var r,a,s=function(e){for(a=e.offsetTop,r=e.offsetLeft;(e=e.offsetParent)&&e!=i;)a+=e.offsetTop,r+=e.offsetLeft};s(n),e=t.style,e.width=n.offsetWidth+"px",e.height=n.offsetHeight+"px",e.top=a+"px",e.left=r+"px",this._editor.innerElement.classList.remove("matte-Editor--resizing"),n.classList.add("matte-Resizer-element"),this.image.src=n.src,this.image.title=n.title,this.image.alt=n.alt,this._selectElement(n),this._needsReset=!1}if(this._draggedElement){var o=(new Point).init(0,0),l=dom.convertPointFromNodeToPage(t,o),c=this._cursorPosition,u=this._draggedElement.getAttribute("data-montage-id").substring("matte-resizer-handle-".length),h=this._resizerFrameInfo,d=h.ratio,p=parseFloat(t.style.height,10),g=parseFloat(t.style.width,10),f=parseFloat(t.style.top,10),m=parseFloat(t.style.left,10),v=15;this._editor.innerElement.classList.add("matte-Editor--resizing"),"n"==u?(p+=l.y-c.y,f=h.top-(p-h.height)):"ne"==u?(p+=l.y-c.y,g=Math.round(p*d),c.x>l.x+g&&(g=c.x-l.x,p=Math.round(g/d)),f=h.top-(p-h.height)):"e"==u?g=c.x-l.x:"se"==u?(p=c.y-l.y,g=Math.round(p*d),c.x>l.x+g&&(g=c.x-l.x,p=Math.round(g/d))):"s"==u?p=c.y-l.y:"sw"==u?(p=c.y-l.y,g=Math.round(p*d),c.x<=l.x-g+t.clientWidth&&(g=t.clientWidth+l.x-c.x,p=Math.round(g/d)),m=h.left-(g-h.width)):"w"==u?(g+=l.x-c.x,m=h.left-(g-h.width)):"nw"==u&&(p+=l.y-c.y,g=Math.round(p*d),c.x<=l.x-g+t.clientWidth&&(g=t.clientWidth+l.x-c.x,p=Math.round(g/d)),f=h.top-(p-h.height),m=h.left-(g-h.width)),p>v&&g>v&&(t.style.height=p+"px",t.style.width=g+"px",t.style.top=f+"px",t.style.left=m+"px")}if(this._finalizeDrag){g=t.clientWidth,p=t.clientHeight,this._editor.innerElement.classList.remove("matte-Editor--resizing"),n.classList.remove("matte-Resizer-element"),0==n.classList.length&&n.removeAttribute("class"),this._selectElement(n);var _,b,y=document.createElement("div");y.appendChild(n.cloneNode(!0)),_=y.firstChild,_.width=g,_.height=p,_.style.removeProperty("width"),_.style.removeProperty("height"),b=_.id,_.id="matte-editor-resized-image",this._editor.execCommand("inserthtml",!1,y.innerHTML,"Resizing Image"),n=document.getElementById(_.id),n&&(void 0!==b&&""!==b?n.id=b:n.removeAttribute("id"),this.target=n,this._needsReset=!0,this.needsDraw=!0),this._finalizeDrag=!1}}},didBecomeActive:{value:function(){this._isActive=!0,this.element.addEventListener(window.Touch?"touchstart":"mousedown",this,!1),window.addEventListener("resize",this,!1)}},didBecomeInactive:{value:function(){var e=this.target;this._isActive=!1,this.element.removeEventListener(window.Touch?"touchstart":"mousedown",this,!1),window.removeEventListener("resize",this,!1),this._draggedElement&&(window.Touch?(document.removeEventListener("touchmove",this),document.removeEventListener("touchend",this)):(document.removeEventListener("mousemove",this),document.removeEventListener("mouseup",this)),this._releaseInterest()),e&&(e.classList.remove("matte-Resizer-element"),0==e.classList.length&&e.removeAttribute("class"),this._editor.markDirty()),this.target=null,this._needsReset=!1,this._draggedElement=null,this._finalizeDrag=!1}},handleResize:{enumerable:!1,value:function(){this._needsReset=!0,this.needsDraw=!0}},handleMousedown:{value:function(e){var t=e.target,n=this.element;t.classList.contains("matte-Resizer-handle")&&(window.Touch?(this._observePointer(t.id),document.addEventListener("touchmove",this),document.addEventListener("touchend",this)):(this._observePointer("mouse"),document.addEventListener("mousemove",this),document.addEventListener("mouseup",this)),this._resizerFrameInfo={width:n.clientWidth,height:n.clientHeight,left:parseInt(n.style.left,10),top:parseInt(n.style.top,10),ratio:n.clientWidth/n.clientHeight},this._cursorPosition={x:e.pageX,y:e.pageY},this._draggedElement=t,e.preventDefault(),e.stopPropagation())}},handleTouchstart:{value:function(e){this.handleMousedown(e)}},handleMousemove:{value:function(e){this._cursorPosition={x:e.pageX,y:e.pageY},this.needsDraw=!0,e.preventDefault(),e.stopPropagation()}},handleTouchmove:{value:function(e){this.handleMousemove(e)}},handleMouseup:{value:function(e){this._draggedElement&&(window.Touch?(document.removeEventListener("touchmove",this),document.removeEventListener("touchend",this)):(document.removeEventListener("mousemove",this),document.removeEventListener("mouseup",this)),this._draggedElement=null,this._finalizeDrag=!0,this.needsDraw=!0,this._releaseInterest(),e.preventDefault(),e.stopPropagation())}},handleTouchend:{value:function(e){this.handleMouseup(e)}},surrenderPointer:{value:function(){return!1}},_observePointer:{value:function(e){this.eventManager.claimPointer(e,this),this._observedPointer=e}},_releaseInterest:{value:function(){this.eventManager.forfeitPointer(this._observedPointer,this),this._observedPointer=null}},_selectElement:{value:function(e){this._ignoreNextSelectionchanged=!0,this._editor.selectElement(e)}}});