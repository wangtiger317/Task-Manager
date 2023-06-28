interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  role: string;
}

interface FormRegister {
  name: string;
  surname: string;
  email: string;
  password: string;
} 

interface FormLogin {
    email: string;
    password: string;
  } 