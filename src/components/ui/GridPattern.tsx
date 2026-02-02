"use client";

export const GridPattern = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(129 140 248 / 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(129 140 248 / 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-purple-500/5" />

      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-primary/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-purple-500/10 via-purple-500/5 to-transparent blur-3xl" />

      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-beam" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-beam-delay" />
    </div>
  );
};
