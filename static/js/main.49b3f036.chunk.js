(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(62)},40:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(32),s=a.n(l),c=a(2),i=a(3),o=a(5),m=a(4),u=a(6),h=(a(40),a(16)),d=a(7),p=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"ui large active loader"}))},E=a(8),v=a.n(E),f=function(e){var t={flag:e.info.flag,name:e.info.name,population:function(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")}(e.info.population),region:e.info.region,capital:e.info.capital};return r.a.createElement("div",{className:"card"},r.a.createElement(d.b,{id:t.name,className:"country element",to:"/country/"+t.name},r.a.createElement("div",{className:"ui image"},r.a.createElement("img",{src:t.flag,alt:t.name})),r.a.createElement("div",{className:"country-name-container content"},r.a.createElement("div",{style:t.name.length>19?{fontSize:"120%"}:null,className:"ui huge header name"},t.name),r.a.createElement("div",{className:"extra"},r.a.createElement("li",null,r.a.createElement("span",{className:"ui header small"},"Population: "),r.a.createElement("span",null,t.population)),r.a.createElement("li",null,r.a.createElement("span",{className:"ui header small"},"Region: "),r.a.createElement("span",null,t.region)),r.a.createElement("li",null,r.a.createElement("span",{className:"ui header small"},"Capital: "),r.a.createElement("span",null,t.capital))))))},g=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"scrollUp",value:function(){window.scrollTo(0,0),document.querySelector("#search-field").focus()}},{key:"scrollToLetter",value:function(e){return"#"+this.props.countries.map(function(e){return e.name}).filter(function(t){return t.startsWith(e)})[0]}},{key:"componentDidMount",value:function(){console.log(window.location.pathname),window.addEventListener("scroll",function(e){window.pageYOffset>100?document.querySelector(".letterNav").classList.add("scrolled"):document.querySelector(".letterNav")&&document.querySelector(".letterNav").classList.remove("scrolled"),e.preventDefault()})}},{key:"componentWillUnmount",value:function(){if("/"===!window.location.pathname){window.removeEventListener("scroll",function(){})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"letterNav"},r.a.createElement("div",null,r.a.createElement("button",{className:"ui icon button",onClick:this.scrollUp.bind(this)},r.a.createElement("i",{className:"search icon",style:{fontSize:"10px"}}))),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("A")},"A")),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("B")},"B")),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("C")},"C")),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("D")},"D")),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("E")},"E")),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("F")},"F")),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("G")},"G")),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("H")},"H")),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("I")},"I")),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("J")},"J")),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("K")},"K")),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("L")},"L")),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("M")},"M")),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("N")},"N")),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("O")},"O")),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("P")},"P")),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("Q")},"Q")),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("R")},"R")),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("S")},"S")),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("T")},"T")),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("U")},"U")),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("V")},"V")),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("W")},"W")),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("X")},"X")),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("Y")},"Y")),r.a.createElement("div",null,r.a.createElement("a",{href:this.scrollToLetter("Z")},"Z")))}}]),t}(r.a.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"checkEmpty",value:function(){return this.props.countries.length>0?r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"twelve wide column"},r.a.createElement("div",{className:"ui stackable cards"},this.props.countries.map(function(e,t){return r.a.createElement(f,{info:e,key:t})}))),r.a.createElement("div",{className:"four wide column"},r.a.createElement(g,{countries:this.props.countries}))):r.a.createElement("div",{className:"ui huge header no-results"},"No Countries Found")}},{key:"render",value:function(){return r.a.createElement("section",{id:"countries-container"},this.checkEmpty())}}]),t}(r.a.Component),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!1,value:"",typing:!1,typingTimeout:0,countries:[]},a.changeName=function(e){var t=Object(h.a)(a);t.state.typingTimeout&&clearTimeout(t.state.typingTimeout),t.setState({value:e.target.value,typing:!1,typingTimeout:setTimeout(function(){t.searchCountry(t.state.value)},1e3)})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"searchCountry",value:function(e){var t=this;""!==e?(console.log(e),v.a.get("https://restcountries.eu/rest/v2/name/"+e).then(function(e){t.setState({isLoading:!1,countries:e.data}),console.log(e)}).catch(function(e){console.log(e),t.setState({isLoading:!1,countries:[]})})):this.setState({isLoading:!1,countries:this.props.countries})}},{key:"checkLoad",value:function(){return this.state.isLoading?r.a.createElement(p,null):r.a.createElement(y,{countries:0===this.state.value.length?this.props.countries:this.state.countries})}},{key:"componentDidUpdate",value:function(e,t){""!==this.state.value&&this.state.value!==t.value&&(this.setState({isLoading:!0}),this.searchCountry(this.state.value))}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui container main"},r.a.createElement("section",null,r.a.createElement("div",{id:"sub-header",className:"ui stackable grid"},r.a.createElement("div",{className:"ui eight wide column"},r.a.createElement("div",{className:"ui left icon input element"},r.a.createElement("i",{className:"search icon"}),r.a.createElement("input",{id:"search-field",value:this.state.value,onChange:this.changeName.bind(this),type:"text",placeholder:"Search for a country..."}))),r.a.createElement("div",{className:"ui six wide column"},r.a.createElement("div",{className:"ui compact right floated menu element"},r.a.createElement("div",{id:"filter",className:"ui simple dropdown item"},"Filter by Region",r.a.createElement("i",{className:"dropdown icon"}),r.a.createElement("div",{className:"menu"},r.a.createElement(d.b,{to:"/",className:"item"},"All"),r.a.createElement(d.b,{to:"/region/africa",className:"item"},"Africa"),r.a.createElement(d.b,{to:"/region/americas",className:"item"},"Americas"),r.a.createElement(d.b,{to:"/region/asia",className:"item"},"Asia"),r.a.createElement(d.b,{to:"/region/europe",className:"item"},"Europe"),r.a.createElement(d.b,{to:"/region/oceania",className:"item"},"Oceania"))))))),this.checkLoad())}}]),t}(r.a.Component),b=function(e){return r.a.createElement("div",{id:"header"},r.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"/world-countries/"+e.stylePath}),r.a.createElement("header",{className:"ui menu fixed"},r.a.createElement("div",{className:"ui container"},r.a.createElement("div",{className:"ui left item header"},"Where in the world?"),r.a.createElement("div",{className:"ui right item"},r.a.createElement("button",{className:"ui labeled icon button element",onClick:e.switchTheme},r.a.createElement("i",{className:"moon icon"}),r.a.createElement("span",null,e.styleMode," Mode"))))))},L=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={stylePath:a.props.stylePath,styleMode:a.props.styleMode,countries:[],isLoading:!0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"checkLoad",value:function(){return this.state.isLoading?r.a.createElement(p,null):this.state.countries?r.a.createElement(N,{countries:this.state.countries}):void 0}},{key:"componentDidMount",value:function(){var e=this;v.a.get("https://restcountries.eu/rest/v2/all").then(function(t){e.setState({countries:t.data,isLoading:!1}),console.log(e.state.countries)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,{switchTheme:this.props.switchTheme,stylePath:this.props.stylePath,styleMode:this.props.styleMode}),this.checkLoad())}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.regionName&&this.props.regionName!==e.regionName?(this.setState({isLoading:!0}),v.a.get("https://restcountries.eu/rest/v2/region/"+this.props.regionName).then(function(e){t.setState({countries:e.data,isLoading:!1}),console.log(t.state.countries)})):!this.props.regionName&&e.regionName&&(this.setState({isLoading:!0}),v.a.get("https://restcountries.eu/rest/v2/all").then(function(e){t.setState({countries:e.data,isLoading:!1}),console.log(t.state.countries)}))}}]),t}(r.a.Component);L.defaultProps={regionName:null};var k=L,w=a(20),T=function(e){return r.a.createElement(d.b,{to:"/country/"+e.countryName},r.a.createElement("button",{className:"ui button element"},e.countryName))},O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={names:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){for(var e=this,t=0;t<this.props.alphas.length;t++)v.a.get("https://restcountries.eu/rest/v2/alpha/"+this.props.alphas[t]).then(function(t){console.log(t),e.setState({names:[].concat(Object(w.a)(e.state.names),[t.data.name])})});console.log(this.state.names)}},{key:"render",value:function(){return r.a.createElement("span",null,this.state.names.map(function(e,t){return r.a.createElement(T,{countryName:e,key:t})}))}},{key:"componentDidUpdate",value:function(e){var t=this;if(e.alphas&&this.props.alphas!==e.alphas){this.setState({names:[]});for(var a=0;a<this.props.alphas.length;a++)v.a.get("https://restcountries.eu/rest/v2/alpha/"+this.props.alphas[a]).then(function(e){console.log(e),t.setState({names:[].concat(Object(w.a)(t.state.names),[e.data.name])})})}}}]),t}(r.a.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e={flag:this.props.country.flag,name:this.props.country.name,nativeName:this.props.country.nativeName,population:function(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")}(this.props.country.population),region:this.props.country.region,subRegion:this.props.country.subRegion,capital:this.props.country.capital,topLevelDomain:this.props.country.topLevelDomain[0],currencies:this.props.country.currencies[0].name,languages:this.props.country.languages};return r.a.createElement("div",null,r.a.createElement("section",{id:"country-info"},r.a.createElement("div",{className:"ui container stackable grid "},r.a.createElement("div",{className:"eight wide column"},r.a.createElement("div",{className:"ui image"},r.a.createElement("img",{src:e.flag,alt:e.name}))),r.a.createElement("div",{className:"eight wide column"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"ui huge header"},e.name)),r.a.createElement("div",{className:"ui stackable grid"},r.a.createElement("div",{className:"eight wide column"},r.a.createElement("div",{className:"ui content"},r.a.createElement("li",{className:"item"},r.a.createElement("span",{className:"ui small header"},"Native Name: "),e.nativeName),r.a.createElement("li",{className:"item"},r.a.createElement("span",{className:"ui small header"},"Population: "),e.population),r.a.createElement("li",{className:"item"},r.a.createElement("span",{className:"ui small header"},"Region: "),e.region),r.a.createElement("li",{className:"item"},r.a.createElement("span",{className:"ui small header"},"Sub Region: "),e.subRegion),r.a.createElement("li",{className:"item"},r.a.createElement("span",{className:"ui small header"},"Capital: "),e.capital))),r.a.createElement("div",{className:"eight wide column"},r.a.createElement("div",{className:"ui content"},r.a.createElement("li",{className:"item"},r.a.createElement("span",{className:"ui small header"},"Top Level Domain:"," "),e.topLevelDomian),r.a.createElement("li",{className:"item"},r.a.createElement("span",{className:"ui small header"},"Currencies: "),e.currencies),r.a.createElement("li",{className:"item"},r.a.createElement("span",{className:"ui small header"},"Languages: "),e.languages.map(function(t,a){return r.a.createElement("span",{key:a},t.name," ",a<e.languages.length-1?", ":"")}))))),r.a.createElement("div",{className:"ui stackable grid"},r.a.createElement("span",{className:"ui header six wide column"},"Border Countries:"),r.a.createElement("div",{className:"ten wide column"},r.a.createElement(O,{alphas:this.props.country.borders})))))))}}]),t}(r.a.Component),S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,country:null,borders:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"checkLoad",value:function(){return this.state.isLoading?r.a.createElement(p,null):r.a.createElement(j,{country:this.state.country,countryName:this.props.countryName})}},{key:"componentDidMount",value:function(){var e=this;v.a.get("https://restcountries.eu/rest/v2/name/"+this.props.countryName+"?fullText=true").then(function(t){if(t){e.setState({isLoading:!1,country:t.data[0]}),console.log(e.state.country);for(var a=0;a<e.state.country.borders;a++)v.a.get("https://restcountries.eu/rest/v2/alpha/"+a).then(function(t){e.setState({borders:t.data}),console.log(e.state.borders)})}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,{switchTheme:this.props.switchTheme,stylePath:this.props.stylePath,styleMode:this.props.styleMode}),r.a.createElement("div",{className:"ui container content"},r.a.createElement(d.b,{to:"/"},r.a.createElement("section",{id:"back-btn"},r.a.createElement("div",{className:"ui labeled icon button element"},r.a.createElement("i",{className:"long arrow left alternate large icon"}),"Back"))),this.checkLoad()))}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.countryName!==e.countryName&&v.a.get("https://restcountries.eu/rest/v2/name/"+this.props.countryName+"?fullText=true").then(function(e){if(e){t.setState({isLoading:!1,country:e.data[0]}),console.log(t.state.country);for(var a=0;a<t.state.country.borders;a++)v.a.get("https://restcountries.eu/rest/v2/alpha/"+a).then(function(e){t.setState({borders:e.data}),console.log(t.state.borders)})}})}}]),t}(r.a.Component),M=a(13),P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={stylePath:"darkmode.css",styleMode:"Dark"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"switchTheme",value:function(){"darkmode.css"===this.state.stylePath?this.setState({stylePath:"lightmode.css",styleMode:"Light"}):this.setState({stylePath:"darkmode.css",styleMode:"Dark"})}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,{basename:"/world-countries"},r.a.createElement(M.c,null,r.a.createElement(M.a,{path:"/",exact:!0,render:function(){return r.a.createElement(k,{switchTheme:e.switchTheme.bind(e),stylePath:e.state.stylePath,styleMode:e.state.styleMode})}}),r.a.createElement(M.a,{path:"/region/:regionName",exact:!0,render:function(t){var a=t.match.params.regionName;return r.a.createElement(k,{regionName:a,switchTheme:e.switchTheme.bind(e),stylePath:e.state.stylePath,styleMode:e.state.styleMode})}}),r.a.createElement(M.a,{path:"/country/:countryName",exact:!0,render:function(t){var a=t.match.params.countryName;return r.a.createElement(S,{countryName:a,switchTheme:e.switchTheme.bind(e),stylePath:e.state.stylePath,styleMode:e.state.styleMode})}})))}}]),t}(r.a.Component);s.a.render(r.a.createElement(P,null),document.querySelector("#root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.49b3f036.chunk.js.map