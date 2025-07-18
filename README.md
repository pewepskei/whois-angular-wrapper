# Whois Angular Wrapper

This is a frontend application built using Angular to serve as a simple interface for performing WHOIS lookups via a backend API. Users can input a domain name, select the type of information they want, and get WHOIS data returned

## 🌐 Live Demo

You can access the live version of the app at:

🔗 [https://whois-lookup.pewepskei.dev](https://whois-lookup.pewepskei.dev)

## 🛠 Requirements

- Node.js (v16.x or v18.x recommended)
- npm (v8.x recommended)
- Angular CLI (v15 or v16)

Install Angular CLI globally if needed:

```bash
npm install -g @angular/cli@16
```

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/pewepskei/whois-angular-wrapper.git
cd whois-angular-wrapper
npm install
```

## 🚀 Running the Application Locally

Start the Angular development server:

```bash
npm start
```

Or manually:

```bash
ng serve
```

The application will be available at:

```
http://localhost:5000/
```

## 🌍 Environment Configuration

The frontend expects the backend API to be available at:

```
http://localhost:8000
```

This is the default and can be changed in the `src/environments/environment.ts` file.

Example:
```ts
export const environment = {
  production: false,
  backendUrl: 'http://localhost:8000'
};
```

Update the `backendUrl` field as needed for production or testing.


## ❗️ Troubleshooting

- **CORS Error**: Ensure the backend sets the appropriate `Access-Control-Allow-Origin` header.


