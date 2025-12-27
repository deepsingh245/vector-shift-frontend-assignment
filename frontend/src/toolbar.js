// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="p-4">
            <div className="mt-5 flex flex-wrap gap-4">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='transform' label='Transform' />
                <DraggableNode type='api' label='API' />
                <DraggableNode type='note' label='Note' />
                <DraggableNode type='timer' label='Timer' />
            </div>
        </div>
    );
};
