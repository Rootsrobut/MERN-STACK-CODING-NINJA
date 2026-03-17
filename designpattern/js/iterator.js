const items=[1,'devsage',false,1.23];

function Iterator(items){
    this.items=items;
    this.index=0;
}

// Iterator.prototype={
//     hasNext:function (){
//         return this.index < this.items.length;
//     },
//     next:function (){
//         return this.items[this.index++];
//     },
// }


Iterator.prototype={
    hasprev:function (){
        return this.index>=0;
    },
    prev:function (){
        return this.items[this.index--];
    },

}

// const iter=new Iterator(items);
// console.log(iter);
// console.log(iter.next());
// console.log(iter.hasNext());
// console.log(iter.next());

// while(iter.hasNext()){
//     console.log(iter.next());
// }


// while(iter.hasprev()){
//     console.log(iter.prev());
// }
