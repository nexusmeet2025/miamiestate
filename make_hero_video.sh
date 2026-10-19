#!/bin/bash
set -e

# 1. Clip 1: Dining salon slow cinematic pan & subtle zoom (3.5 seconds @ 30fps = 105 frames)
ffmpeg -y -loop 1 -i "public/hero 1 - de flora.webp" -t 3.5 -vf "scale=1920:1280,zoompan=z='min(zoom+0.0015,1.25)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)+sin(in/30)*20':d=105:s=1280x720:fps=30,eq=contrast=1.06:saturation=1.12:brightness=0.01" -c:v libx264 -pix_fmt yuv420p /tmp/clip1.mp4

# 2. Clip 2: Evening facade slow push-in (3.5 seconds @ 30fps = 105 frames)
ffmpeg -y -loop 1 -i "public/hero 2- flora.webp" -t 3.5 -vf "scale=1280:1280,zoompan=z='min(zoom+0.0018,1.2)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=105:s=1280x720:fps=30,eq=contrast=1.08:saturation=1.14" -c:v libx264 -pix_fmt yuv420p /tmp/clip2.mp4

# 3. Clip 3: Table setting gentle float (3.5 seconds @ 30fps = 105 frames)
ffmpeg -y -loop 1 -i "public/hero 3- flora.webp" -t 3.5 -vf "scale=1080:1440,zoompan=z='min(zoom+0.0012,1.18)':x='iw/2-(iw/zoom/2)':y='(ih/3)-(ih/zoom/3)':d=105:s=1280x720:fps=30,eq=contrast=1.06:saturation=1.1" -c:v libx264 -pix_fmt yuv420p /tmp/clip3.mp4

# 4. Crossfade the 3 clips together (0.75s xfade) -> total length ~ 8.75s
ffmpeg -y -i /tmp/clip1.mp4 -i /tmp/clip2.mp4 -i /tmp/clip3.mp4 \
  -filter_complex "[0:v][1:v]xfade=transition=fade:duration=0.75:offset=2.75[v01];[v01][2:v]xfade=transition=fade:duration=0.75:offset=5.5[v]" \
  -map "[v]" -c:v libx264 -preset slow -crf 20 -pix_fmt yuv420p -movflags +faststart /tmp/final_hero_video.mp4

# 5. Copy to both public/videos/hero-video.mp4 and videos/hero-video.mp4
cp /tmp/final_hero_video.mp4 public/videos/hero-video.mp4
cp /tmp/final_hero_video.mp4 videos/hero-video.mp4

echo "Video successfully generated!"
ffprobe -hide_banner /tmp/final_hero_video.mp4
