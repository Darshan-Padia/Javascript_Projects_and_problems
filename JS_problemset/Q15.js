    // merging two sorted list using linked list


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
            } else {
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

    // first lets test the above logic by creating a linked list and print it
    let ll = new LinkedList();
    

// merging to sorted linked lists

const mergeTwoSortedArrays = (l1,l2) => {
    let i ;
    for (i = 0; i < (l1.length && l2.length) ; i++) {
        // const element = l1[i];
        ll.insert(l1[i]);
        ll.insert(l2[i]);
        
    }
    if (i<l1.length) {
        while (i++<l1.length) {
            ll.insert(l1[i]);
        }
    }else if(i < l2.length){
        while (i++<l2.length) {
            ll.insert(l2[i]);
        }
    }
    ll.printList();
}

// let l1 = [1,2,4];
// let l2 = [1,3,4];
// mergeTwoSortedArrays(l1,l2);

// lets check by a complex example
l1 = [1,2,4,5,6,7,8,9,10];
l2 = [1,3,4,5,6,7,8,9,10];
mergeTwoSortedArrays(l1,l2);


