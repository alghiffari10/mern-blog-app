import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsGithub,
  BsLinkedin,
} from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer
      container
      className="rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between w-full p-6 border border-t-8 border-gray-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to={'/'}
              className="font-bold dark:text-white text-xl md:text-4xl sm:text-2xl">
              <span className="px-2 py-1 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-lg text-white">
                BedahCodeID
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm: mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="/about" rel="noopener noreferrer" target="_blank">
                  Bedah Code ID Blog
                </Footer.Link>
                <Footer.Link href="/" rel="noopener noreferrer" target="_blank">
                  Portfolio
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/alghiffari10"
                  rel="noopener noreferrer"
                  target="_blank">
                  Github
                </Footer.Link>
                <Footer.Link href="/" rel="noopener noreferrer" target="_blank">
                  Linkedin
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" rel="noopener noreferrer" target="_blank">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#" rel="noopener noreferrer" target="_blank">
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            <Footer.Copyright href="#" by="BedahCodeID" year={new Date().getFullYear()} />
          </div>
          <div className="flex gap-6 sm:mt-0 mt-1 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitterX} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
