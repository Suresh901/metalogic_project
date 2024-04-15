import Image from 'next/image'

interface Data {
    item: {
        logo: string;
        title: string;
        desc?: string;
    };
    className?: string;
    className2?: string;
}

const Card: React.FC<Data> = ({item, className, className2}) => {
  return (
    <div className={`flex flex-col gap-3 rounded-2xl max-w-[400px] ${className}`}>
        <div className={`${className2}`}>
            <Image src={item.logo} alt='' width={30} height={30}/>
        </div>
        <div>
            <h1 className='text-lg font-bold text-[#334767]'>{item.title}</h1>
        </div>
        <div>
            <p className='text-[14px]'>{item.desc}</p>
        </div>
    </div>
  )
}

export default Card