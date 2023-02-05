import { z } from "zod";
import { maxErrorObj, minErrorObj } from "@/utility/validations";

export const formSchema = z.object({
  name: z.string().min(2, minErrorObj(2)).max(50, maxErrorObj(50)),
  email: z.string().min(2, minErrorObj(2)).email(),
  phone: z.string().min(7, minErrorObj(7)).max(15, maxErrorObj(15)),
});

export const billingTypeSchema = z.enum(["monthly", "yearly"]);

export const planSchema = z.object({
  name: z.enum(["arcade", "advanced", "pro"]),
  price: z.number().positive().int().finite(),
});
