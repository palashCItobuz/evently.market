export declare const USER_ROLES: readonly ['super_admin', 'admin', 'customer'];
export type UserRole = (typeof USER_ROLES)[number];

export declare const ENGAGEMENT_TYPES: readonly ['one_off', 'ongoing', 'retainer'];
export type EngagementType = (typeof ENGAGEMENT_TYPES)[number];

export declare const EVENT_STATUSES: readonly ['draft', 'published', 'cancelled', 'completed'];
export type EventStatus = (typeof EVENT_STATUSES)[number];
