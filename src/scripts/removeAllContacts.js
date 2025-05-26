
import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    try { 

        const empty = [];

        await writeContacts(empty);
        console.log('все видалено')
    }
   catch (error) { console.error('Помилка при видаленні контактів:', error); }
};

removeAllContacts();
