!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):(e=e||self).Email=t(e.React)}(this,function(t){"use strict";var n="default"in t?t.default:t;function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=["yahoo.com","hotmail.com","gmail.com","me.com","aol.com","mac.com","live.com","googlemail.com","msn.com","yahoo.com","facebook.com","verizon.net","outlook.com","icloud.com"],l=[9,17,18,35,36,37,38,39,40,45];return function(e){function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),t=function(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?s(e):t}(this,i(o).call(this,e));var n=u;return Array.prototype.push.apply(n,e.domains&&Array.isArray(e.domains)?e.domains:[]),t.state={placeholder:e.placeholder,class:e.className,value:"",domains:n,suggestion:""},t.handleChange=t.handleChange.bind(s(t)),t.getSuggest=t.getSuggest.bind(s(t)),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(o,t.Component),function(e,t,n){t&&a(e.prototype,t),n&&a(e,n)}(o,[{key:"handleChange",value:function(e){var t=this,n=e.target.value,o=this.suggest(n);if(void 0===o||o.length<1)this.setState({value:n,suggestion:o},function(){return t.selectText()}),e.target.value=n;else{var a="".concat(n).concat(o);this.setState({value:a,suggestion:o},function(){return t.selectText()}),e.target.value=n+o}this.props.onChange&&this.props.onChange(e)}},{key:"selectText",value:function(){if(void 0===this.state.suggestion||this.state.suggestion.length<1)return!1;var e=this.state.value.indexOf(this.state.suggestion),t=e+this.state.suggestion.length;this.textHandler.setSelectionRange(e,t)}},{key:"getSuggest",value:function(e){0<=l.indexOf(e.keyCode)||8===e.keyCode&&this.setState({value:e.target.value.replace(this.state.suggestion,"")})}},{key:"suggest",value:function(t){var e=t.split("@");if(1<e.length&&(t=e.pop()).length)return(this.state.domains.filter(function(e){return 0===e.indexOf(t)}).shift()||"").replace(t,"")}},{key:"render",value:function(){var t=this;return n.createElement("div",{className:"eac-wrapper"},n.createElement("input",{autoCapitalize:"none",type:"text",inputMode:"email",id:"eac-input",name:this.props.name,placeholder:this.state.placeholder,onBlur:this.props.onBlur,className:this.state.class,value:this.state.value,onChange:this.handleChange,onKeyUp:this.getSuggest,ref:function(e){t.textHandler=e}}))}}]),o}()});
