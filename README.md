# How to Run
- Install Docker
- docker-compose build
- docker-compose up
- Open OBS and in settings set the server to `rtmp://localhost:1935/live` and the stream key to `{YourName}?key=supersecret` (Here key should be `supersecret` since i hardcoded it , we can add database to set unique key for perticular users)
- Open a browser and go to `http://localhost:8080/index.html?name={YourName}` to view your live stream!