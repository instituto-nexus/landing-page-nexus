import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    id: 1,
    name: "Gabriel",
    location: "Santo André, Brasil",
    image: "/members/profile-picture-gabriel.jpeg"
  },
  {
    id: 2,
    name: "Igor",
    location: "São Bernardo, Brasil",
    image: "/members/profile-picture-igor.jpeg"
  },
  {
    id: 3,
    name: "Joabe",
    location: "São Paulo, Brasil",
    image: "/members/profile-picture-joabe.jpeg"
  },
  {
    id: 4,
    name: "Mateus",
    location: "Santo André, Brasil",
    image: "/members/profile-picture-mateus.jpeg"
  },
  {
    id: 5,
    name: "Nicolas",
    location: "São Caetano, Brasil",
    image: "/members/profile-picture-nicolas.jpeg"
  },
  {
    id: 6,
    name: "Pedro",
    location: "Santo André, Brasil",
    image: "/members/profile-pedro.png"
  }
];

const formerMembers = [
  {
    id: 1,
    name: "Ana",
    location: "São Paulo, Brasil",
    image: "/members/profile-picture-ana.jpeg"
  },
  {
    id: 2,
    name: "Rafael",
    location: "Santo André, Brasil",
    image: "/members/profile-picture-rafael.jpeg"
  },
  {
    id: 3,
    name: "Marina",
    location: "São Bernardo, Brasil",
    image: "/members/profile-picture-marina.jpeg"
  }
];

export default function Members() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">UN</span>
            </div>
            <span className="font-semibold text-white">UFABC Next</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-gray-400 hover:text-white transition-colors">Início</a>
            <a href="/landing" className="text-gray-400 hover:text-white transition-colors">Sobre</a>
            <a href="/members" className="text-white font-medium">Equipe</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-light text-white mb-8 leading-tight">
            Pessoas <br />
            do UFABC Next
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-2">
            Somos uma equipe de <span className="text-white font-medium">{teamMembers.length} makers</span> que acredita em
          </p>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
            construir uma comunidade acadêmica que inspira outros.
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500"
          >
            Faça parte da equipe →
          </Button>
        </div>

        {/* Current Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 max-w-5xl mx-auto mb-32">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center group cursor-pointer">
              <div className="mb-4">
                <Avatar className="w-32 h-32 mx-auto mb-4 transition-all duration-300 group-hover:scale-105">
                  <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                  <AvatarFallback className="bg-gray-800 text-gray-300 text-2xl">
                    {member.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <h3 className="font-semibold text-lg text-white mb-1">
                {member.name}
              </h3>
              <p className="text-gray-400 text-sm">
                {member.location}
              </p>
            </div>
          ))}
        </div>

        {/* Former Members Section */}
        <div className="border-t border-gray-800 pt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-4">
              Ex-membros
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Reconhecemos e agradecemos a todos que contribuíram para construir 
              o UFABC Next ao longo de sua jornada.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-3xl mx-auto">
            {formerMembers.map((member) => (
              <div key={member.id} className="text-center group cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                <div className="mb-4">
                  <Avatar className="w-24 h-24 mx-auto mb-4 transition-all duration-300 group-hover:scale-105">
                    <AvatarImage src={member.image} alt={member.name} className="object-cover grayscale group-hover:grayscale-0 transition-all" />
                    <AvatarFallback className="bg-gray-800 text-gray-400 text-xl">
                      {member.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="font-medium text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  {member.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}