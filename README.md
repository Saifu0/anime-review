# Anime Review
Simple Anime Review Full-Stack Application written in Django and React

Deployed UI: https://anime-review.netlify.app/login

Deployed Backend: https://anime-review-pain.herokuapp.com/

# Backend Setup
1. Change directory to `/backend/backend` Create virtual environment and activate it
```
virtualenv -p python3 env   
source env/bin/activate
```

2. Install all the depencies
```
pip install -r requirements
```

3. Migrate the database
```
python manage.py makemigrations
python manage.py migrate
```

4. Run Development server
```
python manage.py runserver
```

# Frontend Setup
 1. Change directory to `/frontend` and run
 ```
 npm install
 ```
 
 2. Start local server
 ```
 npm start
 ```
 
 
