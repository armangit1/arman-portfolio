import { BsArrowRight } from "react-icons/bs";


const BlogCard = () => {


    const blogData = [
        {
            id: 1,
            date: 'Mar 15, 2024',
            title: 'laravel for Beginners ',
            description: 'লারাভেল শেখার আগে কিছু মৌলিক বিষয় জানতে হবে ',
            category: 'laravel',
            image: 'https://media.licdn.com/dms/image/v2/D5622AQFyxzEio7z3gA/feedshare-shrink_800/B56ZVU9asVGUAk-/0/1740887142846?e=1757548800&v=beta&t=mxofyr57IVVAGzwxmLmpoUx0F8dEZyPV7osFnIhsCYE',
            url: 'https://www.linkedin.com/posts/arman-khan-in_%E0%A6%B2%E0%A6%B0%E0%A6%AD%E0%A6%B2-%E0%A6%B6%E0%A6%96%E0%A6%B0-%E0%A6%86%E0%A6%97-%E0%A6%95%E0%A6%9B-%E0%A6%AE%E0%A6%B2%E0%A6%95-%E0%A6%AC%E0%A6%B7%E0%A7%9F-%E0%A6%9C%E0%A6%A8%E0%A6%A4-%E0%A6%B9%E0%A6%AC-activity-7301809914031575040-d30K?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER2_GkBp6RG9b6e6PtGrCtoYD5yQw5pS44'
        },
        {
            id: 2,
            date: 'Jun 02, 2025',
            title: 'Mastering React Hooks',
            description: '🔧 8 Essential React Hooks You Must Know',
            category: 'React',
            image: 'https://media.licdn.com/dms/image/v2/D5622AQH5OW_DeRF7Mw/feedshare-shrink_1280/B56ZfMgGaxHEAk-/0/1751482656927?e=1757548800&v=beta&t=yafGRAXGwM1g68gDlCiIK99fCIorMwpWajE5DKy0wj4',
            url: 'https://www.linkedin.com/posts/arman-khan-in_8-essential-react-hooks-you-must-know-activity-7346250717411594242-e1w7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER2_GkBp6RG9b6e6PtGrCtoYD5yQw5pS44'
        },
        {
            id: 3,
            date: 'May 10, 2024',
            title: 'Why Use Next.js?',
            description: 'Here are some compelling reasons why Next.js is a great choice for modern web development:',
            category: 'Next.js',
            image: 'https://media.licdn.com/dms/image/v2/D5622AQEl9UxFgOlztA/feedshare-shrink_2048_1536/B56ZfMjjVHHoAs-/0/1751483561814?e=1757548800&v=beta&t=GnT-Qy11UT48p_AKPGIDwmjdHZKEbTDd--fPuKKRJNY',
            url: 'https://www.linkedin.com/posts/arman-khan-in_why-use-nextjs-here-are-some-compelling-activity-7346254514049400832-yg3A?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER2_GkBp6RG9b6e6PtGrCtoYD5yQw5pS44'
        },
    ];



    return (
        <div id="blogs" className='mt-20' >

            <div data-aos="flip-left" className='mt-10 mx-2 flex flex-col'>
                <div className='inline-flex justify-center'>
                    <h1 className='md:text-5xl text-3xl text-center  bg-gradient-to-r  from-[#8A55F8] to-white text-transparent bg-clip-text mt-10'>My Blogs</h1></div>
                <p className='text-[#ebe5f7] md:text-md text-center  mt-5'>Welcome to my blog section where I share insights, tips, and tutorials on web development, design trends, and the latest technologies. <br /> Dive in and explore topics that fuel innovation and creativity.</p>
            </div>



            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10  p-2">

                {

                    blogData.map(data => {
                        return (
                            <div data-aos="zoom-in" className="max-w-sm rounded-2xl  overflow-hidden mx-auto my-3  bg-[#1A1021] text-white shadow-lg">
                                <div className="relative">
                                    <img
                                        src={data.image} // Replace with actual blog image URL
                                        alt={data.title}
                                        className="w-full h-56 object-cover rounded-t-2xl"
                                    />

                                </div>

                                <div className="p-5">
                                    <p className="text-sm text-purple-300 mb-2">{data.date}</p>
                                    <h2 className="text-lg font-bold mb-1">
                                        {data.title}
                                    </h2>
                                    <p className="text-sm text-gray-300 mb-4">
                                        {data.description}
                                    </p>

                                    <div className="flex justify-between items-center">
                                        <span className="bg-purple-900 text-purple-300 text-xs px-3 py-1 rounded-full">
                                            {data.category}
                                        </span>
                                        <a href={data.url} target="_blank" className="text-sm font-medium flex items-center hover:underline">
                                            Read More <BsArrowRight className="ml-1 h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                }

            </div>

        </div>
    );
};

export default BlogCard;
