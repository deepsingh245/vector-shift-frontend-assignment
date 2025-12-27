// outputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-value` }
  ];

  return (
    <BaseNode id={id} data={data} title="Output" handles={handles}>
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
            value={outputType}
            onChange={handleTypeChange}
            className="mt-1 block w-full px-2 py-1 bg-vs-bg-dark border border-vs-border rounded text-gray-200 text-sm focus:outline-none focus:border-vs-primary"
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}
