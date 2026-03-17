function Process(state){
    this.state=state;
}
// The singleton pattern is a design pattern that restricts the instantiation of a class to one "single" object.
// Class should be sealed 
const Singleton=(function(){
    function ProcessManager(){
        this.numProcess=0;
    }
    let pManager;
    function createProcessManager(){
        pManager=new ProcessManager();
        return pManager;
    }
    return {
        getProcessManager:()=>{
            if(!pManager){
                pManager=createProcessManager();
            }
            return pManager;
        }
    }
})();
console.log(Singleton);
// Throughout the lifetime of the application the instance will remain same
// Instance should be requested instead of created
const processManager=Singleton.getProcessManager();
const processManager2=Singleton.getProcessManager();
console.log(processManager)
console.log(processManager2)
console.log(processManager===processManager2)