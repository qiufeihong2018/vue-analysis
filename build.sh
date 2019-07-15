#!/usr/bin/env sh

set -e
npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:qiufeihong2018/vue-analysis.git master:gh-pages

cd -
