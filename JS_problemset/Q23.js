// sorting array using linked list 

class Node {
    // constructor
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(ele) {
        let temp = new Node(ele);
        // console.log(temp.val);
        if (this.head == null) {
            this.head = temp;
        }else if(ele <  this.head.val){
            temp.next = this.head;
            this.head = temp;
        }
        else {
            let it = this.head;
            while (it.next != null && it.next.val < ele) {
                it = it.next;
            }
            if (it.next == null) {
                it.next = temp;
            } else {
                temp.next = it.next;
                it.next = temp;
            }

        }

    }
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.val + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}

//  creating unsorted array

let arr = [4,2,1,6,9,7,8,3,5];
let ll = new LinkedList();

for(ele of arr){
    ll.insert(ele);
}
ll.printList();

