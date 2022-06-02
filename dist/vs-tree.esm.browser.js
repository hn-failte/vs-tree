function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var o,h=function(e,t){var i=t.store.slots[e];if(i){var n=i.node.cloneNode(!0);n.classList.add("vs-tree-text"),n.setAttribute("tree-node-id",t.id),t.__buffer={};var a="\n        var ".concat(i.scope," = _;\n      ");return i.text.replace(i.interpolate,(function(e,t){a+="_.__buffer['".concat(e,"'] = ").concat(t,";")})),new Function("_",a).call(t,t),n.innerText=n.innerText.replace(i.interpolate,(function(e){return t.__buffer[e]})).replace(/\n/g,""),n}return!1},d=0,c=function(){function i(n){if(t(this,i),this.id=d++,this.checked=!1,this.expanded=!1,this.indeterminate=!1,this.visbile=!1,this.disabled=!1,this.loaded=!1,this.isLeaf=!1,this.level=0,this.childNodes=[],this.store=n.store,this.parent=n.parent,this.originData=n.data,this.__buffer={},this.data=Object.assign({},n.data),"function"==typeof this.store.format&&!n.data._vsroot){var a=this.store.format(Object.assign({},n.data),this);if("object"!==e(a))throw new Error("format must return object! \nformat: function(data) {\n  return {id, name, children, isLeaf}\n}");for(var s=["id","name","children","isLeaf","icon","extra"],r=0,o=s.length;r<o;r++)Object.prototype.hasOwnProperty.call(a,s[r])&&(this.data[s[r]]=a[s[r]])}this.store.checkInherit&&this.parent&&(this.checked=this.parent.checked),this.store.disabledInherit&&this.parent&&(this.disabled=this.parent.disabled),this.store.expandKeys.includes(this.data.id)&&(this.expanded=!0),this.store.disabledKeys.includes(this.data.id)&&(this.disabled=!0),this.parent&&(this.level=this.parent.level+1),this.data&&this.setData(this.data),this.initData()}return n(i,[{key:"initData",value:function(){var e;!(this.level>this.store.expandLevel&&-1!==this.store.expandLevel)||null!==(e=this.parent)&&void 0!==e&&e.expanded?this.visbile=!0:this.visbile=!1}},{key:"createNode",value:function(){var e=this;if(this.dom)return this.checkboxNode&&(this.checkboxNode.checked=this.checked),this.radioNode&&(this.radioNode.checked=this.checked),this.indeterminate&&this.dom.classList.add("is-indeterminate"),this.dom;var t=document.createElement("div");t.className="vs-tree-node",t.setAttribute("vs-index",this.id),this.indeterminate&&t.classList.add("is-indeterminate"),!this.isLeaf&&this.childNodes.length&&t.setAttribute("vs-child",!0),t.appendChild(this.createInner());var i=h("append",this);return i?t.appendChild(i):this.store.renderContent&&t.appendChild(this.createContent()),t.addEventListener("click",(function(i){i.stopPropagation(),e.store.highlightCurrent&&(e.store.selectedCurrent&&e.store.selectedCurrent.dom.classList.remove("selected"),t.classList.add("selected")),!e.store.checkOnClickNode||e.disabled||e.store.breadcrumb&&!e.isLeaf||e.handleCheckChange({target:{checked:!e.checked}}),e.store.selectedCurrent=e,e.store.breadcrumb&&!e.isLeaf&&(e.store.breadcrumb.list.push(e),e.setExpand(!0)),e.store.click(i,e)}),{passive:!1}),t.addEventListener("contextmenu",(function(t){e.store.contextmenu&&"function"==typeof e.store.contextmenu&&(t.stopPropagation(),t.preventDefault(),e.store.contextmenu(t,e))})),this.store.draggable&&this.createDragable(t),this.dom=t,t}},{key:"createInner",value:function(){var e=document.createElement("div");e.className="vs-tree-inner";var t,i=this.level+(this.store.hideRoot?-1:0);if(this.store.breadcrumb&&(i=0),this.store.showLine)for(var n=0;n<i;n++){var a=document.createElement("span");a.className="vs-indent-unit",e.appendChild(a)}else e.style.paddingLeft=i*this.store.indent+"px";if(this.store.breadcrumb)this.loadingEl=document.createElement("span"),this.loadingEl.className="vs-loading-unit",e.appendChild(this.loadingEl);else{var s;if(this.store.strictLeaf)t=this.isLeaf?this.createExpandEmpty():this.createExpand();else t=(null!==(s=this.childNodes)&&void 0!==s&&s.length||this.store.lazy)&&!this.isLeaf?this.createExpand():this.createExpandEmpty();e.appendChild(t)}return(this.store.showCheckbox||this.store.showRadio)&&(!this.store.nocheckParent||this.isLeaf&&!this.childNodes.length)&&e.appendChild(this.createCheckbox()),this.store.showIcon&&(this.store.onlyShowLeafIcon&&this.childNodes.length&&!this.isLeaf||e.appendChild(this.createIcon())),e.appendChild(this.createText()),e}},{key:"cusmtomNode",value:function(e,t){var i=this,n=document.createElement(e);return t.text&&(n.innerText=t.text),t.className&&(n.className=t.className),t.children&&t.children.forEach((function(e){n.appendChild(e)})),"function"==typeof t.click&&n.addEventListener("click",(function(e){e.stopPropagation(),t.click(e,i)}),{passive:!1}),n}},{key:"createContent",value:function(){var e=this.store.renderContent(this.cusmtomNode.bind(this),this);return e?(e.addEventListener("click",(function(e){e.stopPropagation()}),{passive:!1}),e):document.createElement("span")}},{key:"createExpandEmpty",value:function(){var e=document.createElement("span");return e.className="expand-empty "+this.store.expandClass,e}},{key:"createExpand",value:function(){var e=this,t=document.createElement("span");return t.className="expand "+this.store.expandClass,(this.level<this.store.expandLevel||-1===this.store.expandLevel||this.expanded)&&(t.classList.add("expanded"),this.expanded=!0),t.addEventListener("click",(function(i){if(i.stopPropagation(),!e.loading){var n=!t.classList.contains("expanded");e.setExpand(n)}}),{passive:!1}),this.expandEl=t,t}},{key:"createCheckbox",value:function(){var e=this,t="checkbox";this.store.showRadio&&(t="radio");var i=document.createElement("label");i.className="vs-".concat(t);var n=document.createElement("span");n.className="vs-".concat(t,"__inner");var a=document.createElement("input");return a.type=t,a.checked=this.checked,a.disabled=this.disabled,a.className="vs-".concat(t,"__original"),a.name="radio"===t?"vs-radio"+(this.store.radioParentoOnly&&this.parent?this.parent.id:""):"vs-checkbox","radio"===t?(a.name="vs-radio"+(this.store.radioParentoOnly&&this.parent?this.parent.id:""),this.radioNode=a):(a.name="vs-checkbox",this.checkboxNode=a),i.appendChild(a),i.appendChild(n),i.addEventListener("click",(function(e){e.stopPropagation()}),{passive:!1}),a.addEventListener("click",(function(t){e.store.check(t,e)}),{passive:!1}),a.addEventListener("change",(function(t){t.stopPropagation(),e.handleCheckChange(t)})),this.checkboxEl=a,i}},{key:"handleCheckChange",value:function(e){var t=e.target.checked;if("function"!=typeof this.store.beforeCheck||this.store.beforeCheck(this)){if(t&&this.store.checkMaxNodes(this))return this.store.limitAlert(),void(e.target.checked=!1);this.store.showRadio?this.updateRadioChecked(t):(this.updateChecked(t),this.updateCheckedParent(t)),this.store._change(this)}else e.target.checked=!t}},{key:"createText",value:function(){var e=h("name",this);if(e)return e;var t=document.createElement("span");return t.innerText=this.data.name,t.className="vs-tree-text",t}},{key:"createIcon",value:function(){var e=document.createElement("span");return e.className=this.isLeaf&&!this.childNodes.length?"vs-icon-leaf":"vs-icon-parent",this.data.icon&&(this.data.icon instanceof HTMLElement?(e.style.backgroundImage="none",e.appendChild(this.data.icon)):e.classList.add(this.data.icon)),e}},{key:"setData",value:function(e){var t;this.store.dataMap.set(e.id,this),this.store.nodeMap.set(this.id,this),this.data=e,this.childNodes=[],"boolean"==typeof e.isLeaf?this.isLeaf=e.isLeaf:e.children||this.store.lazy||(this.isLeaf=!0),(t=0===this.level&&this.data instanceof i?this.data:this.data.children||[]).length&&(this.loaded=!0);for(var n=0,a=t.length;n<a;n++)this.insertChild({data:t[n]})}},{key:"insertChild",value:function(e,t){return e instanceof i||(Object.assign(e,{parent:this,store:this.store}),e=new i(e)),e.level=this.level+1,void 0===t||t<0?this.childNodes.push(e):this.childNodes.splice(t,0,e),e}},{key:"insertBefore",value:function(e,t){var i;t&&(i=this.childNodes.indexOf(t)),this.insertChild(e,i)}},{key:"insertAfter",value:function(e,t){var i;t&&-1!==(i=this.childNodes.indexOf(t))&&(i+=1),this.insertChild(e,i)}},{key:"updateExpand",value:function(e){var t=this;this.childNodes.length&&this.childNodes.forEach((function(i){e&&t.expanded?i.visbile=!0:i.visbile=!1,i.updateExpand(e)}))}},{key:"updateChecked",value:function(e,t){!t&&this.disabled||this.store.showCheckbox&&(this.checked=e,this.sortId=Date.now(),this.checkboxNode&&(this.checkboxNode.checked=e),this.dom&&this.dom.classList.remove("is-indeterminate"),this.store.allowEmit(e,"p")&&this.parent&&(this.parent.indeterminate=!1),this.store.allowEmit(e,"s")&&this.childNodes.length&&this.childNodes.forEach((function(t){t.updateChecked(e)})))}},{key:"updateCheckedParent",value:function(e,t){if((t||!this.disabled)&&this.store.showCheckbox&&this.store.allowEmit(e,"p")&&this.parent&&!this.store.nocheckParent){var i=this.parent.childNodes.every((function(e){return e.checked})),n=this.parent.childNodes.some((function(e){return e.checked||e.indeterminate}));i?(this.parent.checked=!0,this.parent.indeterminate=!1,this.parent.checkboxNode&&(this.parent.checkboxNode.checked=!0),this.parent.dom&&this.parent.dom.classList.remove("is-indeterminate")):n?(this.parent.checked=!1,this.parent.indeterminate=!0,this.parent.checkboxNode&&(this.parent.checkboxNode.checked=!1),this.parent.dom&&this.parent.dom.classList.add("is-indeterminate")):(this.parent.checked=!1,this.parent.indeterminate=!1,this.parent.checkboxNode&&(this.parent.checkboxNode.checked=!1),this.parent.dom&&this.parent.dom.classList.remove("is-indeterminate")),this.parent.updateCheckedParent()}}},{key:"updateRadioChecked",value:function(e,t){!t&&this.disabled||(!this.store.nocheckParent||!this.childNodes.length&&this.isLeaf)&&(this.store.radioParentoOnly?(this.store.radioMap[this.parent.id]&&(this.store.radioMap[this.parent.id].checked=!1),this.store.radioMap[this.parent.id]=this):(this.store.radioNode&&(this.store.radioNode=!1),this.store.radioNode=this),this.checked=e,this.radioNode&&(this.radioNode.checked=e))}},{key:"setChecked",value:function(e,t){e&&this.store.checkMaxNodes(this)?this.store.limitAlert():this.store.showRadio?this.updateRadioChecked(e,t):this.store.showCheckbox&&(this.updateChecked(e,t),this.updateCheckedParent(e,t),this.store._change(this))}},{key:"setDisabled",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.disabled=e,this.checkboxEl&&(this.checkboxEl.disabled=e)}},{key:"setExpand",value:function(e,t){var i=this;this.expanded=e,this.updateExpand(this.expanded),this.setAccordion(e),this.expandEl&&(e?this.expandEl.classList.add("expanded"):this.expandEl.classList.remove("expanded")),this.store.lazy&&!this.loaded?this.loadData((function(e){e&&!t&&i.storeUpdate()})):!t&&this.storeUpdate()}},{key:"storeUpdate",value:function(){this.store.animation?this.createAnimation():this.store.update()}},{key:"createAnimation",value:function(){var e=this;this.transitionNode&&this.transitionNode.parentNode&&this.transitionNode.parentNode.removeChild(this.transitionNode);var t,i,n,a=document.createElement("div");if(a.className="vs-transition",this.childNodes.length>this.store.showCount)for(var s=0;s<this.store.showCount-1;s++){var r=this.childNodes[s];a.appendChild(r.dom||r.createNode())}else this.childNodes.forEach((function(e){a.appendChild(e.dom||e.createNode())}));t=a,i=this.dom,(n=i.parentNode)&&(n.lastChild===i?n.appendChild(t):n.insertBefore(t,i.nextSibling));var o=(this.childNodes.length>this.store.showCount?this.store.showCount:this.childNodes.length)*this.store.itemHeight+"px";this.expanded?setTimeout((function(){a.style.height=o}),0):(a.style.height=o,setTimeout((function(){a.style.height=0}),0));a.addEventListener("transitionend",(function t(){a.removeEventListener("transitionend",t),a.parentNode&&a.parentNode.removeChild(a),a.removeEventListener("transitionend",t),e.store.update()})),this.transitionNode=a}},{key:"createDragable",value:function(e){var t=this;function i(e){e&&(e.classList.remove("vs-drag-enter"),e.classList.remove("vs-drag-over-gap-bottom"),e.classList.remove("vs-drag-over-gap-top"))}e.draggable=!0,e.addEventListener("dragstart",(function(e){e.stopPropagation(),t.store.dragNode=t,t.store.onDragstart(e,t);try{e.dataTransfer.setData("text/plain","")}catch(e){}})),e.addEventListener("dragover",(function(e){e.preventDefault()})),e.addEventListener("dragenter",(function(e){e.stopPropagation(),e.preventDefault(),i(t.store.dropNode);var n=t.dom;if(n){var a=function(e,t){var i=t.getBoundingClientRect().top,n=t.offsetHeight,a=e.pageY;return a>i+n-n?1:a<i+2?-1:0}(e,n);if((t.store.dragNode.dom!==n||0!==a)&&(t.store.dropPostion=a,t.store.dropNode=n,t.store.onDragenter(e,t,n,a),t.store.dropable)){if(t.expanded||t.isLeaf||t.setExpand(!0),-1===a)return void n.classList.add("vs-drag-over-gap-top");if(1===a)return void n.classList.add("vs-drag-over-gap-bottom");t.isLeaf||n.classList.add("vs-drag-enter")}}})),e.addEventListener("dragleave",(function(e){t.store.dropable&&i(e.target)})),e.addEventListener("drop",(function(e){if(e.stopPropagation(),t.store.onDrop(e,t,t.store.dropPostion),t.store.dropable){i(t.store.dropNode);var n=t.store.dragNode;if(n&&t.parent){var a=Object.assign({},n.data);if(n.remove(),!a)return;-1===t.store.dropPostion?(t.parent.insertBefore({data:a},t),t.updateCheckedParent(),t.store.updateNodes()):1===t.store.dropPostion?(t.parent.insertAfter({data:a},t),t.updateCheckedParent(),t.store.updateNodes()):t.isLeaf||t.append(a)}}}))}},{key:"setAccordion",value:function(e){if(this.store.accordion&&this.parent&&e){var t=this.store.expandMap[this.parent.id];if(t===this)return;t&&t.setExpand(!1),this.store.expandMap[this.parent.id]=this}}},{key:"loadData",value:function(e){var t=this;if(!this.loading){this.loading=!0,this.expandEl?this.expandEl.classList.add("is-loading"):this.loadingEl&&this.loadingEl.classList.add("is-loading");this.store.load(this,(function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t.loaded=!0,t.loading=!1,t.expandEl?t.expandEl.classList.remove("is-loading"):t.loadingEl&&t.loadingEl.classList.remove("is-loading"),i.length&&(i.forEach((function(e){t.insertChild({data:e,store:t.store})})),t.childNodes[0].updateCheckedParent(),t.store.updateNodes()),e&&e.call(t,i)}))}}},{key:"remove",value:function(){var e=this,t=this.parent;if(t){var i=t.childNodes||[],n=i.findIndex((function(t){return t.id===e.id}));n>-1&&i.splice(n,1),this.store.updateNodes()}}},{key:"append",value:function(t){if(t&&"object"===e(t)){var i=this.dom;0!==this.childNodes.length&&(i=null);var n=this.insertChild({data:t,store:this.store});this.data.children?this.data.children.push(t):this.data.children=[t],this.isLeaf=!1,i&&(delete this.dom,i.parentNode.replaceChild(this.createNode(),i)),n.updateCheckedParent(),this.store.updateNodes()}}}]),i}(),l=function(){function e(i){for(var n in t(this,e),i)Object.prototype.hasOwnProperty.call(i,n)&&(this[n]=i[n]);this.nodes=[],this.dataMap=new Map,this.nodeMap=new Map,this.radioMap={},this.expandMap={},this.root=new c({data:this.data,store:this}),this.updateNodes(),this.breadcrumb&&this.breadcrumb.list.push(this.root),this.changeNodes=[]}return n(e,[{key:"setData",value:function(e){this.root.childNodes=[],this.root.setData(e),this.updateNodes()}},{key:"updateNodes",value:function(){this.nodes=this.flattenTreeData(),this.nodesChange(this.nodes)}},{key:"flattenTreeData",value:function(){var e=[];return function t(i){if(e.push(i),i.childNodes&&i.childNodes.length)for(var n=0,a=i.childNodes.length;n<a;n++)t(i.childNodes[n])}(this.root),e}},{key:"getNodeById",value:function(e){return this.dataMap.get(e)}},{key:"getCheckedNodes",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.nodes.filter((function(t){return t.checked&&!t.data._vsroot&&e._checkVerify(t)&&(!e.nocheckParent||!t.childNodes.length)}));if(this.sort){var n=i.sort((function(e,t){return e.sortId-t.sortId}));return t?n:n.map((function(e){return e.data}))}return t?i:i.map((function(e){return e.data}))}},{key:"setDefaultChecked",value:function(){var e=this;this.checkedKeys.forEach((function(t){var i=e.getNodeById(t);i?i.setChecked(!0,!0):console.warn("not found node by "+t)}))}},{key:"checkMaxNodes",value:function(e){if(!this.max)return!1;if(!e.checked&&e.hasChildCount>this.max)return!0;var t=this.getCheckedNodes().length;return!e.checked&&t+(e.isLeaf?1:this.getUnCheckLeafsCount(e))>this.max}},{key:"getUnCheckLeafsCount",value:function(e){var t=this,i=this._checkVerify(e)&&!e.checked?1:0;return e.childNodes.forEach((function(e){i+=t.getUnCheckLeafsCount(e)})),i}},{key:"allowEmit",value:function(e,t){var i=this.checkboxType,n=i.Y,a=i.N;if(e){if(!n.includes(t))return!1}else if(!a.includes(t))return!1;return!0}},{key:"_checkVerify",value:function(e){return"function"==typeof this.checkFilter?this.checkFilter(e):!this.checkFilterLeaf||e.isLeaf}},{key:"_change",value:function(e){var t=this;this.changeNodes.push(e),this._changeTimer&&clearTimeout(this._changeTimer),this._changeTimer=setTimeout((function(){t.change(t.changeNodes),t.changeNodes=[]}),0)}}]),e}(),u="FRONT",p="BEHIND",f="INIT",v="FIXED",m=function(){function e(i,n){t(this,e),this.init(i,n)}return n(e,[{key:"init",value:function(e,t){this.param=e,this.callUpdate=t,this.sizes=new Map,this.firstRangeTotalSize=0,this.firstRangeAverageSize=0,this.lastCalcIndex=0,this.fixedSizeValue=0,this.calcType=f,this.offset=0,this.direction="",this.range=Object.create(null),e&&this.checkRange(0,e.keeps-1)}},{key:"destroy",value:function(){this.init(null,null)}},{key:"getRange",value:function(){var e=Object.create(null);return e.start=this.range.start,e.end=this.range.end,e.padFront=this.range.padFront,e.padBehind=this.range.padBehind,e}},{key:"isBehind",value:function(){return this.direction===p}},{key:"isFront",value:function(){return this.direction===u}},{key:"getOffset",value:function(e){return(e<1?0:this.getIndexOffset(e))+this.param.slotHeaderSize}},{key:"updateParam",value:function(e,t){var i=this;this.param&&e in this.param&&("uniqueIds"===e&&this.sizes.forEach((function(e,n){t.includes(n)||i.sizes.delete(n)})),this.param[e]=t)}},{key:"handleDataSourcesChange",value:function(){var e=this.range.start;this.isFront()?e-=2:this.isBehind()&&(e+=2),e=Math.max(e,0),this.updateRange(this.range.start,this.getEndByStart(e))}},{key:"handleSlotSizeChange",value:function(){this.handleDataSourcesChange()}},{key:"handleScroll",value:function(e){this.direction=e<this.offset?u:p,this.offset=e,this.param&&(this.direction===u?this.handleFront():this.direction===p&&this.handleBehind())}},{key:"handleFront",value:function(){var e=this.getScrollOvers();if(!(e>this.range.start)){var t=Math.max(e-this.param.buffer,0);this.checkRange(t,this.getEndByStart(t))}}},{key:"handleBehind",value:function(){var e=this.getScrollOvers();e<this.range.start+this.param.buffer||this.checkRange(e,this.getEndByStart(e))}},{key:"getScrollOvers",value:function(){var e=this.offset-this.param.slotHeaderSize;if(e<=0)return 0;if(this.isFixedType())return Math.floor(e/this.fixedSizeValue);for(var t=0,i=0,n=0,a=this.param.uniqueIds.length;t<=a;){if(i=t+Math.floor((a-t)/2),(n=this.getIndexOffset(i))===e)return i;n<e?t=i+1:n>e&&(a=i-1)}return t>0?--t:0}},{key:"getIndexOffset",value:function(e){if(!e)return 0;for(var t=0,i=0,n=0;n<e;n++)t+="number"==typeof(i=this.sizes.get(this.param.uniqueIds[n]))?i:this.getEstimateSize();return this.lastCalcIndex=Math.max(this.lastCalcIndex,e-1),this.lastCalcIndex=Math.min(this.lastCalcIndex,this.getLastIndex()),t}},{key:"isFixedType",value:function(){return this.calcType===v}},{key:"getLastIndex",value:function(){return this.param.uniqueIds.length-1}},{key:"checkRange",value:function(e,t){var i=this.param.keeps;this.param.uniqueIds.length<=i?(e=0,t=this.getLastIndex()):t-e<i-1&&(e=t-i+1),this.range.start!==e&&this.updateRange(e,t)}},{key:"updateRange",value:function(e,t){this.range.start=e,this.range.end=t,this.range.padFront=this.getPadFront(),this.range.padBehind=this.getPadBehind(),this.callUpdate(this.getRange())}},{key:"getEndByStart",value:function(e){var t=e+this.param.keeps-1;return Math.min(t,this.getLastIndex())}},{key:"getPadFront",value:function(){return this.isFixedType()?this.fixedSizeValue*this.range.start:this.getIndexOffset(this.range.start)}},{key:"getPadBehind",value:function(){var e=this.range.end,t=this.getLastIndex();return this.isFixedType()?(t-e)*this.fixedSizeValue:this.lastCalcIndex===t?this.getIndexOffset(t)-this.getIndexOffset(e):(t-e)*this.getEstimateSize()}},{key:"getEstimateSize",value:function(){return this.isFixedType()?this.fixedSizeValue:this.firstRangeAverageSize||this.param.estimateSize}}]),e}(),g=function(){function e(i){t(this,e),this.range=null,this.$el=i.root,this.$el.style.maxHeight="number"==typeof i.maxHeight?i.maxHeight+"px":i.maxHeight,this.$el.style.minHeight="number"==typeof i.minHeight?i.minHeight+"px":i.minHeight,this.$el.style.overflowY="auto",this.dataSources=i.data,this.wrapper=document.createElement("div"),this.wrapper.className="vs-virtual-list",this.$el.appendChild(this.wrapper),this.$el.addEventListener("scroll",this.onScroll.bind(this),{passive:!1}),this.keeps=i.keeps||20,this.estimateSize=i.estimateSize||26,this.dataKey="id",this.installVirtual()}return n(e,[{key:"getOffset",value:function(){var e=this.$el;return e?Math.ceil(e.scrollTop):0}},{key:"getClientSize",value:function(){var e=this.$el;return e?Math.ceil(e.clientHeight):0}},{key:"getScrollSize",value:function(){var e=this.$el;return e?Math.ceil(e.scrollHeight):0}},{key:"scrollToIndex",value:function(e){if(e>=this.dataSources.length-1)this.scrollToBottom();else{var t=this.virtual.getOffset(e);this.scrollToOffset(t)}}},{key:"reset",value:function(){this.virtual.destroy(),this.scrollToOffset(0),this.installVirtual()}},{key:"installVirtual",value:function(){this.virtual=new m({slotHeaderSize:0,slotFooterSize:0,keeps:this.keeps,estimateSize:this.estimateSize,buffer:Math.round(this.keeps/3),uniqueIds:this.getUniqueIdFromDataSources()},this.onRangeChanged.bind(this)),this.range=this.virtual.getRange(),this.render()}},{key:"getUniqueIdFromDataSources",value:function(){var e=this.dataKey;return this.dataSources.map((function(t){return"function"==typeof e?e(t):t[e]}))}},{key:"onRangeChanged",value:function(e){this.range=e,this.render()}},{key:"onScroll",value:function(){var e=this.getOffset(),t=this.getClientSize(),i=this.getScrollSize();e<0||e+t>i+1||!i||this.virtual.handleScroll(e)}},{key:"getRenderSlots",value:function(){var e=this.range,t=e.start,i=e.end,n=this.dataSources,a=this.dataKey;this.wrapper.innerHTML="";for(var s=t;s<=i;s++){var r=n[s];if(r){var o="function"==typeof a?a(r):r[a];if("string"==typeof o||"number"==typeof o){var h=r.createNode();if(r.store.onlySearchLeaf?h.classList.add("vs-search-only-leaf"):h.classList.remove("vs-search-only-leaf"),r.store.isSearch&&r.store.searchRender){var d=r.store.searchRender(r,h.cloneNode(!0));if(!(d instanceof HTMLElement))throw Error("searchRender must return HTMLElement");this.wrapper.appendChild(d)}else this.wrapper.appendChild(h)}else console.warn("Cannot get the data-key '".concat(a,"' from data-sources."))}else console.warn("Cannot get the index '".concat(s,"' from data-sources."))}}},{key:"update",value:function(e){this.dataSources=e,this.wrapper.innerHTML="",this.virtual.updateParam("uniqueIds",this.getUniqueIdFromDataSources()),this.virtual.handleDataSourcesChange()}},{key:"render",value:function(){var e=this.range,t=e.padFront,i=e.padBehind,n="".concat(t,"px 0px ").concat(i,"px");this.wrapper.style.padding=n,this.getRenderSlots()}}]),e}(),k=function(){function e(i,n){t(this,e),this.node=i,this.data=i.data,this.store=i.store,this.parent=n;var a=this.parent.options,s=a.icon,r=a.link,o=a.separator,h=void 0===o?"/":o;this.renderIcon=s,this.renderLink=r,this.renderSeparator=h}return n(e,[{key:"createDom",value:function(){var e=this,t=this.parent.list,i=t.findIndex((function(t){return t===e.node})),n=i===t.length-1,a=document.createElement("span");if(this.renderIcon){var s=this.createIcon();s&&a.appendChild(s)}return a.appendChild(this.createLink(t,i,n)),n||a.appendChild(this.createSeparator()),a}},{key:"createIcon",value:function(){var e;if(!(e="function"==typeof this.renderIcon?this.renderIcon(this.node,this.data):this.renderIcon))return!1;var t=document.createElement("span");return t.className="vs-breadcrumb-icon","function"==typeof this.renderIcon?e instanceof HTMLElement?t.appendChild(e):t.innerHTML=e:t.innerHTML=this.renderIcon,t}},{key:"createLink",value:function(e,t,i){var n=this,a=document.createElement("span");if(a.className="vs-breadcrumb-link","function"==typeof this.renderLink){var s=this.renderLink(this.node,this.data);s instanceof HTMLElement?a.appendChild(s):a.innerHTML=s}else a.innerHTML=this.data.name;return a.addEventListener("click",(function(a){a.preventDefault(),a.stopPropagation(),i||(e.splice(t+1),n.store.update())})),a}},{key:"createSeparator",value:function(){var e=document.createElement("span");return e.className="vs-breadcrumb-separator","function"==typeof this.renderSeparator?e.innerHTML=this.renderSeparator(this.node,this.data):e.innerHTML=this.renderSeparator,e}}]),e}(),y=function(){function e(i){t(this,e),this.list=[],this.options=i}return n(e,[{key:"renderBreadcrumb",value:function(){var e=this;this.store=this.current.store;var t,i=this.options,n=i.el,a=i.change,s=void 0===a?function(){}:a;n instanceof HTMLElement?t=n:n&&"string"==typeof n&&(t=document.querySelector(n)),t||(t=document.createElement("section")),t.classList.add("vs-breadcrumb");var r=this.list.map((function(t){return new k(t,e).createDom()}));t.innerHTML="",r.forEach((function(e){t.appendChild(e)})),s(t,this.list,this.current)}},{key:"current",get:function(){return this.list[this.list.length-1]}}]),e}(),b=function(){},x=function(){function i(n,a){var s=this;if(t(this,i),this.$el="string"==typeof n?document.querySelector(n):n,!(this.$el instanceof HTMLElement))throw Error("请为组件提供根节点");this.$el.classList.add("vs-tree");var r=["#\\[\\[","\\]\\]"],o=r[0]+"([\\s\\S]+?)"+r[1];this.interpolate=new RegExp(o,"igm");var h={},d=this.$el.querySelectorAll("[tree-slot]");if(d&&d.length&&d.forEach((function(e){var t=e.attributes["tree-slot"].value,i=e.attributes["tree-slot-scope"].value;h[t]={scope:i,node:e,interpolate:s.interpolate,text:e.innerText,inner:e.outerHTML},e.parentNode.removeChild(e)})),a.theme&&this.$el.classList.add("vs-theme-"+a.theme),Array.isArray(a.data))this._data={_vsroot:!0,name:a.rootName||"---",children:a.data},a.rootName||(a.hideRoot=!0);else{if("object"!==e(a.data))throw Error("参数data仅支持对象或数组！");this._data=a.data}this.nodes=[];var c=a.virtual||{},u=c.showCount,p=void 0===u?20:u,f=c.itemHeight,v=void 0===f?26:f,m=c.maxHeight,g=void 0===m?"400px":m,k=c.minHeight,x=void 0===k?"0px":k;this.itemHeight=v,this.showCount=p,this.maxHeight=a.maxHeight||g,this.minHeight=a.minHeight||x,this.data=[],this.keyword="",this.searchFilter=a.searchFilter,this.ready=a.ready||b,"[object Object]"===Object.prototype.toString.call(a.breadcrumb)&&(this.$$breadcrumb=new y(a.breadcrumb));var C=function(){s.store=new l({data:s._data,max:a.max,slots:h,breadcrumb:s.$$breadcrumb||null,strictLeaf:a.strictLeaf||!1,showCount:s.showCount,itemHeight:s.itemHeight,hideRoot:a.hideRoot||!1,animation:a.animation||!1,expandLevel:"number"==typeof a.expandLevel?a.expandLevel:1,beforeCheck:a.beforeCheck||null,showLine:a.showLine||!1,showIcon:a.showIcon||!1,onlyShowLeafIcon:a.onlyShowLeafIcon||!1,showCheckbox:a.showCheckbox||!1,checkboxType:a.checkboxType||{Y:"ps",N:"ps"},checkInherit:a.checkInherit||!1,disabledInherit:a.disabledInherit||!1,showRadio:a.showRadio||!1,highlightCurrent:a.highlightCurrent||!1,checkFilterLeaf:a.checkFilterLeaf||!1,checkFilter:a.checkFilter||null,accordion:a.accordion||!1,draggable:a.draggable||!1,dropable:a.dropable||!1,lazy:a.lazy||!1,sort:a.sort||!1,indent:a.indent||10,checkedKeys:a.checkedKeys||[],expandKeys:a.expandKeys||[],disabledKeys:a.disabledKeys||[],limitAlert:a.limitAlert||b,click:a.click||b,check:a.check||b,change:a.change||b,load:a.load||b,contextmenu:a.contextmenu||null,radioParentoOnly:"level"===a.radioType?"level":"all",renderContent:a.renderContent||null,nocheckParent:a.nocheckParent||!1,checkOnClickNode:a.checkOnClickNode||!1,format:a.format||null,searchRender:a.searchRender||null,searchDisabledChecked:a.searchDisabledChecked||!1,expandClass:a.expandClass||"vs-expand-icon",onDragstart:a.onDragstart||b,onDragenter:a.onDragenter||b,onDrop:a.onDrop||b,update:function(){s._render()},nodesChange:function(e){s.nodes=e,s.vlist&&s._render()}}),s.store.hideRoot&&s.store.root.createNode(),s._init(),s.store.setDefaultChecked()};a.async?setTimeout((function(){C()}),0):C()}return n(i,[{key:"_init",value:function(){this.vlist=new g({root:this.$el,data:[],maxHeight:this.maxHeight,minHeight:this.minHeight,estimateSize:this.itemHeight,keeps:this.showCount}),this._render(),this.ready&&this.ready(this)}},{key:"_render",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.$$breadcrumb){var i=this.$$breadcrumb.current;this.data=this.nodes.filter((function(e){return e.parent&&e.parent.id===i.id})),this.$$breadcrumb.renderBreadcrumb()}else this.data=this.nodes.filter((function(t){return e._hasKeyword(t)&&t.visbile&&!(e.store.hideRoot&&0===t.level)}));t&&this.vlist.update(this.data)}},{key:"_hasKeyword",value:function(e){var t=this;if(!this.keyword)return!0;var i=this._checkFilter(e);return i?e.parent&&(e.parent.requireExpand=!0):e.childNodes.forEach((function(e){i||(i=t._hasKeyword(e))})),i}},{key:"_checkFilter",value:function(e){if(this.keyword)return"function"==typeof this.searchFilter?this.searchFilter(this.keyword,e,e.data):e.data.name&&e.data.name.includes(this.keyword)}},{key:"filter",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1?arguments[1]:void 0;if(this.keyword=t,this.store.onlySearchLeaf=i&&!!t,this.store.isSearch=!!t,this.store.onlySearchLeaf){var n=this.nodes.filter((function(t){return!t.childNodes.length&&e._checkFilter(t)&&!(e.store.hideRoot&&0===t.level)}));return this.vlist.update(n),n}this._render(!1);for(var a=0,s=this.data.length;a<s;a++){var r=this.data[a];r.requireExpand&&(r.requireExpand=!1,r.setExpand(!0,!0))}return this._render(),this.data}},{key:"getNodeById",value:function(e){return this.store.getNodeById(e)}},{key:"getCheckedNodes",value:function(){var e;return(e=this.store).getCheckedNodes.apply(e,arguments)}},{key:"setMaxValue",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.store.max=e}},{key:"scrollToIndex",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.vlist.scrollToIndex(e)}},{key:"clearCheckedNodes",value:function(){this.getCheckedNodes(!0).forEach((function(e){e.setChecked(!1)}))}}]),i}(),C="2.1.12",N=(o=x,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.component("vs-tree",{props:{data:Array|Object,options:Object,async:Boolean,animation:Boolean,draggable:Boolean,dropable:Boolean,hideRoot:Boolean,showCheckbox:Boolean,checkboxType:Object,showRadio:Boolean,radioType:String,showLine:Boolean,showIcon:Boolean,onlyShowLeafIcon:Boolean,highlightCurrent:Boolean,accordion:Boolean,nocheckParent:Boolean,sort:Boolean,checkOnClickNode:Boolean,checkFilterLeaf:Boolean,strictLeaf:Boolean,rootName:String,max:Number,lazy:Boolean,load:Function,format:Function,disabledKeys:Array,checkedKeys:Array,expandKeys:Array,keyword:String,expandClass:String,theme:String,breadcrumb:Object,virtual:Object,expandLevel:{type:Number,default:1},indent:{type:Number,default:10},showCount:{type:Number,default:20},itemHeight:{type:Number,default:26},maxHeight:String,minHeight:String,beforeCheck:Function,renderContent:Function,checkFilter:Function,searchFilter:Function,searchRender:Function,onDragstart:Function,onDragenter:Function,onDrop:Function},data:function(){return{tree:{}}},watch:{max:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.setMaxValue(e)},keyword:function(e){this.filter(e)}},mounted:function(){var e=this;this.$nextTick((function(){e._vsinit()}))},methods:{_vsinit:function(){var e=this;console.time("render:tree"),this.tree.tree=new o(this.$refs.tree,Object.assign({},t,this.$props,r(r({},this.options),{},{data:this.data,click:function(t,i){e.$emit("click",t,i)},check:function(t,i){e.$emit("check",t,i)},change:function(t){e.$emit("change",t)},contextmenu:function(t,i){e.$emit("node-contextmenu",t,i)},limitAlert:function(){e.$emit("limit-alert")}}))),console.timeEnd("render:tree")},getNodeById:function(e){return this.tree.tree.getNodeById(e)},getCheckedNodes:function(){return this.tree.tree.getCheckedNodes()},filter:function(e){return this.tree.tree.filter(e)},setMaxValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.tree.tree.setMaxValue(e)}},render:function(e){return e("div",{ref:"tree"},this.$slots.default)}})});export default x;export{N as install,C as version};
