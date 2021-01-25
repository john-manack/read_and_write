const fs = require("fs");

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Input file: ", inputFile => {
        fs.readFile(inputFile, "utf8", (error, data) => {
            const upperCaseData = data.toUpperCase();
            if (error) {
                console.log(error.message);
                readline.close();
            } else {
                readline.question("Output file: ", outputFile => {
                    fs.writeFile(outputFile, upperCaseData, error => {
                        readline.close();
                        if (error) {
                            console.log(error.message);
                        } else {
                            console.log(`The file ${outputFile} should now contain the text ${upperCaseData}.`)
                        }
                    })
                })
            }
        })
})