## 拉取代码
git pull

# 删除容器
docker rm -f project_of_50 &> /dev/null

# 重启容器
docker run -d --restart=on-failure:5\
    -p 667:80 \
    -v $PWD/:/usr/share/nginx/html \
    --name project_of_50 nginx
