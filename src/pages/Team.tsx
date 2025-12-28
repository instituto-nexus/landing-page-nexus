import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handleMemberClick = (member: any) => {
    setSelectedMember(member);
    setIsDialogOpen(true);
  };

  const teamMembers = [
    {
      id: 1,
      name: "Gabriel Monteiro",
      role: "Presidente e Fundador",
      image: "/members/gabriel.jpeg",
      linkedin: "https://www.linkedin.com/in/gabriel-monteiro-rocha7/",
      bio: "Fundador e CEO do Instituto Nexus. Apaixonado por construir ferramentas que capacitam estudantes e lidera o time na criação de soluções inovadoras para a comunidade acadêmica da UFABC.",
    },
    {
      id: 2,
      name: "Joabe Varjão",
      role: "Vice-Presidente e Cofundador",
      image: "/members/joabe.jpeg",
      linkedin: "https://www.linkedin.com/in/joabesv/",
      bio: "Cofundador e CTO do Instituto Nexus. Especialista em construir soluções robustas e escaláveis no backend. Adora resolver problemas complexos e garantir a estabilidade da infraestrutura.",
    },
    {
      id: 3,
      name: "Nicolas Greco",
      role: "Diretor de Comunidade e Tecnologia",
      image: "/members/nicolas.jpeg",
      linkedin: "https://www.linkedin.com/in/nicolas-greco-160a5b258/",
      bio: "Diretor de Tecnologia do Nexus. Lidera as iniciativas técnicas e garante que nossa infraestrutura funcione de forma suave e confiável. É apaixonado por automação e boas práticas de desenvolvimento.",
    },
    {
      id: 4,
      name: "Mateus Braga",
      role: "Especialista Front-end",
      image: "/members/mateus.png",
      linkedin: "#",
      bio: "Especialista em desenvolvimento frontend. Focado em criar interfaces modernas, intuitivas e acessíveis que proporcionam a melhor experiência possível para os usuários das plataformas Nexus.",
    },
    {
      id: 5,
      name: "Igor Santos",
      role: "Especialista Back-end",
      image: "/members/igor.jpeg",
      linkedin: "#",
      bio: "Especialista em desenvolvimento backend. Trabalha na construção de APIs robustas e escaláveis, garantindo performance e segurança para todas as aplicações do Instituto Nexus.",
    },
    {
      id: 6,
      name: "Pedro Rodrigues",
      role: "Especialista DevOps",
      image: "/members/pedro.jpg",
      linkedin: "#",
      bio: "Especialista em DevOps e infraestrutura. Responsável por manter nossos serviços no ar, otimizar pipelines de deployment e garantir a confiabilidade de toda a infraestrutura em nuvem.",
    },
    {
      id: 7,
      name: "Rafael Evangelista",
      role: "Engenheiro de Software",
      image: "/members/rafael.jpg",
      linkedin: "#",
      bio: "Desenvolvedor full-stack versátil. Contribui em diversos projetos do Instituto Nexus, sempre buscando entregar código de qualidade e soluções elegantes para problemas complexos.",
    },
    {
      id: 8,
      name: "Pedro Tomaz",
      role: "Analista de estratégia",
      image: "/members/PTomaz.png",
      linkedin: "https://www.linkedin.com/in/pedro-tomaz-martins/",
      bio: "Desenvolvedor full-stack versátil. Contribui em diversos projetos do Instituto Nexus, sempre buscando entregar código de qualidade e soluções elegantes para problemas complexos.",
    },
    {
      id: 9,
      name: "Carlos Alencar",
      role: "Engenheiro de Software",
      image: "/members/carlos-profile-pic.jpeg",
      linkedin: "https://www.linkedin.com/in/alencarlima/",
      bio: "Desenvolvedor full-stack versátil. Contribui em diversos projetos do Instituto Nexus, sempre buscando entregar código de qualidade e soluções elegantes para problemas complexos.",
    },
  ];

  const specialMembers = [
    {
      id: 1,
      name: "Renan Zago",
      role: "Consultor Técnico Frontend",
      image: "/specs/renan-zago.png",
      linkedin: "https://www.linkedin.com/in/renanzagolorijola/",
      bio: "Consultor técnico com experiência em performance, escalabilidade e melhores práticas do desenvolvimento frontend. Durante a graduação, aplicou seu projeto de conclusão de curso com uma abordagem de refatoração orientada a Microfrontends no projeto UFABC next. Sua trajetória conta com passagens pelo Banco Itaú e pela gigante nacional Boticário",
    },
    {
      id: 2,
      name: "Brian Andreossi",
      role: "Consultor Técnico Backend",
      image: "/specs/brian.png",
      linkedin: "https://www.linkedin.com/in/brian-andreossi/",
      bio: "Consultor técnico especializado em arquitetura de software e sistemas de alta volumetria. Durante a graduação foi monitor de disciplinas de Redes e Algoritimos, além de desenvolver uma pesquisa a respeito das heurísticas computacionais baseadas em grafos para identificação e redução de conflitos de interesse em bancas de concursos. Sua experiência profissional conta com passagens pelo Banco Itaú e Mercado Livre",
    },
  ]

  const formerMembersByYear = [
    {
      year: "2019",
      members: [
        {
          id: "2019-1",
          name: "Felipe Silva",
          period: "2019",
          image: "/former-members/felipe-silva.png",
          linkedin: "https://www.linkedin.com/in/feosilva/",
          side: "left",
          bio: "Founder team do projeto UFABC next. Empreendedor e cofundador da BeConfident. Como CPO, ajudou a transformar a visão em produto, liderando desenvolvimento de soluções educacionais que impactam milhares de alunos globalmente. Apaixonado por tecnologia, educação e experiências que democratizam oportunidades de aprendizado para todos."
        },
        {
          id: "2019-2",
          name: "Felipe Tiozo",
          period: "2019",
          image: "/former-members/felipe-tiozo.png",
          linkedin: "https://www.linkedin.com/in/felipetiozo/",
          side: "right",
          bio: "Founder team do projeto UFABC next. Empreendedor e engenheiro de software, Co-Founder e CTO da BeConfident, plataforma de aprendizado de inglês baseada em IA com atuação global. Experiência em liderança técnica, produtos digitais e edtech, com passagem por startups e empresas de tecnologia.Apaixonado por construir soluções escaláveis, centradas no usuário e com impacto real em educação e tecnologia."
        },
        {
          id: "2019-3",
          name: "Felipe Augusto",
          period: "2019",
          image: "/former-members/felipe-augusto.png",
          linkedin: "https://www.linkedin.com/in/felipeaugustodev/",
          side: "left",
          bio: "Founder team do projeto UFABC next. Software engineer na QA Wolf construindos a nova era dos testes de software. Apaixonado por criar, projetar e implementar novas ideias, aprendiz ao longo da vida, leitor assíduo e entusiasta de TypeScript."
        },
      ]
    },
    {
      year: "2024",
      members: [
        
        {
          id: "2024-1",
          name: "Vinicius Santana",
          period: "2024",
          image: "/former-members/vinicius-santana.png",
          linkedin: "https://www.linkedin.com/in/vinicius-santana-santos/",
          side: "right",
          bio: "Atuou como engenheiro de software no projeto UFABC next, com foco em soluções backend. Atualmente, capacita decisões mais inteligentes com dados sobre profissionais, empresas e tendências de mercado na empresa internacionalMixRank"
        },
      ]
    },
    {
      year: "2025",
      members: [
        
        {
          id: "2025-1",
          name: "Felipe Sckurzenski",
          period: "2024",
          image: "",
          linkedin: "",
          side: "right",
          bio: "Aulões next"
        },
      ]
    },
    {
      year: "2025",
      members: [
        
        {
          id: 5,
          name: "Vitória Polato",
          period: "2024",
          image: "",
          linkedin: "",
          side: "right",
          bio: "Aulões next"
        },
      ]
    }
  ];

  // Flatten all former members into a single array
  const allFormerMembers = formerMembersByYear.flatMap((yearGroup) =>
    yearGroup.members.map((member) => ({ ...member, year: yearGroup.year }))
  );

  // Calculate pagination
  const totalPages = Math.ceil(allFormerMembers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMembers = allFormerMembers.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Scroll to the former members section
    const section = document.getElementById('former-members-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <main className="container mx-auto px-6 py-10 md:py-10 max-w-8xl flex flex-col items-center justify-center">
        {/* Hero Section */}

        <div className="mb-20 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-center">
            Pessoas por trás
            <br />
            do{" "}
            <span
              className="bg-gradient-to-br from-[#0a2e4f] to-primary bg-clip-text text-transparent"
            >
              Nexus
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8 text-center">
            Somos um time de <strong>{teamMembers.length} pessoas</strong> que acreditam em construir projetos que inspiram e transformam a experiência universitária.
          </p>
          <Button
            size="lg"
            className="text-white hover:text-white hover:scale-105 transactions-all duration-300 bg-gradient-to-br from-[#0a2e4f] to-primary border-0"
          >
            Adicione seu nome a essa lista
          </Button>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <MemberCard key={member.id} member={member} onClick={() => handleMemberClick(member)} />
          ))}
        </div>

        {/* Special Members Section */}
        <div className="border-t border-border pt-20">
          <div className="flex flex-col items-center justify-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Consultores
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {specialMembers.map((member) => (
            <MemberCard key={member.id} member={member} onClick={() => handleMemberClick(member)} />
          ))}
        </div>

        {/* Former Members Section */}
        <div id="former-members-section" className="mt-25 mb-20 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Ex-Membros
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Que deixaram seu legado na missão de construir soluções para a comunidade acadêmica
            </p>
          </div>

          {/* Former Members Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {currentMembers.map((member) => (
              <FormerMemberCard
                key={member.id}
                member={member}
                year={member.year}
                onClick={() => handleMemberClick(member)}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="hover:bg-blue-50 hover:text-blue-600"
              >
                Anterior
              </Button>
              
              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => goToPage(page)}
                    className={
                      currentPage === page
                        ? "bg-gradient-to-br from-[#0a2e4f] to-primary text-white"
                        : "hover:bg-blue-50 hover:text-blue-600"
                    }
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="hover:bg-blue-50 hover:text-blue-600"
              >
                Próxima
              </Button>
            </div>
          )}
        </div>

        {/* Member Profile Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="sr-only">Perfil do Membro</DialogTitle>
            </DialogHeader>
            {selectedMember && (
              <div className="flex flex-col items-center text-center space-y-6 py-4">
                {/* Avatar */}
                <Avatar className="w-32 h-32 border-4 border-border shadow-lg">
                  <AvatarImage
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-muted text-muted-foreground text-2xl font-bold">
                    {selectedMember.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                {/* Name & Role */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    {selectedMember.name}
                  </h3>
                  <p className="text-base font-medium text-muted-foreground">
                    {selectedMember.role || `Ex-membro • ${selectedMember.year}`}
                  </p>
                </div>

                {/* Bio */}
                <div className="w-full">
                  <p className="text-sm text-muted-foreground leading-relaxed text-left px-2">
                    {selectedMember.bio || "Contribuiu para o crescimento do Instituto Nexus e deixou um legado importante para a comunidade acadêmica da UFABC."}
                  </p>
                </div>

                {/* LinkedIn Button */}
                {selectedMember.linkedin && selectedMember.linkedin !== "#" && (
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      className="w-full bg-[#0077b5] hover:bg-[#006399] text-white gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      Ver perfil no LinkedIn
                    </Button>
                  </a>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>

      <Footer />
    </div>
  );
}

function MemberCard({ member, onClick }: { member: any; onClick: () => void }) {
  return (
    <div
      className="group rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300 p-6 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="overflow-hidden rounded-xl">
            <Avatar className="w-20 h-20">
              <AvatarImage src={member.image} alt={member.name} className="object-cover" />
              <AvatarFallback className="bg-muted text-muted-foreground text-base font-semibold">
                {member.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header with Name and Social */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-foreground text-lg leading-tight mb-1 truncate">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-sm font-medium">
                {member.role}
              </p>
            </div>

            {/* Social Icon */}
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 p-2 hover:bg-blue-50 rounded-lg transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-5 h-5 text-muted-foreground hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          {/* Description/Bio */}
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {member.bio || `Membro dedicado da equipe Nexus, contribuindo com expertise em ${member.role.toLowerCase()} para construir soluções inovadoras para a comunidade acadêmica.`}
          </p>
        </div>
      </div>
    </div>
  );
}

function FormerMemberCard({ member, year, onClick }: { member: any; year: string; onClick: () => void }) {
  return (
    <div
      className="group rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300 p-6 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="overflow-hidden rounded-xl">
            <Avatar className="w-20 h-20">
              <AvatarImage src={member.image} alt={member.name} className="object-cover" />
              <AvatarFallback className="bg-muted text-muted-foreground text-base font-semibold">
                {member.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header with Name and Social */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-foreground text-lg leading-tight mb-1 truncate">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-sm font-medium">
                Ex-membro • {year}
              </p>
            </div>

            {/* Social Icon */}
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 p-2 hover:bg-blue-50 rounded-lg transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-5 h-5 text-muted-foreground hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          {/* Description/Bio */}
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {member.bio || "Contribuiu para o crescimento do Instituto Nexus e deixou um legado importante para a comunidade acadêmica da UFABC."}
          </p>
        </div>
      </div>
    </div>
  );
}
