FROM ubuntu:bionic

RUN useradd -r mongodb \
  && apt-get update -y \
  && apt-get install -y curl gnupg vim \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN \
  apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 \
    --recv 9DA31620334BD75D9DCB49F368818C72E52529D4

RUN \
  echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" \
    | tee /etc/apt/sources.list.d/mongodb-org-4.0.list \
    && apt-get update

RUN mkdir -p /data/db

RUN \
  apt-get install -y mongodb-org \
    && chown -R mongodb /data/db

VOLUME ["/data/db"]

WORKDIR /data

USER "mongodb"

EXPOSE 27017 28017

CMD ["mongod -f /etc/mongod.conf"]
