//Problem 2
import { Student } from "../types";
const arrayOfStudents = (names: string[], ages: number[]) => {
    const studentArr: Student[] = [];
    for (let i = 0; i < names.length; i++) {
        const student: Student = {
            name: names[i],
            age: ages[i]
        };
        studentArr.push(student);
    };
    return studentArr;
}
export default arrayOfStudents; // Uncomment this line when done writing the function
