import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "cm1qx0xy",
  dataset: "production",
  apiVersion: "2023-07-04",
});
