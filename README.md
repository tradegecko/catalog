# Project Catalog
- `bin/setup`
- Go to `localhost:3000/oauth/applications` and create a `New Application` with redirect uri
  `http://localhost:9000/auth/tradegecko/callback`
- Find the OAUTH keys for the application you just created and use those in the `.env` file. Set the port in the ENV file to 9000
- run `foreman run rails s -p 9000`
- in a seperate tab run `foreman run rails s -b lvh.me` for core
- open `localhost:9000` on your browser