(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(36)},,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(4),o=a.n(s),i=a(9),l=a(2),c=a.n(l),u=a(5),m=a(6),d=a(7),f=a(10),h=a(8),p=a(11),g=(a(20),function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__main-heading"},"Toronto Waste Lookup"))}),v=(a(22),a(1)),b=function(e){return r.a.createElement("div",{className:"searchfield"},r.a.createElement("input",{type:"text",placeholder:"Type the item name",className:"searchfield__input",value:e.inputValue,onChange:e.handleInputChange,onKeyPress:e.handleKeyPress}),r.a.createElement("button",{onClick:e.fetchNewItems,className:"searchfield__button"},r.a.createElement(v.d,{className:"searchfield__icon"})))},k=(a(24),a(26),function(e){var t=document.createElement("div");return t.innerHTML=e,0===t.childNodes.length?"":t.childNodes[0].nodeValue}),w=function(e){for(var t=e+",",a=[],n="",r=0;r<t.length;r++)","===t[r]?(a.push(n),r++,n=""):n+=t[r];return a},y="https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=500",E=function(e){var t=e.title,a=e.body,n=e.isFavourite,s=e.style;return r.a.createElement("div",{className:"waste-item",style:s},r.a.createElement("div",{className:"waste-item__title"},n?r.a.createElement(v.e,{className:"waste-item__star waste-item__favourite",onClick:e.onClick}):r.a.createElement(v.c,{className:"waste-item__star",onClick:e.onClick}),r.a.createElement("p",{className:"waste-item__title-text"},t)),r.a.createElement("div",{className:"waste-item__body",dangerouslySetInnerHTML:{__html:k(a)}}))},_=(a(28),function(e){return r.a.createElement("div",{class:"sk-cube-grid"},r.a.createElement("div",{class:"sk-cube sk-cube1"}),r.a.createElement("div",{class:"sk-cube sk-cube2"}),r.a.createElement("div",{class:"sk-cube sk-cube3"}),r.a.createElement("div",{class:"sk-cube sk-cube4"}),r.a.createElement("div",{class:"sk-cube sk-cube5"}),r.a.createElement("div",{class:"sk-cube sk-cube6"}),r.a.createElement("div",{class:"sk-cube sk-cube7"}),r.a.createElement("div",{class:"sk-cube sk-cube8"}),r.a.createElement("div",{class:"sk-cube sk-cube9"}))}),N=function(e){var t=e.currentItems,a=e.favourites,n=e.addToFavourites,s=e.removeFromFavourites;return e.loading?r.a.createElement("div",{className:"no-items"},r.a.createElement(_,null)):0===t.length?r.a.createElement("div",{className:"no-items"},r.a.createElement(v.b,{className:"no-items__icon"}),r.a.createElement("p",{className:"no-items__text"},"There's nothing to show")):r.a.createElement("div",{className:"current-items"},t.map(function(e,o){var i=function(e,t){var a=!0,n=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(a=(s=o.next()).done);a=!0){var i=s.value;if(JSON.stringify(i)===JSON.stringify(t))return!0}}catch(l){n=!0,r=l}finally{try{a||null==o.return||o.return()}finally{if(n)throw r}}return!1}(a,e),l=o===t.length-1?{marginBottom:"20px"}:null;return r.a.createElement(E,{title:e.title,body:e.body,key:o,isFavourite:i,onClick:i?function(){return s(e)}:function(){return n(e)},style:l})}))},q=(a(30),function(e){var t=e.favourites,a=e.removeFromFavourites;return r.a.createElement("div",{className:"favourites"},r.a.createElement("div",{className:"favourites__content"},r.a.createElement("h1",{className:"favourites__heading"},"Favourites"),t.length>0?t.map(function(e){return r.a.createElement(E,{title:e.title,body:e.body,onClick:function(){return a(e)},isFavourite:!0})}):r.a.createElement("div",{className:"no-items"},r.a.createElement(v.a,{className:"no-items__icon"}),r.a.createElement("p",{className:"no-items__text"},"No favourites yet, bro"))))}),F=(a(32),function(e){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__info"},"Made with \u2665 by"," ",r.a.createElement("a",{href:"https://ironsoul.me",target:"_blank",rel:"noopener noreferrer"},"ironsoul")," ","for Shopify"))}),I=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={inputValue:"pesticides",favourites:[{body:"&lt;ul&gt; \n &lt;li&gt;Broken glass and sharp objects can be hazardous to our collections staff.&lt;/li&gt; \n &lt;li&gt;Securely wrap broken glass and sharp objects in newspaper before placing the item in your &lt;strong&gt;Garbage Bin.&lt;/strong&gt;&lt;/li&gt; \n&lt;/ul&gt;",category:"Garbage",title:"Garbage Bin (broken glass & knives)",keywords:"mirror, mirror (broken), coffee maker (broken glass), ceramic dish (broken), paring knife, sharp knife, utensil, carving knife, knives, fork, can opener, nail, screw, nut, bolt"}],loading:!1,currentItems:[{id:"9fLcKEW_PcJqO8JNRO3fJg",body:"&lt;ul&gt;\n&lt;li&gt;This item is&amp;nbsp;&lt;a href=&quot;https://www.toronto.ca/services-payments/recycling-organics-garbage/household-hazardous-waste/&quot; target=&quot;_self&quot;&gt;Household Hazardous Waste (HHW)&lt;/a&gt;&amp;nbsp;and MUST NOT be placed in your Garbage Bin, Blue Bin, Green Bin or put down the drain/toilet/sewer.&lt;/li&gt;\n&lt;li&gt;Please take this item to one of the City&#x27;s&amp;nbsp;&lt;a href=&quot;http://www.toronto.ca/garbage/depots.htm&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot;&gt;Drop-Off Depots&lt;/a&gt;&amp;nbsp;or&amp;nbsp;&lt;a href=&quot;http://www.toronto.ca/environment_days/index.htm&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot;&gt;Community Environment Days&lt;/a&gt;.&lt;/li&gt;\n&lt;li&gt;For HHW between 10 to 50 litres/kilograms, residents can also request a free Toxic Taxi pick-up&amp;nbsp;&lt;a href=&quot;https://secure.toronto.ca/webwizard/html/household_hazardous_waste.htm&quot;&gt;online&lt;/a&gt;&amp;nbsp;or by calling 311. Residents can also check the&amp;nbsp;&lt;a href=&quot;http://www.makethedrop.ca.&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot;&gt;Orange Drop Program&lt;/a&gt;.&lt;/li&gt;\n&lt;/ul&gt;",category:"HHW",title:"HHW (fertilizers, pesticides, herbicides - Orange Drop items)",keywords:"fertilizer, pesticide, lawn chemicals, Miracle Grow, insect repellent, insecticide, herbicide, round up, round-up, weed killer, garden chemical, 2-4-D, 24D, Diazinon, weed spray"}]},a.fetchNewItems=Object(u.a)(c.a.mark(function e(){var t,n,r,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(t=a.state.inputValue).length){e.next=3;break}return e.abrupt("return");case 3:if(!a.state.loading){e.next=5;break}return e.abrupt("return");case 5:return a.setState({loading:!0}),e.next=8,fetch(y);case 8:return n=e.sent,e.next=11,n.json();case 11:r=e.sent,s=r.filter(function(e){return w(e.keywords).includes(t)||e.title.indexOf(t)>=0}),a.setState({currentItems:s,loading:!1});case 14:case"end":return e.stop()}},e,this)})),a.handleKeyPress=function(e){"Enter"===e.key&&a.fetchNewItems()},a.addToFavourites=function(e){a.setState(function(t){return{favourites:[].concat(Object(i.a)(t.favourites),[e])}})},a.removeFromFavourites=function(e){a.setState(function(t){return{favourites:t.favourites.filter(function(t){return JSON.stringify(t)!==JSON.stringify(e)})}})},a.handleInputChange=function(e){var t=e.target.value,n=0===t.length;a.setState(function(e){return{inputValue:t,currentItems:n?[]:e.currentItems}})},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(b,{handleKeyPress:this.handleKeyPress,handleInputChange:this.handleInputChange,fetchNewItems:this.fetchNewItems,inputValue:this.state.inputValue}),r.a.createElement(N,{favourites:this.state.favourites,currentItems:this.state.currentItems,addToFavourites:this.addToFavourites,removeFromFavourites:this.removeFromFavourites,loading:this.state.loading}),r.a.createElement(q,{favourites:this.state.favourites,removeFromFavourites:this.removeFromFavourites}),r.a.createElement(F,null))}}]),t}(r.a.Component),O=(a(34),document.getElementById("root"));o.a.render(r.a.createElement(I,null),O)}],[[12,2,1]]]);
//# sourceMappingURL=main.462e4318.chunk.js.map