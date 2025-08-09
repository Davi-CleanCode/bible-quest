// Simple Express + SQLite backend for login and character management
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const app = express();
const db = new sqlite3.Database('./bible_quest.db');

app.use(cors());
app.use(bodyParser.json());

const userTable = `CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);`;
const characterTable = `CREATE TABLE IF NOT EXISTS characters (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  level INTEGER DEFAULT 1,
  experience INTEGER DEFAULT 0,
  FOREIGN KEY(user_id) REFERENCES users(id)
);`;
db.serialize(() => {
    db.run(userTable);
    db.run(characterTable);
});

app.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'Required fields' });
    const hash = bcrypt.hashSync(password, 10);
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hash], function (err) {
        if (err) return res.status(400).json({ error: 'User exists' });
        res.json({ id: this.lastID, username });
    });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
        if (err || !user) return res.status(401).json({ error: 'Invalid credentials' });
        if (!bcrypt.compareSync(password, user.password)) return res.status(401).json({ error: 'Invalid credentials' });
        res.json({ id: user.id, username: user.username });
    });
});

app.post('/api/character', (req, res) => {
    const { user_id, name } = req.body;
    if (!user_id || !name) return res.status(400).json({ error: 'Required fields' });
    db.run('INSERT INTO characters (user_id, name) VALUES (?, ?)', [user_id, name], function (err) {
        if (err) return res.status(400).json({ error: 'Error creating character' });
        res.json({ id: this.lastID, user_id, name, level: 1, experience: 0 });
    });
});

app.get('/api/characters/:user_id', (req, res) => {
    db.all('SELECT * FROM characters WHERE user_id = ?', [req.params.user_id], (err, rows) => {
        if (err) return res.status(400).json({ error: 'Error fetching characters' });
        res.json(rows);
    });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
