function owner(ceo){
    this.ceo = ceo;
    console.log(`Owner of the company is ${this.ceo}`);
}
function company(ceo, companyName, value){
    owner.call(this, ceo);

    this.companyName = companyName;
    this.value = value;
}
const Business = new company("John Doe", "Tech Innovations", 5000000);
console.log(Business)