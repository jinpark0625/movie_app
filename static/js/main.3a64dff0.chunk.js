(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{34:function(e,n,t){},53:function(e,n,t){},55:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),s=t(19),i=t.n(s),c=t(7),o=t.n(c),d=t(20),l=t(21),m=t(22),u=t(28),j=t(27),b=t(3),v=(t(34),t(1));var p,h,g,O,x=function(e){e.id;var n=e.year,t=e.title,a=e.summary,r=e.poster,s=e.genres;return Object(v.jsxs)("div",{className:"movie",children:[Object(v.jsx)("img",{src:r,alt:t,title:t}),Object(v.jsxs)("div",{className:"movie__dat",children:[Object(v.jsx)("h3",{className:"movie__title",children:t}),Object(v.jsx)("h5",{className:"movie__year",children:n}),Object(v.jsxs)("p",{className:"movie__summary",children:[a.slice(0,140),"..."]}),Object(v.jsx)("ul",{className:"genres",children:s.map((function(e,n){return Object(v.jsx)("li",{className:"genres__genre",children:e},n)}))})]})]})},_=t(23),y=t.n(_),f=(t(53),t(4));Object(f.a)(p||(p=Object(b.a)(["\n  body{\n    padding:0;\n    margin:0;\n  }\n"])));var N=function(e){Object(u.a)(t,e);var n=Object(j.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=n.call.apply(n,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(o.a.mark((function n(){var t,a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=n.sent,a=t.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return n.stop()}}),n)}))),e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,n=e.isLoading,t=e.movies;return Object(v.jsx)("section",{className:"container",children:n?Object(v.jsx)("div",{className:"loader",children:Object(v.jsx)("span",{className:"loader__text",children:'"Loading..."'})}):Object(v.jsx)("div",{className:"movies",children:t.map((function(e){return Object(v.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),t}(r.a.Component),k=f.b.div(h||(h=Object(b.a)(["\n  background-color: red;\n"]))),w=(f.b.div(g||(g=Object(b.a)(["\n  height: 400px;\n  width: 400px;\n  background-color: pink;\n  "," {\n    background-color: blue;\n  }\n"])),k),f.b.button(O||(O=Object(b.a)(["\n  border-radius: 30px;\n  padding: 25px 15px;\n  background-color: ",";\n"])),(function(e){return e.theme.mainColor})),N);i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(w,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.3a64dff0.chunk.js.map