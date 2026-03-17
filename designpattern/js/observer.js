function Subject() {
  this.observers = []; //array of observer function 
}
Subject.prototype={
    subscribe:function(fn){
        this.observers.push(fn);
    },
    unsubscribe:function(fnToRemove){
        this.observers=this.observers.filter(fn=>{
            if(fn!=fnToRemove){
                return fn;
            }
        })
    },
    fire:function(){
        this.observers.forEach(fn=>{
             fn.call()
        })
    }
}

function Observer1(){
    console.log('Observer 1 firing!');
}
function Observer2(){
    console.log('Observer 2 firing!');
}
function Observer3(){
    console.log('Observer 3 firing!');
}

const subject=new Subject();

subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.subscribe(Observer3);

subject.fire();
subject.unsubscribe(Observer1);
subject.unsubscribe(Observer2);
subject.unsubscribe(Observer3);

subject.fire();
