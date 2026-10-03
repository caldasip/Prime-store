// Mobile nav
  const burger = document.getElementById('burgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const closeNav = document.getElementById('closeNav');
  burger.addEventListener('click', () => {
    mobileNav.classList.add('open');
    burger.setAttribute('aria-expanded','true');
  });
  closeNav.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    burger.setAttribute('aria-expanded','false');
  });
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));

  // Contact form -> WhatsApp handoff
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if(!nome || !telefone || !email || !mensagem){
      status.textContent = 'Por favor, preencha todos os campos antes de enviar.';
      status.style.color = '#e08a8a';
      status.classList.add('show');
      return;
    }

    const texto = `Olá, meu nome é ${nome}.%0ATelefone: ${telefone}%0AE-mail: ${email}%0AMensagem: ${mensagem}`;
    const numero = '5598985777932';
    window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');

    status.textContent = 'Mensagem pronta! Abrimos o WhatsApp para você confirmar o envio.';
    status.style.color = '#8fd6a8';
    status.classList.add('show');
    form.reset();
  });

// Catálogo (somente visualização)
  (function(){
    const IMGS = {
  "Caixa de som grande": [
    "images/catalogo/caixa-de-som-grande-1.jpg"
  ],
  "Caixa de som/microfone": [
    "images/catalogo/caixa-de-som-microfone-1.jpg"
  ],
  "Capinhas": [
    "images/catalogo/capinhas-1.jpg",
    "images/catalogo/capinhas-2.jpg",
    "images/catalogo/capinhas-3.jpg",
    "images/catalogo/capinhas-4.jpg",
    "images/catalogo/capinhas-5.jpg",
    "images/catalogo/capinhas-6.jpg",
    "images/catalogo/capinhas-7.jpg",
    "images/catalogo/capinhas-8.jpg"
  ],
  "Brinquedos": [
    "images/catalogo/brinquedos-1.jpg",
    "images/catalogo/brinquedos-2.jpg",
    "images/catalogo/brinquedos-3.jpg",
    "images/catalogo/brinquedos-4.jpg",
    "images/catalogo/brinquedos-5.jpg",
    "images/catalogo/brinquedos-6.jpg"
  ],
  "Bob good": [
    "images/catalogo/bob-good-1.jpg"
  ],
  "Canetinhas coloridas": [
    "images/catalogo/canetinhas-coloridas-1.jpg"
  ],
  "Acendedor recarregável USB": [
    "images/catalogo/acendedor-recarregavel-usb-1.jpg"
  ],
  "Carregador por indução 3in1": [
    "images/catalogo/carregador-por-inducao-3in1-1.jpg"
  ],
  "Mini teclado": [
    "images/catalogo/mini-teclado-1.jpg"
  ],
  "Fone Wireless bluetooth com visor": [
    "images/catalogo/fone-wireless-bluetooth-com-visor-1.jpg",
    "images/catalogo/fone-wireless-bluetooth-com-visor-2.jpg"
  ],
  "Mouse com fio": [
    "images/catalogo/mouse-com-fio-1.jpg",
    "images/catalogo/mouse-com-fio-2.jpg",
    "images/catalogo/mouse-com-fio-3.jpg"
  ],
  "Microfone sem fio/Karaokê": [
    "images/catalogo/microfone-sem-fio-karaoke-1.jpg"
  ],
  "Difusor de aromas e umidificador": [
    "images/catalogo/difusor-de-aromas-e-umidificador-1.jpg"
  ],
  "Kit de unha": [
    "images/catalogo/kit-de-unha-1.jpg"
  ],
  "Máquina de cortar cabelo": [
    "images/catalogo/maquina-de-cortar-cabelo-1.jpg"
  ],
  "Amplificador de tela": [
    "images/catalogo/amplificador-de-tela-1.jpg"
  ],
  "Web Camera": [
    "images/catalogo/web-camera-1.jpg"
  ],
  "Arma de choque": [
    "images/catalogo/arma-de-choque-1.jpg",
    "images/catalogo/arma-de-choque-2.jpg"
  ],
  "AirPods Pro": [
    "images/catalogo/airpods-pro-1.jpg"
  ],
  "Relógio digital mesa": [
    "images/catalogo/relogio-digital-mesa-1.jpg"
  ],
  "Kit de criação de vídeo": [
    "images/catalogo/kit-de-criacao-de-video-1.jpg"
  ],
  "Carregador/Adaptador para moto": [
    "images/catalogo/carregador-adaptador-para-moto-1.jpg"
  ],
  "Mini massageador": [
    "images/catalogo/mini-massageador-1.jpg"
  ],
  "Cabo USB iPhone": [
    "images/catalogo/cabo-usb-iphone-1.jpg",
    "images/catalogo/cabo-usb-iphone-2.jpg"
  ],
  "Cabo USB-C": [
    "images/catalogo/cabo-usb-c-1.jpg",
    "images/catalogo/cabo-usb-c-2.jpg"
  ],
  "Cabo USB micro": [
    "images/catalogo/cabo-usb-micro-1.jpg",
    "images/catalogo/cabo-usb-micro-2.jpg",
    "images/catalogo/cabo-usb-micro-3.jpg"
  ],
  "Carregador 50w": [
    "images/catalogo/carregador-50w-1.jpg"
  ],
  "Mouse PAD": [
    "images/catalogo/mouse-pad-1.jpg",
    "images/catalogo/mouse-pad-2.jpg"
  ],
  "Chips Claro, Vivo e TIM": [
    "images/catalogo/chips-claro-vivo-e-tim-1.jpg",
    "images/catalogo/chips-claro-vivo-e-tim-2.jpg",
    "images/catalogo/chips-claro-vivo-e-tim-3.jpg"
  ],
  "Relógio digital Parece": [
    "images/catalogo/relogio-digital-parece-1.jpg",
    "images/catalogo/relogio-digital-parece-2.jpg",
    "images/catalogo/relogio-digital-parece-3.jpg"
  ],
  "Cabo de rede/Wi-Fi": [
    "images/catalogo/cabo-de-rede-wi-fi-1.jpg"
  ],
  "Cabo HDMI": [
    "images/catalogo/cabo-hdmi-1.jpg",
    "images/catalogo/cabo-hdmi-2.jpg"
  ],
  "Filtro de linha/Extensão": [
    "images/catalogo/filtro-de-linha-extensao-1.jpg"
  ],
  "Fita LED RGB": [
    "images/catalogo/fita-led-rgb-1.jpg"
  ],
  "Carregador Veicular/Micro, tipo C, iPhone": [
    "images/catalogo/carregador-veicular-micro-tipo-c-iphone-1.jpg",
    "images/catalogo/carregador-veicular-micro-tipo-c-iphone-2.jpg"
  ],
  "Microfone Lapela iOS": [
    "images/catalogo/microfone-lapela-ios-1.jpg"
  ],
  "Faca cutelaria": [
    "images/catalogo/faca-cutelaria-1.jpg"
  ],
  "Power bank Inova": [
    "images/catalogo/power-bank-inova-1.jpg"
  ],
  "Power bank indução": [
    "images/catalogo/power-bank-inducao-1.jpg"
  ],
  "USB Hub": [
    "images/catalogo/usb-hub-1.jpg"
  ],
  "Cabo USB 2in1": [
    "images/catalogo/cabo-usb-2in1-1.jpg"
  ],
  "Cabo Tipo C p/C": [
    "images/catalogo/cabo-tipo-c-p-c-1.jpg",
    "images/catalogo/cabo-tipo-c-p-c-2.jpg",
    "images/catalogo/cabo-tipo-c-p-c-3.jpg"
  ],
  "Cabo USB-C 2m": [
    "images/catalogo/cabo-usb-c-2m-1.jpg"
  ],
  "Receptor de música sem fio": [
    "images/catalogo/receptor-de-musica-sem-fio-1.jpg"
  ],
  "Carregador turbo 2.1A": [
    "images/catalogo/carregador-turbo-2-1a-1.jpg"
  ],
  "Fonte 12V": [
    "images/catalogo/fonte-12v-1.jpg"
  ],
  "Hub USB-C": [
    "images/catalogo/hub-usb-c-1.jpg"
  ],
  "Mouse sem fio/LED": [
    "images/catalogo/mouse-sem-fio-led-1.jpg"
  ],
  "Faca Exército": [
    "images/catalogo/faca-exercito-1.jpg",
    "images/catalogo/faca-exercito-2.jpg"
  ],
  "Relógio Smartwatch": [
    "images/catalogo/relogio-smartwatch-1.jpg"
  ],
  "Bomba de ar para carro": [
    "images/catalogo/bomba-de-ar-para-carro-1.jpg"
  ],
  "Caixa de som Bluetooth portátil": [
    "images/catalogo/caixa-de-som-bluetooth-portatil-1.jpg"
  ],
  "Mini Painel solar": [
    "images/catalogo/mini-painel-solar-1.jpg"
  ],
  "Relógio digital de parede": [
    "images/catalogo/relogio-digital-de-parede-1.jpg"
  ],
  "Caixa de som/PC": [
    "images/catalogo/caixa-de-som-pc-1.jpg"
  ],
  "Nécessaire unissex": [
    "images/catalogo/necessaire-unissex-1.jpg",
    "images/catalogo/necessaire-unissex-2.jpg"
  ],
  "Projetor": [
    "images/catalogo/projetor-1.jpg"
  ],
  "Pochete masculina": [
    "images/catalogo/pochete-masculina-1.jpg"
  ],
  "Mochilas": [
    "images/catalogo/mochilas-1.jpg",
    "images/catalogo/mochilas-2.jpg"
  ],
  "Headphone Wireless bluetooth": [
    "images/catalogo/headphone-wireless-bluetooth-1.jpg"
  ],
  "Perfumes importados 35ml": [
    "images/catalogo/perfumes-importados-35ml-1.jpg"
  ],
  "Power bank 10000mAh com cabo": [
    "images/catalogo/power-bank-10000mah-com-cabo-1.jpg"
  ],
  "Películas": [
    "images/catalogo/peliculas-1.jpg",
    "images/catalogo/peliculas-2.jpg"
  ],
  "LED Wireless": [
    "images/catalogo/led-wireless-1.jpg"
  ],
  "Carteira de dinheiro": [
    "images/catalogo/carteira-de-dinheiro-1.jpg",
    "images/catalogo/carteira-de-dinheiro-2.jpg"
  ],
  "Fita LED Branco quente": [
    "images/catalogo/fita-led-branco-quente-1.jpg"
  ],
  "Teclado com fio": [
    "images/catalogo/teclado-com-fio-1.jpg"
  ],
  "Relógio de pulso/Feminino": [
    "images/catalogo/relogio-de-pulso-feminino-1.jpg",
    "images/catalogo/relogio-de-pulso-feminino-2.jpg"
  ],
  "Chapéu masculino": [
    "images/catalogo/chapeu-masculino-1.jpg",
    "images/catalogo/chapeu-masculino-2.jpg",
    "images/catalogo/chapeu-masculino-3.jpg",
    "images/catalogo/chapeu-masculino-4.jpg",
    "images/catalogo/chapeu-masculino-5.jpg",
    "images/catalogo/chapeu-masculino-6.jpg"
  ],
  "Relógio de pulso/Masculino": [
    "images/catalogo/relogio-de-pulso-masculino-1.jpg",
    "images/catalogo/relogio-de-pulso-masculino-2.jpg",
    "images/catalogo/relogio-de-pulso-masculino-3.jpg",
    "images/catalogo/relogio-de-pulso-masculino-4.jpg"
  ],
  "Carregador 30w": [
    "images/catalogo/carregador-30w-1.jpg"
  ],
  "Carregador 24w": [
    "images/catalogo/carregador-24w-1.jpg",
    "images/catalogo/carregador-24w-2.jpg"
  ],
  "Carregador 15w": [
    "images/catalogo/carregador-15w-1.jpg",
    "images/catalogo/carregador-15w-2.jpg"
  ],
  "Mouse sem fio": [
    "images/catalogo/mouse-sem-fio-1.jpg"
  ],
  "Teclado com LED": [
    "images/catalogo/teclado-com-led-1.jpg"
  ],
  "Carregador 140w": [
    "images/catalogo/carregador-140w-1.jpg"
  ],
  "Carregador 40w": [
    "images/catalogo/carregador-40w-1.jpg"
  ],
  "Mini relógio digital": [
    "images/catalogo/mini-relogio-digital-1.jpg"
  ],
  "Anotador infantil": [
    "images/catalogo/anotador-infantil-1.jpg",
    "images/catalogo/anotador-infantil-2.jpg"
  ],
  "Projetor 4K": [
    "images/catalogo/projetor-4k-1.jpg"
  ],
  "Fones de cabo": [
    "images/catalogo/fones-de-cabo-1.jpg",
    "images/catalogo/fones-de-cabo-2.jpg"
  ],
  "Fone com fio PC/LED": [
    "images/catalogo/fone-com-fio-pc-led-1.jpg"
  ]
};
    const data = {
      "Telas e Proteção": ["Amplificador de tela","Capinhas","Películas"],
      "Áudio": ["Fones de cabo","AirPods Pro","Fone Wireless bluetooth com visor","Headphone Wireless bluetooth","Fone com fio PC/LED","Caixa de som grande","Caixa de som Bluetooth portátil","Caixa de som/microfone","Caixa de som/PC","Microfone sem fio/Karaokê","Microfone Lapela iOS","Receptor de música sem fio"],
      "Relógios": ["Relógio digital Parece","Relógio digital mesa","Relógio digital de parede","Relógio Smartwatch","Relógio de pulso/Masculino","Relógio de pulso/Feminino","Mini relógio digital"],
      "Carregadores e Energia": ["Carregador 140w","Carregador 50w","Carregador 40w","Carregador 30w","Carregador 24w","Carregador 15w","Carregador turbo 2.1A","Carregador Veicular/Micro, tipo C, iPhone","Carregador/Adaptador para moto","Carregador por indução 3in1","Power bank indução","Power bank Inova","Power bank 10000mAh com cabo","Mini Painel solar","Fonte 12V","Filtro de linha/Extensão"],
      "Cabos e Conexões": ["Cabo USB 2in1","Cabo HDMI","Cabo USB-C 2m","Cabo USB-C","Cabo USB micro","Cabo USB iPhone","Cabo Tipo C p/C","Cabo de rede/Wi-Fi","Hub USB-C","USB Hub"],
      "Informática e Periféricos": ["Mini teclado","Teclado com fio","Teclado com LED","Mouse com fio","Mouse sem fio","Mouse sem fio/LED","Mouse PAD","Web Camera","Kit de criação de vídeo"],
      "Iluminação": ["LED Wireless","Fita LED RGB","Fita LED Branco quente"],
      "Moda e Acessórios": ["Chapéu masculino","Pochete masculina","Nécessaire unissex","Carteira de dinheiro","Mochilas"],
      "Cuidados Pessoais": ["Máquina de cortar cabelo","Mini massageador","Kit de unha"],
      "Perfumaria": ["Perfumes importados 35ml"],
      "Utilidades e Diversos": ["Arma de choque","Faca cutelaria","Faca Exército","Acendedor recarregável USB","Bomba de ar para carro","Projetor","Projetor 4K","Difusor de aromas e umidificador","Anotador infantil","Bob good","Canetinhas coloridas","Brinquedos","Chips Claro, Vivo e TIM"]
    };
    const groupsEl=document.getElementById('catalogGroups'), filtersEl=document.getElementById('catFilters'),
          searchEl=document.getElementById('catSearch'), emptyEl=document.getElementById('catEmpty');
    let active='Todos';
    const norm=t=>t.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
    ['Todos',...Object.keys(data)].forEach(name=>{
      const b=document.createElement('button'); b.type='button'; b.className='cf-btn'+(name==='Todos'?' active':''); b.textContent=name;
      b.onclick=()=>{active=name; [...filtersEl.children].forEach(c=>c.classList.toggle('active',c===b)); render();};
      filtersEl.appendChild(b);
    });

    // Lightbox — Prime Gold showcase
    const lb=document.createElement('div'); lb.className='lb';
    lb.innerHTML='<div class="lb-glow"></div><div class="lb-dust"></div><div class="lb-brand">◆ PRIME STORE<small>IMPORTADOS</small></div><button class="lb-btn lb-close" aria-label="Fechar">×</button><button class="lb-btn lb-prev" aria-label="Anterior">‹</button><div class="lb-stage"><img alt=""><i class="lb-c tl"></i><i class="lb-c tr"></i><i class="lb-c bl"></i><i class="lb-c br"></i><span class="lb-shine"></span></div><button class="lb-btn lb-next" aria-label="Próxima">›</button><div class="lb-info"><div class="lb-name"></div><div class="lb-line"></div><div class="lb-count"></div></div><div class="lb-thumbs"></div><a class="lb-cta" target="_blank" rel="noopener">Consultar este item no WhatsApp</a>';
    document.body.appendChild(lb);
    const $=q=>lb.querySelector(q), lbImg=$('img'), stage=$('.lb-stage'), shine=$('.lb-shine'), thumbs=$('.lb-thumbs'), cta=$('.lb-cta');
    for(let k=0;k<16;k++){ const d=document.createElement('i'); d.style.cssText='--l:'+(Math.random()*100)+'%;--s:'+(4+Math.random()*6)+'px;--d:'+(7+Math.random()*7)+'s;--w:-'+(Math.random()*12)+'s'; $('.lb-dust').appendChild(d); }
    const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches, canHover=window.matchMedia('(hover:hover)').matches;
    const EASE='cubic-bezier(.2,.8,.2,1)';
    let cur=[], idx=0, curName='', originEl=null, closing=false;
    function burst(x,y,n){ if(reduceMotion) return; for(let k=0;k<(n||14);k++){ const sp=document.createElement('i'); sp.className='spark'; const an=Math.random()*6.283, di=40+Math.random()*70; sp.style.cssText='left:'+x+'px;top:'+y+'px;--tx:'+Math.cos(an)*di+'px;--ty:'+Math.sin(an)*di+'px'; document.body.appendChild(sp); setTimeout(()=>sp.remove(),900); } }
    function flash(){ if(!reduceMotion) shine.animate([{opacity:1,transform:'translateX(-120%)'},{opacity:1,transform:'translateX(120%)'}],{duration:900,easing:'ease-in-out'}); }
    function show(dir){
      lbImg.src=cur[idx]; $('.lb-name').textContent=curName;
      $('.lb-count').textContent=cur.length>1?String(idx+1).padStart(2,'0')+' / '+String(cur.length).padStart(2,'0'):'';
      $('.lb-prev').style.display=$('.lb-next').style.display=cur.length>1?'block':'none';
      [...thumbs.children].forEach((t,k)=>t.classList.toggle('on',k===idx));
      cta.href='https://wa.me/5598985777932?text='+encodeURIComponent('Olá, vi o catálogo no site e quero consultar o item: '+curName);
      if(dir&&!reduceMotion){ lbImg.animate([{opacity:0,transform:'translateX('+(dir*70)+'px) rotateY('+(-dir*18)+'deg) scale(.92)'},{opacity:1,transform:'none'}],{duration:480,easing:EASE}); flash(); }
    }
    function go(n){ const dir=n>idx?1:-1; idx=(n+cur.length)%cur.length; show(dir); }
    function originDelta(){ if(!originEl||!document.body.contains(originEl)) return null; const a=originEl.getBoundingClientRect(), b=lbImg.getBoundingClientRect(); if(!b.width) return null; return {dx:a.left+a.width/2-(b.left+b.width/2), dy:a.top+a.height/2-(b.top+b.height/2), sc:Math.min(a.width/b.width,a.height/b.height)}; }
    function open(name,srcEl){
      cur=IMGS[name]; curName=name; idx=0; originEl=srcEl||null; closing=false;
      thumbs.innerHTML=''; if(cur.length>1) cur.forEach((u,k)=>{ const t=document.createElement('button'); t.innerHTML='<img alt="">'; t.firstChild.src=u; t.onclick=e=>{e.stopPropagation(); if(k!==idx) go(k);}; thumbs.appendChild(t); });
      show(0); lb.classList.add('open'); lb.getBoundingClientRect(); lb.classList.add('show');
      if(reduceMotion) return;
      const run=()=>{ const d=originDelta(); lbImg.animate([d?{opacity:.2,transform:'translate('+d.dx+'px,'+d.dy+'px) scale('+d.sc+')'}:{opacity:0,transform:'scale(.8)'},{opacity:1,transform:'none'}],{duration:620,easing:EASE}); setTimeout(()=>{ flash(); const r=stage.getBoundingClientRect(); burst(r.left+r.width/2,r.top+r.height/2,18); },480); };
      lbImg.decode?lbImg.decode().then(run,run):run();
    }
    function close(){
      if(closing||!lb.classList.contains('open')) return;
      if(reduceMotion){ lb.classList.remove('show','open'); return; }
      closing=true; const d=originDelta();
      lbImg.animate([{opacity:1,transform:'none'},d?{opacity:.2,transform:'translate('+d.dx+'px,'+d.dy+'px) scale('+d.sc+')'}:{opacity:0,transform:'scale(.85)'}],{duration:340,easing:'cubic-bezier(.5,0,.75,0)',fill:'forwards'});
      lb.classList.remove('show');
      setTimeout(()=>{ lb.classList.remove('open'); closing=false; lbImg.getAnimations().forEach(x=>x.cancel()); },350);
    }
    $('.lb-close').onclick=close;
    $('.lb-prev').onclick=e=>{e.stopPropagation(); go(idx-1);};
    $('.lb-next').onclick=e=>{e.stopPropagation(); go(idx+1);};
    lb.addEventListener('click',e=>{ if(e.target===lb||e.target.classList.contains('lb-glow')) close(); });
    if(canHover&&!reduceMotion){
      lb.addEventListener('pointermove',e=>{ const x=e.clientX/innerWidth-.5, y=e.clientY/innerHeight-.5; stage.style.transform='perspective(900px) rotateY('+x*10+'deg) rotateX('+(-y*8)+'deg)'; });
      lb.addEventListener('pointerleave',()=>stage.style.transform='');
    }
    let sx=null; stage.addEventListener('pointerdown',e=>{sx=e.clientX;}); stage.addEventListener('pointerup',e=>{ if(sx!==null&&cur.length>1&&Math.abs(e.clientX-sx)>50) go(idx+(e.clientX<sx?1:-1)); sx=null; });
    document.addEventListener('keydown',e=>{ if(!lb.classList.contains('open')) return;
      if(e.key==='Escape') close(); if(e.key==='ArrowLeft'&&cur.length>1) go(idx-1); if(e.key==='ArrowRight'&&cur.length>1) go(idx+1); });

    function render(){
      const q=norm(searchEl.value.trim()); groupsEl.innerHTML=''; let total=0;
      Object.entries(data).forEach(([cat,items])=>{
        if(active!=='Todos'&&active!==cat) return;
        const list=items.filter(i=>!q||norm(i).includes(q)); if(!list.length) return;
        total+=list.length;
        const g=document.createElement('div'); g.className='catalog-group';
        const h=document.createElement('h3'); h.textContent=cat;
        const sm=document.createElement('small'); sm.textContent=list.length+(list.length>1?' itens':' item'); h.appendChild(sm);
        const ul=document.createElement('ul'); ul.className='catalog-list';
        list.forEach(i=>{
          const li=document.createElement('li');
          const pics=IMGS[i];
          if(pics){
            li.className='has-img'; li.tabIndex=0; li.setAttribute('role','button'); li.setAttribute('aria-label','Ver fotos: '+i);
            const ph=document.createElement('div'); ph.className='cl-photo';
            const im=document.createElement('img'); im.src=pics[0]; im.alt=i; im.loading='lazy'; ph.appendChild(im);
            if(pics.length>1){ const c=document.createElement('span'); c.className='cl-count'; c.textContent=pics.length+' fotos'; ph.appendChild(c); }
            const nm=document.createElement('div'); nm.className='cl-name'; nm.textContent=i;
            li.append(ph,nm);
            const activate=(e)=>{
              const r=li.getBoundingClientRect(), kb=!e||e.detail===0;
              burst(kb?r.left+r.width/2:e.clientX, kb?r.top+r.height/2:e.clientY, 12);
              li.classList.remove('sweep'); void li.offsetWidth; li.classList.add('sweep'); setTimeout(()=>li.classList.remove('sweep'),800);
              setTimeout(()=>open(i,im),reduceMotion?0:200);
            };
            if(canHover&&!reduceMotion){
              li.addEventListener('pointermove',e=>{ const r=li.getBoundingClientRect(), x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height; li.style.transform='perspective(700px) rotateY('+(x-.5)*12+'deg) rotateX('+(.5-y)*12+'deg) translateY(-3px)'; ph.style.setProperty('--mx',x*100+'%'); ph.style.setProperty('--my',y*100+'%'); });
              li.addEventListener('pointerleave',()=>li.style.transform='');
            }
            li.onclick=activate;
            li.onkeydown=e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); activate(e);} };
          } else li.textContent=i;
          ul.appendChild(li);
        });
        g.append(h,ul); groupsEl.appendChild(g);
      });
      emptyEl.style.display=total?'none':'block';
    }
    searchEl.addEventListener('input',render); render();
  })();
