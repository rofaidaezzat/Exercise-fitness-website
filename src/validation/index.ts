// utils/validation.ts

export const SignupValidation = (signup: {
    username: string;
    email: string;
    password: string;
  }) => {
    const errors: { username: string; email: string; password: string } = {
      username: "",
      email: "",
      password: "",
    };
  
    // Username validation
    if (!signup.username.trim()) {
      errors.username = "Username is required";
    } else if (signup.username.length < 10 || signup.username.length > 30) {
      errors.username = "Username must be between 10 and 30 characters";
    }
  
    // Email validation
    if (!signup.email.trim()) {
      errors.email = "Email is required";
    } else if (signup.email.length < 10 || signup.email.length > 200) {
      errors.email = "Email must be between 10 and 200 characters";
    }
  
    // Password validation
    if (!signup.password.trim()) {
      errors.password = "Password is required";
    } else if (signup.password.length < 8 || signup.password.length > 100) {
      errors.password = "Password must be between 8 and 100 characters";
    }
  
    return errors;
  };
  
  export const LogInValidation = (login: {
    identifier: string;
    password: string;
  }) => {
    const errors: { identifier: string; password: string } = {
        identifier: "",
      password: "",
    };
  
    // Email validation
    if (!login.identifier.trim()) {
      errors.identifier = "Email is required";
    } else if (login.identifier.length < 10 || login.identifier.length > 200) {
      errors.identifier = "Email must be between 10 and 200 characters";
    }
  
    // Password validation
    if (!login.password.trim()) {
      errors.password = "Password is required";
    } else if (login.password.length < 8 || login.password.length > 100) {
      errors.password = "Password must be between 8 and 100 characters";
    }
  
    return errors;
  };
  