 import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
    try {
        const contacts = await readContacts();

        for (let i = 0; i < number; i += 1){
            const newContact = createFakeContact();
            contacts.push(newContact);
        }

        await writeContacts(contacts);
        console.log(`${number} контакт(ів) успішно додано.`);
        
    } catch(error) {
        console.error(error.message);
    }
    

 };

generateContacts(11111);
