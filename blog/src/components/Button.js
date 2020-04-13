import React from 'react';

export default function Button({ children }) {
  return (
    <button type="submit" className="btn btn-primary">
      {children}
    </button>
  );
}
