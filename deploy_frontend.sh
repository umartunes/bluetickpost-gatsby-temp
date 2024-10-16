#!/bin/bash

# Stop script execution on any error
set -e

# Define color codes for messages
YELLOW='\033[1;33m' # Yellow for info
NC='\033[0m'        # No color (reset)

# Function to print messages in yellow with a slight delay
function log_info {
  echo -e "${YELLOW}$1${NC}"
  sleep 1
}

# NVM and Node.js version selection instructions
log_info "If NVM is not installed, install it first and then run this script again."
log_info "Ensure that Node.js version 12.12 is installed. To install, run: (nvm install 12.12)."
log_info "Node.js version 12.12 must be selected manually before this script can be run."
log_info "Select Node.js version 12.12 using: (nvm use 12.12)."

# Build the project
npm run build
log_info "✔ Project build completed successfully."

# Build the Docker image
docker build -t bluetickpost-static-site .
log_info "✔ Docker image 'bluetickpost-static-site' built successfully."

# Tag the Docker image
docker tag bluetickpost-static-site umartunes/techna-tools:bluetickpost-static-site
log_info "✔ Docker image tagged as 'umartunes/techna-tools:bluetickpost-static-site'."

# Push the Docker image to the repository
docker push umartunes/techna-tools:bluetickpost-static-site
log_info "✔ Docker image pushed to 'umartunes/techna-tools:bluetickpost-static-site' successfully."
