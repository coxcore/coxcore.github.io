(this["webpackJsonpexample-vac"]=this["webpackJsonpexample-vac"]||[]).push([[0],{17:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var n=a(1),i=a(0),c=a.n(i),o=a(7),r=(a(17),a(3)),s=a(8),u=a(2),l=a(11),d=a(10),h=a(9),v=function t(){var e=this;Object(r.a)(this,t),this._target=null,this._update=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e._target&&(e._target.setState({list:t}),localStorage.setItem("list",JSON.stringify(t)))},this.observer=function(t){e._target=t,e._target.setState({list:JSON.parse(localStorage.getItem("list"))||[]})},this.getList=function(){return e._target?e._target.state.list:[]},this.addItem=function(t){if(t){var a=e.getList(),n=[].concat(Object(h.a)(a),[{id:Date.now(),value:t,checked:!1}]);e._update(n)}},this.deleteItem=function(t){var a=e.getList(),n=a.filter((function(e){return e.id!==t}));a.length!==n.length&&e._update(n)},this.checkItem=function(t){var a=!1,n=e.getList().map((function(e,n){return e.id===t?(a=!0,{id:e.id,value:e.value,checked:!e.checked}):e}));a&&e._update(n)},this.clear=function(){e._update([])}},m=function(){return new v},g=a(5),f=a(6),j=a.n(f),p=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).UNSAFE_componentWillMount=function(){n.todo.observer(Object(u.a)(n))},n.getItemProps=function(t,e){var a=t.id,i=t.value,c=t.checked;return{id:a,value:i,checked:c,onCheck:function(){return n.checkItem(a)},onDelete:function(){return n.deleteItem(a)}}},n.state={list:[],value:""},n.todo=m(Object(u.a)(n)),n.getList=n.todo.getList,n.addItem=n.todo.addItem,n.checkItem=n.todo.checkItem,n.deleteItem=n.todo.deleteItem,n.clear=n.todo.clear,n}return Object(s.a)(a,[{key:"render",value:function(){var t=this,e={value:this.state.value,onChange:function(e){return t.setState({value:e.target.value})},onSubmit:function(){t.addItem(t.state.value),t.setState({value:""})}},a={list:this.getList(),each:this.getItemProps};return Object(n.jsxs)("div",{className:j.a.container,children:[Object(n.jsx)("h1",{className:j.a.title,children:"Todo List"}),Object(n.jsx)(g.a,{name:"TodoInput",data:e,useValue:"value",onChange:"onChange"}),Object(n.jsx)(g.a,{name:"TodoLIst",data:a,useList:"list",useEach:"each"})]})}}]),a}(c.a.Component),b=document.getElementById("root"),I=Object(n.jsx)(p,{});Object(o.render)(I,b)},6:function(t,e,a){t.exports={title:"TodoContainer_title__RjrxK",container:"TodoContainer_container__L-1Hm"}}},[[18,1,2]]]);
//# sourceMappingURL=main.cb729e4f.chunk.js.map