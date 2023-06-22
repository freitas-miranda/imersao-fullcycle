FROM golang:1.21rc2-alpine3.18 AS builder
WORKDIR /go/src/app
COPY . .
RUN CGO_ENABLED=0 go build -o /build main.go


FROM scratch
COPY --from=builder /build /app
CMD ["/app"]

# docker image rm freitasmiranda/fullcycle -f
# docker build -t freitasmiranda/fullcycle .
# docker run freitasmiranda/fullcycle
# docker image ls | awk '/full/'
# docker push freitasmiranda/fullcycle
