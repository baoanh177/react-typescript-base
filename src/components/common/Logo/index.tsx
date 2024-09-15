import logo from "@/assets/images/logo.svg"
import { Image } from "antd"

const Logo = () => {
  return <>
    <Image src={logo} preview={false}/>
  </>
}

export default Logo