# UPX
FROM golang:1.21rc2-alpine3.18 AS builder
WORKDIR /go/src/app
COPY . .
CMD ["go", "run", "main.go"]

# docker build -t freitas-miranda/fullcycle .
# docker run freitas-miranda/fullcycle
