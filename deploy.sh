set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:lian0103/d3-map.git master:gh-pages

cd -