import Image from "next/image";
import { client } from "@/sanity/lib/client"
import { urlFor } from '@/sanity/lib/image'
import Link from "next/link";
import Navbar from "./components/Navbar";

interface dataType {
  title: string,
  metadata: string,
  mainImage: string,
  publishedAt: number
}

const getData = async () => {
  const res = await client.fetch(`*[_type == "post"]{
    title,
    metadata,
    mainImage,
    publishedAt
    }`)

  return (res)

}

export default async function Home() {
  const data: dataType[] = await getData()

  return (
    <div>
      {
        data.map((post, index) => {
          return (
            <div key={index} className="flex justify-center items-center">
              <div className="w-96">
                <img src={urlFor(post.mainImage).url()} alt="image" className="w-full h-full object-contain" />
                <Link href="/Blog"><h1 className="text-center font-semibold font-sans hover:text-amber-800">{post.title}</h1></Link>
                <p className="mb-16 text-center font-sans italic"> Published At: {post.publishedAt}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}
