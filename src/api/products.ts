import { prisma } from "@/utils/prisma";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

export default router;
