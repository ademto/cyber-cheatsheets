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

const md = new MarkdownIt();

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
  .use(shortcode, {
    widget: {
      render: ({ name }) => {
        const widgetPath = path.resolve(`public/widgets/${name}.html`);
        if (fs.existsSync(widgetPath)) {
          return fs.readFileSync(widgetPath, 'utf8');
        }
        return `<div>Error: widget "${name}" not found</div>`;
      },
    },
  });

export function renderMarkdown(content: string) {
  return md.render(content);
}
