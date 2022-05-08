import React from 'react';

const Toggle = ({ checked, onChange }) => (
  <span className="toggle-control">
    <input
      className="dmcheck"
      checked={checked}
      label="Dark Mode"
      id="dmcheck"
      onChange={onChange}
      type="checkbox"
    />
    <label htmlFor="dmcheck" />
  </span>
);

export default Toggle;
