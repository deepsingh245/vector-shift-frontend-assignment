import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode';

export const TimerNode = ({ id, data }) => {
    const [duration, setDuration] = useState(data?.duration || 1000);

    const handles = [
        { type: 'target', position: Position.Left, id: `${id}-trigger` },
        { type: 'source', position: Position.Right, id: `${id}-delayed` },
    ];

    return (
        <BaseNode id={id} data={data} title="Timer" handles={handles}>
            <div className="flex flex-col gap-2 p-1">
                <label className="text-xs text-vs-text-secondary">Duration (ms)</label>
                <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="bg-vs-bg-dark border border-vs-border rounded px-2 py-1 text-xs text-gray-200 focus:outline-none focus:border-vs-primary"
                />
                <div className="text-[10px] text-vs-text-secondary mt-1">
                    Trigger -&gt; Delay -&gt; Start
                </div>
            </div>
        </BaseNode>
    );
};
