import { Separator } from "@/components/ui/separator"
import { HabotWhiteLogo } from "./Icons"
import LinkedinIcon from "../assets/Linkedin.svg"
import TwitterIcon from "../assets/Twitter.svg"
import FacebookIcon from "../assets/Facebook.svg"
import InstagramIcon from "../assets/Instagram.svg"

function Footer() {
  return (
    <main className="flex bg-[#123557] mt-52">
      
      <div className="container p-8">
      <Separator color="#000000" />
      <div className="flex p-8 justify-between">
      <span><HabotWhiteLogo /></span>

      <div> 
        <ul className="text-white font-light">
          <p className="font-medium pb-2">Company</p>
          <li>About</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div> 
        <ul className="text-white font-light">
          <p className="font-medium pb-2">Terms</p>
          <li>Data privacy</li>
          <li>Terms</li>
          <li>Accessibility</li>
        </ul>
      </div>

      <div> 
        <ul className="text-white font-light">
          <p className="font-medium pb-2">Related</p>
          <li>Find Buyer</li>
          <li>Feedback</li>
        </ul>
      </div>

      <div className="flex gap-8 items-start">
        <img className="w-5" src={LinkedinIcon} />
        <img className="w-5" src={TwitterIcon} />
        <img className="w-5" src={FacebookIcon} />
        <img className="w-5" src={InstagramIcon} />
      </div>
      </div>
      <Separator color="#000000" />
      </div>
    </main>
  )
}

export default Footer