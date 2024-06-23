# Team-4

## Backend REST API Documentation
https://documenter.getpostman.com/view/28637465/2sA3XWcJty#da4821b1-7e49-403f-a1ae-8a232e6c7c3d
 
## How to Run

### Backend-Performed by Naman Arora
1. Navigate to the backend directory: `cd Backend/`
2. Set up a virtual environment: `python -m venv venv`
3. Activate the virtual environment:
   - On Windows: `./venv/Scripts/activate`
   - On macOS/Linux: `source venv/bin/activate`
4. Install Python dependencies: `pip install -r requirements.txt`
5. Navigate to the `CFG` directory: `cd CFG/`
6. Apply database migrations: `python manage.py migrate` (when there are database changes)
7. Run the Django development server: `python manage.py runserver 8001`

#### Creating a Superuser
- To create a superuser for accessing the Django admin interface, run: `python manage.py createsuperuser` and follow the prompts.


