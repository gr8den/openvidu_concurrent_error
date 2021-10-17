# OpenVidu error when create multiple connections concurrently

## Version:
* OS: macOS Big Sur 11.6, Intel CPU
* Docker version 20.10.8, build 3967b7d
* Node: v14.17.6
* OpenVidu: 2.20.0

## Reproduction steps:
* docker run -p 4443:4443 --rm -e OPENVIDU_SECRET=MY_SECRET openvidu/openvidu-server-kms:2.20.0
* yarn && yarn start

## Logs:
[Node](./logs/node.log)<br>
[Docker](./logs/docker.log)
