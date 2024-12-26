import React from 'react'
import Image from 'next/image'
import Image1 from '../../public/image1.jpg'
import Digital from "../../public/digital.jpg"
import Study from '../../public/study.jpg'
import Art from '../../public/art-of-learning.jpg'

export default function page(){
  return (
    <div>
      <div>
        <h1 className='font-bold text-4xl mt-10 ml-44'> The Digital Classroom: How Technology is Revolutionizing Education </h1>
        <p className=' font-semibold font-sans ml-44 text-sky-700'>Published On: October 26, 2023</p>
        <Image src={Digital} alt="image" className='w-full object-contain mt-10 px-40'/>
        <p className='text-center mt-8 px-60'>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>

      </div>

      <div>
        <h1 className='font-bold text-4xl mt-10 ml-44'> Mastering the Art of Learning: Secrets to Staying Ahead</h1>
        <p className='text-sky-700 font-semibold font-sans ml-44'>Published On: July 18, 2021</p>
        <Image src={Art} alt="image" className='w-full object-contain mt-10 px-40'/>
        <p className='text-center mt-8 px-60'>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>

      </div>

      <div>
        <h1 className='font-bold text-4xl mt-10 ml-44'> Learn Smarter, Not Harder: Top Tips to Boost Your Study Habits </h1>
        <p className='text-sky-700 font-semibold font-sans ml-44'>Published On: March 7, 2022</p>
        <Image src={Study} alt="image" className='w-full object-contain mt-10 px-40'/>
        <p className='text-center mt-8 px-60'>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>

      </div>

      <div>
        <h1 className='font-bold text-4xl mt-10 ml-44'> Creative Learning Strategies That Make Studying Fun and Effective </h1>
        <p className='text-sky-700 font-semibold font-sans ml-44'>Published On: December 14, 2024</p>
        <Image src={Image1} alt="image" className='w-full object-contain mt-10 px-40'/>
        <p className='text-center mt-8 px-60 mb-10'>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>

      </div>
    </div>
  )
}
