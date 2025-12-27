import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode';

export const ApiNode = ({ id, data }) => {
    const [url, setUrl] = useState(data?.url || 'https://api.example.com');
    const [method, setMethod] = useState(data?.method || 'GET');

    const handles = [
        { type: 'target', position: Position.Left, id: `${id}-params` },
        { type: 'source', position: Position.Right, id: `${id}-response` },
    ];

    return (
        <BaseNode id={id} data={data} title="API Request" handles={handles}>
            <div className="flex flex-col gap-2 p-1">
                <label className="text-xs text-vs-text-secondary">Method</label>
                <select
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                    className="bg-vs-bg-dark border border-vs-border rounded px-2 py-1 text-xs text-gray-200 focus:outline-none focus:border-vs-primary"
                >
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                </select>

                <label className="text-xs text-vs-text-secondary">URL</label>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="bg-vs-bg-dark border border-vs-border rounded px-2 py-1 text-xs text-gray-200 focus:outline-none focus:border-vs-primary"
                />
            </div>
        </BaseNode>
    );
};
