(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(8),l=n.n(c),i=n(6),u=n(1),r=n(2),s=n(4),d=n(3),h=n(5),m=function(t){function e(){return Object(u.a)(this,e),Object(s.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this,e=this.props.to_do.map((function(e,n){return e.state?null:o.a.createElement("li",{key:n},o.a.createElement("input",{type:"checkbox",checked:e.state,onChange:function(){t.props.changeTodo(n)}}),e.title,"\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014",o.a.createElement("button",{onClick:function(){t.props.delTodo(n)}},"\u5220\u9664"))})),n=this.props.to_do.map((function(e,n){return e.state?o.a.createElement("li",{key:n},o.a.createElement("input",{type:"checkbox",checked:e.state,onChange:function(){t.props.changeTodo(n)}}),e.title,"\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014",o.a.createElement("button",{onClick:function(){t.props.delTodo(n)}},"\u5220\u9664")):null}));return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h1",null,"\u6b63\u5728\u8fdb\u884c"),o.a.createElement("p",null,"\u4eb2\u4eb2\uff0c\u60a8\u8fd8\u6709",this.props.count_num,"\u4ef6\u4efb\u52a1\u6ca1\u5b8c\u6210\uff0c\u52a0\u6cb9\u9e2d\uff01"),o.a.createElement("ul",{className:"list"},e)),o.a.createElement("div",null,o.a.createElement("h1",null,"\u5df2\u7ecf\u5b8c\u6210"),o.a.createElement("p",null,"\u4eb2\u4eb2\uff0c\u5df2\u7ecf\u5b8c\u6210",this.props.finish,"\u4ef6\u4efb\u52a1\u4e86\uff0c\u7ee7\u7eed\u52a0\u6cb9\u9e2d!"),o.a.createElement("ul",{className:"list"},n)))}}]),e}(a.Component),p=function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(s.a)(this,Object(d.a)(e).call(this))).handleInput=function(e){13===e.keyCode&&t.props.addTodo(e.target.value)},t.handleChange=function(e){t.setState({val:e.target.value})},t.state={val:"\u8bf7\u8f93\u5165\u4efb\u52a1:)"},t}return Object(h.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement("input",{onChange:function(e){return t.handleChange(e)},placeholder:this.state.val,onKeyDown:function(e){return t.handleInput(e)},type:"text"}))}}]),e}(a.Component),f=function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(s.a)(this,Object(d.a)(e).call(this))).addTodo=function(e){var n={title:e,state:!1},a=[].concat(Object(i.a)(t.state.to_do),[n]);t.setState({to_do:a,count_num:t.state.count_num+1},(function(){localStorage.setItem("todolist",JSON.stringify(a))}))},t.delItem=function(e){var n=Object(i.a)(t.state.to_do);n.splice(e,1),t.setState({to_do:n},(function(){t.counting(),localStorage.setItem("todolist",JSON.stringify(n))}))},t.changeItem=function(e){var n=Object(i.a)(t.state.to_do);n[e].state=!n[e].state,t.setState({to_do:n},(function(){t.counting(),localStorage.setItem("todolist",JSON.stringify(n))}))},t.counting=function(){for(var e=0,n=0,a=t.state.to_do,o=0;o<a.length;o++)a[o].state?n++:e++;t.setState({count_num:e,finish:n})},t.state={to_do:localStorage.getItem("todolist")?JSON.parse(localStorage.getItem("todolist")):[],finish:0,count_num:0},t}return Object(h.a)(e,t),Object(r.a)(e,[{key:"componentWillMount",value:function(){this.counting()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p,{addTodo:this.addTodo}),o.a.createElement(m,{to_do:this.state.to_do,count_num:this.state.count_num,finish:this.state.finish,delTodo:this.delItem,changeTodo:this.changeItem,countTodo:this.counting}))}}]),e}(a.Component);n(14);l.a.render(o.a.createElement(f,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.32bf18e7.chunk.js.map