import { PropsWithChildren } from "react"

const Hashtag = ({ children }: PropsWithChildren) => {
  return <>
    <h5 className="text-blue-500 hover:text-blue-600 transition-colors font-extrabold text-[13px] tracking-wide">#{children}</h5>
  </>
}

export default Hashtag