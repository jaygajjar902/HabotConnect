import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CheckIcon from "../assets/CheckIcon.svg"

function BuyerSeller() {
  return (
    <main className="flex container bg-[#072F57] py-32 px-16 gap-16 rounded-md my-8 justify-center">
      <div className="w-1/2">
        <iframe
          className="rounded-lg"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IZLp-TZyDkQ?si=LOvALhc8E9eF-DQE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="w-1/2">
        <Tabs defaultValue="buyer" className="w-[400px] space-y-8">
          <TabsList className="bg-0 flex justify-between">
            <TabsTrigger className="text-2xl font-bold text-center text-white" value="buyer">Buyer</TabsTrigger>
            <TabsTrigger className="text-2xl font-bold text-center text-white" value="supplier">Supplier</TabsTrigger>
          </TabsList>   
          <TabsContent className="w-max" value="buyer">
            <ul className="text-white space-y-2">
                <li className="flex gap-2"><img src={CheckIcon} />Post your requirements.</li>
                <li className="flex gap-2"><img src={CheckIcon} />Sit back for multiple suppliers to contact you.</li>
                <li className="flex gap-2"><img src={CheckIcon} />Choose among the suppliers based on the ratings and reviews.</li>
            </ul>
          </TabsContent>
          <TabsContent className="w-max" value="supplier">
          <ul className="text-white space-y-2">
                <li className="flex gap-2"><img src={CheckIcon} />Post your requirements.</li>
                <li className="flex gap-2"><img src={CheckIcon} />Sit back for multiple suppliers to contact you.</li>
                <li className="flex gap-2"><img src={CheckIcon} />Choose among the suppliers based on the ratings and reviews.</li>
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

export default BuyerSeller;
