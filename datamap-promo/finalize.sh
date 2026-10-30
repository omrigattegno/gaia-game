#!/bin/bash
set -e
cd "$(dirname "$0")/out"
FF=../ffmpeg
printf "file 'v4_seg_0_15.mp4'\nfile 'v4_seg_15_30.mp4'\nfile 'v4_seg_30_45.mp4'\nfile 'v4_seg_45_60.mp4'\nfile 'v4_seg_60_73.75.mp4'\n" > v4_list.txt
$FF -y -hide_banner -loglevel error -f concat -safe 0 -i v4_list.txt -c copy v4_master_noaudio.mp4
# high quality H.264 (large)
$FF -y -hide_banner -loglevel error -i v4_master_noaudio.mp4 -i soundtrack.wav -map 0:v -map 1:a -c:v libx264 -preset slow -crf 19 -maxrate 14M -bufsize 28M \
  -pix_fmt yuv420p -profile:v high -level 4.2 -c:a aac -b:a 192k -ar 48000 -shortest -movflags +faststart DataMap_Promo_v4_HQ.mp4
# same quality in H.265, under 30 MiB
$FF -y -hide_banner -loglevel error -i v4_master_noaudio.mp4 -map 0:v -c:v libx265 -preset slow -b:v 3050k -x265-params pass=1:stats=x265v4.log:log-level=error -pix_fmt yuv420p -an -f mp4 /dev/null
$FF -y -hide_banner -loglevel error -i v4_master_noaudio.mp4 -i soundtrack.wav -map 0:v -map 1:a -c:v libx265 -preset slow -b:v 3050k -x265-params pass=2:stats=x265v4.log:log-level=error \
  -pix_fmt yuv420p -tag:v hvc1 -c:a aac -b:a 160k -ar 48000 -shortest -movflags +faststart DataMap_Promo_v4_HEVC.mp4
# H.264 for any player, under 30 MiB, two-pass
$FF -y -hide_banner -loglevel error -i v4_master_noaudio.mp4 -map 0:v -c:v libx264 -preset veryslow -b:v 3000k -pass 1 -passlogfile x264v4 -x264-params aq-mode=3 -pix_fmt yuv420p -an -f mp4 /dev/null
$FF -y -hide_banner -loglevel error -i v4_master_noaudio.mp4 -i soundtrack.wav -map 0:v -map 1:a -c:v libx264 -preset veryslow -b:v 3000k -maxrate 6500k -bufsize 13M -pass 2 -passlogfile x264v4 \
  -x264-params aq-mode=3 -pix_fmt yuv420p -profile:v high -level 4.2 -c:a aac -b:a 128k -ar 48000 -shortest -movflags +faststart DataMap_Promo_v4.mp4
python3 -c "import os
for f in ['DataMap_Promo_v4_HQ.mp4','DataMap_Promo_v4_HEVC.mp4','DataMap_Promo_v4.mp4']: print(f, round(os.path.getsize(f)/2**20,2), 'MiB')"
