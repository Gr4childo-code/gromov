import React from 'react';

const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      width='1900'
      height='440'
      viewBox='0 0 1900 440'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g clipPath='url(#clip0_202_43417)'>
        <path
          d='M1912.22 -22.6818H2014L1858.55 409.123H1739.5L1584.05 -22.6818H1686.44L1799.33 312.276L1912.22 -22.6818Z'
          fill='currentColor'
        />
        <path
          d='M1479.73 136.14C1469.36 136.14 1459.86 133.672 1451.23 128.737C1442.84 123.802 1436.05 117.14 1430.87 108.751C1425.93 100.115 1423.47 90.6149 1423.47 80.2516C1423.47 69.6415 1425.93 60.1418 1430.87 51.7524C1436.05 43.1163 1442.84 36.3308 1451.23 31.3959C1459.86 26.2142 1469.36 23.6234 1479.73 23.6234C1490.34 23.6234 1499.84 26.2142 1508.22 31.3959C1516.86 36.3308 1523.65 43.1163 1528.58 51.7524C1533.76 60.1418 1536.35 69.6415 1536.35 80.2516C1536.35 90.6149 1533.76 100.115 1528.58 108.751C1523.65 117.14 1516.86 123.802 1508.22 128.737C1499.84 133.672 1490.34 136.14 1479.73 136.14Z'
          fill='currentColor'
        />
        <path
          d='M978.068 409.123H882.454V-22.6818H994.106L1121.8 285.134L1250.11 -22.6818H1361.14V409.123H1265.53V146.339L1160.04 409.123H1083.55L978.068 146.339V409.123Z'
          fill='currentColor'
        />
        <path
          d='M752.841 136.14C742.478 136.14 732.978 133.672 724.342 128.737C715.953 123.802 709.167 117.14 703.986 108.751C699.051 100.115 696.583 90.6149 696.583 80.2516C696.583 69.6415 699.051 60.1418 703.986 51.7524C709.167 43.1163 715.953 36.3308 724.342 31.3959C732.978 26.2142 742.478 23.6234 752.841 23.6234C763.451 23.6234 772.951 26.2142 781.34 31.3959C789.977 36.3308 796.762 43.1163 801.697 51.7524C806.879 60.1418 809.47 69.6415 809.47 80.2516C809.47 90.6149 806.879 100.115 801.697 108.751C796.762 117.14 789.977 123.802 781.34 128.737C772.951 133.672 763.451 136.14 752.841 136.14Z'
          fill='currentColor'
        />
        <path
          d='M547.539 114.262C547.539 96.5787 542.193 82.5965 531.501 72.3154C521.219 62.0343 504.975 56.8938 482.768 56.8938H394.557V172.247H482.768C497.573 172.247 509.705 169.986 519.163 165.462C528.622 160.938 535.613 154.358 540.137 145.722C545.072 136.675 547.539 126.188 547.539 114.262ZM487.703 -22.6818C522.659 -22.6818 551.651 -16.3075 574.681 -3.55895C598.122 8.77833 615.6 25.4337 627.115 46.4071C638.629 66.9692 644.387 89.5876 644.387 114.262C644.387 131.123 641.302 147.779 635.134 164.228C629.376 180.267 620.123 195.071 607.375 208.642C595.038 221.802 578.793 232.289 558.643 240.103C538.903 247.916 515.256 251.823 487.703 251.823H394.557V409.123H298.943V-22.6818H487.703ZM537.669 219.129L653.023 409.123H546.922L437.737 219.129H537.669Z'
          fill='currentColor'
        />
        <path
          d='M144.785 116.729C132.859 94.9335 117.643 79.1007 99.1367 69.2309C81.042 58.9498 60.6855 53.8092 38.0671 53.8092C14.215 53.8092 -7.37524 59.9779 -26.7037 72.3152C-45.6208 84.2412 -60.6312 100.691 -71.7348 121.664C-82.4271 142.638 -87.7732 166.49 -87.7732 193.221C-87.7732 221.185 -82.4271 245.654 -71.7348 266.628C-61.0424 287.19 -46.0321 303.434 -26.7037 315.36C-7.37524 326.875 15.2431 332.632 41.1514 332.632C57.1899 332.632 71.9947 329.959 85.5657 324.613C99.1367 318.855 111.268 311.042 121.961 301.172C132.653 291.302 141.7 279.993 149.103 267.244V240.102H38.0671V164.845H238.548V284.517C228.678 307.135 214.285 328.314 195.368 348.054C176.45 367.382 153.626 383.215 126.896 395.552C100.165 407.478 69.7328 413.441 35.5997 413.441C3.52271 413.441 -25.8812 408.095 -52.612 397.403C-79.3428 386.711 -102.578 371.495 -122.318 351.755C-142.057 332.015 -157.479 308.78 -168.582 282.049C-179.275 254.907 -184.621 225.298 -184.621 193.221C-184.621 161.144 -179.275 131.74 -168.582 105.009C-157.479 77.867 -142.263 54.4261 -122.935 34.6864C-103.195 14.9468 -79.9596 -0.269211 -53.2288 -10.9615C-26.498 -21.6538 2.90585 -27 34.9828 -27C65.0035 -27 93.1737 -22.2707 119.493 -12.8121C146.224 -3.35352 169.459 10.4231 189.199 28.5178C208.939 46.2013 223.538 67.7915 232.996 93.2886L144.785 116.729Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_202_43417'>
          <rect width='1900' height='440' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;
