import { integer, pgTable, text, timestamp} from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

export const goals = pgTable("goals", {
  id: text('id').primaryKey().$defaultFn(() => createId()),
  title: text('title').notNull(),
  desiredWeeklyFrequency: integer('desired_weekly_frequency').notNull(),
  createAt: timestamp('create_at', {withTimezone: true}).notNull().defaultNow(),
});

export const goalsCompletions = pgTable("goals_completions", {
  id: text('id').primaryKey().$defaultFn(() => createId()),
  goalsId: text('goals_id').references(() => goals.id).notNull(),
  title: text('title').notNull(),
  desiredWeeklyFrequency: integer('desired_weekly_frequency').notNull(),
  createAt: timestamp('create_at', {withTimezone: true}).notNull().defaultNow(),
});