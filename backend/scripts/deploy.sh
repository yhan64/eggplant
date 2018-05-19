
#!/bin/bash
source $(dirname "$0")/utils.sh
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd $PROJECT_DIR

#=====================================================
# Get input parameters
#=====================================================
APPLY=
TAG=
(( $# > 2 )) && \
  bailWithUsage "garbled command options"

while [ $# -gt 0 ]; do
  case $1 in
  (-a|--apply) APPLY=1;  if [[ "$#" == "2" ]]; then shift; else break; fi;;
  (-t|--tag) shift TAG=$1;  if [[ "$#" == "2" ]]; then shift; else break; fi;;
  (-*) bailWithUsage "$1: unknown option"; break;;
  (*) break;;
  esac
done


#=====================================================
# Deploy by applying deploy.ymal
#=====================================================
if [[ (APPLY == "1") ]]; then
  execCMD 'kubectl apply -f deploy.yaml'
  bail
fi


#=====================================================
# Regular Deploy
#=====================================================
execCMD 'docker build . -t  asia.gcr.io/temporal-grin-197315/alive-server'
execCMD 'docker push asia.gcr.io/temporal-grin-197315/alive-server'
execCMD 'kubectl apply -f deploy.yaml'
execCMD 'kubectl delete pods -l app=alive-server'