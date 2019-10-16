.\kind.exe create cluster --config .\config.yaml
.\setconfig.bat
kubectl apply -f .\traefik.yaml