import Image from 'next/image'
import AboutCard from '../public/about-us-card.jpg'

const LearnMore = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-900 dark:border-gray-700 text-center">
                <Image className="rounded-t-lg" width={400} src={AboutCard} alt="quote-image" />
                <div className="p-5">
                    <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About us</h4>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
                        We provide tailored security solutions designed to meet the unique needs of residential, 
                        commercial, and industrial clients. With our advanced technology and professional expertise, 
                        you can trust us to deliver reliable and effective security measures for peace of mind.
                    </p>
                    <button
                        type="button"
                        className="text-white bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LearnMore
