const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, '../../public/meme-templates');
const outputFile = path.join(__dirname, '../assets/templates.json');

// Read the directory and filter for image files
const templates = fs.readdirSync(templatesDir)
  .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
  .sort();

// Write the JSON file
fs.writeFileSync(outputFile, JSON.stringify(templates, null, 2));

console.log(`Generated templates.json with ${templates.length} images`);