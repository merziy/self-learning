const readline = require('readline');
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const chalk = require('chalk');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log(chalk.blue('Creating a ZIP of "src/" and "dist/" directories.\n'));
const what_to_name = chalk.green('What do you want to name your zipfile');
const default_zip_name = 'build.zip';
const eg = chalk.gray('(default: ') + default_zip_name + chalk.gray(')') + '?';

rl.question(`${what_to_name} ${eg} `, zip_file => {
    zip_file = String(zip_file).trim();

    if (!zip_file) {
        // Use a default if no answer was given in the script
        zip_file = default_zip_name;
    } else if (!zip_file.endsWith('.zip')) {
        // Append '.zip' if it was not entered
        zip_file += '.zip';
    }

    let zip_filepath = path.resolve(__dirname, '../', zip_file);
    let output = fs.createWriteStream(zip_filepath);
    let archive = archiver('zip', {
        zlib: { level: 9 },
    });

    output.on('close', function() {
        console.log(`Wrote ${archive.pointer()} total bytes`);
        console.log(`to "${chalk.green(zip_filepath)}"`);
    });

    // Create pipe from archive to filestream
    archive.pipe(output);

    // Zip the 'src/' and 'dist/' directory
    archive.directory(path.resolve(__dirname, '../src/'), 'src');
    archive.directory(path.resolve(__dirname, '../dist/'), 'dist');

    // We've added all files to the archive, finalize and close our stream when all the data has been piped
    archive.finalize();

    // Close the readline interface
    rl.close();
});
