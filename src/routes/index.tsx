import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Gift, PartyPopper, CalendarClock, MapPin, Sparkles } from "lucide-react";

import logoX from "@/assets/logo-x.png.asset.json";
import wordmark from "@/assets/wordmark-xuxuzinho-v2.png.asset.json";
import brandX from "@/assets/x-logo.png.asset.json";

import heroCupcakeAsset from "@/assets/hero-cupcake.jpg.asset.json";
import prodCupcakes from "@/assets/prod-cupcakes.jpg";
import prodBolos from "@/assets/prod-bolos.jpg";
import prodBolosPersonalizados from "@/assets/prod-bolos-personalizados.jpg";
import prodBento from "@/assets/prod-bento.jpg";
import prodBolachas from "@/assets/prod-bolachas.jpg";
import prodBrownie from "@/assets/prod-brownie.jpg";
import prodDocinhos from "@/assets/prod-docinhos.jpg";
import prodMinibolos from "@/assets/prod-minibolos.jpg";
import prodPaodemel from "@/assets/prod-paodemel.jpg";

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
    img: prodCupcakes,
    title: "Cupcakes",
    text: "Mais de 30 sabores, em dois tamanhos, com topos personalizáveis.",
    span: "sm:col-span-2 sm:row-span-2",
  },
  { img: prodBrownie, title: "Brownie", text: "Brownies intensos, embalados individualmente." },
  { img: prodBolos, title: "Bolos", text: "Bolos artesanais para comemorações." },
  {
    img: prodDocinhos,
    title: "Docinhos",
    text: "Brigadeiros e docinhos finos para coffee breaks.",
  },
  {
    img: prodPaodemel,
    title: "Pão de Mel",
    text: "Recheado e banhado em chocolate nobre.",
  },
  {
    img: prodBolosPersonalizados,
    title: "Bolos Personalizados",
    text: "Bolos exclusivos com a identidade visual da sua empresa.",
    span: "sm:col-span-2",
  },
  { img: prodBento, title: "Bentô Cakes", text: "Mini bolos individuais e encantadores." },
  { img: prodBolachas, title: "Bolachas", text: "Biscoitos com pintura manual." },
  { img: prodMinibolos, title: "Mini Bolos", text: "Porções individuais elegantes." },
];

const marcas = [
  "Grupo Alvorada",
  "Vertex Consultoria",
  "Banco Meridian",
  "Clínica Vitalis",
  "Nova Engenharia",
  "Instituto Aurora",
  "Lumina Tech",
  "Rede Bem Viver",
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

          <div id="produtos" className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {produtos.map((p) => (
              <article
                key={p.title}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-3 transition-colors hover:border-plum/40"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  width={400}
                  height={400}
                  loading="lazy"
                  className="h-20 w-20 shrink-0 rounded-xl object-cover sm:h-24 sm:w-24"
                />
                <div className="min-w-0">
                  <h3 className="font-display text-lg leading-tight text-navy">{p.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.text}</p>
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
                    key={m}
                    className="flex h-20 items-center justify-center rounded-2xl border border-dashed border-border bg-card px-3 text-center text-sm text-muted-foreground"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>
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
