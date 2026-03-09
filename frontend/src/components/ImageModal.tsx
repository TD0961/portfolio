import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
}

const ImageModal = ({ isOpen, onClose, imageSrc }: ImageModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-xl bg-gray-950/80 cursor-zoom-out"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative max-w-4xl max-h-[90vh] z-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute -top-12 right-0 md:-right-12 p-2 text-white/50 hover:text-white transition-colors cursor-pointer"
                        >
                            <X size={32} />
                        </button>

                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900">
                            <img
                                src={imageSrc}
                                alt="Profile Large"
                                className="w-full h-full object-contain max-h-[85vh] select-none"
                            />

                            {/* Subtle glass overlay for that premium feel */}
                            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-3xl" />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ImageModal;
