function Fedex(){
    this.calculate=package=>{
        // fedex calculations
        return 2.45;
    }
}
function UPS(){
    this.calculate=package=>{
        // ups calculations
        return 1.56;
    }
}
function USPS(){
    this.calculate=package=>{
        // usps calculations
        return 3.45;
    }
}
const fedex=new Fedex();
const ups=new UPS();
const usps=new USPS();
console.log(fedex,ups,usps);
const package={
    from:'Alabama',
    to:'Georgia',
    weight:1.45
}

console.log(fedex.calculate(package));
console.log(ups.calculate(package));
console.log(usps.calculate(package));


function Shipping(){
    this.company='';
    this.setStrategy=(company)=>{
        this.company=company;
    }
    this.calculate=package=>{
        return this.company.calculate(package);
    }
}

const shipping =new Shipping();
shipping.setStrategy(fedex);
const abc=shipping.calculate(package);
console.log(abc);

