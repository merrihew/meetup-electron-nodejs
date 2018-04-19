![electron](presentation/images/electron-logo.png)

---
## What is Electron?

@ul
- Desktop app framework
- Build using Chromium and Node.js
- Compatible with Mac, Windows, and Linux
- Developed by GitHub (formerly `atom-shell`)
@ulend

![github](presentation/images/github-logo.png)

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

---?code=presentation/app-node.js&lang=javascript&title=It's all Node.js
@[2](Require Node.js modules)
@[4-6](Create an HTTP server)
@[8-10](Start the server on 'ready')
@[12-14](Close the server before 'quit')
