import { useCallback, useEffect, useRef } from 'react';

/** Margen de seguridad: si el observer no respondio en este tiempo, mostramos igual. */
const SAFETY_MS = 2000;

/**
 * Revela elementos cuando entran en viewport.
 *
 * Reemplaza el IntersectionObserver que estaba copiado en 5 componentes, cada
 * uno con ~30 lineas identicas y su propio array de refs.
 *
 * Uso:
 *   const reveal = useReveal();
 *   <div ref={reveal} className="reveal">...</div>
 *   <div ref={reveal} className="reveal" style={{ transitionDelay: '100ms' }}>...</div>
 *
 * Dos garantias importantes:
 *
 * 1. El contenido NUNCA queda invisible de forma permanente. La opacidad 0
 *    solo se aplica si `html` tiene la clase `js-reveal`, que pone un script
 *    inline en index.html unicamente cuando hay soporte de IntersectionObserver.
 *    Sin JS o con JS caido, la pagina se ve completa.
 *
 * 2. Ademas hay una red de seguridad por tiempo: si el observer no entrego
 *    resultados en SAFETY_MS con la pestana visible (pasa en pestanas que no
 *    componen frames), revelamos todo igual. Mejor sin animacion que en blanco.
 */
export function useReveal(options?: IntersectionObserverInit) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const nodesRef = useRef<Set<Element>>(new Set());
  const timerRef = useRef<number | null>(null);

  const threshold = options?.threshold ?? 0.1;
  const rootMargin = options?.rootMargin ?? '0px 0px -40px 0px';

  const revealAll = useCallback(() => {
    nodesRef.current.forEach((node) => node.classList.add('is-visible'));
    nodesRef.current.clear();
    observerRef.current?.disconnect();
  }, []);

  const armSafetyNet = useCallback(() => {
    if (timerRef.current !== null) return;

    timerRef.current = window.setTimeout(() => {
      timerRef.current = null;

      // Si la pestana esta oculta no forzamos nada: al volver a primer plano
      // el observer dispara solo y la animacion se ve como corresponde.
      if (document.visibilityState !== 'visible') {
        document.addEventListener('visibilitychange', () => armSafetyNet(), { once: true });
        return;
      }

      revealAll();
    }, SAFETY_MS);
  }, [revealAll]);

  // Init perezoso: el callback ref corre en el commit, antes de useEffect.
  const getObserver = useCallback(() => {
    if (observerRef.current) return observerRef.current;
    if (typeof IntersectionObserver === 'undefined') return null;

    observerRef.current = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          nodesRef.current.delete(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold, rootMargin }
    );

    return observerRef.current;
  }, [threshold, rootMargin]);

  useEffect(() => {
    const nodes = nodesRef.current;
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
      timerRef.current = null;
      observerRef.current?.disconnect();
      observerRef.current = null;
      nodes.clear();
    };
  }, []);

  return useCallback(
    (node: Element | null) => {
      if (!node) return;

      const observer = getObserver();

      // Sin IntersectionObserver mostramos en vez de dejar contenido oculto.
      if (!observer) {
        node.classList.add('is-visible');
        return;
      }

      nodesRef.current.add(node);
      observer.observe(node);
      armSafetyNet();
    },
    [getObserver, armSafetyNet]
  );
}

export default useReveal;
