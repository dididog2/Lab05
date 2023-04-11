
import didi2 from "../assets/didi2.jpg"

export default function About(){
  return(
      <div class="container mx-auto">
        <div class="flex justify-center pt-10">
          <img src={didi2} class="w-[370px] h-[493px] rounded-s-lg"/>
          <div class="min-w-[500px] bg-sky-50 rounded-r-lg" >
            <div class="py-6 px-3">
              <p class="font-bold text-4xl">學歷</p>
              <ul>
                <li class="text-base py-1 font-semibold text-gray-500">桃園市成功國小</li>
                <li class="text-base py-1 font-semibold text-gray-500">桃園市立文昌國中</li>
                <li class="text-base py-1 font-semibold text-gray-500">桃園市立武陵高中</li>
                <li class="text-base py-1 font-semibold text-gray-500 ">國立台灣大學</li>
              </ul>
            </div>
            <div class="py-6 px-3">
              <p class="font-semibold text-4xl">自我介紹</p>
              <p class="text-base py-1 font-semibold text-gray-500 w-96 leading-7">大家好，我是黃義翔，學號是B08502063，我很愛狗狗，圖片是家狗狗的照片，我不知道自我介紹要寫什麼，總之就先這樣。</p>
            </div>
          </div>
        </div>
      </div>
  )
}