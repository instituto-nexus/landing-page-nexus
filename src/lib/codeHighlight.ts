import { codeToHtml } from 'shiki';

/**
 * Helper to generate HTML with Shiki syntax highlighting
 * Use this in your blog posts data file to pre-generate highlighted code
 */
export async function generateCodeBlock(code: string, lang: string = 'bash'): Promise<string> {
  return await codeToHtml(code.trim(), {
    lang,
    theme: 'github-dark',
  });
}

/**
 * Synchronous version - generates a placeholder that will be replaced client-side
 * Use this if you need immediate rendering without async
 */
export function codeBlock(code: string, lang: string = 'bash'): string {
  return `<pre class="shiki-loading my-6 rounded-lg overflow-hidden shadow-lg bg-gray-900 p-6" data-lang="${lang}"><code class="text-gray-300">${escapeHtml(code.trim())}</code></pre>`;
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
