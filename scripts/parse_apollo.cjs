const fs = require('fs');
const html = fs.readFileSync('temp_apollo.html', 'utf8');

const title = html.match(/<title>([^<]+)<\/title>/i);
console.log("Title:", title ? title[1] : "none");

const metaDesc = html.match(/<meta name="description" content="([^"]+)"/i);
console.log("Meta Desc:", metaDesc ? metaDesc[1] : "none");

const ogImage = html.match(/<meta property="og:image" content="([^"]+)"/i);
console.log("OG Image:", ogImage ? ogImage[1] : "none");

// Find all doctor photo URLs or images
const urls = html.match(/https?:\/\/[^\s"'<>]+/gi) || [];
const doctorImgs = urls.filter(u => u.includes('doctor') || u.includes('dr-') || u.includes('profile') || u.includes('neeraj') || u.includes('upload'));
console.log("Doctor image matches:", [...new Set(doctorImgs)]);

// Look for text snippets about fee, experience, education, reviews
const texts = [];
const scriptMatches = html.match(/<script[^>]*>([\s\S]*?)<\/script>/gi) || [];
for (const s of scriptMatches) {
  if (s.includes('Neeraj') || s.includes('MBBS') || s.includes('fee') || s.includes('experience')) {
    if (s.includes('application/json') || s.includes('window.__')) {
      texts.push(s.slice(0, 1000));
    }
  }
}
console.log("Relevant script tags count:", texts.length);
if (texts.length > 0) {
  console.log("Sample script:", texts[0].slice(0, 500));
}
