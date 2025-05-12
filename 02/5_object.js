const tutor = {
    name: "Bahadur",
    subject: "Computer Science",
    age: 30,
    experience: " 5 year ",
    salary : 68000
}
console.log(tutor);
console.log(tutor.salary)

const { name, subject, age, experience, salary } = tutor;
console.log(name)
console.log(subject)
console.log(age)

console.log(experience)

const {experience: ex } = tutor
console.log(ex.trim(" "))