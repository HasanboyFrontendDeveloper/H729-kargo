import { Button, Typography } from '@material-tailwind/react'
import { AtSign, MapPin, Smartphone } from 'lucide-react'
import foto2 from '../assets/images/contacts2.png'
import foto1 from '../assets/images/contacts1.png'

const Contacts = () => {
  return (
    <div className='lg:max-w-[1276px] md:max-w-[90%] max-w-[280px] mx-auto flex md:flex-row flex-col gap-5 lg:py-10 mb-[60px] lg:mb-0 ' >

      <div className="max-w-[628px] max-h-[707px] w-full lg:pl-[72px] lg:pt-[53px] lg:pb-[60px] lg:pr-[110px] px-5 py-[25px] rounded-lg bg-lightBlue ">
        <div className="lg:py-[10.5px] ">

          <Typography className='lg:mb-5 mb-[10px] text-primary sm:max-w-[480px] max-w-[240px] font-bold font-raleway !leading-[42.26px] lg:!leading-[59.87px] md:text-[51px] sm:text-[30px] text-[36px] ' >
            Контакты
          </Typography>

          <Typography className='text-textPrimary sm:max-w-[446px] sm:text-lg !leading-[19.6px] lg:!leading-[25.2px] text-sm font-normal font-raleway ' >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
          </Typography>

        </div>

        <div className="lg:my-5 my-10 lg:max-w-[346px] ">
          <div className="flex items-center gap-[30px]  ">
            <div className="lg:p-3 p-[10px] max-w-min rounded-full bg-darkBlue text-white">
              <Smartphone className='size-7 xs:size-12' />
            </div>

            <div className="lg:py-[6.5px] ">

              <Typography className='text-primary font-bold font-raleway xs:text-2xl text-base !leading-[18.78px] lg:!leading-[28.18px] lg:pb-[10px] ' >
                WhatsApp & WeChat
              </Typography>

              <Typography className='text-darkBlue font-normal font-raleway !leading-[18.78px] lg:!leading-[21.13px] xs:text-lg text-base ' >
                +86 19817983305
              </Typography>
            </div>
          </div>
          <div className="flex items-center gap-[30px] lg:my-10 my-[30px] ">
            <div className="lg:p-3 p-[10px] max-w-min rounded-full bg-darkBlue text-white">
              <AtSign className='size-7 xs:size-12' />
            </div>

            <div className="lg:py-[6.5px] ">

              <Typography className='text-primary font-bold font-raleway xs:text-2xl text-base !leading-[18.78px] lg:!leading-[28.18px] lg:pb-[10px] ' >
                Электронная почта
              </Typography>

              <Typography className='text-darkBlue font-normal font-raleway !leading-[18.78px] lg:!leading-[21.13px] xs:text-lg text-base' >
                1325427621@qq.com
              </Typography>
            </div>
          </div>
          <div className="flex items-center gap-[30px] ">
            <div className="lg:p-3 p-[10px] max-w-min rounded-full bg-darkBlue text-white">
              <MapPin className='size-7 xs:size-12' />
            </div>

            <div className="lg:py-[6.5px] ">

              <Typography className='text-primary font-bold font-raleway xs:text-2xl text-base !leading-[18.78px] lg:!leading-[28.18px] lg:pb-[10px] ' >
                Электронная почта
              </Typography>

              <Typography className='text-darkBlue font-normal font-raleway !leading-[18.78px] lg:!leading-[21.13px] xs:text-lg text-base' >
                1325427621@qq.com
              </Typography>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:gap-5 gap-[10px] lg:pt-10 ">
          <Button className='bg-primary lg:py-6 py-[25.5px] lg:px-[52px] px-[81px] lg:text-base text-sm  font-raleway font-semibold !leading-[16.44px] lg:!leading-[18.78px] normal-case hover:bg-darkBlue duration-300 ' >Подробнее</Button>
          <Button className='bg-[#E6F1FA] text-primary lg:py-6 py-[25.5px] lg:px-[52px] px-[76px] lg:text-base text-sm font-raleway font-semibold !leading-[16.44px] lg:!leading-[18.78px] normal-case hover:text-[#E6F1FA] hover:bg-darkBlue duration-300 ' >Google Maps</Button>

        </div>
      </div>
      <div className="sm:w-[628px]  w-full max-h-[707px] lg:h-auto h-[320px] flex flex-col gap-5 mx-auto ">

        <div className="rounded-2xl md:max-h-[343px] h-full w-full  " style={{ background: `url(${foto1})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} >

        </div>

        <div className="rounded-2xl md:h-1/2 h-full w-full " style={{ background: `url(${foto2})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} >
        </div>
      </div>
    </div>
  )
}

export default Contacts