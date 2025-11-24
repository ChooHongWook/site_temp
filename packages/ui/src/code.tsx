import { ReactNode } from 'react';

interface ICodeProps {
  children: ReactNode;
  className?: string;
}

export function Code({ children, className }: ICodeProps) {
  return <code className={className}>{children}</code>;
}
