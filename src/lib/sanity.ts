import { createClient } from "next-sanity";

const projectId = "i3aax9ox";
const dataset = "production";
const apiVersion = "2023-10-07";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
