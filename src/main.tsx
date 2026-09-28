import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

/**
 * Branded page-preloader handshake (see #dp-preloader in index.html).
 * Signals the preloader to lift once React has mounted and painted,
 * so visitors see one complete page — never a half-rendered flash.
 */
function signalAppReady(): void {
  const w = window as unknown as { __dpAppReady?: boolean };
  if (w.__dpAppReady) return;
  w.__dpAppReady = true;
  window.dispatchEvent(new Event('dp:app-ready'));
}

if (typeof window !== 'undefined') {
  const fontsDone = (): Promise<void> => {
    try {
      const f = (document as unknown as { fonts?: { ready?: Promise<unknown> } }).fonts;
      if (f && f.ready) return f.ready.then(() => undefined, () => undefined);
    } catch {
      /* ignore */
    }
    return Promise.resolve();
  };
  // Reveal after mount + paint + fonts. The in-app OpeningReveal covers the
  // following moments while hero media finishes loading.
  requestAnimationFrame(() => requestAnimationFrame(() => { fontsDone().then(signalAppReady); }));
  // Safety: never trap a visitor behind the preloader.
  window.setTimeout(signalAppReady, 8000);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
