type Props = {
  className?: string
}

export function RoundedRightArrow({ className, ...props }: Props) {
  return (
    <svg
      // width="52"
      // height="53"
      viewBox="0 0 52 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g clipPath="url(#clip0_330_672)">
        <path
          d="M51.25 26.5C51.25 40.4452 39.9452 51.75 26 51.75C12.0548 51.75 0.75 40.4452 0.75 26.5C0.75 12.5548 12.0548 1.25 26 1.25C39.9452 1.25 51.25 12.5548 51.25 26.5Z"
          // fill="#FF32A0"
          // stroke="#FF32A0"
          strokeWidth="1.5"
        />
        <path
          d="M16 26.5L36 26.5M36 26.5L28.5 34.5M36 26.5L28.5 18.5"
          strokeWidth="1.5"
          // stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_330_672">
          <rect
            width="52"
            height="52"
            fill="white"
            transform="translate(52 0.5) rotate(90)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
