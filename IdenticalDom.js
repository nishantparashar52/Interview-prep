function findPath(root, target, path = []) {
    if(root === target) return path
    for(let i = 0; i< root.children.length; i++) {
        const foundPath = findPath(root.children[i], target, [...path, i])
        if(foundPath) return foundPath
    }
}

const root = {
    value: 'root',
    children: [
      {
        value: 'child1',
        children: [
          {
            value: 'grandchild1',
            children: []
          },
          {
            value: 'grandchild2',
            children: [
                {
                    value: 'greatgrandchild1',
                    children: [
                        {
                            value: 'greatgreatgrandchild1',
                            children: []
                        }
                    
                    ]
                }
            ]
          }
        ]
      },
      {
        value: 'child2',
        children: []
      }
    ]
  };
  
  // Define the target node
  const target = root.children[0].children[1].children[0].children[0]; // grandchild2
  
  // Now you can call the findPath function
  const path = findPath(root, target);

  function findNode(root, path) {
    let node = root
    for(let i = 0; i < path.length; i++) {
        node = node.children[path[i]]
    }
    return node
  }

  function findCorrespondingNode(rootA, rootB, nodeA) {
    const path = [];
  
    while (nodeA !== rootA) {
      path.unshift(Array.prototype.indexOf.call(nodeA.parentNode.children, nodeA));
      nodeA = nodeA.parentNode;
    }
  
    let nodeB = rootB;
  
    for (const index of path) {
      nodeB = nodeB.children[index];
    }
  
    return nodeB;
  }

  // Create two identical DOM trees
const rootA = document.createElement('div');
const rootB = rootA.cloneNode(true);

// Add some children to rootA
for (let i = 0; i < 5; i++) {
  const child = document.createElement('div');
  child.textContent = `Child ${i}`;
  rootA.appendChild(child);
}

// Clone the children to rootB
rootB.innerHTML = rootA.innerHTML;

// Choose a target node from rootA
const target1 = rootA.children[2]; // Child 2

// Now you can call the findCorrespondingNode function
// const correspondingNode = findCorrespondingNode(rootA, rootB, target);

// console.log(correspondingNode.textContent); // Should log "Child 2"
  findCorrespondingNode(rootA, rootB, target1)