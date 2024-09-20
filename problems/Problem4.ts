// Problem 4
import { Student, Athlete } from "../types";
const allAthletes = (students: Athlete[], defSport: string) => {
    const athleteArr = []
    for (const student of students) {
        athleteArr.push({
            sport: defSport,
            ...student
        })
    }
    return athleteArr
}
export default allAthletes; // Uncomment this line when done writing the function
