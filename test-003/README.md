This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Getting Started

### Create and run data base
```
docker compose up -d
```

### Install dependencies

```bash
bun i

npm i

yarn i
```
### run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

### Crear archivo .env con la siguiente URI
```
MONGODB_URI = mongodb://localhost:27017/entriesdb
```

### Seed

Puedes correr este endpoint con un **POST**
```
http://localhost:3000/api/seed
```