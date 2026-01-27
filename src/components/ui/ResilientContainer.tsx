"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, Inbox, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResilientContainerProps {
    isLoading?: boolean;
    isError?: boolean;
    isEmpty?: boolean;
    errorTitle?: string;
    errorMessage?: string;
    emptyTitle?: string;
    emptyMessage?: string;
    loadingMessage?: string;
    children: React.ReactNode;
    className?: string;
}

export function ResilientContainer({
    isLoading,
    isError,
    isEmpty,
    errorTitle = "Algo salió mal",
    errorMessage = "No pudimos cargar la información en este momento.",
    emptyTitle = "Sin resultados",
    emptyMessage = "No hay elementos para mostrar.",
    loadingMessage = "Cargando...",
    children,
    className,
}: ResilientContainerProps) {
    return (
        <div className={cn("relative min-h-[200px] w-full", className)}>
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center py-12 text-center"
                    >
                        <Loader2 className="w-10 h-10 text-brand-blue animate-spin mb-4" />
                        <p className="text-brand-slate font-medium">{loadingMessage}</p>
                    </motion.div>
                ) : isError ? (
                    <motion.div
                        key="error"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="flex flex-col items-center justify-center py-12 px-6 text-center bg-red-50 dark:bg-red-950/20 rounded-2xl border border-red-100 dark:border-red-900/30"
                    >
                        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
                        <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-2">{errorTitle}</h3>
                        <p className="text-brand-slate max-w-md">{errorMessage}</p>
                    </motion.div>
                ) : isEmpty ? (
                    <motion.div
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center py-12 px-6 text-center"
                    >
                        <Inbox className="w-12 h-12 text-brand-slate/40 mb-4" />
                        <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-2">{emptyTitle}</h3>
                        <p className="text-brand-slate max-w-md">{emptyMessage}</p>
                    </motion.div>
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
