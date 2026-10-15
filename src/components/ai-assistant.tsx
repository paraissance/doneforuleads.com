'use client';

import Script from 'next/script';

/**
 * Done For You Leads AI agent — the JodyOS agent (data-agent="dfu-leads").
 * Loaded on the marketing pages (mounted via SiteChrome, which excludes the
 * authenticated /portal app).
 */
export function AiAssistant() {
  return (
    <Script
      src="https://jodyos.vercel.app/agent.js"
      data-agent="dfu-leads"
      strategy="afterInteractive"
    />
  );
}
