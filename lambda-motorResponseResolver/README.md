# AWS Lambda MotorResponseResolver
[[LS-230]](https://leafi.atlassian.net/browse/LS-230) Setup Lambda Functions as Data Resolver to Connect Internal Server

### Environment
* Nodejs 16
* `npm i` to install required node packages

### Design
1. receive IoT core payload (example provided in `/sample-events`)
2. base on `deviceId`, query through AppSync GQL to get owner ID of the device
3. base on just-retrieved owner ID, send mutation to the appropriate AppSync GQL endpoint