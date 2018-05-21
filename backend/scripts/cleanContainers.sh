#!/bin/bash
source $(dirname "$0")/utils.sh

step="Running 'stop all containers' ..."
echo "----------------------------------------------"
echo "$step"
for i in api db-postgres adminer; do docker stop backend_${i}_1 2>/dev/null; done
errorHandler 0 " " # ignore error if container doesn't exist

step="Running 'remove all containers' ..."
echo "----------------------------------------------"
echo "$step"
for i in api db-postgres adminer; do docker rm backend_${i}_1 2>/dev/null; done
errorHandler 0 " " # ignore error if container doesn't exist