import { createClient } from "next-sanity";

const projectId = `${process.env.LOCAL_SANITY_PROJECT_ID}`;
const dataset = "production";
const apiVersion = "2023-10-07";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});