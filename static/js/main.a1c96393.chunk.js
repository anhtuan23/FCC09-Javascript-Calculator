(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){t.exports=n(27)},20:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),u=n(12),a=n.n(u),l=(n(20),n(14)),i=n(5),m=n(4),s=(n(6),function(t){var e=t.formula;return o.a.createElement("div",{id:"formula"},e)}),b=function(t){var e=t.result;return o.a.createElement("div",{id:"display"},e)},c=function(t){var e=t.formula,n=t.result;return o.a.createElement("div",{id:"screen"},o.a.createElement(s,{formula:e}),o.a.createElement(b,{result:n}))},d=n(1),p=[{text:"AC",buttonType:"ac-btn",id:"clear"},{text:"=",buttonType:"equal-btn",id:"equals"},{text:"0",buttonType:"number-btn zero-btn",id:"zero"},{text:"/",buttonType:"operator-btn",id:"divide"},{text:"x",buttonType:"operator-btn",id:"multiply"},{text:"7",buttonType:"number-btn",id:"seven"},{text:"8",buttonType:"number-btn",id:"eight"},{text:"9",buttonType:"number-btn",id:"nine"},{text:"-",buttonType:"operator-btn",id:"subtract"},{text:"4",buttonType:"number-btn",id:"four"},{text:"5",buttonType:"number-btn",id:"five"},{text:"6",buttonType:"number-btn",id:"six"},{text:"+",buttonType:"operator-btn",id:"add"},{text:"1",buttonType:"number-btn",id:"one"},{text:"2",buttonType:"number-btn",id:"two"},{text:"3",buttonType:"number-btn",id:"three"},{text:".",buttonType:"number-btn",id:"decimal"}],f=function(t){var e=t.handleClick;return o.a.createElement("div",{id:"keyboard"},p.map(function(t){return o.a.createElement(_,{text:t.text,buttonType:t.buttonType,id:t.id,key:t.id,handleClick:e})}))};f.proptypes={handleClick:n.n(d).a.func.isRequired};var _=function(t){var e=t.text,n=t.buttonType,r=t.id,u=t.handleClick,a="x"===e?"*":e;return o.a.createElement("div",{className:"btn "+n,id:r,onClick:function(){return u(a)}},e)},y=f,E=Object(i.b)(function(t){return Object(l.a)({},t)},function(t){return{handleClick:function(e){return t(Object(m.b)(e))}}})(function(t){var e=t.formula,n=t.result,r=t.handleClick;return o.a.createElement("div",{id:"background"},o.a.createElement("div",{id:"calculator"},o.a.createElement(c,{formula:e,result:n}),o.a.createElement(y,{handleClick:r})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(i.a,{store:Object(m.a)()},o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},4:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",function(){return pressButton}),__webpack_require__.d(__webpack_exports__,"a",function(){return getStore});var redux__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),BUTTON_PRESSED="BUTTON_PRESSED",pressButton=function(t){return{type:BUTTON_PRESSED,buttonText:t}},initialState={formula:[" "],result:""};function reducer(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case BUTTON_PRESSED:return onButtonClick(t,e.buttonText);default:return t}}var getStore=function(){return Object(redux__WEBPACK_IMPORTED_MODULE_0__.b)(reducer)};function onButtonClick(state,symbol){var formula=state.formula,lastElement=formula[formula.length-1];"AC"===symbol?formula=[" "]:isOperator(symbol)?(isOperator(lastElement)&&formula.pop(),state.result!==lastElement&&(formula=[state.result]),formula.push(symbol)):"."===symbol?isOperator(lastElement)||" "===lastElement?formula.push("0."):isWholeNumber(lastElement)&&(formula.pop(),formula.push(lastElement+symbol)):isWholeNumber(symbol)?isOperator(lastElement)||" "===lastElement?formula.push(symbol):"0"===lastElement?(formula.pop(),formula.push(symbol)):(formula.pop(),formula.push(lastElement+symbol)):"="!==symbol&&formula.push(symbol);var result=formula[formula.length-1];return 1===formula.length&&" "===formula[0]?result=0:"="===symbol&&(result=eval(formula.join(""))),{formula:formula,result:result}}function isNumber(t){return/^\d+\.?\d*$/g.test(t)}function isWholeNumber(t){return/^\d+$/g.test(t)}function isOperator(t){return"+-*/".includes(t)}},6:function(t,e,n){}},[[15,2,1]]]);
//# sourceMappingURL=main.a1c96393.chunk.js.map