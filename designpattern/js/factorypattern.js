function Developer(name){
   this.name=name;
   this.type='Developer';
}
function Tester(name){
    this.name=name;
    this.type='Tester';
}
function EmployeeFactory(){
   this.create=(name,type)=>{
     switch(type){
        case 1:
            return new Developer(name);
            break;
        case 2:
            return new Tester(name);
            break;    
     }
   }
}
function say(){
    console.log('Hi, I am '+this.name+' and I am a '+this.type);
}
const employeeFactory=new EmployeeFactory();
const employees=[];
employees.push(employeeFactory.create('patrick',1));
employees.push(employeeFactory.create('Sumit Kumar',2));
employees.forEach((emp)=>{
    say.call(emp);
})


// Output:
// Hi, I am patrick and I am a Developer
// Hi, I am Sumit Kumar and I am a Tester
// In this example, we have a factory that creates different types of employees (Developer and Tester) based on the type passed to it.
// The factory method create() takes the name and type as arguments and returns an instance of the corresponding class.
// The say() method is used to print the name and type of the employee.
// This pattern is useful when you want to create objects without specifying the exact class of object that will be created.
// It allows you to create objects in a more flexible and reusable way.

// The Factory Pattern is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
// It is used when the exact type of the object to be created is not known until runtime.
// The Factory Pattern is useful when:

// 1. You want to create objects without specifying the exact class of object that will be created.
// 2. You want to create objects in a more flexible and reusable way.
// 3. You want to encapsulate the object creation process and hide the details from the client code.
// 4. You want to provide a way to create objects that are part of a larger system.
// 5. You want to create objects that are part of a family of related or dependent objects.
// 6. You want to create objects that are part of a complex object structure.
// 7. You want to create objects that are part of a system that is designed to be extensible and flexible.
// 8. You want to create objects that are part of a system that is designed to be maintainable and scalable.
// 9. You want to create objects that are part of a system that is designed to be testable and debuggable.
// 10. You want to create objects that are part of a system that is designed to be reusable and modular.



