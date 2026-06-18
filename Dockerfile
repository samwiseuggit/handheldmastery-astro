# Multi-stage Dockerfile for Astro static site
# Stage 1: Build the Astro site
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files first for better caching
COPY package.json ./
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Build the static site
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Copy built static files
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx config for clean URLs
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
      CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:80/ || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
