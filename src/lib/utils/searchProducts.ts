import { NormalizedProduct } from "@/lib/normalizeProducts";

/**
 * Simple Levenshtein distance for fuzzy matching.
 */
function levenshtein(a: string, b: string): number {
  const dp = Array.from({ length: a.length + 1 }, () =>
    Array(b.length + 1).fill(0)
  );

  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + 1, // replace
          dp[i][j - 1] + 1, // insert
          dp[i - 1][j] + 1 // delete
        );
      }
    }
  }
  return dp[a.length][b.length];
}

/**
 * Expands query to include related keywords.
 */
const relatedMap: Record<string, string[]> = {
  dress: ["bag", "shoe", "heels", "scarf", "skirt"],
  men: ["shirt", "jeans", "watch", "jacket"],
  women: ["dress", "heels", "jewelry", "handbag"],
  furniture: ["chair", "table", "sofa", "lamp"],
  tech: ["phone", "laptop", "tablet", "headphones"],
};

/**
 * Fuzzy + related search.
 */
export function searchProducts(
  products: NormalizedProduct[],
  query: string,
  count = 12
): NormalizedProduct[] {
  const q = query.toLowerCase();

  if (!q.trim()) {
    // no query → diversify categories instead of empty
    return diversify(products, count);
  }

  // Step 1: direct matches
  let results = products.filter(
    (p) => p.name.toLowerCase().includes(q) || p.title.toLowerCase().includes(q)
  );

  // Step 2: fuzzy matches (distance ≤ 2)
  if (results.length < count) {
    const fuzzyMatches = products.filter((p) => {
      const nameDist = levenshtein(p.name.toLowerCase(), q);
      const titleDist = levenshtein(p.title.toLowerCase(), q);
      return nameDist <= 2 || titleDist <= 2;
    });
    results = results.concat(fuzzyMatches);
  }

  // Step 3: related categories
  for (const key of Object.keys(relatedMap)) {
    if (q.includes(key)) {
      const related = relatedMap[key];
      results = results.concat(
        products.filter((p) =>
          related.some((r) => p.name.toLowerCase().includes(r))
        )
      );
    }
  }

  // Step 4: fallback (never empty → diversified set)
  if (results.length === 0) {
    results = diversify(products, count);
  }

  // Unique & limited
  const seen = new Set<number>();
  const unique = results.filter((p) => {
    if (seen.has(p.id)) return false;
    seen.add(p.id);
    return true;
  });

  return unique.slice(0, count);
}

/**
 * Helper: diversify products by category.
 */
function diversify(
  products: NormalizedProduct[],
  count: number
): NormalizedProduct[] {
  const categoryGroups: Record<string, NormalizedProduct[]> = {};
  for (const p of products) {
    const category = p.slug.split("-")[0]; // crude category
    if (!categoryGroups[category]) categoryGroups[category] = [];
    categoryGroups[category].push(p);
  }

  const result: NormalizedProduct[] = [];
  const categories = Object.keys(categoryGroups);

  while (result.length < count && categories.length > 0) {
    for (const category of categories) {
      if (categoryGroups[category]?.length > 0) {
        result.push(categoryGroups[category].pop()!);
      }
      if (result.length >= count) break;
    }
  }

  return result;
}
