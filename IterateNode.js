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

function IterateNode(root, target, path = []) {
    const { value, children } = root
    if(value === target) return path
    for(let i = 0, len = children.length; i< len; i++) {
        let result = IterateNode(children[i], target, [...path, i]) 
        if(result) return result
    }
}
const target = root.children[0].children[1].children[0].children[0].value
console.log(IterateNode(root, target))
  