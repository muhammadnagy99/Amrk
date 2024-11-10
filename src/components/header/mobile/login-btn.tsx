export default function LoginBtn() {
    return(
        <div
        className="flex w-full flex-row justify-center items-center gap-[16px]"
      >
        <p className=" text-transparent bg-gradient-to-r from-[#b0438a] to-[#dc87be] font-rubik text-[14px] font-medium text-right bg-clip-text">
          تسجيل الدخول
        </p>

        <svg
          width="16"
          height="16"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12V10.6667H1.33333V1.33333H6V0H1.33333C0.966668 0 0.652668 0.130667 0.391335 0.392C0.130002 0.653333 -0.000442505 0.967111 1.90735e-06 1.33333V10.6667C1.90735e-06 11.0333 0.130446 11.3473 0.391335 11.6087C0.652224 11.87 0.966224 12.0004 1.33333 12H6ZM7.33333 9.33333L8.25 8.36667L6.55 6.66667H12V5.33333H6.55L8.25 3.63333L7.33333 2.66667L4 6L7.33333 9.33333Z"
            fill="url(#paint0_linear_291_3637)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_291_3637"
              x1="12"
              y1="6"
              x2="0"
              y2="6"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B0438A" />
              <stop offset="1" stopColor="#DC87BE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
}