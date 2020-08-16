const path = require('path');
const fs = require('fs');

function storeNewNote(body, notesArr) {
    notesArr.push(body);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArr, null, 2)
    );
    
    return notesArr;
}

module.exports = storeNewNote;