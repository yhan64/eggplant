#!/bin/bash

#=====================================================================
# Utilities
#=====================================================================
bail()          { exit 0; }
bailWithUsage() { echo; echo "ERROR: $1"; exit; }

#=====================================================================
# Functions
#=====================================================================
errorHandler () {
    local ret="$1"
    local message="$2"
    if (( ret )); then
        echo "ERROR: $message"
        exit 101
    else
        echo "OK"
    fi
}

execCMD () {
  local cmd="$1"
  echo "----------------------------------------------"
  echo "Running '$cmd' ..."
  ${cmd}
  errorHandler $? "something went wrong during step: $cmd."
}
