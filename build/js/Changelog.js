import{r as n,j as e,c as l}from"./index.js";import{B as o}from"./BackHeader.js";function u(){const[t,s]=n.useState(!1),[a,i]=n.useState([]);return n.useEffect(()=>{h().then(c=>{s(!0),i(c)})},[]),e.jsxs("div",{className:"dark:text-darkText",children:[e.jsx(o,{title:"Changelog"}),e.jsx("div",{className:"p-5 pt-12",children:t?e.jsx("div",{className:"",children:d(a)}):e.jsx("div",{className:"flex justify-center items-end min-h-[50dvh]",children:e.jsx(l,{})})})]})}function d(t){return e.jsx("div",{children:t.map((s,a)=>e.jsx("div",{children:e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"text-3xl font-semibold pt-8",children:s.version}),e.jsxs("p",{className:"text-sm font-medium pt-1 pb-2",children:[s.name,e.jsxs("span",{className:"text-gray font-normal",children:[" •  ",s.date]})]}),e.jsx("div",{className:"text-[0.8rem]",children:r(s.description)})]})},a))})}function r(t){return Array.isArray(t)?e.jsx("div",{className:"pl-3",children:e.jsx("ul",{className:"list-disc list-outside",children:t.map((s,a)=>Array.isArray(s)?e.jsx("li",{className:"list-none",children:r(s)},a):e.jsx("li",{children:s},a))})}):e.jsx("li",{className:"leading-loose",children:t},999)}async function h(){try{return await(await fetch("/routine-build/build/changelog/changelog.json")).json()}catch{return[{version:"There is an error loading the changelog",name:"check your internet connection",date:"",description:["Check Internet connection","Check if you are connected to a network","Try refreshing the page","Quit the app and restart it",["If the problem persists, please contact us","codeAbinash@gmail.com"]]}]}}export{u as default};
