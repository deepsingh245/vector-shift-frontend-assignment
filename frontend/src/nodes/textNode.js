// textNode.js

import { useState, useRef, useEffect } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [handles, setHandles] = useState([]);
  const textareaRef = useRef(null);

  // Auto-resize logic
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset height to measure
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  // Dynamic variable parsing
  useEffect(() => {
    const regex = /{{([a-zA-Z_$][a-zA-Z0-9_$]*)}}/g;
    let match;
    const variables = new Set();
    while ((match = regex.exec(currText)) !== null) {
      variables.add(match[1]);
    }

    // Generate handle objects
    const variableHandles = Array.from(variables).map((variable, index) => ({
      type: 'target',
      position: Position.Left,
      id: `${id}-${variable}`,
      style: { top: `${(index + 1) * 20 + 50}px` } // Simple offset strategy
    }));

    // Add standard output handle
    setHandles([
      ...variableHandles,
      { type: 'source', position: Position.Right, id: `${id}-output` }
    ]);
  }, [currText, id]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode id={id} data={data} title="Text" handles={handles}>
      <div className="flex flex-col text-xs text-vs-text-secondary font-medium min-h-[50px]">
        <label className="mb-1">Text</label>
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          className="w-full px-2 py-1 bg-vs-bg-dark border border-vs-border rounded text-gray-200 text-sm focus:outline-none focus:border-vs-primary resize-none overflow-hidden"
          rows={1}
        />
      </div>
    </BaseNode>
  );
}
