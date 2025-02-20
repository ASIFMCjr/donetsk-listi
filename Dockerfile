FROM oven/bun

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile --production
COPY . .
RUN bun run build
CMD [ "bun", "run", "builded" ]
