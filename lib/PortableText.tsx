'use client'

import { PortableText as PortableTextComponent } from '@portabletext/react'

export const PortableText = ({ value }: { value: any }) => {
  return (
    <PortableTextComponent
      value={value}
      components={{
        block: {
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>
          ),
          normal: ({ children }) => (
            <p className="text-lg leading-relaxed mb-4">{children}</p>
          ),
        },
        list: {
          bullet: ({ children }) => (
            <ul className="list-disc list-inside ml-6 mb-4">{children}</ul>
          ),
          number: ({ children }) => (
            <ol className="list-decimal list-inside ml-6 mb-4">{children}</ol>
          ),
        },
        listItem: {
          bullet: ({ children }) => <li>{children}</li>,
          number: ({ children }) => <li>{children}</li>,
        },
      }}
    />
  )
}
