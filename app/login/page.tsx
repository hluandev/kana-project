import {
  signInWithGithub,
  signInWithGoogle,
} from "@/actions/server/google-login";

import { SignInButton } from "@/components/auth/sign-in-button";

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-full max-w-sm mx-auto">
      <svg
        width="72"
        height="72"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="512" height="512" rx="123" fill="#50D0D2" />
        <path
          d="M98.8105 126.882C101.019 126.882 102.21 128.073 102.384 130.455C102.559 133.012 102.617 135.627 102.559 138.3C102.5 140.973 102.5 143.617 102.559 146.232C102.617 151.753 102.646 157.273 102.646 162.794C102.646 168.314 102.646 173.835 102.646 179.355C102.646 180.052 102.936 180.401 103.517 180.401H103.953C123.594 174.997 137.018 162.707 144.223 143.53C145.095 141.322 145.763 139.114 146.228 136.906C146.751 134.639 147.303 132.344 147.884 130.02C148.175 128.974 148.553 128.189 149.018 127.666C149.482 127.143 150.296 126.882 151.458 126.882H165.928C166.915 126.882 167.758 127.085 168.455 127.492C169.153 127.899 169.501 128.683 169.501 129.845C169.501 130.368 169.472 130.746 169.414 130.978C167.38 140.915 163.894 150.242 158.954 158.958C154.015 167.675 147.565 175.229 139.604 181.621C138.093 182.9 136.524 184.091 134.897 185.195C133.328 186.241 131.701 187.287 130.016 188.333C129.609 188.507 129.405 188.798 129.405 189.205C129.405 189.437 130.248 190.774 131.933 193.214C133.677 195.597 135.914 198.677 138.645 202.454C141.376 206.231 144.311 210.27 147.449 214.57C150.645 218.812 153.724 222.938 156.688 226.947C159.652 230.957 162.209 234.414 164.359 237.32C166.509 240.167 167.903 242.056 168.543 242.986C168.891 243.45 169.24 244.003 169.589 244.642C169.995 245.281 170.199 245.92 170.199 246.559C170.199 247.605 169.618 248.245 168.455 248.477C167.293 248.651 166.363 248.739 165.666 248.739H148.756C147.652 248.739 146.722 248.274 145.967 247.344C144.282 245.31 142.625 243.218 140.998 241.068C139.429 238.86 137.831 236.681 136.204 234.531C133.183 230.521 130.161 226.511 127.139 222.502C124.176 218.492 121.183 214.454 118.161 210.386C116.534 208.236 114.936 206.086 113.367 203.936C111.856 201.727 110.258 199.577 108.573 197.485C108.282 197.195 108.05 197.05 107.876 197.05C107.295 197.05 106.597 197.137 105.784 197.311C104.97 197.427 104.244 197.544 103.605 197.66C102.965 197.776 102.646 198.154 102.646 198.793C102.646 204.081 102.617 209.369 102.559 214.657C102.559 219.887 102.53 225.117 102.471 230.347C102.413 232.845 102.413 235.373 102.471 237.93C102.53 240.487 102.471 242.986 102.297 245.426C102.123 247.809 100.931 249 98.7233 249H83.5566C81.1741 249 79.9828 247.78 79.9828 245.339C79.9828 242.201 80.0409 239.063 80.1571 235.925C80.2734 232.729 80.3605 229.562 80.4186 226.424C80.593 213.059 80.6801 199.781 80.6801 186.59C80.6801 173.864 80.593 161.196 80.4186 148.586C80.3605 145.564 80.2734 142.571 80.1571 139.608C80.099 136.586 80.07 133.564 80.07 130.543C80.07 128.102 81.2612 126.882 83.6437 126.882H98.8105ZM207.861 250.656C200.307 250.656 193.973 248.855 188.859 245.252C183.745 241.649 179.881 236.884 177.266 230.957C174.709 224.971 173.431 218.492 173.431 211.519V210.124C173.547 202.802 175.058 195.916 177.963 189.466C180.927 183.016 185.198 177.815 190.777 173.864C196.355 169.854 203.096 167.849 210.999 167.849C215.88 167.849 220.413 168.779 224.597 170.639C228.839 172.44 232.79 174.91 236.451 178.048C236.858 178.454 237.207 178.658 237.497 178.658C238.194 178.658 238.514 177.931 238.456 176.479C238.456 175.026 238.659 173.573 239.066 172.12C239.531 170.668 240.693 169.941 242.553 169.941H254.843C257.226 169.941 258.417 171.133 258.417 173.515C258.417 176.014 258.388 178.512 258.33 181.011C258.33 183.51 258.33 186.009 258.33 188.507C258.33 194.9 258.359 201.321 258.417 207.771C258.533 214.221 258.62 220.642 258.678 227.034C258.736 230.056 258.794 233.107 258.853 236.187C258.969 239.208 259.027 242.259 259.027 245.339C259.027 247.78 257.836 249 255.453 249H241.768C240.199 249 239.182 248.506 238.717 247.518C238.253 246.472 238.049 245.252 238.107 243.857C238.165 242.463 238.165 241.213 238.107 240.109C238.107 239.935 238.078 239.644 238.02 239.238C237.962 238.831 237.788 238.627 237.497 238.627C237.265 238.627 237.032 238.715 236.8 238.889C236.625 239.063 236.451 239.208 236.277 239.325C232.209 242.753 227.822 245.513 223.115 247.605C218.408 249.639 213.323 250.656 207.861 250.656ZM216.752 232.09C220.878 232.09 224.684 231.247 228.17 229.562C231.715 227.819 234.475 225.088 236.451 221.369C236.567 221.136 236.829 220.555 237.236 219.625C237.701 218.637 237.933 218.027 237.933 217.795C237.933 215.761 237.904 213.727 237.846 211.693C237.846 209.659 237.846 207.655 237.846 205.679C237.846 204.749 237.875 203.732 237.933 202.628C237.991 201.466 237.962 200.449 237.846 199.577C237.788 199.171 237.555 198.56 237.148 197.747C236.8 196.933 236.538 196.352 236.364 196.004C234.33 192.343 231.454 189.612 227.735 187.81C224.016 186.009 220.122 185.108 216.055 185.108C211.754 185.108 207.977 186.183 204.723 188.333C201.469 190.483 198.912 193.331 197.053 196.875C195.251 200.362 194.35 204.197 194.35 208.381C194.35 212.565 195.309 216.458 197.227 220.061C199.144 223.664 201.788 226.57 205.159 228.778C208.587 230.986 212.452 232.09 216.752 232.09ZM273.155 169.941H285.009C286.985 169.941 288.147 170.987 288.496 173.079C288.612 173.544 288.728 174.474 288.844 175.868C288.961 177.263 289.106 178.571 289.28 179.791C289.513 181.011 289.803 181.621 290.152 181.621C290.442 181.621 290.704 181.505 290.936 181.273C291.169 180.982 291.343 180.75 291.459 180.575C295.295 175.985 299.682 172.731 304.621 170.813C309.619 168.837 315.052 167.849 320.921 167.849C325.686 167.849 330.306 168.721 334.78 170.464C339.313 172.208 342.654 175.404 344.804 180.052C344.921 180.227 345.037 180.459 345.153 180.75C345.269 181.04 345.473 181.186 345.763 181.186C345.996 181.186 346.199 181.098 346.373 180.924C346.548 180.692 346.693 180.517 346.809 180.401C350.412 176.45 354.596 173.399 359.361 171.249C364.126 169.041 369.182 167.936 374.528 167.936C381.617 167.936 387.719 169.912 392.832 173.864C398.004 177.757 400.59 183.51 400.59 191.122C400.59 197.224 400.648 203.355 400.764 209.514C400.881 215.616 400.997 221.717 401.113 227.819C401.229 230.724 401.345 233.659 401.462 236.623C401.636 239.528 401.723 242.434 401.723 245.339C401.723 247.78 400.532 249 398.149 249H384.552C383.273 249 382.373 248.709 381.85 248.128C381.385 247.547 381.094 246.676 380.978 245.513C380.745 243.073 380.658 240.603 380.716 238.104C380.774 235.548 380.745 233.049 380.629 230.608C380.571 225.378 380.484 220.148 380.368 214.918C380.31 209.689 380.281 204.459 380.281 199.229C380.281 195.161 379.293 191.994 377.317 189.728C375.399 187.403 372.349 186.241 368.165 186.241C363.341 186.241 359.245 187.723 355.874 190.687C352.504 193.65 349.918 197.34 348.117 201.757C346.373 206.115 345.502 210.415 345.502 214.657C345.502 219.771 345.531 224.884 345.589 229.998C345.647 235.112 345.676 240.254 345.676 245.426C345.676 247.809 344.485 249 342.102 249H328.33C325.948 249 324.756 247.809 324.756 245.426C324.756 237.698 324.814 229.998 324.931 222.327C325.047 214.657 325.047 206.957 324.931 199.229C324.873 195.335 323.885 192.197 321.967 189.815C320.108 187.432 317.115 186.241 312.989 186.241C308.05 186.241 303.895 187.723 300.524 190.687C297.154 193.592 294.597 197.253 292.854 201.669C291.111 206.086 290.181 210.473 290.065 214.831C290.007 218.376 289.948 221.921 289.89 225.465C289.832 229.01 289.745 232.584 289.629 236.187C289.629 237.698 289.629 239.267 289.629 240.894C289.687 242.463 289.629 244.003 289.455 245.513C289.338 246.676 289.019 247.547 288.496 248.128C288.031 248.709 287.159 249 285.881 249H272.196C269.813 249 268.622 247.751 268.622 245.252C268.622 242.23 268.68 239.238 268.796 236.274C268.971 233.252 269.087 230.23 269.145 227.209C269.494 214.483 269.668 201.786 269.668 189.118C269.668 186.735 269.61 184.12 269.494 181.273C269.377 178.425 269.407 175.839 269.581 173.515C269.755 171.133 270.946 169.941 273.155 169.941ZM410.882 140.218C410.882 137.022 412.074 134.291 414.456 132.024C416.839 129.7 419.628 128.538 422.824 128.538C426.078 128.538 428.926 129.729 431.366 132.112C433.865 134.436 435.114 137.254 435.114 140.567C435.114 143.763 433.923 146.552 431.541 148.934C429.216 151.259 426.427 152.421 423.173 152.421C419.86 152.421 416.984 151.23 414.543 148.847C412.103 146.407 410.882 143.53 410.882 140.218ZM412.19 192.779V173.515C412.19 171.133 413.381 169.941 415.764 169.941H429.187C431.57 169.941 432.761 171.133 432.761 173.515C432.761 185.486 432.79 197.485 432.848 209.514C432.906 221.485 432.935 233.456 432.935 245.426C432.935 247.809 431.744 249 429.361 249H415.589C413.207 249 412.016 247.809 412.016 245.426C412.016 236.652 412.045 227.877 412.103 219.102C412.161 210.328 412.19 201.553 412.19 192.779ZM80.8545 388C78.4719 388 77.2807 386.78 77.2807 384.339C77.2807 381.143 77.3097 377.976 77.3679 374.838C77.4841 371.642 77.5712 368.446 77.6293 365.25C77.7456 358.567 77.8327 351.885 77.8908 345.202C77.949 338.519 77.978 331.837 77.978 325.154C77.978 318.471 77.949 311.789 77.8908 305.106C77.8327 298.423 77.7456 291.741 77.6293 285.058C77.5712 281.862 77.4841 278.695 77.3679 275.557C77.3097 272.361 77.2807 269.165 77.2807 265.969C77.2807 263.528 78.4719 262.308 80.8545 262.308H94.5394C96.8638 262.308 98.055 263.499 98.1131 265.882C98.2875 269.252 98.3456 272.652 98.2875 276.08C98.2875 279.45 98.2875 282.821 98.2875 286.191C98.3456 293.281 98.3746 300.399 98.3746 307.547C98.4328 314.636 98.4618 321.725 98.4618 328.815V342.413C98.4618 343.11 98.7233 343.459 99.2463 343.459C99.4787 343.459 99.6531 343.43 99.7693 343.371C105.58 341.744 111.188 339.711 116.592 337.27C122.054 334.771 126.849 331.488 130.974 327.42C135.1 323.353 138.035 318.21 139.778 311.992C140.069 311.004 140.475 310.249 140.998 309.726C141.521 309.145 142.335 308.854 143.439 308.854H159.129C160.117 308.854 160.959 309.057 161.657 309.464C162.354 309.871 162.702 310.626 162.702 311.731C162.702 311.963 162.644 312.37 162.528 312.951C160.611 320.796 157.211 327.362 152.33 332.65C147.507 337.938 141.812 342.703 135.245 346.945C134.839 347.236 134.635 347.526 134.635 347.817C134.635 347.991 135.42 349.153 136.989 351.303C138.616 353.454 140.621 356.098 143.003 359.236C145.386 362.373 147.826 365.57 150.325 368.824C152.824 372.078 155.032 374.954 156.95 377.453C158.867 379.894 160.088 381.492 160.611 382.247C160.959 382.712 161.308 383.264 161.657 383.903C162.063 384.484 162.267 385.094 162.267 385.734C162.267 386.838 161.686 387.506 160.523 387.739C159.419 387.913 158.49 388 157.734 388H142.742C141.754 388 140.853 387.564 140.04 386.693C138.935 385.53 137.86 384.31 136.814 383.032C135.768 381.695 134.722 380.388 133.677 379.109C130.655 375.506 127.633 371.874 124.611 368.214C121.648 364.494 118.626 360.863 115.546 357.318C115.372 357.027 115.11 356.882 114.762 356.882C114.587 356.882 114.442 356.911 114.326 356.969C111.827 357.899 109.299 358.742 106.742 359.497C104.186 360.252 101.658 361.095 99.1591 362.025C98.6361 362.199 98.3746 362.548 98.3746 363.071L98.1131 384.426C98.1131 386.809 96.9219 388 94.5394 388H80.8545ZM198.97 389.656C191.416 389.656 185.082 387.855 179.968 384.252C174.854 380.649 170.99 375.884 168.375 369.957C165.818 363.971 164.54 357.492 164.54 350.519V349.124C164.656 341.802 166.167 334.916 169.073 328.466C172.036 322.016 176.307 316.815 181.886 312.864C187.464 308.854 194.205 306.849 202.108 306.849C206.989 306.849 211.522 307.779 215.706 309.639C219.948 311.44 223.899 313.91 227.56 317.048C227.967 317.454 228.316 317.658 228.606 317.658C229.304 317.658 229.623 316.931 229.565 315.479C229.565 314.026 229.768 312.573 230.175 311.12C230.64 309.668 231.802 308.941 233.662 308.941H245.952C248.335 308.941 249.526 310.133 249.526 312.515C249.526 315.014 249.497 317.512 249.439 320.011C249.439 322.51 249.439 325.009 249.439 327.507C249.439 333.9 249.468 340.321 249.526 346.771C249.642 353.221 249.729 359.642 249.787 366.034C249.846 369.056 249.904 372.107 249.962 375.187C250.078 378.208 250.136 381.259 250.136 384.339C250.136 386.78 248.945 388 246.562 388H232.877C231.308 388 230.291 387.506 229.827 386.518C229.362 385.472 229.158 384.252 229.216 382.857C229.275 381.463 229.275 380.213 229.216 379.109C229.216 378.935 229.187 378.644 229.129 378.238C229.071 377.831 228.897 377.627 228.606 377.627C228.374 377.627 228.141 377.715 227.909 377.889C227.735 378.063 227.56 378.208 227.386 378.325C223.318 381.753 218.931 384.513 214.224 386.605C209.517 388.639 204.433 389.656 198.97 389.656ZM207.861 371.09C211.987 371.09 215.793 370.247 219.28 368.562C222.824 366.819 225.585 364.088 227.56 360.369C227.677 360.136 227.938 359.555 228.345 358.625C228.81 357.637 229.042 357.027 229.042 356.795C229.042 354.761 229.013 352.727 228.955 350.693C228.955 348.659 228.955 346.655 228.955 344.679C228.955 343.749 228.984 342.732 229.042 341.628C229.1 340.466 229.071 339.449 228.955 338.577C228.897 338.171 228.664 337.56 228.258 336.747C227.909 335.933 227.647 335.352 227.473 335.004C225.439 331.343 222.563 328.612 218.844 326.81C215.125 325.009 211.231 324.108 207.164 324.108C202.864 324.108 199.086 325.183 195.832 327.333C192.578 329.483 190.021 332.331 188.162 335.875C186.36 339.362 185.46 343.197 185.46 347.381C185.46 351.565 186.418 355.458 188.336 359.061C190.254 362.664 192.898 365.57 196.268 367.778C199.697 369.986 203.561 371.09 207.861 371.09ZM275.595 308.941C277.745 308.941 278.937 309.987 279.169 312.079C279.343 313.241 279.489 314.404 279.605 315.566C279.721 316.728 279.837 317.89 279.954 319.052C279.954 319.169 280.012 319.517 280.128 320.098C280.244 320.621 280.447 320.883 280.738 320.883C281.029 320.883 281.29 320.709 281.522 320.36C281.813 320.011 282.016 319.75 282.133 319.575C285.619 315.101 289.861 311.876 294.859 309.9C299.856 307.924 305.115 306.936 310.636 306.936C315.168 306.936 319.323 307.895 323.1 309.813C326.936 311.672 330.015 314.345 332.34 317.832C334.664 321.261 335.826 325.357 335.826 330.122C335.826 339.129 335.914 348.166 336.088 357.231C336.32 366.296 336.437 375.332 336.437 384.339C336.437 386.78 335.245 388 332.863 388H319.178C316.97 388 315.778 386.809 315.604 384.426C315.43 381.927 315.372 379.429 315.43 376.93C315.488 374.373 315.488 371.845 315.43 369.347C315.372 364.001 315.343 358.683 315.343 353.395C315.343 348.107 315.343 342.819 315.343 337.531C315.343 333.406 314.151 330.326 311.769 328.292C309.386 326.2 306.219 325.154 302.268 325.154C297.328 325.154 293.261 326.665 290.065 329.687C286.927 332.708 284.573 336.427 283.004 340.844C281.493 345.26 280.738 349.589 280.738 353.831C280.738 358.945 280.709 364.059 280.651 369.172C280.593 374.228 280.535 379.313 280.477 384.426C280.477 386.809 279.285 388 276.903 388H263.218C260.835 388 259.644 386.78 259.644 384.339C259.644 381.085 259.673 377.86 259.731 374.664C259.847 371.41 259.935 368.184 259.993 364.988C260.167 351.391 260.254 337.793 260.254 324.195V312.515C260.254 310.133 261.445 308.941 263.828 308.941H275.595ZM377.15 389.656C369.595 389.656 363.261 387.855 358.148 384.252C353.034 380.649 349.17 375.884 346.555 369.957C343.998 363.971 342.719 357.492 342.719 350.519V349.124C342.836 341.802 344.346 334.916 347.252 328.466C350.216 322.016 354.487 316.815 360.065 312.864C365.644 308.854 372.385 306.849 380.288 306.849C385.169 306.849 389.701 307.779 393.885 309.639C398.127 311.44 402.079 313.91 405.74 317.048C406.147 317.454 406.495 317.658 406.786 317.658C407.483 317.658 407.803 316.931 407.745 315.479C407.745 314.026 407.948 312.573 408.355 311.12C408.82 309.668 409.982 308.941 411.841 308.941H424.132C426.514 308.941 427.705 310.133 427.705 312.515C427.705 315.014 427.676 317.512 427.618 320.011C427.618 322.51 427.618 325.009 427.618 327.507C427.618 333.9 427.647 340.321 427.705 346.771C427.822 353.221 427.909 359.642 427.967 366.034C428.025 369.056 428.083 372.107 428.141 375.187C428.257 378.208 428.316 381.259 428.316 384.339C428.316 386.78 427.124 388 424.742 388H411.057C409.488 388 408.471 387.506 408.006 386.518C407.541 385.472 407.338 384.252 407.396 382.857C407.454 381.463 407.454 380.213 407.396 379.109C407.396 378.935 407.367 378.644 407.309 378.238C407.251 377.831 407.076 377.627 406.786 377.627C406.553 377.627 406.321 377.715 406.088 377.889C405.914 378.063 405.74 378.208 405.565 378.325C401.498 381.753 397.11 384.513 392.403 386.605C387.697 388.639 382.612 389.656 377.15 389.656ZM386.04 371.09C390.166 371.09 393.972 370.247 397.459 368.562C401.004 366.819 403.764 364.088 405.74 360.369C405.856 360.136 406.117 359.555 406.524 358.625C406.989 357.637 407.222 357.027 407.222 356.795C407.222 354.761 407.192 352.727 407.134 350.693C407.134 348.659 407.134 346.655 407.134 344.679C407.134 343.749 407.163 342.732 407.222 341.628C407.28 340.466 407.251 339.449 407.134 338.577C407.076 338.171 406.844 337.56 406.437 336.747C406.088 335.933 405.827 335.352 405.653 335.004C403.619 331.343 400.742 328.612 397.023 326.81C393.304 325.009 389.411 324.108 385.343 324.108C381.043 324.108 377.266 325.183 374.012 327.333C370.757 329.483 368.201 332.331 366.341 335.875C364.54 339.362 363.639 343.197 363.639 347.381C363.639 351.565 364.598 355.458 366.515 359.061C368.433 362.664 371.077 365.57 374.447 367.778C377.876 369.986 381.74 371.09 386.04 371.09Z"
          fill="black"
        />
      </svg>

      <div className="border border-black/15 bg-black/5 shadow-inner p-6 gap-2 rounded-xl flex flex-col">
        <SignInButton
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              viewBox="0 0 24 24"
              width="18"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
              <path d="M1 1h22v22H1z" fill="none" />
            </svg>
          }
          brand="Google"
          signInWith={signInWithGoogle}
        />
        <SignInButton
          icon={
            <svg
              width="18"
              height="18"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          }
          brand="GitHub"
          signInWith={signInWithGithub}
        />
      </div>

      <div className="text-xs text-center max-w-xs  text-black/60">
        By continuing, you agree to Kamikana&apos;s{" "}
        <a
          href="https://www.kamikana.com/terms"
          target="_blank"
          className="underline"
        >
          Terms of Service
        </a>
        , and acknowledge the{" "}
        <a
          href="https://www.kamikana.com/privacy"
          target="_blank"
          className="underline"
        >
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
}
