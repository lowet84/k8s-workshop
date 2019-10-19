# Docker
## Vad är Docker?
## Hur använder man det?
### docker command
- docker run 
- image
- dockerhub/registry 
- port
- volume
- name
- daemon mode
- env

#### Uppgift: Kör ett program från docker hub (image: gogs/gogs, port: 3000, data: /data)
  
## Docker compose
- version
- services
- service name
- ports
- volumes
- networks

#### Uppgift: Gör om samma program från föregående uppgift i docker-compose

### Dockerfile
- FROM
- COPY/ADD
- RUN
- WORKDIR
- CMD
- EXPOSE

#### Uppgift: Dockerisera demoappen i Demo/App

### Multi-stage (bra för ci/cd)
- FROM as 
- COPY --from=
- FROM en gång till

#### Uppgift: Gör en multi-stage build från första steget. 

### Uppgift: Skapa docker-compose-fil för image från föregående uppgift