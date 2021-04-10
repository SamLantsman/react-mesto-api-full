(this["webpackJsonpmesto-react-api-full"]=this["webpackJsonpmesto-react-api-full"]||[]).push([[0],{15:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),s=n(19),i=n.n(s),r=(n(15),n(23)),u=n(2),l=o.a.createContext();var d=function(e){var t=o.a.useContext(l),n=e.card.owner===t._id,c="card__delete ".concat(n?"card__delete_visible":""),s=e.card.likes.some((function(e){return e===t._id})),i="card__like ".concat(s?"card__like_clicked":"");return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("button",{className:c,onClick:function(){e.onCardDelete(e.card)},type:"button"}),Object(a.jsx)("img",{className:"card__image",src:e.src,alt:e.alt,onClick:function(){e.onCardClick(e.card)}}),Object(a.jsxs)("div",{className:"card__info",children:[Object(a.jsx)("h2",{className:"card__heading",children:e.name}),Object(a.jsxs)("div",{className:"card__like-container",children:[Object(a.jsx)("button",{className:i,onClick:function(){e.onCardLike(e.card)},type:"button"}),Object(a.jsx)("p",{className:"card__like-counter",children:e.likes})]})]})]})};var p=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var j=function(e){return Object(a.jsx)("div",{className:"popup popup__image ".concat(e.isOpen?"popup_is-opened":""),children:Object(a.jsxs)("div",{className:"popup__image-content",children:[Object(a.jsx)("button",{className:"popup__close-image popup__image-close-image",type:"button",onClick:e.onClose}),Object(a.jsx)("img",{className:"popup__image-picture",alt:e.src,src:e.src}),Object(a.jsx)("p",{className:"popup__caption",children:e.name})]})})};var m=function(e){return Object(a.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_is-opened":""),children:Object(a.jsxs)("form",{className:"popup__content popup_type_".concat(e.name,"-content"),name:"".concat(e.name),onSubmit:e.onSubmit,noValidate:!0,children:[Object(a.jsx)("button",{className:"popup__close-image",type:"button",onClick:e.onClose}),Object(a.jsx)("h3",{className:"popup__heading",children:e.title}),e.children,Object(a.jsx)("button",{className:"popup__save-button",type:"submit",children:e.button})]})})};var b=function(e){var t=o.a.useContext(l),n=o.a.useState(""),c=Object(u.a)(n,2),s=c[0],i=c[1],r=o.a.useState(""),d=Object(u.a)(r,2),p=d[0],j=d[1];return o.a.useEffect((function(){i(t.name),j(t.about)}),[t]),o.a.useEffect((function(){if(void 0!==s&&void 0!==p)s.length>=2&&s.length,p.length>=2&&p.length})),Object(a.jsxs)(m,{onClose:e.onClose,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"editProfile",button:e.isLoading?"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u044e...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:!!e.isOpen,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:p})},children:[Object(a.jsx)("input",{type:"text",name:"name",placeholder:"\u0418\u043c\u044f",className:"popup__text popup__text-name",maxLength:"40",minLength:"2",required:!0,id:"profile-input",defaultValue:s,onChange:function(e){i(e.target.value)}}),Object(a.jsx)("span",{className:"popup__text_error",id:"profile-input-error"}),Object(a.jsx)("input",{type:"text",name:"job",placeholder:"\u0412\u0438\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",className:"popup__text popup__text-job",maxLength:"200",minLength:"2",required:!0,id:"job-input",defaultValue:p,onChange:function(e){j(e.target.value)}}),Object(a.jsx)("span",{className:"popup__text_error",id:"job-input-error"})]})};var h=function(e){var t=o.a.useState(""),n=Object(u.a)(t,2),c=n[0],s=n[1],i=o.a.useState(""),r=Object(u.a)(i,2),l=r[0],d=r[1];return Object(a.jsxs)(m,{onClose:e.onClose,title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"addCard",button:e.isLoading?"C\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:!!e.isOpen,onSubmit:function(t){t.preventDefault(),e.onAddCard({name:c,link:l}),s(""),d("")},children:[Object(a.jsx)("input",{type:"text",name:"name",placeholder:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",className:"popup__text popup__text-name",maxLength:"40",minLength:"2",required:!0,id:"profile-input",value:c,onChange:function(e){s(e.target.value)}}),Object(a.jsx)("span",{className:"popup__text_error",id:"name-input-error"}),Object(a.jsx)("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__text popup__text-image",required:!0,id:"link-input",value:l,onChange:function(e){d(e.target.value)}}),Object(a.jsx)("span",{className:"popup__text_error",id:"link-input-error"})]})};var f=function(e){var t=o.a.createRef();return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(m,{onClose:e.onClose,title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"updateAvatar",button:e.isLoading?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:!!e.isOpen,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar(t.current.value),t.current.value=""},children:[Object(a.jsx)("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",className:"popup__text popup__text-avatar",required:!0,id:"link-input",ref:t}),Object(a.jsx)("span",{className:"popup__text_error",id:"link-input-error"})]})})};var O=function(e){return Object(a.jsx)(m,{onClose:e.onClose,title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"deleteCard",button:e.isLoading?"\u0421\u0435\u043a\u0443\u043d\u0434\u043e\u0447\u043a\u0443, \u0443\u0434\u0430\u043b\u044f\u044e...":"\u0414\u0430",isOpen:!!e.isOpen,onSubmit:function(t){t.preventDefault(),e.onConfirmDeleteCard()}})},x=n.p+"static/media/logo.a307e1c4.svg";var g=function(e){return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("img",{className:"header__image",alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f Mesto",src:x}),Object(a.jsxs)("div",{className:"header__info",children:[Object(a.jsx)("p",{className:"header__email",children:e.email}),Object(a.jsx)("button",{className:"header__button header__button_".concat(e.faded),type:"button",onClick:e.onClick,children:e.button})]})]})};var C=function(e){var t=o.a.useContext(l);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsx)(g,{button:"\u0412\u044b\u0439\u0442\u0438",onClick:e.onClick,email:e.email,faded:e.faded}),Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__avatar",children:[Object(a.jsx)("img",{className:"profile__image",alt:"\u0430\u0432\u0430\u0442\u0430\u0440",src:t.avatar}),Object(a.jsx)("button",{className:"profile__edit-avatar",type:"button",onClick:e.onEditAvatar})]}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsxs)("div",{className:"profile__info-block",children:[Object(a.jsx)("h1",{className:"profile__name",children:t.name}),Object(a.jsx)("button",{className:"profile__edit-button",onClick:e.onEditProfile})]}),Object(a.jsx)("p",{className:"profile__job",children:t.about})]}),Object(a.jsx)("button",{className:"profile__add-button",onClick:e.onAddPlace})]}),Object(a.jsx)("section",{className:"gallery",children:e.cards.map((function(t){return Object(a.jsx)(d,{src:t.link,alt:t.alt,name:t.name,likes:t.likes.length,card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))}),Object(a.jsx)(p,{}),Object(a.jsx)(j,{isOpen:e.isOpen,src:e.src,name:e.name,onClose:e.onClose}),Object(a.jsx)(b,{isOpen:e.isOpenProfilePopup,onClose:e.onClose,onUpdateUser:e.onUpdateUser,isLoading:e.isLoading}),Object(a.jsx)(h,{onClose:e.onClose,isOpen:e.isOpenAddPlace,onAddCard:e.onAddCard,isLoading:e.isLoading}),Object(a.jsx)(f,{isOpen:e.isOpenAvatar,onUpdateAvatar:e.onUpdateAvatar,onClose:e.onClose,isLoading:e.isLoading}),Object(a.jsx)(O,{onClose:e.onClose,isOpen:e.isOpenDeleteCard,onConfirmDeleteCard:e.onConfirmDeleteCard,isLoading:e.isLoading})]})},v=n(20),N=n(21),A="".concat(window.location.protocol).concat("//api.sams.domain.students.nomoredomains.icu"),_=new(function(){function e(t){Object(v.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(N.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"updateUserInfo",value:function(e){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getCardsInfo",value:function(){return fetch("".concat(this._url,"cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"addNewCard",value:function(e){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeLikeCardStatus",value:function(e,t){return t?fetch("".concat(this._url,"cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})):fetch("".concat(this._url,"cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({url:"".concat(A,"/"),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),k="".concat(window.location.protocol).concat("//api.sams.domain.students.nomoredomains.icu"),S=n(3);var y=function(e){var t=Object(S.g)(),n=o.a.useState(""),c=Object(u.a)(n,2),s=c[0],i=c[1],r=o.a.useState(""),l=Object(u.a)(r,2),d=l[0],p=l[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(g,{button:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",onClick:function(){t.push("/signup")},email:e.email}),Object(a.jsx)("div",{className:"login",children:Object(a.jsxs)("form",{noValidate:!0,onSubmit:function(t){t.preventDefault(),e.handleSubmit({password:d,email:s})},children:[Object(a.jsx)("h3",{className:"login__heading",children:e.title}),Object(a.jsx)("input",{type:"text",placeholder:"Email",className:"login__email",onChange:function(e){i(e.target.value)},value:s,required:!0}),Object(a.jsx)("input",{type:"text",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"login__pswrd",onChange:function(e){p(e.target.value)},value:d,required:!0}),Object(a.jsx)("button",{className:"login__button",type:"submit",children:e.button})]})})]})},E=n(8);var L=function(e){var t=Object(S.g)(),n=o.a.useState(""),c=Object(u.a)(n,2),s=c[0],i=c[1],r=o.a.useState(""),l=Object(u.a)(r,2),d=l[0],p=l[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(g,{button:"\u0412\u043e\u0439\u0442\u0438",onClick:function(){t.push("/signin")}}),Object(a.jsx)("div",{className:"register",children:Object(a.jsxs)("form",{noValidate:!0,onSubmit:function(t){t.preventDefault(),e.handleSubmit({password:d,email:s})},children:[Object(a.jsx)("h3",{className:"register__heading",children:e.title}),Object(a.jsx)("input",{type:"text",placeholder:"Email",className:"register__email",onChange:function(e){i(e.target.value)},value:s,required:!0}),Object(a.jsx)("input",{type:"text",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"register__pswrd",onChange:function(e){p(e.target.value)},value:d,required:!0}),Object(a.jsx)("button",{className:"register__button",type:"submit",children:e.button})]})}),Object(a.jsx)("div",{className:"register",children:Object(a.jsx)(E.b,{to:"/signin",className:"register__link",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})})]})},P=n(24),R=n(25),w=function(e){var t=e.component,n=Object(R.a)(e,["component"]);return Object(a.jsx)(S.b,{children:function(){return n.loggedIn?Object(a.jsx)(t,Object(P.a)({},n)):Object(a.jsx)(S.a,{to:"/signup"})}})};var q=function(e){return Object(a.jsx)("div",{className:"popup ".concat(e.isOpen?"popup_is-opened":""),children:Object(a.jsxs)("div",{className:"popup_type_".concat(e.name),children:[Object(a.jsx)("button",{className:"popup__close-image popup__close-image_".concat(e.name),type:"button",onClick:e.onClose}),Object(a.jsx)("img",{className:"popup__image popup__image_".concat(e.name),alt:"\u0433\u0430\u043b\u043e\u0447\u043a\u0430 \u0432 \u043a\u0440\u0443\u0436\u043e\u0447\u043a\u0435",src:e.src}),Object(a.jsx)("h3",{className:"popup__heading popup__heading_".concat(e.name),children:e.title}),e.children]})})},I=localStorage.getItem("token");var X=function(){var e=Object(S.g)(),t=o.a.useState({}),n=Object(u.a)(t,2),c=n[0],s=n[1],i=o.a.useState(!1),d=Object(u.a)(i,2),p=d[0],j=d[1];o.a.useEffect((function(){_.getUserInfo(I).then((function(e){s(e)})).catch((function(e){console.log(e)}))}),[p]),o.a.useEffect((function(){_.getCardsInfo().then((function(e){G(e)})).catch((function(e){console.log(e)}))}),[p]),o.a.useEffect((function(){p&&e.push("/main")}),[p,e]);var m=o.a.useState(!1),b=Object(u.a)(m,2),h=b[0],f=b[1],O=o.a.useState(!1),x=Object(u.a)(O,2),g=x[0],v=x[1],N=o.a.useState(!1),A=Object(u.a)(N,2),P=A[0],R=A[1],X=o.a.useState(!1),U=Object(u.a)(X,2),J=U[0],Z=U[1],K=o.a.useState({isOpen:!1,link:"",name:""}),D=Object(u.a)(K,2),H=D[0],Y=D[1],M=o.a.useState([]),V=Object(u.a)(M,2),B=V[0],G=V[1],Q=o.a.useState(""),T=Object(u.a)(Q,2),F=T[0],z=T[1],W=o.a.useState(!1),$=Object(u.a)(W,2),ee=$[0],te=$[1];function ne(){v(!1),f(!1),R(!1),v(!1),Z(!1),Y({isOpen:!1,link:"",name:""}),te(!1)}var ae=o.a.useState(""),ce=Object(u.a)(ae,2),oe=ce[0],se=ce[1],ie=o.a.useCallback((function(){I&&function(e){return fetch("".concat(k,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))}(I).then((function(t){t&&(j(!0),e.push("/main"),se(t.email))})).catch((function(e){return console.log(e)}))}),[]);o.a.useEffect((function(){ie()}),[ie]);var re=o.a.useState(!1),ue=Object(u.a)(re,2),le=ue[0],de=ue[1],pe=o.a.useState(!1),je=Object(u.a)(pe,2),me=je[0],be=je[1];function he(){be(!1),le&&e.push("/signin")}return Object(a.jsx)(l.Provider,{value:c,children:Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("div",{className:"page",children:Object(a.jsxs)(S.d,{children:[Object(a.jsx)(S.b,{exact:!0,path:"/",children:p?Object(a.jsx)(S.a,{to:"/main"}):Object(a.jsx)(S.a,{to:"/signup"})}),Object(a.jsx)(S.b,{path:"/signin",children:Object(a.jsx)(y,{title:"\u0412\u0445\u043e\u0434",button:"\u0412\u043e\u0439\u0442\u0438",handleSubmit:function(e){(function(e,t){return fetch("".concat(k,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return e.json()})).then((function(e){if(e.token)return localStorage.setItem("token",e.token),e})).catch((function(e){return console.log(e)}))})(e.password,e.email).then((function(e){e.token&&ie()})).catch((function(e){return console.log(e)}))},email:oe,isInfoToolTipPopupOpen:me,isRegistered:le,closeRegistrationPopup:he})}),Object(a.jsxs)(S.b,{path:"/signup",children:[Object(a.jsx)(L,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",button:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",onClick:Object(a.jsx)(E.b,{to:"/signin"}),handleSubmit:function(e){(function(e,t){return fetch("".concat(k,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){try{if(200===e.status)return e.json()}catch(t){return t}})).then((function(e){return e})).catch((function(e){return console.log(e)}))})(e.password,e.email).then((function(e){if(!e)return be(!0),{message:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!"};de(!0),be(!0)})).catch((function(e){return console.log(e)}))}}),Object(a.jsx)(q,{isOpen:me,title:le?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.",src:le?"data:image/png;base64,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":"data:image/png;base64,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",name:"success",onClose:he})]}),Object(a.jsx)(w,{path:"/main",component:C,loggedIn:p,onEditProfile:function(){f(!0)},onEditAvatar:function(){R(!0)},onAddPlace:function(){v(!0)},onCardClick:function(e){Y({isOpen:!0,link:e.link,name:e.name})},cards:B,onCardLike:function(e){var t=e.likes.some((function(e){return e===c._id}));_.changeLikeCardStatus(e._id,!t).then((function(t){var n=B.map((function(n){return n._id===e._id?t.data:n}));G(n)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){z(e._id),Z(!0)},isOpen:H.isOpen,src:H.link,name:H.name,onClose:ne,isOpenProfilePopup:h,onUpdateUser:function(e){te(!0),_.updateUserInfo(e).then((function(e){s(e.data)})).catch((function(e){console.log(e)})).finally((function(){ne()}))},isLoading:ee,isOpenAddPlace:g,onAddCard:function(e){te(!0),_.addNewCard(e).then((function(e){G([e.data].concat(Object(r.a)(B)))})).catch((function(e){console.log(e)})).finally((function(){ne()}))},isOpenAvatar:P,onUpdateAvatar:function(e){te(!0),_.updateAvatar(e).then((function(e){s(e.data)})).catch((function(e){console.log(e)})).finally((function(){ne()}))},isOpenDeleteCard:J,onConfirmDeleteCard:function(){te(!0),_.deleteCard(F).then((function(){var e=B.filter((function(e){return e._id!==F}));G(e)})).catch((function(e){console.log(e)})).finally((function(){ne()}))},onClick:function(){localStorage.removeItem("token"),j(!1),se(""),console.log(p),console.log(oe),console.log("\u0445\u0443\u0439")},email:oe,faded:p?"faded":""})]})})})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(E.a,{children:Object(a.jsx)(X,{})})}),document.getElementById("root")),U()}},[[36,1,2]]]);
//# sourceMappingURL=main.57f4c235.chunk.js.map