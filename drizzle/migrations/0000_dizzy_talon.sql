CREATE TABLE `scopes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `subscribers` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`scopeId` integer,
	`createdAt` text DEFAULT 'sql`(CURRENT_TIMESTAMP)`' NOT NULL,
	`isVerified` integer DEFAULT false,
	FOREIGN KEY (`scopeId`) REFERENCES `scopes`(`id`) ON UPDATE no action ON DELETE no action
);
