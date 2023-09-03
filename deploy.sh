rm -rf dist
npm run build
cd dist
git init
git add .
git commit -m 'update deploy'
git branch -M deploy
git remote add origin git@github.com:freya1106/vue3-vant-framework.git
git push -f -u origin deploy