# How to Run
- Install Docker & Docker-Compose
- Run `docker-compose build`
- Run `docker-compose up`
- Open OBS or other software which support rtmp protocol to broadcast and in OBS settings set the server to `rtmp://13.60.19.44:1935/live` and the stream key to `{YourName}?key=supersecret` (Here key should be `supersecret` since i hardcoded it , we can add database to set unique key for perticular users)
- Open a browser and go to `http://13.60.19.44:8080/index.html?name={YourName}` to view your live stream!