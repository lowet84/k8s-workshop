# Preparation



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

# Later stuff
Install Ingress Controller
```
kubectl apply -f .\traefik.yaml
```

Add to hosts file (C:\Windows\System32\drivers\etc\hosts)
```
127.0.0.1 traefik.elevate.se
```