# multi-step-user-registration

## 📌 Overview

This project is a **Multi-Step User Registration Wizard** built with **React, TypeScript, Zustand, and Material-UI**. The application guides users through a step-by-step process to create a new user profile with validation.

## 🚀 Features

- Multi-step registration form
- Validation for all input fields
- Zustand for state management
- Material-UI for modern UI design
- Navigation between steps (Next/Back)
- Review page before submission
- Success confirmation screen

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Material-UI
- **State Management:** Zustand
- **Routing:** React Router

## 📂 Project Structure
```
├── src
│   ├── components
│   │   ├── UserDetails.tsx
│   │   ├── AddressDetails.tsx
│   │   ├── AccountDetails.tsx
│   │   ├── Review.tsx
│   │   ├── Success.tsx
│   ├── store
│   │   ├── store.ts (Zustand store for user state)
│   ├── utils
│   │   ├── validation.ts (Field validation logic)
│   ├── App.tsx
│   ├── main.tsx
│
├── public
├── package.json
├── tsconfig.json
├── README.md
```

## ⚡ Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/solty2212/multi-step-user-registration.git
   cd multi-step-user-registration
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## 🎯 Usage

- Fill in user details (First Name, Last Name, Email) ✅
- Provide address details (Street, City, State, Zip Code) 🏡
- Set account credentials (Username, Password with validation) 🔐
- Review entered data and submit 📋
- See a success confirmation screen 🎉

## 🔎 Validation Rules

- **Email** must be a valid format
- **Password** must contain at least:
  - 8 characters
  - One uppercase letter
  - One number
  - One special character
- **Zip** must be a valid format
- All fields are required

## 📜 License

This project is licensed under the MIT License.

## 🤝 Contributing

Feel free to submit issues or pull requests to improve the project!

## 📧 Contact

For any inquiries, reach out at [solty2212@gmail.com](mailto\:solty2212@gmail.com).

