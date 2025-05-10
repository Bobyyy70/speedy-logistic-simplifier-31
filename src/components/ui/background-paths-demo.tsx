
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function BackgroundPathsDemo() {
  return (
    <BackgroundPaths className="min-h-screen flex items-center justify-center" preserveBackground={false} opacity={0.25}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="container mx-auto px-4 md:px-6 text-center max-w-4xl"
      >
        <h1 className="text-5xl sm:text-7xl font-bold mb-8 tracking-tighter">
          Background Paths
        </h1>

        <div className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Button
            variant="ghost"
            className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 text-black dark:text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10 hover:shadow-md dark:hover:shadow-neutral-800/50"
          >
            <span className="opacity-90 group-hover:opacity-100 transition-opacity">
              Discover Excellence
            </span>
            <span className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
              →
            </span>
          </Button>
        </div>
      </motion.div>
    </BackgroundPaths>
  );
}
