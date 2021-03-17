/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node 
* at which the intersection of two linked lists begins, 
* or null if there is no such intersection.
* 
* Example:
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return D 
* as the node of intersection.
* 
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return NULL 
* as there is no point of intersection.
* 
*    A → B → C → D
*    X → Y → Z
* 
*/

// Helper function (do not edit)
function Node(val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}
function getLinkedListLength(list) {
  return list.next === null ? 1 : 1 + getLinkedListLength(list.next);
}

function linkedListIntersection(list1, list2) {
  const length1 = getLinkedListLength(list1);
  const length2 = getLinkedListLength(list2);
  let diff = Math.abs(length2 - length1)
  let long = length1 >= length2 ? list1 : list2;
  let short = length1 >= length2 ? list2 : list1;
  while (long && short) {
    if (diff > 0) {
      long = long.next;
      diff--;
      continue
    }
    if (long === short) {
      return long;
    } else {
      long = long.next;
      short = short.next;
    }
  }
  return null;

}

