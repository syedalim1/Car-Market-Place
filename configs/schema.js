import { integer, json, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const CarListing = pgTable("CarListing", {
  id: serial("id").primaryKey(),
  listing_title: varchar("listing_title").notNull(),
  tagline: varchar("tagline"),
  original_price: varchar("original_price"),
  selling_price: varchar("selling_price").notNull(),
  category: varchar("category").notNull(),
  condition: varchar("condition").notNull(),
  make: varchar("make").notNull(),
  model: varchar("model"),
  year: varchar("year"),
  drive_type: varchar("drive_type").notNull(),
  transmission: varchar("transmission").notNull(),
  fuel_type: varchar("fuel_type").notNull(),
  mileage: varchar("mileage").notNull(),
  engine_size: varchar("engine_size"),
  cylinder: varchar("cylinder"),
  color: varchar("color").notNull(),
  door: varchar("door").notNull(),
  offer_type: varchar("offer_type"),
  vin: varchar("vin"),
  listing_description: varchar("listing_description").notNull(),
  features: json("features"),
  createdBy: varchar("createdBy").notNull(),
  username: varchar("userName").notNull().default("M Syed Ali"),
  userImageUrl: varchar("userimageurl").default(
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEACwsLCwvLDI3NzJFS0JLRWZeVlZeZptvd293b5vrk6yTk6yT69D8zb/N/ND///////////////////////////8BLCwsLC8sMjc3MkVLQktFZl5WVl5mm293b3dvm+uTrJOTrJPr0PzNv8380P/////////////////////////////CABEIAMcAmwMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAAAQIDBP/aAAgBAQAAAADtYAIAExIFYsdqEMCcdhSqJ5umgYAuXqQkUcm+svQWVTx9rBjOTfWNZDO55OxpTE6RldbQSZg6LkhIaeaobAtxSqM522TM8DSwmstdcJdZId3mbGYoenQLm5oV6drrLj11zz3nJCgG8bvUUdmJeOOs3nF78fRl1aGHbfLWOemevNF9vHZ01quCruM7QXIN9LjCjNjWehagm9K58O0iqcznZLcDGtSVQS1SlaITrK7SinLaVDQOM9WghVSm2TQnI2sbbAEaUVy3VJCQtii4xzWlREaDp4OiFqawqG3jvhrjtrzaQ5V9GRCFOmdPHUWr1qlmapZo0SmhVT//xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/9oACgICEAMQAAAA6YhakUKsuZcdNYzqN5xveKzTnvU49Drzl3kzoxrUlLM3ULIlsAlsLCUoBJLQEUJbmgFioLFQUlsAQAmrAIKCCyUzSwAJaRUUSVY1n//EADIQAAICAgECBAQFBAIDAAAAAAECABEDIRIxQRMiUWEQQlKBBCAycZEUI1OhM2I0krH/2gAIAQEAAT8A/Jfv+bfx3+W5c3Bfw+1zJlKkgDpA1/lHwr4GLkYsBo3PtNGGvhznMTmsJsHWplWmar0IBXQAaEsyzLMBYzagTmZznL3h3VqpgUeIurF9oBXavhylmVOIlAdoenf7RwS36jMVEGjcoxzxUmrqKOQv4lYrFmI41UqPpT0lIGBUke8X2BHw1KEqAfHIg5mgOnYTEG4IKPwZQ4KcqJlAAASwekuAiUEyMS2m6SwehEPfXaBKYBk7wdLHSVNS0+oQkr3fqe1w5iAa/wDhEXKV+UzxMh/TjacmrbEmdW+2+5MAHTcQ8XsDtVRsum8hGoMgoeWDKpAI2DFfRpe8LtqxUIJot17xh31x7QsexgN2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"
  ),
  postedOn: varchar("postedOn"),
});

export const CarImages = pgTable("carImages", {
  id: serial("id").primaryKey(),
  imageUrl: varchar("imageUrl").notNull(),
  carlistingId: integer("carlistingId")
    .notNull()
    .references(() => CarListing.id),
});
