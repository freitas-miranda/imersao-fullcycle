FROM golang:1.20.3-bullseye

RUN apt-get -y update && apt-get upgrade -y
RUN apt-get install -y iputils-ping

WORKDIR /go/src/app

CMD [ "tail", "-f", "/dev/null" ]

# go run cmd/trade/main.go
