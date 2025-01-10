export default function Footer() {
    return (
        <>
            <footer>
                <div className="bg-[#7A0000] flex max-sm:flex-col-reverse sm:justify-between items-center sm:gap-6 gap-8 sm:px-[85px] px-[21px] py-8 sm:h-20">
                    <div className="flex justify-center items-center text-white">
                        <p className="sm:text-base text-[13px] text-center font-medium">Copyright &copy; 2025 by Muhammad Ahmed | All Rights Reserved.</p>
                    </div>
                    <div className="flex justify-between items-center sm:gap-6 gap-4">
                        <h4 className="flex justify-center items-center text-white hover:text-[#7A0000] hover:bg-white sm:text-2xl text-xl sm:h-12 h-10 sm:w-12 w-10 border-white border-[2px] rounded-full transition-all duration-500 cursor-pointer"><i className='bx bxl-facebook'></i></h4>
                        <h4 className="flex justify-center items-center text-white hover:text-[#7A0000] hover:bg-white sm:text-2xl text-xl sm:h-12 h-10 sm:w-12 w-10 border-white border-[2px] rounded-full transition-all duration-500 cursor-pointer"><i className='bx bxl-twitter'></i></h4>
                        <h4 className="flex justify-center items-center text-white hover:text-[#7A0000] hover:bg-white sm:text-2xl text-xl sm:h-12 h-10 sm:w-12 w-10 border-white border-[2px] rounded-full transition-all duration-500 cursor-pointer"><i className='bx bxl-youtube'></i></h4>
                        <h4 className="flex justify-center items-center text-white hover:text-[#7A0000] hover:bg-white sm:text-2xl text-xl sm:h-12 h-10 sm:w-12 w-10 border-white border-[2px] rounded-full transition-all duration-500 cursor-pointer"><i className='bx bxl-instagram'></i></h4>
                        <h4 className="flex justify-center items-center text-white hover:text-[#7A0000] hover:bg-white sm:text-2xl text-xl sm:h-12 h-10 sm:w-12 w-10 border-white border-[2px] rounded-full transition-all duration-500 cursor-pointer"><i className='bx bxl-linkedin'></i></h4>
                        <h4 className="flex justify-center items-center text-white hover:text-[#7A0000] hover:bg-white sm:text-2xl text-xl sm:h-12 h-10 sm:w-12 w-10 border-white border-[2px] rounded-full transition-all duration-500 cursor-pointer"><i className='bx bxl-github'></i></h4>
                    </div>
                </div>
            </footer>
        </>

    );
}