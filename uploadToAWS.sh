#!/bin/bash
#
# Upload the build to S3 Bucket and also redistribute on Cloudfront
# No argument is required.
# It reads value from .env.production file.
#

#Touch the env file as .env.production
AWS=$(grep AWS .env.production.local | xargs)
IFS=" " read -r BUCKET_NAME CLOUDFRONT_ID <<< "$AWS"
BUCKET_NAME=${BUCKET_NAME#*=}
CLOUDFRONT_ID=${CLOUDFRONT_ID#*=}
yarn build && aws s3 sync ./build $BUCKET_NAME --exclude "*.map" --exclude ".DS_Store" --delete && aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_ID --paths "/*"
