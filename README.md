# Förberedel



Install kind:
```
curl.exe -Lo kind.exe https://github.com/kubernetes-sigs/kind/releases/download/v0.5.1/kind-windows-amd64
```

Set up the cluster:
```
.\kind.exe create cluster --config .\config.yaml
```

Set environment variable:
```
powershell:
$env:KUBECONFIG="$(.\kind.exe get kubeconfig-path --name="kind")"

cmd:
kind get kubeconfig-path > kindpath
set /p KUBECONFIG=<kindpath && del kindpath
```

# Kubectl commands
List stuff:
```
kubectl get pods
kubectl get deploy
kubectl get svc
kubectl get ing
kubectl get all
kubectl get all --all-namespaces

kubectl apply -f <config.yaml>
kubectl delete -f <config.yaml>
kubectl delete <type>/<app> (type is deploy, svc, ing etc)
```


# Later stuff
Add to hosts file (C:\Windows\System32\drivers\etc\hosts)
```
127.0.0.1 traefik.elevate.se
```

Install Ingress Controller
```
kubectl apply -f .\traefik.yaml
```

Run a container in the cluster
```
kubectl run console --image=alpine --restart=Never -- tail -f /dev/null
kubectl delete pod/console
```
