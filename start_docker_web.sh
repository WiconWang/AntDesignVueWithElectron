#!/bin/bash
#  本文件用于生成Docker窗口编译并启动

echo "STEP1: 创建NODE缓存区域"
docker volume create --name node-repo

echo "STEP2: 调用Docker服务编译项目"
docker run -it --rm --name npm_install -v "$(pwd)":/mnt -v node-repo:/root/.npm -w /mnt node:16.14 sh -c "npm install --registry=https://registry.npmmirror.com"
echo "STEP2 END 依赖库安装完成"

echo "STEP3: 编译项目"
docker run -it --rm --name npm_install -v "$(pwd)":/mnt -v node-repo:/root/.npm -w /mnt node:16.14 sh -c "npm run build:web --registry=https://registry.npmmirror.com"
echo "STEP3 END 已编译至build-production"