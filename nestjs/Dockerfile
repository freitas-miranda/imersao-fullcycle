FROM node:20-slim

RUN apt-get -y update && apt-get upgrade -y
RUN apt-get install -y iputils-ping

WORKDIR /home/node/app

USER node

CMD [ "tail", "-f", "/dev/null" ]
