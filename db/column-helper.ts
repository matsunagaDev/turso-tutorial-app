import { integer, text } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';
import { nanoid } from 'nanoid';

export const id = text('id')
  .primaryKey()
  .$defaultFn(() => nanoid(10));

export const timestamps = {
  // createdAt: integer('created_at', { mode: 'timestamp_ms' })
  createdAt: integer('created_at', { mode: 'timestamp' })
    .default(sql`(unixepoch())`)
    .notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
    .default(sql`(unixepoch())`)
    .$onUpdate(() => sql`(unixepoch())`)
    .notNull(),
};
