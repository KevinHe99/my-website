import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 rounded-md bg-gray-200 px-2 py-0.5 text-sm font-medium font-semibold uppercase dark:bg-gray-700"
    >
      #{text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
