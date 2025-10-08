import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

export default function Team() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: 1,
      name: "Gabriel Monteiro",
      role: t('team.roles.president'),
      image: "/members/gabriel.jpeg",
      linkedin: "https://www.linkedin.com/in/gabriel-monteiro-rocha7/",
    },
    {
      id: 2,
      name: "Joabe Varjão",
      role: t('team.roles.vicePresident'),
      image: "/members/joabe.jpeg",
      linkedin: "https://www.linkedin.com/in/joabesv/",
    },
    {
      id: 3,
      name: "Nicolas Greco",
      role: t('team.roles.developer'),
      image: "/members/nicolas.jpeg",
      linkedin: "https://www.linkedin.com/in/nicolas-greco-160a5b258/",
    },
    {
      id: 4,
      name: "Mateus Braga",
      role: t('team.roles.frontendSpecialist'),
      image: "/members/mateus.png",
      linkedin: "#",
    },
    {
      id: 5,
      name: "Igor Santos",
      role: t('team.roles.backendSpecialist'),
      image: "/members/igor.jpeg",
      linkedin: "#",
    },
    {
      id: 6,
      name: "Pedro Rodrigues",
      role: t('team.roles.devopsSpecialist'),
      image: "/members/pedro.jpg",
      linkedin: "#",
    },
    {
      id: 7,
      name: "Rafael Evangelista",
      role: t('team.roles.developer'),
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
  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <main className="container mx-auto px-6 py-10 md:py-10 max-w-8xl flex flex-col items-center justify-center">
        {/* Hero Section */}
        <img src="/nexus-logo-gradient.svg" alt="Nexus" className="w-14 h-14 md:w-32 md:h-24 mb-6" />
        <div className="mb-20 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-center">
            {t('team.titlePart1')}
            <br />
            {t('team.titlePart2')}{" "}
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
          <p 
            className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8 text-center"
            dangerouslySetInnerHTML={{ __html: t('team.description', { count: teamMembers.length }) }}
          />
          <Button
            variant="outline"
            size="lg"
            className="text-white hover:scale-105 transactions-all duration-300 "
            style={{ background: "linear-gradient(to right,rgb(146, 198, 247), #0a2e4f)" }}
          >
            {t('team.addYourName')}
          </Button>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
          {teamMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* Former Members Section */}
        <div className="border-t border-border pt-20">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('team.formerMembers')}
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl text-center">
              {t('team.formerMembersDescription')}
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
