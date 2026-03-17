const user = {
  name: {
    firstName: "Akshay",
    middleName: "R.",
    lastName: "Saint",
    nickName: "Ash"
  },
  location: {
    country: "India",
    state: "Maharashtra",
    city: "Pune",
    address: {
      street: "MG Road",
      building: "Apt 101",
      postalCode: "411001"
    },
  },
  contact: {
    emails: {
      personal: "akshay@example.com",
      work: "a.saint@company.com"
    },
    phones: {
      mobile: "+91-9999999999",
      landline: "+91-20-12345678"
    }
  },
  job: {
    company: "Tech Solutions",
    position: "Software Engineer",
    department: "Development",
    skills: {
      primary: ["JavaScript", "React", "Node.js"],
      secondary: ["Python", "Django"]
    }
  },
  preferences: {
    language: "English",
    timezone: "Asia/Kolkata",
    currency: "INR"
  }
};




let finalObj={};
let magic=(obj,parent)=>{
    for(let key in obj){
        if(typeof obj[key]== 'object'){
             magic(obj[key],parent+'_'+key);
        }
        else{
            finalObj[parent+'_'+key]=obj[key];
        }
    }
}

magic(user,'user');

console.log(finalObj);