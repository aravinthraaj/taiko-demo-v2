type Props = {
  className?: string
}

export function RightArrow({ className, ...props }: Props) {
  return (
    <svg
      // width="25"
      // height="24"
      viewBox="0 0 25 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M13.672 12L8.722 7.04999L10.136 5.63599L16.5 12L10.136 18.364L8.722 16.949L13.672 11.999L13.672 12Z" />
    </svg>
  )
}
