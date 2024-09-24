import { Button, Typography } from '@material-tailwind/react'
import { AtSign, Smartphone } from 'lucide-react'
import foto2 from '../assets/images/contacts2.png'
import foto1 from '../assets/images/contacts1.png'

const Contacts = () => {
  return (
    <div className='lg:max-w-screen-lg md:max-w-[90%] max-w-[90%] mx-auto flex md:flex-row flex-col gap-5 py-10 ' >

      <div className="sm:p-10 md:w-1/2 mx-auto rounded-lg bg-lightBlue ">

        <Typography className='text-primary sm:max-w-[480px] max-w-[350px] font-bold md:text-[35px] sm:text-[30px] text-[24px] ' >
          Контакты
        </Typography>

        <Typography className='text-textPrimary sm:max-w-[480px] max-w-[90%] sm:text-base text-sm font-normal ' >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>

        <div className="py-10 px-5 ">
          <div className="flex items-center gap-5">
            <div className="p-3 max-w-min rounded-full bg-darkBlue text-white">
              <Smartphone className='size-10 xs:size-12' />
            </div>

            <div className="py-4 ">

              <Typography className='text-primary font-bold xs:text-2xl text-base' >
                WhatsApp & WeChat
              </Typography>

              <Typography className='text-darkBlue font-bold xs:text-base text-sm ' >
                +86 19817983305
              </Typography>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="p-3 max-w-min rounded-full bg-darkBlue text-white">
              <AtSign className='size-10 xs:size-12' />
            </div>

            <div className="py-4 ">

              <Typography className='text-primary font-bold xs:text-2xl text-base' >
                Электронная почта
              </Typography>

              <Typography className='text-darkBlue font-bold xs:text-base text-sm' >
                1325427621@qq.com
              </Typography>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="p-3 max-w-min rounded-full bg-darkBlue text-white">
              <AtSign className='size-10 xs:size-12' />
            </div>

            <div className="py-4 ">

              <Typography className='text-primary font-bold xs:text-2xl text-base' >
                Электронная почта
              </Typography>

              <Typography className='text-darkBlue font-bold xs:text-base text-sm' >
                1325427621@qq.com
              </Typography>
            </div>
          </div>
        </div>

        <div className="flex gap-5">
          <Button className='bg-primary py-5 px-10 hover:bg-darkBlue duration-300 my-2 ' >Подробнее</Button>
          <Button className='bg-[#E6F1FA] text-primary py-5 hover:text-[#E6F1FA] hover:bg-darkBlue duration-300 my-2 ' >Google Maps</Button>

        </div>
      </div>
      <div className="sm:w-[520px]  w-full h-[400px] xs:h-[600px] lg:h-auto flex flex-col gap-5 mx-auto ">

        <div className="rounded-2xl md:h-1/2 h-full w-full  " style={{ background: `url(${foto1})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} >

        </div>

        <div className="rounded-2xl md:h-1/2 h-full w-full " style={{ background: `url(${foto2})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} >
        </div>
      </div>
    </div>
  )
}

export default Contacts