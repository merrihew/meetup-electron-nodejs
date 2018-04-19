#!/bin/bash

round-size() {
    printf "%.0f" $(echo "scale=2;$1*$2" | bc)
}

source_image=$1
dest_image=$2
base_size=16
#densities=(1 1.25 1.33 1.4 1.5 1.8 2 2.5 3 4 5)
densities=(1 2)
for density in "${densities[@]}"
do
    dpi=$(round-size $base_size $density)
    #dpi2=$(round-size $final_size $density)
    #sips -Z $dpi -p $dpi2 $dpi2 $source_image -s dpiHeight 144.0 -s dpiWidth 144.0 --out "$dest_image@$density.png" > /dev/null
    sips -Z $dpi $source_image -s dpiHeight 72.0 -s dpiWidth 72.0 --out "$dest_image@$density.png" > /dev/null
done

mv "$dest_image@1.png" "$dest_image.png"
