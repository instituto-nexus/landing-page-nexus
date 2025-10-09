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
        <img
          src="/nexus-logo-gradient.svg"
          alt="Nexus"
          className="w-14 h-14 md:w-32 md:h-24 mb-6"
        />
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
            variant="outline"
            size="lg"
            className="text-white hover:scale-105 transactions-all duration-300 "
            style={{
              background:
                "linear-gradient(to right,rgb(146, 198, 247), #0a2e4f)",
            }}
          >
            {t("team.addYourName")}
          </Button>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
          {specialMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* Former Members Timeline Section */}
        <div className="mt-32 mb-20 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {t("team.formerMembers")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("team.formerMembersDescription")}
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {formerMembersByYear.map((yearGroup) => (
                <div key={yearGroup.year} className="relative">
                  <div className="flex items-center justify-center mb-8">
                    <div 
                      className="text-primary-foreground px-6 py-2 rounded-full font-bold text-lg z-10"
                      style={{
                        background: "linear-gradient(to right,rgb(146, 198, 247), #0a2e4f)",
                      }}
                    >
                      {yearGroup.year}
                    </div>
                  </div>
                  <div className="space-y-8">
                    {yearGroup.members.map((member) => (
                      <div 
                        key={member.id} 
                        className={`grid md:grid-cols-2 gap-16 relative ${
                          member.side === "right" ? "md:grid-flow-dense" : ""
                        }`}
                      >
                        {member.side === "left" ? (
                          <>
                            <div className="flex items-center justify-end relative">
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center justify-center space-y-3 hover:scale-105 transition-all duration-300 cursor-pointer"
                              >
                                <div className="overflow-hidden rounded-full">
                                  <Avatar className="w-32 h-32">
                                    <AvatarImage src={member.image} alt={member.name} className="object-cover scale-110" />
                                    <AvatarFallback className="bg-muted text-muted-foreground">
                                      {member.name.slice(0, 2).toUpperCase()}
                                    </AvatarFallback>
                                  </Avatar>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                  <h3 className="font-semibold text-foreground text-base leading-tight">
                                    {member.name}
                                  </h3>
                                </div>
                              </a>
                              {/* Connection line from image to center */}
                              <div className="hidden md:block absolute right-0 top-16 h-0.5 bg-border" style={{ width: 'calc(4rem - 1px)', transform: 'translateX(calc(100% + 1px))' }}></div>
                            </div>
                            <div className="hidden md:block"></div>
                          </>
                        ) : (
                          <>
                            <div className="hidden md:block"></div>
                            <div className="flex items-center justify-start relative">
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center justify-center space-y-3 hover:scale-105 transition-all duration-300 cursor-pointer"
                              >
                                <div className="overflow-hidden rounded-full">
                                  <Avatar className="w-32 h-32">
                                    <AvatarImage src={member.image} alt={member.name} className="object-cover scale-110" />
                                    <AvatarFallback className="bg-muted text-muted-foreground">
                                      {member.name.slice(0, 2).toUpperCase()}
                                    </AvatarFallback>
                                  </Avatar>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                  <h3 className="font-semibold text-foreground text-base leading-tight">
                                    {member.name}
                                  </h3>
                                </div>
                              </a>
                              {/* Connection line from image to center */}
                              <div className="hidden md:block absolute left-0 top-16 h-0.5 bg-border" style={{ width: 'calc(4rem - 1px)', transform: 'translateX(calc(-100% - 1px))' }}></div>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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
      <div className="overflow-hidden rounded-full">
      <Avatar className="w-48 h-48">
          <AvatarImage src={member.image} alt={member.name} className="object-cover scale-105" />
        <AvatarFallback className="bg-muted text-muted-foreground text-lg font-semibold">
          {member.name.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-semibold text-foreground text-lg leading-tight mb-1">
          {member.name}
        </h3>
        <p className="text-muted-foreground text-sm">{member.role}</p>
      </div>
    </a>
  );
}
