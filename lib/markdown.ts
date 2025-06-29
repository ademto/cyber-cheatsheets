import fs from 'fs';
import path from 'path';
import MarkdownIt from 'markdown-it';

import abbr from 'markdown-it-abbr';
import footnote from 'markdown-it-footnote';
import ins from 'markdown-it-ins';
import sub from 'markdown-it-sub';
import sup from 'markdown-it-sup';
import taskLists from 'markdown-it-task-lists';
// import emoji from 'markdown-it-emoji';
import attrs from 'markdown-it-attrs';
import hljs from 'markdown-it-highlightjs';
import checkbox from 'markdown-it-checkbox';
import table from 'markdown-it-multimd-table';
import shortcode from 'markdown-it-shortcode-tag';
import anchor from 'markdown-it-anchor';
import highlightLines from 'markdown-it-highlight-lines';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

// Header Section Management
function headerSections(md: MarkdownIt) {
  const originalRender = md.render.bind(md);
  
  md.render = function(src: string, env?: any) {
    const html = originalRender(src, env);
    
    // Process the HTML to add the wrapper structure
    return processHtml(html);
  };
  
  function processHtml(html: string): string {
    // Split by h2 tags
    const h2Sections = html.split(/(<h2[^>]*>[\s\S]*?<\/h2>)/);
    let result = '';
    
    for (let i = 0; i < h2Sections.length; i++) {
      const section = h2Sections[i];
      
      if (section.match(/^<h2[^>]*>[\s\S]*?<\/h2>$/)) {
        // This is an h2 header
        const h2Id = section.match(/id="([^"]*)"/)?.[1] || '';
        const h2Content = section.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/, '$1');
        
        // Find all content until the next h2 or end
        let h2ContentHtml = '';
        let j = i + 1;
        while (j < h2Sections.length && !h2Sections[j].match(/^<h2[^>]*>[\s\S]*?<\/h2>$/)) {
          h2ContentHtml += h2Sections[j];
          j++;
        }
        
        // Process h3 sections within this h2
        const processedContent = processH3Sections(h2ContentHtml);
        
        result += `<div class="h2-wrap">\n`;
        result += `<h2 id="${h2Id}"><a class="h-anchor" href="#${h2Id}">#</a>${h2Content}</h2>\n`;
        result += processedContent;
        result += `</div>\n`;
        
        i = j - 1; // Skip the processed sections
      } else if (section.trim()) {
        // This is content before any h2 (like h1 content)
        result += section;
      }
    }
    
    return result;
  }
  
  function processH3Sections(html: string): string {
    // Split by h3 tags
    const h3Sections = html.split(/(<h3[^>]*>[\s\S]*?<\/h3>)/);
    let result = '';
    let hasH3 = false;
    
    for (let i = 0; i < h3Sections.length; i++) {
      const section = h3Sections[i];
      
      if (section.match(/^<h3[^>]*>[\s\S]*?<\/h3>$/)) {
        // This is an h3 header
        if (!hasH3) {
          result += `<div class="h3-wrap-list">\n`;
          hasH3 = true;
        }
        
        const h3Id = section.match(/id="([^"]*)"/)?.[1] || '';
        const h3Content = section.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/, '$1');
        
        // Find all content until the next h3 or end
        let h3ContentHtml = '';
        let j = i + 1;
        while (j < h3Sections.length && !h3Sections[j].match(/^<h3[^>]*>[\s\S]*?<\/h3>$/)) {
          h3ContentHtml += h3Sections[j];
          j++;
        }
        
        result += `<div class="h3-wrap">\n`;
        result += `<h3 id="${h3Id}"><a class="h-anchor" href="#${h3Id}">#</a>${h3Content}</h3>\n`;
        result += `<div class="section">\n`;
        result += h3ContentHtml;
        result += `</div>\n`;
        result += `</div>\n`;
        
        i = j - 1; // Skip the processed sections
      } else if (section.trim()) {
        // This is content before any h3 (like paragraphs, code blocks, etc.)
        if (hasH3) {
          result += `</div>\n`; // Close h3-wrap-list
          hasH3 = false;
        }
        result += `<div class="section">\n`;
        result += section;
        result += `</div>\n`;
      }
    }
    
    if (hasH3) {
      result += `</div>\n`; // Close h3-wrap-list
    }
    
    return result;
  }
}

md.use(abbr)
  .use(footnote)
  .use(ins)
  .use(sub)
  .use(sup)
  .use(taskLists)
//   .use(emoji)
  .use(attrs)
  .use(hljs)
  .use(checkbox)
  .use(table, { multiline: false, rowspan: true, headerless: false })
  .use(anchor, {
    permalink: true,
    permalinkBefore: true,
    permalinkSymbol: '#'
  })
  .use(highlightLines)
  .use(shortcode, {
    widget: {
      render: ({ name }: { name: string }) => {
        const widgetPath = path.resolve(`public/widgets/${name}.html`);
        if (fs.existsSync(widgetPath)) {
          return fs.readFileSync(widgetPath, 'utf8');
        }
        return `<div>Error: widget "${name}" not found</div>`;
      },
    },
  });

// Use the headerSections plugin
md.use(headerSections);

export function renderMarkdown(content: string) {
  return md.render(content);
}
