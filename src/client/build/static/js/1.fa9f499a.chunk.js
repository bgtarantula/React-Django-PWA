webpackJsonp([1],{221:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),c=o(0),s=a(c),f=o(1),m=a(f),u=o(26);o(244);var d=window,p=d.$,b=function(e){function t(){return l(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),i(t,[{key:"componentDidMount",value:function(){p(".portfolio-item").magnificPopup({type:"inline"}),p(document).on("click",".portfolio-modal-dismiss",function(){p.magnificPopup.close()}),p(document).on("click",".portfolio-modal-close",function(e){e.preventDefault(),p.magnificPopup.close()})}},{key:"render",value:function(){var e=this.props.data.module,t=e.portfolio_items.map(function(e,t){return s.default.createElement("div",{key:t,className:"col-md-6 col-lg-4"},s.default.createElement("a",{className:"portfolio-item d-block mx-auto",href:"#portfolio-modal-"+t},s.default.createElement("div",{className:"portfolio-item-caption d-flex position-absolute h-100 w-100"},s.default.createElement("div",{className:"portfolio-item-caption-content my-auto w-100 text-center text-white"},s.default.createElement("i",{className:"fa fa-search-plus fa-3x"}))),s.default.createElement("img",{className:"img-fluid",src:e.image.file,alt:""})))}),o=e.portfolio_items.map(function(e,t){var o=e.link?e.link.url:"";return s.default.createElement("div",{key:t,className:"portfolio-modal mfp-hide",id:"portfolio-modal-"+t},s.default.createElement("div",{className:"portfolio-modal-dialog bg-white"},s.default.createElement("a",{className:"close-button d-none d-md-block portfolio-modal-close",href:"#"},s.default.createElement("i",{className:"fa fa-3x fa-times"})),s.default.createElement("div",{className:"container text-center"},s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:"col-lg-8 mx-auto"},s.default.createElement("h2",{className:"text-secondary text-uppercase mb-0"},e.portfolio.title),s.default.createElement("hr",{className:"star-dark mb-5"}),s.default.createElement("img",{className:"img-fluid mb-5",src:e.image.file,alt:""}),s.default.createElement("p",{className:"mb-5"},e.text),s.default.createElement(u.NavLink,{className:"btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss mr-2",to:o},s.default.createElement("i",{className:"fa fa-external-link mr-2"}),"Details"),s.default.createElement("a",{className:"btn btn-primary btn-lg rounded-pill portfolio-modal-close",href:""},s.default.createElement("i",{className:"fa fa-close mr-2"}),"Close"))))))});return s.default.createElement("div",{className:"bg-white"},s.default.createElement("section",{className:"portfolio ",id:"portfolio"},s.default.createElement("div",{className:"container"},s.default.createElement("h2",{className:"text-center text-uppercase text-secondary mb-0"},"Portfolio"),s.default.createElement("hr",{className:"star-dark mb-5"}),s.default.createElement("div",{className:"row"},t))),o)}}]),t}(s.default.Component);b.propTypes={data:m.default.object.isRequired},t.default=b},244:function(e,t,o){var a=o(245);"string"===typeof a&&(a=[[e.i,a,""]]);var l={hmr:!1};l.transform=void 0;o(218)(a,l);a.locals&&(e.exports=a.locals)},245:function(e,t,o){t=e.exports=o(217)(!0),t.push([e.i,"bg-white{background:#fff}","",{version:3,sources:["/Users/noel.wilson/Projects/noelwilson_2018/src/client/src/components/Portfolio/Portfolio.css"],names:[],mappings:"AAAA,SACI,eAAmB,CACtB",file:"Portfolio.css",sourcesContent:["bg-white{\n    background:#ffffff;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=1.fa9f499a.chunk.js.map