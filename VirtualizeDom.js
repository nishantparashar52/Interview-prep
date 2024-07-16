const element = {
    tagName: 'DIV',
    attributes: [
      { name: 'class', value: 'test-class' },
      { name: 'id', value: 'test-id' }
    ],
    children: [
      {
        tagName: 'P',
        attributes: [
          { name: 'class', value: 'test-class' }
        ],
        children: []
      }
    ]
  };
  

  function virtualize(element) {
    // your code here
    const obj = {
      type: element.tagName.toLowerCase(),
      props: {}
    }
  
    element.attributes?.forEach(attr => {
      obj.props[attr.name] = attr.value
    })
  
    const children = Array.from(element.children)
    obj.props['children'] = children.map(node => virtualize(node))
    return obj
  }
  // Call the virtualize function
  const virtualElement = virtualize(element);
  console.log(virtualElement);