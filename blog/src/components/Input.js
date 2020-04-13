import React from 'react';

export default function Input({ id, label, value, onChangeText, ...rest }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        className="form-control"
        id={id}
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        {...rest}
      />
    </div>
  );
}
