import HIW1 from "../assets/Group 33.svg";
import HIW2 from "../assets/document (1) 1.svg"
import HIW3 from "../assets/Layer_x0020_1.svg"
import HIW4 from "../assets/edit (1) 1.svg"
import HIW5 from "../assets/quote-request 1.svg"
import HIW6 from "../assets/Group.svg"

function HowItWorks() {
  return (
    <main className="container flex flex-col gap-12 py-8">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl font-bold">How it works?</h2>
        <p className="text-center">
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with <br />
          potential buyers, and build successful business relationships, sharing
          valuable feedback.
        </p>
      </div>
      
      <div className="grid grid-cols-3 grid-rows-2 px-12">
        <div className="div1 col-start-1 col-end-2 row-start-1 row-end-2 bg-[#E8FBFF] py-12 px-16 flex flex-col items-center gap-6">
          <img src={HIW1} width={70} />
          <p className="text-center text-lg font-medium">Select Your Role and Sign Up</p>
        </div>
        <div className="div2 col-start-2 col-end-3 row-start-1 row-end-2 py-12 px-16 flex flex-col items-center gap-6">
          <img src={HIW2} width={70} />
          <p className="text-center text-lg font-medium">Select Your Role and Sign Up</p>
        </div>
        <div className="div3 col-start-3 col-end-4 row-start-1 row-end-2 py-12 px-16 flex flex-col items-center gap-6 bg-[#E8FBFF]">
          <img src={HIW3} width={70} />
          <p className="text-center text-lg font-medium">Select Your Role and Sign Up</p>
        </div>
        <div className="div4 col-start-1 col-end-2 row-start-2 row-end-3 py-12 px-16 flex flex-col items-center gap-6">
          <img src={HIW4} width={70} />
          <p className="text-center text-lg font-medium">Select Your Role and Sign Up</p>
        </div>
        <div className="div5 col-start-2 col-end-3 row-start-2 row-end-3 py-12 px-16 flex flex-col items-center gap-6 bg-[#E8FBFF]">
          <img src={HIW5} width={70} />
          <p className="text-center text-lg font-medium">Select Your Role and Sign Up</p>
        </div>
        <div className="div6 col-start-3 col-end-4 row-start-2 row-end-3 py-12 px-16 flex flex-col items-center gap-6">
          <img src={HIW6} width={70} />
          <p className="text-center text-lg font-medium">Select Your Role and Sign Up</p>
        </div>
      </div>
    </main>
  );
}

export default HowItWorks;
