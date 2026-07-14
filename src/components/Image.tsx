import { X } from 'lucide-react';

export default function ImageModal({ zoomedImg, setZoomedImg }: any) {
  if (!zoomedImg) return null;
  return (
    <div className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 cursor-zoom-out transition-all" onClick={() => setZoomedImg(null)}>
      <button 
        aria-label="Close full-screen image"
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
        onClick={() => setZoomedImg(null)}
      >
        <X size={36} />
      </button>
      <img src={zoomedImg} alt="Enlarged project view" className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
    </div>
  );
}