import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  maxWidth?: '3xl' | '4xl' | '6xl' | '7xl';
}

export default function PageLayout({ children, maxWidth = '7xl' }: PageLayoutProps) {
  const maxWidthClass = {
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
  }[maxWidth];

  return (
    <div className={`pt-32 pb-20 md:pt-40 md:pb-40 px-6 ${maxWidthClass} mx-auto`}>
      {children}
    </div>
  );
}
