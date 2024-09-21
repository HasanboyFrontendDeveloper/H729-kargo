import { Typography } from '@material-tailwind/react'
import { BadgeCheck, BaggageClaim, BriefcaseBusiness, Building, CreditCard, FileText, Headset, PackageSearch, Timer, User } from 'lucide-react'
import React from 'react'

const Advantages = () => {

    const advantages = [
        { icon: <PackageSearch size={28} />, title: 'Помощь в поиске товара' },
        { icon: <BriefcaseBusiness size={28} />, title: 'Работаем с ООО и ИП (ТОРГ-12)' },
        { icon: <FileText size={28} />, title: 'Документы для возврата НДС (20%)' },
        { icon: <CreditCard size={28} />, title: 'Возможна оплата на карту или наличными в МСК' },
        { icon: <Timer size={28} />, title: 'Оплата по счету за товар в Китае за 10 минут' },
        { icon: <Headset size={28} />, title: 'Поддержка 24/7 онлайн' },
        { icon: <Building size={28} />, title: '3 офиса в Китае: Пекин, Гуанчжоу, Иу' },
        { icon: <BadgeCheck size={28} />, title: 'Гарантия лучшей цены' },
        { icon: <User size={28} />, title: 'Таможенный представитель (декларант)' },
        { icon: <BaggageClaim size={28} />, title: 'Экспедирование груза' },
    ]

    return (
        <div className='lg:max-w-screen-lg max-w-[90%] md:max-w-[80%] mx-auto py-5 ' >

            <Typography className='text-primary font-bold md:text-[50px] ss:text-[35px] text-[30px] ' >
                Наши преимущества
            </Typography>

            <Typography className='text-textPrimary font-medium max-w-[500px]  ' >
                Мы предоставляем полный перечень услуг для качественного ведения товарного бизнеса в России
            </Typography>

            {/* <div className="py-5 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2  gap-5 "> */}
            <div className="py-5 flex justify-center flex-wrap  gap-5 ">
                {advantages.map(item => (

                    <div className="bg-[#F4FAFF] w-max ss:max-w-[200px] max-w-[130px] p-5 rounded-3xl mt-5 hover:-translate-y-5 transition-all duration-300 " key={item.title} >
                        <div className="bg-darkBlue text-white inline-block p-2 rounded-full ">
                            {item.icon}
                        </div>
                        <Typography className='text-primary font-semibold text-xs ss:text-base '>{item.title}</Typography>

                    </div>

                ))}
            </div>

        </div>
    )
}

export default Advantages