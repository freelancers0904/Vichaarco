import { useEffect, useState } from 'react';
import vichaarLogo from '@/assets/vichaar-logo-transparent.png';

const STORAGE_KEY = 'vichaar_splash_seen';

const SplashScreen = () => {
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return false;
    return sessionStorage.getItem(STORAGE_KEY) !== '1';
  });
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Hold briefly, then fade out fast
    const t1 = window.setTimeout(() => setFade(true), 900);
    const t2 = window.setTimeout(() => {
      setShow(false);
      sessionStorage.setItem(STORAGE_KEY, '1');
      document.body.style.overflow = '';
      document.documentElement.style.scrollBehavior = '';
    }, 1300);
    
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = '';
      document.documentElement.style.scrollBehavior = '';
    };
  }, [show]);

  if (!show) return null;

  return (
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: 'linear-gradient(135deg, #0a0e16 0%, #0f1219 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: fade ? 0 : 1,
          transition: 'opacity 0.4s ease-out',
          pointerEvents: 'none',
        }}
      >
        {/* Subtle background element */}
        <div
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
      {/* Logo */}
      <img
        src={vichaarLogo}
        alt="Vichaar Co"
        loading="eager"
        decoding="sync"
        style={{
          height: 'clamp(60px, 10vw, 100px)',
          width: 'auto',
          opacity: fade ? 0 : 1,
          transition: 'opacity 0.8s ease-out 0.1s',
          position: 'relative',
          zIndex: 1,
          filter: 'drop-shadow(0 0 40px rgba(201,168,76,0.4))',
        }}
      />
    </div>
  );
};

export default SplashScreen;
