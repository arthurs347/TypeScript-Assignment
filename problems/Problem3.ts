// Problem 3
import { Professor, Class, Student } from "../types";
const studentsTaughtByProf = (professor: Professor) => {
    const allStudents = [];
    for (const profClass of professor.classes) {
        for (const student of profClass.students)
            allStudents.push(student);
    };
    const stdsSortedByAge =  allStudents.sort((std1, std2) => std1.age - std2.age);
    return stdsSortedByAge.map((std) => std.name)
};
export default studentsTaughtByProf; // Uncomment this line when done writing the function
