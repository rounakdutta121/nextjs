import { Metadata } from 'next'

export async function generateStaticParams() {
  return [
    { slug: 'innovations-in-energy-infrastructure' },
    { slug: 'healthy-living-nurturing-our-golden-years' },
    { slug: 'funnel-stages' },
    { slug: 'whisper-marketing' },
    { slug: 'design-brain-triggers' },
    { slug: 'psychology-almost-buying' },
  ]
}

export const metadata: Metadata = {
  title: 'Blog Post',
  description: 'Read our latest insights on digital marketing and design',
}

export { default } from './BlogContent'
