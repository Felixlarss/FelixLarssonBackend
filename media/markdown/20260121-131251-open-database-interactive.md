---
title: "20260121-131251-open-database-interactive"
created: 2026-01-21T13:12:51+01:00
TAGS:
---

<!-- markdownlint-disable -->

# 20260121-131251-open-database-interactive

# To open a database as interactive

> Be where the docker-compose.yaml of the database is and exec this

```bash
sudo docker compose exec -it database psql -U postgres
```
