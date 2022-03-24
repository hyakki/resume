import{r as e,h as t,a}from"./vendor.d2d1ca1f.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const r=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,n)=>{const s=new URL(e,r);if(self[t].moduleMap[s])return a(self[t].moduleMap[s]);const o=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){n(new Error(`Failed to import: ${e}`)),l(i)},onload(){a(self[t].moduleMap[s]),l(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/resume/assets/");class r extends e.Component{render(){const t=null!=this.props.title?e.createElement("h2",null,this.props.title):null;return e.createElement("section",{className:"section"},t,this.props.children)}}class l extends e.Component{render(){return e.createElement(e.Fragment,null,e.createElement("h1",null,"Maxime PARISSE ",e.createElement("small",null,"Production Director")),e.createElement("p",null,"Based on Evere (Bruxelles) - Belgium",e.createElement("br",null),e.createElement("a",{className:"link",href:"mailto:me@hyakki.io"},"me@hyakki.io"),e.createElement("br",null),e.createElement("a",{className:"link",href:"tel:0032472555291"},"+32 (0) 472 555 291"),e.createElement("br",null)))}}const n={skills:[{title:"HTML5",start:2014,category:"html"},{title:"CSS - Responsive Web",start:2014,category:"css"},{title:"CSS Architecture (BEM, SMACSS)",start:2014,category:"css"},{title:"CSS Frameworks (Bootstrap, Foundation, Bulma)",start:2014,category:"css"},{title:"CSS Preprocessors (Sass, PostCSS)",start:2014,category:"css"},{title:"Javascript - ES6",start:2015,category:"javascript"},{title:"Version Control Systems (Git, Github, Gitlab)",start:2015,category:"vcs"},{title:"Linters / Formatters (prettier, eslint, scsslint)",start:2016,category:"devtools"},{title:"Package Managers (npm, yarn)",start:2016,category:"devtools"},{title:"Task Runners (npm/yarn scrips, gulp)",start:2016,category:"devtools"},{title:"Module Bundlers (webpack)",start:2016,category:"devtools"},{title:"Javascript Frameworks (Vue.js, React.js)",start:2017,category:"javascript"},{title:"State Management Library (VueX)",start:2017,category:"javascript"},{title:"Desktop Applications (Electron)",start:2019,category:"desktop-applications"},{title:"GraphQL",start:2019,category:"API"},{title:"Type Checkers (TypeScript)",start:2019,category:"javascript"},{title:"WebGL (Three.js) - GLSL - Shaders",start:2019,category:"webgl"}],languages:[{name:"French",level:"Native"},{name:"English",level:"Fluent"}],pro:[{job:"Production Director",company:"Idweaver",location:"Waterloo",start:"September 2021"},{job:"Lead Front-End Developer",company:"Idweaver",location:"Waterloo",start:"May 2021",end:" August 2021"},{job:"Senior Front-End Developer",company:"EPIC Web Agency",location:"Liège",start:"January 2016",end:"November 2020"},{job:"Fullstack Developer & Graphic Designer",company:"Agence Kalipso",location:"Mons",start:"October 2014",end:"December 2015"},{job:"Graphic Designer",company:"SACE Asbl - Couveuse entreprise",location:"Charleroi",start:"2012",end:"2013"}],publications:[{project:"Delhez",type:"website",url:"https://delhez.be/",year:2016},{project:"BEA",type:"website",url:"https://eu.beasensors.com/",year:2017},{project:"Mobitec",type:"website",url:"https://mobitec.be/",year:2019},{project:"Devillers",type:"website",url:"https://dvf.be/",year:2017},{project:"CE+T Power",type:"website",url:"https://cet-power.com/",year:2019},{project:"HEC Digital Lab",type:"website",url:"https://digitallab.be/",year:2019},{project:"UITP",type:"website",url:"https://uitp.org/",year:2020},{project:"Digital Europe",type:"website",url:"https://www.digitaleurope.org/",year:2018},{project:"Domaine de bronromme",type:"website",url:"https://www.domainedebronromme.be/",year:2019},{project:"Liege airport",type:"website",url:"https://www.liegeairport.com/",year:2016},{project:"Elantis",type:"website",url:"https://elantis.be/",year:2018},{project:"Elantis Batibouw",type:"website",url:"https://batibouw.elantis.be/",year:2019}],trainings:[{title:"Formation longue",type:"Front-End Developer",place:"CEPEGRA",location:"Gosselies",start:"2013",end:"2014"},{title:"Bachelor",type:"Graphic Designer",place:"Haute Ecole Albert Jacquard (HEAJ)",location:"Namur",start:"2006",end:"2011"},{title:"Master (first year)",type:"Arts numériques",place:"ARTS2 (arts au carré)",location:"Mons",start:"2005",end:"2006"}],infos:['My mechanical keyboards are "homemade". I build/flash them to be able to decide the style, colors, layout... I even started to mod my mice to make them quieter for my gaming sessions in the living room!',"Atari ST was my first console and I bought all the existing ones since then. I own a huge collection of videogames (~2000).","I have a library of franco-belgian comic strips, american comics and mangas.","I love to travel. A journey to Japan has changed my vision of the life and I think every culture deserves to be discovered. The next trip will be to Iceland.","I can't work without music. Over the years I've bought high-end audio gears to make the most of streaming platforms such as Qobuz"]};class s extends e.Component{render(){const t=n.infos.map((t=>e.createElement("li",{className:"list__item",key:t},t)));return e.createElement("ul",{className:"list max-width-print"},t)}}class o extends e.Component{render(){const t=n.languages.map((t=>e.createElement("li",{className:"list-item",key:t.name},t.name," - ",t.level)));return e.createElement("ul",{className:"list"},t)}}class i extends e.Component{render(){const t=n.pro.map((t=>e.createElement("li",{className:"list__item",key:t.company},e.createElement("h3",{className:"pro__job"},t.job),e.createElement("div",{className:"pro__company"},t.company," - ",t.location),e.createElement("div",{className:"pro__period"},"From ",t.start," ",t.end?`to ${t.end}`:"until Now"))));return e.createElement("ul",{className:"list--nostyle"},t)}}e.Component;class c extends e.Component{render(){const t=n.publications.sort(((e,t)=>e.year-t.year)).map((t=>e.createElement("li",{className:"list__item publication",key:t.project},e.createElement("h3",{className:"publication__project"},t.project),e.createElement("a",{className:"publication__link link",href:t.url,target:"_blank"},t.url),e.createElement("div",{className:"publication__year"},t.year))));return e.createElement("ul",{className:"list--nostyle"},t)}}const m=(new Date).getFullYear();class p extends e.Component{render(){const t=n.skills.sort(((e,t)=>e.start-t.start)).map((t=>e.createElement("li",{className:"list__item skill",key:t.title},e.createElement("h3",{className:"skill__title"},t.title),e.createElement("div",{className:"skill__experience"},m-t.start," years"))));return e.createElement("ul",{className:"list--nostyle"},t)}}class u extends e.Component{render(){const a=t().diff("1986-04-21","years");return e.createElement("div",{className:"max-width-print"},e.createElement("p",null,'I\'m Maxime, also known under the nickname "hyakki".',e.createElement("br",null),"I'm a ",a," years old belgian creative developer. Born in Charleroi and currently living near Brussels.",e.createElement("br",null)),e.createElement("p",null,"I've' always been passionate about graphics and coding. I was already drawing as a child and I got my first v-tech laptop at a very young age where I had to code my own games before I could play them. I had the chance to turn these two passions into my job, although I'm now fully dedicated to web development."),e.createElement("p",null,"I've worked for many companies, clients and brands to satisfy their needs and deliver the best product/service to their end-users."))}}class d extends e.Component{render(){const t=n.trainings.map((t=>e.createElement("li",{className:"list__item",key:t.place},e.createElement("h3",{className:"training__title"},t.title,", ",t.type),e.createElement("div",{className:"training__place"},t.place," - ",t.location),e.createElement("div",{className:"training__period"},"From ",t.start," to ",t.end))));return e.createElement("ul",{className:"list--nostyle"},t)}}function y(){return e.createElement("div",{className:"app"},e.createElement("div",{className:"app-inner"},e.createElement(r,null,e.createElement(l,null)),e.createElement(r,{title:"Short summary"},e.createElement(u,null)),e.createElement(r,{title:"Professional Records"},e.createElement(i,null)),e.createElement(r,{title:"Trainings"},e.createElement(d,null)),e.createElement(r,{title:"Skills"},e.createElement(p,null)),e.createElement(r,{title:"Publications"},e.createElement(c,null)),e.createElement(r,{title:"Languages"},e.createElement(o,null)),e.createElement(r,{title:"Additional Information"},e.createElement(s,null))))}a.render(e.createElement(e.StrictMode,null,e.createElement(y,null)),document.getElementById("root"));
