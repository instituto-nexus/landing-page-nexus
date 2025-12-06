import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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

export default UfabcNext;
