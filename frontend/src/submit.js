// submit.js
import { useState } from 'react';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { Button } from './ui/Button';
import { Snackbar } from './ui/Snackbar';

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
});

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);
    const [isLoading, setIsLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({ isVisible: false, message: '', type: 'info' });

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            if (!response.ok) {
                throw new Error('Failed to parse pipeline');
            }

            const data = await response.json();
            const message = `Nodes: ${data.num_nodes} | Edges: ${data.num_edges} | DAG: ${data.is_dag ? 'Yes' : 'No'}`;
            setSnackbar({ isVisible: true, message, type: 'success' });

        } catch (error) {
            console.error(error);
            setSnackbar({ isVisible: true, message: 'An error occurred while parsing the pipeline.', type: 'error' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button onClick={handleSubmit} isLoading={isLoading}>Submit</Button>
            <Snackbar
                message={snackbar.message}
                isVisible={snackbar.isVisible}
                type={snackbar.type}
                onClose={() => setSnackbar(prev => ({ ...prev, isVisible: false }))}
            />
        </div>
    );
}
