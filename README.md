# Add the following to hosts file
```
C:\Windows\System32\drivers\etc\hosts

127.0.0.1 traefik.elevate.se
```

```
Set environment variable: (done automatically in create.bat)

powershell:
$env:KUBECONFIG="$(.\kind.exe get kubeconfig-path --name="kind")"

cmd:
kind get kubeconfig-path > kindpath
set /p KUBECONFIG=<kindpath && del kindpath
```