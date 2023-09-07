import { ReactNode } from 'react';

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section 
      className="mx-auto max-w-4xl px-4 lg:max-w-full lg:px-0"
    >
      {children}
    </section>
  )
}
