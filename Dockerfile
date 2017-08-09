FROM node:8.2.1-slim

RUN mkdir -p /root/src/app
WORKDIR /root/src/app

COPY package.json /root/src/app/

RUN npm install -g cnpm --registry=http://registry.npm.taobao.org
RUN cnpm install

COPY . /root/src/app

EXPOSE 3000

CMD ["npm" ,"run ","build"]
#npm run start
#mkdir -p /tmp/logs/app-log && touch /tmp/logs/app-log/common.log
#tail -f /tmp/logs/app-log/common.log
