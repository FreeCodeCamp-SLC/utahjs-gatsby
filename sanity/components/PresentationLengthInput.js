/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function createPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

const durationOptions = [];
for (let i = 15; i <= 120; i += 15) {
  durationOptions.push(i);
}

export default function PresentationLengthInput({
  type,
  value,
  onChange,
  inputComponent,
}) {
  return (
    <div>
      <h2>
        {type.title} - {value} minutes
      </h2>
      <p>{type.description}</p>
      <select
        type={type.name}
        value={value}
        onChange={(event) => onChange(createPatchFrom(event.target.value))}
        ref={inputComponent}
      >
        {durationOptions.map((number) => (
          <option value={number} key={number}>
            {number}
          </option>
        ))}
      </select>
    </div>
  );
}

PresentationLengthInput.focus = function () {
  this._inputElement.focus();
};
