(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"bulbasaur","types":["poison","grass"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{"id":2,"name":"ivysaur","types":["poison","grass"],"evolution":"bulbasaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{"id":3,"name":"venusaur","types":["poison","grass"],"evolution":"ivysaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{"id":4,"name":"charmander","types":["fire"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{"id":7,"name":"squirtle","types":["water"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{"id":10,"name":"caterpie","types":["bug"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]')},,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){"use strict";s.r(t);var r=s(1),n=s.n(r),o=s(3),a=s.n(o),i=(s(13),s(4)),p=s(5),c=s(8),u=s(7),m=(s(14),s(6)),l=(s(15),s(16),s(0));var h=function(e){var t=e.types.map((function(e,t){return Object(l.jsx)("li",{className:"pokemon__list--type ".concat(e),children:e},t)}));return Object(l.jsxs)("article",{className:"pokemon",children:[Object(l.jsx)("img",{className:"pokemon__img",src:e.imgSrc,alt:e.name}),Object(l.jsx)("h2",{className:"pokemon__name",children:e.name}),Object(l.jsx)("ul",{className:"pokemon__list",children:t})]})};var b=function(e){var t=e.pokemonArray.map((function(e){return Object(l.jsx)("li",{className:"pokelist__list--item",children:Object(l.jsx)(h,{name:e.name,imgSrc:e.url,types:e.types})},e.id)}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"pokelist__title",children:"Mi lista de pokemon"}),Object(l.jsx)("ul",{className:"pokelist__list",children:t})]})},k=function(e){Object(c.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(i.a)(this,s),(r=t.call(this,e)).state={data:m},r}return Object(p.a)(s,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(b,{pokemonArray:this.state.data,className:"pokelist"})})}}]),s}(n.a.Component);a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.0311694b.chunk.js.map