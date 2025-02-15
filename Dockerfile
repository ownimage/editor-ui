FROM node:16.13.1

ENV TZ='Europe/London'
RUN apt-get update && apt-get install -y sudo curl wget vim git less zsh nodejs docker.io
RUN sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"

WORKDIR /app

COPY package.json yarn.lock ./
COPY . /app
RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]
