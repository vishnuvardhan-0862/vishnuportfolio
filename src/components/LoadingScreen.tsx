import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      {/* 3D Box Container */}
      <div className="relative w-24 h-24 perspective-1000">
        <motion.div
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformStyle: 'preserve-3d' }}
          className="w-full h-full relative"
        >
          {/* Cube Faces */}
          {[
            { transform: 'rotateY(0deg) translateZ(48px)', color: 'bg-primary/20' },
            { transform: 'rotateY(180deg) translateZ(48px)', color: 'bg-primary/40' },
            { transform: 'rotateY(90deg) translateZ(48px)', color: 'bg-primary/30' },
            { transform: 'rotateY(-90deg) translateZ(48px)', color: 'bg-primary/50' },
            { transform: 'rotateX(90deg) translateZ(48px)', color: 'bg-primary/25' },
            { transform: 'rotateX(-90deg) translateZ(48px)', color: 'bg-primary/45' },
          ].map((face, i) => (
            <div
              key={i}
              className={`absolute inset-0 border border-primary/50 ${face.color} backdrop-blur-sm flex items-center justify-center text-primary font-bold text-xl`}
              style={{ transform: face.transform, backfaceVisibility: 'hidden' }}
            >
              VK
            </div>
          ))}
        </motion.div>

        {/* Outer Glow */}
        <div className="absolute inset-x-[-50%] inset-y-[-50%] bg-primary/10 blur-[60px] rounded-full -z-10 animate-pulse" />
      </div>

      {/* Loading Text */}
      <div className="mt-16 text-center space-y-4">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl font-semibold tracking-widest uppercase text-foreground/80"
        >
          Vishnuvardhan <span className="text-primary font-bold tracking-tighter">Komakula</span>
        </motion.h2>
        
        {/* Progress Bar Container */}
        <div className="w-64 h-1 bg-secondary rounded-full overflow-hidden mx-auto border border-border">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-primary shadow-[0_0_15px_rgba(37,99,235,0.5)]"
          />
        </div>
        
        <p className="text-xs text-muted-foreground animate-pulse mt-2 transition-all">
          Preparing the Experience...
        </p>
      </div>

      {/* Decorative Particles (Optional, added for premium feel) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(var(--primary),0.02)_100%)] opacity-30" />
    </motion.div>
  );
};

export default LoadingScreen;
