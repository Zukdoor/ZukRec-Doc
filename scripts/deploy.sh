#!/bin/bash

NOW_DEPLOY_ID=$( now --no-clipboard --token=$NOW_TOKEN )
now alias --token=$NOW_TOKEN
now rm zukrec --safe -y --token=$NOW_TOKEN