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
    content: string;
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
        title: "My server is down, what do I do?",
        excerpt: "A comprehensive guide to troubleshooting server issues and getting your application back online quickly.",
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
        tags: ["technology", "server", "troubleshooting", "devops"],
        content: `
## Understanding Server Downtime

When your server goes down, it can be a stressful experience. But don't panic! This guide will walk you through the systematic approach to diagnosing and fixing server issues.

### Step 1: Verify the Problem

Before jumping into solutions, confirm that the server is actually down:

- Try accessing your server from different networks
- Check if it's just your application or the entire server
- Verify DNS resolution is working correctly
- Use tools like \`ping\` and \`traceroute\` to test connectivity

\`\`\`bash
# Check if server is responding
ping your-server.com

# Check the route to your server
traceroute your-server.com
\`\`\`

### Step 2: Check Server Resources

Often, servers go down due to resource exhaustion. SSH into your server (if possible) and check:

\`\`\`bash
# Check disk space
df -h

# Check memory usage
free -m

# Check CPU usage
top

# Check running processes
ps aux | head -20
\`\`\`

### Step 3: Review Logs

Logs are your best friend when troubleshooting. Check:

- Application logs
- System logs (\`/var/log/syslog\`)
- Web server logs (nginx, apache)
- Database logs

\`\`\`bash
# View last 100 lines of application log
tail -n 100 /var/log/myapp/error.log

# Follow logs in real-time
tail -f /var/log/nginx/error.log
\`\`\`

### Step 4: Common Issues and Solutions

#### Out of Memory
If your server ran out of memory:
- Restart memory-intensive processes
- Add swap space temporarily
- Scale up your server resources

#### Disk Space Full
If disk is full:
- Remove old logs (\`/var/log\`)
- Clean package caches
- Move large files to external storage

#### Failed Updates
If a bad deployment caused issues:
- Rollback to previous version
- Check configuration files
- Restart services

### Step 5: Prevention

Once you're back online, implement monitoring:

- Set up uptime monitoring (UptimeRobot, Pingdom)
- Configure alerts for resource usage
- Implement automated backups
- Document your recovery process

## Conclusion

Server downtime is inevitable, but being prepared makes all the difference. Keep this checklist handy, maintain good documentation, and always have a backup plan.

Remember: The best way to handle downtime is to prevent it. Invest time in monitoring, automation, and testing.

---

**Need help?** Join our community on Discord or check out our [documentation](/docs) for more guides.
    `
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
        content: `
## Building a WhatsApp Bot with AI Integration

This post will guide you through creating a WhatsApp bot that integrates with AI services to provide intelligent conversational experiences.
        `
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
