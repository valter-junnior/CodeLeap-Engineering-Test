<h1 align="center" style="font-weight: bold;">CodeLeap Engineering Test</h1>

<p align="center">
 <a href="#tech">Technologies</a> • 
 <a href="#started">Getting Started</a> • 
 <a href="#routes">API Endpoints</a> •
 <a href="#colab">Collaborators</a> •
 <a href="#contribute">Contribute</a>
</p>

<p align="center">
    <b>Fullstack application to create and explore posts about your career. Built with Django REST Framework and React.</b>
</p>

---

## 🧩 Project Structure

```

career-posts/
├── backend/     # Django REST API
├── frontend/    # React + Vite application
└── README.md

````

---

## 💻 Technologies <a id="tech"></a>

### Backend
- Python
- Django
- Django REST Framework
- SQLite (default)
- CORS Headers

### Frontend
- React
- Vite
- Axios
- TailwindCSS or Styled Components
- React Router DOM

---

## 🚀 Getting Started <a id="started"></a>

### Prerequisites

- Node.js & npm
- Python 3.10+
- Git

---

### 1. Clone the project

```bash
git clone https://github.com/valter-junnior/CodeLeap-Engineering-Test
cd CodeLeap-Engineering-Test
````

---

### 2. Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

> The API will run at `http://localhost:8000`.

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

> The app will run at `http://localhost:5173`.

Create a `.env` file in the frontend root based on `.env.example`:

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

---

## 📍 API Endpoints <a id="routes"></a>

| Method | Route            | Description            |
| ------ | ---------------- | ---------------------- |
| GET    | /api/posts/      | List all posts         |
| POST   | /api/posts/      | Create a new post      |
| GET    | /api/posts/\:id/ | Retrieve a single post |
| PUT    | /api/posts/\:id/ | Update a post          |
| DELETE | /api/posts/\:id/ | Delete a post          |

**POST Request Body**

```json
{
  "username": "John Doe",
  "title": "My Journey in Tech",
  "content": "I started learning code at 15..."
}
```