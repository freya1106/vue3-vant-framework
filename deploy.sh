npm run build
cd dist
git add .
git commit -m 'update deploy'
git remote add origin git@github.com:freya1106/vue3-vant-framework.git
git push -f -u origin deploy

