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

  const specialMembers = [
    {
      id: 1,
      name: "Renan Zago",
      role: "",
      image: "/specs/renan-zago.png",
      linkedin: "https://www.linkedin.com/in/renanzagolorijola/",
    },
    {
      id: 2,
      name: "Brian Andreossi",
      role: "",
      image: "/specs/brian.png",
      linkedin: "https://www.linkedin.com/in/brian-andreossi/",
    },
  ]

  const formerMembersByYear = [
    {
      year: "2024",
      members: [
    {
      id: 1,
      name: "Felipe Silva",
          period: "2024",
      image: "/former-members/felipe-silva.png",
      linkedin: "https://www.linkedin.com/in/feosilva/",
          side: "left"
    },
    {
      id: 2,
      name: "Felipe Tiozo",
          period: "2024",
      image: "/former-members/felipe-tiozo.png",
      linkedin: "https://www.linkedin.com/in/felipetiozo/",
          side: "right"
        },
      ]
    },
    {
      year: "2023",
      members: [
    {
      id: 3,
      name: "Felipe Augusto",
          period: "2023",
      image: "/former-members/felipe-augusto.png",
      linkedin: "https://www.linkedin.com/in/felipeaugustodev/",
          side: "left"
    },
    {
      id: 4,
      name: "Vinicius Santana",
          period: "2023",
      image: "/former-members/vinicius-santana.png",
      linkedin: "https://www.linkedin.com/in/vinicius-santana-santos/",
          side: "right"
        },
      ]
    },
    {
      year: "2022",
      members: [
    {
      id: 5,
      name: "Pedro Birais",
          period: "2022",
      image: "/former-members/pedro-birais.png",
      linkedin: "https://www.linkedin.com/in/phbirais/",
          side: "left"
    },
    {
      id: 6,
      name: "Lucas Grippa",
          period: "2022",
      image: "/former-members/lucas-grippa.png",
      linkedin: "https://www.linkedin.com/in/lucas-grippa-5269366a/",
          side: "right"
    },
    {
      id: 7,
      name: "Rafael Telles",
          period: "2022",
      image: "/former-members/rafael-telles.png",
      linkedin: "https://www.linkedin.com/in/rafael-telles/",
          side: "left"
        },
      ]
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <main className="container mx-auto px-6 py-10 md:py-10 max-w-8xl flex flex-col items-center justify-center">
        {/* Hero Section */}
       
        <div className="mb-20 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-center">
            {t("team.titlePart1")}
            <br />
            {t("team.titlePart2")}{" "}
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
            dangerouslySetInnerHTML={{
              __html: t("team.description", { count: teamMembers.length }),
            }}
          />
          <Button
            size="lg"
            className="text-white hover:text-white hover:scale-105 transactions-all duration-300 bg-gradient-to-br from-[#0a2e4f] to-primary border-0"
          >
            {t("team.addYourName")}
          </Button>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* Special Members Section */}
        <div className="border-t border-border pt-20">
          <div className="flex flex-col items-center justify-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("team.consulteers")}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {specialMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* Former Members Section */}
        <div className="mt-25 mb-20 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {t("team.formerMembers")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("team.formerMembersDescription")}
            </p>
          </div>

          {/* Former Members Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {formerMembersByYear.flatMap((yearGroup) =>
              yearGroup.members.map((member) => (
                <FormerMemberCard key={member.id} member={member} year={yearGroup.year} />
              ))
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function MemberCard({ member }: { member: any }) {
  return (
    <div className="group rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300 p-6">
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
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
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

function FormerMemberCard({ member, year }: { member: any; year: string }) {
  return (
    <div className="group rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300 p-6">
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
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

          {/* Description/Bio */}
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            Contribuiu para o crescimento do Instituto Nexus e deixou um legado importante para a comunidade acadêmica da UFABC.
          </p>
        </div>
      </div>
    </div>
  );
}
