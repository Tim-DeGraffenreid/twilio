const fs = require('fs');
const path = require('path');

// Path to the Psalms text file
const filePath = path.join(__dirname, 'Psalms.txt');
const outputJsonPath = path.join(__dirname, 'Complete_Psalms_JSON.json');

// Read the file content
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const lines = data.trim().split('\n');
    const psalms = {};
    const verseCounts = [];
    let currentChapter = null;
    let chapterContent = [];

    lines.forEach(line => {
        if (line.includes(':')) {
            const firstSpaceIndex = line.indexOf(' ');
            const chapterVerse = line.substring(0, firstSpaceIndex);
            const verseText = line.substring(firstSpaceIndex + 1);
            const [chapter, verse] = chapterVerse.split(':');
            const chapterNumber = parseInt(chapter, 10);

            if (chapterNumber !== currentChapter) {
                if (currentChapter !== null) {
                    psalms[`Chapter ${currentChapter}`] = chapterContent;
                    verseCounts.push(chapterContent.length);
                }
                currentChapter = chapterNumber;
                chapterContent = [];
            }

            chapterContent.push(verseText.trim());
        }
    });

    if (currentChapter !== null) {
        psalms[`Chapter ${currentChapter}`] = chapterContent;
        verseCounts.push(chapterContent.length);  // For the last chapter
    }

    const completePsalmsJson = {
        version: 'King James Version',
        name: 'Psalms',
        chapterCount: Object.keys(psalms).length,
        totalVerses: verseCounts.reduce((accumulator, currentValue) => accumulator + currentValue, 0),
        psalms: Object.values(psalms),
        verseCounts: verseCounts
    };

    fs.writeFile(outputJsonPath, JSON.stringify(completePsalmsJson, null, 4), 'utf8', (err) => {
        if (err) {
            console.error('Error writing JSON to the file:', err);
            return;
        }
        console.log('File has been saved:', outputJsonPath);
    });
});
