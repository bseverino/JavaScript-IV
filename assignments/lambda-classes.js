// CODE here for your Lambda Classes

class Person{
    constructor(perAttr){
        this.name = perAttr.name,
        this.age = perAttr.age,
        this.location = perAttr.location
    }

    speak(){
        return `Hello, my name is ${this.name}. I am from ${this.location}.`
    }
}

class Instructor extends Person{
    constructor(instAttr){
        super(instAttr);
        this.specialty = instAttr.specialty,
        this.favLanguage = instAttr.favLanguage,
        this.catchPhrase = instAttr.catchPhrase
    }

    demo(subject){
        return `Today, we are learning about ${subject}.`;
    }

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`;
    }

    modifyGrade(student){
        student.grade += (Math.floor(Math.random() * 30) - 20);
    }
}

class Student extends Person{
    constructor(stuAttr){
        super(stuAttr);
        this.previousBackground = stuAttr.previousBackground,
        this.className = stuAttr.className,
        this.favSubjects = stuAttr.favSubjects,
        this.grade = stuAttr.grade
    }

    listsSubjects(){
        this.favSubjects.forEach(function(subject){
            console.log(subject);        
        })
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }

    graduate(){
        if (this.grade >= 70) {
            return `${this.name} has graduated with a grade of ${this.grade}%!`;
        } else {
            return `${this.name} received a grade of ${this.grade}% and did not graduate...`;
        }
    }
}

class ProjectManager extends Instructor{
    constructor(pmAttr){
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName,
        this.favInstructor = pmAttr.favInstructor
    }

    standUp(channel){
        return `${this.name} announces to ${channel}: "@channel standy times!"`;
    }

    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}

const instructorOne = new Instructor({
    name: 'Brit',
    age: 30,
    location: 'Canada',
    specialty: 'Web Development',
    favLanguage: 'JavaScript',
    catchPhrase: 'Hello'
})

const studentOne = new Student({
    name: 'B',
    age: 27,
    location: 'Connecticut',
    previousBackground: 'art school',
    className: 'WEB25',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    grade: 80
})

const pmOne = new ProjectManager({
    name: 'Jimmy',
    age: 25,
    location: 'USA',
    specialty: 'Software Development',
    favLanguage: 'React',
    catchPhrase: 'Hi',
    gradClassName: '???',
    favInstructor: '???'
})

console.log(instructorOne.speak());
console.log(instructorOne.grade(studentOne, 'Advanced CSS'));
studentOne.listsSubjects();
console.log(studentOne.PRAssignment('JavaScript IV'));
console.log(studentOne.sprintChallenge('JavaScript Fundamentals'));
console.log(pmOne.standUp('web25_jimmy'));
console.log(pmOne.debugsCode(studentOne, 'Javascript II'));
instructorOne.modifyGrade(studentOne);
console.log(studentOne.graduate());
