from  node:12.18.1-alpine as build
workdir /app
copy package.json ./
# RUN npm cache clean --force
run npm install
copy . .
run npm run build

FROM nginx:1.19.0-alpine as prod-stage
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
copy --from=build /app/dist /usr/share/nginx/html
expose 80
cmd ["nginx","-g","daemon off;"]
