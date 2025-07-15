import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const dancePoses = pgTable("dance_poses", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // "fundamental", "intermediate", "advanced"
  poseNumber: integer("pose_number").notNull(),
  imageUrl: text("image_url").notNull(),
  symbolism: text("symbolism"),
  difficulty: integer("difficulty").notNull(), // 1-5 scale
  bodyParts: text("body_parts").array().notNull(), // ["arms", "legs", "torso", "head"]
  mudraType: text("mudra_type"), // specific hand gesture type
  isActive: boolean("is_active").default(true),
});

export const timelineEvents = pgTable("timeline_events", {
  id: serial("id").primaryKey(),
  year: integer("year").notNull(),
  era: text("era").notNull(), // "past", "present", "future"
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url"),
  significance: text("significance").notNull(),
  innovations: text("innovations").array(),
  keyFigures: text("key_figures").array(),
});

export const culturalElements = pgTable("cultural_elements", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(), // "costume", "music", "temple", "tradition"
  description: text("description").notNull(),
  origin: text("origin").notNull(),
  significance: text("significance").notNull(),
  modernAdaptation: text("modern_adaptation"),
  imageUrl: text("image_url"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertDancePoseSchema = createInsertSchema(dancePoses).omit({
  id: true,
  isActive: true,
});

export const insertTimelineEventSchema = createInsertSchema(timelineEvents).omit({
  id: true,
});

export const insertCulturalElementSchema = createInsertSchema(culturalElements).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type DancePose = typeof dancePoses.$inferSelect;
export type InsertDancePose = z.infer<typeof insertDancePoseSchema>;
export type TimelineEvent = typeof timelineEvents.$inferSelect;
export type InsertTimelineEvent = z.infer<typeof insertTimelineEventSchema>;
export type CulturalElement = typeof culturalElements.$inferSelect;
export type InsertCulturalElement = z.infer<typeof insertCulturalElementSchema>;
