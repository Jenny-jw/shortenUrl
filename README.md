# Start backend

## Start MongoDB service

### Option 1. Using MongoDB Atlas

- Input your MongoDB Atlas connection string (usually MONGO_URL) in your `.env`.
- You don't need to start local MongoDB server. Direct start express server.

```
cd ~/shortenUrl/backend
npm start
```

### Option 2. Using local MongoDB

- Install MongoDB Community Server and maek sure you can use `mongod` command.
- Create a local folder `~/shortenUrl/data` for DB.

```

mongod --dbpath ~/shortenUrl/data

```

- Open another terminal to start express server

```

cd ~/shortenUrl/backend
npm start

```

# Start frontend Vite (React app)

> Provides the interface in the browser (which calls the back-end API)

```

cd ~/shortenUrl/frontend
npm run dev

```
