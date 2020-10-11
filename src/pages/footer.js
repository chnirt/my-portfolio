import React from "react"

export default function Footer() {
  const Logo = () => (
    <svg
      class="h-10"
      width="135"
      height="19"
      viewBox="0 0 135 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.24219 9.80548L11.1562 12.4305V15.2781L1.34766 10.907V8.64532L11.1562 4.28595V7.13361L4.24219 9.80548ZM15.082 18.6649H12.8438L19.5586 0.137512H21.7969L15.082 18.6649ZM63.6797 14.2C64.2109 14.2 64.6211 14.3524 64.9102 14.657C65.1992 14.9539 65.3438 15.3289 65.3438 15.782C65.3438 16.2274 65.1992 16.5984 64.9102 16.8953C64.6211 17.1844 64.2109 17.3289 63.6797 17.3289C63.1719 17.3289 62.7695 17.1844 62.4727 16.8953C62.1758 16.6063 62.0273 16.2352 62.0273 15.782C62.0273 15.3289 62.1719 14.9539 62.4609 14.657C62.75 14.3524 63.1562 14.2 63.6797 14.2ZM130.641 9.74689L123.398 7.08673V4.28595L133.523 8.64532V10.907L123.398 15.2664V12.4656L130.641 9.74689Z"
        fill="#15566A"
      />
      <path
        d="M29.3555 17.4344C27.5508 17.4344 26.0859 16.868 24.9609 15.7352C23.8438 14.5945 23.2852 13.0789 23.2852 11.1883V10.8367C23.2852 9.57111 23.5273 8.4422 24.0117 7.45001C24.5039 6.45001 25.1914 5.67267 26.0742 5.11798C26.957 4.56329 27.9414 4.28595 29.0273 4.28595C30.7539 4.28595 32.0859 4.83673 33.0234 5.93829C33.9688 7.03986 34.4414 8.59845 34.4414 10.6141V11.7625H26.1562C26.2422 12.8094 26.5898 13.6375 27.1992 14.2469C27.8164 14.8563 28.5898 15.1609 29.5195 15.1609C30.8242 15.1609 31.8867 14.6336 32.707 13.5789L34.2422 15.0438C33.7344 15.8016 33.0547 16.3914 32.2031 16.8133C31.3594 17.2274 30.4102 17.4344 29.3555 17.4344ZM29.0156 6.57111C28.2344 6.57111 27.6016 6.84454 27.1172 7.39142C26.6406 7.93829 26.3359 8.70001 26.2031 9.67657H31.6289V9.46564C31.5664 8.51251 31.3125 7.79376 30.8672 7.30939C30.4219 6.8172 29.8047 6.57111 29.0156 6.57111ZM39.3047 4.52032L39.3867 5.98517C40.3242 4.85236 41.5547 4.28595 43.0781 4.28595C45.7188 4.28595 47.0625 5.79767 47.1094 8.82111V17.2H44.2617V8.98517C44.2617 8.18048 44.0859 7.58673 43.7344 7.20392C43.3906 6.81329 42.8242 6.61798 42.0352 6.61798C40.8867 6.61798 40.0312 7.13751 39.4688 8.17657V17.2H36.6211V4.52032H39.3047ZM54.4922 13.5906L57.1758 4.52032H60.1172L55.7227 17.2H53.25L48.8203 4.52032H51.7734L54.4922 13.5906Z"
        fill="#2BB6E1"
      />
      <path
        d="M72.1758 1.43829V4.52032H74.4141V6.6297H72.1758V13.7078C72.1758 14.1922 72.2695 14.5438 72.457 14.7625C72.6523 14.9734 72.9961 15.0789 73.4883 15.0789C73.8164 15.0789 74.1484 15.0399 74.4844 14.9617V17.1649C73.8359 17.3445 73.2109 17.4344 72.6094 17.4344C70.4219 17.4344 69.3281 16.2274 69.3281 13.8133V6.6297H67.2422V4.52032H69.3281V1.43829H72.1758ZM82.1836 17.4344C80.3789 17.4344 78.9141 16.868 77.7891 15.7352C76.6719 14.5945 76.1133 13.0789 76.1133 11.1883V10.8367C76.1133 9.57111 76.3555 8.4422 76.8398 7.45001C77.332 6.45001 78.0195 5.67267 78.9023 5.11798C79.7852 4.56329 80.7695 4.28595 81.8555 4.28595C83.582 4.28595 84.9141 4.83673 85.8516 5.93829C86.7969 7.03986 87.2695 8.59845 87.2695 10.6141V11.7625H78.9844C79.0703 12.8094 79.418 13.6375 80.0273 14.2469C80.6445 14.8563 81.418 15.1609 82.3477 15.1609C83.6523 15.1609 84.7148 14.6336 85.5352 13.5789L87.0703 15.0438C86.5625 15.8016 85.8828 16.3914 85.0312 16.8133C84.1875 17.2274 83.2383 17.4344 82.1836 17.4344ZM81.8438 6.57111C81.0625 6.57111 80.4297 6.84454 79.9453 7.39142C79.4688 7.93829 79.1641 8.70001 79.0312 9.67657H84.457V9.46564C84.3945 8.51251 84.1406 7.79376 83.6953 7.30939C83.25 6.8172 82.6328 6.57111 81.8438 6.57111ZM97.0664 17.2C96.9414 16.9578 96.832 16.5633 96.7383 16.0164C95.832 16.9617 94.7227 17.4344 93.4102 17.4344C92.1367 17.4344 91.0977 17.0711 90.293 16.3445C89.4883 15.618 89.0859 14.7195 89.0859 13.6492C89.0859 12.2977 89.5859 11.2625 90.5859 10.5438C91.5938 9.8172 93.0312 9.45392 94.8984 9.45392H96.6445V8.62189C96.6445 7.96564 96.4609 7.4422 96.0938 7.05157C95.7266 6.65314 95.168 6.45392 94.418 6.45392C93.7695 6.45392 93.2383 6.61798 92.8242 6.94611C92.4102 7.26642 92.2031 7.67657 92.2031 8.17657H89.3555C89.3555 7.48126 89.5859 6.83282 90.0469 6.23126C90.5078 5.62189 91.1328 5.14532 91.9219 4.80157C92.7188 4.45782 93.6055 4.28595 94.582 4.28595C96.0664 4.28595 97.25 4.66095 98.1328 5.41095C99.0156 6.15314 99.4688 7.20001 99.4922 8.55157V14.2703C99.4922 15.4109 99.6523 16.3211 99.9727 17.0008V17.2H97.0664ZM93.9375 15.1492C94.5 15.1492 95.0273 15.0125 95.5195 14.7391C96.0195 14.4656 96.3945 14.0984 96.6445 13.6375V11.2469H95.1094C94.0547 11.2469 93.2617 11.4305 92.7305 11.7977C92.1992 12.1649 91.9336 12.6844 91.9336 13.3563C91.9336 13.9031 92.1133 14.3406 92.4727 14.6688C92.8398 14.9891 93.3281 15.1492 93.9375 15.1492ZM105.152 4.52032L105.234 5.84454C106.125 4.80548 107.344 4.28595 108.891 4.28595C110.586 4.28595 111.746 4.93439 112.371 6.23126C113.293 4.93439 114.59 4.28595 116.262 4.28595C117.66 4.28595 118.699 4.67267 119.379 5.44611C120.066 6.21954 120.418 7.36017 120.434 8.86798V17.2H117.586V8.95001C117.586 8.14532 117.41 7.55548 117.059 7.18048C116.707 6.80548 116.125 6.61798 115.312 6.61798C114.664 6.61798 114.133 6.79376 113.719 7.14532C113.312 7.48907 113.027 7.9422 112.863 8.5047L112.875 17.2H110.027V8.85626C109.988 7.36407 109.227 6.61798 107.742 6.61798C106.602 6.61798 105.793 7.08282 105.316 8.01251V17.2H102.469V4.52032H105.152Z"
        fill="#2492B5"
      />
    </svg>
  )

  return (
    <>
      <footer class="text-gray-700 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Logo />
          </a>
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 mb-0">
            © 2020 env.team —
            <a
              href="https://twitter.com/knyttneve"
              class="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @trinhchinchin
            </a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a class="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  )
}
