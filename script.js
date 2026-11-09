var N="5542999006818"; // número da loja (DDI+DDD+número)
function wa(t){return "https://wa.me/"+N+"?text="+encodeURIComponent(t)}
["wa-top","wa-hero","wa-band"].forEach(function(i){document.getElementById(i).href=wa("Olá! Gostaria de conhecer os produtos da Chá Comigo.")});
var imgs=[].map.call(document.querySelectorAll(".cat img"),function(i){return i.src});
var P=[
{n:"Meg Ervas",b:"Meg Ervas",c:"Chás e infusões",d:"Bebida de ervas · 500 ml",i:0},
{n:"Cardio Tônico",b:"Life Natural",c:"Tônicos naturais",d:"Tônico líquido · 500 ml",i:1},
{n:"Cranberry",b:"Supraervas",c:"Superfrutas",d:"Mistura solúvel de cranberry · 150 g",i:2},
{n:"Óleo essencial Ylang Ylang",b:"Via Aroma",c:"Óleos essenciais",d:"100% puro e vegano · 10 ml",i:3},
{n:"Aromatizador elétrico Original",b:"Via Aroma",c:"Aromatizadores",d:"Garantia de 2 anos",i:4}];
var cats=["Todos"].concat(P.map(function(p){return p.c}));
var st={q:"",c:"Todos",o:"az"};
function norm(s){return s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}
function render(){
 var chips=document.getElementById("chips");chips.innerHTML="";
 cats.forEach(function(c){var b=document.createElement("button");b.className="chip";b.type="button";b.textContent=c;b.setAttribute("aria-pressed",c===st.c);b.onclick=function(){st.c=c;render()};chips.appendChild(b)});
 var q=norm(st.q.trim());
 var r=P.filter(function(p){return(st.c==="Todos"||p.c===st.c)&&(!q||norm(p.n+" "+p.b+" "+p.c+" "+p.d).indexOf(q)>-1)});
 r.sort(function(a,b){return st.o==="az"?a.n.localeCompare(b.n,"pt"):b.n.localeCompare(a.n,"pt")});
 document.getElementById("count").textContent=r.length+(r.length===1?" produto encontrado":" produtos encontrados");
 var g=document.getElementById("prods");g.innerHTML="";
 if(!r.length){var e=document.createElement("p");e.className="empty";e.textContent="Nenhum produto encontrado. Tente outra busca ou limpe os filtros.";g.appendChild(e);return}
 r.forEach(function(p){
  var a=document.createElement("article");a.className="pcard";
  a.innerHTML='<div class="ph"><img alt=""></div><div class="tx"><small></small><h3></h3><p></p><a class="btn sm" target="_blank" rel="noopener">Pedir pelo WhatsApp</a></div>';
  a.querySelector("img").src=imgs[p.i];a.querySelector("img").alt=p.n;
  a.querySelector("small").textContent=p.b;a.querySelector("h3").textContent=p.n;a.querySelector("p").textContent=p.d;
  a.querySelector(".btn").href=wa("Olá! Gostaria de pedir: "+p.n+" ("+p.b+").");
  g.appendChild(a)})}
document.getElementById("q").oninput=function(e){st.q=e.target.value;render()};
document.getElementById("ord").onchange=function(e){st.o=e.target.value;render()};
document.querySelectorAll(".cat").forEach(function(a){a.href="#produtos";a.querySelector(".more").textContent="Ver produtos →";a.onclick=function(e){e.preventDefault();st.c=a.dataset.c;render();document.getElementById("produtos").scrollIntoView()}});
render();
