//! Структуры данных - способ организации данных, хранения и управления, для оптимальной работы с данными

// Структуры данных в js
// Array -(список)
// Object 
// Set
// Map

// Linled List - связанный список
class Node {
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}
class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
    }

    append(data) {
        const node = new Node(data)

        if(this.tail) {
            this.tail.next = node
        }
        if(!this.head){
            this.head = node
        }

        this.tail = node
    }
    prepend(data) {
        const node = new Node(data, this.head)

        this.head = node

        if(!this.tail) {
            this.tail = node
        }
    }
    toArray() {
        const output = []
        let current = this.head

        while(current){
            output.push(current)

            current = current.next
        }
        return output
    }
    find(data) {
        if(!this.head){
            return
        }

        let current = this.head

        while(current) {
            if(current.data = data){
                return current
            }
            current = current.next
        }
    }
}

const list = new LinkedList()

list.append('hi')
console.log(list);

list.append('mi')
console.log(list);


list.prepend('cry')
console.log(list);


console.log(list.toArray());

// list.append('Vadim')

console.log(typeof Infinity);

