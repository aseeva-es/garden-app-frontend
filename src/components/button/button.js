
export default function Button({children}){
    return(
        <button className="
                w-full 
                text-white bg-[#B58D63] hover:bg-[#CCA070] focus:ring-4 focus:ring-stone-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2
                " type="submit">
                 { children }
                </button>
    )
} 