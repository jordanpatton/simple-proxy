simple-proxy
============
A simple proxy for static sites.

Getting Started
---------------
1. Pick your proxy target. (example: Public [Dropbox](https://www.dropbox.com/) folder)
2. Open Terminal and do the following:

```bash
# Get the latest snapshot
git clone https://github.com/jordanpatton/simple-proxy.git myproject

# Open your local copy
cd myproject

# Install NPM dependencies
npm install

# Start the app
TARGET='https://dl.dropboxusercontent.com/u/{USER_ID}/{PUBLIC_FOLDER}' node app.js
```
