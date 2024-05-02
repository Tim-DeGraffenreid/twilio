#!/bin/bash
# Create the .env file with environment variables
echo "TWILIO_ACCOUNT_SID=$TWILIO_ACCOUNT_SID" > .env.local
echo "TWILIO_AUTH_TOKEN=$TWILIO_AUTH_TOKEN" >> .env.local
#chmod +x create-env.sh
#./create-env.sh
# Execute the main command of the container, e.g., starting a server
# Make sure to replace `command-to-start-your-app` with your actual command