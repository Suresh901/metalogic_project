import Image from 'next/image'

interface Data {
    item: {
        logo: string;
        title: string;
        desc?: string;
    };
}

const Card: React.FC<Data> = ({item}) => {
  return (
    <div className='border p-10 bg-white flex flex-col gap-3 rounded-2xl max-w-[400px] drop-shadow-xl' >
        <div className='p-5 bg-[#f3f4f6] rounded-2xl w-20'>
            <Image src={item.logo} alt='' width={30} height={30}/>
        </div>
        <div>
            <h1 className='text-2xl font-bold'>{item.title}</h1>
        </div>
        <div>
            <p>{item.desc}</p>
        </div>
    </div>
  )
}

export default Card