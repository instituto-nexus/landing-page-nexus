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

        {/* Former Members Timeline Section */}
        <div className="mt-32 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Ex-Membros
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Agradecemos a todos que fizeram parte da jornada do UFABC Next e 
              contribuíram para construir o que somos hoje.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 2024 */}
              <div className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold text-lg z-10">
                    2024
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-border bg-card hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-16 h-16 ring-2 ring-border">
                          <AvatarImage src="/members/profile-picture-mateus.jpeg" alt="Lucas Martins" />
                          <AvatarFallback className="bg-muted text-muted-foreground">LM</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-muted-foreground text-xs mb-1">Janeiro - Junho 2024</p>
                          <h3 className="font-semibold text-lg text-card-foreground mb-1">
                            Lucas Martins
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3">
                            Ex-Coordenador de Tecnologia
                          </p>
                          <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                              <Linkedin className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="hidden md:block"></div>
                </div>
              </div>

              {/* 2023 */}
              <div className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold text-lg z-10">
                    2023
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="hidden md:block"></div>
                  <Card className="border-border bg-card hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-16 h-16 ring-2 ring-border">
                          <AvatarImage src="/members/profile-picture-nicolas.jpeg" alt="Ana Paula Silva" />
                          <AvatarFallback className="bg-muted text-muted-foreground">AS</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-muted-foreground text-xs mb-1">2023</p>
                          <h3 className="font-semibold text-lg text-card-foreground mb-1">
                            Ana Paula Silva
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3">
                            Ex-Coordenadora de Comunicação
                          </p>
                          <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                              <Linkedin className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* 2022 */}
              <div className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold text-lg z-10">
                    2022
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-border bg-card hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-16 h-16 ring-2 ring-border">
                          <AvatarImage src="/members/profile-picture-igor.jpeg" alt="Rafael Costa" />
                          <AvatarFallback className="bg-muted text-muted-foreground">RC</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-muted-foreground text-xs mb-1">2022</p>
                          <h3 className="font-semibold text-lg text-card-foreground mb-1">
                            Rafael Costa
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3">
                            Ex-Coordenador de Produto
                          </p>
                          <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                              <Linkedin className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>
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