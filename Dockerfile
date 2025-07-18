FROM node:24

WORKDIR /app

# Copy package.json and lock file first
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install dependencies including devDependencies
RUN npm install

# Copy the rest of your project
COPY . .

# Expose Angular dev server port
EXPOSE 4200

# Start Angular dev server
CMD ["ng", "serve", "--host", "0.0.0.0"]

