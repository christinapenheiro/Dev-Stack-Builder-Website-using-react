import Logo from "../assets/logo-text.png"



const Footer = () => {
    return (
      <footer className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-5 py-10 sm:px-8 lg:py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 items-center justify-center text-center sm:text-left">
   
            <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start">
              <img
                src={Logo}
                alt="Dev Stack logo"
                className="mb-4 max-w-[30%] md:max-w-[60%]"
              />

              <p className="max-w-sm text-sm leading-6 text-gray-600">
                Curated tools, technologies, and resources for developers
                building modern software.
              </p>

   
              <div className="mt-5 flex gap-4">
                <span className="cursor-pointer text-sm font-medium text-gray-500">
                  Github
                </span>

                <span className="cursor-pointer text-sm font-medium text-gray-500 ">
                  Twitter
                </span>

                <span className="cursor-pointer text-sm font-medium text-gray-500">
                  LinkedIn
                </span>
              </div>
            </div>


            <div className="hidden sm:flex flex-col gap-3">
              <h4 className="mb-1 text-sm font-bold text-gray-900">
                PRODUCT
              </h4>

              <span className="cursor-pointer text-sm text-gray-600">
                Home
              </span>

              <span className="cursor-pointer text-sm text-gray-600">
                Technologies
              </span>

              <span className="cursor-pointer text-sm text-gray-600">
                Projects
              </span>
            </div>

            <div className="hidden sm:flex flex-col gap-3">
              <h4 className="mb-1 text-sm font-bold text-gray-900">
                COMPANY
              </h4>

              <span className="cursor-pointer text-sm text-gray-600">
                About
              </span>

              <span className="cursor-pointer text-sm text-gray-600">
                Contact
              </span>

              <span className="cursor-pointer text-sm text-gray-600">
                Careers
              </span>
            </div>
            <div className="hidden sm:flex flex-col gap-3">
              <h4 className="mb-1 text-sm font-bold text-gray-900">
                LEGAL
              </h4>

              <span className="cursor-pointer text-sm text-gray-600">
                Privacy Policy
              </span>

              <span className="cursor-pointer text-sm text-gray-600">
                Terms of Service
              </span>
            </div>
          </div>


          <hr className="my-8 border-gray-200" />


          <div className="flex gap-4 text-sm text-gray-500 flex-row items-center justify-between">
            <p>© 2026 Dev Stack. All rights reserved.</p>

            <div className="flex gap-5">
              <span className="cursor-pointer">
                Privacy
              </span>

              <span className="cursor-pointer">
                Terms
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;