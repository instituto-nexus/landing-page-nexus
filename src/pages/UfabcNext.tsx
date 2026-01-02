import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, ExternalLink } from "lucide-react";

const UfabcNext = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full bg-white shadow-sm border-b py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-primary font-bold text-2xl flex items-center">
            <ArrowLeft className="mr-2" size={24} />
            <span>Voltar</span>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <img 
            src="/members/logo_next_2.png" 
            alt="UFABC Next Logo" 
            className="w-64 h-64 object-contain mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold mb-6 text-primary">UFABC Next</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Plataforma de avaliação de professores, disciplinas e cursos baseada na experiência dos alunos da UFABC
          </p>
        </div>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Sobre o Projeto</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-lg text-gray-700 mb-4">
              O UFABC Next é a principal plataforma de avaliação acadêmica da Universidade Federal do ABC. 
              Criada por alunos para alunos, a plataforma permite que estudantes compartilhem suas experiências 
              sobre disciplinas, professores e cursos, ajudando a comunidade a tomar decisões mais informadas 
              sobre sua trajetória acadêmica.
            </p>
            <p className="text-lg text-gray-700">
              Com milhares de avaliações e uma comunidade ativa, o UFABC Next se tornou uma ferramenta essencial 
              para o planejamento acadêmico dos estudantes, oferecendo transparência e colaboração no ambiente universitário.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Funcionalidades</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">Avaliação de Professores</h3>
              <p className="text-gray-700">
                Compartilhe e consulte avaliações detalhadas sobre o método de ensino, didática e 
                forma de avaliação dos professores.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">Avaliação de Disciplinas</h3>
              <p className="text-gray-700">
                Descubra a dificuldade, carga de trabalho e relevância de cada disciplina antes 
                de se matricular.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">Planejamento de Matrícula</h3>
              <p className="text-gray-700">
                Utilize as informações da comunidade para planejar melhor suas matrículas e 
                otimizar seu percurso acadêmico.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">Comunidade Ativa</h3>
              <p className="text-gray-700">
                Faça parte de uma comunidade engajada que ajuda estudantes a terem sucesso 
                em sua jornada universitária.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Impacto</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-primary text-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">15k+</div>
              <p className="text-lg">Usuários Ativos</p>
            </div>
            <div className="bg-primary text-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">10k+</div>
              <p className="text-lg">Avaliações</p>
            </div>
            <div className="bg-primary text-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-lg">Disciplinas Avaliadas</p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">História do Projeto</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Conheça os principais contribuidores que ajudaram a construir e evoluir o UFABC Next ao longo dos anos
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 2024 */}
              <TimelineYear year="2024" members={[
                {
                  name: "Felipe Silva",
                  image: "/former-members/felipe-silva.png",
                  linkedin: "https://www.linkedin.com/in/feosilva/",
                  side: "left"
                },
                {
                  name: "Felipe Tiozo",
                  image: "/former-members/felipe-tiozo.png",
                  linkedin: "https://www.linkedin.com/in/felipetiozo/",
                  side: "right"
                }
              ]} />

              {/* 2023 */}
              <TimelineYear year="2023" members={[
                {
                  name: "Felipe Augusto",
                  image: "/former-members/felipe-augusto.png",
                  linkedin: "https://www.linkedin.com/in/felipeaugustodev/",
                  side: "left"
                },
                {
                  name: "Vinicius Santana",
                  image: "/former-members/vinicius-santana.png",
                  linkedin: "https://www.linkedin.com/in/vinicius-santana-santos/",
                  side: "right"
                }
              ]} />

              {/* 2022 */}
              <TimelineYear year="2022" members={[
                {
                  name: "Pedro Birais",
                  image: "/former-members/pedro-birais.png",
                  linkedin: "https://www.linkedin.com/in/phbirais/",
                  side: "left"
                },
                {
                  name: "Lucas Grippa",
                  image: "/former-members/lucas-grippa.png",
                  linkedin: "https://www.linkedin.com/in/lucas-grippa-5269366a/",
                  side: "right"
                },
                {
                  name: "Rafael Telles",
                  image: "/former-members/rafael-telles.png",
                  linkedin: "https://www.linkedin.com/in/rafael-telles/",
                  side: "left"
                }
              ]} />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-br from-primary to-primary/80 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Acesse a Plataforma</h2>
          <p className="text-lg mb-8">
            Comece a explorar avaliações e contribuir com a comunidade acadêmica da UFABC
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100"
              onClick={() => window.open('https://ufabcnext.com', '_blank')}
            >
              Acessar Plataforma
              <ExternalLink className="ml-2" size={18} />
            </Button>
            <Link to="/">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Voltar ao Início
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

// Timeline Components
interface TimelineMember {
  name: string;
  image: string;
  linkedin: string;
  side: "left" | "right";
}

function TimelineYear({ year, members }: { year: string; members: TimelineMember[] }) {
  return (
    <div className="relative">
      <div className="flex items-center justify-center mb-8">
        <div 
          className="text-white px-6 py-2 rounded-full font-bold text-lg z-10 bg-gradient-to-br from-[#0a2e4f] to-primary"
        >
          {year}
        </div>
      </div>
      <div className="space-y-8">
        {members.map((member, index) => (
          <TimelineMember key={index} member={member} />
        ))}
      </div>
    </div>
  );
}

function TimelineMember({ member }: { member: TimelineMember }) {
  return (
    <div 
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
                  <AvatarFallback className="bg-gray-200 text-gray-600">
                    {member.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-semibold text-gray-900 text-base leading-tight">
                  {member.name}
                </h3>
              </div>
            </a>
            {/* Connection line from image to center */}
            <div className="hidden md:block absolute right-0 top-16 h-0.5 bg-gray-300" style={{ width: 'calc(4rem - 1px)', transform: 'translateX(calc(100% + 1px))' }}></div>
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
                  <AvatarFallback className="bg-gray-200 text-gray-600">
                    {member.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-semibold text-gray-900 text-base leading-tight">
                  {member.name}
                </h3>
              </div>
            </a>
            {/* Connection line from image to center */}
            <div className="hidden md:block absolute left-0 top-16 h-0.5 bg-gray-300" style={{ width: 'calc(4rem - 1px)', transform: 'translateX(calc(-100% - 1px))' }}></div>
          </div>
        </>
      )}
    </div>
  );
}

export default UfabcNext;
