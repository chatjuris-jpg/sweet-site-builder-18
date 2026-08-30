import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Gift, PartyPopper, CalendarClock, MapPin, Sparkles, ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

import logoX from "@/assets/logo-x.png.asset.json";
import wordmark from "@/assets/wordmark-xuxuzinho-v2.png.asset.json";
import brandX from "@/assets/x-logo.png.asset.json";
import fotoNatalia from "@/assets/depoimento-natalia.png.asset.json";

import logoPilot from "@/assets/pilot.png.asset.json";
import logoLojasMel from "@/assets/lojasmel.png.asset.json";
import logoRevelo from "@/assets/revelo.jpg.asset.json";
import logoPetCare from "@/assets/petcare.png.asset.json";
import logoFoodToSave from "@/assets/foodtosave.png.asset.json";
import logoEspiritoSanto from "@/assets/espiritosanto.jpg.asset.json";
import logoPluris from "@/assets/pluris.png.asset.json";
import logoUnicharm from "@/assets/unicharm.png.asset.json";


import heroCupcakeAsset from "@/assets/hero-cupcake.jpg.asset.json";

import prodBolos from "@/assets/prod-bolos.webp";
import bento1 from "@/assets/bento-1.webp.asset.json";
import bento2 from "@/assets/bento-2.webp.asset.json";
import bento3 from "@/assets/bento-3.webp.asset.json";
import bento4 from "@/assets/bento-4.webp.asset.json";
import prodBolachas from "@/assets/prod-bolachas.webp";
import docinho1 from "@/assets/docinho-1.webp.asset.json";
import docinho2 from "@/assets/docinho-2.webp.asset.json";
import docinho3 from "@/assets/docinho-3.webp.asset.json";
import docinho4 from "@/assets/docinho-4.webp.asset.json";
import minibolo1 from "@/assets/minibolo-1.webp.asset.json";
import minibolo2 from "@/assets/minibolo-2.webp.asset.json";
import minibolo3 from "@/assets/minibolo-3.webp.asset.json";
import minibolo4 from "@/assets/minibolo-4.webp.asset.json";
import paodemel1 from "@/assets/paodemel-1.webp.asset.json";
import paodemel2 from "@/assets/paodemel-2.webp.asset.json";
import paodemel3 from "@/assets/paodemel-3.webp.asset.json";
import paodemel4 from "@/assets/paodemel-4.webp.asset.json";
import bolo1 from "@/assets/bolo-1.webp.asset.json";
import bolo2 from "@/assets/bolo-2.webp.asset.json";
import bolo3 from "@/assets/bolo-3.webp.asset.json";
import bolo4 from "@/assets/bolo-4.webp.asset.json";
import brownie1 from "@/assets/brownie-1.webp.asset.json";
import brownie2 from "@/assets/brownie-2.webp.asset.json";
import brownie3 from "@/assets/brownie-3.webp.asset.json";
import brownie4 from "@/assets/brownie-4.webp.asset.json";
import cupcake1 from "@/assets/cupcake-1.webp.asset.json";
import cupcake2 from "@/assets/cupcake-2.webp.asset.json";
import cupcake3 from "@/assets/cupcake-3.webp.asset.json";
import cupcake4 from "@/assets/cupcake-4.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Xuxuzinho Corporativo — Cupcakes Personalizados para Empresas" },
      {
        name: "description",
        content:
          "Cupcakes corporativos personalizados com a identidade visual da sua marca. Brindes, coffee breaks e eventos no Tatuapé, São Paulo.",
      },
      {
        property: "og:title",
        content: "Xuxuzinho Corporativo — Cupcakes Personalizados para Empresas",
      },
      {
        property: "og:description",
        content:
          "Cupcakes, brownies, bolos, docinhos e pão de mel artesanais com embalagem personalizada para a sua empresa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATS =
  "https://wa.me/5511971872937?text=Ol%C3%A1%2C%20Xuxuzinho!%20Gostaria%20de%20um%20or%C3%A7amento%20corporativo%20para%20minha%20empresa.";

const palavras = ["CUPCAKE", "BROWNIE", "BOLOS", "DOCINHOS", "PÃO DE MEL", "Entre outros"];

const servicos = [
  {
    icon: Gift,
    title: "Brindes personalizados",
    text: "Caixas e embalagens com a identidade visual da sua marca, prontas para presentear clientes e equipes.",
  },
  {
    icon: PartyPopper,
    title: "Eventos e confraternizações",
    text: "Mesa de doces, brindes kits individuais e coletivos para treinamentos, datas comemorativas, reuniões ...",
  },
  {
    icon: CalendarClock,
    title: "Pedidos recorrentes",
    text: "Programação mensal para aniversariantes do mês, onboarding de colaboradores e ações internas.",
  },
];

const produtos = [
  {
    imgs: [cupcake1.url, cupcake2.url, cupcake3.url, cupcake4.url],
    title: "Cupcakes",
    text: "Mais de 30 sabores, em dois tamanhos, com topos personalizáveis.",
    span: "sm:col-span-2 sm:row-span-2",
  },
  { imgs: [brownie1.url, brownie2.url, brownie3.url, brownie4.url], title: "Brownie", text: "Brownies intensos, embalados individualmente." },
  { imgs: [prodBolos], title: "Bolos", text: "Bolos artesanais para comemorações." },
  {
    imgs: [docinho1.url, docinho2.url, docinho3.url, docinho4.url],
    title: "Docinhos",
    text: "Brigadeiros e docinhos finos para coffee breaks.",
  },
  {
    imgs: [paodemel1.url, paodemel2.url, paodemel3.url, paodemel4.url],
    title: "Pão de Mel",
    text: "Recheado e banhado em chocolate nobre.",
  },
  {
    imgs: [bolo1.url, bolo2.url, bolo3.url, bolo4.url],
    title: "Bolos Personalizados",
    text: "Bolos exclusivos com a identidade visual da sua empresa.",
    span: "sm:col-span-2",
  },
  { imgs: [bento1.url, bento2.url, bento3.url, bento4.url], title: "Bentô Cakes", text: "Mini bolos individuais e encantadores." },
  { imgs: [prodBolachas], title: "Bolachas", text: "Biscoitos com pintura manual." },
  { imgs: [minibolo1.url, minibolo2.url, minibolo3.url, minibolo4.url], title: "Mini Bolos", text: "Porções individuais elegantes." },
];

const marcas = [
  { nome: "Pilot", src: logoPilot.url },
  { nome: "Lojas Mel", src: logoLojasMel.url },
  { nome: "Revelo", src: logoRevelo.url },
  { nome: "Pet Care Centro Veterinário 24h", src: logoPetCare.url },
  { nome: "Food to Save", src: logoFoodToSave.url },
  { nome: "Espírito Santo", src: logoEspiritoSanto.url },
  { nome: "Pluris", src: logoPluris.url },
  { nome: "Unicharm", src: logoUnicharm.url },
];

const depoimentos = [
  {
    nome: "Natália Esplendor",
    contexto: "Bentô cakes de mesversário",
    foto: fotoNatalia.url,
    texto:
      "Estou a 3 meses fazendo os pedidos do Bentô Class de mesversário do meu sobrinho e além dos bolinhos serem lindos o sabor é maravilhoso! 3 temas, 3 sabores e nenhum arrependimento, rs. O atendimento das meninas também é super rápido, entrega sempre certinha. Vamos assim até o primeiro aninho 🤩❤️🎂",
  },
  {
    nome: "Kethelin De Oliveira Perandre",
    contexto: "Bolo personalizado",
    texto:
      "A experiência já começa no atendimento: rápido, preciso e extremamente atencioso. Quando recebi o bolo, entendi por que são realmente uma referência no que fazem. Tudo é pensado com muito cuidado, desde a embalagem até cada detalhe da apresentação. O bolo, além de lindo, é simplesmente delicioso. Sério, está impecável! Estão de parabéns pelo trabalho e pelo carinho em cada etapa. Com toda certeza acompanharão os próximos 12 meses do meu pequeno. Os registros ficaram lindos!",
  },
  {
    nome: "Suellen Ferreira",
    contexto: "Cliente recorrente",
    texto:
      "Mais uma vez só tenho a agradecer a atenção, do pedido até a entrega. O capricho em atender nosso pedido e oferecer com atenção e pontualidade vale o preço pago. Nunca é só um bolo. Representam de verdade o nosso amor no pedido.",
  },
];





function WhatsButton({
  children,
  size = "md",
}: {
  children: React.ReactNode;
  size?: "md" | "sm";
}) {
  return (
    <a
      href={WHATS}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-primary font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02] ${
        size === "md" ? "px-7 py-4 text-base" : "px-5 py-2.5 text-sm"
      }`}
    >
      <MessageCircle className="size-5" aria-hidden />
      {children}
    </a>
  );
}

function ProductCarousel({ imgs, title }: { imgs: string[]; title: string }) {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((p) => (p + d + imgs.length) % imgs.length);

  return (
    <div className="group/car relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${i * 100}%)` }}
      >
        {imgs.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`${title} — foto ${idx + 1}`}
            width={800}
            height={500}
            loading="lazy"
            className="aspect-16/10 w-full shrink-0 object-cover"
          />
        ))}
      </div>

      {imgs.length > 1 && (
        <>
          <button
            type="button"
            aria-label={`Foto anterior de ${title}`}
            onClick={() => go(-1)}
            className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-cream/90 p-1.5 text-navy opacity-0 shadow transition-opacity group-hover/car:opacity-100 focus-visible:opacity-100"
          >
            <ChevronLeft className="size-4" aria-hidden />
          </button>
          <button
            type="button"
            aria-label={`Próxima foto de ${title}`}
            onClick={() => go(1)}
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-cream/90 p-1.5 text-navy opacity-0 shadow transition-opacity group-hover/car:opacity-100 focus-visible:opacity-100"
          >
            <ChevronRight className="size-4" aria-hidden />
          </button>
          <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
            {imgs.map((src, idx) => (
              <button
                key={src}
                type="button"
                aria-label={`Ver foto ${idx + 1} de ${title}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-4 bg-cream" : "w-1.5 bg-cream/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
          <a href="#topo" className="flex items-center">
            <img
              src={wordmark.url}
              alt="Xuxuzinho"
              className="h-9 w-auto object-contain sm:h-10"
            />
          </a>


          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#corporativo" className="transition-colors hover:text-plum">
              Corporativo
            </a>
            <a href="#cupcakes" className="transition-colors hover:text-plum">
              Cupcakes
            </a>
            <a href="#produtos" className="transition-colors hover:text-plum">
              Produtos
            </a>
            <a href="#marcas" className="transition-colors hover:text-plum">
              Marcas
            </a>
          </nav>
          <WhatsButton size="sm">Orçamento</WhatsButton>
        </div>
      </header>

      <main id="topo">
        {/* HERO — tags no topo + split editorial */}
        <section className="mx-auto max-w-6xl px-5 pt-8 pb-14">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <p className="section-eyebrow">Linha corporativa</p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] text-navy sm:text-5xl lg:text-6xl">
                Doces artesanais que carregam a essência da sua marca
              </h1>
              <p className="mt-6 max-w-md text-base text-muted-foreground">
                Elaborados com ingredientes de alta qualidade e decorados de acordo com a identidade
                visual do seu evento.
              </p>
              <div className="mt-8">
                <WhatsButton>Pedir orçamento no WhatsApp</WhatsButton>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Pedidos exclusivamente pelo WhatsApp.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src={heroCupcakeAsset.url}
                alt="Cupcake artesanal com cobertura de chocolate e caixas de brinde com laço vermelho"
                width={1200}
                height={900}
                className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[520px]"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 rounded-2xl bg-cream/95 px-5 py-3 backdrop-blur">
                <div className="flex items-center gap-3">
                  <img src={logoX.url} alt="Logotipo Xuxuzinho" className="h-8 w-8 object-contain" />
                  <div>
                    <p className="text-sm font-medium text-navy">Confeitaria artesanal</p>
                    <p className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="size-3" aria-hidden />
                      Tatuapé · São Paulo
                    </p>
                  </div>
                </div>
                <p className="font-display text-xl text-navy">100%</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {palavras.map((w) => (
              <span
                key={w}
                className="rounded-full bg-navy px-5 py-2 text-sm font-bold uppercase tracking-wider text-cream sm:text-base"
              >
                {w}
              </span>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["100%", "artesanal"],
              ["+500", "eventos atendidos"],
              ["SP", "Tatuapé"],
              ["WhatsApp", "Orçamento rápido"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-2xl bg-plum px-5 py-5">
                <p className="font-display text-2xl text-cream">{n}</p>
                <p className="mt-1 text-xs text-cream/80">{l}</p>
              </div>
            ))}
          </div>
        </section>


        {/* POR QUE ESCOLHER — quadrantes com divisórias */}
        <section id="corporativo" className="bg-secondary/60 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end">
              <div>
                <p className="section-eyebrow">Empresas e eventos</p>
                <h2 className="mt-4 text-4xl leading-tight font-semibold text-navy sm:text-5xl">
                  Por que escolher
                  <br />
                  a{" "}
                  <span className="inline-flex items-baseline whitespace-nowrap align-baseline">
                    <img
                      src={brandX.url}
                      alt=""
                      aria-hidden="true"
                      className="h-[0.95em] w-auto translate-y-[0.16em] select-none"
                    />
                    <span className="-ml-[0.22em] font-script font-normal text-navy">uxuzinho</span>
                  </span>
                  ?
                </h2>
              </div>
              <p className="text-muted-foreground md:pb-2">
                Do sabor à embalagem, cada detalhe é pensado para representar a essência da sua
                marca — com atendimento próximo do briefing à entrega.
              </p>
            </div>

            <div className="mt-14 border-t border-border">
              <div className="grid sm:grid-cols-2">
                {[
                  ...servicos,
                  {
                    icon: Sparkles,
                    title: "Produção 100% artesanal",
                    text: "Ingredientes selecionados, receitas próprias e acabamento feito à mão, doce por doce.",
                  },
                ].map(({ icon: Icon, title, text }, i) => (
                  <article
                    key={title}
                    className={`px-2 py-10 sm:px-8 ${i % 2 === 0 ? "sm:border-r sm:border-border" : ""} ${
                      i < 2 ? "border-b border-border" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="size-6 text-plum" aria-hidden />
                      <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
                    </div>
                    <h3 className="mt-6 font-display text-2xl text-navy">{title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{text}</p>
                  </article>
                ))}
              </div>
            </div>


            <div className="mt-12">
              <WhatsButton size="sm">Falar com a Xuxuzinho</WhatsButton>
            </div>



          </div>
        </section>

        {/* LINHA DE PRODUTOS — cupcakes + todos os demais produtos */}
        <section id="cupcakes" className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <p className="section-eyebrow">Nossa linha de produtos</p>
              <h2 className="mt-4 text-4xl leading-tight font-semibold text-navy sm:text-5xl">
                Tudo o que a{" "}
                <span className="inline-flex items-baseline whitespace-nowrap align-baseline">
                  <img
                    src={brandX.url}
                    alt=""
                    aria-hidden="true"
                    className="h-[0.95em] w-auto translate-y-[0.16em] select-none"
                  />
                  <span className="-ml-[0.22em] font-script font-normal text-navy">uxuzinho</span>
                </span>{" "}
                produz
              </h2>
            </div>
            <p className="text-muted-foreground md:pb-2">
              Todos os itens podem ser combinados em kits e caixas personalizadas para a sua
              empresa ou evento.
            </p>
          </div>

          <div id="produtos" className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {produtos.map((p) => (
              <article
                key={p.title}
                className="group overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-border/60 transition-shadow hover:shadow-md"
              >
                <ProductCarousel imgs={p.imgs} title={p.title} />
                <div className="px-6 py-5">
                  <h3 className="text-lg font-medium text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-plum/80">{p.text}</p>
                </div>
              </article>
            ))}
          </div>




          <div className="mt-8 flex justify-center">
            <WhatsButton size="sm">Consultar sabores e kits</WhatsButton>
          </div>
        </section>











        {/* MARCAS */}
        <section id="marcas" className="bg-secondary/60 py-16">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid gap-4 lg:grid-cols-3">
              <div className="rounded-3xl bg-card p-8">
                <p className="section-eyebrow">Parcerias</p>
                <h2 className="mt-4 text-3xl font-semibold text-navy">
                  Marcas que confiam em nós
                </h2>
                <p className="mt-5 text-sm text-muted-foreground">
                  Empresas que escolheram a Xuxuzinho para adoçar seus eventos, brindes e
                  celebrações internas.
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:col-span-2">
                {marcas.map((m) => (
                  <li
                    key={m.nome}
                    className="flex h-20 items-center justify-center rounded-2xl border border-border bg-card px-4"
                  >
                    <img
                      src={m.src}
                      alt={`Logotipo ${m.nome}`}
                      loading="lazy"
                      className="max-h-12 w-auto max-w-full object-contain"
                    />
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </section>

        {/* FEEDBACKS */}
        <section id="feedbacks" className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-eyebrow">Depoimentos</p>
              <h2 className="mt-4 max-w-md text-3xl font-semibold text-navy">
                O que dizem sobre a <span className="font-script font-normal">Xuxuzinho</span>
              </h2>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4">
              <p className="text-4xl font-semibold text-navy">4,9</p>
              <div>
                <div className="flex gap-0.5 text-plum">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="size-4 fill-current" aria-hidden />
                  ))}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  +1.000 avaliações no Google
                </p>
              </div>
            </div>
          </div>

          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {depoimentos.map((d) => (
              <li
                key={d.nome}
                className="flex flex-col rounded-3xl border border-border bg-card p-6"
              >
                {d.foto ? (
                  <img
                    src={d.foto}
                    alt={`Pedido de ${d.nome}`}
                    loading="lazy"
                    className="mb-4 aspect-16/10 w-full rounded-2xl object-cover"
                  />
                ) : null}
                <Quote className="size-6 text-plum" aria-hidden />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{d.texto}”
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <div className="flex gap-0.5 text-plum">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="size-3.5 fill-current" aria-hidden />
                    ))}
                  </div>
                  <p className="mt-2 text-sm font-medium text-navy">{d.nome}</p>
                  <p className="text-xs text-muted-foreground">{d.contexto}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-center">
            <a
              href="https://share.google/1phk8kyYl4jfbbDd5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-plum underline underline-offset-4"
            >
              Ver todas as avaliações no Google
            </a>
          </div>
        </section>



        {/* CTA FINAL */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="rounded-3xl bg-navy px-6 py-16 text-center text-cream">
            <h2 className="font-script text-4xl">Vamos adoçar sua próxima ação?</h2>
            <p className="mx-auto mt-5 max-w-xl text-sm opacity-80">
              Conte a ocasião, a quantidade e a data. Respondemos com sabores, embalagens e prazos.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsButton>Pedir orçamento</WhatsButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy py-8 text-center text-xs text-cream/70">
        <p className="font-script text-lg text-cream">Xuxuzinho</p>
        <p className="mt-2">Confeitaria artesanal · Tatuapé, São Paulo · Pedidos pelo WhatsApp</p>
      </footer>

      <div className="fixed right-5 bottom-5 z-50">
        <WhatsButton size="sm">Pedir orçamento</WhatsButton>
      </div>
    </div>
  );
}
