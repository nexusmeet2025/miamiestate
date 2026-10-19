#!/usr/bin/env python3
import os
import urllib.request

os.makedirs('images', exist_ok=True)
os.makedirs('public/images', exist_ok=True)

# Curated high-res luxury villa imagery matching Miami Estate (Noida):
# Private pool at twilight with amber lighting, modern villa, plush living room,
# billiards table, poker table, pickleball, bedrooms, bathrooms, lush green lawns.
image_urls = {
    # Hero & About
    'hero.jpg': 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=85',
    'about.jpg': 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85',
    
    # 4 Bedrooms
    'room-1.jpg': 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85',
    'room-2.jpg': 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85',
    'room-3.jpg': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
    'room-4.jpg': 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85',
    
    # Gallery (12 images)
    'gallery-1.jpg': 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=85', # Pool dusk
    'gallery-2.jpg': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85', # Living room
    'gallery-3.jpg': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85', # Pool/billiards table
    'gallery-4.jpg': 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=1200&q=85', # Poker table
    'gallery-5.jpg': 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1200&q=85', # Pickleball/sports court
    'gallery-6.jpg': 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=1200&q=85', # Lawn & garden
    'gallery-7.jpg': 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85', # Luxury kitchen
    'gallery-8.jpg': 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85', # Sunken lounge
    'gallery-9.jpg': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85', # Master bathroom
    'gallery-10.jpg': 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85', # Pool deck sunset
    'gallery-11.jpg': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85', # Villa night lights
    'gallery-12.jpg': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85', # Terrace stargazing
    
    # Experiences (6 images)
    'exp-1.jpg': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85', # Poolside BBQ
    'exp-2.jpg': 'https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?auto=format&fit=crop&w=1200&q=85', # Pickleball action
    'exp-3.jpg': 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=1200&q=85', # Billiards & Games
    'exp-4.jpg': 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=85', # Amber lounge gathering
    'exp-5.jpg': 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=85', # Lawn bonfire night
    'exp-6.jpg': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=85', # Forest morning yoga
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for filename, url in image_urls.items():
    dest1 = os.path.join('images', filename)
    dest2 = os.path.join('public/images', filename)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            with open(dest1, 'wb') as f:
                f.write(data)
            with open(dest2, 'wb') as f:
                f.write(data)
        print(f"Downloaded {filename} ({len(data)} bytes)")
    except Exception as e:
        print(f"Failed {filename}: {e}")

print("Image download process completed successfully.")
