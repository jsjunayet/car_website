
import { FaPaperPlane } from 'react-icons/fa';

import FooterSection from './FooterSection';
import { Input } from '../../components/ui/input';
import { cn } from '../../lib/utils';
const Footer = () => {
    const Accounts = [
        {
        title: 'My Profile',
            href: '/my-profile',
        },

        {
            title: 'Login/Register',
            href: '/login',
        },

        {
            title: 'Cart',
            href: '/cart',
        },
        {
            title: 'All products',
            href: '/allproduct',
        },
    ];
    const QuickLinks = [
        {
            title: 'Privacy Policy',
            href: '/login',
        },
        {
            title: 'Terms of Use',
            href: '/termsOfUse',
        },
        {
            title: 'FAQ',
            href: '/FAQ',
        },
        {
            title: 'Contact',
            href: '/contact',
        },
    ];
    const Support = [
        {
            title: 'Dhonia,Savar, Dhaka,  DH 1515, Bangladesh.'
        },
        {
            title: 'carbazaar@gmail.com'
        },
        {
            title: '+8801640011818'
        },
    ];

    return (
        <section className="text-white bg-black" >
            <footer className=" max-w-7xl mx-auto grid grid-cols-1 gap-5 py-10 lg:grid-cols-5">
                <div>
                    <p className="text-lg font-medium lg:text-xl">CarBazaar</p>
                    <p className="my-4">Subscribe</p>
                    <p className="md:text-sm text-[12px] font-normal">Get 10% of your first order</p>
                    <form
                       
                        className="relative flex items-center my-2 w-[80%]"
                    >
                        <Input
                            className="flex-1 pr-8 z-10 bg-transparent placeholder:text-gray-200 border-slate-500 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-slate-500"
                            type="email"
                            required
                            name={'email'}
                            placeholder={'Enter Your Email'}
                        />
                        <button
                            type="submit"
                            className="absolute right-2.5 z-30 -translate-y-1/2 top-1/2"
                        >
                            <FaPaperPlane
                                className={cn('text-slate-300', {
                                })}
                                size={20}
                            />
                        </button>
                    </form>
                </div>
                <div>
                    <FooterSection data={Support} title="Support" />
                </div>
                <div>
                    <FooterSection data={QuickLinks} title="Quick Links" />
                </div>
                <div>
                    <FooterSection data={Accounts} title="Accounts" />
                </div>
                <div>
                    <p className="text-lg font-medium lg:text-xl">Download App</p>
                    <p className="md:text-sm text-[12px] font-normal mt-7">Save $3 with app new user only</p>
                    <div className="flex my-3">
                        <img alt='qr code' src={"../../../src/assets/qrCode.png"} className="me-3" />
                        <div>
                            <img alt='google store' src={"../../../src/assets/googlePlay.png"} />
                            <img alt='app store' src={"../../../src/assets/appstore.png"} />
                        </div>
                    </div>
                    <div className="flex gap-4 mt-3 ">
                        <a href="https://www.facebook.com/jsjunayet73">
                            <FacebookIcon className="w-4 h-4 sm:w-6 xsm:w-5 sm:h-6 xsm:h-5" />
                        </a>
                        <a href="#">
                            <TwitterIcon className="w-4 h-4 sm:w-6 xsm:w-5 sm:h-6 xsm:h-5" />
                        </a>
                        <a href="#">
                            <YoutubeIcon className="w-4 h-4 sm:w-6 xsm:w-5 sm:h-6 xsm:h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/jsjunayet">
                            <LinkedinIcon className="w-4 h-4 sm:w-6 xsm:w-5 sm:h-6 xsm:h-5" />
                        </a>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FacebookIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    );
  }
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function LinkedinIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }
  


  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function TwitterIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    );
  }
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function YoutubeIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    );
  }