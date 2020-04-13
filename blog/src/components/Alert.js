import React from 'react';

export const SeverityEnum = {
    PRIMARY: 'primary',
    WARNING: 'warning',
}
export default function Alert({ severity, children }) {
  return (
    <div className={`alert alert-${severity}`} role="alert">
      {children}
    </div>
  );
}
