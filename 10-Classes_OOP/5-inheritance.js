class Teacher{
    constructor(name){
        this.name = name;
    }
    teach() {
        console.log(`${this.name} teaches very well.`);
    }
}
class InCharge extends Teacher {
    constructor(name, grade, salary){
        super(name); // Call the constructor of the parent class
        this.grade = grade;
        this.salary = salary;
    }
    manage() {
        console.log(`${this.name} manages grade ${this.grade} nicely and earns ${this.salary} per month.`);
    }
}
const teacher = new Teacher("Elizabeth");
const tutor = new Teacher("Alice", "7th", "50000");
teacher.teach();
tutor.teach();
// teacher.manage();
// tutor.manage();

console.log(Teacher);
console.log(InCharge);
console.log(teacher);
console.log(tutor);
console.log(teacher instanceof Teacher); // true
console.log(tutor instanceof Teacher); // true
console.log(tutor instanceof InCharge); // false
console.log(teacher instanceof InCharge); // false
console.log(InCharge instanceof Teacher); // true
console.log(InCharge.prototype instanceof Teacher); // true
console.log(InCharge.prototype.constructor === InCharge); // true
console.log(InCharge.prototype.constructor === Teacher); // false

console.log(Teacher === InCharge); // false
console.log(teacher === tutor); // false
console.log(Teacher === teacher)
console.log(InCharge === tutor); // false
console.log(teacher.constructor === Teacher); // true
console.log(tutor.constructor === InCharge); // true