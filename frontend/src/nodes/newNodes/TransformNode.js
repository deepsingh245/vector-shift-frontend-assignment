import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode';

export const TransformNode = ({ id, data }) => {
    const [transformType, setTransformType] = useState(data?.transformType || 'uppercase');

    const handles = [
        { type: 'target', position: Position.Left, id: `${id}-input` },
        { type: 'source', position: Position.Right, id: `${id}-output` },
    ];

    return (
        <BaseNode id={id} data={data} title="Transform" handles={handles}>
            <div className="flex flex-col gap-2 p-1">
                <label className="text-xs text-vs-text-secondary">Type</label>
                <select
                    value={transformType}
                    onChange={(e) => setTransformType(e.target.value)}
                    className="bg-vs-bg-dark border border-vs-border rounded px-2 py-1 text-xs text-gray-200 focus:outline-none focus:border-vs-primary"
                >
                    <option value="uppercase">UpperCase</option>
                    <option value="lowercase">LowerCase</option>
                    <option value="trim">Trim</option>
                    <option value="reverse">Reverse</option>
                </select>
            </div>
        </BaseNode>
    );
};
