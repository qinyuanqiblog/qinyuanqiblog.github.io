FROM harbor.test.com:80/public/centos7-nginx-1-20-2:v6.0.0

ARG NGINX_HTML_PATH='docker-build-会传参进来覆盖'
ENV NGINX_HTML_PATH ${NGINX_HTML_PATH}

ARG COPY_SOURCE_PATH='docker-build-会传参进来覆盖'
ENV COPY_SOURCE_PATH ${COPY_SOURCE_PATH}

# COPY: 定位到 构建后的资源 并复制到 nginx html 目录, 注意需要带上目录名称
COPY --chown=${APP_USER}:${APP_USER} ${COPY_SOURCE_PATH} ${NGINX_HOME}/html/${NGINX_HTML_PATH}
