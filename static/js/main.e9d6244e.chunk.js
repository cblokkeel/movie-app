(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{16:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){},19:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t(1),c=t.n(s),r=t(4),i=t.n(r),o=t(3),l=t.n(o),h=t(5),u=t(6),p=t(7),v=t(9),b=t(8),g=(t(16),t(17),function(e){var a=e.movies;return Object(n.jsx)("div",{className:"movies-container",children:a.results?a.results.map((function(e){return Object(n.jsx)("img",{src:"https://image.tmdb.org/t/p/w342".concat(e.poster_path),alt:"",className:"movie"})})):Object(n.jsx)("p",{children:"Search for movies !"})})}),j=(t(18),function(e){var a=e.page,t=e.totalPages,s=e.handleClick;return Object(n.jsxs)("div",{className:"arrows-container",children:[Object(n.jsx)("a",{href:"#",onClick:s,className:"".concat(a>1?"available":"non-available"," nav-button prev"),children:"Previous page"}),Object(n.jsx)("a",{href:"#",onClick:s,className:"".concat(a<t?"available":"non-available"," nav-button next"),children:"Next page"})]})}),m=(t(19),function(e){var a=e.handleChange,t=e.searchBar;return Object(n.jsx)("form",{className:"search-movies-form",children:Object(n.jsx)("input",{type:"text",placeholder:"Search movies...",className:"movies-searchbar",onChange:a,value:t})})}),d=function(e){Object(v.a)(t,e);var a=Object(b.a)(t);function t(){var e;return Object(u.a)(this,t),(e=a.call(this)).handleChange=function(a){e.setState({searchBar:a.target.value}),e.fetchData(e.state.page)},e.changeMoviesData=function(a){e.setState({movies:a}),e.setState({totalPages:a.total_pages})},e.fetchData=function(){var a=Object(h.a)(l.a.mark((function a(t){var n,s;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=9b338157d5ebb394c709552b0aa23e36&language=en-US&query=".concat(e.state.searchBar,"&page=").concat(t,"&include_adult=false"));case 2:return n=a.sent,a.next=5,n.json();case 5:s=a.sent,e.changeMoviesData(s);case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.handleClick=function(a){var t=Array.from(a.target.classList),n=e.state.page;t.includes("available")&&(t.includes("next")?(e.setState({page:e.state.page+1}),n++):(e.setState({page:e.state.page-1}),n--),e.fetchData(n))},e.state={searchBar:"",movies:{},page:1,totalPages:1},e}return Object(p.a)(t,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(m,{searchBar:this.state.searchBar,handleChange:this.handleChange}),Object(n.jsx)(g,{movies:this.state.movies}),Object(n.jsx)(j,{handleClick:this.handleClick,page:this.state.page,totalPages:this.state.totalPages})]})}}]),t}(s.Component);i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(d,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.e9d6244e.chunk.js.map