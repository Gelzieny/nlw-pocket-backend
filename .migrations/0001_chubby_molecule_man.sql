CREATE TABLE IF NOT EXISTS "goals_completions" (
	"id" text PRIMARY KEY NOT NULL,
	"goals_id" text NOT NULL,
	"title" text NOT NULL,
	"desired_weekly_frequency" integer NOT NULL,
	"create_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "goals_completions" ADD CONSTRAINT "goals_completions_goals_id_goals_id_fk" FOREIGN KEY ("goals_id") REFERENCES "public"."goals"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
