!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){var r;
/*!
 * Snackbar v0.1.14
 * http://polonel.com/Snackbar
 *
 * Copyright 2018 Chris Brame and other contributors
 * Released under the MIT license
 * https://github.com/polonel/Snackbar/blob/master/LICENSE
 */
/*!
 * Snackbar v0.1.14
 * http://polonel.com/Snackbar
 *
 * Copyright 2018 Chris Brame and other contributors
 * Released under the MIT license
 * https://github.com/polonel/Snackbar/blob/master/LICENSE
 */
!function(n,o){"use strict";void 0===(r=function(){return n.Snackbar=function(){var t={current:null},e={text:"Default Text",textColor:"#FFFFFF",width:"auto",showAction:!0,actionText:"Dismiss",actionTextAria:"Dismiss, Description for Screen Readers",actionTextColor:"#4CAF50",showSecondButton:!1,secondButtonText:"",secondButtonAria:"Description for Screen Readers",secondButtonTextColor:"#4CAF50",backgroundColor:"#323232",pos:"bottom-left",duration:5e3,customClass:"",onActionClick:function(t){t.style.opacity=0},onSecondButtonClick:function(t){},onClose:function(t){}};t.show=function(r){var o=n(!0,e,r);t.current&&(t.current.style.opacity=0,setTimeout(function(){var t=this.parentElement;t&&t.removeChild(this)}.bind(t.current),500)),t.snackbar=document.createElement("div"),t.snackbar.className="snackbar-container "+o.customClass,t.snackbar.style.width=o.width;var i=document.createElement("p");if(i.style.margin=0,i.style.padding=0,i.style.color=o.textColor,i.style.fontSize="14px",i.style.fontWeight=300,i.style.lineHeight="1em",i.innerHTML=o.text,t.snackbar.appendChild(i),t.snackbar.style.background=o.backgroundColor,o.showSecondButton){var a=document.createElement("button");a.className="action",a.innerHTML=o.secondButtonText,a.setAttribute("aria-label",o.secondButtonAria),a.style.color=o.secondButtonTextColor,a.addEventListener("click",function(){o.onSecondButtonClick(t.snackbar)}),t.snackbar.appendChild(a)}if(o.showAction){var u=document.createElement("button");u.className="action",u.innerHTML=o.actionText,u.setAttribute("aria-label",o.actionTextAria),u.style.color=o.actionTextColor,u.addEventListener("click",function(){o.onActionClick(t.snackbar)}),t.snackbar.appendChild(u)}o.duration&&setTimeout(function(){t.current===this&&(t.current.style.opacity=0,t.current.style.top="-100px",t.current.style.bottom="-100px")}.bind(t.snackbar),o.duration),t.snackbar.addEventListener("transitionend",function(e,n){"opacity"===e.propertyName&&"0"===this.style.opacity&&("function"==typeof o.onClose&&o.onClose(this),this.parentElement.removeChild(this),t.current===this&&(t.current=null))}.bind(t.snackbar)),t.current=t.snackbar,document.body.appendChild(t.snackbar);getComputedStyle(t.snackbar).bottom,getComputedStyle(t.snackbar).top;t.snackbar.style.opacity=1,t.snackbar.className="snackbar-container "+o.customClass+" snackbar-pos "+o.pos},t.close=function(){t.current&&(t.current.style.opacity=0)};var n=function(){var t={},e=!1,r=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],r++);for(var i=function(r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e&&"[object Object]"===Object.prototype.toString.call(r[o])?t[o]=n(!0,t[o],r[o]):t[o]=r[o])};r<o;r++){var a=arguments[r];i(a)}return t};return t}()}.apply(e,[]))||(t.exports=r)}(this)},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.inputTitle="",this.inputAmount="",this.budget=e}var e,n,r;return e=t,(n=[{key:"validate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=""!==this.inputTitle.value&&""!==this.inputAmount.value;return e||(t="Veuillez remplir le formulaire svp",o.a.show({text:t})),e}}])&&i(e.prototype,n),r&&i(e,r),t}();function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=c(this,l(e).call(this,t))).inputTitle=document.querySelector("#earning-form-title"),n.inputAmount=document.querySelector("#earning-form-amount"),n.form=document.querySelector("#earning-form"),n.earningList=document.querySelector("#earning-list"),n.totalAmount=0,n.id=0,n.earnings=[],n.budget=t,n}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,a),n=e,(r=[{key:"init",value:function(){var t=this;this.form.addEventListener("submit",function(e){e.preventDefault(),t.validate()&&(t.addEarning(),t.renderTotal(),t.clearForm())}),this.earningList.addEventListener("click",function(e){e.preventDefault();var n=e.target.dataset.id;e.target.classList.contains("update")&&t.update(n),t.removeInTheDom(e.target,n)})}},{key:"update",value:function(t){var e=this.earnings.filter(function(e){return e.id===parseInt(t)})[0];this.inputAmount.value=e.amount,this.inputTitle.value=e.title}},{key:"removeInTheDom",value:function(t,e){var n=t.parentElement.parentElement.parentElement.parentElement;this.earningList.removeChild(n),this.earnings=this.earnings.filter(function(t){return t.id!==parseInt(e)}),this.renderTotal()}},{key:"addEarning",value:function(){var t={title:this.inputTitle.value,amount:parseInt(this.inputAmount.value),id:this.id++};this.earnings.push(t),this.renderList(t)}},{key:"clearForm",value:function(){this.inputTitle.value="",this.inputAmount.value=""}},{key:"renderTotal",value:function(){var t=this;this.totalAmount=0,this.earnings.forEach(function(e){t.totalAmount+=parseInt(e.amount)}),document.querySelector("#totalEarning").textContent=this.totalAmount,this.budget.update()}},{key:"renderList",value:function(t){var e=document.createElement("li");e.className="list-group-item flex-column align-items-start",e.innerHTML='\n            <div class="d-flex w-100 justify-content-between">\n                <h5 class="mb-1">'.concat(t.title,'</h5>\n                <span>\n                    <a href="#" class="text-primary earning-icon budget--icon ">\n                        <i class="fa fa-pencil update" data-id="').concat(t.id,'"></i>\n                    </a>\n                    <a href="#" class="text-danger earning-icon budget--icon delete">\n                        <i class="fa fa-trash-o delete" data-id="').concat(t.id,'"></i>\n                    </a>\n                </span>\n            </div>\n            <span>').concat(t.amount," FCFA</span>\n        "),this.earningList.appendChild(e)}}])&&s(n.prototype,r),o&&s(n,o),e}();function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=h(this,b(e).call(this,t))).inputTitle=document.querySelector("#expense-form-title"),n.inputAmount=document.querySelector("#expense-form-amount"),n.form=document.querySelector("#expense-form"),n.expenseList=document.querySelector("#expense-list"),n.totalAmount=0,n.id=0,n.expenses=[],n.budget=t,n}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(e,a),n=e,(r=[{key:"init",value:function(){var t=this;this.form.addEventListener("submit",function(e){e.preventDefault(),t.validate()&&(t.addExpense(),t.renderTotal(),t.clearForm())}),this.expenseList.addEventListener("click",function(e){e.preventDefault();var n=e.target.dataset.id;e.target.classList.contains("update")&&t.update(n),t.removeInTheDom(e.target,n)})}},{key:"update",value:function(t){var e=this.expenses.filter(function(e){return e.id===parseInt(t)})[0];this.inputAmount.value=e.amount,this.inputTitle.value=e.title}},{key:"removeInTheDom",value:function(t,e){var n=t.parentElement.parentElement.parentElement.parentElement;this.expenseList.removeChild(n),this.expenses=this.expenses.filter(function(t){return t.id!==parseInt(e)}),this.renderTotal()}},{key:"addExpense",value:function(){var t={title:this.inputTitle.value,amount:parseInt(this.inputAmount.value),id:this.id++};this.expenses.push(t),this.renderList(t)}},{key:"clearForm",value:function(){this.inputTitle.value="",this.inputAmount.value=""}},{key:"renderTotal",value:function(){var t=this;this.totalAmount=0,this.expenses.forEach(function(e){t.totalAmount+=parseInt(e.amount)}),document.querySelector("#totalExpense").textContent=this.totalAmount,this.budget.update()}},{key:"renderList",value:function(t){var e=document.createElement("li");e.className="list-group-item flex-column align-items-start",e.innerHTML='\n            <div class="d-flex w-100 justify-content-between">\n                <h5 class="mb-1">'.concat(t.title,'</h5>\n                <span>\n                    <a href="#" class="text-primary expense-icon budget--icon ">\n                        <i class="fa fa-pencil update" data-id="').concat(t.id,'"></i>\n                    </a>\n                    <a href="#" class="text-danger expense-icon budget--icon delete">\n                        <i class="fa fa-trash-o delete" data-id="').concat(t.id,'"></i>\n                    </a>\n                </span>\n            </div>\n            <span>').concat(t.amount," FCFA</span>\n        "),this.expenseList.appendChild(e)}}])&&m(n.prototype,r),o&&m(n,o),e}();function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var x=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.budgetTotal=0,this.budgetElement=document.querySelector("#totalBudget")}var e,n,r;return e=t,(n=[{key:"update",value:function(){var t=document.querySelector("#totalEarning").innerHTML,e=document.querySelector("#totalExpense").innerHTML;this.budgetTotal=parseInt(t)-parseInt(e),this.render()}},{key:"render",value:function(){this.budgetElement.innerHTML=this.budgetTotal,this.budgetTotal>0?(this.budgetElement.classList.remove("text-danger","text-black"),this.budgetElement.classList.add("text-success")):0===this.budgetTotal?(this.budgetElement.classList.remove("text-danger","text-success"),this.budgetElement.classList.add("text-black")):(this.budgetElement.classList.remove("text-black","text-success"),this.budgetElement.classList.add("text-danger"))}}])&&g(e.prototype,n),r&&g(e,r),t}());new p(x).init(),new v(x).init()}]);