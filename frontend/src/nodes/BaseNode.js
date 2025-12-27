// BaseNode.js
import { Handle } from 'reactflow';
import { useStore } from '../store';

export const BaseNode = ({ id, data, title, children, handles = [] }) => {
    const removeNode = useStore((state) => state.removeNode);

    return (
        <div className="min-w-[200px] w-full max-w-[600px] bg-vs-card-bg border border-vs-border rounded-xl shadow-lg hover:shadow-vs-glow transition-shadow duration-300 relative group">
            {/* Handles */}
            {handles.map((handle, index) => (
                <Handle
                    key={`${id}-${handle.id}-${index}`}
                    type={handle.type}
                    position={handle.position}
                    id={handle.id}
                    style={handle.style}
                    className="w-3 h-3 bg-vs-primary border-2 border-vs-bg-dark"
                />
            ))}

            {/* Header */}
            <div className="px-4 py-3 border-b border-vs-border/50 flex justify-between items-center bg-vs-card-bg rounded-t-xl">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wide">{title}</h3>
                <button
                    onClick={() => removeNode(id)}
                    className="text-vs-text-secondary hover:text-red-500 transition-colors p-1 rounded hover:bg-white/5"
                    title="Delete Node"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Content */}
            <div className="px-4 py-4 space-y-3">
                {children}
            </div>
        </div>
    );
};
