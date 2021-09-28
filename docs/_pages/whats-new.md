---
layout: page
title: What's New v3.5.7
include_in_header: true
---

### Holla Update 3.5.7

- webrtc incompatibility issues resolved.
- webrtc has been restructured and updated.
- Main url loader issues resolved.
- userAgent has been reconfigured.
- Fixed userAgent incompatibility and potential bugs.
- get-display-media reconfigured.
- get-display-media bugs and problems are gone.
- The screen sharing module was written from scratch and included in the system.
- Fixed video rendering java,npm builds.

<br>

- Alexa add-on module has been renewed.
- Added vpn, proxy system.
- The vpn module has been included in the plugins section.
- The vpn module is currently under development and the existing Proxy is slow and has been added for trial purposes.
- The plugin system has been updated.

<br>

- Updated SSL and https protocol queries about the site.
- Changed global menu language load module (faster translation).

<br>

- Created a new window opening.
- Added new incognito window opening.
- Added chrome:// main path extension. It now supports the chrome:// directory.
- chrome:// opens extensions only in paths it allows.
- Added third-party cookie blocking. It can be turned on or off in settings > privacy.

<br>

- Design and operation fixes.

<br>

- electron@11.5.0 has been updated.
- @cliqz/adblocker-electron@1.22.5 updated.
- easylist updated.
- electron-store@8.0.0 has been updated.

<br>

- Edited keyboard hotkeys. (ctrl + n) (ctrl + shift + n)

<br>

- Added deletion of all data saved in the browser on application reset event.
- Added cookies, sessions, cache clearing.

<br>

- Autofill has been added to the system.
- Autofill; form submit detection and popup asking whether to save information.
- Autofill settings page. deletion of recorded data listing.

<br>

- Update left menu in settings section.

<br>

- Fixed main.js webContents.send mismatch error.
- App update system bugs fixed.

<br>

- Added start screen for first boot.
- Added first boot welcome screen.

<br>

- New tab page has been renewed.
- (new design and functions, customizing new tab page -add background, new customization window)

<br>

- The top main search bar has been refreshed and updated.
- Removed unnecessary commands from the top search bar and made it more efficient.
- Search suggestions have been refreshed and updated. Navigate up and down with the keyboard arrow keys.

<br>

- The theme has been updated. new color packs have been added and made more efficient. 22 different color palette options.

- Re-created the sub-window sizing in the download and the calculation error resolved.

- Site permissions have been updated. It is now possible to manage permissions.

- Reconfigured full screen late alert notification.

- Controlling audio activity inside a window and specifying it in the tab icon. Is the sound playing or not?
- Turning a window's audio activity off or on.

- Pin tabs to head. Automatically pinned tabs come every time you open them.

- Page zoom-out operations have been adjusted (mouse scroll). Page menu included as shortcut.

- Added left sidebar. With this sidebar, you can easily access your favorite sites.
- While you are browsing, you can use the shortcut extensions that you can access directly on the side. You can turn it on and off when you need it.
- or by fixing it to the screen, you can divide the work area into 2.

- Updated reconstruction and size calculation algorithms.

- Added private chat system. This chat system does not require membership and everything is temporary. Conversations are not recorded.
- Thanks to holla://bird, video and audio calls and correspondence can be made.


- Electron widevine migration. Made Widevine compatible. <a hef="https://github.com/meforce/electron#11.5.0-wvvmp">https://github.com/meforce/electron#11.5.0-wvvmp</a>

- Ad-blocker module widevine electron adapted. <a hef="https://github.com/meforce/cliqz-adblocker-castlabs">https://github.com/meforce/cliqz-adblocker-castlabs</a>

- Electron packaging module has been updated.     `npm i electron-builder@22.11.7`

### What Is Widevine? 
Widevine is a proprietary digital rights management technology used by Google's Google Chrome and Firefox web browsers, Android MediaDRM, Android TV, and other consumer electronics devices.
Electron does not normally support Widevine. Youtube, spotify and many platforms use this system.


<br>

```
Thousands of changes, bug fixes and corrections have been made as a result of repeated tests and trials on all operating systems.
After a while, we could no longer take note of the changes made :D because there was a lot of trial and error.

+250 bug fixed, +1000 changes
```


### Detected Issues

**Enable Spotify Web player, Spotify widevine issue;**
This problem was solved by creating the new electron Widevine infrastructure.

**Spotify does not work properly on windows and mac operating systems;**
This issue has not been resolved yet. Since Spotify has a complex and old infrastructure, it becomes difficult to support.
But in the test results, we observed that it works very well in the linux operating system.
We would like our windows and mac users to give us feedback if spotify is working properly.
