#!/usr/bin/env bash

# package dist.tar.gz

rm -rf dist.tar.gz

npm install

npm run build

tar -czvf dist.tar.gz dist
