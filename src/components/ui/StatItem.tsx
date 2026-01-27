interface StatItemProps {
    label: string;
    value: string;
}

export function StatItem({ label, value }: StatItemProps) {
    return (
        <div className="text-center">
            <div className="text-2xl font-bold text-white">{value}</div>
            <div className="text-sm text-brand-slate uppercase tracking-wider">
                {label}
            </div>
        </div>
    );
}
