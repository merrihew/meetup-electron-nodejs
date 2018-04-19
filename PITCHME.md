@title[Code Presenting]
# Electron

---
## What is Electron?

![electron](presentation/images/electron-logo.png)

@ul
- Desktop app framework
- Build using Chromium and Node.js
- Compatible with Mac, Windows, and Linux
@ulend

---
## Electron's `app` Process

The main process controlling an Electron app

---?code=presentation/app-events.js&lang=javascript&title=Events
@[1](Require the `electron` package)
@[3](App is launched & ready)
@[4-5](Respond to user events)
@[6-7](Handle shutdown events)

---?code=presentation/app-methods.js&lang=javascript&title=Methods
@[4-5](Get the app name)
@[6-7](Get the app version)
@[8-9](Get the current path)
@[10-11](Get runtime metrics (memory, cpu, pid))
