(this.webpackJsonpcontrolmoneyapp=this.webpackJsonpcontrolmoneyapp||[]).push([[0],{25:function(e,a,t){e.exports=t(36)},35:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n,l=t(0),r=t.n(l),u=t(12),c=t.n(u),s=t(14),m=t(20),o=t(10),i=0,p={generalSum:0,currentSum:0,days:0,isCurrentSumPositive:!0,expenses:[]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_INITIAL_VALUES":return{generalSum:a.payload.value,currentSum:a.payload.value,days:a.payload.days,isCurrentSumPositive:!0,expenses:[]};case"ADD_EXPENSES":return e.currentSum-a.payload.value<0?Object(o.a)({},e,{isCurrentSumPositive:!1}):Object(o.a)({},e,{isCurrentSumPositive:!0,currentSum:e.currentSum-a.payload.value,expenses:[].concat(Object(m.a)(e.expenses),[{id:++i,value:a.payload.value,name:a.payload.name,everyDayExpenseValue:a.payload.everyDayExpenseValue,currentDayExpenseValue:a.payload.everyDayExpenseValue,isExpensePositive:!0,purchases:[]}])});case"ADD_PURCHASE":return Object(o.a)({},e,{expenses:e.expenses.map((function(e){return a.payload.expenseId===e.id?n=e.value-a.payload.value<0?Object(o.a)({},e,{isExpensePositive:!1}):Object(o.a)({},e,{value:e.value-a.payload.value,isExpensePositive:!0,currentDayExpenseValue:e.currentDayExpenseValue?e.currentDayExpenseValue-a.payload.value:null,purchases:[].concat(Object(m.a)(e.purchases),[{value:a.payload.value,name:a.payload.name}])}):e})),generalSum:n.isExpensePositive?e.generalSum-a.payload.value:e.generalSum});case"DECREMENT_AMOUNT_OF_DAYS":return Object(o.a)({},e,{days:e.days-1,expenses:e.expenses.map((function(e){return e.everyDayExpenseValue&&e.currentDayExpenseValue?Object(o.a)({},e,{currentDayExpenseValue:e.currentDayExpenseValue+e.everyDayExpenseValue}):e}))});default:return e}},d=t(2),v=t(15),y=t(9);function f(){return{type:"DECREMENT_AMOUNT_OF_DAYS"}}var b=function(e){return!isNaN(Number(e))&&Number(e)>0},_={addInitialValues:function(e){return{type:"ADD_INITIAL_VALUES",payload:e}}},x=Object(d.b)((function(e){return{generalSum:e.generalSum,currentSum:e.currentSum,days:e.days}}),_)((function(e){var a=e.generalSum,t=e.currentSum,n=e.days,l=e.addInitialValues,u=null,c=null;return b(a)&&b(n)?r.a.createElement("div",{className:"topbar"},r.a.createElement("h2",{className:"topbar__title"},"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 Control Money App."),r.a.createElement("div",{className:"topbar__counters"},r.a.createElement("p",{className:"topbar__counter"},"\u0412\u0430\u0448\u0430 \u043e\u0431\u0449\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438",r.a.createElement("p",null,"(\u0432 \u0440\u0443\u0431\u043b\u044f\u0445):"),r.a.createElement("span",{className:"num-count"},a)),r.a.createElement("p",{className:"topbar__counter"},"\u0412\u0430\u0448\u0430 \u0441\u0443\u043c\u043c\u0430 \u0432 \u043e\u0441\u0442\u0430\u0442\u043a\u0435 \u043f\u043e\u0441\u043b\u0435 \u0432\u044b\u0447\u0435\u0442\u0430 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439",r.a.createElement("p",null,"(\u0432 \u0440\u0443\u0431\u043b\u044f\u0445):"),r.a.createElement("span",{className:"num-count"},t)),r.a.createElement("p",{className:"topbar__counter"},"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c ",r.a.createElement("span",{className:"num-count"},n)," \u0434\u043d\u0435\u0439"))):r.a.createElement("div",{className:"topbar"},r.a.createElement("h2",{className:"topbar__title"},"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 Control Money App."),r.a.createElement("label",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443, \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0432\u044b \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0433\u0430\u0435\u0442\u0435.",r.a.createElement("br",null),r.a.createElement("input",{ref:function(e){u=e},type:"text"}),r.a.createElement("br",null)),r.a.createElement("label",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430 \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0434\u043d\u0435\u0439 \u0443 \u0432\u0430\u0441 \u0434\u0430\u043d\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430.",r.a.createElement("br",null),r.a.createElement("input",{ref:function(e){c=e},type:"text"}),r.a.createElement("br",null)),r.a.createElement("button",{type:"button",onClick:function(){l({value:Number(u.value),days:Number(c.value)})}},"\u041d\u0430\u0447\u0430\u0442\u044c \u0443\u0447\u0435\u0442"),r.a.createElement("h3",{className:"topbar__mistake-text"},void 0===a||b(a)?"":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e."))})),N={addExpenses:function(e){return{type:"ADD_EXPENSES",payload:e}}},S=Object(d.b)((function(e){return{generalSum:e.generalSum,isCurrentSumPositive:e.isCurrentSumPositive,days:e.days}}),N)((function(e){var a=e.generalSum,t=e.isCurrentSumPositive,n=e.days,l=e.addExpenses,u=null,c=null,s=null;return b(a)&&b(n)?r.a.createElement("div",{className:"addExpense"},r.a.createElement("p",{className:"addExpense__info"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0438\u0434 \u0442\u043e\u0432\u0430\u0440\u0430, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442\u0435\u0441\u044c \u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0434\u0435\u043d\u044c\u0433\u0438 \u0438 \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u044b \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u043d\u0430 \u043d\u0435\u0433\u043e \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u0442\u044c."),r.a.createElement("div",{className:"addExpense__fields-wrapper"},r.a.createElement("label",{className:"addExpense__field"},r.a.createElement("span",{className:"addExpense__field__title"},"\u0412\u0438\u0434 \u0442\u043e\u0432\u0430\u0440\u0430:"),r.a.createElement("input",{ref:function(e){u=e},type:"text"})),r.a.createElement("label",{className:"addExpense__field"},r.a.createElement("span",{className:"addExpense__field__title"},"\u041f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u043c\u044b\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b:"),r.a.createElement("input",{ref:function(e){c=e},type:"text"})),r.a.createElement("label",{className:"addExpense__field"},r.a.createElement("span",{className:"addExpense__field__title"},"\u041a\u0430\u0436\u0434\u043e\u0434\u043d\u0435\u0432\u043d\u0430\u044f \u0442\u0440\u0430\u0442\u0430:"),r.a.createElement("input",{ref:function(e){s=e},type:"checkbox"}))),r.a.createElement("button",{className:"addExpense__btn",type:"button",onClick:function(){console.dir(s),""!==u.value.trim()&&""!==c.value.trim()&&b(c.value)&&(l({value:Number(c.value),name:u.value,everyDayExpenseValue:s.checked?Number(c.value)/n:null}),u.value="",c.value="")}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0440\u0430\u0441\u0445\u043e\u0434\u044b"),r.a.createElement("p",null,t?"":"\u041d\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0441\u0440\u0435\u0434\u0441\u0442\u0432, \u0447\u0442\u043e\u0431\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e")):null})),D=Object(d.b)((function(e){return{expensesList:e.expenses}}))((function(e){var a=e.expensesList;return void 0!==a&&0!==a.length?r.a.createElement("ul",{className:"expensesList"},a.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement(v.b,{exact:!0,to:"/".concat(e.id)},'\u041d\u0430 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e "',e.name,'" \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c'," ",e.value," ","\u0440\u0443\u0431\u043b\u0435\u0439."))}))):null})),O=function(){return r.a.createElement("div",{className:"container_rightSide"},r.a.createElement("button",{className:"refreshBtn",onClick:function(){localStorage.setItem("controlMoneyStore",JSON.stringify(p)),document.location.reload()}},"\u041d\u0430\u0447\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043b\u0438\u0441\u0442"))};var h={decrementAmountOfDays:f},I=Object(d.b)(null,h)((function(e){var a=e.decrementAmountOfDays,t=function(){(new Date).getHours()+""==="05"&&a()};return Object(l.useEffect)((function(){var e=setInterval(t,36e5);return function(){return clearInterval(e)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement("div",{className:"App wrapper"},r.a.createElement(x,null),r.a.createElement(S,null),r.a.createElement(D,null)))})),g={addPurchase:function(e){return{type:"ADD_PURCHASE",payload:e}}},A=Object(d.b)(null,g)((function(e){var a=e.expenseItem,t=e.addPurchase,n=null,l=null;return r.a.createElement("div",{className:"addPurchase"},r.a.createElement("h3",null,'\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0438 \u0432 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 "',a.name,'".'),r.a.createElement("label",null,"\u041f\u043e\u043a\u0443\u043f\u043a\u0430:",r.a.createElement("br",null),r.a.createElement("input",{ref:function(e){n=e},type:"text"}),r.a.createElement("br",null)),r.a.createElement("label",null,"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u043b\u0438:",r.a.createElement("br",null),r.a.createElement("input",{ref:function(e){l=e},type:"text"}),r.a.createElement("br",null)),r.a.createElement("button",{type:"button",onClick:function(){""!==n.value.trim()&&""!==l.value.trim()&&b(l.value)&&(t({expenseId:a.id,value:Number(l.value),name:n.value}),n.value="",l.value="")}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043a\u0443\u043f\u043a\u0443"),r.a.createElement("p",null,a.isExpensePositive?"":"\u041d\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0441\u0440\u0435\u0434\u0441\u0442\u0432, \u0447\u0442\u043e\u0431\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043a\u0443\u043f\u043a\u0443"))})),V=Object(d.b)((function(e){return{days:e.days}}))((function(e){var a=e.expenseItem,t=e.days;return r.a.createElement("div",{className:"purchasesList"},a.everyDayExpenseValue?r.a.createElement("div",null,r.a.createElement("p",{className:"purchasesList__info"},"\u041d\u0430 ",t," \u0434\u043d\u0435\u0439 \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c"," ",a.value," ","\u0440\u0443\u0431\u043b\u0435\u0439."),r.a.createElement("p",{className:"purchasesList__info"},"\u041d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043e"," ",a.currentDayExpenseValue," ","\u0440\u0443\u0431\u043b\u0435\u0439.")):r.a.createElement("p",{className:"purchasesList__info"},'\u041d\u0430 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e "',a.name,'" \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c'," ",a.value," ","\u0440\u0443\u0431\u043b\u0435\u0439."),r.a.createElement("table",{className:"purchasesList__table"},r.a.createElement("tr",null,r.a.createElement("th",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430"),r.a.createElement("th",null,"\u0426\u0435\u043d\u0430")),a.purchases.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.value))}))))})),j={decrementAmountOfDays:f},P=Object(d.b)((function(e,a){return{expenseItem:e.expenses.find((function(e){return e.id===Number(a.match.params.expenseId)}))||null}}),j)((function(e){var a=e.expenseItem,t=e.decrementAmountOfDays,n=function(){(new Date).getHours()+""==="05"&&t()};return Object(l.useEffect)((function(){var e=setInterval(n,36e5);return function(){return clearInterval(e)}}),[]),null===a?r.a.createElement("div",{className:"purchases wrapper"},'\u042d\u0442\u043e \u043e\u043f\u043e\u0432\u0435\u0449\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435. \u0425\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u043e \u043f\u043e\u043a\u0443\u043f\u043a\u0430\u0445 \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438, \u0447\u0442\u043e\u0431\u044b \u0435\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c. \u0421\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e, \u0432\u044b \u043e\u0431\u043d\u043e\u0432\u0438\u043b\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0448\u043b\u0438 \u043d\u0430 \u043f\u043e\u0434\u0434\u043e\u043c\u0435\u043d, \u0432\u0432\u0435\u0434\u044f \u0435\u0433\u043e \u0432 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435. \u0422\u0430\u043a \u043a\u0430\u043a \u0434\u0430\u043d\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441 \u0431\u0430\u0437\u043e\u0439 \u0434\u0430\u043d\u043d\u044b\u0445, \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043b\u043e\u0433\u0438\u043a\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u043a\u043d\u043e\u043f\u043a\u0430\u043c\u0438 "\u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443" \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435.'):r.a.createElement("div",{className:"purchases wrapper"},r.a.createElement(A,{expenseItem:a}),r.a.createElement(V,{expenseItem:a}))})),C=function(e){var a=e.store;return r.a.createElement(d.a,{store:a},r.a.createElement(v.a,null,r.a.createElement(y.a,{exact:!0,path:"/",component:I}),r.a.createElement(y.a,{exact:!0,path:"/:expenseId",component:P})))},L=(t(35),localStorage.getItem("controlMoneyStore")?JSON.parse(localStorage.getItem("controlMoneyStore")):void 0),w=Object(s.b)(E,L,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());w.subscribe((function(){localStorage.setItem("controlMoneyStore",JSON.stringify(w.getState()))})),c.a.render(r.a.createElement(C,{store:w}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.9b7cf6c7.chunk.js.map