# Docker
## Intro
- Vad är Docker?
- Hur använder man det?

#### Uppgift: Kort genomgång

## docker command

#### Uppgift: Starta en interaktiv container
```
docker run --rm -it alpine sh
```

### Fullt exempel
```
docker run --name=demo -p 80:8080 -v demo:/data -d -e HOSTNAME=myhost.com mycompany/myimage start-app 
```

- docker run 
- image
- dockerhub/registry 
- name
- rm
- daemon mode 
- port
- volume
- env
- command

#### Uppgift: Kör ett program från docker hub (image: gogs/gogs, port: 3000, data: /data)
  

## Docker compose
- version
- services
- service name
- ports
- volumes
- networks

#### Uppgift: Gör om samma program från föregående uppgift i docker-compose


## Dockerfile
- FROM
- COPY/ADD
- RUN
- WORKDIR
- CMD
- EXPOSE

#### Uppgift: Dockerisera demoappen i Demo/App

## Multi-stage (bra för ci/cd)
- FROM as 
- COPY --from=
- FROM en gång till

#### Uppgift: Gör en multi-stage build från första steget. 

## Docker hub

#### Uppgift: Skapa ett konto på docker hub om ni inte redan har det

- docker login
- docker push

#### Uppgift: Ladda upp er multi-stage image till docker hub

# Kubernetes
## Mer Intro
- Vad är Kubernetes?
- Vad är det bra för
- Hur använder man det?

#### Uppgift: Några slides

## Pod
#### Uppgift: Starta en fristående pod i klustret
#### Uppgift: Kontrollera att podden kör
#### Uppgift: Kör sh på podden med exec

## Deployment

## Service

## Ingress

## DaemonSet

## LoadBalancer Service