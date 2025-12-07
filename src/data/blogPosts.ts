
export interface Author {
    name: string;
    avatar: string;
    role: string;
    bio?: string;
    social?: {
        twitter?: string;
        linkedin?: string;
        github?: string;
    };
    // optional fields used by the author hover card
    location?: string;
    timezone?: string;
    handle?: string;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string; // Now stores HTML instead of Markdown
    image: string;
    author: Author; // Primary author for backward compatibility
    authors?: Author[]; // Multiple authors
    date: string;
    readTime: string;
    category: string;
    slug: string;
    tags?: string[];
}

export const blogPostsDatabase: Record<string, BlogPost> = {
    "my-server-is-down-what-do-i-do": {
        id: "0",
        title: "Mayday, o next caiu! E agora?",
        excerpt: "A comprehensive guide to troubleshooting server issues and getting your application back online quickly.",
        image: "/blog/blog-1/wallpaper/resizing_machines.png",
        author: {
            name: "Gabriel Monteiro",
            avatar: "/members/gabriel.jpeg",
            role: "Founder & CEO",
            bio: "Gabriel is the Founder & CEO at Nexus. With a passion for building tools that empower students, Gabriel leads the team in creating innovative solutions for the academic community.",
            social: {
                twitter: "https://twitter.com/gabrielmonteiro",
                linkedin: "https://www.linkedin.com/in/gabriel-monteiro-rocha7/",
                github: "https://github.com/gabrielmonteiro"
            }
        },
        authors: [
            {
                name: "Gabriel Monteiro",
                avatar: "/members/gabriel.jpeg",
                role: "Founder & CEO",
                bio: "Gabriel is the Founder & CEO at Nexus. With a passion for building tools that empower students, Gabriel leads the team in creating innovative solutions for the academic community.",
                social: {
                    twitter: "https://twitter.com/gabrielmonteiro",
                    linkedin: "https://www.linkedin.com/in/gabriel-monteiro-rocha7/",
                    github: "https://github.com/gabrielmonteiro"
                },
                // optional fields for metadata
                location: "Brazil",
                timezone: "UTC-3",
                handle: "@gabrielmonteiro"
            },
            {
                name: "Nicolas Greco",
                avatar: "/members/nicolas.jpeg",
                role: "DevOps Specialist",
                bio: "Pedro is the DevOps Specialist at Nexus, ensuring our infrastructure runs smoothly and reliably. He's passionate about automation and best practices.",
                social: {
                    linkedin: "https://www.linkedin.com/in/nicolas-grecos/",
                    github: "https://github.com/nicolasgrecos"
                },
                // optional fields for metadata
                location: "Argentina",
                timezone: "UTC-3",
                handle: "@nicolasgreco"
            },
            {
                name: "Joabe Silva",
                avatar: "/members/joabe.jpeg",
                role: "Backend Specialist",
                bio: "Joabe is the Backend Specialist at Nexus, building robust and scalable server-side solutions. He loves solving complex problems.",
                social: {
                    linkedin: "https://www.linkedin.com/in/joabe-silva-ufabc/",
                    github: "https://github.com/joabesilva"
                },
                // optional fields for metadata
                location: "Brazil",
                timezone: "UTC-3",
                handle: "@joabesilva"
            }
        ],
        date: "Dec 6, 2025",
        readTime: "8 min read",
        category: "technology",
        slug: "my-server-is-down-what-do-i-do",
        tags: ["technology", "server", "troubleshooting", "devops", "ufabc next"],
        content: ` <h2 class="text-3xl font-bold mb-4">O Dia em que o Next Caiu</h2>

<p class="mb-4">Sexta-feira, 18h. Tudo parecia tranquilo.</p>

<p class="mb-4">De repente, uma mensagem: <strong>"O Next caiu"</strong>.</p>

<p class="mb-4">
Deploy na sexta? Nunca. Então o que teria acontecido?  
Como bons engenheiros, fomos verificar.
</p>

<p class="mb-4">Resultado:</p>

<img src="/blog/blog-1/content/bad-gateway.jpg" alt="Erro na plataforma"
     class="rounded-lg shadow-md my-6" />

<p class="mb-6">Sim. Estávamos com um problema real.</p>

<p class="mb-4">
O erro do <strong>nginx</strong> sugeria que nossa aplicação não estava de pé.
Nenhum deploy havia sido feito, então a falha deveria estar mais abaixo...
</p>

<p class="mb-4">
O segundo sintoma: não conseguíamos acessar a <strong>máquina de produção</strong>.
Nem SSM, nem connect do console.
</p>

<p class="mb-6">Estávamos completamente no escuro.</p>

<img src="/blog/blog-1/content/sample-arch.png" alt="Arquitetura"
     class="rounded-lg shadow-md my-6" />


<h2 class="text-2xl font-bold mt-10 mb-4">Investigação Inicial</h2>

<p class="mb-4">
Começamos pelos logs: <strong>CloudWatch</strong>, <strong>SSM</strong> e aplicação.  
Nada conclusivo.
</p>

<p class="mb-4">
Decidimos ir para o modo clássico: <strong>desligar e ligar novamente</strong>.
</p>

<p class="mb-4">
O reboot não funcionou.  
Criamos um novo tipo de instância.  
Também não funcionou.
</p>

<p class="mb-6"><strong>Mas isso foi ótimo.</strong> Significava que o problema era mais profundo.</p>


<h2 class="text-2xl font-bold mt-10 mb-4">O Problema Real: Volumes EBS</h2>

<p class="mb-4">
Usávamos um volume <strong>gp3</strong> padrão de <strong>8GB</strong>.  
Dependendo do workload, isso é pouco.
</p>

<h3 class="text-xl font-semibold mt-8 mb-3">Diagnóstico</h3>

<p class="mb-4">
Após recriar a instância, conseguimos acessar via <strong>SSH</strong>, o que
permitiu um diagnóstico melhor.
</p>

<p class="mb-4">
O conjunto <strong>App + Docker</strong> havia sido encerrado com falhas estranhas.  
O <code>systemd</code> não reiniciava o Docker.
</p>

<p class="mb-4">Rodamos os comandos:</p>

<pre class="rounded-lg shadow-lg p-4 bg-gray-900 text-gray-200 my-6 overflow-auto text-sm">
# Verificar uso do disco
df -h

# Ver tipos de filesystem
df -T
</pre>

<p class="mb-4">Os filesystems estavam ok, exceto:</p>

<p class="font-mono bg-gray-800 text-gray-200 px-3 py-2 rounded">/dev/nvme0n1p1</p>

<img src="/blog/blog-1/content/cw-metrics.png"
     alt="CloudWatch Disk 100%"
     class="rounded-lg shadow-md my-6" />


<h2 class="text-2xl font-bold mt-10 mb-4">A Solução: Redimensionar o Volume EBS</h2>

<p class="mb-4">
Colocamos o volume em <strong>optimizing state</strong>.  
Após alguns minutos, a operação terminou — mas o problema continuou.
</p>

<p class="mb-6">
Foi quando entendemos o detalhe crucial: aumentar o volume na AWS
<strong>não</strong> aumenta automaticamente o filesystem no Linux.
</p>


<h3 class="text-xl font-semibold mt-8 mb-3">Linux Volume Manager (LVM)</h3>

<p class="mb-4">
Precisávamos expandir o filesystem manualmente.
</p>

<p class="mb-4">Primeiro, verificamos a estrutura com:</p>

<pre class="rounded-lg shadow-lg p-4 bg-gray-900 text-gray-200 my-6 text-sm">
lsblk
</pre>

<p class="mb-4">Depois, rodamos os comandos de expansão:</p>

<pre class="rounded-lg shadow-lg p-4 bg-gray-900 text-gray-200 my-6 text-sm">
# Expande a partição física
sudo growpart /dev/nvme0n1 1

# Expande o filesystem XFS
sudo xfs_growfs -d /
</pre>

<img src="/blog/wallpaper/resizing_machines.png"
     alt="Resizing"
     class="rounded-lg shadow-md my-6" />

<p class="mb-4">Rodando novamente:</p>

<pre class="rounded-lg shadow-lg p-4 bg-gray-900 text-gray-200 my-6 text-sm">
lsblk
</pre>

<p class="mb-6">Vimos agora algo como:</p>

<pre class="rounded-lg shadow-lg p-4 bg-gray-900 text-gray-200 my-6 text-sm">
nvme0n1       259:0    0  20G  0 disk
└─nvme0n1p1   259:1    0  20G  0 part /
</pre>


<h2 class="text-2xl font-bold mt-10 mb-4">Vitória! 🎆</h2>

<p class="mb-4">
Com espaço liberado, o Docker voltou a subir normalmente
e a aplicação foi restaurada.
</p>


<h2 class="text-2xl font-bold mt-10 mb-4">Post Mortem & Lições Aprendidas</h2>

<ul class="list-disc ml-6 mb-6">
  <li>🔥 Como reciclamos imagens antigas pode ter contribuído</li>
  <li>🚨 Monitoramento é obrigatório</li>
  <li>🧹 Limpeza automática de imagens e volumes evita incidentes</li>
</ul>

<h3 class="text-xl font-semibold mt-8 mb-3">Comandos úteis</h3>

<pre class="rounded-lg shadow-lg p-4 bg-gray-900 text-gray-200 my-6 text-sm">
docker image prune -a
docker container prune
docker volume prune
docker system df
</pre>


<h2 class="text-2xl font-bold mt-10 mb-4">Bonus: O que é NVMe?</h2>

<p class="mb-4">
<strong>NVMe</strong> (Non-Volatile Memory Express) é um protocolo moderno para SSDs,
muito mais rápido que SATA.
</p>

<ul class="list-disc ml-6 mb-6">
  <li>🚀 Muito mais velocidade</li>
  <li>⚡ Baixa latência</li>
  <li>📊 Alto IOPS</li>
  <li>🔄 Paralelização real</li>
</ul>


<hr class="my-10" />

<h3 class="text-xl font-semibold mb-4">Referências</h3>

<ul class="list-disc ml-6">
  <li><a href="https://docs.aws.amazon.com/ebs/latest/userguide/recognize-expanded-volume-linux.html">AWS — Expanded Volume (Linux)</a></li>
  <li><a href="https://repost.aws/knowledge-center/create-lv-on-ebs-partition">AWS — Create LV on EBS Partition</a></li>
  <li><a href="https://www.quora.com/Why-are-NVMes-faster-than-SSDs-Where-both-are-non-volatile-memory-What-is-the-key-factor-or-reason">Por que NVMe é mais rápido?</a></li>
</ul>
 `,
    },

    "building-a-whatsapp-bot-with-ai-integration": {
        id: "1",
        title: "Building a WhatsApp Bot with AI Integration",
        excerpt: "A walkthrough to build a smart WhatsApp bot that leverages AI for conversational flows.",
        image: "/blog/wallpaper/resizing_machines.png",
        author: {
            name: "Gabriel Monteiro",
            avatar: "/members/gabriel.jpeg",
            role: "Founder & CEO",
            bio: "Gabriel is the Founder & CEO at Nexus. With a passion for building tools that empower students, Gabriel leads the team in creating innovative solutions for the academic community.",
            social: {
                twitter: "https://twitter.com/gabrielmonteiro",
                linkedin: "https://www.linkedin.com/in/gabriel-monteiro-rocha7/",
                github: "https://github.com/gabrielmonteiro"
            }
        },
        authors: [],
        date: "Dec 1, 2025",
        readTime: "6 min read",
        category: "technology",
        slug: "building-a-whatsapp-bot-with-ai-integration",
        tags: ["whatsapp", "bot", "ai"],
        content: `<h2>Building a WhatsApp Bot with AI Integration</h2>`
    }
};

// Helper function to get all posts for listing
export function getAllPosts(): BlogPost[] {
    return Object.values(blogPostsDatabase);
}

// Helper function to get a single post by slug
export function getPostBySlug(slug: string): BlogPost | null {
    return blogPostsDatabase[slug] || null;
}

// Helper function to get posts by category
export function getPostsByCategory(category: string): BlogPost[] {
    if (category === "all") {
        return getAllPosts();
    }
    return getAllPosts().filter(post => post.category === category);
}