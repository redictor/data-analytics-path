import React from 'react';
import AccessGate from '@site/src/components/AccessGate';

export default function Root({children}) {
  return <AccessGate>{children}</AccessGate>;
}