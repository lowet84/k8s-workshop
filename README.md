# http://bit.ly/K8S-workshop
## https://github.com/lowet84/k8s-workshop/blob/master/README.md

# Docker

#### ==> Uppgift: Installera docker och docker-compose (inkluderade i docker desktop för windows)

## Intro

- Vad är Docker?
- App-virtualisering
- Dualitet

#### ==> Uppgift: Kort genomgång om docker

## docker command

#### ==> Uppgift: Starta en interaktiv container

```
docker run -i -t alpine sh
```

- ps (-a)
- rm (-f)

### Fullt exempel av docker run

```
docker run --name=demo -p 80:8080 -v demo:/data -d -e HOSTNAME=myhost.com mycompany/myimage start-app
```

- image/container
- dockerhub/registry
- name
- port
- volume
- named volume
- env
- rm
- daemon mode
- command

#### ==> Uppgift: Kör ett program från docker hub (image: gogs/gogs, port: 3000, data: /data)
#### ==> Uppgift: Ta bort containern och skapa en ny likadan. Kontrollera att data sparas.

## Docker compose

- yaml/yml
- version
- services
- service name
- ports
- volumes

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

#### ==> Uppgift: Gör om samma program från föregående ==> Uppgift i docker-compose

## Dockerfile

- FROM
- COPY/ADD
- RUN
- WORKDIR
- CMD
- EXPOSE

#### ==> Uppgift: Dockerisera demoappen i Demo/App
#### ==> Uppgift: Starta appen i docker
- Sätt env "name" till ditt namn
- montera en fil med någon text i till /host
#### ==> Uppgift: Kontrollera att porten går att komma åt

## Multi-stage (bra för ci/cd)

- FROM as
- COPY --from=
- FROM en gång till

#### ==> Uppgift: Gör en multi-stage build från första steget.

## Docker registry/hub

- registry

#### ==> Uppgift: Skapa ett konto på docker hub om ni inte redan har det

- login
- push
- pull
- image ls
- rm
- rmi

#### ==> Uppgift: Ladda upp er multi-stage image till docker hub

#### ==> Uppgift: Starta en av dina kollegors image

# Kubernetes (K8S)
## Mer Intro

- Vad är Kubernetes?
- Vad är det bra för
- Hur använder man det?

#### ==> Uppgift: Kort genomgång av Kubernetes

#### ==> Uppgift: Installera kind (kubernetes in docker)

```
curl.exe -Lo kind.exe https://github.com/kubernetes-sigs/kind/releases/download/v0.5.1/kind-windows-amd64
```

#### ==> Uppgift: Starta klustret

```
.\kind.exe create cluster --config .\config.yaml
$env:KUBECONFIG="$(.\kind.exe get kubeconfig-path --name="kind")"
```

#### ==> Uppgift: Kontrollera att klustret är uppe

```
kubectl get nodes
```

## kubectl
- get <pods/deploy/svc/ing/all>
- apply
- delete
- describe
- namespace

#### ==> Uppgift: Uppdatera hosts
```
127.0.0.1 traefik.elevate.se
127.0.0.1 demo.elevate.se
```

#### ==> Uppgift: Starta loadBalancer
```
kubectl apply -f .\traefik.yaml
```

## Pod

- Minsta beståndsdelen i ett kluster
- En eller flera docker-containers som kör på samma maskin
- Sidoappar kallas ofta sidecars

#### ==> Uppgift: Starta en fristående pod i klustret
```
kubectl run console --image=alpine --restart=Never -- tail -f /dev/null
```

#### ==> Uppgift: Kontrollera att podden kör
```
kubectl get pods
```

#### ==> Uppgift: Kör sh på podden med exec
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
  (konfiguration)
---
(nästa config)
```

## Deployment
- En "beställning av poddar"
- Hur många skall köras
- Används för att skala upp och ner klustret

Konfiguration för deployment:
- kind: Deployment
- apiVersion: extensions/v1beta1
```
(...)
spec:
  template:
    metadata:
      labels:
        <nyckel>: <värde>
    spec:
      containers:
        - image: <image>
          name: <namn på image>
          (...)
```

#### ==> Uppgift: Skapa en deployment för appen från föregående ==> Uppgifter (använd traefik.yml som utgångspunkt)
#### ==> Uppgift: Kontrollera att porten går att nå från den fristående podden (hitta ip med kubectl describe)

#### ==> Uppgift: Uppdatera deployment med:
### Environment (name=namn)
```
env:
- name: <environment-variabel>
  value: '<värde>'
```
### Volume/Hostpath (/etc/hostname:/host)

På container:
```
volumeMounts:
- mountPath: /<path i container>
  name: <namn på volume>
```
På spec:
```
volumes:
- name: <namn på volume>
  hostPath:
    path: <path på host>
```

## Service
- Nätverkslager som binder ihop poddar till en gemensam, lastbalanserad ip med dns-namn.

Konfiguration för service:
- kind: Service
- apiVersion: v1
```
(...)
spec:
  selector:
    <nyckel>: <värde> # Ska matcha från deployment
  ports:
    - protocol: TCP
      port: <portnummer>
      name: <namn på service>
```

#### ==> Uppgift: Skapa en service

## Ingress
Konfiguration för ingress:
- kind: Ingress
- apiVersion: extensions/v1beta1
```
(...)
spec:
  rules:
  - host: <host url>
    http:
      paths:
      - backend:
          serviceName: <namn på service>
          servicePort: <port på service>
```
#### ==> Uppgift: Skapa en ingress med host: demo.elevate.se
#### ==> Uppgift: Surfa till http://demo.elevate.se

## DaemonSet
- Selector

## LoadBalancer Service
#### ==> Uppgift: Surfa till http://traefik.elevate.se
- Finns i populära K8S-implementationer, t.ex. AKS eller Amazon EKS