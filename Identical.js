const elem = {
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
  }
  
// tagName
//push attributes to the node
// iterate childrens
  function DOMCreate(element) {
    if(!element) return;
    const elem = {
        tag: element.tagName.toLowerCase(),
        attributes: {

        },
        children: []
    }
    element.attributes.forEach((item) => {
        const {name, value} = item
        elem.attributes[name] = value 
    })
    for(let i = 0, len = element.children.length; i< len;i++) {
        elem.children[i] = DOMCreate(element.children[i])
    }
    return elem;
  }

  console.log(DOMCreate(elem))