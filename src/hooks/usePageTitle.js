import { useEffect } from 'react';

export default function usePageTitle(title, description) {
  useEffect(() => {
    document.title = `${title} — Ayyoweb3`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
}
