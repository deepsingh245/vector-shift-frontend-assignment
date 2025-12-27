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

            // Format the message
            const message = `Nodes: ${data.num_nodes} | Edges: ${data.num_edges} | DAG: ${data.is_dag ? 'Yes' : 'No'}`;

            // Ideally use Snackbar, but since SubmitButton might not be top-level, we can try to use it locally or just alert if snackbar positioning is tricky without a portal.
            // Using alert as requested "create an alert" (could mean window.alert or custom UI).
            // Let's try to use the Snackbar we just built for a better UI, rendered right here.
            setSnackbar({ isVisible: true, message, type: 'success' });

            // Also showing a window.alert as a fallback or explicit request satisfaction if UI is missed
            // window.alert(message); 

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
