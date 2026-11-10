/* ============ CONFIGURAÇÃO CENTRAL (edite aqui) ============ */
const CONFIG = {
  whatsapp: "5500000000000",        // PLACEHOLDER: DDI + DDD + número, só dígitos (ex.: 5511999999999)
  email: "",                         // PLACEHOLDER: e-mail comercial (vazio = não aparece no rodapé)
  social: { Instagram: "", LinkedIn: "", Facebook: "" } // PLACEHOLDER: URLs completas (vazio = não aparece)
};
const WA = (t, m) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(m || "Olá, New Hera! Gostaria de solicitar um orçamento: " + t + ".")}`;

/* ============ CONTEÚDO ============ */
const PIL = [["design", "Design", "Interfaces modernas e experiências visuais cuidadosamente desenvolvidas."], ["tech", "Tecnologia", "Soluções digitais funcionais, responsivas e preparadas para crescer."], ["strat", "Estratégia", "Projetos pensados para melhorar a apresentação e a comunicação das empresas."]];
const SV = [["vitrine", "Sites vitrine", "Apresentação profissional da empresa, seus serviços, diferenciais e canais de contato."], ["land", "Landing pages", "Páginas estratégicas desenvolvidas para campanhas, divulgação e conversão de visitantes."], ["inst", "Sites institucionais", "Websites completos para empresas que desejam apresentar sua história, estrutura e serviços."], ["cat", "Catálogos digitais", "Apresentação organizada de produtos, categorias e informações comerciais."], ["loja", "Lojas virtuais", "Estruturação de lojas online para empresas que desejam comercializar seus produtos na internet."], ["manu", "Manutenção e atualizações", "Suporte para pequenas melhorias, atualização de informações e manutenção de websites."]];
const DF = [["Atendimento direto", "Você conversa diretamente com quem desenvolve o seu projeto."], ["Design personalizado", "Cada interface parte da identidade da sua empresa."], ["Sites responsivos", "Layouts que se adaptam a celulares, tablets e computadores."], ["Navegação intuitiva", "Estrutura clara para o visitante encontrar o que procura."], ["Desenvolvimento organizado", "Etapas definidas e código limpo, do briefing à publicação."], ["Comunicação transparente", "Você acompanha as decisões e sabe o que esperar do projeto."]];
const PR = [["Briefing", "Entendemos as necessidades e os objetivos da empresa."], ["Planejamento", "Definimos a estrutura, o conteúdo e a identidade visual do projeto."], ["Desenvolvimento", "Construímos, testamos e ajustamos o website."], ["Publicação", "Entregamos o projeto preparado para publicação na internet."]];
const PL = [ // [nome, prefixo, preço, sufixo, itens]
  ["Site vitrine essencial", "", "R$ 300,00", "", ["Uma página", "Até cinco seções", "Design responsivo", "Botão de WhatsApp", "Links para redes sociais", "SEO básico", "Uma rodada de ajustes"]],
  ["Landing page profissional", "", "R$ 400,00", "", ["Página estratégica de conversão", "Até sete seções", "Design personalizado", "Botões de ação", "Formulário de contato, quando aplicável", "SEO básico", "Duas rodadas de ajustes"]],
  ["Site institucional", "", "R$ 650,00", "", ["Até cinco páginas", "Página inicial", "Sobre a empresa", "Serviços", "Portfólio", "Contato", "Design responsivo", "SEO básico", "Duas rodadas de ajustes"]],
  ["Catálogo digital", "", "R$ 850,00", "", ["Catálogo online", "Até 30 produtos cadastrados", "Organização por categorias", "Imagens e descrições", "Botões de consulta pelo WhatsApp", "Design responsivo"]],
  ["Loja virtual", "A partir de", "R$ 1.500,00", "", ["Configuração inicial de loja virtual", "Organização de produtos", "Estrutura de categorias", "Configuração da plataforma escolhida", "Orientação para recebimento de pedidos e pagamentos", "Design e personalização conforme a plataforma"]],
  ["Manutenção", "", "R$ 79,90", "/mês", ["Pequenas atualizações", "Ajustes de informações", "Substituição de imagens", "Suporte básico", "Até uma hora de serviços mensais"]]
];
const FQ = [["Quanto tempo demora para desenvolver um site?", "Depende do escopo, do conteúdo disponível e do briefing. Depois de entender o seu projeto, informamos uma estimativa de prazo antes de começar."], ["Preciso ter domínio e hospedagem?", "Não é preciso ter antes de conversar. Domínio e hospedagem não estão incluídos nos planos, salvo quando expressamente contratados, e podemos orientar você na escolha e na publicação."], ["O site funciona em celulares?", "Sim. Os sites são desenvolvidos para funcionar bem em celulares, tablets e computadores."], ["Posso solicitar alterações?", "Sim. Cada plano inclui rodadas de ajustes. Demandas adicionais podem ser combinadas à parte ou cobertas pelo plano de manutenção."], ["A New Hera oferece manutenção?", "Sim. O plano de manutenção custa R$ 79,90/mês e inclui pequenas atualizações, ajustes de informações, troca de imagens, suporte básico e até uma hora de serviços por mês."], ["Como funciona o pagamento?", "Forma e condições de pagamento são combinadas diretamente no atendimento, conforme o escopo do projeto."], ["Como faço para contratar?", "Clique em “Solicitar orçamento” e conte sobre a sua empresa pelo WhatsApp. A conversa já abre com o serviço escolhido."]];

/* ============ RENDERIZAÇÃO ============ */
const $ = (s, r = document) => r.querySelector(s) || (s[0] === "#" ? {} : null), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const ic = k => `<svg class="ic" aria-hidden="true"><use href="#i-${k}"/></svg>`;
$("#pil").innerHTML = PIL.map(([i, t, d]) => `<article class="card tilt" data-r>${ic(i)}<h3>${t}</h3><p>${d}</p></article>`).join("");
$("#svc").innerHTML = SV.map(([i, t, d]) => `<article class="card tilt" data-r>${ic(i)}<h3>${t}</h3><p>${d}</p></article>`).join("");
$("#dif").innerHTML = DF.map(([t, d], i) => `<article class="card tilt" data-r><span class="n">0${i + 1}</span><h3>${t}</h3><p>${d}</p></article>`).join("");
$("#stp").innerHTML = PR.map(([t, d], i) => `<div class="st" data-r><b>0${i + 1}</b><h3>${t}</h3><p>${d}</p></div>`).join("");
$("#plans").innerHTML = PL.map(([n, pre, p, suf, it], i) => `<article class="card plan tilt${i ? "" : " f"}" data-r>${i ? "" : '<span class="badge">Oferta de entrada</span>'}<h3>${n}</h3><p class="pr"><small>${pre}</small>${p}<small>${suf}</small></p><ul>${it.map(x => `<li>${x}</li>`).join("")}</ul><a class="btn${i ? "" : " p"}" data-wa="${n}" href="#contato">Solicitar este plano</a></article>`).join("");
$("#fq").innerHTML = FQ.map(([q, a]) => `<div class="fq"><button aria-expanded="false">${q}</button><div class="fa"><p>${a}</p></div></div>`).join("");
$("#fsv").innerHTML = SV.map(([, t]) => `<li><a href="#servicos">${t}</a></li>`).join("");
$("#fct").innerHTML = `<li><a data-wa="Contato geral" href="#contato" target="_blank" rel="noopener">WhatsApp</a></li>` + (CONFIG.email ? `<li><a href="mailto:${CONFIG.email}">${CONFIG.email}</a></li>` : "") + Object.entries(CONFIG.social).filter(([, u]) => u).map(([n, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${n}</a></li>`).join("");
$("#yr").textContent = "© " + new Date().getFullYear() + " New Hera. Tecnologia, criatividade e presença digital.";
/* AVALIAÇÕES: substitua pelos depoimentos reais (com autorização do cliente) e remova "sample: true" */
const REV = [
  { n: "Cliente 1", c: "Segmento da empresa", s: 5, t: "Espaço reservado para o texto da avaliação.", sample: true },
  { n: "Cliente 2", c: "Segmento da empresa", s: 5, t: "Espaço reservado para o texto da avaliação.", sample: true },
  { n: "Cliente 3", c: "Segmento da empresa", s: 5, t: "Espaço reservado para o texto da avaliação.", sample: true },
  { n: "Cliente 4", c: "Segmento da empresa", s: 4, t: "Espaço reservado para o texto da avaliação.", sample: true },
  { n: "Cliente 5", c: "Segmento da empresa", s: 4, t: "Espaço reservado para o texto da avaliação.", sample: true },
  { n: "Cliente 6", c: "Segmento da empresa", s: 3, t: "Espaço reservado para o texto da avaliação.", sample: true }
];
const stars = s => `<span class="stars" role="img" aria-label="${s} de 5 estrelas">${"★".repeat(s)}<i>${"★".repeat(5 - s)}</i></span>`;
$("#rv").innerHTML = REV.map(r => `<article class="card rc tilt" data-r>${r.sample ? '<span class="tag exm">Exemplo</span>' : ""}${stars(r.s)}<blockquote>“${r.t}”</blockquote><div class="who"><span class="av">${r.n[0]}</span><div>${r.n}<small>${r.c}</small></div></div></article>`).join("");
const real = REV.filter(r => !r.sample), avg = real.length ? real.reduce((a, r) => a + r.s, 0) / real.length : 0;
$("#rvs").innerHTML = real.length ? `<div><div class="big">${avg.toFixed(1).replace(".", ",")}</div>${stars(Math.round(avg))}<small>${real.length} avaliações</small></div><div class="dist">${[5, 4, 3, 2, 1].map(k => { const n = real.filter(r => r.s === k).length; return `<div>${k}★<i style="--w:${n / real.length * 100}%"></i>${n}</div>`; }).join("")}</div>` : "";
$("#rvn").innerHTML = REV.some(r => r.sample) ? "Os cartões marcados como “Exemplo” são espaços reservados, não avaliações reais. Edite a lista REV no início deste bloco do script.js e remova sample: true ao publicar depoimentos reais." : "";
$$("[data-wa]").forEach(a => { a.href = WA(a.dataset.wa, a.dataset.msg); a.target = "_blank"; a.rel = "noopener"; });

/* ============ ANIMAÇÕES ============ */
const RM = matchMedia("(prefers-reduced-motion:reduce)").matches, FINE = matchMedia("(pointer:fine)").matches;
$$(".kt").forEach(el => { let n = 0; const wrap = node => [...node.childNodes].forEach(c => { if (c.nodeType === 3) { const f = document.createDocumentFragment(); c.textContent.split(/(\s+)/).forEach(t => { if (!t.trim()) return f.append(t); const s = document.createElement("span"); s.className = "w"; s.innerHTML = `<i style="--d:${n++ * 60}ms">${t}</i>`; f.append(s); }); c.replaceWith(f); } else wrap(c); }); wrap(el); });
$$(".grid,.bento,.steps,.pf").forEach(g => [...g.children].forEach((c, i) => c.style.transitionDelay = i * 80 + "ms"));
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; const t = e.target; t.classList.add("in"); io.unobserve(t);
  setTimeout(() => { t.style.transitionDelay = ""; t.removeAttribute("data-r"); t.classList.add("done", "d"); }, 1800);
}), { threshold: .15 });
$$("[data-r],.kt,.steps").forEach(e => io.observe(e));

$$(".fq").forEach(f => $("button", f).onclick = () => { const o = f.classList.toggle("open"); $("button", f).setAttribute("aria-expanded", o); });
const hd = $("#hd"), mb = $("#mb");
mb.onclick = () => { const o = hd.classList.toggle("m"); mb.setAttribute("aria-expanded", o); };
$$("#nav a").forEach(a => a.onclick = () => { hd.classList.remove("m"); mb.setAttribute("aria-expanded", false); });

let tick = false;
const onScroll = () => {
  if (tick) return; tick = true;
  requestAnimationFrame(() => {
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    hd.classList.toggle("s", y > 20);
    document.documentElement.style.setProperty("--p", max > 0 ? y / max : 0);
    if (!RM && $("#mq").style) $("#mq").style.setProperty("--x", -y * .3 + "px");
    tick = false;
  });
};
addEventListener("scroll", onScroll, { passive: true }); onScroll();

if (!RM && FINE) {
  addEventListener("pointermove", e => { document.documentElement.style.setProperty("--gx", e.clientX + "px"); document.documentElement.style.setProperty("--gy", e.clientY + "px"); }, { passive: true });
  $$(".tilt").forEach(c => {
    c.onpointermove = e => { const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height; c.style.setProperty("--mx", x * 100 + "%"); c.style.setProperty("--my", y * 100 + "%"); c.style.setProperty("--rx", (.5 - y) * 7 + "deg"); c.style.setProperty("--ry", (x - .5) * 7 + "deg"); };
    c.onpointerleave = () => { c.style.setProperty("--rx", "0deg"); c.style.setProperty("--ry", "0deg"); };
  });
  const hv = $(".hv svg");
  if (hv) $(".hero").addEventListener("pointermove", e => { hv.style.setProperty("--ry", (e.clientX / innerWidth - .5) * 14 + "deg"); hv.style.setProperty("--rx", (.5 - e.clientY / innerHeight) * 10 + "deg"); });
}

/* ============ PÁGINAS E TRANSIÇÕES ============ */
const ORDER = ["inicio", "sobre", "servicos", "projetos", "diferenciais", "processo", "precos", "avaliacoes", "faq", "contato"];
const TT = { inicio: "Início", sobre: "Sobre", servicos: "Serviços", projetos: "Projetos", diferenciais: "Diferenciais", processo: "Processo", precos: "Preços", avaliacoes: "Avaliações", faq: "Dúvidas frequentes", contato: "Contato" };
const pages = Object.fromEntries(ORDER.map(k => [k, $("#pg-" + k)]));
$("#fnav").innerHTML = ORDER.map(k => `<li><a href="#${k}">${TT[k]}</a></li>`).join("");
ORDER.forEach((k, i) => { if (i && i < ORDER.length - 1) { const w = document.createElement("div"); w.className = "nxw"; w.innerHTML = `<a class="btn" href="#${ORDER[i + 1]}">Próxima página: ${TT[ORDER[i + 1]]} →</a>`; $(".wrap", pages[k]).append(w); } });
const ov = $(".ov"), ol = $(".ol"), D = 560, EZ = "cubic-bezier(.65,0,.35,1)";
let cur = null, busy = false;
const want = () => pages[location.hash.slice(1)] ? location.hash.slice(1) : "inicio";
const show = k => {
  ORDER.forEach(x => pages[x].hidden = x !== k); cur = k; scrollTo({ top: 0, behavior: "instant" });
  $$("#nav a").forEach(a => a.getAttribute("href") === "#" + k ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"));
  document.title = (k === "inicio" ? "New Hera | Estúdio digital e desenvolvimento web" : TT[k] + " | New Hera");
};
const enter = p => RM || p.animate([{ opacity: 0, transform: "translateY(30px) scale(.985)", filter: "blur(12px)" }, { opacity: 1, transform: "none", filter: "blur(0)" }], { duration: 950, easing: "cubic-bezier(.2,.8,.2,1)" });
const sweep = (clip) => [ov.animate(clip, { duration: D, easing: EZ, fill: "forwards" }), ol.animate([{ transform: "translateX(0)" }, { transform: "translateX(calc(100vw - 2px))" }], { duration: D, easing: EZ, fill: "forwards" })];
async function go() {
  const k = want(); if (k === cur || busy) return; busy = true;
  if (cur === null || RM) { show(k); enter(pages[k]); }
  else {
    ov.style.visibility = ol.style.visibility = "visible";
    const out = pages[cur].animate([{ opacity: 1, transform: "none", filter: "blur(0)" }, { opacity: .25, transform: "scale(.96) translateX(-4%)", filter: "blur(10px)" }], { duration: D, easing: EZ, fill: "forwards" });
    const a = sweep([{ clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0 0 0)" }]);
    await a[0].finished; show(k); out.cancel();
    await new Promise(r => setTimeout(r, 90));
    const b = sweep([{ clipPath: "inset(0 0 0 0)" }, { clipPath: "inset(0 0 0 100%)" }]); enter(pages[k]);
    await b[0].finished; [...a, ...b].forEach(x => x.cancel()); ov.style.visibility = ol.style.visibility = "hidden";
  }
  busy = false; if (want() !== cur) go();
}
addEventListener("hashchange", go); go();
