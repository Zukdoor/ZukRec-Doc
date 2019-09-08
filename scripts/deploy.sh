#!/bin/bash

now --target production --token=$NOW_TOKEN
now rm zukrec --safe -y --token=$NOW_TOKEN
