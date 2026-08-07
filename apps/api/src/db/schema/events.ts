import { pgTable, uuid, varchar, integer, timestamp, pgEnum } from 'drizzle-orm/pg-core';
import { ENGAGEMENT_TYPES, EVENT_STATUSES } from '@event-marketplace/shared-types';
import { users } from './users';

export const engagementTypeEnum = pgEnum('engagement_type', ENGAGEMENT_TYPES);
export const eventStatusEnum = pgEnum('event_status', EVENT_STATUSES);

export const events = pgTable('events', {
  id: uuid('id').defaultRandom().primaryKey(),
  customerId: uuid('customer_id').notNull().references(() => users.id, {
    onDelete: 'cascade',
  }),
  title: varchar('title', { length: 255 }).notNull(),
  eventType: varchar('event_type', { length: 100 }).notNull(),
  engagementType: engagementTypeEnum('engagement_type').notNull().default('one_off'),
  startDate: timestamp('start_date').notNull(),
  endDate: timestamp('end_date'),
  location: varchar('location', { length: 255 }),
  guestCount: integer('guest_count'),
  budgetMin: integer('budget_min'),
  budgetMax: integer('budget_max'),
  status: eventStatusEnum('status').notNull().default('draft'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
