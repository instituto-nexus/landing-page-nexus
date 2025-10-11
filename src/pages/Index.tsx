import NavBar from "@/components/NavBar";
import SubmitDialog from "@/components/SubmitDialog";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t('projects.items.next.title'),
      description: t('projects.items.next.description'),
      icon: "./projects/next-logo.png",
    },
    {
      id: 2,
      title: t('projects.items.parser.title'),
      description: t('projects.items.parser.description'),
      icon: "./projects/parser-logo.webp",
    },
    {
      id: 3,
      title: t('projects.items.whatsappBot.title'),
      description: t('projects.items.whatsappBot.description'),
      icon: "./projects/whatsapp-bot.webp",
    },
    {
      id: 4,
      title: t('projects.items.whatsappBotAI.title'),
      description: t('projects.items.whatsappBotAI.description'),
      icon: "./projects/whatsapp-bot.webp",
    },
    {
      id: 5,
      title: t('projects.items.auloes.title'),
      description: t('projects.items.auloes.description'),
      icon: "./projects/aulao-logo.png",
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <main>
        {/* Hero Section */}
        <section className="bg-[#0a2e4f] text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6">
            {/* Mobile Layout - Stacked */}
            <div className="flex flex-col gap-8 md:hidden">
              {/* Text */}
              <div className="space-y-4">
                <h1 className="text-3xl font-bold leading-tight">
                  {t('hero.title')}
                </h1>
                <p className="text-base text-white/80 leading-relaxed">
                  {t('hero.description')}
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center hover:scale-105 transition-all duration-300">
                <img
                  src="/members/time.jpeg"
                  alt={t('hero.altImage')}
                  className="rounded-2xl shadow-2xl w-full max-h-[400px] object-cover"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <SubmitDialog
                  type="volunteer"
                  buttonText={t('hero.volunteerButton')}
                  buttonClassName="bg-white text-black hover:bg-white/70 font-semibold w-full sm:w-auto"
                />
                <Button
                  size="lg"
                  className="text-white hover:bg-white/10 bg-transparent w-full sm:w-auto"
                  onClick={() => {
                    window.scrollTo({
                      top: document.getElementById("comunidade")?.offsetTop,
                      behavior: "smooth",
                    });
                  }}
                >
                  {t('hero.learnMoreButton')}
                </Button>
              </div>
            </div>

            {/* Desktop/Tablet Layout - Side by Side */}
            <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
              {/* Text & Buttons */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  {t('hero.title')}
                </h1>
                <p className="text-lg text-white/80 leading-relaxed">
                  {t('hero.description')}
                </p>
                <div className="flex gap-4 pt-4">
                  <SubmitDialog
                    type="volunteer"
                    buttonText={t('hero.volunteerButton')}
                    buttonClassName="bg-white text-black hover:bg-white/70 font-semibold"
                  />
                  <Button
                    size="lg"
                    className="text-white hover:bg-white/10 bg-transparent"
                  >
                    {t('hero.learnMoreButton')}
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="flex justify-center hover:scale-105 transition-all duration-300">
                <img
                  src="/members/time.jpeg"
                  alt={t('hero.altImage')}
                  className="rounded-2xl shadow-2xl w-full max-h-[520px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-foreground">
              {t('about.title')}
            </h2>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t('about.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {t('about.mission.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.mission.content')}
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {t('about.vision.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.vision.content')}
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {t('about.impact.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.impact.content')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section id="projetos" className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
              {t('projects.title')}
            </h2>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              {t('projects.description')}
            </p>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {projects.map((project) => (
                  <CarouselItem
                    key={project.id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <ProjectItem project={project} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hover:bg-primary/10 transition-all duration-300 left-2" />
              <CarouselNext className="hover:bg-primary/10 transition-all duration-300 right-2" />
            </Carousel>
          </div>
        </section>

        {/* Governança */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
              {t('governance.title')}
            </h2>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              {t('governance.description')}
            </p>

            <Button
              className="transition-all duration-300 p-8 hover:scale-105"
              style={{
                background:
                  "linear-gradient(to right,rgb(146, 198, 247), #0a2e4f)",
              }}
            >
              <a href="/team" className="text-white text-xl font-medium">
                {t('governance.button')}
              </a>
            </Button>
          </div>
        </section>

        {/* Impact Numbers Section */}
        <section className="py-24 bg-gradient-to-br from-[#0a2e4f] to-primary">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">
              {t('impactNumbers.title')}
            </h2>
            <p className="text-xl text-white/90 text-center max-w-3xl mx-auto mb-20">
              {t('impactNumbers.description')}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  10k+
                </div>
                <p className="text-white/90 text-lg">{t('impactNumbers.peopleImpacted')}</p>
              </div>

              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  5+
                </div>
                <p className="text-white/90 text-lg">{t('impactNumbers.projectsDeveloped')}</p>
              </div>

              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  5+
                </div>
                <p className="text-white/90 text-lg">{t('impactNumbers.classesHeld')}</p>
              </div>

              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                10+
                </div>
                <p className="text-white/90 text-lg">{t('impactNumbers.activeMembers')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comunidade */}
        <section
          id="comunidade"
          className="py-20 bg-[#0a2e4f] text-white text-center"
        >
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">{t('joinUs.title')}</h2>
            <p className="text-lg mb-8">
              {t('joinUs.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SubmitDialog
                type="mentor"
                buttonText={t('joinUs.mentorButton')}
                buttonClassName="bg-transparent text-white hover:bg-white/10 font-semibold"
              />

              <SubmitDialog
                type="volunteer"
                buttonText={t('joinUs.volunteerButton')}
                buttonClassName="bg-white text-black hover:bg-white/70 font-semibold"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;

function ProjectItem({ project }: { project: any }) {
  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border text-center h-full hover:border-primary transition-all duration-300">
      <div className="text-4xl mb-4">
        <img
          src={project.icon}
          height={270}
          alt={project.title}
          className="w-full h-64 object-contain rounded-lg"
        />
      </div>
      <h3 className="text-xl font-bold mb-3 text-foreground">
        {project.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {project.description}
      </p>
    </div>
  );
}