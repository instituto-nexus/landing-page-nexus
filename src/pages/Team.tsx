import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const teamMembers = [
  {
    id: 1,
    name: "Gabriel Monteiro",
    role: "Presidente e Fundador",
    image: "/members/gabriel.jpeg",
    linkedin: "https://www.linkedin.com/in/gabriel-monteiro-rocha7/",
  },
  {
    id: 2,
    name: "Joabe Varjão",
    role: "Vice-Presidente e Cofundador",
    image: "/members/joabe.jpeg",
    linkedin: "https://www.linkedin.com/in/joabesv/",
  },
  {
    id: 3,
    name: "Nicolas Greco",
    role: "Desenvolvedor",
    image: "/members/nicolas.jpeg",
    linkedin: "https://www.linkedin.com/in/nicolas-greco-160a5b258/",
  },
  {
    id: 4,
    name: "Mateus Braga",
    role: "Especialista Front-end",
    image: "/members/mateus.png",
    linkedin: "#",
  },
  {
    id: 5,
    name: "Igor Santos",
    role: "Especialista Back-end",
    image: "/members/igor.jpeg",
    linkedin: "#",
  },
  {
    id: 6,
    name: "Pedro Rodrigues",
    role: "Especialista DevOps",
    image: "/members/pedro.jpg",
    linkedin: "#",
  },
  {
    id: 7,
    name: "Rafael Evangelista",
    role: "Desenvolvedor",
    image: "/members/rafael.jpg",
    linkedin: "#",
  },
];

const formerMembers = [
  {
    id: 1,
    name: "Felipe Silva",
    nickname: "Felipe",
    location: "São Paulo, Brasil",
    image: "/members/profile-picture-gabriel.jpeg",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Felipe Tiozo",
    nickname: "Tiozo",
    location: "Santo André, Brasil",
    image: "/members/profile-picture-joabe.jpeg",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Felipe Augusto",
    nickname: "Augusto",
    location: "São Paulo, Brasil",
    image: "/members/profile-picture-nicolas.jpeg",
    linkedin: "#",
  },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <main className="container mx-auto px-6 py-10 md:py-20 max-w-7xl flex flex-col items-center justify-center">
        {/* Hero Section */}
        <img src="/nexus-logo-gradient.svg" alt="Nexus" className="w-14 h-14 md:w-32 md:h-32 mb-6" />
        <div className="mb-20 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-center">
            Pessoas por trás
            <br />
            do{" "}
            <b
              style={{
                background:
                  "linear-gradient(to right,rgb(146, 198, 247), #0a2e4f)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Nexus
            </b>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8 text-center">
            Somos um time de <b className="text-primary">{teamMembers.length} pessoas</b> que acreditam em
            construir projetos que inspiram e transformam a experiência
            universitária.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-border hover:bg-muted text-white"
            style={{ background: "linear-gradient(to right,rgb(146, 198, 247), #0a2e4f)" }}
          >
            Adicione seu nome a essa lista
          </Button>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-12 mb-32">
          {teamMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* Former Members Section */}
        <div className="border-t border-border pt-20">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ex-Membros
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl text-center">
              Agradecimento especial aos ex-membros que fizeram contribuições
              valiosas ao projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-12">
            {formerMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function MemberCard({ member }: { member: any }) {
  return (
    <a
      key={member.id}
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center justify-center space-y-3 hover:scale-105 transition-all duration-300 cursor-pointer"
    >
      <Avatar className="w-48 h-48">
        <AvatarImage src={member.image} alt={member.name} />
        <AvatarFallback className="bg-muted text-muted-foreground text-lg font-semibold">
          {member.name.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-semibold text-foreground text-lg leading-tight mb-1">
          {member.name}
        </h3>
        <p className="text-muted-foreground text-sm">{member.role}</p>
      </div>
    </a>
  );
}
