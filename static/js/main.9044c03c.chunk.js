(this.webpackJsonpletmeask=this.webpackJsonpletmeask||[]).push([[0],{24:function(e,t,n){},34:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),c=n(26),s=n.n(c),i=n(16),o=n(5),u=n(7),d=n.n(u),j=n(13),l=n(11),O=n.p+"static/media/illustration.8aeb45a4.svg",b=n.p+"static/media/logo.3cce2a2f.svg",p=n.p+"static/media/google-icon.0dd78068.svg",h=n(28),m=(n(34),n(1));function v(e){return Object(m.jsx)("button",Object(h.a)({className:"button"},e))}var x=n(18),f=(n(36),n(38),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTH_DOMAIN,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DATABASE_URL,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APP_ID});x.a.initializeApp(f);var _=x.a.auth(),S=x.a.database(),E=Object(a.createContext)({});function g(e){var t=Object(a.useState)(),n=Object(l.a)(t,2),r=n[0],c=n[1];function s(){return(s=Object(j.a)(d.a.mark((function e(){var t,n,a,r,s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new x.a.auth.GoogleAuthProvider,e.next=3,_.signInWithPopup(t);case 3:if(!(n=e.sent).user){e.next=9;break}if(a=n.user,r=a.displayName,s=a.photoURL,i=a.uid,r&&s){e.next=8;break}throw new Error("Missing information from Google Account.");case 8:c({id:i,name:r,avatar:s});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){var e=_.onAuthStateChanged((function(e){if(e){var t=e.displayName,n=e.photoURL,a=e.uid;if(!t||!n)throw new Error("Missing information from Google Account.");c({id:a,name:t,avatar:n})}}));return function(){e()}}),[]),Object(m.jsx)(E.Provider,{value:{user:r,signInWithGoogle:function(){return s.apply(this,arguments)}},children:e.children})}function T(){return Object(a.useContext)(E)}n(24);function C(){var e=Object(o.f)(),t=T(),n=t.user,r=t.signInWithGoogle,c=Object(a.useState)(""),s=Object(l.a)(c,2),i=s[0],u=s[1];function h(){return(h=Object(j.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=3;break}return t.next=3,r();case 3:e.push("/rooms/new");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(){return(x=Object(j.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==i.trim()){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,S.ref("rooms/".concat(i)).get();case 5:if(t.sent.exists()){t.next=9;break}return alert("Room does not exists."),t.abrupt("return");case 9:e.push("/rooms/".concat(i));case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(m.jsxs)("div",{id:"page-auth",children:[Object(m.jsxs)("aside",{children:[Object(m.jsx)("img",{src:O,alt:"Ilustra\xe7\xe3o simbolizando pergunta e resposta"}),Object(m.jsx)("strong",{children:"Crie salas de Q&A ao-vivo"}),Object(m.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo-real"})]}),Object(m.jsx)("main",{children:Object(m.jsxs)("div",{className:"main-content",children:[Object(m.jsx)("img",{src:b,alt:"LetMeAsk"}),Object(m.jsxs)("button",{onClick:function(){return h.apply(this,arguments)},className:"create-room",children:[Object(m.jsx)("img",{src:p,alt:"Logo do Google"}),"Crie sua sala com o Google"]}),Object(m.jsx)("div",{className:"separator",children:"ou entre na sala"}),Object(m.jsxs)("form",{onSubmit:function(e){return x.apply(this,arguments)},children:[Object(m.jsx)("input",{type:"text",placeholder:"Digite o c\xf3digo da sala",onChange:function(e){return u(e.target.value)},value:i}),Object(m.jsx)(v,{type:"submit",children:"Entrar na sala"})]})]})})]})}function A(){var e=T().user,t=Object(o.f)(),n=Object(a.useState)(""),r=Object(l.a)(n,2),c=r[0],s=r[1];function u(){return(u=Object(j.a)(d.a.mark((function n(a){var r,s;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),""!==c.trim()){n.next=3;break}return n.abrupt("return");case 3:return r=S.ref("rooms"),n.next=6,r.push({title:c,authorId:null===e||void 0===e?void 0:e.id});case 6:s=n.sent,t.push("/rooms/".concat(s.key));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(m.jsxs)("div",{id:"page-auth",children:[Object(m.jsxs)("aside",{children:[Object(m.jsx)("img",{src:O,alt:"Ilustra\xe7\xe3o simbolizando pergunta e resposta"}),Object(m.jsx)("strong",{children:"Crie salas de Q&A ao-vivo"}),Object(m.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo-real"})]}),Object(m.jsx)("main",{children:Object(m.jsxs)("div",{className:"main-content",children:[Object(m.jsx)("img",{src:b,alt:"LetMeAsk"}),Object(m.jsx)("h2",{children:"Criar uma nova sala"}),Object(m.jsxs)("form",{onSubmit:function(e){return u.apply(this,arguments)},children:[Object(m.jsx)("input",{type:"text",placeholder:"Nome da sala",onChange:function(e){return s(e.target.value)},value:c}),Object(m.jsx)(v,{type:"submit",children:"Criar sala"})]}),Object(m.jsxs)("p",{children:["Quer entrar em uma sala existente? ",Object(m.jsx)(i.b,{to:"/",children:"clique aqui"})]})]})})]})}var R=n.p+"static/media/copy.b8f09a77.svg";n(46);function P(e){return Object(m.jsxs)("button",{className:"room-code",onClick:function(){navigator.clipboard.writeText(e.code)},children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:R,alt:"Copy room code"})}),Object(m.jsxs)("span",{children:["Sala #",e.code]})]})}n(47);function D(){var e=T().user,t=Object(o.g)(),n=Object(a.useState)(""),r=Object(l.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)([]),u=Object(l.a)(i,2),O=u[0],p=u[1],h=Object(a.useState)(""),x=Object(l.a)(h,2),f=x[0],_=x[1],E=t.id;function g(){return(g=Object(j.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==c.trim()){t.next=3;break}return t.abrupt("return");case 3:if(e){t.next=5;break}throw new Error(" You must be logged in");case 5:return a={content:c,author:{name:e.name,avatar:e.avatar},isHighlighted:!1,isAnswered:!1},t.next=8,S.ref("rooms/".concat(E,"/questions")).push(a);case 8:s("");case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){S.ref("rooms/".concat(E)).on("value",(function(e){var t=e.val(),n=t.questions,a=Object.entries(n).map((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];return{id:n,content:a.content,author:a.author,isHighlighted:a.isHighlighted,isAnswered:a.isAnswered}}));_(t.title),p(a)}))}),[E]),Object(m.jsxs)("div",{id:"page-room",children:[Object(m.jsx)("header",{children:Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("img",{src:b,alt:"LetMeAsk"}),Object(m.jsx)(P,{code:t.id})]})}),Object(m.jsxs)("main",{className:"content",children:[Object(m.jsxs)("div",{className:"room-title",children:[Object(m.jsxs)("h1",{children:["Sala ",f]}),O.length>0&&Object(m.jsxs)("span",{children:[O.length," pergunta(s)"]})]}),Object(m.jsxs)("form",{onSubmit:function(e){return g.apply(this,arguments)},children:[Object(m.jsx)("textarea",{placeholder:"O que voc\xea quer perguntar?",onChange:function(e){return s(e.target.value)},value:c}),Object(m.jsxs)("div",{className:"form-footer",children:[e?Object(m.jsxs)("div",{className:"user-info",children:[Object(m.jsx)("img",{src:e.avatar,alt:e.name}),Object(m.jsx)("span",{children:e.name})]}):Object(m.jsxs)("span",{children:["para enviar uma pergunta, ",Object(m.jsx)("button",{children:"fa\xe7a seu login"}),"."]}),Object(m.jsx)(v,{type:"submit",disabled:!e,children:"Enviar pergunta"})]})]}),JSON.stringify(O)]})]})}var N=function(){return Object(m.jsx)(i.a,{children:Object(m.jsx)(g,{children:Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{path:"/",exact:!0,component:C}),Object(m.jsx)(o.a,{path:"/rooms/new",exact:!0,component:A}),Object(m.jsx)(o.a,{path:"/rooms/:id",component:D})]})})})};n(48);s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.9044c03c.chunk.js.map