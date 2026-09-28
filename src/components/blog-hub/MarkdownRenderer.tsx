import React from 'react';
import { Link } from 'react-router-dom';

function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const re = /(\*\*([^*]+)\*\*)|(\[([^\]]+)\]\(([^\)]+)\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[2]) {
      parts.push(<strong key={`${keyPrefix}-b${i}`} className="font-semibold text-inherit">{m[2]}</strong>);
    } else if (m[4]) {
      const href = m[5];
      const isInternal = href.startsWith('/');
      parts.push(isInternal ? (
        <Link key={`${keyPrefix}-l${i}`} to={href} className="text-amber-600 dark:text-amber-400 underline decoration-amber-300 underline-offset-2 hover:decoration-amber-500">{m[4]}</Link>
      ) : (
        <a key={`${keyPrefix}-l${i}`} href={href} className="text-amber-600 dark:text-amber-400 underline decoration-amber-300 underline-offset-2 hover:decoration-amber-500">{m[4]}</a>
      ));
    }
    last = m.index + m[0].length;
    i++;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function parseTable(lines: string[], start: number) {
  const rows: string[][] = [];
  let i = start;
  while (i < lines.length && /^\|.+\|$/.test(lines[i].trim())) {
    const cells = lines[i].trim().slice(1, -1).split('|').map(c => c.trim());
    if (!/^[\s:|-]+$/.test(cells.join(''))) rows.push(cells);
    i++;
  }
  return { rows, next: i };
}

export function MarkdownRenderer({ markdown }: { markdown: string }) {
  const lines = markdown.split('\n');
  const blocks: React.ReactNode[] = [];
  let i = 0;
  let key = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();
    if (!trimmed) { i++; continue; }
    if (/^---+$/.test(trimmed)) {
      blocks.push(<hr key={key++} className="my-8 border-stone-200 dark:border-stone-800" />);
      i++; continue;
    }
    if (/^\|.+\|$/.test(trimmed)) {
      const { rows, next } = parseTable(lines, i);
      i = next;
      if (rows.length === 0) continue;
      const [head, ...body] = rows;
      blocks.push(
        <div key={key++} className="my-6 overflow-x-auto rounded-xl border border-stone-200 dark:border-stone-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-stone-100 dark:bg-stone-800/60">
                {head.map((c, ci) => (
                  <th key={ci} className="px-4 py-3 text-left font-semibold">{renderInline(c, `th-${key}-${ci}`)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((r, ri) => (
                <tr key={ri} className={ri % 2 ? 'bg-stone-50 dark:bg-stone-900/40' : ''}>
                  {r.map((c, ci) => (
                    <td key={ci} className="px-4 py-3 border-t border-stone-200 dark:border-stone-800">{renderInline(c, `td-${key}-${ri}-${ci}`)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }
    const h2 = trimmed.match(/^##\s+(.+)/);
    if (h2) {
      blocks.push(<h2 key={key++} className="mt-10 mb-4 text-2xl md:text-3xl font-bold tracking-tight">{renderInline(h2[1], `h2-${key}`)}</h2>);
      i++; continue;
    }
    const h3 = trimmed.match(/^###\s+(.+)/);
    if (h3) {
      blocks.push(<h3 key={key++} className="mt-8 mb-3 text-xl md:text-2xl font-bold">{renderInline(h3[1], `h3-${key}`)}</h3>);
      i++; continue;
    }
    if (/^\d+\.\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i++;
      }
      blocks.push(
        <ol key={key++} className="my-5 space-y-2.5 list-decimal list-inside marker:font-semibold marker:text-amber-600">
          {items.map((it, ii) => <li key={ii} className="leading-relaxed pl-1">{renderInline(it, `ol-${key}-${ii}`)}</li>)}
        </ol>
      );
      continue;
    }
    if (/^[-*]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*]\s+/, ''));
        i++;
      }
      blocks.push(
        <ul key={key++} className="my-5 space-y-2.5">
          {items.map((it, ii) => (
            <li key={ii} className="leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-1 before:top-[0.65em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-amber-500">{renderInline(it, `ul-${key}-${ii}`)}</li>
          ))}
        </ul>
      );
      continue;
    }
    if (trimmed.startsWith('*') && trimmed.endsWith('*') && !trimmed.startsWith('**')) {
      blocks.push(<p key={key++} className="my-4 text-sm italic text-stone-500 dark:text-stone-400">{renderInline(trimmed.slice(1, -1), `em-${key}`)}</p>);
      i++; continue;
    }
    const para: string[] = [trimmed];
    i++;
    while (i < lines.length && lines[i].trim() && !/^(##|###|\||\d+\.\s|[-*]\s|---+)/.test(lines[i].trim())) {
      para.push(lines[i].trim());
      i++;
    }
    blocks.push(<p key={key++} className="my-4 leading-relaxed text-stone-700 dark:text-stone-300">{renderInline(para.join(' '), `p-${key}`)}</p>);
  }
  return <div className="blog-hub-prose">{blocks}</div>;
}
