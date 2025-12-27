// inputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const handles = [
    { type: 'source', position: Position.Right, id: `${id}-value` }
  ];

  return (
    <BaseNode id={id} data={data} title="Input" handles={handles}>
      <div className="flex flex-col gap-2">
        <label className="text-xs text-vs-text-secondary font-medium">
          Name
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            className="mt-1 block w-full px-2 py-1 bg-vs-bg-dark border border-vs-border rounded text-gray-200 text-sm focus:outline-none focus:border-vs-primary"
          />
        </label>
        <label className="text-xs text-vs-text-secondary font-medium">
          Type
          <select
            value={inputType}
            onChange={handleTypeChange}
            className="mt-1 block w-full px-2 py-1 bg-vs-bg-dark border border-vs-border rounded text-gray-200 text-sm focus:outline-none focus:border-vs-primary"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}
