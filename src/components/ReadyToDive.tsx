import { Button } from "./ui/button"
import { MoveRight } from 'lucide-react';

function ReadyToDive() {
  return (
    <main className="flex container py-24">
        <div className="space-y-8 w-1/2">
            <h1 className="text-3xl font-bold">Ready to dive into HABOT?</h1>
            <p>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
            <Button className="px-10 gap-4 bg-[#00732F]">Sign up Today ! <MoveRight /></Button>
        </div>

        <div className="w-1/2 px-8 flex flex-col gap-8 items-end">
            <div className="flex gap-4">
            <span className="border border-[#E7760D] p-3 text-center rounded-sm w-52">Abu Dhabi</span>
            <span className="border border-[#E7760D] p-3 text-center rounded-sm w-52">Dubai</span>
            </div>
            <div className="flex gap-4">
            <span className="border border-[#E7760D] p-3 text-center rounded-sm w-52">Sharjah & Ajman</span>
            <span className="border border-[#E7760D] p-3 text-center rounded-sm w-52">Fujairah</span>
            </div>
            <div className="flex gap-4">
            <span className="border border-[#E7760D] p-3 text-center rounded-sm w-52">Ras Al Khaimah</span>
            <span className="border border-[#E7760D] p-3 text-center rounded-sm w-52">Umm Al Quwain</span>
            </div>
        </div>
    </main>
  )
}

export default ReadyToDive