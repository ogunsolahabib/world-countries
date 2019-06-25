(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(60)},60:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(31),i=a.n(r),c=a(6),l=a(7),o=a(9),m=a(8),u=a(10),h=a(16),d=a(2),p=function(e){return s.a.createElement("div",null,s.a.createElement("div",{className:"ui large active loader"}))},g=function(e){var t={flag:e.info.flag,name:e.info.name,population:function(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")}(e.info.population),region:e.info.region,capital:e.info.capital};return s.a.createElement(d.b,{className:"country",to:"/country/"+t.name},s.a.createElement("div",{className:"ui link cards"},s.a.createElement("div",{className:"card element"},s.a.createElement("div",{className:"image"},s.a.createElement("img",{src:t.flag,alt:t.name})),s.a.createElement("div",{className:"country-name-container content"},s.a.createElement("div",{className:"ui huge header"},t.name)),s.a.createElement("div",{className:"extra content"},s.a.createElement("li",null,s.a.createElement("span",{className:"ui header small"},"Population: "),s.a.createElement("span",null,t.population)),s.a.createElement("li",null,s.a.createElement("span",{className:"ui header small"},"Region: "),s.a.createElement("span",null,t.region)),s.a.createElement("li",null,s.a.createElement("span",{className:"ui header small"},"Capital: "),s.a.createElement("span",null,t.capital))))))},y=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("section",{id:"countries-container"},s.a.createElement("div",{className:"ui link cards"},this.props.countries.map(function(e,t){return s.a.createElement(g,{info:e,key:t})}))))}}]),t}(s.a.Component),v=a(4),E=a.n(v),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={isLoading:!1,value:"",typing:!1,typingTimeout:0,countries:[]},a.changeName=function(e){var t=Object(h.a)(a);t.state.typingTimeout&&clearTimeout(t.state.typingTimeout),t.setState({value:e.target.value,typing:!1,typingTimeout:setTimeout(function(){t.searchCountry(t.state.value)},1e3)})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"searchCountry",value:function(e){var t=this;""!==e&&(console.log(e),E.a.get("https://restcountries.eu/rest/v2/name/"+e).then(function(e){t.setState({isLoading:!1,countries:e.data}),console.log(e)}))}},{key:"checkLoad",value:function(){return this.state.isLoading?s.a.createElement(p,null):s.a.createElement(y,{countries:0===this.state.countries.length?this.props.countries:this.state.countries})}},{key:"componentDidUpdate",value:function(e,t){""!==this.state.value&&this.state.value!==t.value&&(this.setState({isLoading:!0}),this.searchCountry(this.state.value))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"ui container"},s.a.createElement("section",null,s.a.createElement("div",{className:"ui container"},s.a.createElement("div",{className:"ui stackable grid"},s.a.createElement("div",{className:"ui eight wide column"},s.a.createElement("div",{className:"ui left icon input element"},s.a.createElement("i",{className:"search icon"}),s.a.createElement("input",{value:this.state.value,onChange:this.changeName.bind(this),type:"text",placeholder:"Search for a country..."}))),s.a.createElement("div",{className:"ui six wide column"},s.a.createElement("div",{className:"ui compact right floated menu element"},s.a.createElement("div",{id:"filter",className:"ui simple dropdown item"},"Filter by Region",s.a.createElement("i",{className:"dropdown icon"}),s.a.createElement("div",{className:"menu"},s.a.createElement(d.b,{to:"/",className:"item"},"All"),s.a.createElement(d.b,{to:"/region/africa",className:"item"},"Africa"),s.a.createElement(d.b,{to:"/region/americas",className:"item"},"Americas"),s.a.createElement(d.b,{to:"/region/asia",className:"item"},"Asia"),s.a.createElement(d.b,{to:"/region/europe",className:"item"},"Europe"),s.a.createElement(d.b,{to:"/region/oceania",className:"item"},"Oceania")))))))),this.checkLoad()))}}]),t}(s.a.Component),f=function(e){return s.a.createElement("div",null,s.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"/"+e.stylePath}),s.a.createElement("header",{className:"ui menu",id:"header"},s.a.createElement("div",{className:"ui container"},s.a.createElement("div",{className:"ui left item header"},"Where in the world?"),s.a.createElement("div",{className:"ui right item "},s.a.createElement("button",{className:"ui labeled icon button element",onClick:e.switchTheme},s.a.createElement("i",{className:"moon icon"}),s.a.createElement("span",null,e.styleMode," Mode"))))))},b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={stylePath:a.props.stylePath,styleMode:a.props.styleMode,countries:[],isLoading:!0},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"checkLoad",value:function(){return this.state.isLoading?s.a.createElement(p,null):this.state.countries?s.a.createElement(N,{countries:this.state.countries}):void 0}},{key:"componentDidMount",value:function(){var e=this;E.a.get("https://restcountries.eu/rest/v2/all").then(function(t){e.setState({countries:t.data,isLoading:!1}),console.log(e.state.countries)})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(f,{switchTheme:this.props.switchTheme,stylePath:this.props.stylePath,styleMode:this.props.styleMode}),this.checkLoad())}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.regionName&&this.props.regionName!==e.regionName?(this.setState({isLoading:!0}),E.a.get("https://restcountries.eu/rest/v2/region/"+this.props.regionName).then(function(e){t.setState({countries:e.data,isLoading:!1}),console.log(t.state.countries)})):!this.props.regionName&&e.regionName&&(this.setState({isLoading:!0}),E.a.get("https://restcountries.eu/rest/v2/all").then(function(e){t.setState({countries:e.data,isLoading:!1}),console.log(t.state.countries)}))}}]),t}(s.a.Component);b.defaultProps={regionName:null};var k=b,w=function(e){return s.a.createElement(d.b,{to:"/country/"+e.countryName},s.a.createElement("button",{className:"ui button element"},e.countryName))},j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={borderCountries:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.country.borders);for(var t=[],a=0;a<this.props.country.borders.length;a++)E.a.get("https://restcountries.eu/rest/v2/alpha/"+this.props.country.borders[a]).then(function(a){t.push(a.data.name),console.log(t),e.setState({borderCountries:t})})}},{key:"render",value:function(){var e={flag:this.props.country.flag,name:this.props.country.name,nativeName:this.props.country.nativeName,population:function(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")}(this.props.country.population),region:this.props.country.region,subRegion:this.props.country.subRegion,capital:this.props.country.capital,topLevelDomain:this.props.country.topLevelDomain[0],currencies:this.props.country.currencies[0].name,languages:this.props.country.languages,borderCountries:this.state.borderCountries};return s.a.createElement("div",null,s.a.createElement("section",{id:"country-info"},s.a.createElement("div",{className:"ui container stackable grid "},s.a.createElement("div",{className:"eight wide column"},s.a.createElement("div",{className:"ui image"},s.a.createElement("img",{src:e.flag,alt:e.name}))),s.a.createElement("div",{className:"eight wide column"},s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"ui huge header"},e.name)),s.a.createElement("div",{className:"ui stackable grid"},s.a.createElement("div",{className:"eight wide column"},s.a.createElement("div",{className:"ui content"},s.a.createElement("li",{className:"item"},s.a.createElement("span",{className:"ui small header"},"Native Name: "),e.nativeName),s.a.createElement("li",{className:"item"},s.a.createElement("span",{className:"ui small header"},"Population: "),e.population),s.a.createElement("li",{className:"item"},s.a.createElement("span",{className:"ui small header"},"Region: "),e.region),s.a.createElement("li",{className:"item"},s.a.createElement("span",{className:"ui small header"},"Sub Region: "),e.subRegion),s.a.createElement("li",{className:"item"},s.a.createElement("span",{className:"ui small header"},"Capital: "),e.capital))),s.a.createElement("div",{className:"eight wide column"},s.a.createElement("div",{className:"ui content"},s.a.createElement("li",{className:"item"},s.a.createElement("span",{className:"ui small header"},"Top Level Domain:"," "),e.topLevelDomian),s.a.createElement("li",{className:"item"},s.a.createElement("span",{className:"ui small header"},"Currencies: "),e.currencies),s.a.createElement("li",{className:"item"},s.a.createElement("span",{className:"ui small header"},"Languages: "),e.languages.map(function(t,a){return s.a.createElement("span",{key:a},t.name," ",a<e.languages.length-1?", ":"")}))))),s.a.createElement("div",{className:"ui stackable grid"},s.a.createElement("span",{className:"ui header six wide column"},"Border Countries:"),s.a.createElement("div",{className:"ten wide column"},e.borderCountries.map(function(e,t){return s.a.createElement(w,{countryName:e,key:t})})))))))}}]),t}(s.a.Component),O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={isLoading:!0,country:null,borders:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"checkLoad",value:function(){return this.state.isLoading?s.a.createElement(p,null):s.a.createElement(j,{country:this.state.country,countryName:this.props.countryName})}},{key:"componentDidMount",value:function(){var e=this;E.a.get("https://restcountries.eu/rest/v2/name/"+this.props.countryName+"?fullText=true").then(function(t){if(t){e.setState({isLoading:!1,country:t.data[0]}),console.log(e.state.country);for(var a=0;a<e.state.country.borders;a++)E.a.get("https://restcountries.eu/rest/v2/alpha/"+a).then(function(t){e.setState({borders:t.data}),console.log(e.state.borders)})}})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(f,{switchTheme:this.props.switchTheme,stylePath:this.props.stylePath,styleMode:this.props.styleMode}),s.a.createElement("div",{className:"ui container content"},s.a.createElement(d.b,{to:"/"},s.a.createElement("section",{id:"back-btn"},s.a.createElement("div",{className:"ui labeled icon button element"},s.a.createElement("i",{className:"long arrow left alternate large icon"}),"Back"))),this.checkLoad()))}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.countryName!==e&&E.a.get("https://restcountries.eu/rest/v2/name/"+this.props.countryName+"?fullText=true").then(function(e){if(e){t.setState({isLoading:!1,country:e.data[0]}),console.log(t.state.country);for(var a=0;a<t.state.country.borders;a++)E.a.get("https://restcountries.eu/rest/v2/alpha/"+a).then(function(e){t.setState({borders:e.data}),console.log(t.state.borders)})}})}}]),t}(s.a.Component),L=a(13),T=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={stylePath:"darkmode.css",styleMode:"Dark"},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"switchTheme",value:function(){"darkmode.css"===this.state.stylePath?this.setState({stylePath:"lightmode.css",styleMode:"Light"}):this.setState({stylePath:"darkmode.css",styleMode:"Dark"})}},{key:"render",value:function(){var e=this;return s.a.createElement(d.a,{basename:"/world-countries"},s.a.createElement(L.c,null,s.a.createElement(L.a,{path:"/",exact:!0,render:function(){return s.a.createElement(k,{switchTheme:e.switchTheme.bind(e),stylePath:e.state.stylePath,styleMode:e.state.styleMode})}}),s.a.createElement(L.a,{path:"/region/:regionName",exact:!0,render:function(t){var a=t.match.params.regionName;return s.a.createElement(k,{regionName:a,switchTheme:e.switchTheme.bind(e),stylePath:e.state.stylePath,styleMode:e.state.styleMode})}}),s.a.createElement(L.a,{path:"/country/:countryName",exact:!0,render:function(t){var a=t.match.params.countryName;return s.a.createElement(O,{countryName:a,switchTheme:e.switchTheme.bind(e),stylePath:e.state.stylePath,styleMode:e.state.styleMode})}})))}}]),t}(s.a.Component);i.a.render(s.a.createElement(T,null),document.querySelector("#root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.fce81de5.chunk.js.map