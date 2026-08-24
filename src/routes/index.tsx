import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Gift, PartyPopper, CalendarClock, MapPin } from "lucide-react";

import heroCupcakes from "@/assets/hero-cupcakes.jpg";
import corporateGifting from "@/assets/corporate-gifting.jpg";
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
    text: "Mesas de doces, coffee breaks e kits individuais para treinamentos, lançamentos e datas comemorativas.",
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
    text: "Nosso carro-chefe: mais de 30 sabores, em dois tamanhos, com topos personalizáveis.",
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
          <a href="#topo" className="font-script text-2xl text-navy">
            Xuxuzinho
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
          <div className="flex flex-wrap items-center justify-center gap-3">
            {palavras.map((w) => (
              <span
                key={w}
                className="rounded-full bg-navy px-6 py-2.5 text-base font-bold uppercase tracking-wider text-cream sm:text-lg"
              >
                {w}
              </span>
            ))}
          </div>

          <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
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
                src={heroCupcakes}
                alt="Bandeja de cupcakes artesanais personalizados para evento corporativo"
                width={1200}
                height={900}
                className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[520px]"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 rounded-2xl bg-cream/95 px-5 py-3 backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="font-script text-2xl text-plum">X</span>
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

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
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


        {/* CORPORATIVO — bento */}
        <section id="corporativo" className="mx-auto max-w-6xl px-5 py-14">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Xuxuzinho para empresas</p>
            <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl">
              Presentes que sua marca assina
            </h2>
            <p className="mt-5 text-muted-foreground">
              Cuidamos de tudo: sabores, embalagem personalizada com o seu logo, cartão dedicado e
              entrega no endereço combinado.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="overflow-hidden rounded-3xl lg:row-span-3">
              <img
                src={corporateGifting}
                alt="Caixa de presente corporativa com cupcakes personalizados"
                width={1000}
                height={1000}
                loading="lazy"
                className="h-64 w-full object-cover lg:h-full"
              />
            </div>
            {servicos.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-lg lg:col-span-2"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-medium text-navy">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CUPCAKES — bento */}
        <section id="cupcakes" className="bg-secondary/60 py-16">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <p className="section-eyebrow">Nosso carro-chefe</p>
              <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl">
                Cupcakes em dois tamanhos
              </h2>
              <p className="mt-5 text-muted-foreground">
                De Cenoura a Ovomaltine, disponíveis nos tamanhos Standard e Mini.
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-4">
              {[
                {
                  size: "6 cm",
                  name: "Standard",
                  bites: "5 mordidas",
                  text: "O tamanho clássico, ideal para mesas de doces e presentes individuais.",
                },
                {
                  size: "4,5 cm",
                  name: "Mini",
                  bites: "2 mordidas",
                  text: "Perfeito para coffee breaks, kits com variedade de sabores e coquetéis.",
                },
              ].map((c) => (
                <div key={c.name} className="rounded-3xl border border-border bg-card p-8">
                  <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs text-accent-foreground">
                    {c.size}
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold text-navy">{c.name}</h3>
                  <p className="mt-1 text-sm text-plum">{c.bites}</p>
                  <p className="mt-4 text-sm text-muted-foreground">{c.text}</p>
                </div>
              ))}
              <div className="flex flex-col justify-between gap-6 rounded-3xl bg-navy p-8 text-cream lg:col-span-2">
                <p className="text-sm opacity-85">
                  Para pedidos a partir de 30 unidades há condições especiais. Valores, sabores
                  disponíveis e prazos são confirmados no atendimento.
                </p>
                <div>
                  <WhatsButton size="sm">Consultar sabores e valores</WhatsButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUTOS — bento grid */}
        <section id="produtos" className="mx-auto max-w-6xl px-5 py-16">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Linha completa</p>
            <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl">Além dos cupcakes</h2>
            <p className="mt-5 text-muted-foreground">
              Todos os itens podem ser combinados em kits e caixas personalizadas para a sua
              empresa.
            </p>
          </div>

          <div className="mt-10 grid auto-rows-[220px] gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {produtos.map((p) => (
              <article
                key={p.title}
                className={`group relative overflow-hidden rounded-3xl border border-border bg-card ${p.span ?? ""}`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-navy/80 p-5 text-cream backdrop-blur-sm">
                  <h3 className="text-base font-medium">{p.title}</h3>
                  <p className="mt-1 text-xs opacity-80">{p.text}</p>
                </div>
              </article>
            ))}
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
