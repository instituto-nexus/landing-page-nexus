
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
        content: `

<p class="mb-4">Sexta feira, 18hrs da tarde, aparentemente um ótimo dia e de uma hora para a outra chega uma mensagem <strong>"O Next caiu"</strong>.. Geralmente não gostamos de fazer deploy de sexta ou finais de semana, então o que poderia ter acontecido? </p>

<p class="mb-4">
Como todos engenheiro de software, fomos céticos e tentamos entrar na plataforma para ver, o resultado: 
</p>

<img src="/blog/blog-1/content/bad-gateway.jpg" alt="Erro na plataforma"
     class="rounded-lg shadow-md my-6" />

<p class="mb-6">De fato, tivemos um problema, no primeiro momento um erro de nginx só poderia indicar que a app não estava de pé e ao tentar redirecionar para a porta que a aplicação roda houve alguma falha. </p>

<p class="mb-4">
Mas não tivemos <strong>nenhum</strong> deploy, o buraco deve ser um pouco mais embaixo. 
</p>
<p class="mb-4">
O outro sintoma curioso, não conseguimos acessar a máquina de produção, qualquer tentativa de acesso com o SSM falhava, bem como o connect terminal do console, estavamos literalmente no escuro e sem poder entender o que de fato estava acontecendo. </p>

<p class="mb-4">
Nos baseamos por logs, tanto no Cloudwatch com logs do SSM quanto na aplicação não tivemos muitas respostas. Nesse momento, partimos para o plano drástico, tirar da tomada e ligar denovo.    Tentamos uma abordagem mais soft, com o restart da máquina que não deu muito certo, já no modo mais hard, simplesmente criamos um novo tipo de instância.   Agora é só partir para o abraço e... Não deu certo! Mas nem tudo estava perdido tem momentos que falhar é muito bom e nos deu a dica que precisavamos, se mesmo trocando a instância não tivemos sucesso, significa que tinhamos que olhar mais embaixo.   Na arquitetura da AWS, quando trabalhamos com máquinas EC2, precisamos também trabalhar com um volume EBS, que nada mais é que o nosso bloco de memória que contém sistema operacional, drivers de memória e afins. No nosso caso, estavamos trabalhando com um volume do tipo gp3, com a memória padrão de 8gb que pode ser pouco dependendo do workload que utilizamos.  
Um detalhe importante, depois de fazer a recriação da instância, conseguimos acessar via SSH a máquina, o que nos facilitou fazer o diagnóstico final. O conjunto App + Docker havia sido terminado com códigos de falha estranhos e ao tentar executar o comando service docker restart, o systemd não respondia. 
</p>

<p class="mb-6">Estávamos completamente no escuro.</p>

<img src="/blog/blog-1/content/sample-arch.png" alt="Arquitetura"
     class="rounded-lg shadow-md my-6" />



<p class="mb-4">
Bom, vamos então entender como está a saúde da máquina. Ao rodar o conjunto de comandos df-h e df -T <Explicar a diferença entre as flags>   Vimos que os FileSystem estavam ok, exceto um. 

</p>

<p class="font-mono bg-gray-800 text-gray-200 px-3 py-2 rounded mb-4">/dev/nvme0n1p1. -- Falo mais sobre no final do blog</p> 

<p class="mb-4"> Certo, conseguimos confirmar isso de outra maneira, o gráfico do cloudwatch mostrava que o disco realmente estava bastante sobrecarregado. Então partimos para a solução matadora, vamos escalar o disco e aumentar a capacidade de storage da máquina.   Nesse momento, passamos o volume para o modo optimizing state, esse estado indica que o EBS está passando por resizing. 

</p>

<img src="/blog/blog-1/content/cw-metrics.png"
     alt="CloudWatch Disk 100%"
     class="rounded-lg shadow-md my-6" />


<p class="mb-4">
OBS: Esse tipo de operação não pode ser realizado com muita frequência, se não tomamos downtime da api da AWS, o que aconteceu conosco nos testes 😅
</p>


<img src="/blog/blog-1/content/quota-aws.png" alt="quotas aws"
     class="rounded-lg shadow-md my-6" />



<p class="mb-4">
Após 5 minutos, a AWS tinha terminado a operação e BANG, ainda não funcionava. Curiosamente, a vontade de jogar o servidor no lixo é proporcional a curiosidade de entender os meandros que fizeram o problema acontecer e pesquisando mais um pouco, entendemos algo que até então foi novo. 

 </p>

<p class="mb-4">
O conceito é o seguinte, no linux precisamos manualmente fazer o gerenciamento do filesystem e mesmo que tivessemos aumentado o hardwate, precisamos indicar para o <strong>LVM(Linux Volume Manager)</strong> que ele fizesse o particionamento lógico e passasse a entender que os 12Gb adicionais estavam disponíveis para uso. 

 </p>

<p class="mb-4">
 O comando lsbk vai nos mostrar a distribuição dessas partições e a maneira como o linux está interpretando cada uma delas, para expandir de fato, precisamos executar os comandos growpart /dev/nvme0n1 1 e sudo xfs_growfs -d / é como dizer para o linux aumentar o tamanho da sua gaveta e também as suas divisões de meias internas.</p>
</p>


<p class="mb-4">
Nesse tipo de problema, temos alguns comandos que vão nos ajudar a visualizar e gerenciar as partições do linux.
</p>

<pre class="rounded-lg shadow-lg p-4 bg-gray-900 text-gray-200 my-6 text-sm">
# Lista as partições e discos
sudo df -h ou df -T
</pre>

<pre class="rounded-lg shadow-lg p-4 bg-gray-900 text-gray-200 my-6 text-sm">
# Expande a partição física
sudo growpart /dev/nvme0n1 1

# Expande o filesystem XFS, o "sistema de prateleiras" do linux, organizando o EBS
sudo xfs_growfs -d /
</pre>

<p class="mb-4">
Então fizemos o processo de gerenciamento do LVM e <em>voilà</em>, o comando <strong>lsbk</strong> nos mostrou a partição agora com os 20gb que precisavamos 
</p>


<p class="mb-6">Vimos algo como:</p>

<pre class="rounded-lg shadow-lg p-4 bg-gray-900 text-gray-200 my-6 text-sm">
nvme0n1       259:0    0  20G  0 disk
└─nvme0n1p1   259:1    0  20G  0 part /
</pre>


<p class="mb-4">
Finalmente, após algumas horas de troubleshooting, alcançamos espaço disponivel para executar o nosso Docker e o comando restar do Docker passou responder com sucesso a subida do processo do Dockerd e assim pudemos fazer resetar de nossa aplicação, hora dos fogos, vencemos o bug. 🎆  Em nosso post mortem, definimos alguns potenciais causadores desse problema e um deles diz respeito a maneira como reciclamos as imagens antigas a cada implantação e armazenamos arquivos de log, como lições: 
</p>



<ul class="list-disc ml-6 mb-6">
  <li>É importante termos alarmes para os parâmetros de infraestrutura</li>
  <li>Manter o controle de logs e imagens antigas no servidor</li>
  <li>Criar rotinas de limpeza para garantir a saúde do seu sistema de aramazenamento</li>
</ul>


<h2 class="text-2xl font-bold mt-10 mb-4">Bonus Tips: NVMe</h2>

<p class="mb-4">
O volume EC2 que abordamos nesse blog foi o NVME (Non-Volatile Memory Express) é um tipo de protocolo de SSDs modernos, diferente de outros mais antigos como o SATA, ele garante uma comunicação muito rápida, ideal para aplicações que tenham um alto IOPS e precisam de latência baixa, esse resultado é alcançado pela capacidade de conexão direta a CPU, sem passar por intermediários de tradução, ideal para alto desempenho. 
</p>

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