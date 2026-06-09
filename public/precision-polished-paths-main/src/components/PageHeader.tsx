interface PageHeaderProps {
  title: string;
  lead?: string;
}

export default function PageHeader({ title, lead }: PageHeaderProps) {
  return (
    <div className="pt-32 pb-12 px-6 bg-[color:var(--color-surface-raised)] border-b border-[color:var(--color-border)]">
      <div className="max-w-[1280px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[color:var(--color-content-primary)] tracking-[-0.03em]">
          {title}
        </h1>
        {lead && (
          <p className="mt-4 text-base text-[color:var(--color-content-secondary)] leading-relaxed max-w-[600px]">
            {lead}
          </p>
        )}
      </div>
    </div>
  );
}
