import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BrandName } from "@/components/BrandName";
import { MessageCircle, Gift, PartyPopper, CalendarClock, MapPin, Sparkles, ChevronLeft, ChevronRight, Star, Quote, FileText, Download } from "lucide-react";

import catalogoPdf from "@/assets/catalogo-xuxuzinho.pdf.asset.json";
import logoX from "@/assets/logo-x.webp.asset.json";
import wordmark from "@/assets/wordmark-xuxuzinho-v2.webp.asset.json";
import brandX from "@/assets/x-logo.webp.asset.json";
import fotoNatalia from "@/assets/depoimento-natalia.webp.asset.json";
import fotoKethelin1 from "@/assets/depoimento-kethelin-18.webp.asset.json";
import fotoKethelin2 from "@/assets/depoimento-kethelin-19.webp.asset.json";
import fotoKethelin3 from "@/assets/depoimento-kethelin-20.webp.asset.json";
import fotoSuellen1 from "@/assets/depoimento-suellen-21.webp.asset.json";
import fotoSuellen2 from "@/assets/depoimento-suellen-22.webp.asset.json";
import fotoSuellen3 from "@/assets/depoimento-suellen-23.webp.asset.json";

import logoPilot from "@/assets/pilot.webp.asset.json";
import logoLojasMel from "@/assets/lojasmel.webp.asset.json";
import logoRevelo from "@/assets/revelo.webp.asset.json";
import logoPetCare from "@/assets/petcare.webp.asset.json";
import logoFoodToSave from "@/assets/foodtosave.webp.asset.json";
import logoEspiritoSanto from "@/assets/espiritosanto.webp.asset.json";
import logoPluris from "@/assets/pluris.webp.asset.json";
import logoUnicharm from "@/assets/unicharm.webp.asset.json";


import heroCupcakeAsset from "@/assets/hero-cupcake.webp.asset.json";

import outros1 from "@/assets/outros-1.webp.asset.json";
import outros2 from "@/assets/outros-2.webp.asset.json";
import outros3 from "@/assets/outros-3.webp.asset.json";
import outros4 from "@/assets/outros-4.webp.asset.json";
import bento1 from "@/assets/bento-1.webp.asset.json";
import bento2 from "@/assets/bento-2.webp.asset.json";
import bento3 from "@/assets/bento-3.webp.asset.json";
import bento4 from "@/assets/bento-4.webp.asset.json";

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
  { imgs: [minibolo1.url, minibolo2.url, minibolo3.url, minibolo4.url], title: "Mini Bolos", text: "Porções individuais elegantes." },
  {
    imgs: [outros1.url, outros2.url, outros3.url, outros4.url],
    title: "Outros Produtos",
    text: "Kits, cestas, drageados e canecas personalizadas para a sua marca.",
  },
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

const faqs = [
  {
    pergunta: "Posso personalizar meu pedido?",
    resposta:
      "Sim! Personalizamos seu pedido de acordo com a sua ideia, ocasião ou identidade visual da empresa.",
  },
  {
    pergunta: "Qual é o prazo de produção?",
    resposta:
      "Para pedidos de até 50 unidades, recomendamos pelo menos 3 dias de antecedência. Para quantidades maiores, consulte nossa equipe para verificarmos o melhor prazo.",
  },
  {
    pergunta: "Como faço o pagamento?",
    resposta:
      "Para empresas, trabalhamos com pagamento via PIX ou boleto bancário. Consulte nossa equipe para mais informações.",
  },
  {
    pergunta: "Vocês fazem entrega?",
    resposta:
      "Sim, atendemos algumas regiões de São Paulo. Consulte nossa equipe para verificar a disponibilidade e o valor da entrega para o seu endereço.",
  },
  {
    pergunta: "Qual é a validade dos produtos?",
    resposta:
      "A validade varia de acordo com o produto. Pães de mel e brownies, por exemplo, podem durar até 15 dias, enquanto bolos e docinhos possuem validade menor. Consulte-nos para saber a validade do item escolhido.",
  },
  {
    pergunta: "Existe quantidade mínima para pedidos?",
    resposta:
      "Não temos quantidade mínima. Para pedidos menores, as opções de personalização podem variar de acordo com o produto e a quantidade escolhida.",
  },
  {
    pergunta: "Vocês fazem pedidos para empresas e eventos?",
    resposta:
      "Sim! Produzimos encomendas para empresas, eventos, ações promocionais, confraternizações e presentes corporativos.",
  },
  {
    pergunta: "Vocês atendem pedidos em grandes quantidades?",
    resposta:
      "Sim. Atendemos desde pequenas encomendas até pedidos corporativos em maiores quantidades. Para grandes volumes, recomendamos entrar em contato com antecedência.",
  },
  {
    pergunta: "Posso solicitar um orçamento personalizado?",
    resposta:
      "Claro! Envie o produto desejado, quantidade, personalização e data de entrega. Nossa equipe prepara um orçamento de acordo com a sua necessidade.",
  },
];


const depoimentos: { nome: string; contexto: string; texto: string; fotos?: string[] }[] = [
  {
    nome: "Natália Esplendor",
    contexto: "Bentô cakes de mesversário",
    fotos: [fotoNatalia.url],
    texto:
      "Estou a 3 meses fazendo os pedidos do Bentô Class de mesversário do meu sobrinho e além dos bolinhos serem lindos o sabor é maravilhoso! 3 temas, 3 sabores e nenhum arrependimento, rs. O atendimento das meninas também é super rápido, entrega sempre certinha. Vamos assim até o primeiro aninho 🤩❤️🎂",
  },
  {
    nome: "Kethelin De Oliveira Perandre",
    contexto: "Bolo personalizado",
    fotos: [fotoKethelin1.url, fotoKethelin2.url, fotoKethelin3.url],
    texto:
      "A experiência já começa no atendimento: rápido, preciso e extremamente atencioso. Quando recebi o bolo, entendi por que são realmente uma referência no que fazem. Tudo é pensado com muito cuidado, desde a embalagem até cada detalhe da apresentação. O bolo, além de lindo, é simplesmente delicioso. Sério, está impecável! Estão de parabéns pelo trabalho e pelo carinho em cada etapa. Com toda certeza acompanharão os próximos 12 meses do meu pequeno. Os registros ficaram lindos!",
  },
  {
    nome: "Suellen Ferreira",
    contexto: "Cliente recorrente",
    fotos: [fotoSuellen1.url, fotoSuellen2.url, fotoSuellen3.url],
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

function ProductCarousel({ imgs, title, aspect = "aspect-16/10" }: { imgs: string[]; title: string; aspect?: string }) {
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
            decoding="async"
            className={`${aspect} w-full shrink-0 object-cover`}
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
              width={900}
              height={270}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-9 w-auto object-contain sm:h-10"
            />
          </a>


          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#corporativo" className="transition-colors hover:text-plum">
              Corporativo
            </a>
            <a href="#produtos" className="transition-colors hover:text-plum">
              Produtos
            </a>
            <a href="#marcas" className="transition-colors hover:text-plum">
              Parcerias
            </a>
            <a href="#feedbacks" className="transition-colors hover:text-plum">
              Depoimentos
            </a>
            <a href="#faq" className="transition-colors hover:text-plum">
              Dúvidas
            </a>
            <a href="#contato" className="transition-colors hover:text-plum">
              Contato
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
                height={1600}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[520px]"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 rounded-2xl bg-cream/95 px-5 py-3 backdrop-blur">
                <div className="flex items-center gap-3">
                  <img src={logoX.url} alt="Logotipo Xuxuzinho" width={211} height={202} loading="lazy" decoding="async" className="h-8 w-8 object-contain" />
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
                      loading="lazy"
                    decoding="async"
                    className="h-[0.95em] w-auto translate-y-[0.16em] select-none"
                    />
                    <BrandName withoutX className="-ml-[0.22em] font-normal text-navy" />
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
              <WhatsButton size="sm">Falar com a <BrandName className="text-base" /></WhatsButton>
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
                    loading="lazy"
                    decoding="async"
                    className="h-[0.95em] w-auto translate-y-[0.16em] select-none"
                  />
                  <BrandName withoutX className="-ml-[0.22em] font-normal text-navy" />
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




          {/* CATÁLOGO EM PDF */}
          <div className="mt-12 overflow-hidden rounded-3xl bg-plum px-8 py-10 text-cream sm:px-12">
            <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cream/15">
                  <FileText className="h-7 w-7" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-medium tracking-[0.2em] uppercase text-cream/70">
                    Catálogo completo
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
                    Acesse nosso catálogo abaixo e veja nossa linha completa
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-cream/80">
                    Sabores, opções de personalização, kits e formatos de embalagem em um único
                    arquivo PDF, pronto para compartilhar com o seu time.
                  </p>
                </div>
              </div>
              <a
                href={catalogoPdf.url}
                download="catalogo-xuxuzinho.pdf"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-plum transition-opacity hover:opacity-90"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Baixar catálogo (PDF)
              </a>
            </div>
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
                  Empresas que escolheram a <BrandName className="text-base" /> para adoçar seus eventos, brindes e
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
                      decoding="async"
                      width={600}
                      height={200}
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
                O que dizem sobre a{" "}
                <span className="inline-flex items-baseline whitespace-nowrap align-baseline">
                  <img
                    src={brandX.url}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="h-[0.95em] w-auto translate-y-[0.16em] select-none"
                  />
                  <BrandName withoutX className="-ml-[0.22em] font-normal text-navy" />
                </span>
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
                {d.fotos?.length ? (
                  <div className="mb-4 overflow-hidden rounded-2xl">
                    <ProductCarousel imgs={d.fotos} title={`Pedido de ${d.nome}`} aspect="aspect-4/3" />
                  </div>
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




        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-5 py-16">
          <p className="section-eyebrow">Perguntas frequentes</p>
          <h2 className="mt-4 text-3xl font-semibold text-navy">
            Dúvidas antes de encomendar
          </h2>

          <div className="mt-10 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.pergunta} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-navy">
                  {f.pergunta}
                  <ChevronRight
                    className="size-4 shrink-0 text-plum transition-transform group-open:rotate-90"
                    aria-hidden
                  />
                </summary>
                <p className="mt-3 pr-8 text-sm leading-relaxed text-muted-foreground">
                  {f.resposta}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contato" className="mx-auto max-w-6xl px-5 py-16">
          <div className="rounded-3xl bg-navy px-6 py-16 text-center text-cream">
            <h2 className="text-4xl">
              Vamos adoçar sua próxima ação?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm opacity-80">
              Quer um orçamento da linha de produtos da{" "}
              <BrandName className="text-base" />, um evento especial ou uma
              ocasião diferente? Conte a data, a quantidade e a ideia — respondemos com sabores,
              embalagens e prazos.
            </p>

            <ul className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
              {[
                "Linha de produtos",
                "Eventos especiais",
                "Ocasiões personalizadas",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-cream/20 bg-cream/5 px-4 py-3 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-center">
              <a
                href="https://wa.me/5511950858045?text=Ol%C3%A1%2C%20Xuxuzinho!%20Gostaria%20de%20um%20or%C3%A7amento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-cream px-8 py-4 text-sm font-medium text-navy transition-opacity hover:opacity-90"
              >
                <MessageCircle className="size-4" aria-hidden />
                Pedir orçamento
              </a>
            </div>
            <p className="mt-4 text-xs opacity-70">WhatsApp (11) 95085-8045</p>
          </div>
        </section>
      </main>

      <footer className="bg-navy py-10 text-center text-xs text-cream/70">
        <p className="text-lg text-cream"><BrandName /></p>
        <p className="mt-2">Confeitaria artesanal · Pedidos pelo WhatsApp (11) 95085-8045</p>

        <address className="mt-5 not-italic">
          <span className="inline-flex items-center gap-2 text-cream/80">
            <MapPin className="size-3.5" aria-hidden />
            R. Manuel de Atouguia, 14 – Tatuapé, São Paulo/SP · CEP 03313-020
          </span>
        </address>

        <a
          href="https://www.google.com/maps/search/?api=1&query=R.+Manuel+de+Atouguia%2C+14+-+Tatuap%C3%A9%2C+S%C3%A3o+Paulo+-+SP%2C+03313-020"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block underline underline-offset-4 hover:text-cream"
        >
          Ver no Google Maps
        </a>
      </footer>

      <div className="fixed right-5 bottom-5 z-50">
        <WhatsButton size="sm">Pedir orçamento</WhatsButton>
      </div>
    </div>
  );
}
