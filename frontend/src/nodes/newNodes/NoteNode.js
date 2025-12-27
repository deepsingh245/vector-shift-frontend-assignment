import { useState } from 'react';
import { BaseNode } from '../BaseNode';

export const NoteNode = ({ id, data }) => {
    const [text, setText] = useState(data?.text || 'Type your note here...');

    return (
        <BaseNode id={id} data={data} title="Note" handles={[]}>
            <div className="p-1 h-32">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full h-full bg-yellow-100/10 border border-yellow-500/30 rounded px-2 py-1 text-xs text-yellow-100 focus:outline-none focus:border-yellow-500 resize-none"
                    placeholder="Enter note..."
                />
            </div>
        </BaseNode>
    );
};
