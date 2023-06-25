FROM node:20-slim

RUN apt-get -y update && apt-get upgrade -y
RUN apt-get install -y iputils-ping
RUN apt-get install -y openssl

WORKDIR /home/node/app

CMD [ "tail", "-f", "/dev/null" ]
