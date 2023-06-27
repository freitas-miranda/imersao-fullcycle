# criar aplicação nextjs
npx create-next-app --typescript

# subir a aplicação
npm run dev

# instalar json-server
npm install json-server --save-dev

## adicionar script no package.json
"json-server": "json-server --port 8000 --watch api.json --routes routes.json"

## criar o arquivos de conteúdo desejado
api.json e routes.json

## subir a api fake
npm run json-server

# adicionar framework css (flowbite)
npm install flowbite
npm install flowbite-react
npm install flowbite-typography --save-dev

# adicionar biblioteca de gráficos (lightweight-charts)
npm install lightweight-charts

# adicionar biblioteca para chamadas http a partir do browser
npm install swr
