// Problem 6
import { idText } from "typescript";
import { User } from "../types";
const verifyUser = (user: User) => {

    const defaultAttrs = ['id', 'name'];
    const missingAttrs = [];
    if (user === null) { // user is null
        defaultAttrs.push('userData', 'address', 'street', 'city');
        return defaultAttrs
    }

    for (const attr of defaultAttrs) {
        if (!(attr in user)) {
            missingAttrs.push(attr);
        }
    }
    if ('address' in user) {

        if (!('street' in user.address)) {
            missingAttrs.push('street')
        }
        if (!('city' in user.address)) {
            missingAttrs.push('city')
        }
    } else {
        missingAttrs.push('address', 'city', 'street') 
    }
    if (missingAttrs.length === 0) {
        return user
    }

    return missingAttrs
}
export default verifyUser;
