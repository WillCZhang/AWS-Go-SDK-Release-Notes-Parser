#!/usr/bin/env node

const fs = require('fs');
const program = require('commander');

// default names
const CHANGE_LOG_FILENAME = "CHANGELOG.md"
const PARSED_LOG_FILENAME = "parsed_log.md"
const DEFAULT_VERSION = "0.0.0"

function main() {
    parseCmd();
    startProcess();
}

function parseCmd() {
    program.description("AWS Go SDK Release Notes Parser\nGenerate a markdown file that shows release changes per module instead of per release date")
        .option("-l, --log [log]", "Path to release change log makrdown file, by default is "+CHANGE_LOG_FILENAME, CHANGE_LOG_FILENAME)
        .option("-o, --out [out]", "Path to store the output parsed markdown file, by default is "+PARSED_LOG_FILENAME, PARSED_LOG_FILENAME)
        .option("-v, --version [version]", "Parse changes after this version inclusive.", DEFAULT_VERSION)
        .parse(process.argv)
}

function startProcess() {
    try {
        let fileContent = fs.readFileSync(program.log, "utf8");
        let result = parse(fileContent, startVersion=program.version);
        let mdResult = generateMarkdown(result);
        fs.writeFileSync(program.out, mdResult, "utf8");
        console.log("Parsing finished, changes since version %s has been parsed and saved as %s.", program.version, program.out);
    } catch (e) {
        console.log("Error happend when parse release notes, error message:\n"+e);
    }
}

/**
 * parse the release note markdown file to abstract the releases that are after a given version
 * @param {string} data markdown file
 * @param {string} startVersion e.g. 1.14.2
 * @returns {object} in this format
        {
            "modelName" : {
                "mainUpdateText" : "subUpdateText (or empty string)"
            }
        }
 */
function parse(data, startVersion) {
    let result = {};
    let blockStartPoint = "Release v";
    let curr = data.indexOf(blockStartPoint);
    while (curr != -1) {
        let next = data.indexOf(blockStartPoint, curr + 1);
        let releaseNote = abstractReleaseNoteBlock(next, data, curr);
        let lines = releaseNote.split(/\r?\n/);
        let version = lines[0].replace(blockStartPoint, "").replace(/\(.*\)/, "");
        if (!isNewerVersion(version, startVersion)) {
            break;
        }
        parseReleaseNote(lines, result);
        curr = next;
    }
    return result;
}

function parseReleaseNote(lines, result) {
    // the first two elements in lines version number and "===", ignore and start from i = 2
    for (let i = 2; i < lines.length; i++) {
        let line = lines[i];
        if (line.length !== 0 && line.charAt(0) === '*') {
            // In general, every update has format:
            // * Updates
            // Use model "general" if the update is not for a specific model
            let model = "general";
            let mainUpdateText = line;
            // Updates for a specific model has format:
            // * `modelName` : updates
            // Replace the defualt values with accordingly
            if (line.charAt(2) === '`') {
                let temp = line.split(':')[0];
                model = temp.replace('*', '').replace(" ", "");
                mainUpdateText = "*" + line.replace(temp + ":", "");
            }
            // Abstract subtext of this update, format:
            // * Some updates
            //   * subtext for this update
            let subUpdateText = "";
            while (i + 1 < lines.length && lines[i+1].length !== 0 && lines[i+1].charAt(2) === '*') {
                subUpdateText += lines[i+1] + "\n";
                i++;
            }
            storeUpdates(model, mainUpdateText, subUpdateText, result);
        }
    }
}

function storeUpdates(model, mainUpdateText, subUpdateText, result) {
    if (result[model] === undefined) {
        result[model] = {};
    }
    if (result[model][mainUpdateText] === undefined) {
        result[model][mainUpdateText] = subUpdateText;
    } else if (subUpdateText !== "") {
        result[model][mainUpdateText] += subUpdateText + "\n";
    }
}

function abstractReleaseNoteBlock(next, data, index) {
    if (next === -1) { // when reached the end of the file
        return data.substring(index);
    } else {
        return data.substring(index, next);
    }
}

/**
 * return true if this version is later than startVersion
 * @param {string} version 
 * @param {string} startVersion 
 */
function isNewerVersion(version, startVersion) {
    let versionArray = version.split(".");
    let startVersionArray = startVersion.split(".");
    return isGreater(versionArray, startVersionArray, 0) || isGreater(versionArray, startVersionArray, 1) || isGreater(versionArray, startVersionArray, 2);
}

function isGreater(array1, array2, i) {
    return Number(array1[i]) > Number(array2[i]);
}

function generateMarkdown(result) {
    let models = Object.keys(result);
    let md = "# Parsed AWS Go SDK Release Notes\n\n";
    for (let model of models) {
        md += "### " + model + "\n\n";
        let updatesObj = result[model];
        let updates = Object.keys(updatesObj);
        for (let mainUpdateText of updates) {
            md += mainUpdateText + "\n\n";
            if (updatesObj[mainUpdateText] !== "") {
                md += updatesObj[mainUpdateText] + "\n\n";
            }
        }
        md += "\n\n";
    }
    return md;
}

main();
