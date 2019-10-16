(this["webpackJsonptiff-react-app"]=this["webpackJsonptiff-react-app"]||[]).push([[0],{27:function(e,t,n){e.exports=n(56)},32:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(22),o=n.n(i),l=(n(32),n(2)),c=n.n(l),s=n(7),d=n(3),m=n(8),u=n.n(m),p=n(4),f=n.n(p),g="https://image.tmdb.org/t/p/w500",v="352c55e279d9d9f8222ca67b0952bcb0",h=n(5),b=n(6),y={header:{fontSize:42,fontWeight:500},body:{fontSize:19,fontWeight:400}};function x(e){var t;switch(e.variant){case"header":t="header";break;case"body":t="body";break;default:t="body"}return r.a.createElement("div",{style:y[t]},e.children)}function E(){var e=Object(h.a)(["\n\tborder: 6px solid black;\n\t&:hover {\n\t    border: 6px solid orange;\n\t}\n"]);return E=function(){return e},e}var w={listItem:{width:200,margin:10},listItemContent:{height:300,width:200,overflow:"hidden",marginBottom:10,cursor:"pointer"},image:{height:"100%"},hoverCover:{position:"absolute"}},k=b.a.div(E());function j(e){return r.a.createElement("div",{style:w.listItem,onClick:e.onClick},r.a.createElement(k,{style:w.listItemContent},r.a.createElement("img",{style:w.image,src:e.imageUrl,alt:e.title})),r.a.createElement(x,{variant:"body"},e.name))}var O={toolbar:{display:"flex",padding:"15px 25px",position:"fixed",height:50,background:"white",width:"100%"},logo:{alignSelf:"center",height:45}};function C(e){return r.a.createElement("div",{style:O.toolbar},r.a.createElement("img",{style:O.logo,src:"tiff-logo.jpg",alt:"tiff logo"}))}function I(){var e=Object(h.a)(["\n\tanimation: "," 2s linear infinite;\n\theight: 50px;\n"]);return I=function(){return e},e}function _(){var e=Object(h.a)(["\n\t0% { \n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n"]);return _=function(){return e},e}var S=Object(b.b)(_()),W=b.a.img(I(),S);function R(){return r.a.createElement(W,{src:"tiff-movie-icon.png"})}var U={modal:{background:"white",position:"fixed",top:0,bottom:0,left:0,right:0,margin:"3% 20%",padding:20,borderRadius:2,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",overflow:"auto"},imageContainer:{height:280,margin:"15px 0px",overflow:"hidden"},image:{width:"100%"},closeIcon:{cursor:"pointer",textAlign:"right",position:"absolute",right:0,top:0,padding:10,height:20},details:{maxHeight:95,overflow:"auto",margin:"10px 0"},genres:{display:"flex"},pill:{border:"1px solid orange",borderRadius:2,padding:5,margin:"0px 5px",color:"orange"},loader:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}};function B(e){var t=Object(a.useState)(),n=Object(d.a)(t,2),i=n[0],o=n[1];return Object(a.useEffect)((function(){(function(){var t=Object(s.a)(c.a.mark((function t(){var n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("https://api.themoviedb.org/3/movie/".concat(e.movieId,"?api_key=").concat(v));case 2:n=t.sent,a=n.data,o(a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{style:U.modal},i?r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{style:U.closeIcon,src:"close-icon.png",onClick:e.closeModal}),r.a.createElement("div",{style:U.imageContainer},r.a.createElement("img",{style:U.image,src:e.imageUrl,alt:e.title})),r.a.createElement(x,{variant:"body"},e.title),r.a.createElement("p",null,i.tagline),r.a.createElement("div",{style:U.modalContent},r.a.createElement("div",{style:U.details},e.details),r.a.createElement("p",null,"Runtime: ",i.runtime),r.a.createElement("div",{style:U.genres},f.a.map(i.genres,(function(e){return r.a.createElement("div",{key:e.id,id:i.id,style:U.pill},e.name)}))))):r.a.createElement("div",{style:U.loader},r.a.createElement(R,null)))}var z={root:{fontFamily:"Roboto",height:"100vh",display:"flex",flexDirection:"column"},body:{flex:1,padding:"20px 40px",background:"black",marginTop:80},loader:{flex:1,display:"flex",justifyContent:"center",alignItems:"center"},content:{display:"flex",flexWrap:"wrap",justifyContent:"center"},movie:{display:"flex"}};var F=function(){var e=Object(a.useState)(),t=Object(d.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(!1),l=Object(d.a)(o,2),m=l[0],p=l[1],h=Object(a.useState)(""),b=Object(d.a)(h,2),y=b[0],x=b[1];Object(a.useEffect)((function(){(function(){var e=Object(s.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://api.themoviedb.org/3/discover/movie?api_key=".concat(v,"&sort_by=release_date.desc&primary_release_year=2019&vote_count.gte=10"));case 2:t=e.sent,n=t.data,i(f.a.filter(n.results,(function(e){return e.popularity>10})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var E=function(){p(!1)};return r.a.createElement("div",{style:z.root},r.a.createElement(C,null),n?r.a.createElement("div",{style:z.body},r.a.createElement("div",{style:z.content},f.a.map(n,(function(e){var t=e.id,n=e.title,a=e.poster_path,i=e.overview,o=e.backdrop_path,l=o||a;return r.a.createElement("div",{key:t,style:z.movie},r.a.createElement(j,{key:t,name:n,imageUrl:g+a,onClick:function(){return function(e){p(!0),x(e)}(t)},title:n}),m&&y===t&&r.a.createElement(B,{closeModal:E,imageUrl:g+l,title:n,details:i,movieId:t}))})))):r.a.createElement("div",{style:z.loader},r.a.createElement(R,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.958dfd76.chunk.js.map