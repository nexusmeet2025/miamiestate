const fs = require('fs');
const html = fs.readFileSync('temp_apollo.html', 'utf8');

// Find JSON objects in script tags
const jsonMatches = html.match(/<script[^>]*type="application\/json"[^>]*>([\s\S]*?)<\/script>/gi) || [];
console.log("JSON scripts found:", jsonMatches.length);

for (let i = 0; i < jsonMatches.length; i++) {
  const content = jsonMatches[i].replace(/<[^>]+>/g, '');
  if (content.includes('Neeraj') || content.includes('Dermatolog')) {
    console.log(`Script ${i} matches: length ${content.length}`);
    try {
      const data = JSON.parse(content);
      fs.writeFileSync(`parsed_script_${i}.json`, JSON.stringify(data, null, 2));
      console.log(`Wrote parsed_script_${i}.json`);
    } catch (e) {
      console.log("JSON parse error:", e.message);
    }
  }
}
