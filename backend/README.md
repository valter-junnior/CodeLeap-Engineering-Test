<h1 align="center" style="font-weight: bold;">Backend API - Careers 💼</h1>

<p align="center">
 <a href="#tech">Technologies</a> • 
 <a href="#started">Getting Started</a> • 
 <a href="#routes">API Endpoints</a>
</p>

<p align="center">
    <b>RESTful API built with Django and Django REST Framework for managing career-related posts.</b>
</p>

---

<h2 id="tech">💻 Technologies</h2>

* Python 3.11+
* Django 5+
* Django REST Framework
* SQLite (default, can be switched to PostgreSQL/MySQL)
* Django CORS Headers

---

<h2 id="started">🚀 Getting started</h2>

<h3>Prerequisites</h3>

* [Python](https://www.python.org/)
* [Git](https://git-scm.com/)
* (Optional) [Virtualenv](https://virtualenv.pypa.io/en/latest/)

<h3>Cloning</h3>

```bash
git clone https://github.com/valter-junnior/CodeLeap-Engineering-Test
cd CodeLeap-Engineering-Test/backend
```

<h3>Creating virtual environment and installing dependencies</h3>

```bash
python -m venv env
source env/bin/activate
pip install -r requirements.txt
```

<h3>Running migrations and starting the server</h3>

```bash
python manage.py migrate
python manage.py runserver
```

---

<h2 id="routes">📍 API Endpoints</h2>

| Route              | Method | Description                    |
| ------------------ | ------ | ------------------------------ |
| `/api/posts/`      | GET    | List all career posts          |
| `/api/posts/`      | POST   | Create a new post              |
| `/api/posts/<id>/` | PATCH  | Update title/content of a post |
| `/api/posts/<id>/` | DELETE | Delete a post                  |

### 🔐 Fields like `author_ip` are automatically filled by the server.

<h3>POST /api/posts/</h3>

**REQUEST**

```json
{
  "username": "junior",
  "title": "Software Developer",
  "content": "Looking for a role in backend development."
}
```

**RESPONSE**

```json
{
  "id": 1,
  "username": "junior",
  "created_datetime": "2025-05-12T22:50:00Z",
  "title": "Software Developer",
  "content": "Looking for a role in backend development.",
  "author_ip": "192.168.0.105"
}
```


