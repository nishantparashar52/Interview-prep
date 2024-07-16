class Node {
    constructor(value) {
        this.value = value
        this.children = {}
        this.endOfWord = false
    }
}


class Trie {
    constructor() {
        this.root = new Node(null)
    }
    add(word) {
        let current = this.root
        for(let i of word) {
            if(current.children[i] === undefined) {
                current.children[i] = new Node(i)
            }
            current = current.children[i]
        }
        current.endOfWord = true;
    }
}

const T = new Trie()
T.add('nishant')
T.add('urvashi')
T.add('reevansh')
