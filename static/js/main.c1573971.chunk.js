(this["webpackJsonpreact-hw2-phonebook"]=this["webpackJsonpreact-hw2-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={formInput:"ContactForm_formInput__44z52",formLabel:"ContactForm_formLabel__2d8Ux",formBtn:"ContactForm_formBtn__27cmb"}},,,,,function(t,e,n){t.exports={listItem:"ContactItem_listItem__2lhbA",listItemText:"ContactItem_listItemText__2ZIRp",listItemButton:"ContactItem_listItemButton__37oTB"}},function(t,e,n){t.exports={container:"App_container__3UvcJ",mainTitle:"App_mainTitle__16mbb"}},,function(t,e,n){t.exports={filterLabel:"Filter_filterLabel__1Uyhh",filterInput:"Filter_filterInput__3jCer"}},,,function(t,e,n){t.exports={contactList:"ContactList_contactList__1Fy9j"}},,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),s=n(14),i=n(3),l=n(4),u=n(6),m=n(5),b=n(12),j=n(2),f=n.n(j),p=n(0),d=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.formHandler=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onSubmit(a,c),t.setState({name:"",number:""})},t.inputHandler=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(b.a)({},a,c))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:f.a.form,autoComplete:"off",onSubmit:this.formHandler,children:[Object(p.jsxs)("span",{className:f.a.formLabel,children:["Name",Object(p.jsx)("br",{}),Object(p.jsx)("input",{className:f.a.formInput,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:this.state.name,required:!0,onChange:this.inputHandler})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("span",{className:f.a.formLabel,children:["Number",Object(p.jsx)("br",{}),Object(p.jsx)("input",{className:f.a.formInput,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",value:this.state.number,onChange:this.inputHandler,required:!0})]}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"submit",className:f.a.formBtn,children:"Add contact"})]})}}]),n}(a.Component),h=n(13),x=n.n(h),O=n(7),_=n.n(O),v=function(t){var e=t.contact,n=e.id,a=e.name,c=e.number,r=t.onRemoveContact;return Object(p.jsxs)("li",{className:_.a.listItem,children:[Object(p.jsxs)("p",{className:_.a.listItemText,children:[a," : ",c]}),Object(p.jsx)("button",{className:_.a.listItemButton,type:"button",onClick:function(){return r(n)},children:"Delete"})]})},C=function(t){var e=t.contacts,n=t.onRemoveContact;return Object(p.jsx)("ul",{className:x.a.contactList,children:e.map((function(t){return Object(p.jsx)(v,{contact:t,onRemoveContact:n},t.id)}))})},I=n(10),N=n.n(I),y=function(t){var e=t.value,n=t.onFilter;return Object(p.jsx)("form",{children:Object(p.jsxs)("span",{className:N.a.filterLabel,children:["Find contacts by name",Object(p.jsx)("br",{}),Object(p.jsx)("input",{className:N.a.filterInput,type:"text",value:e,onChange:function(t){return n(t.target.value)}})]})})},L=n(23),F=n(8),g=n.n(F),w=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e,n){if(t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()})))alert("".concat(e," is already in contacts"));else{var a={id:Object(L.a)(),name:e,number:n};t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[a])}}))}},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:g.a.container,children:[Object(p.jsx)("h1",{className:g.a.mainTitle,children:"Phonebook"}),Object(p.jsx)(d,{onSubmit:this.addContact}),Object(p.jsx)("h2",{className:g.a.mainTitle,children:"Contacts"}),Object(p.jsx)(y,{value:this.state.filter,onFilter:this.changeFilter}),Object(p.jsx)(C,{onRemoveContact:this.removeContact,contacts:this.getFilteredContacts()})]})}}]),n}(a.Component);n(20);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.c1573971.chunk.js.map