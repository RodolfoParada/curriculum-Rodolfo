import{o as n,c,d as e,t as a,_ as l,r as u,F as m,f as b,b as j}from"./index-htUeHhkm.js";const h={class:"card",style:{width:"18rem"}},g={class:"card-body row"},y={class:"card-title row justify-content-center"},_={class:"card-text"},D=["href"],E={__name:"TheCard",props:["projectName","projectDescription","buttonText","projectLink"],setup(t){return(i,p)=>(n(),c("div",h,[e("div",g,[e("h5",y,a(t.projectName),1),e("p",_,a(t.projectDescription),1),e("a",{href:t.projectLink,target:"_blank",class:"btn btn-primary justify-content-center"},a(t.buttonText),9,D)])]))}},x={components:{TheCard:E},data(){return{projects:[{id:1,projectName:"Proyecto Batatabit",projectDescription:"Descripción: Es un proyecto Web, se utilizó buenas prácticas, metodologías First mobile, metodología BEM, Responsive con media Queries responsive se utilizó Html y Css.",buttonText:"Ver Proyecto",projectLink:"https://rodolfoparada.github.io/batatabit/"},{id:2,projectName:"Proyecto GAMEZONE",projectDescription:"Descripción: Es un Ecommerce, se utilizó buenas prácticas, metodologías First mobile, metodología BEM, Responsive con media Queries se utilizó Html y Css.",buttonText:"Ver Proyecto",projectLink:"https://rodolfoparada.github.io/E-COMMERCE/"},{id:3,projectName:"Proyecto Barbería",projectDescription:"Descripción: Es una pagina de una Barbería,su utilizó buenas prácticas, metodologías First mobile, metodología BEM, Responsive con media Queries se utilizó Html y Css.",buttonText:"Ver Proyecto",projectLink:"https://rodolfoparada.github.io/cursohtmlAlura/"},{id:4,projectName:"Proyecto Fuente de Soda",projectDescription:"Descripción: Es una pagina de una Fuente de Soda,su utilizó buenas prácticas, metodologías First mobile, metodología BEM, Responsive con media Queries se utilizó Html y Css.",buttonText:"Ver Proyecto",projectLink:"https://rodolfoparada.github.io/FuenteSoda1/index.html"},{id:5,projectName:"Proyecto Auto-Limpio",projectDescription:"Descripción: Es una pagina de Limpieza de Autos,su utilizó buenas prácticas, metodologías First mobile, metodología BEM, Responsive con media Queries se utilizó Html y Css.",buttonText:"Ver Proyecto",projectLink:"https://rodolfoparada.github.io/AutoLimpio/"},{id:6,projectName:"Proyecto Encriptar-Desencriptar",projectDescription:"Descripción: Es un encriptador y desencriptador de mensajes, se utilizó metodologías First mobile Bem lenguajes de Javascript con Html y Css.",buttonText:"Ver Proyecto",projectLink:"https://rodolfoparada.github.io/ChallengerOneDesafio1/"},{id:7,projectName:"Web Anime",projectDescription:"Descripción: Es una página web que se utilizó ccs y html usando buenas practicas.",buttonText:"Ver Proyecto",projectLink:"https://rodolfoparada.github.io/webAnime/"},{id:8,projectName:"Web Hotel",projectDescription:"Descripción: Es una página web que se utilizó ccs y html usando buenas practicas.",buttonText:"Ver Proyecto",projectLink:"https://rodolfoparada.github.io/WebHotel/"},{id:9,projectName:"En desarrollo ",projectDescription:"Descripción: En desarrollo ",buttonText:"Ver Proyecto",projectLink:""},{id:10,projectName:"En desarrollo ",projectDescription:"Descripción: En desarrollo ",buttonText:"Ver Proyecto",projectLink:""},{id:11,projectName:"En desarrollo ",projectDescription:"Descripción: En desarrollo ",buttonText:"Ver Proyecto",projectLink:""},{id:12,projectName:"En desarrollo ",projectDescription:"Descripción: En desarrollo ",buttonText:"Ver Proyecto",projectLink:""}],pageSize:6,page:1}},computed:{pageCount(){return Math.ceil(this.projects.length/this.pageSize)},paginatedProjects(){const t=(this.page-1)*this.pageSize,i=t+this.pageSize;return this.projects.slice(t,i)}},methods:{goToPage(t){t>=1&&t<=this.pageCount&&(this.page=t)}}},P={class:"proyectos"},T=e("h1",null,"Proyectos",-1),f={class:"card-container"},k={class:"pagination-container mt-1"},L={class:"button-one"},N=["disabled"],v={class:"mx-3"},C={class:"fw-bolder text-center"},z={class:"button-dos"},V=["disabled"];function B(t,i,p,F,s,r){const d=u("TheCard");return n(),c("div",P,[T,e("main",null,[e("div",f,[(n(!0),c(m,null,b(r.paginatedProjects,o=>(n(),c("div",{key:o.id,class:"column"},[j(d,{class:"mb-2",id:o.id,projectName:o.projectName,projectDescription:o.projectDescription,buttonText:o.buttonText,projectLink:o.projectLink},null,8,["id","projectName","projectDescription","buttonText","projectLink"])]))),128))])]),e("div",k,[e("div",L,[e("button",{type:"button",class:"btn btn-outline-secondary",onClick:i[0]||(i[0]=o=>r.goToPage(s.page-1)),disabled:s.page===1}," Anterior ",8,N)]),e("div",v,[e("span",C,a(s.page),1)]),e("div",z,[e("button",{type:"button",class:"btn btn-outline-secondary",onClick:i[1]||(i[1]=o=>r.goToPage(s.page+1)),disabled:s.page===r.pageCount}," Siguiente ",8,V)])])])}const S=l(x,[["render",B]]);export{S as default};
