from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from collections import defaultdict, deque

app = FastAPI()

# Allow CORS for local frontend development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"ping": "pong"}

def is_dag(nodes, edges) -> bool:
    graph = defaultdict(list)
    indegree = defaultdict(int)

    node_ids = {n.get("id") for n in nodes if "id" in n}

    # Initialize indegree for all nodes
    for node_id in node_ids:
        indegree[node_id] = 0

    for edge in edges:
        source = edge.get("source")
        target = edge.get("target")
        
        # Only consider edges where both source and target are known nodes
        if source in node_ids and target in node_ids:
            graph[source].append(target)
            indegree[target] += 1

    # Queue of nodes with indegree 0
    queue = deque([n for n in node_ids if indegree[n] == 0])
    visited_count = 0

    while queue:
        node = queue.popleft()
        visited_count += 1
        
        for neighbor in graph[node]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    # If we visited all nodes, it's a DAG
    return visited_count == len(node_ids)

@app.post("/pipelines/parse")
async def parse_pipeline(request: Request):
    data = await request.json()
    nodes = data.get("nodes", [])
    edges = data.get("edges", [])
    
    num_nodes = len(nodes)
    num_edges = len(edges)
    is_dag_result = is_dag(nodes, edges)
    
    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag_result
    }
