import { useState, useEffect } from 'react';
import { Users, Eye } from 'lucide-react';
import { trackVisitor, getVisitorCount } from '../lib/firebase';

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function init() {
      try {
        await trackVisitor();
        const currentCount = await getVisitorCount();
        setCount(currentCount);
      } catch (error) {
        console.error("VisitorCounter Error:", error);
        // Fallback to a safe state instead of crashing
        setCount(0);
      }
    }
    init();
  }, []);

  if (count === null) return null;

  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-ivory/60">
      <Eye size={14} className="text-gold" />
      <span className="text-xs font-bold font-mono">{count.toLocaleString()}</span>
      <span className="text-[0.65rem] uppercase tracking-wider font-bold">زائر</span>
    </div>
  );
}
