
export default function Checkbox(){
    return(
        <div className="flex items-center">
    <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#5850EC] bg-gray-100 border-gray-300 rounded focus:ring-gray-300 focus:ring-2"/>
    <label className="ml-2 text-xs text-gray-900">I have read <a href="#" className="text-[#5850EC] hover:underline">terms and conditions</a>.</label>
</div>
    )
}