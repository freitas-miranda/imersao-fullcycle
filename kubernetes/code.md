# Criar o cluster para desenvolvimento

## Instalar o KinD

### Download the latest version of KinD
[ $(uname -m) = x86_64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.20.0/kind-linux-amd64

### Make the binary executable
sudo chmod +x ./kind

### Move the binary to your executable path
sudo mv ./kind /usr/local/bin/kind

## Criar o arquivo 
cluster-config.yml

## Criar o cluster
kind create cluster --config=cluster-config.yml


# For AMD64 / x86_64
[ $(uname -m) = x86_64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.20.0/kind-linux-amd64

# For ARM64
[ $(uname -m) = aarch64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.20.0/kind-linux-arm64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind

# Acessar a porta de um Pod
kubectl port-forward pod/nginx-replicaset-6tj86 8080:80


