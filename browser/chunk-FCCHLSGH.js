import{a as g}from"./chunk-B6JSM3EJ.js";import{P as r,Ta as v,Va as h,Ya as f,Za as k,_a as C,ia as l,pa as m,qa as n,ra as o,sa as d,ta as p,ua as s,va as c,wa as u}from"./chunk-F3FNOPWT.js";import"./chunk-7CGTOI24.js";var I=class a{title="title";headerItems=[{label:"link 1",link:"navigation link 1"},{label:"link 2",link:"navigation link 2"},{label:"link 3",link:"navigation link 3"}];outputString="";onHeaderItemClick(e){this.outputString=`Clicked on: ${e.label}; with link: ${e.link}. Implement your navigation logic.`}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=r({type:a,selectors:[["app-header"]],standalone:!0,features:[u],decls:9,vars:3,consts:[["uiGrid","",1,"px-s"],["uiRow",""],["uiCol","12"],["level","h1","place","left","title","Header"],[3,"headerItemClick","title","menuItems"],["uiCol","12",1,"mt-s"]],template:function(t,i){t&1&&(n(0,"div",0)(1,"div",1)(2,"div",2),d(3,"ui-title",3),o()(),n(4,"div",1)(5,"div",2)(6,"ui-header",4),p("headerItemClick",function(S){return i.onHeaderItemClick(S)}),o()(),n(7,"div",5),s(8),o()()()),t&2&&(l(6),m("title",i.title)("menuItems",i.headerItems),l(2),c(" ",i.outputString," "))},dependencies:[g,h,f,k,C,v]})};export{I as HeaderShowComponent};
