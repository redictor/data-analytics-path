import React, { useEffect } from 'react';
import AccessGate from '@site/src/components/AccessGate';
import mediumZoom from 'medium-zoom';
import { useLocation } from '@docusaurus/router';

export default function Root({ children }) {
  const location = useLocation();

  useEffect(() => {
    const zoom = mediumZoom('[data-zoomable]', {
      margin: 24,
      background: 'rgba(0, 0, 0, 0.9)',
    });

    return () => {
      zoom.detach();
    };
  }, [location.pathname]);

  return <AccessGate>{children}</AccessGate>;
}