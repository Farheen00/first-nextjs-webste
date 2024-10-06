import Image from "next/image"
export default function About() {
    return(
        <div className="text-center pt-6">
            <h1 className="text-2xl  text-amber-700 h-10 font-serif">About Us</h1>
            <p className="">FU Private Ltd is engaged in providing consultancy services to you.We beileve in excellence.</p>
            <div className=" align-middle mt-5  flex justify-center items-center md:shrink-0">  <Image src="/images.jpg" alt="pic"
      width={"500"} height={"500"}/>
    </div>
        </div>
    )
}