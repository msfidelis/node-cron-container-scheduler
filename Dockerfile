FROM node:18


WORKDIR /app/

ADD package.json . 
ADD package-lock.json . 

RUN npm install 

ADD . /app/


CMD ["node", "index.js"]