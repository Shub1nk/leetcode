FROM node:24-slim

RUN apt-get update \
  && apt-get install -y --no-install-recommends git openssh-client locales \
  && sed -i 's/# ru_RU.UTF-8 UTF-8/ru_RU.UTF-8 UTF-8/' /etc/locale.gen \
  && locale-gen \
  && rm -rf /var/lib/apt/lists/*

ENV LANG=ru_RU.UTF-8 \
    LC_ALL=ru_RU.UTF-8 \
    LANGUAGE=ru_RU:ru

ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable

WORKDIR /workspaces/leetcode
RUN mkdir -p /workspaces/leetcode/node_modules && chown -R node:node /workspaces/leetcode
