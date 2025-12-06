import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, GraduationCap, Users, Calendar, BookOpen } from "lucide-react";

const AuloesNext = () => {
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
            src="/members/logo-aulao.png" 
            alt="Aulões Next Logo" 
            className="w-64 h-64 object-contain mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold mb-6 text-primary">Aulões Next</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Conectando veteranos e calouros através de aulões e mentorias acadêmicas
          </p>
        </div>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Sobre o Projeto</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-lg text-gray-700 mb-4">
              Os Aulões Next são eventos presenciais e online onde veteranos compartilham conhecimentos e 
              experiências com calouros e estudantes que precisam de apoio em disciplinas específicas. 
              É uma iniciativa que fortalece a comunidade acadêmica através da colaboração e solidariedade.
            </p>
            <p className="text-lg text-gray-700">
              Mais do que apenas aulas de revisão, os Aulões Next criam uma rede de apoio mútuo onde 
              estudantes mais experientes ajudam os colegas a superarem desafios acadêmicos, compartilhando 
              não apenas conteúdo, mas também dicas, estratégias de estudo e motivação.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Como Funciona</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <GraduationCap className="text-primary mb-3" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-primary">Aulões Temáticos</h3>
              <p className="text-gray-700">
                Aulas de revisão focadas em disciplinas específicas, ministradas por veteranos 
                que se destacaram nessas matérias.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Users className="text-primary mb-3" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-primary">Mentorias em Grupo</h3>
              <p className="text-gray-700">
                Sessões de mentoria onde veteranos compartilham experiências e estratégias 
                para sucesso acadêmico com grupos de calouros.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Calendar className="text-primary mb-3" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-primary">Eventos Regulares</h3>
              <p className="text-gray-700">
                Calendário de aulões organizados durante todo o semestre, especialmente 
                intensificados em períodos de provas.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <BookOpen className="text-primary mb-3" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-primary">Material de Apoio</h3>
              <p className="text-gray-700">
                Disponibilização de materiais complementares, listas de exercícios e 
                recursos de estudo criados pelos veteranos.
              </p>
            </div>
          </div>
        </section>

        {/* Subjects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Disciplinas Cobertas</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-semibold text-primary">Cálculo I, II e III</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-semibold text-primary">Física I, II e III</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-semibold text-primary">Álgebra Linear</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-semibold text-primary">Programação</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-semibold text-primary">Química</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-semibold text-primary">E muito mais!</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6">
              As disciplinas variam de acordo com a disponibilidade de veteranos e demanda dos estudantes
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Benefícios</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Para Calouros:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700">Revisão de conteúdos importantes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700">Networking com veteranos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700">Dicas e estratégias de estudo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700">Apoio emocional e motivacional</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Para Veteranos:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700">Revisão e aprofundamento de conteúdos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700">Desenvolvimento de habilidades didáticas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700">Contribuição para a comunidade</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700">Experiência em ensino</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Nosso Impacto</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-primary text-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">5+</div>
              <p className="text-lg">Aulões Realizados</p>
            </div>
            <div className="bg-primary text-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-lg">Estudantes Participantes</p>
            </div>
            <div className="bg-primary text-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">20+</div>
              <p className="text-lg">Veteranos Voluntários</p>
            </div>
            <div className="bg-primary text-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <p className="text-lg">Disciplinas Cobertas</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-br from-primary to-primary/80 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Participe dos Aulões</h2>
          <p className="text-lg mb-8">
            Seja como aluno ou como veterano voluntário, junte-se à nossa comunidade de aprendizado colaborativo
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Calendar className="mr-2" size={18} />
              Ver Próximos Aulões
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <GraduationCap className="mr-2" size={18} />
              Quero Ser Mentor
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

export default AuloesNext;
