#!/bin/bash
# renders the 73.75 s promo (v4) in resumable segments
cd "$(dirname "$0")"
for seg in "0 15" "15 30" "30 45" "45 60" "60 73.75"; do
  set -- $seg
  f=out/v4_seg_$1_$2.mp4
  if [ -f "$f.done" ]; then echo "skip $f"; continue; fi
  node render.cjs video 30 $1 $2 $f > out/render_v4_$1.log 2>&1 && touch "$f.done" && echo "done $f"
done
echo ALL_DONE
