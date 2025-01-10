import Navbar2 from "@/app/components/Navbar2";

export default function Contact() {
    return (
        <>
            <Navbar2 />
            <section className="bg-[#1f1f1f] sm:h-screen flex max-sm:flex-col gap-14 justify-center items-center">
                <div className="flex flex-col sm:gap-28 gap-16 max-sm:p-14 max-sm:items-center max-sm:mt-8">
                    <div className="flex flex-col gap-3 max-sm:text-center">
                        <h1 className="sm:text-5xl text-4xl text-white font-bold">Contact Us</h1>
                        <p className="sm:text-xl text-lg text-white font-light sm:w-[70%]">Feel like contacting us? Submit your queries here and we will get back to you as soon as possible.</p>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-3">
                            <i className='bx bxs-phone text-[#c40000] text-4xl'></i>
                            <p className="text-white sm:text-[22px] text-xl font-light">+92 332 2668303</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <i className='bx bxs-envelope text-[#c40000] text-4xl'></i>
                            <p className="text-white sm:text-[22px] text-xl font-light">aq320646@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <i className='bx bxs-map text-[#c40000] text-4xl'></i>
                            <p className="text-white sm:text-[22px] text-xl font-light">31/3 C-1 Area Liaquatabad, Karachi</p>
                        </div>
                    </div>
                    <div className="flex gap-6 text-white text-4xl">
                        <i className='bx bxl-facebook-circle cursor-pointer'></i>
                        <i className='bx bxl-github cursor-pointer'></i>
                        <i className='bx bxl-linkedin-square cursor-pointer' ></i>
                        <i className='bx bxl-instagram cursor-pointer'></i>
                    </div>
                </div>
                <form className="sm:w-[28%] w-[330px] sm:h-[70%] h-[650px] bg-[#7A0000] rounded-3xl shadow-[0_8px_20px_5px_rgba(0,0,0,0.4)] p-10 max-sm:mb-28 flex flex-col justify-between">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-white text-lg">Your Name:</h3>
                        <input type="text" placeholder="Your Name" required className="p-4 rounded-lg text-lg" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-white text-lg">Email Address:</h3>
                        <input type="email" placeholder="Email Address" required className="p-4 rounded-lg text-lg" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-white text-lg">Message:</h3>
                        <textarea rows={6} placeholder="Type your message here" required className="p-4 rounded-lg text-lg resize-none"></textarea>
                    </div>
                    <div className="flex justify-center">
                        <input type="submit" value="Send Message" className="bg-[#1f1f1f] py-4 px-8 rounded-2xl text-base text-white font-semibold cursor-pointer uppercase" />
                    </div>
                </form>
            </section>
        </>
    );
}