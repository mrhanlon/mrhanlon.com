{
  title: "Convert an MP4 to GIF with ffmpeg",
  date:   "2014-02-25",
  description: "With quality!"
}

With quality!

Also requires `convert` from ImageMagick.

    $> mkdir frames
    $> ffmpeg -i input.mp4 -r 10 frames/frame%03d.png
    $> convert -delay 5 -loop 0 frames/frame*.png output.gif



Source: [http://superuser.com/a/556031](http://superuser.com/a/556031)