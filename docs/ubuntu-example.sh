# Install nvm

$ curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh -o install_nvm.sh
$ nano install_nvm.sh
$ bash install_nvm.sh
$ source ~/.profile
$ nvm install 8.12
$ nvm alias default 8.12
$ nvm use default

# make sure everything installed correctly

$ node -v # should be 8.12.x
$ npm install npm@5.5.1 -g

# install docker

$ sudo apt install apt-transport-https ca-certificates curl software-properties-common
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
$ sudo apt update
$ sudo apt install docker-ce

# remove the need for sudo when running docker

$ sudo usermod -aG docker ${USER}
$ su - ${USER}

# install docker compose

$ sudo curl -L "https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
$ sudo chmod +x /usr/local/bin/docker-compose
