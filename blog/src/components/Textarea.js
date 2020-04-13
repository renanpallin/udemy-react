import React from 'react';

export default function Textarea({
  id,
  label,
  value,
  onChangeText = () => {},
  rows = '5',
}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <textarea
        className="form-control"
        id={id}
        rows={rows}
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
      />
    </div>
  );
}
