# Docker

#### Uppgift: Installera docker och docker-compose (inkluderade i docker desktop för windows)

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
- named volume
- env
- command

#### Uppgift: Kör ett program från docker hub (image: gogs/gogs, port: 3000, data: /data)

### Exempel

```
version: '3.4'
services:
  demo:
    container_name: demo
    image: demo
    build: .
    volumes:
      - demo:/data
    environment:
      - HOSTNAME=myhost.com
    command: start-app
```

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
#### Uppgift: Starta appen i docker
- Sätt env "name" till ditt namn
#### Uppgift: Kontrollera att porten går att komma åt

## Multi-stage (bra för ci/cd)

- FROM as
- COPY --from=
- FROM en gång till

#### Uppgift: Gör en multi-stage build från första steget.

## Docker registry/hub

- registry

#### Uppgift: Skapa ett konto på docker hub om ni inte redan har det

- login
- push
- pull
- image ls
- rm
- rmi

#### Uppgift: Ladda upp er multi-stage image till docker hub

#### Uppgift: Starta en av dina kollegors image

# Kubernetes (K8S)
## Mer Intro

- Vad är Kubernetes?
- Vad är det bra för
- Hur använder man det?

#### Uppgift: Några slides

#### Uppgift: Installera kind (kubernetes in docker)

```
curl.exe -Lo kind.exe https://github.com/kubernetes-sigs/kind/releases/download/v0.5.1/kind-windows-amd64
```

#### Uppgift: Starta klustret

```
.\kind.exe create cluster --config .\config.yaml
$env:KUBECONFIG="$(.\kind.exe get kubeconfig-path --name="kind")"
```

#### Uppgift: Kontrollera att klustret är uppe

```
kubectl get nodes
```

## kubectl
- get <pods/deploy/svc/ing/all>
- apply
- delete
- describe
- namespace

## Pod

- Minsta beståndsdelen i ett kluster
- En eller flera docker-containers som kör på samma maskin
- Sidoappar kallas ofta sidecars

#### Uppgift: Starta en fristående pod i klustret
```
kubectl run console --image=alpine --restart=Never -- tail -f /dev/null
```

#### Uppgift: Kontrollera att podden kör
```
kubectl get pods
```

#### Uppgift: Kör sh på podden med exec
```
kubectl exec -it console -- sh
```

## K8S-config

```
apiVersion: <api-version>
kind: <typ av tjänst>
metadata:
  name: <namn>
spec:
  (...)
```

## Deployment
- En "beställning av poddar"
- Hur många skall köras
- Används för att skala upp och ner klustret

#### Uppgift: Skapa en deployment för appen från föregående uppgifter
#### Uppgift: Kontrollera att porten går att nå från den fristående podden (hitta ip med kubectl describe)

- Volume
- Hostpath
- Environment

#### Uppgift: Uppdatera deployment med 

## Service
- Nätverkslager som binder ihop poddar till en gemensam, lastbalanserad ip med dns-namn.

## Ingress

#### Uppgift: Starta loadBalancer
```
kubectl apply -f .\traefik.yaml
```

#### Uppgift: Uppdatera hosts
```
127.0.0.1 traefik.elevate.se
127.0.0.1 demo.elevate.se
```


## DaemonSet

## LoadBalancer Service
