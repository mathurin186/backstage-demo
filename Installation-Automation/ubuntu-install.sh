#!/bin/bash
#
# This was writen to run on a plane instance of Ubuntu 22 or Ubuntu 24.
#
# Writen by @mathurin186

Sudo apt update
sudo apt install build-essential -y
sudo apt install curl -y

# Install Node Version Manager first. Note: make sure you have curl installed
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# After installation, you will need to create a new shell in order for nvm to work.

# Install latest version of lts
nvm install --lts

# Confirm that node and nvm are installed
node -v npm -v

# Install Yarn
npm install --global yarn

# Install Docker
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

sleep 1
# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

# Docker install
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Test installation of Docker
docker run hello-world

