`npm run build` should build production files to dist
`npm run dev` should compile and launch a hot-swappable server

start webpack dev server and proxy it to an Express server with its own hotloading

running in dev should just run everything from the src folder
    server can run out of /src just fine
    frontend still needs to be compiled - that's what webpack-dev-server is for

dev
    server - use `nodemon` on `/src/server`
    client - use `webpack-dev-server` on `/src/client` 

prod
    server - compile into a single file?
    client - compile js and css into separate single files

I think webpack-dev-server needs to proxy to the server?
https://stackoverflow.com/questions/42611926/error-using-socket-io-along-with-webpack-dev-server

nodemon and babel, solves using import in node
https://github.com/babel/example-node-server

presumably babelrc can have options per env and per build target (e.g. do this for node in prod but this for node in dev)

could add a test script to run eslint on node 
