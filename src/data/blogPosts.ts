
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
    campus?: string;
    curso?: string;
    handle?: string;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string; // Now stores HTML instead of Markdown
    image: string;
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
        excerpt: "Um guia completo sobre como diagnosticar e resolver problemas de servidor, desde volumes EBS até gerenciamento de filesystem no Linux.",
        image: "/blog/blog-1/wallpaper/resizing_machines.png",
        authors: [
            {
                name: "Gabriel Monteiro",
                avatar: "/members/gabriel.jpeg",
                role: "Fundador & CEO",
                bio: "Gabriel é o Fundador e CEO do Nexus. Com paixão por construir ferramentas que capacitam estudantes, Gabriel lidera o time na criação de soluções inovadoras para a comunidade acadêmica.",
                social: {
                    twitter: "https://twitter.com/gabrielmonteiro",
                    linkedin: "https://www.linkedin.com/in/gabriel-monteiro-rocha7/",
                    github: "https://github.com/brMonteiro-G"
                },
                campus: "UFABC Santo André",
                curso: "Ciência da Computação",
                handle: "@gabrielmonteiro"
            },
            
            {
                name: "Joabe Silva",
                avatar: "/members/joabe.jpeg",
                role: "Cofundador & CTO",
                bio: "Joabe é o Cofundador e CTO do Nexus, construindo soluções robustas e escaláveis no servidor. Adora resolver problemas complexos.",
                social: {
                    linkedin: "https://www.linkedin.com/in/joabesv/",
                    github: "https://github.com/joabesilva"
                },
                // optional fields for metadata
                campus: "UFABC Santo André",
                curso: "Ciência da Computação",
                handle: "@joabesilva"
            },
            {
                name: "Nicolas Greco",
                avatar: "/members/nicolas.jpeg",
                role: "Diretor de Tecnologia",
                bio: "Nicolas é o Diretor de Tecnologia do Nexus, liderando as iniciativas técnicas e garantindo que nossa infraestrutura funcione de forma suave e confiável. É apaixonado por automação e boas práticas.",
                social: {
                    linkedin: "https://www.linkedin.com/in/nicolas-greco-160a5b258/",
                    github: "https://github.com/nicolasgrecos"
                },
                // optional fields for metadata
                campus: "UFABC Santo André",
                curso: "Ciência da Computação",
                handle: "@nicolasgreco"
            }
        ],
        date: "21 de Dezembro, 2025",
        readTime: "8 min de leitura",
        category: "Tecnologia",
        slug: "my-server-is-down-what-do-i-do",
        tags: ["tecnologia", "servidor", "troubleshooting", "devops", "ufabc next"],
        content: `
<p class="mb-4">
Sexta-feira, 18hrs. Tudo indicava o fim de uma semana tranquila quando, de repente, chega a mensagem:
<strong>“O Next caiu.”</strong> Geralmente não gostamos de fazer deploy às sextas ou em finais de semana, então, se nada havia sido alterado, o que poderia ter acontecido?
</p>

<p class="mb-4">
Como todo engenheiro de software naturalmente cético, a primeira reação foi: entrar na plataforma e conferir com os próprios olhos.
</p>

<img src="/blog/blog-1/content/bad-gateway.jpg" alt="Erro na plataforma"
     class="rounded-lg shadow-md my-6" />

<p class="mb-6">
De fato, havia um problema. O erro retornado era do <strong>nginx</strong>, que, em analogia, funciona como o porteiro da aplicação. Quando ele começa a reclamar, normalmente significa que, como porteiro, sua função de ligar nos apartamentos e liberar a entrada não está funcionando bem, ou seja, a aplicação que ele deveria encaminhar simplesmente não está respondendo ou não está lá. 
</p>

<p class="mb-6">
O estranho é que não tivemos <strong>nenhum</strong> deploy. Se nada mudou no código, o buraco provavelmente era mais embaixo.
</p>

<p class="mb-6">
Outro sintoma deixou tudo ainda mais curioso: não conseguíamos acessar o servidor que estava em produção. Qualquer tentativa de acesso remoto falhava, tanto usando o AWS SSM, um dos serviços da AWS usado para gerenciamento de servidores, quanto pela própria AWS. Era como ter um servidor ligado, mas sem teclado, sem tela e sem resposta. Estávamos literalmente no escuro.
</p>

<p class="mb-6">
Buscamos então pistas nos logs. Logs são, basicamente, o diário da aplicação e da infraestrutura. Analisamos tanto os registros da aplicação quanto os logs do nosso serviço responsável na AWS, o Amazon CloudWatch, mas não encontramos nada conclusivo.
</p>

<p class="mb-6">
Nesse momento, partimos para a estratégia mais antiga da computação: tirar da tomada e ligar de novo. Tentamos primeiro uma abordagem mais suave, reiniciando a máquina. Não funcionou. Bom, fomos um pouco mais primitivos e pensamos, joga fora e começa de novo! Simplesmente criamos uma nova máquina e adicionamos o código lá dentro.
</p>

<p class="mb-6">
Não voltou. Porém, nem tudo estava perdido. Existem momentos em que falhar é mais útil do que acertar de primeira. Paramos para pensar e, trocar o computador é uma forma de garantir que tudo voltará ao estado incial mas e se nem tudo estivesse sendo mesmo trocado?
</p>

<p class="mb-6">
Na arquitetura de sistemas escolhida, usamos um serviço chamado EC2 para hospedar nossa servidor, que depende de uma série de configurações para que o sistema fique pronto para rodar. Imagine que ao ler esse artigo, o seu dispositivo é quase como um Iceberg, repleto de camadas, ele vai desde a interface com o usuário, sistema operacional e por fim a parte física que faz tudo ser possível. Para o EC2 não é diferente, essas camadas, dependem em algum momento de um hardware para armazenar as informações, chamado <strong>EBS</strong>, que funciona como o HD do computador. Nesse componente, podemos encontrar o sistema operacional, arquivos, logs e afins. No nosso caso, esse “HD”, chamado volume,  era do tipo <strong>gp3</strong>, com <strong>8 GB</strong>, que até parece bastante, até que comece a faltar. </p>


<img src="/blog/blog-1/content/sample-arch.png" alt="Arquitetura"
     class="rounded-lg blog-image-shadow my-6" />

<p class="mb-6">
Recriar a instância, deu um pequeno sinal, finalmente conseguimos conectar na máquina através da linha de comando, o que permitiu um diagnóstico mais detalhado. Percebemos então que, o nossos componentes internos estavam sem comunicação, o porteiro, <strong>nginx</strong> não reconhecia nenhum tipo de contato com o sistema responsável por separar os apartamentos, seguindo a nossa analogia. Esse sistema chamado Docker, veja figura 1.2, é importante para o processo de muitas maneiras que não cabem aqui explicar mas o importante é que assim como os demais programas, por quê não tentar reiniciar? Aqui vimos uma falha importante, ao executar o comando  <code>service docker restart</code> não tivemos sucesso, na verdade, os logs indicavam erros bem estranhos.   
 </p>

<img src="/blog/blog-1/content/server-components.png" alt="componentes"
     class="rounded-lg blog-image-shadow  my-6" />

<p class="mb-6">
Decidimos então verificar algo básico: a saúde da máquina. Rodamos comandos como <code>df -h</code> e <code>df -T</code>, que mostram informações importantes sobre os espaços de memória onde o sistema operacional executa, chamados de FileSystems. Como resultado do comando, a maioria parecia normal, exceto um.
</p>

<p class="font-mono bg-gray-800 text-gray-200 px-3 py-2 rounded mb-6">
/dev/nvme0n1p1
</p>

<p class="mb-6">
Esse espaço mostrava 0% de espaço livre, o que foi o primeiro bingo, se não houver memória, nada funciona como deveria. Confirmamos a suspeita de outra forma: o gráfico do AWS CloudWatch mostrava o disco completamente sobrecarregado. A solução parecia óbvia, aumentar o tamanho dessa memória. Aumentamos o volume EBS, que entrou no estado de <em>optimizing</em>, indicando que o redimensionamento estava em andamento.
</p>

<img src="/blog/blog-1/content/cw-metrics.png"
     alt="CloudWatch Disk 100%"
     class="rounded-lg blog-image-shadow my-6" />

<p class="mb-6">
<strong>Obs:</strong> esse tipo de operação não pode ser feita muitas vezes em sequência. Aprendemos isso ao tomar uma pequena indisponibilidade da própria AWS durante os testes 😅
</p>

<img src="/blog/blog-1/content/quota-aws.png" alt="quotas aws"
     class="rounded-lg blog-image-shadow my-6" />

<p class="mb-6">
Após alguns minutos, a AWS concluiu a operação. E então… <strong>BANG</strong>. Ainda não funcionava. Foi nesse momento, entre o dilema de lidar com a frustração das tentativas e a curiosidade de continuar, entendemos o seguinte: no Linux, aumentar o tamanho do disco não significa automaticamente que o sistema passará a usar esse espaço.
</p>

<p class="mb-6">
É como comprar uma gaveta maior, mas continuar usando as mesmas divisões internas. O espaço existe, mas o sistema ainda não sabe disso. Precisávamos informar ao programa responsável, chamado <strong>LVM (Linux Volume Manager)</strong>, que aqueles novos gigabytes agora estavam disponíveis.
</p>

<p class="mb-6">
O comando <code>lsblk</code> nos mostra como o Linux está interpretando discos e suas partições. Para resolver de vez, foi necessário aumentar a gaveta e reorganizar as divisões internas.
</p>

<pre class="rounded-lg shadow-lg p-4 bg-gray-900 text-gray-200 my-6 text-sm">
# Visualiza discos e partições
df -h
df -T
</pre>

<pre class="rounded-lg shadow-lg p-4 bg-gray-900 text-gray-200 my-6 text-sm">
# Expande a partição física
sudo growpart /dev/nvme0n1 1

# Expande o filesystem XFS
sudo xfs_growfs -d /
</pre>

<p class="mb-6">
Após o ajuste do LVM, rodamos novamente o <code>lsblk</code> e finalmente vimos a partição reconhecendo os <strong>20 GB</strong> disponíveis.
</p>

<pre class="rounded-lg shadow-lg p-4 bg-gray-900 text-gray-200 my-6 text-sm">
nvme0n1       259:0    0  20G  0 disk
└─nvme0n1p1   259:1    0  20G  0 part /
</pre>

<p class="mb-6">
Agora sim, havia espaço suficiente. O Docker voltou a subir, a aplicação respondeu e, depois de algumas horas de troubleshooting, vencemos o bug. Hora dos fogos 🎆
</p>

<p class="mb-4">
No post-mortem, o exercício da engenharia de software para entender quais os fatores levaram ao problema, os pontos:
</p>

<ul class="list-disc ml-6 mb-6">
  <li>É importante monitorar não só a aplicação mas também o que está embaixo, sua infraestrutura</li>
  <li>Manter o controle das versões antigas que estão na máquina</li>
  <li>Criar rotinas de limpeza para garantir que apenas o essencial será mantido é importante para evitar problemas futuros</li>
</ul>

<h2 class="text-2xl font-bold mt-10 mb-4">Bonus Tips: NVMe</h2>

<p class="mb-6">
O volume utilizado era do tipo <strong>NVMe (Non-Volatile Memory Express)</strong>, um protocolo moderno de SSD que permite comunicação direta com a CPU, garantindo alto IOPS e baixa latência. Ideal para aplicações de alto desempenho — desde que você dê espaço suficiente para ele respirar.
</p>

<h3 class="text-xl font-semibold mb-4">Referências</h3>

<ul class="list-disc ml-6">
  <li><a href="https://docs.aws.amazon.com/ebs/latest/userguide/recognize-expanded-volume-linux.html" class="text-primary hover:underline hover:text-blue-700 transition-colors">AWS — Expanded Volume (Linux)</a></li>
  <li><a href="https://repost.aws/knowledge-center/create-lv-on-ebs-partition" class="text-primary hover:underline hover:text-blue-700 transition-colors">AWS — Create LV on EBS Partition</a></li>
  <li><a href="https://www.quora.com/Why-are-NVMes-faster-than-SSDs-Where-both-are-non-volatile-memory-What-is-the-key-factor-or-reason" class="text-primary hover:underline hover:text-blue-700 transition-colors">Por que NVMe é mais rápido?</a></li>
</ul>

<div class="mt-12 p-6 bg-gradient-to-br from-blue-50/50 to-slate-100/50 dark:from-blue-900/10 dark:to-blue-800/10 rounded-2xl border-2 border-blue-100 dark:border-blue-900">
  <p class="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
    Se você gostaria de <strong>aprender tecnologia a partir de vivências práticas</strong> e <strong>impactar a comunidade acadêmica da Universidade Federal do ABC</strong> no processo. Esse lugar é para você, venha fazer parte do time, <strong>inscrições em breve</strong>!
  </p>
</div>

 `,
    },

    "extension-ufabc-next": {
        id: "1",
        title: "Quero atualizar meus dados no UFABC next, como faço?",
        excerpt: "Um passo a passo para entender o funcionamento da extensão de atualização automática de dados do UFABC next.",
        image: "/blog/blog-2/wallpaper/image.png",
        authors: [

            {
                name: "Nicolas Greco",
                avatar: "/members/nicolas.jpeg",
                role: "Diretor de Tecnologia",
                bio: "Nicolas é o Diretor de Tecnologia do Nexus, liderando as iniciativas técnicas e garantindo que nossa infraestrutura funcione de forma suave e confiável. É apaixonado por automação e boas práticas.",
                social: {
                    linkedin: "https://www.linkedin.com/in/nicolas-grecos/",
                    github: "https://github.com/nicolasgrecos"
                },
                // optional fields for metadata
                campus: "UFABC Santo André",
                curso: "Ciência da Computação",
                handle: "@nicolasgreco"
            },
        ],
        date: "1 de Dezembro, 2025",
        readTime: "6 min de leitura",
        category: "technology",
        slug: "extension-ufabc-next",
        tags: ["ufabc-next", "Tecnologia", "Comunidade"],
        content: `<h2>Um conteúdo incrivel vindo por aí</h2>`
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