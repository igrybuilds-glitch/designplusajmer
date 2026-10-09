import React from 'react';

interface InstagramReelProps {
  reelId: string;
  title?: string;
}

export function InstagramReel({ reelId, title }: InstagramReelProps) {
  return (
    <section className="py-16 px-4 bg-neutral-50" aria-label="Instagram reel">
      <div className="max-w-md mx-auto text-center">
        {title && (
          <h2 className="text-2xl font-serif mb-6 text-neutral-900">{title}</h2>
        )}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src={`https://www.instagram.com/reel/${reelId}/embed`}
            width="100%"
            height="700"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
            title={`Instagram reel ${reelId}`}
            loading="lazy"
          />
        </div>
        <a
          href={`https://www.instagram.com/reel/${reelId}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-sm text-neutral-600 hover:text-neutral-900 underline"
        >
          View on Instagram
        </a>
      </div>
    </section>
  );
}
