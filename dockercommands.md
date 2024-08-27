<----- Create Docker Image ------------------------------------------------------->

npm run build
docker build -t nextjs-starter-template .

<----- Docker Image Testing ------------------------------------------------------>
docker run -p 3000:3000 nextjs-starter-template

