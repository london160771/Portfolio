import { useEffect } from 'react';

const SITE = 'ayyoweb3';

// Pass a null title for the landing page to use the site-wide title.
export default function usePageTitle(title, description) {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE}` : `${SITE} — Full stack web developer & AI motion designer`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
}
