# meetup-electron-nodejs
Electron &amp; Node.js Presentation (for Atlanta Node.js Meetup)

## Helpful Utilities

### `sips`
Image manipulation utility

[developer.apple.com](https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/sips.1.html)

## Errors

### Resource fork, Finder information, or similar detritus not allowed

```
find . -type f -name '*.jpeg' -exec xattr -c {} \;
find . -type f -name '*.jpg' -exec xattr -c {} \;
find . -type f -name '*.png' -exec xattr -c {} \;
find . -type f -name '*.json' -exec xattr -c {} \;
find . -type f -name '*.icns' -exec xattr -c {} \;
```
