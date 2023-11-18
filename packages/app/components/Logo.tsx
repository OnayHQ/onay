import Link from "next/link";

export const Logo = () => (
  <Link href="/">
    <svg
      width="109"
      height="46"
      viewBox="0 0 109 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hidden md:block"
    >
      <path
        d="M83.3085 14.6005V13.1555H83.6697L86.4564 13.2587C88.039 13.2931 89.7592 13.2931 91.617 13.2587L94.8166 13.1555H95.281V14.6005V16.0455H94.3521C93.1136 16.1143 92.4599 16.2519 92.3911 16.4583C92.3911 16.5615 93.9393 20.6384 97.0356 28.6889L100.958 18.6774C101.164 18.1269 101.267 17.8173 101.267 17.7484C101.336 17.4044 101.198 17.0604 100.854 16.7163C100.407 16.2691 99.8051 16.0455 99.0482 16.0455H98.8418V14.6005V13.1555H99.2031L101.887 13.2587C103.435 13.2931 104.828 13.2931 106.067 13.2587L108.234 13.1555H108.544V14.6005V16.0455H107.873C105.843 16.1487 104.587 16.7163 104.106 17.7484C104.106 17.714 102.695 21.3437 99.8739 28.6373L95.6423 39.6809C94.7822 41.8484 93.5608 43.4997 91.9782 44.6351C90.2581 45.8736 88.5723 46.2693 86.9209 45.822C85.9576 45.5812 85.1663 45.0995 84.547 44.377C83.7557 43.4481 83.3601 42.3644 83.3601 41.1259C83.3257 40.5754 83.4289 40.0938 83.6697 39.6809C83.8417 39.2337 84.1858 38.8896 84.7018 38.6488C85.3899 38.2704 86.1124 38.1843 86.8693 38.3908C87.3853 38.5284 87.8154 38.7692 88.1594 39.1133C88.4346 39.3885 88.6583 39.7497 88.8303 40.197C88.9679 40.8162 88.9507 41.4355 88.7787 42.0548C88.6067 42.5364 88.3314 42.9493 87.953 43.2933C87.7466 43.4309 87.6778 43.4997 87.7466 43.4997C87.781 43.603 88.125 43.603 88.7787 43.4997C89.9828 43.2245 90.9805 42.5536 91.7718 41.4871C92.2879 40.8334 92.8727 39.6637 93.5264 37.9779C93.5952 37.8059 93.664 37.6339 93.7328 37.4619L94.5585 35.3976L90.9461 25.9538C88.6411 19.9331 87.4025 16.7507 87.2305 16.4067L86.9209 16.2003H86.8693C86.5596 16.0971 85.7167 16.0455 84.3406 16.0455H83.3085V14.6005ZM87.5401 43.4997C87.5745 43.4997 87.5401 43.4653 87.4369 43.3965C87.3337 43.3277 87.2305 43.2761 87.1273 43.2417C86.9897 43.1385 86.8865 43.0869 86.8177 43.0869L87.5401 43.4997Z"
        fill="black"
      />
      <path
        d="M71.4838 13.3298C71.6215 13.261 72.1031 13.261 72.9288 13.3298C74.2706 13.3298 75.4575 13.5019 76.4896 13.8459C78.1066 14.3964 79.4139 15.2049 80.4117 16.2714C81.3062 17.2003 81.891 18.2324 82.1663 19.3677C82.2351 19.643 82.2867 21.9652 82.3211 26.3345C82.3211 30.5662 82.3555 32.8196 82.4243 33.0949C82.6651 33.7485 83.0264 33.9722 83.508 33.7657C83.5768 33.7313 83.6628 33.6625 83.766 33.5593C84.0069 33.3185 84.1273 32.7852 84.1273 31.9595C84.1617 31.7531 84.1789 31.3919 84.1789 30.8758V28.9148H85.469H86.7592V30.721C86.7592 32.0284 86.742 32.7508 86.7076 32.8885C86.5011 34.2302 85.7098 35.2795 84.3337 36.0364C82.9919 36.6901 81.805 36.8793 80.7729 36.6041C79.7752 36.3288 79.0183 35.6924 78.5022 34.6947C78.3646 34.4882 78.2614 34.2646 78.1926 34.0238L78.141 33.8174L77.6765 34.2818C77.0917 34.8667 76.3692 35.3655 75.5091 35.7784C73.8577 36.6385 72.0687 37.0341 70.1421 36.9653C67.8026 36.8621 65.9448 36.0708 64.5687 34.5914C64.0526 34.0754 63.657 33.5249 63.3817 32.9401C62.7281 31.5639 62.6249 30.1877 63.0721 28.8116C63.6914 26.9538 65.1019 25.4916 67.3038 24.4251C68.8864 23.6338 70.7098 23.0833 72.774 22.7737C74.0813 22.5329 75.4575 22.3781 76.9025 22.3093H77.4701V21.0707C77.4357 20.2106 77.3841 19.643 77.3153 19.3677C77.2121 18.9205 76.9885 18.4216 76.6444 17.8712C75.8187 16.667 74.7522 15.9617 73.4449 15.7553C72.6536 15.6177 71.5183 15.6521 70.0389 15.8585C69.7637 15.9273 69.6088 15.9617 69.5744 15.9617C69.5056 15.9617 69.5572 16.0478 69.7293 16.2198C70.2797 16.9423 70.4689 17.8196 70.2969 18.8517C70.0217 20.0214 69.282 20.7611 68.0779 21.0707C66.9769 21.346 66.0136 21.0879 65.1879 20.2966C64.5687 19.7118 64.2762 18.9205 64.3106 17.9228C64.345 17.4067 64.4827 16.8906 64.7235 16.3746C65.1019 15.6521 65.79 14.9984 66.7877 14.4136C67.9919 13.8287 69.5572 13.4675 71.4838 13.3298ZM77.4701 27.2634V24.6831H77.1605C76.5068 24.6831 75.7843 24.7691 74.993 24.9412C73.8233 25.1476 72.6536 25.4916 71.4838 25.9733C69.5916 26.8334 68.4735 28.0891 68.1295 29.7405C67.9574 30.807 68.1639 31.7875 68.7487 32.682C69.7809 34.299 71.329 34.8667 73.3933 34.385C73.4965 34.3506 73.5997 34.3162 73.7029 34.2818C75.2167 33.869 76.3004 32.9917 76.9541 31.6499C77.0229 31.4779 77.0917 31.3231 77.1605 31.1855C77.3669 30.3942 77.4701 29.0868 77.4701 27.2634Z"
        fill="black"
      />
      <path
        d="M40.0641 13.8975C42.954 13.6911 44.3302 13.5879 44.1925 13.5879H44.399V15.3425V17.0971L44.9666 16.4778C46.3772 15.0328 48.0458 14.1383 49.9724 13.7943C51.5894 13.4503 53.1719 13.5019 54.7201 13.9491C55.5458 14.1211 56.2855 14.4824 56.9392 15.0328C58.0745 15.9617 58.7454 17.4239 58.9518 19.4193C58.9862 19.6601 59.0034 22.034 59.0034 26.5409C59.0034 30.9102 59.0206 33.1121 59.055 33.1465C59.1926 33.3873 60.1559 33.5077 61.9449 33.5077H63.0287V34.9527V36.3976H62.6158L59.3646 36.2944C57.4724 36.26 55.6146 36.26 53.7912 36.2944L50.6433 36.3976H50.1788V34.9527V33.5077H51.2625C53.0859 33.5077 54.0492 33.3701 54.1525 33.0949V26.1281C54.1181 21.3803 54.0148 18.7484 53.8428 18.2324C53.5332 17.0971 52.8107 16.3918 51.6754 16.1165C50.9529 15.9789 50.1788 15.9961 49.3531 16.1682C47.9426 16.4778 46.8072 17.3035 45.9471 18.6452C45.4311 19.3677 45.0698 20.2278 44.8634 21.2255C44.7946 21.5352 44.743 23.565 44.7086 27.315V33.0949C44.8118 33.3701 45.7923 33.5077 47.6501 33.5077H48.7339V34.9527V36.3976H48.321L45.0698 36.2944C43.212 36.26 41.3542 36.26 39.4964 36.2944L36.2452 36.3976H35.8324V34.9527V33.5077H36.9161C38.7051 33.5077 39.6684 33.3873 39.806 33.1465V18.8001C39.6684 17.9744 39.2384 17.4583 38.5159 17.2519C38.1375 17.1487 37.5526 17.0799 36.7613 17.0455H35.8324V15.6005V14.1555H35.9356L40.0641 13.8975Z"
        fill="black"
      />
      <path
        d="M15.7914 0.0671428C20.0231 -0.311299 23.8935 0.910037 27.4027 3.73115C28.1596 4.31602 29.0541 5.21052 30.0862 6.41466C32.3568 9.23577 33.7502 12.6418 34.2663 16.6326C34.4039 17.7679 34.4211 19.1097 34.3179 20.6579C34.2835 20.7611 34.2663 20.8643 34.2663 20.9675C33.7846 25.0272 32.3396 28.5019 29.9314 31.3919C26.8694 35.0043 23.1194 37.0341 18.6813 37.4814C17.3051 37.5846 15.9462 37.533 14.6044 37.3265C10.2352 36.6041 6.63995 34.4022 3.81883 30.721C1.96102 28.2439 0.774087 25.44 0.258029 22.3092C0.0860096 21.4492 0 20.2966 0 18.8517C0 17.4755 0.103212 16.2542 0.309635 15.1876C0.688077 12.917 1.42776 10.8356 2.52868 8.94334C3.01034 8.11765 3.578 7.27475 4.23168 6.41466C5.2982 5.17612 6.2099 4.28162 6.96678 3.73115C9.54707 1.59811 12.4886 0.376778 15.7914 0.0671428ZM18.6297 2.69904C17.632 2.59583 16.8235 2.57863 16.2042 2.64743C13.0735 3.02588 10.6308 4.67726 8.8762 7.60159C8.66977 7.94563 8.48055 8.30687 8.30853 8.68531C7.44844 10.4743 6.89798 12.6934 6.65715 15.3425C6.51953 16.5122 6.50233 18.2152 6.60554 20.4514C6.63995 20.7267 6.65715 20.9331 6.65715 21.0707C6.89798 23.9606 7.44844 26.3861 8.30853 28.3471C9.8223 31.7531 12.1102 33.8517 15.1721 34.643C15.3097 34.6774 15.4645 34.7118 15.6366 34.7462C16.6343 34.9527 17.6492 34.9527 18.6813 34.7462C21.8121 34.127 24.1859 32.1315 25.8029 28.76C25.8717 28.6224 25.9405 28.4847 26.0093 28.3471C26.8694 26.3861 27.4199 23.9606 27.6607 21.0707C27.7983 19.8322 27.8155 18.112 27.7123 15.9101C27.6779 15.6693 27.6607 15.4801 27.6607 15.3425C27.4199 12.1773 26.6802 9.59702 25.4417 7.60159C23.7903 4.84928 21.5196 3.2151 18.6297 2.69904Z"
        fill="#00168A"
      />
      <ellipse cx="17" cy="19" rx="13" ry="17" fill="#00168A" />
      <ellipse cx="17.5" cy="19.5" rx="10.5" ry="12.5" fill="#F5F5F5" />
      <ellipse cx="17.5" cy="19.7432" rx="8.5" ry="10.7432" fill="#05D5EA" />
      <ellipse cx="17" cy="20.3086" rx="5" ry="6.78517" fill="#062DA1" />
    </svg>
    <svg
      width="35"
      height="38"
      viewBox="0 0 35 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="md:hidden"
    >
      <path
        d="M15.7914 0.0671428C20.0231 -0.311299 23.8935 0.910037 27.4027 3.73115C28.1596 4.31602 29.0541 5.21052 30.0862 6.41466C32.3568 9.23577 33.7502 12.6418 34.2663 16.6326C34.4039 17.7679 34.4211 19.1097 34.3179 20.6579C34.2835 20.7611 34.2663 20.8643 34.2663 20.9675C33.7846 25.0272 32.3396 28.5019 29.9314 31.3919C26.8694 35.0043 23.1194 37.0341 18.6813 37.4814C17.3051 37.5846 15.9462 37.533 14.6044 37.3265C10.2352 36.6041 6.63995 34.4022 3.81883 30.721C1.96102 28.2439 0.774087 25.44 0.258029 22.3092C0.0860096 21.4492 0 20.2966 0 18.8517C0 17.4755 0.103212 16.2542 0.309635 15.1876C0.688077 12.917 1.42776 10.8356 2.52868 8.94334C3.01034 8.11765 3.578 7.27475 4.23168 6.41466C5.2982 5.17612 6.2099 4.28162 6.96678 3.73115C9.54707 1.59811 12.4886 0.376778 15.7914 0.0671428ZM18.6297 2.69904C17.632 2.59583 16.8235 2.57863 16.2042 2.64743C13.0735 3.02588 10.6308 4.67726 8.8762 7.60159C8.66977 7.94563 8.48055 8.30687 8.30853 8.68531C7.44844 10.4743 6.89798 12.6934 6.65715 15.3425C6.51953 16.5122 6.50233 18.2152 6.60554 20.4514C6.63995 20.7267 6.65715 20.9331 6.65715 21.0707C6.89798 23.9606 7.44844 26.3861 8.30853 28.3471C9.8223 31.7531 12.1102 33.8517 15.1721 34.643C15.3097 34.6774 15.4645 34.7118 15.6366 34.7462C16.6343 34.9527 17.6492 34.9527 18.6813 34.7462C21.8121 34.127 24.1859 32.1315 25.8029 28.76C25.8717 28.6224 25.9405 28.4847 26.0093 28.3471C26.8694 26.3861 27.4199 23.9606 27.6607 21.0707C27.7983 19.8322 27.8155 18.112 27.7123 15.9101C27.6779 15.6693 27.6607 15.4801 27.6607 15.3425C27.4199 12.1773 26.6802 9.59702 25.4417 7.60159C23.7903 4.84928 21.5196 3.2151 18.6297 2.69904Z"
        fill="#00168A"
      />
      <ellipse cx="17" cy="19" rx="13" ry="17" fill="#00168A" />
      <ellipse cx="17.5" cy="19.5" rx="10.5" ry="12.5" fill="#F5F5F5" />
      <ellipse cx="17.5" cy="19.7432" rx="8.5" ry="10.7432" fill="#05D5EA" />
      <ellipse cx="17" cy="20.3086" rx="5" ry="6.78517" fill="#062DA1" />
    </svg>
  </Link>
);