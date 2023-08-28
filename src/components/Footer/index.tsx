import Image from 'next/image'
import FacebookCircleFillIcon from 'remixicon-react/FacebookCircleFillIcon'
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon'

export const Footer = () => {
  return (
    <footer className=" bg-[#252f3d]  text-white">
      <div className=" max-w-[1980px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10 px-10 py-10  items-center justify-center ">
        <div className="flex flex-col items-center lg:items-start gap-5">
          <Image
            width={90}
            height={90}
            className="pl-2"
            src="https://dimoaq.s3.ap-northeast-1.amazonaws.com/anh-web/Screen+Shot+2023-04-27+at+17.10.01.png"
            alt="footer lgo"
          />
          <p className="text-center lg:text-start"></p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium">Company</p>
          <p className="text-base">Careers</p>
          <p className="text-base">Teachers</p>
          <p className="text-base">Support</p>
          <p className="text-base">Contact</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium">Product</p>
          <p className="text-base">Courses</p>
          <p className="text-base">Pricing</p>
          <p className="text-base">Blog</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium">Legal</p>
          <p className="text-base">Terms & Conditions</p>
          <p className="text-base">Privacy policy</p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <FacebookCircleFillIcon size={32} />
          <TwitterFillIcon size={32} />
        </div>
      </div>
    </footer>
  )
}
