import { ReactNode } from 'react';

export default function Layout ( { children, top }: { children: ReactNode ; top: ReactNode} )
{
  return (
    <div>
      {children}
    </div>
  )
}