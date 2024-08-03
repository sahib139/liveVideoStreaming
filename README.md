# How to Run On deployed Website

- Open OBS or other software which support rtmp protocol to broadcast and in OBS settings set the server to `rtmp://13.60.19.44:1935/live` and the stream key to `{YourName}?key=supersecret` (Here key should be `supersecret` since i hardcoded it , we can add database to set unique key for perticular users)
- Open a browser and go to `http://13.60.19.44:8080/index.html?name={YourName}` to view your live stream!

# How to Run on local Machine

- Install Docker & Docker-Compose
- Run `docker-compose build`
- Run `docker-compose up`
- Open OBS or other software which support rtmp protocol to broadcast and in OBS settings set the server to `rtmp://localhost:1935/live` and the stream key to `{YourName}?key=supersecret` (Here key should be `supersecret` since i hardcoded it , we can add database to set unique key for perticular users)
- Open a browser and go to `http://localhost:8080/index.html?name={YourName}` to view your live stream!

## Demo Video
[Watch the demo video](https://drive.google.com/file/d/1DEZUJuIlmY44V_3aqrWSudzR9JHHJrxR/view)
