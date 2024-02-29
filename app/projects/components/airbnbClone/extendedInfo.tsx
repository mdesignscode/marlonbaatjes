"use client";

import { Button } from "@/app/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AirBnBExtendedInfo() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="space-y-2">
      {showMore && (
        <motion.div
          animate={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.5, opacity: 0 }}
        >
          <p>
            I actually built this project twice, it was a 6 month project by the
            ALX Africa bootcamp, written in Python and Flask. So why did I write
            it twice? Two reasons, I struggled for the life of me to get it
            online, so much so that I ultimately gave up and accepted I will
            never get it online (using free resources though), and, the code was
            pretty bad.
          </p>

          <p>
            So now I had this project I worked on for 6 months, but can&apos;t
            show it to anyone, that&apos;s a bummer, now what? Look for more
            projects to build to get experience.
          </p>
        </motion.div>
      )}

      <Button onClick={() => setShowMore(!showMore)} variant="outline">
        {showMore ? "Tell me less" : "Tell me more"}
      </Button>
    </div>
  );
}
