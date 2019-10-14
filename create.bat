.\kind.exe create cluster --config .\config.yaml
$env:KUBECONFIG="$(.\kind.exe get kubeconfig-path --name="kind")"
kubectl apply -f .\traefik.yaml