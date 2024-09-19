import { Button, Input, Typography } from '@material-tailwind/react'
import person from '../../assets/images/headerImg.png'
import { Phone } from 'lucide-react'

const Header = () => {
    return (
        <div className='bg-secondary flex flex-col md:flex-row justify-between md:max-w-screen-lg max-w-[90%] mx-auto rounded-3xl m-5 ss:px-10 px-5 pt-5 ' >
            <div className="my-auto mx-auto max-w-[450px] ">
                <Typography className='text-primary font-bold md:text-[50px] ss:text-[35px] text-[25px] ' >
                    Доставка грузов из Китая в Россию
                </Typography>

                <Typography className='text-textPrimary font-semibold ss:text-base text-sm ' >
                    Мы предоставляем бесплатно:
                </Typography>
                <ul className='grid grid-cols-2 ' >
                    <li className='flex gap-2 items-center '>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.77085 11.8958L6.72919 9.85413C6.60419 9.72913 6.45141 9.66663 6.27085 9.66663C6.0903 
                                9.66663 5.93752 9.72913 5.81252 9.85413C5.67363 9.99301 5.60419 10.1562 5.60419 10.3437C5.60419 
                                10.5312 5.66669 10.6875 5.79169 10.8125L8.33335 13.3541C8.44446 13.4652 8.5903 13.5208 8.77085 
                                13.5208C8.95141 13.5208 9.09724 13.4652 9.20835 13.3541L14.2084 8.35413C14.3334 8.22913 14.3959 
                                8.07635 14.3959 7.89579C14.3959 7.71524 14.3264 7.55551 14.1875 7.41663C14.0625 7.29163 13.9063 
                                7.22913 13.7188 7.22913C13.5313 7.22913 13.3681 7.29857 13.2292 7.43746L8.77085 11.8958ZM10 
                                18.3333C8.81946 18.3333 7.72224 18.1215 6.70835 17.6979C5.69446 17.2743 4.81252 16.6875 4.06252 
                                15.9375C3.31252 15.1875 2.72571 14.3055 2.3021 13.2916C1.87849 12.2777 1.66669 11.1805 1.66669 
                                9.99996C1.66669 8.83329 1.87849 7.74301 2.3021 6.72913C2.72571 5.71524 3.31252 4.83329 4.06252 
                                4.08329C4.81252 3.33329 5.69446 2.74301 6.70835 2.31246C7.72224 1.8819 8.81946 1.66663 10 
                                1.66663C11.1667 1.66663 12.257 1.8819 13.2709 2.31246C14.2847 2.74301 15.1667 3.33329 15.9167 
                                4.08329C16.6667 4.83329 17.257 5.71524 17.6875 6.72913C18.1181 7.74301 18.3334 8.83329 18.3334 
                                9.99996C18.3334 11.1805 18.1181 12.2777 17.6875 13.2916C17.257 14.3055 16.6667 15.1875 15.9167 
                                15.9375C15.1667 16.6875 14.2847 17.2743 13.2709 17.6979C12.257 18.1215 11.1667 18.3333 10 18.3333Z"
                                fill="#203253"
                            />
                        </svg>


                        <Typography className='text-textPrimary font-medium ss:text-base text-sm ' >
                            Переводчик
                        </Typography>
                    </li>
                    <li className='flex gap-2 items-center '>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.77085 11.8958L6.72919 9.85413C6.60419 9.72913 6.45141 9.66663 6.27085 9.66663C6.0903 
                                9.66663 5.93752 9.72913 5.81252 9.85413C5.67363 9.99301 5.60419 10.1562 5.60419 10.3437C5.60419 
                                10.5312 5.66669 10.6875 5.79169 10.8125L8.33335 13.3541C8.44446 13.4652 8.5903 13.5208 8.77085 
                                13.5208C8.95141 13.5208 9.09724 13.4652 9.20835 13.3541L14.2084 8.35413C14.3334 8.22913 14.3959 
                                8.07635 14.3959 7.89579C14.3959 7.71524 14.3264 7.55551 14.1875 7.41663C14.0625 7.29163 13.9063 
                                7.22913 13.7188 7.22913C13.5313 7.22913 13.3681 7.29857 13.2292 7.43746L8.77085 11.8958ZM10 
                                18.3333C8.81946 18.3333 7.72224 18.1215 6.70835 17.6979C5.69446 17.2743 4.81252 16.6875 4.06252 
                                15.9375C3.31252 15.1875 2.72571 14.3055 2.3021 13.2916C1.87849 12.2777 1.66669 11.1805 1.66669 
                                9.99996C1.66669 8.83329 1.87849 7.74301 2.3021 6.72913C2.72571 5.71524 3.31252 4.83329 4.06252 
                                4.08329C4.81252 3.33329 5.69446 2.74301 6.70835 2.31246C7.72224 1.8819 8.81946 1.66663 10 
                                1.66663C11.1667 1.66663 12.257 1.8819 13.2709 2.31246C14.2847 2.74301 15.1667 3.33329 15.9167 
                                4.08329C16.6667 4.83329 17.257 5.71524 17.6875 6.72913C18.1181 7.74301 18.3334 8.83329 18.3334 
                                9.99996C18.3334 11.1805 18.1181 12.2777 17.6875 13.2916C17.257 14.3055 16.6667 15.1875 15.9167 
                                15.9375C15.1667 16.6875 14.2847 17.2743 13.2709 17.6979C12.257 18.1215 11.1667 18.3333 10 18.3333Z"
                                fill="#203253"
                            />
                        </svg>


                        <Typography className='text-textPrimary font-medium ss:text-base text-sm ' >
                            Хранение грузов
                        </Typography>
                    </li>
                    <li className='flex gap-2 items-center '>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.77085 11.8958L6.72919 9.85413C6.60419 9.72913 6.45141 9.66663 6.27085 9.66663C6.0903 
                                9.66663 5.93752 9.72913 5.81252 9.85413C5.67363 9.99301 5.60419 10.1562 5.60419 10.3437C5.60419 
                                10.5312 5.66669 10.6875 5.79169 10.8125L8.33335 13.3541C8.44446 13.4652 8.5903 13.5208 8.77085 
                                13.5208C8.95141 13.5208 9.09724 13.4652 9.20835 13.3541L14.2084 8.35413C14.3334 8.22913 14.3959 
                                8.07635 14.3959 7.89579C14.3959 7.71524 14.3264 7.55551 14.1875 7.41663C14.0625 7.29163 13.9063 
                                7.22913 13.7188 7.22913C13.5313 7.22913 13.3681 7.29857 13.2292 7.43746L8.77085 11.8958ZM10 
                                18.3333C8.81946 18.3333 7.72224 18.1215 6.70835 17.6979C5.69446 17.2743 4.81252 16.6875 4.06252 
                                15.9375C3.31252 15.1875 2.72571 14.3055 2.3021 13.2916C1.87849 12.2777 1.66669 11.1805 1.66669 
                                9.99996C1.66669 8.83329 1.87849 7.74301 2.3021 6.72913C2.72571 5.71524 3.31252 4.83329 4.06252 
                                4.08329C4.81252 3.33329 5.69446 2.74301 6.70835 2.31246C7.72224 1.8819 8.81946 1.66663 10 
                                1.66663C11.1667 1.66663 12.257 1.8819 13.2709 2.31246C14.2847 2.74301 15.1667 3.33329 15.9167 
                                4.08329C16.6667 4.83329 17.257 5.71524 17.6875 6.72913C18.1181 7.74301 18.3334 8.83329 18.3334 
                                9.99996C18.3334 11.1805 18.1181 12.2777 17.6875 13.2916C17.257 14.3055 16.6667 15.1875 15.9167 
                                15.9375C15.1667 16.6875 14.2847 17.2743 13.2709 17.6979C12.257 18.1215 11.1667 18.3333 10 18.3333Z"
                                fill="#203253"
                            />
                        </svg>


                        <Typography className='text-textPrimary font-medium ss:text-base text-sm ' >
                            Поиск товара
                        </Typography>
                    </li>
                    <li className='flex gap-2 items-center '>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.77085 11.8958L6.72919 9.85413C6.60419 9.72913 6.45141 9.66663 6.27085 9.66663C6.0903 
                                9.66663 5.93752 9.72913 5.81252 9.85413C5.67363 9.99301 5.60419 10.1562 5.60419 10.3437C5.60419 
                                10.5312 5.66669 10.6875 5.79169 10.8125L8.33335 13.3541C8.44446 13.4652 8.5903 13.5208 8.77085 
                                13.5208C8.95141 13.5208 9.09724 13.4652 9.20835 13.3541L14.2084 8.35413C14.3334 8.22913 14.3959 
                                8.07635 14.3959 7.89579C14.3959 7.71524 14.3264 7.55551 14.1875 7.41663C14.0625 7.29163 13.9063 
                                7.22913 13.7188 7.22913C13.5313 7.22913 13.3681 7.29857 13.2292 7.43746L8.77085 11.8958ZM10 
                                18.3333C8.81946 18.3333 7.72224 18.1215 6.70835 17.6979C5.69446 17.2743 4.81252 16.6875 4.06252 
                                15.9375C3.31252 15.1875 2.72571 14.3055 2.3021 13.2916C1.87849 12.2777 1.66669 11.1805 1.66669 
                                9.99996C1.66669 8.83329 1.87849 7.74301 2.3021 6.72913C2.72571 5.71524 3.31252 4.83329 4.06252 
                                4.08329C4.81252 3.33329 5.69446 2.74301 6.70835 2.31246C7.72224 1.8819 8.81946 1.66663 10 
                                1.66663C11.1667 1.66663 12.257 1.8819 13.2709 2.31246C14.2847 2.74301 15.1667 3.33329 15.9167 
                                4.08329C16.6667 4.83329 17.257 5.71524 17.6875 6.72913C18.1181 7.74301 18.3334 8.83329 18.3334 
                                9.99996C18.3334 11.1805 18.1181 12.2777 17.6875 13.2916C17.257 14.3055 16.6667 15.1875 15.9167 
                                15.9375C15.1667 16.6875 14.2847 17.2743 13.2709 17.6979C12.257 18.1215 11.1667 18.3333 10 18.3333Z"
                                fill="#203253"
                            />
                        </svg>


                        <Typography className='text-textPrimary font-medium ss:text-base text-sm ' >
                            Досмотр грузов
                        </Typography>
                    </li>
                </ul>

                <form className='flex flex-col gap-5 my-5 '>
                    <Input
                        className='placeholder:text-gray-500 placeholder:opacity-100 focus:border-secondary active:border-secondary border-none bg-white rounded-2xl '
                        placeholder='Введите ваш номер телефона'
                        containerProps={{ outline: 'none' }}
                        icon={<Phone />}
                        labelProps={{
                            className: "hidden",
                        }}
                    />

                    <Input
                        className='placeholder:text-gray-500 placeholder:opacity-100 focus:border-secondary active:border-secondary border-none bg-white rounded-2xl '
                        placeholder='Какой товар вы ищите или хотите доставить в Россию?'
                        containerProps={{ outline: 'none' }}
                        labelProps={{
                            className: "hidden",
                        }}
                    />

                    <Button className='bg-primary font-bold ' >Получить 100$ скидку на доставку</Button>
                </form>

            </div>
            <div className=" mx-auto">
                <img src={person} alt="Header Image" className='sm:max-w-[350px] md:max-w-[560px] max-w-[250px] ' />
            </div>
        </div>
    )
}

export default Header