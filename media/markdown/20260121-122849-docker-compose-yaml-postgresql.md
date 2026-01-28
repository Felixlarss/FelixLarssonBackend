---
title: "20260121-122849-docker-compose"
created: 2026-01-21T12:28:49+01:00
TAGS: #postgres #docker
---

<!-- markdownlint-disable -->

# 20260121-122849-docker-compose

> This is a docker compose file for postgres

```yaml
services:
  database:
    image: "postgres:latest"
    ports:
      - 5433:5432

    volumes:
      - db-data:/var/lib/postgres/data/postgresql:rw
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: secret
      PGDATA: /var/lib/postgres/data/postgresql

volumes:
  db-data:
```
