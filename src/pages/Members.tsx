import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Github } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Gabriel Silva",
    role: "Diretoria Geral",
    image: "/members/profile-picture-gabriel.jpeg",
    linkedin: "#",
    email: "gabriel@ufabcnext.com",
    github: "#"
  },
  {
    id: 2,
    name: "Igor Santos",
    role: "Coordenação de Produto",
    image: "/members/profile-picture-igor.jpeg",
    linkedin: "#",
    email: "igor@ufabcnext.com",
    github: "#"
  },
  {
    id: 3,
    name: "Joabe Costa",
    role: "Coordenação de Comunidade",
    image: "/members/profile-picture-joabe.jpeg",
    linkedin: "#",
    email: "joabe@ufabcnext.com",
    github: "#"
  },
  {
    id: 4,
    name: "Mateus Oliveira",
    role: "Coordenação Técnica",
    image: "/members/profile-picture-mateus.jpeg",
    linkedin: "#",
    email: "mateus@ufabcnext.com",
    github: "#"
  },
  {
    id: 5,
    name: "Nicolas Ferreira",
    role: "Coordenação de Comunicação",
    image: "/members/profile-picture-nicolas.jpeg",
    linkedin: "#",
    email: "nicolas@ufabcnext.com",
    github: "#"
  },
  {
    id: 6,
    name: "Pedro Henrique",
    role: "Coordenação de Mentorias",
    image: "/members/profile-pedro.png",
    linkedin: "#",
    email: "pedro@ufabcnext.com",
    github: "#"
  }
];

const formerMembers = [
  {
    id: 1,
    name: "Ana Carolina Lima",
    role: "Ex-Coordenadora de Produto",
    period: "2022-2023",
    image: "/members/profile-picture-ana.jpeg",
    linkedin: "#",
    email: "ana@alumni.ufabcnext.com"
  },
  {
    id: 2,
    name: "Rafael Souza",
    role: "Ex-Diretor Geral",
    period: "2021-2022",
    image: "/members/profile-picture-rafael.jpeg", 
    linkedin: "#",
    email: "rafael@alumni.ufabcnext.com"
  },
  {
    id: 3,
    name: "Marina Santos",
    role: "Ex-Coordenadora de Comunidade",
    period: "2022-2023",
    image: "/members/profile-picture-marina.jpeg",
    linkedin: "#",
    email: "marina@alumni.ufabcnext.com"
  }
];

export default function Members() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">UN</span>
            </div>
            <span className="font-semibold text-foreground">UFABC Next</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Início</a>
            <a href="/landing" className="text-muted-foreground hover:text-foreground transition-colors">Sobre</a>
            <a href="/members" className="text-foreground font-medium">Equipe</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Conheça nossa equipe
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Somos estudantes da UFABC dedicados a construir uma comunidade acadêmica 
            mais colaborativa e engajada. Cada membro traz expertise única para 
            transformar a experiência universitária.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <Card key={member.id} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Avatar className="w-20 h-20 mx-auto mb-4 ring-2 ring-border group-hover:ring-primary transition-all duration-300">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="bg-muted text-muted-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
        </div>

        {/* Former Members Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ex-membros
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Reconhecemos e agradecemos a todos que contribuíram para construir 
              o UFABC Next ao longo de sua jornada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {formerMembers.map((member) => (
              <Card key={member.id} className="group hover:shadow-lg transition-all duration-300 border-border bg-card opacity-90">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <Avatar className="w-20 h-20 mx-auto mb-4 ring-2 ring-border group-hover:ring-muted-foreground transition-all duration-300">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-muted text-muted-foreground">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="font-semibold text-lg text-card-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-xs mb-4">
                    {member.period}
                  </p>
                  <div className="flex justify-center space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                      <a href={`mailto:${member.email}`}>
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
                <h3 className="font-semibold text-lg text-card-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {member.role}
                </p>
                <div className="flex justify-center space-x-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                    <a href={`mailto:${member.email}`}>
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Section */}
        <div className="text-center mt-20 py-16 bg-muted/50 rounded-lg">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Quer fazer parte da equipe?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Estamos sempre procurando estudantes talentosos e engajados para 
            se juntarem à nossa missão de transformar a experiência universitária na UFABC.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Entre em contato
          </Button>
        </div>
      </main>
    </div>
  );
}