#!/bin/bash

yarn build:redoc
cp ./redoc-static.html ./docs/.vuepress/public
yarn build:vuepress
now ./docs/.vuepress/dist --prod --token=$NOW_TOKEN
