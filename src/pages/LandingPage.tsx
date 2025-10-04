
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Membros da governança
const teamMembers = [
  {
    id: 1,
    name: "Gabriel Monteiro",
    description: "Fundador do nexus, coordenador do projeto ufabc next e nas horas vagas engenheiro de software.",
    role: "Presidente e Fundador",
    image: "/members/profile-picture-gabriel.jpeg",
    linkedin: "https://www.linkedin.com/in/gabriel-monteiro-rocha7/"
  },
  {
    id: 2,
    name: "Joabe Varjão",
    description: "Cofundador do nexus, principal enginner do projeto ufabc next, fundador do projeto ufabc parser, apaixonado por softwares",
    role: "Vice-Presidente e cofundador",
    image: "/members/joabe-profile.jpeg",
    linkedin: "https://www.linkedin.com/in/joabesv/s"
  },
  {
    id: 3,
    name: "Nicolas Greco",
    role: "Gerente geral e desenvolvedor",
    image: "/members/profile-picture-nicolas.jpeg",
    linkedin: "https://www.linkedin.com/in/nicolas-greco-160a5b258/"
  },
  {
    id: 4,
    name: "Mateus Braga",
    role: "Especialista front-end",
    description: "Líder de iniciativas open source e front-end developer apaixonado por criar experiências digitais incríveis.",
    image: "/members/foto-mateus.jpg",
    linkedin: "https://www.linkedin.com/in/mateusbrg/"
  },
  {
    id: 5,
    name: "Igor Santos",
    role: "Especilista back-end",
    image: "/members/profile-picture-igor.jpeg",
    linkedin: "https://www.linkedin.com/in/igor-santos-ufabc/"
  },
  {
    id: 6,
    name: "Pedro Rodrigues",
    role: "Especilista devops",
    image: "/members/profile-pedro.png",
    linkedin: "https://www.linkedin.com/in/pedroprg/"
  },
  {
    id: 7,
    name: "Rafael Guerra",
    role: "Engenheiro de Software",
    image: "/members/rafa-profile-pic.jpeg",
    linkedin: "https://www.linkedin.com/in/rafaelguerra/"
  },
  {
    id: 8,
    name: "Carlos Alencar",
    role: "Engenheiro de Software",
    image: "/members/carlos-profile-pic.jpeg",
    linkedin: "https://www.linkedin.com/in/alencarlima/"
  }
];

const formerMembers = [
  {
    id: 1,
    name: "Felipe Silva",
    role: "Diretoria Geral",
    image: "/members/profile-picture-gabriel.jpeg",
    linkedin: "https://linkedin.com/in/anasilva"
  },
  {
    id: 2,
    name: "Felipe Tiozo",
    role: "Produto",
    image: "/members/profile-picture-joabe.jpeg",
    linkedin: "https://linkedin.com/in/pedrosantos"
  },
  {
    id: 3,
    name: "Felipe Augusto",
    role: "Comunidade",
    image: "/members/profile-picture-nicolas.jpeg",
    linkedin: "https://linkedin.com/in/marianacosta"
  }
];

// Pilares do projeto
const pillars = [
  {
    id: 1,
    title: "Ufabc next",
    description: "Construimos uma plataforma de avaliação de professores, disciplinas e cursos baseada na experiência dos alunoss",
    icon: "./members/logo_next_2.png"
  },
  {
    id: 2,
    title: "Ufabc parser",
    description: "Disponibilizamos em formato de Api todas as informações relevantes para o desenvolvimento universitário da UFABC",
    icon: "./members/parser-logo.webp"
  },
  {
    id: 3,
    title: "Ufabc next Wpp Bot",
    description: "Criamos um bot no WhatsApp para facilitar o acesso dos estudantes a informações acadêmicas importantes e manter a comunidade acadêmica conectada",
    icon: "./members/wpp-bot-project.webp"
  },
  {
    id: 4,
    title: "Ufabc next Wpp Bot AI",
    description: "Criamos um bot no WhatsApp para facilitar o acesso dos estudantes a informações acadêmicas importantes e manter a comunidade acadêmica conectada",
    icon: "./members/wpp-bot-project.webp"
  },
  {
    id: 5,
    title: "Aulões next",
    description: "criamos auloes para conectar veterano e calouros",
    icon: "./members/logo-aulao.png"
  }
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full bg-white shadow-sm border-b py-4 px-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-primary font-bold text-2xl">
              <span className="flex items-center">
                <svg 
                  className="w-7 h-7 text-primary mr-1" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M21.4 5.6L12 0 2.6 5.6V18.4L12 24l9.4-5.6V5.6z" />
                  <path 
                    fill="#fff" 
                    d="M12 15V8l-5 3v7l5 3 5-3v-7l-5-3z" 
                  />
                </svg>
                Nexus
              </span>
            </Link>
          </div>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="#sobre">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Sobre
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
               <NavigationMenuItem>
                <Link to="#projetos">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Projetos
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="#mentorias">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Mentorias
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
          
              <NavigationMenuItem>
                <Link to="#comunidade">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Comunidade
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="#galeria">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Galeria
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="#contato">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contato
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
             
              {/* <NavigationMenuItem>
                <Link to="https://ufabcnext.com/">
                  <Button variant="outline" className="ml-2">
                    Acessar Plataforma
                  </Button>
                </Link>
              </NavigationMenuItem> */}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-[#0a2e4f] text-white py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">O ecossistema de inovação e transformação</h1>
              <h2 className="text-2xl mb-6">Iniciativa acadêmica para potencializar sua trajetória universitária</h2>
              <p className="text-lg mb-8 text-gray-300">
                Uma plataforma feita por e para estudantes da Universidade Federal do ABC, 
                promovendo mentorias, conteúdos acadêmicos e apoio comunitário ao longo da graduação.
              </p>
              <div style={{ paddingLeft: "11.5rem" }} className="max-w-7xl mx-auto px-6  flex gap-4">
                
                <Button variant="default" size="lg" className="">
                  Seja Voluntário
                </Button>
              </div>
            </div>
            <div className=" flex justify-center">
              <img 
              style={{  height: "520px" }}
                src="/members/team-photo.jpeg" 
                alt="Estudantes UFABC Next" 
                className="rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Sobre o UFABC Next</h2>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-gray-700 mb-8">
                O UFABC Next nasceu da necessidade de criar uma comunidade de apoio e desenvolvimento
                acadêmico dentro da Universidade Federal do ABC, onde estudantes pudessem compartilhar
                conhecimentos, experiências e se preparar melhor para os desafios da graduação.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-primary">Nossa Missão</h3>
                <p className="text-gray-700">
                  Facilitar o percurso acadêmico dos estudantes da UFABC através de uma rede de apoio,
                  compartilhamento de conhecimento e ferramentas de desenvolvimento.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-primary">Nossa Visão</h3>
                <p className="text-gray-700">
                  Ser reconhecida como a principal iniciativa de apoio ao desenvolvimento acadêmico
                  na UFABC, tornando-se referência para outras universidades.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-primary">Nosso Impacto</h3>
                <p className="text-gray-700">
                  Mais de 2.000 estudantes impactados, centenas de mentorias realizadas e uma 
                  comunidade ativa que transforma experiências acadêmicas.
                </p>
              </div>
            </div>
          </div>
        </section>
         {/* Impact Numbers Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">Nosso Impacto</h2>
            <p className="text-lg text-white/90 text-center max-w-3xl mx-auto mb-16">
              Números que mostram o alcance e impacto do UFABC Next na comunidade acadêmica
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">15k+</div>
                <p className="text-white/90 text-lg">Pessoas Impactadas</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">3+</div>
                <p className="text-white/90 text-lg">Projetos Desenvolvidos</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">5+</div>
                <p className="text-white/90 text-lg">Aulões Realizados</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">100+</div>
                <p className="text-white/90 text-lg">Membros Ativos</p>
              </div>
            </div>
          </div>
        </section>


           {/* Pilares Section */}
        <section id="iniciativas" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4 text-center">Projetos</h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
              O UFABC Next atua em diversas frentes para garantir uma experiência universitária mais completa e enriquecedora.
            </p>
            
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {pillars.map((pillar) => (
                  <CarouselItem key={pillar.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="bg-gray-50 rounded-lg p-6 shadow-sm text-center h-full">
                      <div className="text-4xl mb-4">
                        <img 
                          src={pillar.icon}
                          height={270}
                          alt={pillar.title} 
                          className="w-full h-64 object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-primary">{pillar.title}</h3>
                      <p className="text-gray-700">{pillar.description}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </section>

        {/* Governance Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4 text-center">Governança Nexus</h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
              A estrutura organizacional do UFABC Next assegura planejamento, execução e impacto contínuo. 
              Cada área é liderada por estudantes com alta responsabilidade e engajamento.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex">
                  <div className="w-1/3">
                    <img 
                    style={{  height: "131px" }}
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-gray-600">{member.role}</p>
                    </div>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:text-primary/80 inline-flex items-center"
                    >
                      <Linkedin size={18} />
                      <span className="ml-1">LinkedIn</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



       

        {/* Join Us Section */}
        <section id="comunidade" className="py-20 bg-[#0a2e4f] text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">Junte-se a nós</h2>
            <p className="text-lg mb-8">
              Faça parte dessa comunidade e contribua para o desenvolvimento acadêmico
              dos estudantes da UFABC, seja como mentor, voluntário ou parceiro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-edu-green hover:bg-edu-light-green text-white">
                    Quero ser mentor
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Cadastro de Mentor</DialogTitle>
                    <DialogDescription>
                      Preencha os dados abaixo para se cadastrar como mentor no UFABC Next.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Nome completo</Label>
                      <Input
                        id="name"
                        placeholder="Digite seu nome"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu.email@exemplo.com"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-primary text-white hover:bg-primary/90">
                      Enviar cadastro
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-white text-primary hover:bg-gray-100">
                    Quero ser voluntário
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Cadastro de Voluntário</DialogTitle>
                    <DialogDescription>
                      Preencha os dados abaixo para se cadastrar como voluntário no UFABC Next.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name-vol">Nome completo</Label>
                      <Input
                        id="name-vol"
                        placeholder="Digite seu nome"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email-vol">Email</Label>
                      <Input
                        id="email-vol"
                        type="email"
                        placeholder="seu.email@exemplo.com"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone-vol">Telefone</Label>
                      <Input
                        id="phone-vol"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-primary text-white hover:bg-primary/90">
                      Enviar cadastro
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <svg 
                  className="w-7 h-7 text-white mr-1" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M21.4 5.6L12 0 2.6 5.6V18.4L12 24l9.4-5.6V5.6z" />
                  <path 
                    fill="#0a2e4f" 
                    d="M12 15V8l-5 3v7l5 3 5-3v-7l-5-3z" 
                  />
                </svg>
                <span className="text-xl font-bold">
                  Nexus
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Uma iniciativa acadêmica para potencializar a experiência universitária na UFABC.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><Link to="#sobre" className="text-gray-400 hover:text-white">Sobre</Link></li>
                <li><Link to="#iniciativas" className="text-gray-400 hover:text-white">Iniciativas</Link></li>
                <li><Link to="#comunidade" className="text-gray-400 hover:text-white">Comunidade</Link></li>
                <li><Link to="#mentorias" className="text-gray-400 hover:text-white">Mentorias</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white">Plataforma</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <p className="text-gray-400 mb-2">contato@nexus.com.br</p>
              <p className="text-gray-400 mb-4">Santo André, SP - Brasil</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2025 Nexus. Todos os direitos reservados.</p>
            <div className="mt-4 md:mt-0">
              <Link to="#" className="text-gray-400 hover:text-white mr-6">Política de Privacidade</Link>
              <Link to="#" className="text-gray-400 hover:text-white">Termos de Uso</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
