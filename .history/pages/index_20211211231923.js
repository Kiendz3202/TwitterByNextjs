import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Image src='https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-9/132558520_775216293207318_5385012242554835353_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_ohc=Ab0FomBkRYsAX9N92rQ&_nc_oc=AQkyY76PPKJOhuxVyj9fl55MQvWMBUayfLZthdbyyTnHYP39CcZNcrrhfvPSvVVgGS0&_nc_ht=scontent.fhan5-8.fna&oh=a0e48c91933a726d49fb263c3cb6a4b6&oe=61D8E8D9' alt='' />
  )
}
