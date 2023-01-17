interface Props {
  src: string
  alt: string
  loading?: 'eager' | 'lazy'
  className?: string
  title?: string
}

const Image = ({ src, alt, className, loading = 'lazy', title }: Props) => {
  return (
    <img
      src={src}
      alt={alt}
      height="1"
      width="1"
      title={title}
      loading={loading}
      className={className}
      style={{ width: 'auto' }}
    />
  )
}

export { Image }
