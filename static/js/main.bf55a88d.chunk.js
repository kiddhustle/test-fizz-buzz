(window["webpackJsonpnhs-test-1"]=window["webpackJsonpnhs-test-1"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(3),i=n.n(r),u=(n(14),n(4)),o=n(5),s=n(7),c=n(6),m=n(1),h=n(8),d=(n(15),n(16),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).state={renderItems:[],fizzBuzz:[]},n.getOddNumbers=n.getOddNumbers.bind(Object(m.a)(n)),n.onClickA=n.onClickA.bind(Object(m.a)(n)),n.onClickB=n.onClickB.bind(Object(m.a)(n)),n.hasNumbers=n.hasNumbers.bind(Object(m.a)(n)),n.getFizzBuzz=n.getFizzBuzz.bind(Object(m.a)(n)),n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"getOddNumbers",value:function(){for(var e=[],t=1;t<=100;t++)t%2!==0&&e.push({val:t,isMultiple5:t%5===0});return e}},{key:"onClickA",value:function(){var e=this.getOddNumbers();this.setState({renderItems:e})}},{key:"onClickB",value:function(){this.setState({renderItems:[]})}},{key:"hasNumbers",value:function(){return this.state.renderItems.length>0}},{key:"getFizzBuzz",value:function(){for(var e=[],t=1;t<=100;t++){var n=t;t%3===0&&t%5===0?n="FizzBuzz":t%3===0?n="Fizz":t%5===0&&(n="Buzz"),e.push(n)}return e}},{key:"componentDidMount",value:function(){var e=this.getFizzBuzz();this.setState({fizzBuzz:e})}},{key:"render",value:function(){var e=this.state,t=e.renderItems,n=e.fizzBuzz;return console.log(t),l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Healthcare interview tests"),l.a.createElement("h2",null,"Test 1"),l.a.createElement("h3",null,"Requirements"),l.a.createElement("p",null,"Write a program (in 20-30mins) that does the following:"),l.a.createElement("ol",{className:"list"},l.a.createElement("li",null,"Renders Button A (green in colour)"),l.a.createElement("li",null,"On clicking Button A prints odd numbers up to 100"),l.a.createElement("li",null,"Prints numbers that are multiples of 5 in blue text"),l.a.createElement("li",null,"After clicking Button A and printing the numbers a red reset button should be rendered instead"),l.a.createElement("li",null,"Clicking the Reset button should clear the printed number and re-render Button A")),l.a.createElement("h3",null,"Solution"),l.a.createElement("div",null,this.hasNumbers()?l.a.createElement("button",{className:"button buttonB",onClick:this.onClickB},"Reset"):l.a.createElement("button",{className:"button buttonA",onClick:this.onClickA},"Button A"),t.map((function(e){return l.a.createElement("p",{key:e.val,className:e.isMultiple5?"highlight":""},e.val)}))),l.a.createElement("h2",null,"Test 2: Fizz Buzz"),l.a.createElement("h3",null,"Requirements"),l.a.createElement("p",null,"Write a short program that prints each number from 1 to 100 on a new line.",l.a.createElement("br",null),"For each multiple of 3, print ",l.a.createElement("q",null,"Fizz")," instead of the number.",l.a.createElement("br",null),"For each multiple of 5, print ",l.a.createElement("q",null,"Buzz")," instead of the number.",l.a.createElement("br",null),"For numbers which are multiples of both 3 and 5, print ",l.a.createElement("q",null,"FizzBuzz")," instead of the number."),l.a.createElement("h3",null,"Solution"),l.a.createElement("div",null,n.map((function(e){return l.a.createElement("p",null,e)}))))}}]),t}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.bf55a88d.chunk.js.map