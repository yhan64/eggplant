
#!/bin/bash
source $(dirname "$0")/utils.sh
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd $PROJECT_DIR

#=====================================================
# Get input parameters
#=====================================================
WITH_CLEAN=
CLEAN_ONLY=
ALL=
(( $# > 2 )) && \
  bailWithUsage "garbled command options"

while [ $# -gt 0 ]; do
  case $1 in
  (-a|--all)      ALL=1;     if [[ "$#" == "2" ]]; then shift; else break; fi;;
  (-c|--clean) WITH_CLEAN=1; if [[ "$#" == "2" ]]; then shift; else break; fi;;
  (-co|--cleanonly) CLEAN_ONLY=1;    if [[ "$#" == "2" ]]; then shift; else break; fi;;

  (-*)  bailWithUsage "$1: unknown option"; break;;
  (*) break;;
  esac
done

#=====================================================
# Clean
#=====================================================
if [[ ($WITH_CLEAN == "1") || ($CLEAN_ONLY == '1') ]]; then
  step="Running 'stop all containers' ..."
  echo "----------------------------------------------"
  echo "$step"
  for i in api db-postgres adminer; do docker stop landlordhelperserver_${i}_1 2>/dev/null; done
  errorHandler 0 " " # ignore error if container doesn't exist

  step="Running 'remove all containers' ..."
  echo "----------------------------------------------"
  echo "$step"
  for i in api db-postgres adminer; do docker rm landlordhelperserver_${i}_1 2>/dev/null; done
  errorHandler 0 " " # ignore error if container doesn't exist

  if [[ ($CLEAN_ONLY == '1') ]]; then
    bail;
  fi
fi

#=====================================================
# Setup for client's dev env
#=====================================================
if [[ ($ALL == "1") ]]; then
  execCMD 'docker-compose -f docker-compose-all.yml up --build  -d'
  execCMD 'docker exec -it landlordhelperserver_api_1 npm run migrate'
  bail
fi

#=====================================================
# Setup for api server's dev env
#=====================================================
execCMD 'docker-compose up --build -d'
execCMD 'npm run migrate'
