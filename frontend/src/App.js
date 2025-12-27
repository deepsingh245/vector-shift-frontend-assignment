import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="min-h-screen bg-vs-bg-dark flex flex-col" style={{ height: '100vh' }}>
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-vs-border/50 bg-vs-card-bg shadow-sm z-50 relative">
        <h1 className="text-xl font-bold text-gray-100 tracking-tight flex items-center gap-2">
          <span className="text-vs-primary">✦</span> Pipeline Builder
        </h1>
        <SubmitButton />
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Toolbar floating or fixed at top */}
        <div className="border-b border-vs-border/30 bg-vs-bg-dark/50 backdrop-blur-sm p-4 z-40">
          <PipelineToolbar />
        </div>

        {/* Canvas Area */}
        <div className="flex-1 relative">
          <PipelineUI />
        </div>
      </main>
    </div>
  );
}

export default App;
