// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={`${type} cursor-grab min-w-[80px] h-[60px] flex items-center justify-center flex-col bg-vs-card-bg rounded-lg border border-vs-border hover:border-vs-primary hover:shadow-vs-glow transition-all duration-300`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
    >
      <span className="text-gray-200 text-sm font-medium">{label}</span>
    </div>
  );
};
