---
title: "20260121-131948-simple-get-function-service-backend"
created: 2026-01-21T13:19:48+01:00
TAGS: #backend #crud
---

<!-- markdownlint-disable -->

# 20260121-131948-simple-get-function-service-backend

# service

```typescript
import { db } from "../database.js";

export const getAllObjects = async (): Promise<Result<Object[]>> => {
  try {
    const { rows } = await db.query<Object>(
      `
      SELECT object_id, object_name, object_m2, object_rent FROM objects;
`,
    );
    return { ok: true, data: rows };
  } catch (error) {
    return { ok: false, error };
  }
};
```

# controller

```typescript
import objectService from "../services/objectService";

export const getAllObjects = async (_req: Request, res: Response) => {
  try {
    const rows = await objectService.getAllObjects();
    return res.status(201).json(rows);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
```

# routes

```typescript
import { Router } from "express";
import getAllObjects from "../controllers/objectController";

const router = Router();

router.get("/objects", getAllObjects);

export default router;
```
