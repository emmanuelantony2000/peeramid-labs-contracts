#! /bin/bash

rm -rf ./deployments/buildbear
export NODE_ENV=TEST
pnpm hardhat deploy --tags multipass,rankify --network buildbear
