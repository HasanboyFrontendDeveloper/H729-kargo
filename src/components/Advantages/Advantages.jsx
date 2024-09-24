import { Typography } from '@material-tailwind/react'
import { BadgeCheck, BaggageClaim, BriefcaseBusiness, Building, CreditCard, FileText, Headset, PackageSearch, Timer, User } from 'lucide-react'
import React from 'react'

const Advantages = () => {

    const advantages = [
        { icon: <PackageSearch size={28} />, title: `Помощь \n в поиске товара` },
        { icon: <BriefcaseBusiness size={28} />, title: 'Работаем с ООО \n и ИП (ТОРГ-12)' },
        { icon: <FileText size={28} />, title: 'Документы \n для возврата НДС (20%)' },
        { icon: <CreditCard size={28} />, title: 'Возможна оплата на карту или наличными в МСК' },
        { icon: <Timer size={28} />, title: 'Оплата по счету \n за товар в Китае \n за 10 минут' },
        { icon: <Headset size={28} />, title: 'Поддержка \n 24/7 онлайн' },
        { icon: <Building size={28} />, title: '3 офиса в Китае: Пекин, Гуанчжоу, Иу' },
        { icon: <BadgeCheck size={28} />, title: 'Гарантия \n лучшей цены' },
        { icon: <User size={28} />, title: 'Таможенный представитель (декларант)' },
        { icon: <BaggageClaim size={28} />, title: 'Экспедирование груза' },
    ]

    return (
        <div className='lg:max-w-[1280px] max-w-[90%] md:max-w-[80%] mx-auto py-[51px] ' >

            <Typography className='text-primary font-raleway !leading-[46.96px] font-bold md:text-[40px] text-[30px] ' >
                Наши преимущества
            </Typography>

            <Typography className='text-textPrimary text-lg font-raleway font-normal !leading-[25.2px] max-w-[500px]  ' >
                Мы предоставляем полный перечень услуг для качественного ведения товарного бизнеса в России
            </Typography>

            {/* <div className="py-5 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2  gap-5 "> */}
            <div className="py-5 flex justify-center flex-wrap  gap-5 ">
                {advantages.map(item => (

                    <div className="bg-[#F4FAFF] w-[240px] h-[182px] pt-[30px] pl-[35px] pr-[25px] rounded-3xl  " key={item.title} >
                    {/* <div className="bg-[#F4FAFF] w-[240px] h-[182px] pt-[30px] pl-[35px] pr-[25px] rounded-3xl mt-5 hover:-translate-y-5 transition-all duration-300 " key={item.title} > */}
                        <div className="bg-darkBlue text-white inline-block p-2 rounded-full ">
                            {item.icon}
                        </div>
                        <Typography className='text-primary font-semibold text-xs ss:text-base whitespace-pre-line '>{item.title}</Typography>

                    </div>

                ))}
            </div>

        </div>
    )
}

export default Advantages