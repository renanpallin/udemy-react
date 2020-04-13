import React from 'react';

export default function Switch({ id, label, checked, onToggle }) {
  return (
    <div className="custom-control custom-switch">
      <input
        type="checkbox"
        className="custom-control-input"
        id={id}
        checked={checked}
        onChange={(e) => onToggle(e.target.checked)}
      />
      <label className="custom-control-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
