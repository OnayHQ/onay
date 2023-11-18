import Link from "next/link";

export const Logo = () => (
  <Link href="/">
    <svg
      width="114"
      height="47"
      viewBox="0 0 114 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hidden md:block"
    >
      <path
        d="M84 15.4518V14H84.4294L87.7423 14.1037C89.6237 14.1383 91.6687 14.1383 93.8773 14.1037L97.681 14H98.2331V15.4518V16.9036H97.1288C95.6564 16.9727 94.8793 17.111 94.7975 17.3184C94.7975 17.4221 96.638 21.5183 100.319 29.6069L104.982 19.548C105.227 18.9949 105.35 18.6838 105.35 18.6147C105.431 18.269 105.268 17.9233 104.859 17.5777C104.327 17.1283 103.611 16.9036 102.712 16.9036H102.466V15.4518V14H102.896L106.086 14.1037C107.926 14.1383 109.583 14.1383 111.055 14.1037L113.632 14H114V15.4518V16.9036H113.202C110.789 17.0073 109.297 17.5777 108.724 18.6147C108.724 18.5801 107.047 22.2269 103.693 29.5551L98.6626 40.651C97.6401 42.8287 96.1881 44.4879 94.3067 45.6286C92.2618 46.873 90.2577 47.2705 88.2945 46.8212C87.1493 46.5792 86.2086 46.0953 85.4724 45.3694C84.5317 44.4361 84.0613 43.3472 84.0613 42.1028C84.0204 41.5497 84.1431 41.0658 84.4294 40.651C84.6339 40.2016 85.0429 39.856 85.6564 39.614C86.4744 39.2338 87.3333 39.1473 88.2331 39.3547C88.8466 39.493 89.3579 39.735 89.7669 40.0806C90.0941 40.3572 90.3599 40.7201 90.5644 41.1695C90.728 41.7917 90.7076 42.4139 90.5031 43.0361C90.2986 43.52 89.9714 43.9348 89.5215 44.2805C89.2761 44.4188 89.1943 44.4879 89.2761 44.4879C89.317 44.5916 89.726 44.5916 90.5031 44.4879C91.9346 44.2114 93.1206 43.5373 94.0613 42.4658C94.6748 41.809 95.3701 40.6337 96.1472 38.9399C96.229 38.7671 96.3108 38.5943 96.3926 38.4214L97.3742 36.3474L93.0798 26.8588C90.3395 20.8097 88.8671 17.6122 88.6626 17.2666L88.2945 17.0592H88.2331C87.865 16.9555 86.863 16.9036 85.227 16.9036H84V15.4518ZM89.0307 44.4879C89.0716 44.4879 89.0307 44.4533 88.908 44.3842C88.7853 44.3151 88.6626 44.2632 88.5399 44.2287C88.3763 44.125 88.2536 44.0731 88.1718 44.0731L89.0307 44.4879Z"
        fill="#00168A"
      />
      <path
        d="M72.7863 14.0523C72.9414 13.9826 73.4841 13.9826 74.4146 14.0523C75.9266 14.0523 77.2642 14.2265 78.4273 14.575C80.2494 15.1325 81.7227 15.9514 82.847 17.0317C83.855 17.9726 84.5141 19.018 84.8243 20.1679C84.9018 20.4467 84.9599 22.7989 84.9987 27.2245C84.9987 31.5107 85.0375 33.7932 85.115 34.0719C85.3864 34.734 85.7935 34.9606 86.3363 34.7515C86.4138 34.7166 86.5107 34.6469 86.627 34.5424C86.8984 34.2985 87.0341 33.7583 87.0341 32.922C87.0729 32.7129 87.0923 32.347 87.0923 31.8243V29.838H88.5461H90V31.6675C90 32.9917 89.9806 33.7235 89.9418 33.8629C89.7092 35.2219 88.8175 36.2847 87.2667 37.0514C85.7547 37.7135 84.4172 37.9051 83.2541 37.6264C82.1298 37.3476 81.2768 36.7029 80.6953 35.6923C80.5402 35.4833 80.4239 35.2568 80.3464 35.0128L80.2882 34.8037L79.7648 35.2742C79.1057 35.8666 78.2916 36.3719 77.3223 36.79C75.4614 37.6612 73.4454 38.0619 71.2743 37.9923C68.6379 37.8877 66.5444 37.0862 64.9936 35.5878C64.4121 35.0651 63.9662 34.5075 63.6561 33.9151C62.9194 32.5213 62.8031 31.1274 63.3071 29.7335C64.005 27.8517 65.5945 26.3707 68.0758 25.2905C69.8592 24.489 71.914 23.9314 74.2402 23.6178C75.7134 23.3739 77.2642 23.2171 78.8925 23.1474H79.5322V21.8929C79.4934 21.0217 79.4353 20.4467 79.3577 20.1679C79.2414 19.7149 78.9894 19.2096 78.6017 18.6521C77.6713 17.4324 76.4694 16.7181 74.9962 16.509C74.1045 16.3696 72.8251 16.4045 71.158 16.6135C70.8478 16.6832 70.6734 16.7181 70.6346 16.7181C70.557 16.7181 70.6152 16.8052 70.809 16.9794C71.4294 17.7112 71.6426 18.5998 71.4487 19.6452C71.1386 20.83 70.305 21.5793 68.9481 21.8929C67.7075 22.1717 66.6219 21.9103 65.6915 21.1088C64.9936 20.5164 64.6641 19.7149 64.7028 18.7044C64.7416 18.1817 64.8967 17.6589 65.1681 17.1362C65.5945 16.4045 66.3699 15.7424 67.4942 15.15C68.8512 14.5576 70.6152 14.1917 72.7863 14.0523ZM79.5322 28.1654V25.5518H79.1833C78.4467 25.5518 77.6325 25.6389 76.7408 25.8132C75.4226 26.0223 74.1045 26.3707 72.7863 26.8586C70.654 27.7298 69.394 29.0017 69.0063 30.6744C68.8124 31.7546 69.045 32.7478 69.7041 33.6538C70.8672 35.2916 72.6118 35.8666 74.938 35.3787C75.0543 35.3439 75.1706 35.309 75.2869 35.2742C76.9928 34.856 78.214 33.9674 78.9507 32.6084C79.0282 32.4341 79.1057 32.2773 79.1833 32.1379C79.4159 31.3364 79.5322 30.0123 79.5322 28.1654Z"
        fill="#00168A"
      />
      <path
        d="M38.9791 14.3157C42.3795 14.1168 43.9987 14.0173 43.8368 14.0173H44.0797V15.7083V17.3993L44.7476 16.8024C46.4073 15.4099 48.3707 14.5478 50.6376 14.2162C52.5402 13.8847 54.4023 13.9344 56.2239 14.3654C57.1954 14.5312 58.0658 14.8794 58.8349 15.4099C60.1708 16.3051 60.9602 17.7142 61.203 19.6373C61.2435 19.8694 61.2638 22.1572 61.2638 26.5007C61.2638 30.7116 61.284 32.8336 61.3245 32.8667C61.4864 33.0988 62.6199 33.2149 64.7249 33.2149H66V34.6074V36H65.5142L61.6888 35.9005C59.4624 35.8674 57.2764 35.8674 55.1309 35.9005L51.4269 36H50.8805V34.6074V33.2149H52.1556C54.3011 33.2149 55.4345 33.0822 55.556 32.817V26.1028C55.5155 21.5272 55.3941 18.9908 55.1917 18.4934C54.8273 17.3993 53.9772 16.7195 52.6414 16.4543C51.7913 16.3217 50.8805 16.3382 49.9089 16.504C48.2492 16.8024 46.9133 17.5982 45.9013 18.8913C45.2941 19.5876 44.8691 20.4165 44.6262 21.378C44.5452 21.6764 44.4845 23.6327 44.444 27.2467V32.817C44.5655 33.0822 45.7192 33.2149 47.9051 33.2149H49.1803V34.6074V36H48.6945L44.8691 35.9005C42.6831 35.8674 40.4972 35.8674 38.3112 35.9005L34.4858 36H34V34.6074V33.2149H35.2751C37.3801 33.2149 38.5136 33.0988 38.6755 32.8667V19.0405C38.5136 18.2447 38.0076 17.7474 37.1575 17.5485C36.7122 17.449 36.024 17.3827 35.093 17.3495H34V15.9569V14.5644H34.1214L38.9791 14.3157Z"
        fill="#00168A"
      />
      <path
        d="M15.7914 0.0671428C20.0231 -0.311299 23.8935 0.910037 27.4027 3.73115C28.1596 4.31602 29.0541 5.21052 30.0862 6.41466C32.3568 9.23577 33.7502 12.6418 34.2663 16.6326C34.4039 17.7679 34.4211 19.1097 34.3179 20.6579C34.2835 20.7611 34.2663 20.8643 34.2663 20.9675C33.7846 25.0272 32.3396 28.5019 29.9314 31.3919C26.8694 35.0043 23.1194 37.0341 18.6813 37.4814C17.3051 37.5846 15.9462 37.533 14.6044 37.3265C10.2352 36.6041 6.63995 34.4022 3.81883 30.721C1.96102 28.2439 0.774087 25.44 0.258029 22.3092C0.0860096 21.4492 0 20.2966 0 18.8517C0 17.4755 0.103212 16.2542 0.309635 15.1876C0.688077 12.917 1.42776 10.8356 2.52868 8.94334C3.01034 8.11765 3.578 7.27475 4.23168 6.41466C5.2982 5.17612 6.2099 4.28162 6.96678 3.73115C9.54707 1.59811 12.4886 0.376778 15.7914 0.0671428ZM18.6297 2.69904C17.632 2.59583 16.8235 2.57863 16.2042 2.64743C13.0735 3.02588 10.6308 4.67726 8.8762 7.60159C8.66977 7.94563 8.48055 8.30687 8.30853 8.68531C7.44844 10.4743 6.89798 12.6934 6.65715 15.3425C6.51953 16.5122 6.50233 18.2152 6.60554 20.4514C6.63995 20.7267 6.65715 20.9331 6.65715 21.0707C6.89798 23.9606 7.44844 26.3861 8.30853 28.3471C9.8223 31.7531 12.1102 33.8517 15.1721 34.643C15.3097 34.6774 15.4645 34.7118 15.6366 34.7462C16.6343 34.9527 17.6492 34.9527 18.6813 34.7462C21.8121 34.127 24.1859 32.1315 25.8029 28.76C25.8717 28.6224 25.9405 28.4847 26.0093 28.3471C26.8694 26.3861 27.4199 23.9606 27.6607 21.0707C27.7983 19.8322 27.8155 18.112 27.7123 15.9101C27.6779 15.6693 27.6607 15.4801 27.6607 15.3425C27.4199 12.1773 26.6802 9.59702 25.4417 7.60159C23.7903 4.84928 21.5196 3.2151 18.6297 2.69904Z"
        fill="#00168A"
      />
      <ellipse cx="17" cy="19" rx="13" ry="17" fill="#00168A" />
      <ellipse cx="17.5" cy="20.4706" rx="10.5" ry="11.7647" fill="#F5F5F5" />
      <ellipse cx="17.5" cy="20.6995" rx="8.5" ry="10.1112" fill="#05D5EA" />
      <ellipse cx="17" cy="21.2316" rx="5" ry="6.38605" fill="#062DA1" />
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
