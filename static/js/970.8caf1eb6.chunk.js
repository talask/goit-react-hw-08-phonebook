"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[970],{7148:function(n,e,t){t.d(e,{Z:function(){return i}});var r,a=t(168),i=t(6444).ZP.div(r||(r=(0,a.Z)(["\n    width: 400px;\n    margin: 0 auto;\n    padding: 10px 15px;\n\n    h1 {\n        font-size: 26px;\n        text-align: center;\n    }\n\n    h2 {\n        font-size: 26px;\n        text-align: center;\n    }\n"])))},6970:function(n,e,t){t.r(e),t.d(e,{default:function(){return K}});var r,a,i,o,s,d,c=t(8402),u=t(168),l=t(6444),h=l.ZP.div(r||(r=(0,u.Z)(["\n    margin: 0 auto;\n    padding: 20px;\n"]))),x=t(3329),p=function(){return(0,x.jsx)(h,{children:(0,x.jsx)(c.fe,{height:"180",width:"180"})})},m=l.ZP.table(a||(a=(0,u.Z)(["\n    width: 90%;\n"]))),f=l.ZP.button(i||(i=(0,u.Z)(["\n    outline: none;\n    cursor: pointer;\n    display: block;\n    margin: 0 auto;\n    padding: 5px;\n    background: lightblue;\n    border: 1px solid lightblue;\n    border-radius: 5px;\n    text-align: center;\n\n    &:hover {\n        background: blue;\n        color: white;\n    }\n"]))),b=l.ZP.td(o||(o=(0,u.Z)(["\n    padding: 5px;\n"]))),j=function(n){var e=n.name,t=n.number,r=n.id,a=n.fnDelete;return(0,x.jsxs)("tr",{children:[(0,x.jsxs)(b,{children:[e,":"]}),(0,x.jsx)(b,{children:t}),(0,x.jsx)(b,{children:(0,x.jsx)(f,{type:"button",onClick:function(){a(r)},children:"Delete"})})]})},g=t(9434),Z=function(n){return n.contacts.items},v=function(n){return n.contacts.isLoading},_=function(n){return n.contacts.error},y=function(n){return n.filter.filter},z=t(3064),w=function(){var n=(0,g.v9)(Z),e=(0,g.v9)(y),t=(0,g.I0)(),r=function(n){t((0,z.GK)(n))};return n.length>0&&(0,x.jsx)(m,{children:(0,x.jsx)("tbody",{children:(e?n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):n).map((function(n,e){var t=n.name,a=n.number,i=n.id;return(0,x.jsx)(j,{name:t,number:a,id:i,fnDelete:r},i)}))})})},k=t(5705),A=t(3309),C=t(6727),P=(0,l.ZP)(k.gN)(s||(s=(0,u.Z)(["\n    outline: none;\n    padding: 5px 8px;\n    margin-bottom: 10px;\n    width: 250px;\n    font-size: 18px;\n"]))),F=(0,l.ZP)(k.Bc)(d||(d=(0,u.Z)(["\n  color: red;\n  font-size: 10px;\n"]))),N={name:"",number:""},q=C.Ry().shape({name:C.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required(),number:C.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required()}),B=function(){var n=(0,g.I0)();return(0,x.jsx)(A.jd,{children:(0,x.jsx)(k.J9,{initialValues:N,validationSchema:q,onSubmit:function(e,t){var r,a=t.resetForm;r=e,n((0,z.uK)(r)),a()},children:(0,x.jsxs)(k.l0,{children:[(0,x.jsx)(A.__,{children:"Name"}),(0,x.jsx)(P,{type:"text",name:"name"}),(0,x.jsx)(F,{name:"name",component:"div"}),(0,x.jsx)(A.__,{children:"Phone"}),(0,x.jsx)(P,{type:"tel",name:"number"}),(0,x.jsx)(F,{name:"number",component:"div"}),(0,x.jsx)(A.zx,{type:"submit",children:"Add contact"})]})})})},D=t(5984),I=t(4808),J=function(){var n=(0,g.v9)(y),e=(0,g.I0)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("p",{children:"Find contacts by name"}),(0,x.jsx)(A.UP,{type:"text",name:"filter",value:n,id:(0,D.x0)(),pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:function(n){var t=n.target.value;e((0,I.a)(t))},required:!0})]})},L=t(7148);function K(){var n=(0,g.v9)(v),e=(0,g.v9)(_);return(0,x.jsxs)(L.Z,{children:[(0,x.jsx)("h1",{children:"Phonebook"}),(0,x.jsx)(B,{}),(0,x.jsx)("h2",{children:"Contacts"}),(0,x.jsx)(J,{}),n&&!e&&(0,x.jsx)(p,{}),(0,x.jsx)(w,{})]})}}}]);
//# sourceMappingURL=970.8caf1eb6.chunk.js.map