(this.webpackJsonpletmeask=this.webpackJsonpletmeask||[]).push([[0],{24:function(e,t,a){},34:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),s=a(26),c=a.n(s),i=a(16),o=a(5),u=a(7),j=a.n(u),l=a(13),d=a(11),b=a.p+"static/media/illustration.ae7276f0.svg",p=a.p+"static/media/logo.a88331cb.svg",h=a.p+"static/media/google-icon.df15d8e5.svg",m=a(28),f=(a(34),a(1));function x(e){return Object(f.jsx)("button",Object(m.a)({className:"button"},e))}var O=a(18);a(36),a(38);O.a.initializeApp({apiKey:"AIzaSyCVn64k8EJvpC8EjdqAfzE6fxTE0FUKeSs",authDomain:"letmeask-ccdfb.firebaseapp.com",databaseURL:"https://letmeask-ccdfb-default-rtdb.firebaseio.com",projectId:"letmeask-ccdfb",storageBucket:"letmeask-ccdfb.appspot.com",messagingSenderId:"626885598668",appId:"1:626885598668:web:b3193deede2caa474f9169"});var v=O.a.auth(),g=O.a.database(),k=Object(n.createContext)({});function w(e){var t=Object(n.useState)(),a=Object(d.a)(t,2),r=a[0],s=a[1];function c(){return(c=Object(l.a)(j.a.mark((function e(){var t,a,n,r,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new O.a.auth.GoogleAuthProvider,e.next=3,v.signInWithPopup(t);case 3:if(!(a=e.sent).user){e.next=9;break}if(n=a.user,r=n.displayName,c=n.photoURL,i=n.uid,r&&c){e.next=8;break}throw new Error("Missing information from Google Account.");case 8:s({id:i,name:r,avatar:c});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){var e=v.onAuthStateChanged((function(e){if(e){var t=e.displayName,a=e.photoURL,n=e.uid;if(!t||!a)throw new Error("Missing information from Google Account.");s({id:n,name:t,avatar:a})}}));return function(){e()}}),[]),Object(f.jsx)(k.Provider,{value:{user:r,signInWithGoogle:function(){return c.apply(this,arguments)}},children:e.children})}function y(){return Object(n.useContext)(k)}a(24);function S(){var e=Object(o.f)(),t=y(),a=t.user,r=t.signInWithGoogle,s=Object(n.useState)(""),c=Object(d.a)(s,2),i=c[0],u=c[1];function m(){return(m=Object(l.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=3;break}return t.next=3,r();case 3:e.push("/rooms/new");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(){return(O=Object(l.a)(j.a.mark((function t(a){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),""!==i.trim()){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,g.ref("rooms/".concat(i)).get();case 5:if(t.sent.exists()){t.next=9;break}return alert("Room does not exists."),t.abrupt("return");case 9:e.push("/rooms/".concat(i));case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(f.jsxs)("div",{id:"page-auth",children:[Object(f.jsxs)("aside",{children:[Object(f.jsx)("img",{src:b,alt:"Ilustra\xe7\xe3o simbolizando pergunta e resposta"}),Object(f.jsx)("strong",{children:"Crie salas de Q&A ao-vivo"}),Object(f.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo-real"})]}),Object(f.jsx)("main",{children:Object(f.jsxs)("div",{className:"main-content",children:[Object(f.jsx)("img",{src:p,alt:"LetMeAsk"}),Object(f.jsxs)("button",{onClick:function(){return m.apply(this,arguments)},className:"create-room",children:[Object(f.jsx)("img",{src:h,alt:"Logo do Google"}),"Crie sua sala com o Google"]}),Object(f.jsx)("div",{className:"separator",children:"ou entre na sala"}),Object(f.jsxs)("form",{onSubmit:function(e){return O.apply(this,arguments)},children:[Object(f.jsx)("input",{type:"text",placeholder:"Digite o c\xf3digo da sala",onChange:function(e){return u(e.target.value)},value:i}),Object(f.jsx)(x,{type:"submit",children:"Entrar na sala"})]})]})})]})}function C(){var e=y().user,t=Object(o.f)(),a=Object(n.useState)(""),r=Object(d.a)(a,2),s=r[0],c=r[1];function u(){return(u=Object(l.a)(j.a.mark((function a(n){var r,c;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),""!==s.trim()){a.next=3;break}return a.abrupt("return");case 3:return r=g.ref("rooms"),a.next=6,r.push({title:s,authorId:null===e||void 0===e?void 0:e.id});case 6:c=a.sent,t.push("/rooms/".concat(c.key));case 8:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return Object(f.jsxs)("div",{id:"page-auth",children:[Object(f.jsxs)("aside",{children:[Object(f.jsx)("img",{src:b,alt:"Ilustra\xe7\xe3o simbolizando pergunta e resposta"}),Object(f.jsx)("strong",{children:"Crie salas de Q&A ao-vivo"}),Object(f.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo-real"})]}),Object(f.jsx)("main",{children:Object(f.jsxs)("div",{className:"main-content",children:[Object(f.jsx)("img",{src:p,alt:"LetMeAsk"}),Object(f.jsx)("h2",{children:"Criar uma nova sala"}),Object(f.jsxs)("form",{onSubmit:function(e){return u.apply(this,arguments)},children:[Object(f.jsx)("input",{type:"text",placeholder:"Nome da sala",onChange:function(e){return c(e.target.value)},value:s}),Object(f.jsx)(x,{type:"submit",children:"Criar sala"})]}),Object(f.jsxs)("p",{children:["Quer entrar em uma sala existente? ",Object(f.jsx)(i.b,{to:"/",children:"clique aqui"})]})]})})]})}var A=a.p+"static/media/copy.2f36f99e.svg";a(46);function N(e){return Object(f.jsxs)("button",{className:"room-code",onClick:function(){navigator.clipboard.writeText(e.code)},children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:A,alt:"Copy room code"})}),Object(f.jsxs)("span",{children:["Sala #",e.code]})]})}a(47);function E(){var e=y().user,t=Object(o.g)(),a=Object(n.useState)(""),r=Object(d.a)(a,2),s=r[0],c=r[1],i=Object(n.useState)([]),u=Object(d.a)(i,2),b=u[0],h=u[1],m=Object(n.useState)(""),O=Object(d.a)(m,2),v=O[0],k=O[1],w=t.id;function S(){return(S=Object(l.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),""!==s.trim()){t.next=3;break}return t.abrupt("return");case 3:if(e){t.next=5;break}throw new Error(" You must be logged in");case 5:return n={content:s,author:{name:e.name,avatar:e.avatar},isHighlighted:!1,isAnswered:!1},t.next=8,g.ref("rooms/".concat(w,"/questions")).push(n);case 8:c("");case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){g.ref("rooms/".concat(w)).on("value",(function(e){var t=e.val(),a=t.questions,n=Object.entries(a).map((function(e){var t=Object(d.a)(e,2),a=t[0],n=t[1];return{id:a,content:n.content,author:n.author,isHighlighted:n.isHighlighted,isAnswered:n.isAnswered}}));k(t.title),h(n)}))}),[w]),Object(f.jsxs)("div",{id:"page-room",children:[Object(f.jsx)("header",{children:Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)("img",{src:p,alt:"LetMeAsk"}),Object(f.jsx)(N,{code:t.id})]})}),Object(f.jsxs)("main",{className:"content",children:[Object(f.jsxs)("div",{className:"room-title",children:[Object(f.jsxs)("h1",{children:["Sala ",v]}),b.length>0&&Object(f.jsxs)("span",{children:[b.length," pergunta(s)"]})]}),Object(f.jsxs)("form",{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(f.jsx)("textarea",{placeholder:"O que voc\xea quer perguntar?",onChange:function(e){return c(e.target.value)},value:s}),Object(f.jsxs)("div",{className:"form-footer",children:[e?Object(f.jsxs)("div",{className:"user-info",children:[Object(f.jsx)("img",{src:e.avatar,alt:e.name}),Object(f.jsx)("span",{children:e.name})]}):Object(f.jsxs)("span",{children:["para enviar uma pergunta, ",Object(f.jsx)("button",{children:"fa\xe7a seu login"}),"."]}),Object(f.jsx)(x,{type:"submit",disabled:!e,children:"Enviar pergunta"})]})]}),JSON.stringify(b)]})]})}var I=function(){return Object(f.jsx)(i.a,{children:Object(f.jsx)(w,{children:Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{path:"/",exact:!0,component:S}),Object(f.jsx)(o.a,{path:"/rooms/new",exact:!0,component:C}),Object(f.jsx)(o.a,{path:"/rooms/:id",component:E})]})})})};a(48);c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(I,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.4db63325.chunk.js.map