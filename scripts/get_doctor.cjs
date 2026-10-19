const fs = require('fs');

async function run() {
  const urls = [
    "https://www.apollo247.com/doctors/dr-neeraj-kumar-c5f8abec-84e6-4dff-9ebb-ef42276ad4d5",
    "https://www.practo.com/delhi/doctor/dr-neeraj-kumar-dermatologist-cosmetologist"
  ];

  for (const url of urls) {
    console.log("Fetching:", url);
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8"
        }
      });
      console.log(url, "Status:", res.status);
      const html = await res.text();
      fs.writeFileSync(`temp_${url.includes('apollo') ? 'apollo' : 'practo'}.html`, html);
      console.log("Saved html length:", html.length);
    } catch (e) {
      console.error("Error for", url, e.message);
    }
  }
}

run();
