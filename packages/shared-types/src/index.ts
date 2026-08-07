export const USER_ROLES = ['super_admin', 'admin', 'customer'] as const;
export type UserRole = (typeof USER_ROLES)[number];

export const ENGAGEMENT_TYPES = ['one_off', 'ongoing', 'retainer'] as const;
export type EngagementType = (typeof ENGAGEMENT_TYPES)[number];

export const EVENT_STATUSES = ['draft', 'published', 'cancelled', 'completed'] as const;
export type EventStatus = (typeof EVENT_STATUSES)[number];
