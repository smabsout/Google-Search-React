import bookRoutes from "./books";
import searchRoutes from "./search";
import router from "express";

// Book routes
router.use("/books", bookRoutes);
router.use("/search", searchRoutes);

export default router;
