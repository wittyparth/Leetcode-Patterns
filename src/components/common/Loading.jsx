import React from 'react'
import { motion } from 'motion/react'

const Loading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1] // Custom easing for smooth animation
                }}
            >
                <motion.div
                    className="loading loading-spinner loading-lg text-primary"
                    animate={{
                        rotate: 360
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                ></motion.div>
                <motion.p
                    className="mt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    Loading LeetCode Patterns...
                </motion.p>
            </motion.div>
        </div>
    )
}

export default Loading