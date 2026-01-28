---
title: "20260106-122726-basic-docker-commands"
created: 2026-01-06T12:27:26+01:00
TAGS: #docker
---

<!-- markdownlint-disable -->

# 20260106-122726-basic-docker-commands

```bash
sudo systemctl start docker
#starts docker

docker compose up -d
#starts a database and detaches

docker compose down
#shuts down a database

sudo docker compose exec -it database psql -U postgres
#runs psql inside a docker container
```
