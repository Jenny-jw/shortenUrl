## Table of Contents

- [Features](#features)
- [On the Roadmap](#on-the-roadmap)
- [Quickstart](#quickstart)

## Features

- Shorten the given URL into a unique link
- Allows users to copy the shortened URL to the clipboard
- Provides an option to shorten another URL without reloading the page

## On the Roadmap

- Implement validation to ensure the original URL is in a valid format.
- Check if the submitted URL already exists in the database to prevent duplicates.
- Add an expiration mechanism for shortened URLs.

## Quickstart

### Start backend (MongoDB service)

#### Option 1. Using MongoDB Atlas

- Input your MongoDB Atlas connection string (usually MONGO_URL) in your `.env`.
- You don't need to start local MongoDB server. Start express server directly.

```
cd ~/shortenUrl/backend
npm start
```

#### Option 2. Using local MongoDB

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

### Start frontend Vite (React app)

> Provides the interface in the browser (which calls the back-end API)

```

cd ~/shortenUrl/frontend
npm run dev

```
