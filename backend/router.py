from fastapi import APIRouter
from database import users_collection
from schemas import UserRegister,UserLogin



router = APIRouter()

@router.post("/register")
def register_user(user: UserRegister):
    existing_user = users_collection.find_one({"email": user.email})

    if existing_user:
        return{"message": "Email already registered"}
    
    user_data = {
        "username":user.username,
        "email":user.email,
        "password":user.password
    }

    users_collection.insert_one(user_data)

    return{"message": "User registered Successfully"}

@router.post("/login")
def login_user(user: UserLogin):
    existing_user = users_collection.find_one({"email": user.email})

    if not existing_user:
        return{"message": "Email not register"}
    
    if existing_user["password"] != user.password:
        return{"message": "incorrect Password"}
    
    return{"message":"Login Successfully",
           "user": {
               "username": existing_user["username"],
               "email": existing_user["email"]
           }
    }
        



