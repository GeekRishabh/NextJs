
          window.__NEXT_REGISTER_PAGE('/expo', function() {
            var comp = module.exports=webpackJsonp([5],{349:function(e,t,r){e.exports=r(350)},350:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(41),a=n(u),s=r(49),l=n(s),o=r(18),f=n(o),c=r(8),p=n(c),i=r(9),d=n(i),h=r(19),v=n(h),m=r(20),_=n(m),x=r(12),b=n(x),y=r(175),E=n(y);r(180);var k=function(e){function t(){return(0,p.default)(this,t),(0,v.default)(this,(t.__proto__||(0,f.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return b.default.createElement("div",null,b.default.createElement("p",null,"Expo has ",this.props.stars," ⭐️"),b.default.createElement(E.default,{prefetch:!0,href:"/"},b.default.createElement("a",null,"I bet nativebase has more stars (?)")))}}],[{key:"getInitialProps",value:function(){function e(){return t.apply(this,arguments)}var t=(0,l.default)(a.default.mark(function e(){var t,r;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/expo/expo");case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",{stars:r.stargazers_count});case 7:case"end":return e.stop()}},e,this)}));return e}()}]),t}(b.default.Component);t.default=k}},[349]);
            return { page: comp.default }
          })
        