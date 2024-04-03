import React from 'react';

const page = () => {
    return (
        <div className='text-center'>
            <h1 className='font-bold text-5xl mt-7 mb-5'>Categories</h1>
            <div className='flex font-bold text-2xl flex-wrap justify-center items-center'>
                <a href='/pages/blogList?theme=Développement'>
                    <div className='cursor-pointer m-7 rounded-3xl min-w-72 min-h-[257px] flex flex-col justify-center items-center text-center bg-custom-orange hover:bg-custom-brown text-custom-purple hover:text-white stroke-custom-purple hover:stroke-white'>
                        <p className='mb-8'>Développement</p>
                        <svg width="125" height="auto" className="mb-2 stroke-current" viewBox="0 0 39 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="37" height="29" rx="2" stroke-width="2"/>
                            <path d="M10 11L14 15.5L10 20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20 20H29" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                </a>
                <a href='/pages/blogList?theme=Réseau'>
                    <div className='cursor-pointer m-7 min-w-72 min-h-56 rounded-3xl px-14 py-10 flex flex-col justify-center items-center text-center bg-custom-orange hover:bg-custom-brown text-custom-purple hover:text-white'>
                        <p className='mb-5'>Réseau</p>
                        <svg width="125" height="auto" className="fill-current" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28 12H12V28H28V12Z"/>
                            <path d="M38 22C39.2 22 40 21.2 40 20C40 19 39.2 18 38 18H36V14H38C39.2 14 40 13.2 40 12C40 11 39.2 10 38 10H36V8C36 5.8 34.2 4 32 4H30V2C30 1 29.2 0 28 0C27 0 26 0.8 26 2V4H22V2C22 1 21.2 0 20 0C18.8 0 18 0.8 18 2V4H14V2C14 1 13.2 0 12 0C10.8 0 10 0.8 10 2V4H8C5.8 4 4 5.8 4 8V10H2C0.8 10 0 10.8 0 12C0 13 0.8 14 2 14H4V18H2C0.8 18 0 18.8 0 20C0 21 0.8 22 2 22H4V26H2C0.8 26 0 26.8 0 28C0 29 0.8 30 2 30H4V32C4 34.2 5.8 36 8 36H10V38C10 39 10.8 40 12 40C13.2 40 14 39.2 14 38V36H18V38C18 39 18.8 40 20 40C21.2 40 22 39.2 22 38V36H26V38C26 39 26.8 40 28 40C29 40 30 39.2 30 38V36H32C34.2 36 36 34.2 36 32V30H38C39.2 30 40 29.2 40 28C40 27 39.2 26 38 26H36V22H38ZM32 32H8V8H32V32Z"/>
                        </svg>
                    </div>
                </a>
                <a href='/pages/blogList?theme=Gaming'>
                    <div className='cursor-pointer m-7 min-w-72 min-h-[237px] rounded-3xl px-14 py-10 flex flex-col justify-center items-center text-center bg-custom-orange hover:bg-custom-brown text-custom-purple hover:text-white'>
                        <p className='mb-5'>Gaming</p>
                        <svg width="125" height="auto" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="22.75" y="24.5" width="3.5" height="3.5" rx="1" className='fill-current'/>
                            <rect x="12.25" y="19.25" width="3.5" height="10.5" rx="1" className='fill-current'/>
                            <rect x="19.25" y="22.75" width="3.5" height="10.5" rx="1" transform="rotate(90 19.25 22.75)" className='fill-current'/>
                            <rect x="28" y="21" width="3.5" height="3.5" rx="1" className='fill-current'/>
                            <path d="M24.5 14V13.6231C24.5 12.1232 24.5 11.3733 24.0764 10.8307C23.6528 10.2882 22.9253 10.1063 21.4701 9.74254L20.5299 9.50746C19.0747 9.14368 18.3472 8.96179 17.9236 8.41927C17.5 7.87675 17.5 7.1268 17.5 5.62689V3.5" className='stroke-current' stroke-width="2" stroke-linecap="round"/>
                            <path d="M5.25 24.5C5.25 20.0221 5.25 17.7831 6.3349 16.2407C6.6142 15.8436 6.94001 15.4882 7.304 15.1835C8.71786 14 10.7702 14 14.875 14H27.125C31.2298 14 33.2821 14 34.696 15.1835C35.06 15.4882 35.3858 15.8436 35.6651 16.2407C36.75 17.7831 36.75 20.0221 36.75 24.5C36.75 28.9779 36.75 31.2169 35.6651 32.7593C35.3858 33.1564 35.06 33.5118 34.696 33.8165C33.2821 35 31.2298 35 27.125 35H14.875C10.7702 35 8.71786 35 7.304 33.8165C6.94001 33.5118 6.6142 33.1564 6.3349 32.7593C5.25 31.2169 5.25 28.9779 5.25 24.5Z" className='stroke-current' stroke-width="2"/>
                        </svg>
                    </div>
                </a>
                <a href='/pages/blogList?theme=Gadget'>
                    <div className='cursor-pointer m-7 min-w-72 min-h-[237px] rounded-3xl px-14 py-10 flex flex-col justify-center items-center text-center bg-custom-orange hover:bg-custom-brown text-custom-purple hover:text-white'>
                        <p className='mb-5'>Gadget</p>
                        <svg width="125" height="auto" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.91699 19.5833C9.91699 17.6977 9.91699 16.7549 10.5028 16.1691C11.0886 15.5833 12.0314 15.5833 13.917 15.5833H20.0837C21.9693 15.5833 22.9121 15.5833 23.4979 16.1691C24.0837 16.7549 24.0837 17.6977 24.0837 19.5833V22.6667C24.0837 25.555 24.0837 26.9992 23.3727 28.0264C23.0988 28.4221 22.7558 28.7652 22.3601 29.0391C21.3329 29.75 19.8887 29.75 17.0003 29.75V29.75C14.112 29.75 12.6678 29.75 11.6406 29.0391C11.2449 28.7652 10.9018 28.4221 10.6279 28.0264C9.91699 26.9992 9.91699 25.555 9.91699 22.6667V19.5833Z" className='stroke-current' stroke-width="2"/>
                            <path d="M12.75 12.5C12.75 10.6144 12.75 9.67157 13.3358 9.08579C13.9216 8.5 14.8644 8.5 16.75 8.5H17.25C19.1356 8.5 20.0784 8.5 20.6642 9.08579C21.25 9.67157 21.25 10.6144 21.25 12.5V15.5833H12.75V12.5Z" className='stroke-current' stroke-width="2"/>
                            <path d="M17 15.5833V21.25" className='stroke-current' stroke-width="2"/>
                            <path d="M21.25 4.25L18.4167 8.5" className='stroke-current' stroke-width="2"/>
                            <path d="M12.75 4.25L15.5833 8.5" className='stroke-current' stroke-width="2"/>
                            <path d="M9.91699 22.6667H2.83366" className='stroke-current' stroke-width="2"/>
                            <path d="M31.167 22.6667H24.0837" className='stroke-current' stroke-width="2"/>
                            <path d="M28.333 12.75V14.1667C28.333 15.3302 28.333 15.912 28.1738 16.381C27.874 17.2642 27.1805 17.9577 26.2973 18.2575C25.8283 18.4167 25.2465 18.4167 24.083 18.4167V18.4167" className='stroke-current' stroke-width="2"/>
                            <path d="M28.333 31.1667V31.1667C28.333 30.0031 28.333 29.4214 28.1738 28.9524C27.874 28.0692 27.1805 27.3757 26.2973 27.0759C25.8283 26.9167 25.2465 26.9167 24.083 26.9167V26.9167" className='stroke-current' stroke-width="2"/>
                            <path d="M5.66699 12.75V14.1667C5.66699 15.3302 5.66699 15.912 5.8262 16.381C6.126 17.2642 6.8195 17.9577 7.70267 18.2575C8.17169 18.4167 8.75346 18.4167 9.91699 18.4167V18.4167" className='stroke-current' stroke-width="2"/>
                            <path d="M5.66699 31.1667V31.1667C5.66699 30.0031 5.66699 29.4214 5.8262 28.9524C6.126 28.0692 6.8195 27.3757 7.70267 27.0759C8.17169 26.9167 8.75346 26.9167 9.91699 26.9167V26.9167" className='stroke-current' stroke-width="2"/>
                        </svg>
                    </div>
                </a>
                <a href='/pages/blogList?theme=Github'>
                    <div className='cursor-pointer m-7 min-w-72 min-h-[237px] rounded-3xl px-14 py-10 flex flex-col justify-center items-center text-center bg-custom-orange hover:bg-custom-brown text-custom-purple hover:text-white'>
                        <p className='mb-5'>GitHub</p>
                        <svg width="125" height="auto" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_52_1346)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0199 0C10.7375 0 0 10.8167 0 24.1983C0 34.895 6.87988 43.9495 16.4241 47.1542C17.6174 47.3951 18.0545 46.6335 18.0545 45.9929C18.0545 45.4319 18.0151 43.509 18.0151 41.5055C11.3334 42.948 9.94198 38.6209 9.94198 38.6209C8.86818 35.8164 7.27715 35.0956 7.27715 35.0956C5.09022 33.6132 7.43645 33.6132 7.43645 33.6132C9.86233 33.7735 11.1353 36.0971 11.1353 36.0971C13.2824 39.7827 16.7422 38.7413 18.1341 38.1002C18.3328 36.5377 18.9695 35.456 19.6455 34.8552C14.3163 34.2942 8.70937 32.211 8.70937 22.9161C8.70937 20.2719 9.66321 18.1086 11.1746 16.4261C10.9361 15.8253 10.1008 13.3409 11.4135 10.0157C11.4135 10.0157 13.4417 9.3746 18.0146 12.4996C19.9725 11.9699 21.9916 11.7005 24.0199 11.6982C26.048 11.6982 28.1154 11.979 30.0246 12.4996C34.5981 9.3746 36.6262 10.0157 36.6262 10.0157C37.9389 13.3409 37.1031 15.8253 36.8646 16.4261C38.4158 18.1086 39.3303 20.2719 39.3303 22.9161C39.3303 32.211 33.7234 34.2539 28.3544 34.8552C29.2296 35.6163 29.9848 37.0583 29.9848 39.3421C29.9848 42.5871 29.9454 45.1915 29.9454 45.9924C29.9454 46.6335 30.383 47.3951 31.5758 47.1547C41.12 43.9491 47.9999 34.895 47.9999 24.1983C48.0392 10.8167 37.2624 0 24.0199 0Z" className='fill-current'/>
                            </g>
                            <defs>
                            <clipPath id="clip0_52_1346">
                            <rect width="48" height="48" className='fill-current'/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                </a>
                <a href='/pages/blogList?theme=Musique'>
                    <div className='cursor-pointer m-7 min-w-72 min-h-[237px] rounded-3xl px-14 py-10 flex flex-col justify-center items-center text-center bg-custom-orange hover:bg-custom-brown text-custom-purple hover:text-white'>
                        <p className='mb-5'>Musique</p>
                        <svg width="125" height="auto" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.125 34H12.5C10.6144 34 9.67157 34 9.08579 34.5858C8.5 35.1716 8.5 36.1144 8.5 38V39.7458C8.5 42.0032 8.5 43.132 9.23202 43.7321C9.96404 44.3322 11.0709 44.1108 13.2845 43.6681L15.9095 43.1431C17.4487 42.8353 18.2184 42.6813 18.6717 42.1284C19.125 41.5754 19.125 40.7905 19.125 39.2208V16.0292C19.125 14.4595 19.125 13.6746 19.5783 13.1216C20.0316 12.5687 20.8013 12.4147 22.3405 12.1069L35.5905 9.45689C37.8041 9.01417 38.911 8.79281 39.643 9.39292C40.375 9.99304 40.375 11.1218 40.375 13.3792V19.125M40.375 29.75V34.9708C40.375 36.5405 40.375 37.3254 39.9217 37.8784C39.4684 38.4313 38.6987 38.5853 37.1595 38.8931L34.5345 39.4181C32.3209 39.8608 31.214 40.0822 30.482 39.4821C29.75 38.882 29.75 37.7532 29.75 35.4958V33.75C29.75 31.8644 29.75 30.9216 30.3358 30.3358C30.9216 29.75 31.8644 29.75 33.75 29.75H40.375ZM40.375 29.75V19.125M40.375 19.125L19.125 23.375" className='stroke-current' stroke-width="2"/>
                        </svg>
                    </div>
                </a>
                <a href='/pages/blogList?theme=Cloud'>
                    <div className='cursor-pointer m-7 min-w-72 min-h-[257px] rounded-3xl px-14 py-10 flex flex-col justify-center items-center text-center bg-custom-orange hover:bg-custom-brown text-custom-purple hover:text-white'>
                        <p className='mb-10'>Cloud</p>
                        <svg className='mb-6' width="125" height="auto" viewBox="0 0 76 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M58.5855 9.37328C57.8124 9.37517 57.0405 9.43198 56.2755 9.54328C54.1174 6.58648 51.2917 4.18101 48.0283 2.52268C44.7649 0.864343 41.1561 0 37.4955 0C33.8349 0 30.226 0.864343 26.9626 2.52268C23.6992 4.18101 20.8735 6.58648 18.7155 9.54328C16.2385 9.19002 13.7134 9.40821 11.3337 10.1812C8.95401 10.9541 6.78271 12.2613 4.98604 14.0027C3.18937 15.7441 1.81497 17.8735 0.968052 20.2279C0.121137 22.5823 -0.175836 25.0993 0.099869 27.5861C0.375574 30.073 1.21664 32.4638 2.5587 34.5755C3.90075 36.6872 5.70819 38.4639 7.84266 39.7694C9.97713 41.075 12.382 41.8749 14.8733 42.1078C17.3645 42.3407 19.876 42.0005 22.2155 41.1133C26.4376 44.8265 31.8678 46.8746 37.4905 46.8746C43.1132 46.8746 48.5433 44.8265 52.7655 41.1133C54.6235 41.8236 56.5963 42.1863 58.5855 42.1833C60.7739 42.2373 62.951 41.853 64.9886 41.0528C67.0262 40.2527 68.8832 39.0529 70.4501 37.5242C72.017 35.9956 73.2622 34.1688 74.1124 32.1516C74.9625 30.1343 75.4005 27.9674 75.4005 25.7783C75.4005 23.5892 74.9625 21.4222 74.1124 19.405C73.2622 17.3878 72.017 15.561 70.4501 14.0323C68.8832 12.5036 67.0262 11.3039 64.9886 10.5038C62.951 9.70362 60.7739 9.31925 58.5855 9.37328ZM58.5855 37.5033C56.1739 37.4992 53.8228 36.7481 51.8555 35.3533C50.1198 37.4873 47.9304 39.2076 45.4464 40.3892C42.9623 41.5707 40.2462 42.1838 37.4955 42.1838C34.7448 42.1838 32.0286 41.5707 29.5446 40.3892C27.0606 39.2076 24.8711 37.4873 23.1355 35.3533C21.6298 36.4116 19.8959 37.1002 18.0744 37.3632C16.2529 37.6261 14.3951 37.456 12.6516 36.8666C10.9081 36.2773 9.32805 35.2853 8.03964 33.9711C6.75123 32.657 5.79071 31.0576 5.23599 29.3028C4.68128 27.548 4.54799 25.6871 4.84693 23.8712C5.14588 22.0552 5.86864 20.3353 6.95659 18.8509C8.04455 17.3665 9.46706 16.1594 11.1088 15.3276C12.7504 14.4958 14.5651 14.0626 16.4055 14.0633C17.9331 14.0628 19.4456 14.3653 20.8555 14.9533C22.4032 11.8675 24.7787 9.27294 27.7164 7.45983C30.6541 5.64671 34.0383 4.68648 37.4905 4.68648C40.9427 4.68648 44.3268 5.64671 47.2646 7.45983C50.2023 9.27294 52.5778 11.8675 54.1255 14.9533C55.7274 14.2906 57.4564 13.9916 59.1878 14.0778C60.9192 14.1639 62.61 14.6331 64.1382 15.4515C65.6664 16.2699 66.9941 17.4171 68.0255 18.8105C69.0568 20.2039 69.7663 21.8087 70.1026 23.5093C70.439 25.21 70.3939 26.964 69.9706 28.6451C69.5473 30.3262 68.7563 31.8924 67.6547 33.231C66.553 34.5695 65.1682 35.647 63.5999 36.3858C62.0317 37.1245 60.319 37.5062 58.5855 37.5033Z" className='fill-current'/>
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default page;