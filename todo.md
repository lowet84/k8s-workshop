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
  
### Dockerfile
- FROM
- COPY/ADD
- RUN
- WORKDIR
- CMD
- EXPOSE

#### Uppgift: Dockerisera ett enkelt program

### Multi-stage (bra för ci/cd)
- Vi tar det i mån av tid

## Docker compose
- version
- services
- service name
- ports
- volumes
- networks

### Uppgift: Skapa docker-compose-fil för image från föregående uppgift