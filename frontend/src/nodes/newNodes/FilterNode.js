import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode';

export const FilterNode = ({ id, data }) => {
    const [condition, setCondition] = useState(data?.condition || 'contains');

    const handles = [
        { type: 'target', position: Position.Left, id: `${id}-input` },
        { type: 'source', position: Position.Right, id: `${id}-true`, style: { top: '30%' } },
        { type: 'source', position: Position.Right, id: `${id}-false`, style: { top: '70%' } },
    ];

    return (
        <BaseNode id={id} data={data} title="Filter" handles={handles}>
            <div className="flex flex-col gap-2 p-1">
                <label className="text-xs text-vs-text-secondary">Condition</label>
                <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="bg-vs-bg-dark border border-vs-border rounded px-2 py-1 text-xs text-gray-200 focus:outline-none focus:border-vs-primary"
                >
                    <option value="contains">Contains</option>
                    <option value="equals">Equals</option>
                    <option value="starts_with">Starts With</option>
                </select>
                <div className="flex justify-between text-[10px] text-vs-text-secondary mt-1">
                    <span>Target</span>
                    <div className="flex flex-col items-end">
                        <span className="text-green-400">True</span>
                        <span className="text-red-400">False</span>
                    </div>
                </div>
            </div>
        </BaseNode>
    );
};
