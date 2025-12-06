import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Code, Database, Zap } from "lucide-react";

const UfabcParser = () => {
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
            src="/members/parser-logo.webp" 
            alt="UFABC Parser Logo" 
            className="w-64 h-64 object-contain mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold mb-6 text-primary">UFABC Parser</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            API completa com todas as informações relevantes para o desenvolvimento universitário da UFABC
          </p>
        </div>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Sobre o Projeto</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-lg text-gray-700 mb-4">
              O UFABC Parser é uma API robusta que disponibiliza dados acadêmicos da Universidade Federal do ABC 
              de forma estruturada e acessível. Desenvolvido para facilitar a criação de aplicações e ferramentas 
              que beneficiem a comunidade acadêmica.
            </p>
            <p className="text-lg text-gray-700">
              Com endpoints bem documentados e dados atualizados, o Parser se tornou a base para diversos projetos 
              e iniciativas estudantis, democratizando o acesso à informação acadêmica.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Funcionalidades</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Database className="text-primary mb-3" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-primary">Dados Estruturados</h3>
              <p className="text-gray-700">
                Acesso a informações sobre disciplinas, professores, turmas, horários e grades curriculares 
                de forma organizada e padronizada.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Code className="text-primary mb-3" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-primary">API RESTful</h3>
              <p className="text-gray-700">
                Interface RESTful bem documentada, facilitando a integração com qualquer linguagem 
                ou framework de desenvolvimento.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Zap className="text-primary mb-3" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-primary">Atualizações Automáticas</h3>
              <p className="text-gray-700">
                Sistema automatizado de coleta e atualização de dados, garantindo informações 
                sempre atualizadas.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <ExternalLink className="text-primary mb-3" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-primary">Open Source</h3>
              <p className="text-gray-700">
                Projeto de código aberto, permitindo contribuições da comunidade e transparência 
                total no funcionamento.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Tecnologias</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🐍</div>
                <p className="font-semibold">Python</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🚀</div>
                <p className="font-semibold">FastAPI</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🐘</div>
                <p className="font-semibold">PostgreSQL</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🐳</div>
                <p className="font-semibold">Docker</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-br from-primary to-primary/80 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Explore a API</h2>
          <p className="text-lg mb-8">
            Acesse a documentação completa e comece a desenvolver suas aplicações
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100"
              onClick={() => window.open('https://github.com/ufabc-next/ufabc-parser', '_blank')}
            >
              Ver no GitHub
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

export default UfabcParser;
