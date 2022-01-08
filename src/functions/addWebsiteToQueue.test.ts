
import { addWebsiteToQueue } from "./addWebsiteToQueue";

test("add Website To Queue", async () => {
  const result = await addWebsiteToQueue("https://www.google.com");
  
  expect(result.id).toBeDefined();
  expect(result.id).toHaveLength(36);

  expect(result.url).toBe("https://www.google.com");

  expect(typeof result.eta).toBe("number");
  expect(result.eta).toBeGreaterThan(0);
  
  expect(result.details_url).toBe(`/${result.id}/details`);
});