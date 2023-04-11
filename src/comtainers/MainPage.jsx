import { useNavigate } from 'react-router-dom';
import didiImage from "../assets/didi.jpg"

export default function MainPage() {
  return (
    <div class="py-8 flex flex-col items-center ">
      <img class="rounded-full h-[360px] w-[493px]" src={didiImage}/>
      <p class='text-7xl mt-2 font-medium'>Welcome!</p>
      <p class=' text-3xl mt-3 text-gray-900/50'>這是我Lab05實驗的網站</p>
      <a href="/Lab05/about" className="rounded-full m-5 px-3 py-1 text-xl  font-semibold leading-6 text-gray-600 ring-2 ring-indigo-500/30 hover:ring-indigo-500/50 ">
        關於我<span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  )
}