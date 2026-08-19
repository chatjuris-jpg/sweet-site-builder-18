import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Gift, PartyPopper, CalendarClock } from "lucide-react";

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
          "Mais de 30 sabores artesanais, embalagens com o seu logo e entrega no endereço combinado.",
      },
    ],
  }),
  component: Index,
});

const WHATS =
  "https://wa.me/5511971872937?text=Ol%C3%A1%2C%20Xuxuzinho!%20Gostaria%20de%20um%20or%C3%A7amento%20corporativo%20para%20minha%20empresa.";

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
  },
  { img: prodBolos, title: "Bolos", text: "Bolos artesanais para comemorações e confraternizações." },
  {
    img: prodBolosPersonalizados,
    title: "Bolos Personalizados",
    text: "Bolos exclusivos com a identidade visual da sua empresa, ideais para datas comemorativas.",
  },
  {
    img: prodBento,
    title: "Bentô Cakes",
    text: "Mini bolos no estilo bentô, individuais e encantadores, perfeitos para mimos e brindes.",
  },
  {
    img: prodBolachas,
    title: "Bolachas / Biscoitos",
    text: "Biscoitos decorados com pintura manual, personalizados para cada ocasião corporativa.",
  },
  { img: prodBrownie, title: "Brownie", text: "Brownies intensos, embalados individualmente para brindes." },
  { img: prodDocinhos, title: "Docinhos", text: "Brigadeiros e docinhos finos para coffee breaks e coquetéis." },
  { img: prodMinibolos, title: "Mini Bolos", text: "Porções individuais elegantes, perfeitas para presentear." },
  { img: prodPaodemel, title: "Pão de Mel", text: "Pão de mel recheado e banhado em chocolate nobre." },
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
        {/* HERO */}
        <section className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow">Linha corporativa</p>
            <h1 className="mt-5 text-4xl leading-[1.1] font-semibold text-navy sm:text-5xl lg:text-6xl">
              Surpreenda seus colaboradores e clientes com nossos{" "}
              <span className="font-script block py-2 text-plum">Cupcakes Corporativos</span>
              Personalizados!
            </h1>
            <p className="mt-6 max-w-lg text-base text-muted-foreground">
              Elaborados com ingredientes de alta qualidade e decorados de acordo com a identidade
              visual do seu evento.
            </p>

            <div className="mt-6">
              <div className="flex flex-wrap gap-3">
                {["CUPCAKE", "BROWNIE", "BOLOS", "DOCINHOS", "PÃO DE MEL", "Entre outros"].map(
                  (word, i) => (
                    <span
                      key={word}
                      className={`inline-block rounded-xl px-4 py-2 text-sm font-semibold tracking-wide ${
                        i === 5
                          ? "bg-plum/10 text-plum"
                          : "bg-navy/5 text-navy"
                      }`}
                    >
                      {word}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="mt-8">
              <WhatsButton>Pedir orçamento no WhatsApp</WhatsButton>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Pedidos feitos exclusivamente pelo WhatsApp.
            </p>

            <div className="mt-10 grid max-w-md grid-cols-2 gap-6 border-t border-border pt-8">
              {[
                ["100%", "artesanal"],
                ["+500", "eventos atendidos"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-2xl text-plum">{n}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -right-4 hidden size-40 rounded-full bg-accent md:block" />
            <img
              src={heroCupcakes}
              alt="Bandeja de cupcakes artesanais personalizados para evento corporativo"
              width={1200}
              height={900}
              className="relative w-full rounded-2xl object-cover shadow-2xl shadow-navy/20"
            />
            <div className="relative -mt-10 ml-2 inline-flex items-center gap-3 rounded-2xl bg-navy px-5 py-3 text-cream shadow-xl sm:ml-6">
              <span className="font-script text-xl">X</span>
              <span className="text-sm leading-tight">
                Confeitaria artesanal
                <span className="block text-xs opacity-70">Tatuapé · São Paulo</span>
              </span>
            </div>
          </div>
        </section>

        {/* CORPORATIVO */}
        <section id="corporativo" className="bg-secondary/60 py-20">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="section-eyebrow">Xuxuzinho para empresas</p>
              <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl">
                Presentes que sua marca assina
              </h2>
              <p className="mt-5 max-w-lg text-muted-foreground">
                Cuidamos de tudo: sabores, embalagem personalizada com o seu logo, cartão dedicado e
                entrega no endereço combinado. Você só escolhe a ocasião.
              </p>
              <div className="mt-10 space-y-6">
                {servicos.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-navy">{title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <img
              src={corporateGifting}
              alt="Caixa de presente corporativa com cupcakes personalizados"
              width={1000}
              height={1000}
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-xl shadow-navy/10"
            />
          </div>
        </section>

        {/* CUPCAKES */}
        <section id="cupcakes" className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Nosso carro-chefe</p>
            <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl">
              Cupcakes em dois tamanhos
            </h2>
            <p className="mt-5 text-muted-foreground">
              São mais de 30 sabores — de Cenoura a Ovomaltine — disponíveis nos tamanhos Standard e
              Mini. Compare abaixo e escolha o que combina com o seu evento.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
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
              <div
                key={c.name}
                className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs text-accent-foreground">
                  {c.size}
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-navy">{c.name}</h3>
                <p className="mt-1 text-sm text-plum">{c.bites}</p>
                <p className="mt-4 text-sm text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start gap-6 rounded-2xl bg-secondary/70 p-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm text-muted-foreground">
              Para pedidos a partir de 30 unidades há condições especiais. Valores, sabores
              disponíveis e prazos são confirmados no atendimento.
            </p>
            <WhatsButton size="sm">Consultar sabores e valores</WhatsButton>
          </div>
        </section>

        {/* PRODUTOS */}
        <section id="produtos" className="bg-secondary/60 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <p className="section-eyebrow">Linha completa</p>
              <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl">
                Além dos cupcakes
              </h2>
              <p className="mt-5 text-muted-foreground">
                Todos os itens podem ser combinados em kits e caixas personalizadas para a sua
                empresa.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {produtos.map((p) => (
                <article
                  key={p.title}
                  className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-transform hover:-translate-y-1"
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    width={600}
                    height={600}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-navy">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MARCAS */}
        <section id="marcas" className="mx-auto max-w-6xl px-5 py-20 text-center">
          <p className="section-eyebrow">Parcerias</p>
          <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl">
            Marcas que confiam em nós
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Empresas que escolheram a Xuxuzinho para adoçar seus eventos, brindes e celebrações
            internas.
          </p>
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {marcas.map((m) => (
              <li
                key={m}
                className="flex h-20 items-center justify-center rounded-xl border border-dashed border-border bg-card px-3 text-sm text-muted-foreground"
              >
                {m}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">
            Espaço reservado para os logos das marcas parceiras.
          </p>
        </section>

        {/* CTA FINAL */}
        <section className="bg-navy py-20 text-center text-cream">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="font-script text-4xl">Vamos adoçar sua próxima ação?</h2>
            <p className="mt-5 text-sm opacity-80">
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
